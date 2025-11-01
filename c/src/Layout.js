import { Outlet } from "react-router-dom"
import Header from "./componet/Header"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />

        </>
    )
}
export default Layout