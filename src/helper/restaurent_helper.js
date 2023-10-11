import { restaurant_link, link } from "../../constants";

export const getRestuarent = () => {
    return new Promise(async (resolve, reject) => {
        let data = await fetch(link)
        let json = await data.json()
        console.log(json?.data?.cards[2]?.data?.data?.cards);
        resolve(json?.data?.cards[2]?.data?.data?.cards)
    })
}

export const getRestaurentDetails = (id) => {
    return new Promise(async (resolve, reject) => {
        let data = await fetch(restaurant_link + "=" + id)
        let json = await data.json()
        console.log("ffdsdsfsdfsdfsfddsffdsfdfsdsd");
        resolve(json)
    })
}

export const filterData = (searchText, Restaurants) => {
    let data = Restaurants.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    }) 
    return (data)
}

