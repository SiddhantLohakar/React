import { useEffect, useState } from "react";
import {useParams} from "react-router"

export default function Me()
{
    
    const [profile, setProfile] = useState(null)
    const {name} = useParams();

    async function getData()
    {
        const res = await fetch(`https://api.github.com/search/users?q=${name}`)
        const data = await res.json();
        console.log(data)
        setProfile(data?.items[0])
    }

    useEffect(()=>{
        getData();
    }, [])


    return(
        <>
            <h1>Hello {profile?.login}</h1>
            <img src= {profile?.avatar_url} alt="" />
        </>
    )
}