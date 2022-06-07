import React, {useState} from 'react';
import {IoFastFood} from 'react-icons/io5';
import {categories} from '../utils/data';
import {motion} from 'framer-motion';
import {useStateValue} from '../context/StateProvider';
import { RowContainer } from '../components'

const MenuContainer = () => {
    const [filter, setFilter] = useState("chicken");
    const [{foodItems}, dispatch] = useStateValue();

  return (
    <section className="w-full my-6" id="menu">
        <div className="w-full flex flex-col items-center justify-content">
            <p className="mt-10 mb-10 text 2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg
            before:content before:w-32 before:h-1 before:-bottom-2 before-2 before:left-0 before:bg-gradient-to-tr from-orange-400
            tp-orange-600 transition-all ease-in-out duration-100 mr-auto ">
                Our Hot Dishes
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none">
                
                {categories && categories.map((item) => (
                    <motion.div
                    whiteTap={{scale: 0.6}}
                    key={categories.id} 
                    className={`group ${filter === item.urlParamName ? 'bg-red-700' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col
                    gap-3 items-center justify-center hover:bg-red-700 duration-150 transition-all ease-in-out `}
                    onClick={()=>setFilter(item.urlParamName)}
                    >
                        <div 
                       
                        className={`w-10 h-10 rounded-full ${filter === item.urlParamName ? 'bg-card' : 'bg-red-700'} group-hover:bg-card flex items-center justify-center`}>
                            <IoFastFood
                                className={`${filter === item.urlParamName ? 'text-textColor': 'text-card'} group-hover:text-textColor text-lg`}
                            />
                        </div>
                        <p className={`text-sm ${filter === item.urlParamName ? 'text-white' : "text-textColor"} group-hover:text-white`}>{item.name}</p>
                    </motion.div> 
                ))}
            </div>

            <div className="w-full">
                <RowContainer data={foodItems?.filter(n => n.category === filter)}/>
            </div>

        </div>
    </section>
  )
}

export default MenuContainer