import ProductCard from '../comp/ProductCard';
import useGameStore from '../hooks/useGameStore';

export default function Cart(){
    const {cart, removeFromCart, getTotalPriceHT, getTotalPriceTTC} = useGameStore();
    return <>
            {
                cart.map( 
                    (product, index)=>{
                        return <div key={index}>
                            <ProductCard product={product} detailed={false}/>
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

