import React, {useState, useEffect} from 'react';
import "./rowcontainer.css";
import { MdShoppingBasket } from 'react-icons/md';
import {motion} from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer"

const RowContainer = ({flag, data}) => {
    const [items, setItems] = useState([])

    const [{cartItems}, dispatch] = useStateValue();
    const addtocart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items
        })

        localStorage.setItem("cartItems", JSON.stringify(items))
    }

    useEffect(() => {
        addtocart()
    }, [items])

  return (
    <div className="container">
        
        { data && data.map((item) => (
            <div className="row-fruits">
            
    <motion.img whileHover={{scale: 1.2}} src={item.imageURL}/>
         
            <div className="fruits">
                <motion.div whileTap={{scale: 0.75}} className="round" onClick={()=>setItems([...cartItems, item])}>
                    <MdShoppingBasket className="basket-icon" style={{fontSize:"0.8rem"}}/>
                </motion.div>
                <div className="fruits-text">
                    <p>{item.title}</p>
                    <p style={{color:"gray"}}>{item.calories} Calories</p>
                    <div className="price">
                        <p>
                            <span style={{color: "red"}}>$</span>
                            <span style={{fontWeight:"bold"}}>{item.price}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default RowContainer