import { createContext } from "react";

const UserContext = createContext({
   user: {
        name:"dummy",
        email:"dummyOfficial@gmail.com"
    }
})

export default UserContext;