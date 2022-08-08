import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Home from "./Home";

const RouterList = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category" element={<Category/>}/>
        </Routes>
    )
}
export default RouterList