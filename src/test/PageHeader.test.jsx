import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageHeader from "../components/comp/PageHeader";

describe('PageHeader test suite', 
    ()=>{
        it('should have a title', 
            ()=>{
                render(
                    <PageHeader />
                ); 

                expect(screen.getByText('MICROMANIA')).toBeInTheDocument();
            }
        );
    }
)