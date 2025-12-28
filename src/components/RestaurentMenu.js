import Shimmer from "./Shimmer"
import useRestaurentMenu from "../utils/useRestaurentMenu"
import { useParams } from "react-router"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurentMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurentMenu(resId)

    // console.log(resInfo)


    const dispatch = useDispatch();
    const handleAddItem = (menuData) => {
        dispatch(addItem(menuData))
    }

    if (resInfo === null) return <Shimmer></Shimmer>;

    return (

        <div className="p-4">
            {resInfo.map((menuData) => (


                <div key={menuData.itemID} className="mb-4 flex gap-4 w-full flex-col sm:flex-row  h-auto min-h-60 text-base  text-black border-2 border-black">
                    <div className="flex-1">
                        <img className="w-full h-auto max-h-60 object-cover" src={menuData.imageUrl} />
                    </div>

                    <div className="flex-3">
                        <h3 className="py-2 px-2 text-2xl font-bold capitalize">{menuData.restaurantName}</h3>
                        <h4 className="px-2 text-1xl font-bold capitalize">{menuData.itemName}</h4>
                        <h4 className="px-2 text-1xl capitalize">{menuData.itemDescription}</h4>
                        <h4 className="py-2 px-2 text-lg font-bold capitalize">₹ {menuData.itemPrice}</h4>
                        <button onClick={() => handleAddItem(menuData)} className="w-full sm:w-fit pl-2 pr-2 text-base p-1.5 bg-amber-600 text-white border-2 border-black cursor-pointer">Add To Cart</button>
                        {/* <h4 className="text-1xl font-bold capitalize">{restaurantID}</h4> */}
                        {/* <h4 className="text-1xl capitalize">{itemID}</h4> */}
                        {/* <h5 className="text-1xl font-bold capitalize">{loggedInUser}</h5> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RestaurentMenu 