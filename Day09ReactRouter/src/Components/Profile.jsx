import { Link } from "react-router"
export default function Profile()
{
    return (
        <>
          <h1>Select a profile to view his github</h1>
          <Link to="Roshan">Roshan</Link>
          <Link to="Siddhant">Siddhant</Link>
          <Link to="Himanshu">Himanshu</Link>
        </>
    )
}