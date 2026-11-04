import { describe, expect, it, test } from "vitest";
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

        it(`should return the default platform if products list is empty`, 
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

        // on décrit plein de cas de tests et on enrichit notre algo au fur et à mesure
        describe('filter product by name test suite', 
            ()=>{
                [
                    {
                        id: 1,
                        search: 'Ma', expected: [{name: 'Mario'}],
                        products: [{name: 'Mario'}, {name: 'Call of'},{name: 'Tetris'}], 
                    },
                    {
                        id: 2,
                        search: 'ma', expected: [{name: 'Mario'}],
                        products: [{name: 'Mario'}, {name: 'Call of'},{name: 'Tetris'}], 
                    },
                    {
                        id: 3,
                        search: 'o', expected: [{name: 'Mario'}, {name: 'Call of'}],
                        products: [{name: 'Mario'}, {name: 'Call of'},{name: 'Tetris'}], 
                    },
                    {
                        id: 4,
                        search: 'O', expected: [{name: 'Mario'}, {name: 'Call of'}],
                        products: [{name: 'Mario'}, {name: 'Call of'},{name: 'Tetris'}], 
                    },
                ].forEach( 
                    (testCase)=>{
                        it(`should filter products by their name ${testCase.id}`, 
                            ()=>{
                                const results = CatalogUtils.filterProductsByName(
                                    testCase.products,
                                    testCase.search,
                                ); 
                                expect(results).toEqual(testCase.expected);
                            }
                        );
                    }
                );
            }
        )
       
        describe('filter products by platform test suite', 
            ()=>{

                [
                    {
                        id: 1,
                        search: 'PC', 
                        products: [{platform: 'PC'}, {platform: 'NES'},{platform: 'SWITCH'}], 
                        expected: [{platform: 'PC'}],
                    },
                    {
                        id: 2,
                        search: 'NES', 
                        products: [{platform: 'NES'}, {platform: 'NES'},{platform: 'SWITCH'}], 
                        expected: [{platform: 'NES'}, {platform: 'NES'}],
                    },
                    {
                        id: 3,
                        search: 'PS5', 
                        products: [{platform: 'PC'}, {platform: 'NES'},{platform: 'SWITCH'}],  
                        expected: [],
                    },
                    {
                        id: 4,
                        search: CatalogUtils.DEFAULT_PLATFORM, 
                        products: [{platform: 'PC'}, {platform: 'NES'},{platform: 'SWITCH'}],  
                        expected: [{platform: 'PC'}, {platform: 'NES'},{platform: 'SWITCH'}],  
                    },
                ].forEach( 
                    (testCase)=>{
                        it(`should filter products by their platform ${testCase.id}`, 
                            ()=>{
                                const results = CatalogUtils.filterProductsByPlatform(
                                    testCase.products,
                                    testCase.search,
                                ); 
                                expect(results).toEqual(testCase.expected);
                            }
                        );
                    }
                );
            }
        )
        
        describe('filter products by prices', 
            ()=>{

                [
                    {
                        id: 1,
                        priceMin: 0, priceMax: 100, 
                        products: [{name: 'A', price: 25},{name: 'B', price: 0}, {name: 'C', price: 100}], 
                        expected: [{name: 'A', price: 25},{name: 'B', price: 0}, {name: 'C', price: 100}], 
                    }, 
                    {
                        id: 2,
                        priceMin: 10, priceMax: 100, 
                        products: [{name: 'A', price: 25},{name: 'B', price: 0}, {name: 'C', price: 100}], 
                        expected: [{name: 'A', price: 25}, {name: 'C', price: 100}], 
                    }, 
                    {
                        id: 3,
                        priceMin: 10, priceMax: 50, 
                        products: [{name: 'A', price: 25},{name: 'B', price: 0}, {name: 'C', price: 100}], 
                        expected: [{name: 'A', price: 25}], 
                    }, 
        ].forEach( 
            (testCase)=>{
                it(`should filter products by their price ${testCase.id}`, 
                    ()=>{
                        const results = CatalogUtils.filterProductsByPrice(
                            testCase.products,
                            testCase.priceMin,
                            testCase.priceMax,
                        ); 
                        expect(results).toEqual(testCase.expected);
                    }
                    );
                }
            );
            }
        )

        describe( 'filter products by all filters combined test suite', 
            ()=>{
                [
                    {
                        id: 1,
                        priceMin: 0, priceMax: 100, name : 'ma', platform: 'PC',
                        products: [
                            {
                                name: 'Mario', 
                                price: 25, 
                                platform: 'PC'
                            },
                            {
                                name: 'Mario', 
                                price: 101, 
                                platform: 'PC'
                            },
                            {
                                name: 'Mario', 
                                price: -10, 
                                platform: 'PC'
                            },
                            {
                                name: 'Mario', 
                                price: 25, 
                                platform: 'NES'
                            },
                            {
                                name: 'Tetris', 
                                price: 25, 
                                platform: 'PC'
                            },
                        ], 
                        expected: [
                            {
                                name: 'Mario', 
                                price: 25, 
                                platform: 'PC'
                            }
                        ], 
                    }
                ].forEach( 
                    (testCase)=>{
                        it('should combine all filters', 
                            ()=>{
                                const results = CatalogUtils.filterProducts(
                                    testCase.products, 
                                    testCase.name,
                                    testCase.platform,
                                    testCase.priceMin,
                                    testCase.priceMax,
                                ); 

                                expect(results).toEqual(testCase.expected);
                            }
                        )
                    }
                )
            }
        )
    }
)