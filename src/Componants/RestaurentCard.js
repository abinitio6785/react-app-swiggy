import { imagelink } from "../../constants";

const RestuarentCard = (props) => {
    const data = {
        name:"ssss",
        age:"21"
    }
    localStorage.setItem("hai",JSON.stringify(data))
    return (
        <div className= 'w-[267px] p-3 bg-gray-200 m-6 ml-3 rounded-md h-[21rem] '>
            <img src={imagelink + "/" + props.cloudinaryImageId}></img>
            <h1 className="text-lg font-bold whitespace-normal">{props.name}</h1>
            <h4 className='truncate'>{props.cuisines.join(",")}</h4>
            <h4>{props.avgRating}</h4>
        </div>
    )
}

export default RestuarentCard; 