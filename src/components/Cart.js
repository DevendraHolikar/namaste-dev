import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice"



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="p-4">
            <div className="pt-10 font-bold text-4xl text-center pb-8">Cart Page</div>
            <button className="mb-8 w-full float-end sm:w-fit px-4 py-2 text-base p-1.5 bg-amber-600 text-white border-2 border-black cursor-pointer"
                onClick={handleClearCart} >Clear</button>
            {cartItems.length === 0 && <h1 className="pt-10 pb-10 font-bold text-1xl text-center ">Cart is Empty</h1>}
            <div className="p-4">
                {cartItems.map((menuData) => (


                    <div key={menuData.itemID} className="mb-4 flex gap-4 w-full flex-col sm:flex-row  h-auto min-h-60 text-base  text-black border-2 border-black">
                        <div className="flex-1">
                            <img className="w-full h-auto max-h-60 object-cover" src={menuData.imageUrl} />
                        </div>

                        <div className="flex-3">
                            <h3 className="py-2 px-2 text-2xl font-bold capitalize">{menuData.restaurantName}</h3>
                            <h4 className="px-2 text-1xl font-bold capitalize">{menuData.itemName}</h4>
                            <h4 className="px-2 text-1xl capitalize">{menuData.itemDescription}</h4>
                            <h4 className="py-2 px-2 text-lg font-bold capitalize">₹ {menuData.itemPrice}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Cart