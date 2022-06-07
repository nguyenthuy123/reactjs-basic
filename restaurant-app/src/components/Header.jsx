import React from 'react';
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import './header.css';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import {MdShoppingBasket, MdAdd, MdLogout} from 'react-icons/md';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType} from '../context/reducer';



const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // console.log("useStateValue", useStateValue)
  const [{user, cartShow}, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    })
    localStorage.setItem('user', JSON.stringify(providerData[0]))
    } else {
      setIsMenu(!isMenu)
    }
  }

  const logout = () => {
    setIsMenu(false)
    localStorage.clear();

    dispatch({ 
      type: actionType.SET_USER,
      user: null
    })
  }

  const showCart = () => {
    dispatch({ 
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow
    })
  }

  return (
   
    <header style={{paddingRight:"16px", paddingLeft:"16px"}}>
      {/* desktop & tablet */}
      <div className="header" >
        <Link to={"/"} className="flex" style={{alignItems:"center", width:"10%"}}>
          <img src={Logo} className="w-10 object-cover" alt="logo" style={{width:"50%"}}/>
          <p className="city">City</p>
        </Link>
        <ul className="flex items-center gap-8">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" >
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </li>
        </ul>
        <div className="icons" onClick={showCart}>
          {user ? (
            <div style={{display:"flex"}}>
              <MdShoppingBasket className="icons-basket"/>
              <div className="icons-text">
                <p className="text">2</p>
              </div>
            </div>
          ) : (
            <div style={{display:"flex"}}>
              <MdShoppingBasket className="basket-custom"/>
              <div className="text-custom">
                <p className="text2">2</p>
              </div>
            </div>
          )}
          
          <div>
            <motion.img 
          
          whileTap={{scale: 0.6}}
          src={user ? user.photoURL : Avatar} 
          alt="userprofile" 
          style={{width:"25%", marginLeft:"30px", borderRadius:"50%"}}
          onClick={login}
          />
        { isMenu && (
          <motion.div 
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{opacity:1, scale:1}}
          exit={{opacity:0, scale:0.6}}
          className="create-new">
          { user && (
            <Link to={'/createItem'}>
              <p className="logout" onClick={() => setIsMenu(false)}>
                New Item <MdAdd/>
              </p>
            </Link>
          )}
          
          <p className="logout" onClick={logout}>
            Logout <MdLogout/>
          </p>
        </motion.div>
        )}
          
          </div>
          
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4">

      </div>
     
    </header>
  )
}

export default Header