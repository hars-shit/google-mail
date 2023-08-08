import {  Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Main from "./pages/Main"
import '/home/harshit/Desktop/React/google-mail/src/App.css'
import { routes } from "./Constant/routes"
import { Suspense } from "react"
import Loader from "./Components/Loader"


const router=createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={routes.main.path} element={<routes.main.element />}>
            <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />}/>
            <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} />
            <Route path={routes.view.path} element={<routes.view.element />}/>
            </Route>
            <Route path={routes.invalid.path} element={`${routes.emails.path}/inbox`}/>

                    </Route>
    )
)
function App() {
 return(
    <Suspense fallback={<Loader />}>

        <RouterProvider router={router}/>
    </Suspense>
     
 )
}

export default App
