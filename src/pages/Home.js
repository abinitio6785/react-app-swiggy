// import React from 'react'
// import React from 'react'
import Header from '../Componants/Header'
import Footer from '../Componants/Footer'
import { Outlet } from 'react-router-dom'
import UserContext from '../helper/UserContext'
import { useState } from 'react'
const Home = () => {
    const [user, setUser] = useState({
        name:"samrood",
        email:"samruOffical@gmail.com"
    })
    const abc = localStorage.getItem("hai")
    console.log(abc);
    return (
        <>
        <UserContext.Provider value={{user:user,setUser}}>
            <Header />
            <Outlet />
            <Footer />
            </UserContext.Provider>
        </>
    )
}
export default Home;