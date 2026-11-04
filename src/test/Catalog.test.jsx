import { render, screen } from "@testing-library/react";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
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
                );
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
                await user.selectOptions( screen.getByTestId("platform"), currentPlatform );
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

        it('should filter games by price', 
            async ()=>{

                const priceMin = Math.round(Math.random() * 20);
                const priceMax = priceMin + Math.round(Math.random() * 100);
                
                render(
                    <MemoryRouter>
                        <GameProvider>
                            <Catalog />
                        </GameProvider>
                    </MemoryRouter>
                ); 

                await waitFor(1);
                const input1 = await screen.getByTestId("pricemin");
                const input2 = await screen.getByTestId("pricemax");
                userEvent.clear(input1);
                userEvent.clear(input2);
                userEvent.type(input1, priceMin.toString());
                userEvent.type(input2, priceMax.toString());
                await waitFor(1);


                CATALOG_MOCK.forEach(
                    async (product)=>{
                        if( product.price >= priceMin && product.price <= priceMax){
                            const element = screen.getByTestId(`product_${product.id}`);
                            expect(element).toBeInTheDocument();
                        }
                    }
                );
            }
        );

        it('should filter games by name', 
            async ()=>{
                render(
                    <MemoryRouter>
                        <GameProvider>
                            <Catalog />
                        </GameProvider>
                    </MemoryRouter>
                ); 

                await waitFor(1);
                const input1 = screen.getByTestId("pname");

                // attention à ne pas faire de clear si l'input n'est pas
                // rempli au préalable ça jette une erreur 
                // userEvent.clear(input1);
                userEvent.type(input1, "Ma");
                await waitFor(1);


                CATALOG_MOCK.forEach(
                    async (product)=>{
                        if( product.name.includes("Ma") ){
                            expect(screen.getByText(product.name)).toBeInTheDocument();
                        }
                    }
                );
            }
        );

        
    }
)