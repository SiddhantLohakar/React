function Card(props)
{
    return(
        <div className="card">
            <img height= "230px" width= "200px" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="cloth-name">
                <h2>{props.clothName}</h2>
            </div>
            <div className="percentage-off">
                <h1>{props.Offer}</h1>
            </div>
            <div className="general-desc">
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

export default Card;