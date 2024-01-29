  import React, { useState, useEffect } from 'react';
  import './App.css'
  import { NV } from './NV';
  import { NavLink} from 'react-router-dom';
  import { Route, Routes } from "react-router-dom";
import { VN } from './VN';
import { TVNV } from './TVNV.jsx';
import { TVVN } from './TVVN.jsx';
import { TV } from './TV.jsx';

  const CharacterList = () => {
  

    
    
    return (
          <Routes>

            <Route path="/" element={<NV />}></Route> 
            <Route path="/VN" element={<VN />}></Route> 
            <Route path="/TVNV" element={<TVNV />}></Route> 
            <Route path="/TVVN" element={<TVVN />}></Route> 
            <Route path="/TV" element={<TV />}></Route> 
          </Routes>
    );
    
  };

  export default CharacterList;
