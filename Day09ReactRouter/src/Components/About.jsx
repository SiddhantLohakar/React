import { Outlet, Link } from "react-router"


export default function About()
{
    return (
        <>
            <nav>
                <Link to= "Meet">Meet</Link>
            </nav>
            <h1>Hello this is About Page</h1>
            <Outlet/>
        </>

    )
}