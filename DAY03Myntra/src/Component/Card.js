function Card(props)
{
    return(
        <div className="card">
            <img height= "230px" width= "200px" src= {props.src} alt="" />
            <div className="cloth-name">
                <h2>{props.clothName}</h2>
            </div>
            <div className="percentage-off">
                <h1>{props.Offer}</h1>
            </div>
            <div className="general-desc">
                <h2>Shop Now</h2>
            </div>
            <div className="price">
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}

export default Card;