import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants"

const useRestaurentMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, []);

  
    const fetchMenu = async () => {
        const response = await fetch(MENU_API + resId + "/menu")
        const data = await response.json();
        setresInfo(data)
        // console.log(data)
    };

    return resInfo
}

export default useRestaurentMenu