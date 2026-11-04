import '@testing-library/jest-dom/vitest';
import { describe, expect, it } from 'vitest';
// on décrit une suite de tests
describe(
    'setup', 
    ()=>{
        // on décrit un premier test basique qui doit s'éxécuter sans problème
        it('should be true', 
            ()=>{
                expect(true).toBe(true);
            }
        );
    }
)