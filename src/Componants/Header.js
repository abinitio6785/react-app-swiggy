import logo from "../assets/images/foodvilla.png"
import { Link } from "react-router-dom"
import {useContext} from "react"
import UserContext from "../helper/UserContext"
const Title = () => {
    return (
        <a href="/">
            <img className="h-28 p-2" alt="logo" src={logo} ></img>
        </a>)
}

const Header = () => {
    const {user} = useContext(UserContext)

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title />
            <div>
                <ul className="flex pt-10">
                    <Link className="px-2" to="/"><li>Home</li></Link>
                    <Link className="px-2" to="/about"><li>About</li></Link>
                    <Link className="px-2" to="/contact"><li>Contact</li></Link>
                    <Link className="px-2" to="/cart"><li>Cart</li></Link>
                    <Link className="px-2" to="/instamart"><li>InstaMart</li></Link>  
                </ul>
            </div>
            <div className="pt-10 ">
            <span className="font-bold text-red-700" >{user.name}</span>
            </div>
            <div className="pt-10 ">
                
                <button>login</button>
            </div>
        </div>
    )
}

export default Header