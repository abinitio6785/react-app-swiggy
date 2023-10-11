import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { imagelink } from "../../constants"
import { getRestaurentDetails } from "../helper/restaurent_helper"
import useRestaurant from "../helper/useRestaurant"

RestaurentMenu = () => {
  let { id } = useParams()
  const Restaurant = useRestaurant(id)
  console.log(Restaurant);
  
  return (
    <>
      <div className="fds">
        <div>
          <h1>{Restaurant?.name}</h1>
          <h1>{"Restuar id :" + id}</h1>
          <img src={imagelink + "/" + Restaurant?.cloudinaryImageId}></img>
          <h3>{Restaurant?.area}</h3>
          <h3>{Restaurant?.city}</h3>
          <h3>{Restaurant?.costForTwoMsg}</h3>
          <h3>{Restaurant?.avgRating} stars</h3>
        </div>
        {/* <div>
            <ul className="list-disc" >
          {Object.values(Restaurant?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
            </div> */}
      </div>
    </>
  )
}
export default RestaurentMenu;