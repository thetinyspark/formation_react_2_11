import ProductCard from '../comp/ProductCard';
import useGameStore from '../hooks/useGameStore';
import useReduxStore from '../hooks/useReduxStore';

export default function Cart(){
    // const {cart, removeFromCart, getTotalPriceHT, getTotalPriceTTC} = useGameStore();
    const {cart, removeFromCart, getTotalPriceHT, getTotalPriceTTC} = useReduxStore();
    return <>
            {
                cart.map( 
                    (product)=>{
                        return <div>
                            <ProductCard product={product} detailed={false} />
                            <button onClick={
                                (event)=>{
                                    removeFromCart(product);
                                }
                            }>X</button>
                        </div>
                    }
                )
            }
            <p>Total HT: {getTotalPriceHT()}</p>
            <p>Total TTC: {getTotalPriceTTC()}</p>
        </>
}

