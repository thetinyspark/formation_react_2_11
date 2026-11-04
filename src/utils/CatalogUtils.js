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
}