import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client"; // createRoot might not be on the default export
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import Test from "./components/Test";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {

    const [userName, setUserName] = useState()

    useEffect(()=>{
        const data ={
            names : "Devendra"
        }
        setUserName(data.names)
    },[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="container m-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>
            }
            , {
                path: "/contact",
                element: <Contact></Contact>
            }, {
                path: "/cart",
                element: <Cart></Cart>
            }, {
                path: "/grocery",
                element: <Suspense fallback={<h1>loading...</h1>} ><Grocery></Grocery></Suspense> 
            }, {
                path: "/test",
                element: <Test></Test>
            },{
                path: "/restaurens/:resId",
                element: <RestaurentMenu></RestaurentMenu>
            }
        ],
        errorElement: <Error></Error>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)