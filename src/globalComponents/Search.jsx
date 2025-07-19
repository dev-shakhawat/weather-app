import React, { useEffect, useRef, useState } from 'react'

import { CgClose } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
export default function Search({className}) {

  const [searchVal , setSearchVal] = useState('');
  const [isSearchHistoryOpen , setIsSearchHistoryOpen] = useState(false);
  const SearchRef = useRef()
  const [searchHistory , setSearchHistory] = useState([])
  const dispatch = useDispatch()
  

  const handleSearch = (e) => { 

    e.stopPropagation()  
    setIsSearchHistoryOpen(false)
    dispatch({type:'weather/city' , payload: searchVal})
    localStorage.setItem("currentCity", JSON.stringify("dhaka"));

    
    if (!searchVal.trim()) return;
    if(localStorage.getItem('searchHistory')){

      const prevSearches = localStorage.getItem('searchHistory')
      const alreadyExists = JSON.parse(prevSearches).includes(searchVal)

      if(alreadyExists) return
      
      const newSearches = [...JSON.parse(prevSearches) , searchVal]
      localStorage.setItem('searchHistory' , JSON.stringify(newSearches)) 
    }
    else{
      localStorage.setItem('searchHistory' , JSON.stringify([searchVal]))
    }
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (SearchRef.current && !SearchRef.current.contains(event.target)) {
        setIsSearchHistoryOpen(false);
      }
    };
    document.addEventListener('click' , handleClickOutside)
    return () => {
      document.removeEventListener('click' , handleClickOutside)
    }
  }, [])


  const handleRemoveItem = (e,item) => {
    e.stopPropagation()
    const allSearch = JSON.parse(localStorage.getItem('searchHistory'))
    const newSearch = allSearch.filter(search => search !== item)
    localStorage.setItem('searchHistory' , JSON.stringify(newSearch)) 
    setSearchHistory(newSearch)
  }

  
  const handleOpenSearchHistory = () => {
    setIsSearchHistoryOpen(true)
    if(localStorage.getItem('searchHistory')){
      setSearchHistory(JSON.parse(localStorage.getItem('searchHistory')))
    }
  }

  const handlesetSearch = (item)=>{
    dispatch({type:'weather/city' , payload: item})
    setIsSearchHistoryOpen(false)

  }
   
  

  return (
    <div ref={SearchRef} onClick={handleOpenSearchHistory} className={`${className} bg-gray-600 rounded-[10px] relative    `}>
        <input   value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type="text" className='w-full py-3 outline-0 px-2 text-white font-semibold text-sm     ' placeholder='Search for weather'/>

        {searchVal && 
        <div className="absolute top-[5px] right-2   flex gap-2 w-fit h-full  ">

          <button onClick={()=> setSearchVal('')} type="button" className=' h-fit p-2 bg-[#0b131e] text-white rounded-[10px] text-xl cursor-pointer   '><CgClose /></button>

          <button onClick={(e)=> handleSearch(e)} type="button" className=' h-fit p-2 bg-[#0b131e] text-white rounded-[10px] text-lg cursor-pointer   '><BsSearch /></button>

        </div>}


        {isSearchHistoryOpen && 
        <div className=" border border-white/10 absolute top-13 left-0 w-full p-3 bg-gray-600 shadow-lg rounded-[10px] z-10 flex  "> 

          <div className="flex-1">
            <h2 className="text-white font-semibold text-sm ">Avoilable Locations</h2>
            <ul className='mt-2'>
              <li></li>
            </ul>
w
          </div>
          
          {searchHistory.length > 0 && 
          <div className=" flex-2">
            <h2 className="text-white font-semibold text-sm ">Search History</h2>

            <ul className='flex flex-col-reverse gap-1'>
              {searchHistory.map((item , index) => ( 
                <li key={item} className='text-white flex items-center  py-2 px-5 font-semibold bg-[#394049] rounded-[10px] cursor-pointer gap-2  '>
                  <p  onClick={() => handlesetSearch(item) } className="flex-1">{item}</p>
                  <button onClick={(e) => handleRemoveItem(e,item)}  type="button" className=' h-fit p-1.5 bg-[#0b131e] text-white rounded-[10px]  cursor-pointer   '><CgClose /></button>
                </li>
              ))}
            </ul>
          </div>}
        </div>}

    </div>
  )
}
