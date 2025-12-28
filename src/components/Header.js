import { useEffect, useState, useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login")
    const checkOnline = useOnlineStatus()

    const { loggedInUser } = useContext(UserContext)

    // useEffect(() => {
    //     // console.log("run use effect")
    // }, [])

    // selector
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)
    return (
        <div className=" border-black border-2 p-4 m-4 flex justify-between items-center shadow-2xl flex-wrap">
            <div className="w-full flex items-center justify-center sm:w-fit">
                <Link to="/"><img className="w-20 sm:w-30 " src={LOGO_URL} /></Link>
            </div>
            <div className="">
                <ul className="flex justify-between gap-2 sm:gap-10 flex-wrap">
                    <li className="text-lg"><Link to="/">Home</Link></li>
                    <li className="text-lg"><Link to="/about">About Us</Link></li>
                    <li className="text-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="text-lg"><Link to="/contact">Contact Us</Link></li>
                    <li className="text-lg"><Link to="/cart">Cart - ({cartItems.length})</Link></li>
                    <li className="text-lg"><button className="login-btn cursor-pointer" onClick={() => {
                        btnNameReact === "Login" ?
                            setbtnNameReact("Logout") :
                            setbtnNameReact("Login")
                    }} >{btnNameReact}</button></li>
                    <li className="text-lg" ><Link to="/test">Test {loggedInUser}</Link></li>
                    <li>{checkOnline ? "🟢" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header