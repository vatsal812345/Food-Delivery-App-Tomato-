import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import toast from 'react-hot-toast'


const FoodItem = ({id, name, price, description, image}) => {

        const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
        
        const handleAddToCart = (itemId, itemName) => {
            addToCart(itemId);
            toast.success(`${itemName} added to cart! 🛒`, {
                style: {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff',
                    fontWeight: '600',
                    padding: '16px 24px',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#667eea',
                },
            });
        };
return (
    <div className='food-item'>

        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt=""/>
            {!cartItems[id]
                ?<img className='add' onClick={()=>handleAddToCart(id, name)} src={assets.add_icon_white} />
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>handleAddToCart(id, name)} src={assets.add_icon_green} alt=""/>

                </div>
            }

            
        </div>


        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>

            <p className="food-item-desc"> {description} </p>
            <p className="food-item-price"> ${price} </p>

        </div>

    </div>
)
}

export default FoodItem