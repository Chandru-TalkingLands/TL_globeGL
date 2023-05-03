import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../landingPage/landing"

const Routers = () => {

    return (

        <div>
            <BrowserRouter basename="/">
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>

        </div>

    );

};




export default Routers;