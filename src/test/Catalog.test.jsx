import { render, screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import GameProvider from "../components/contexts/GameProvider";
import Catalog from "../components/screens/Catalog";
import CATALOG_MOCK from "../data/CATALOG_MOCK";
import userEvent from "@testing-library/user-event";

async function waitFor(delayInMs){
    return new Promise(
        (resolver, rejecter)=>{
            setTimeout( resolver, delayInMs)
        }
    );
}

describe('Catalog test suite', 
    ()=>{

        beforeAll(
            ()=>{
                vi.stubGlobal(
                    'fetch', 
                    vi.fn().mockResolvedValue(
                        {
                            json: ()=>{
                                return Promise.resolve(CATALOG_MOCK);
                            }
                        }
                    )
                )
            }
        ); 

        afterAll(
            ()=>{
                vi.unstubAllGlobals();
            }
        )

        it('should render all products', 
            async ()=>{
                render(
                    <MemoryRouter>
                        <GameProvider>
                            <Catalog />
                        </GameProvider>
                    </MemoryRouter>
                ); 

                await waitFor(1);

                CATALOG_MOCK.forEach(
                    (product)=>{
                        expect(screen.getByText(product.name)).toBeInTheDocument();
                    }
                );
            }
        );

        it('should filter games by platform', 
            async ()=>{

                const user = userEvent.setup();
                const currentPlatform = CATALOG_MOCK[0].platform;
                
                render(
                    <MemoryRouter>
                        <GameProvider>
                            <Catalog />
                        </GameProvider>
                    </MemoryRouter>
                ); 

                await waitFor(1);
                await user.selectOptions( screen.getByRole('combobox'), currentPlatform );
                await waitFor(1);


                CATALOG_MOCK.forEach(
                    (product)=>{
                        if( product.platform == currentPlatform){
                            expect(screen.getByText(product.name)).toBeInTheDocument();
                        }
                        else{
                            expect(screen.queryByText(product.name)).not.toBeInTheDocument();
                        }
                    }
                );
            }
        );

        
    }
)