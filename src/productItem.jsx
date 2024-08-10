
import './productItem.css'
import './mediaQuery.css'
export default function ProductItem({src,name,price,key})
{
    return(
        <div Key={key} className="product">
            <img src={src} alt={name}/>
            <p>{name}</p>
            <p>{price}</p>
            <button className="add_btn">Add to Cart</button>
        </div>
    )

}