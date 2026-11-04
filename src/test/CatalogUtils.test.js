import { describe, expect, it } from "vitest";
import CATALOG_MOCK from '../data/CATALOG_MOCK';
import CatalogUtils from "../utils/CatalogUtils";

describe('CatalogUtils test suite', 
    ()=>{

        it(`should return the unique list of platforms + the default platform`, 
            ()=>{
                const products = [...CATALOG_MOCK];
                const results = CatalogUtils.getUniquePlatformsFromProducts(products); 
                const expected = [CatalogUtils.DEFAULT_PLATFORM,'PC', 'Gameboy', 'NES'];
                expect(results).toEqual(expected);
            }
        );

        it(`should return the default platform if products listis empty`, 
            ()=>{
                const products = [];
                const results = CatalogUtils.getUniquePlatformsFromProducts(products); 
                const expected = [CatalogUtils.DEFAULT_PLATFORM];
                expect(results).toEqual(expected);
            }
        );

        it(`should return the list of all platforms according to product list`, 
            ()=>{
                const results = CatalogUtils.getUniquePlatformsFromProducts(CATALOG_MOCK); 
                const expected = [CatalogUtils.DEFAULT_PLATFORM,'PC', 'Gameboy', 'NES'];
                expect(results).toEqual(expected);
            }
        );

        it(`should return the list of all platforms according to product list without duplication`, 
            ()=>{
                const products = [...CATALOG_MOCK];

                // on pousse dix fois un duplicata au hasard dans la liste
                let i = 10;
                while( --i > -1){
                    const random = Math.floor(Math.random()*CATALOG_MOCK.length);
                    products.push(CATALOG_MOCK[random]);
                }

                const results = CatalogUtils.getUniquePlatformsFromProducts(products); 
                const expected = [CatalogUtils.DEFAULT_PLATFORM,'PC', 'Gameboy', 'NES'];
                expect(results).toEqual(expected);
            }
        );

       
    }
)