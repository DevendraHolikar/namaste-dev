import { useContext} from "react"
import UserContext from "../utils/UserContext"

const RestaurentCard = (props) => {

    // console.log("RestaurentCard",props)

    const { resData } = props
    const { restaurantName, imageUrl, itemDescription, itemID, itemName, itemPrice, restaurantID } = resData

    const {loggedInUser} = useContext(UserContext)

    return (

         <div className="hover:shadow-xl/20 w-100 max-w-72 sm:max-w-75 h-auto min-h-40 text-base  text-black border-2 border-black cursor-pointer">
           <img alt={restaurantName} className="w-full h-auto max-h-40 object-cover" src={imageUrl} />
            <h3 className="py-2 px-2 text-xl font-bold capitalize">{restaurantName}</h3>
            <h4 className="px-2 text-1xl font-bold capitalize">{itemName}</h4>
            <h4 className="px-2 text-sm capitalize">{itemDescription}</h4>
            <h4 className="py-2 px-2 text-1xl font-bold capitalize">₹ {itemPrice}</h4>

            {/* <h4 className="text-1xl font-bold capitalize">{restaurantID}</h4> */}
            {/* <h4 className="text-1xl capitalize">{itemID}</h4> */}
            {/* <h5 className="text-1xl font-bold capitalize">{loggedInUser}</h5> */}
        </div>
    )
}




// higher order Component
// input - RestaurentCard => RestaurentCardPromoted

export const withPromotedLabel = (RestaurentCard) =>{
    return(props)=>{
        return(
            <div className="relative">
                <label className="absolute left-0 bg-gray-600 text-white p-1 text-sm ">Promoted</label>
                <RestaurentCard {...props}></RestaurentCard>
            </div>
        )
    }
}

export default RestaurentCard
