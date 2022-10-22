import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';


const DropdownArray = ({modes,selectMode,setSelectedMode,onModeChange,width,placeholder,indexEl}) => {
   useEffect(() => {
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
    
           <>
           <Dropdown style={{width:width,position:'relative'}} value={selectMode} options={modes} onChange={(e)=> onModeChange(e,indexEl)} optionLabel="name" placeholder={placeholder} />
            
           </>
                
       
    );
}

export default DropdownArray