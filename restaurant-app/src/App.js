import React, {useEffect} from "react";
import {Header, MainContainer, CreateContainer} from "../src/components";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {

  const [{}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
    })
    })
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
      <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      
      <main className="mt-10 mb-10 pr-8 pl-8 w-full">
        <Routes>
            <Route path="/" element={<MainContainer/>}/>
            <Route path="/createItem" element={<CreateContainer/>}/>
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
};

export default App;
