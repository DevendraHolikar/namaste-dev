import { useRouteError } from "react-router"

const Error = () => {
    const err = useRouteError()
    return (
        <div>
            <div className="pt-10 font-bold text-4xl text-center" >Error Page</div>
            <h1 className="pt-10 font-bold text-4xl text-center">{err.status}:{err.statusText} </h1>
        </div>

    )
}

export default Error