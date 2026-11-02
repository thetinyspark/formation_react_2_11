import CatalogType from '../../types/CatalogType';
import CatalogUtils from '../../utils/CatalogUtils';

export default function CatalogFilter({products}){
    return (
        <div>
            <select>
            {
                CatalogUtils.getUniquePlatformsFromProducts(products).map( 
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

