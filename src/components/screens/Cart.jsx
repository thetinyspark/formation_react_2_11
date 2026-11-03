import ProductCard from '../comp/ProductCard';
import useGameStore from '../hooks/useGameStore';

export default function Cart(){
    const {cart} = useGameStore();
    return cart.map( 
                (product)=>{
                    return <div>
                        <ProductCard product={product} detailed={false} />
                        <button onClick={
                            (event)=>{
                                /*remplir  ce bout de code */
                            }
                         }>X</button>
                    </div>
                }
            );
}

