import React, { useContext, useEffect, useState } from 'react'
import ShimmerUi from './ShimmerUi';
import RestuarentCard from './RestaurentCard';
import {filterData, getRestuarent} from '../helper/restaurent_helper';
import { Link } from 'react-router-dom';
import useOnline from '../helper/useOnline';
import UserContext from '../helper/UserContext';
const Body = () => {
    const [Allrestaurant, setAllRestuarent] = useState([])
    const [filterRestaurant, setfilterRestuarent] = useState([])
    const [searchText, setSearchText] = useState("")

    const {user,setUser} = useContext(UserContext)
    console.log("===========================");
    console.log(filterRestaurant);
    console.log("===========================");
    useEffect(() => {
        getRestuarent().then((response) => {
            setAllRestuarent(response)
            setfilterRestuarent(response)
        })
    }, [])
    const isOnline = useOnline()
    if(!isOnline){
        return <h1>No internet connection</h1>
    }
    if (!Allrestaurant) {
        return null;
    }
    if (!filterRestaurant?.length === 0) {
        return <h1>No Restuarent match your filter</h1>
    }
    return Allrestaurant.length === 0 ? (<ShimmerUi />) : (
        <>
            <div className='m-5 '>
                <div className=' my-5 p-5 bg-pink-50 m-5 '>
                    <input type="text" className='m-2 p-2 focus:bg-green-50'
                        placeholder='Search'
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button className='p-2 m-3 bg-slate-700 text-white rounded-md hover:bg-black' onClick={async () => {
                        let filteredData = await filterData(searchText, Allrestaurant)
                        setfilterRestuarent(filteredData)
                    }}>Search</button>
                    
                    <input type="text" className='m-2 p-2 focus:bg-green-50'
                        placeholder='Search'
                        value={user.name}
                        onChange={(e) => {
                            setUser({...user,name :e.target.value})
                        }}
                    />

                    
                </div>
                <div className='bg-green-50 flex flex-wrap justify-center '>
                    {filterRestaurant.map((res) => (
                        <Link to={"/RestaurentMenu/" + res.data.id} key={res.data.id}>
                            <RestuarentCard {...res.data} /></Link>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default Body