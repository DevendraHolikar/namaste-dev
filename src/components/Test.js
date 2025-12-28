import { useContext, useEffect, useState } from "react"
import { USER_API } from "../utils/constants"
import UserCard from "./UserCard"
import Shimmer from "./Shimmer"

const Test = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        fecthUserData()
    }, [])

    const fecthUserData = async () => {
        const data = await fetch(USER_API)
        const userJsonData = await data.json();
        setUserData(userJsonData)
        // console.log(userJsonData)
    }


    return userData.length === 0 ? (<Shimmer></Shimmer>) : (

        <div>
            <h1 className="pt-10 pb-10 font-bold text-4xl text-center">Test Page</h1>
            <div>
                {
                    <div className="flex gap-4 flex-wrap p-4 ">
                        {
                            userData.map((userValue) => 
                             (<UserCard key={userValue.usercode} sendUserCard = {userValue}></UserCard>) 
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Test