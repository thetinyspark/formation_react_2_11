import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../comp/ProductCard";

export default function ProductDetailedPage(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect( 

        ()=>{
            const getDataFormUrl = async (url) =>{
                try{
                    const response = await window.fetch(url);
                    const data = await response.json();
                    return data;
                }
                catch(error){
                    console.error(error);
                }
            }

            const refresh = async()=>{
                try{
                    const catalogData = await getDataFormUrl("/assets/catalog.json");
                    const product = catalogData.find( 
                        (product)=>{
                            return product.id == parseInt(id);
                        }
                    ) || null; // empêche d'avoir undefined comme valeur, on met null à la place

                    setProduct(product);
                }
                catch(error){ 
                    console.error(error) 
                }
            }

            refresh();
        }, 
        []
    )

    return product && <ProductCard product={product} detailed={true} />
}