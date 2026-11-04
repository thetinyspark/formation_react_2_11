import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AppNav from "../components/comp/AppNav";
import { MemoryRouter } from "react-router-dom";

describe('AppNav test suite', 
    ()=>{
        it(`should contains 'Accueil', 'Boutique' and 'Panier'`, 
            ()=>{
                render(
                    <MemoryRouter>
                        <AppNav />
                    </MemoryRouter>
                ); 

                expect(screen.getByText('Accueil')).toBeInTheDocument();
                expect(screen.getByText('Boutique')).toBeInTheDocument();
                expect(screen.getByText('Panier')).toBeInTheDocument();
            }
        );
    }
)