import { useEffect, useState } from "react"
import { getRestaurentDetails } from "./restaurent_helper"


const useRestaurant =(resId) => {
    console.log("use hook calleddddddddddddddd");
    console.log(resId);
    const [Restaurant, setRestaurant] = useState(null)
    useEffect(() => {
        console.log("inside use effect..");
        getRestaurentDetails(resId).then((response) => {
            setRestaurant(response.data)
        })
    }, [])
    console.log(Restaurant);
    return Restaurant;
}

export default useRestaurant

