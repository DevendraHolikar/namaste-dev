import { useContext, useEffect, useState } from "react"
import UserContext from "../utils/UserContext"

const UserCard = (props) => {

    const { sendUserCard } = props
    const { password, userEmail, usercode } = sendUserCard
    const { loggedInUser, setUserName } = useContext(UserContext)

    // console.log(sendUserCard)

    return (
        <div onClick={() => {
            setUserName(userEmail)
        }} className="border-2 border-black cursor-pointer hover:shadow-xl/20 w-100 max-w-72 sm:max-w-75 h-auto min-h-20">
            <h4 className="py-2 px-2 text-lg font-bold capitalize">Email : {userEmail}</h4>
            <h4 className="py-2 px-2 text-sd  capitalize">Password : {password}</h4>
        </div>
    )
}

export default UserCard