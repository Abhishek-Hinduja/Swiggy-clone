import { useState } from "react";
import React from 'react'
import { swiggy_menu_api_URL } from "../Constants";
import { useEffect } from "react";

const useRestaurant = (id)=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
        const API = swiggy_menu_api_URL + id;
        const data = await fetch(swiggy_menu_api_URL + id);
    
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo
    
}
export default useRestaurant