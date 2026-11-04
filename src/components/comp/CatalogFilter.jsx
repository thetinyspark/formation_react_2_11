import CatalogType from '../../types/CatalogType';
import CatalogUtils from '../../utils/CatalogUtils';

export default function CatalogFilter(
    {
        products, 
        onChangePlatform, 
        onChangePriceMin,
        onChangePriceMax,
        onChangeName,
    }
){

    const platforms = CatalogUtils.getUniquePlatformsFromProducts(products);

    return (
        <div>
            <select data-testid="platform" onChange={
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
            <br/>

            <label>Nom: </label>
            <input type="text" data-testid="pname" onChange={(e)=> onChangeName(e.target.value)}/>
            <br/>

            <label>Prix min: </label>
            <input type="number" data-testid="pricemin" onChange={(e)=> onChangePriceMin(e.target.value)}/>
            <br/>
            <label>Prix max: </label>
            <input type="number" data-testid="pricemax" onChange={(e)=> onChangePriceMax(e.target.value)}/>
            <br/>
        </div>
    )
}

CatalogFilter.propTypes = {
    products: CatalogType
};

