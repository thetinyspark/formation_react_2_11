import { useState } from 'react';
import CatalogType from '../../types/CatalogType';
import CatalogUtils from '../../utils/CatalogUtils';

export default function CatalogFilter({products, onChangePlatform}){

    const platforms = CatalogUtils.getUniquePlatformsFromProducts(products);

    return (
        <div>
            <select onChange={
                (event)=>{
                    onChangePlatform(event.target.value);
                }
            }>
            {
                platforms.map( 
                    (platform, index)=>{
                        return (
                            <option value={platform} key={index}>{platform}</option>
                        )
                    }
                )
            }
            </select>
        </div>
    )
}

CatalogFilter.propTypes = {
    products: CatalogType
};

