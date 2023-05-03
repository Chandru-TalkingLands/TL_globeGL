import React, { useState } from 'react';
import "./Search.css"
import 'animate.css';

const Searchbar = () => {
    const [open, setOpen] = useState(false);
    function handleCLick() {
        setOpen(!open)
    }

    return (
        <>
            <div className='animate__animated animate__slideInDown searchcontainer'>
                <select onClick={handleCLick} className="dropdown" id="alphalist">
                    <option value="a">Farm Plots</option>
                    <option value="b">Commercial</option>
                    <option value="c">Residential</option>
                </select> <br /> <br />
                <input type="search" placeholder='Search Properties' />
            </div>
        </>
    );
}

export default Searchbar;
