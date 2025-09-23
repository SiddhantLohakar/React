function Header()
{
    return (
        <div className="header">
            {/* Logo of Myntra */}
            <img src="https://i.pinimg.com/736x/68/6d/c5/686dc532a1d5ba6a70057b87815eb929.jpg" alt="" height="85px" width="85px"/>
            
            
            {/* Options for users */}
            <div className="options">
                <button className="btn">MEN</button>
                <button className="btn">WOMEN</button>
                <button className="btn">KIDS</button>
                <button className="btn">GENZ</button>
                <button className="btn">STUDIO</button>
                <button className="btn">BEAUTY</button>

            </div>
            
            
            {/* Search Bar */}
            <input type="text" placeholder="Search products, brands and more"/>
            
            
            {/* Profile options */}
            <div className="profile">
                <button className="pfp-btn">Profile</button>
                <button className="pfp-btn">Wishlist</button>
                <button className="pfp-btn">Bag</button>
            </div>
        </div>
    )
}

export default Header