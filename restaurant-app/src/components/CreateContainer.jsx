import React, {useState} from 'react';
import "./createcontainer.css";
import {motion} from "framer-motion";
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md';
import { categories } from '../utils/data';
import Loader from "./Loader"
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage"
import { storage } from '../firebase.config';
import { saveItem }  from "../utils/firebaseFunctions";
import { actionType } from '.././context/reducer';
import { useStateValue } from '../context/StateProvider'; 
import { getAllFoodItems } from '../utils/firebaseFunctions';

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(true);
  const [alertStatus, setAlertStatus] = useState(true);
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [ {foodItem}, dispatch ] = useStateValue()

  const uploadImage = (e) => {
    const imageFile = e.target.files[0]
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_chaged",
      (snapshot) => {
        const uploadProgress = 
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try Again");
        setAlertStatus(true);
        setTimeout(() => {
          setFields(false);
          setIsLoading(false)
        }, 4000)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded sucessfully");
          setAlertStatus(false);
          setTimeout(() => {
            setFields(false);
          }, 4000)
        })
      }
    );
  }
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted succesfully");
      setAlertStatus(true);
      setTimeout(() => {
        setFields(false);
      }, 4000)
    }
  )}

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fiels can't be empty");
        setAlertStatus(true);
        setTimeout(() => {
          setFields(false);
          setIsLoading(false)
        }, 4000)
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1, 
          price: price
        }
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Upload successfully uploaded");
        setAlertStatus("success")
        setTimeout(() => {
          setFields(false);
          clearData();
        }, 4000)
      }
      
    } catch(error) {
      console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try Again");
        setAlertStatus(true);
        setTimeout(() => {
          setFields(false);
          setIsLoading(false)
        }, 4000)
    }
    fetchData();
  }

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCalories("Select Category")
  }

const fetchData = async () => {
  await getAllFoodItems().then((data) => {
    dispatch({
      type: actionType.SET_FOOD_ITEMS,
      foodItems: data
    })
  })
}

  return (
    <div className="main-create">
      <div className="notify">
        { 
        fields && alertStatus ? (
         
          <motion.p 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}

          className="danger">
            {msg}
          </motion.p>
        ) : (
          <motion.p 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className="primary">
            {msg}
          </motion.p>
        )}
        <div className="input-title">
          <MdFastfood style={{fontSize:"16px", color:"rgb(113 113 122)"}}/>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..." 
          />
        </div>

        <div className="select-category">
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="other">
              Select Category
            </option>
            {categories?.map(item => {
             return(
              <option
              key={item.id}
              value={item.urlParamName}
            >
              {item.name}
            </option>
          
             )
            })}
          </select>
        </div>

        <div className="upload-calories">
          <div className="upload">
            <div className="loader">
            {/* {
                isLoading ? <Loader/> : <></>
              } */}
              {
                !imageAsset ? (
                  <div className="upload-img">
                    
                      <MdCloudUpload className="upload-icon"/>
                  
                    <p>Click here to upload</p>
                    <div className="upload-input" style={{marginLeft:"8rem", marginTop:"1rem"}}>
                        <input
                        type="file"
                        name="uploadimage"
                        accept="image/*"
                        onChange={uploadImage}
                      />
                    </div>
                    
                  </div>
                ) : (
                  <div className="imageSet" >
                    <img src={imageAsset} alt="uploaded image" style={{width:"40%"}}/>
                    <button
                    type="button"
                    onClick={deleteImage}
                    style={{width:"50px"}}
                    >
                      <MdDelete className="delete-icon" />
                    </button>
                  </div>
                )
              }
            </div>
              
          </div>
          <div className="calories-price">
          <div className="calories">
              <MdFoodBank style={{marginRight:"10px", fontSize:"1.5rem"}}/>
              <input
                type="text"
                required
                value={calories}
                onChange={e => setCalories(e.target.value)}
                placeholder="Calories"
              />
          </div>
          <div className="calories">
              <MdAttachMoney style={{marginRight:"10px", fontSize:"1.5rem"}}/>
              <input
                type="text"
                required
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Price"
              />
          </div>
          </div>
          
        </div>

        <div className="save">
              <button type="button" onClick={saveDetails}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer