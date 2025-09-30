import React, {useState, useEffect, useCallback} from "react";

function Body()
{
    const [Profiles, setProfile] = useState([])
    const [count, setCount] = useState(10)
    const [name, setName] = useState("");
    // const Profile = [
    //     {
    //         "login": "mojombo",
    //         "id": 1,
    //         "node_id": "MDQ6VXNlcjE=",
    //         "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    //         "gravatar_id": "",
    //         "url": "https://api.github.com/users/mojombo",
    //         "html_url": "https://github.com/mojombo",
    //         "followers_url": "https://api.github.com/users/mojombo/followers",
    //         "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    //         "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    //         "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    //         "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    //         "organizations_url": "https://api.github.com/users/mojombo/orgs",
    //         "repos_url": "https://api.github.com/users/mojombo/repos",
    //         "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    //         "received_events_url": "https://api.github.com/users/mojombo/received_events",
    //         "type": "User",
    //         "user_view_type": "public",
    //         "site_admin": false
    //     },
    // ]

     async function getProfile(count)
    {
        const response = await fetch(`https://api.github.com/users?per_page=${count}`);
        const users = await response.json();

        setProfile(users);
    }

    const  getProfileByName = useCallback(async (name)=>{

        if(name == "")
        {
            alert("empty names are not allowed");
            return;
        }

        const response = await fetch(`https://api.github.com/search/users?q=${name}`)
        const users = await response.json();
       

        setProfile(users.items);
    })



    useEffect(()=>{
        getProfile(10)
    },[])

    return (
        <div>
            <div className="inputs">
                <div className="input">
                    <input type="number" placeholder="Enter the number of profiles" value={count} onChange={(e)=> setCount(e.target.value)}/>
                    <button onClick={()=>{getProfile(count)}}>Get Profiles</button>
                </div>
                <div className="input">
                    <input type="text" placeholder="Enter the name of user" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <button onClick={()=>{getProfileByName(name)}}>Get User</button>
                </div>
            </div>


            <div className="cards">
            {
                Profiles.map((Profile)=>{
                    return(
                        <div key={Profile.id} className="card">
                                <img src= {Profile.avatar_url} alt="" />
                                <div className="name">
                                    <h2>{Profile.login}</h2>
                                </div>
                                <div className="link">
                                    <a href={Profile.html_url} target="_blank">Visit Profile</a>
                                </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Body;