import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageHeader from "../components/comp/PageHeader";
import { MemoryRouter } from "react-router-dom";

describe('PageHeader test suite', 
    ()=>{
        it('should have a title (MICROMANIA by default)', 
            ()=>{
                render(
                    <MemoryRouter>
                        <PageHeader />
                    </MemoryRouter>
                ); 

                expect(screen.getByText('MICROMANIA')).toBeInTheDocument();
            }
        );

        it('should have a specific title', 
            ()=>{
                const myTitle = 'my_title_'+Math.round(Math.random()*1000);
                render(
                    <PageHeader title={myTitle}/>
                ); 

                expect(screen.getByText(myTitle)).toBeInTheDocument();
            }
        );
    }
)