export default class CatalogUtils{

    static DEFAULT_PLATFORM = "All";

    static getUniquePlatformsFromProducts(products){
        // ici on retourne un tableau de plateformes 
        // crée à partir de la liste des produits
        let platforms = products.map( 
            (product) => {
                return product.platform;
            }
        ); 
        // Set permet de trier les doublons
        // Array.from permet de créer un tableau à partir du Set
        const results = Array.from( new Set( platforms ) );
        results.unshift(this.DEFAULT_PLATFORM);
        return results;
    }

    static filterProductsByName(products, search){
        return products.filter(
                (product)=>{
                    return product.name.toLowerCase().includes(search.toLowerCase());
                }
        ); 
    }

    static filterProductsByPrice(products, priceMin = -Infinity, priceMax = Infinity){
        return products.filter(
                (product)=>{
                    return product.price >= priceMin && product.price <= priceMax;
                }
        ); 
    }

    static filterProductsByPlatform(products, platform){
        if( platform === this.DEFAULT_PLATFORM)
            return products;

        return products.filter(
            (product)=>{
                return product.platform.includes(platform);
            }
        );
    }

    static filterProducts(products, name, platform, priceMin, priceMax){
        let filtered = this.filterProductsByName(products, name); 
        filtered = this.filterProductsByPlatform(filtered, platform); 
        filtered = this.filterProductsByPrice(filtered, priceMin, priceMax); 
        return filtered;
    }
}