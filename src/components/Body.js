import RestaurentCard, { withPromotedLabel } from "./RestaurentCard"
import { useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import { MENU_API } from "../utils/constants"
import UserContext from "../utils/UserContext"

const Body = () => {

    const [listOfRestaurents, setListOfRestaurents] = useState([]) // not modify in filter
    const [filteredRestaurents, setfilteredRestaurents] = useState([]) // filter modify
    const [searchText, setSearchText] = useState("")

    const {loggedInUser, setUserName} = useContext(UserContext)
    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard)

    // console.log(filteredRestaurents)

    useEffect(() => {
        fetchData()
    }, [])

   

    const fetchData = async () => {


        const data = await fetch(MENU_API + "items")
        const json = await data.json();
        console.log(json)

        setListOfRestaurents(json)
        setfilteredRestaurents(json)
        
        // optional changing
        // setListOfRestaurents(json?.data?.cards?.slice(3, 10))
        // setfilteredRestaurents(json?.data?.cards?.slice(3, 10))
    }

    return listOfRestaurents.length === 0 ? (<Shimmer></Shimmer>) : (
        <div className="body">
            <div className="p-4  flex justify-between items-center flex-wrap gap-2">

                {<div className="w-full sm:w-fit justify-between sm:gap-4 flex flex-wrap">
                    <input placeholder="Restaurent Name" type="text" className="p-4 h-9 border-2 border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="pl-2 pr-2 text-base p-1.5 bg-amber-600 text-white border-2 border-black cursor-pointer" onClick={() => {
                        // console.log(searchText)
                        const filteredRestaurents = listOfRestaurents.filter((res) =>
                            res?.restaurantName.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredRestaurents(filteredRestaurents)

                    }} >Search</button>
                </div>}

                {
                    <div>
                        <input placeholder="Context Value" type="text" 
                        className="p-4 h-9 border-2 border-black" 
                        value={loggedInUser} onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                    </div>
                }

                {<button className="w-full sm:w-fit pl-2 pr-2 text-base p-1.5 bg-amber-600 text-white border-2 border-black cursor-pointer" onClick={() => {
                    const filteredList = listOfRestaurents.filter((res) => res?.restaurantID > 20);
                    setfilteredRestaurents(filteredList)
                }}>Top Rated Restaurents</button>
                }


            </div>
            <div className="flex gap-4 flex-wrap p-4 ">
                {
                    filteredRestaurents.length === 0 ? (
                        <div className="w-full pt-10 font-bold text-2xl text-center">No results found</div>
                    ) :

                        (
                            filteredRestaurents.map((restaurent) =>
                                <Link key={restaurent.itemID} to={"/restaurens/" + restaurent.restaurantID}>
                                    {
                                        restaurent.itemID > 40 ? (<RestaurentCardPromoted resData={restaurent} ></RestaurentCardPromoted>) :
                                            <RestaurentCard resData={restaurent} />
                                    }

                                </Link>
                            )
                        )

                }

            </div>
        </div>
    )
}

export default Body