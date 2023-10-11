// const heading = document.createElement("h1");
// heading.innerHTML = "This is heading"
// const root = document.getElementById("root")
// root.append(heading)
// import React from "react"
// import React from "react"

import ReactDOM from "react-dom/client"
import Home from "./src/pages/Home"
import About from "./src/pages/About"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./src/pages/error"
import Contact from "./src/pages/Contact"
import Body from "./src/Componants/Body"
import RestaurentMenu from "./src/pages/RestaurentMenu"
import Profile from "./src/Componants/profile"
import { lazy, Suspense } from "react"
import ShimmerUi from "./src/Componants/ShimmerUi"

let InstaMart = lazy(() => import('./src/pages/InstaMart'))
let appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/RestaurentMenu/:id",
                element: <RestaurentMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<ShimmerUi/>}>
                    <InstaMart />
                </Suspense>
            },
        ]
    }

])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)