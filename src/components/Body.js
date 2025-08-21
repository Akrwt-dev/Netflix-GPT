import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";



const Body = ()=>{

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

// we want to call onAuthStateChanged only one that is why we use useEffect



    return(
        <div>
           <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;