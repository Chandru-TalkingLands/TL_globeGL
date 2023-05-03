import React, {useState} from 'react';
import '../working/working.css';
import Book from "../assets/Book -property.svg"
import Discover from '../assets/Disover-property.svg' 

const Working = () => {
    const [key, setKey] = useState('works');
    
    const handleTabClick = (event) => {
        setKey(event.target.id);
    };
    

    return (
        <div className="features-container">
            <div className="features-tabs">
                <button className={key === "works" ? "active" : ""} id='works' onClick={handleTabClick}>How it works</button>
                <button className={key === "tales" ? "active" : ""} onClick={handleTabClick} id='tales' >Trust in purchase</button>
                <button className={key === "purchase" ? "active" : ""} onClick={handleTabClick} id='purchase' >Superpowered Maps</button>
            </div>
            <div className="features-content">
                {key === "works" && (
                <>
                    <div className="feature-item">
                     <img src={Discover} alt="Feature 1" />
                     <h3>Discover the Property</h3>
                     <p>Search for properties based on their location, price <br /> range, property type, and other criteria. The search <br /> results show properties that match the user's <br /> preferences, along with their details and photos.</p>
                 </div>
                 <div className="feature-item">
                     <img src={Book} alt="Feature 2" />
                     <h3>Book a property unit</h3>
                     <p>Search for properties based on their location, price <br /> range, property type, and other criteria. The search <br /> results show properties that match the user's <br /> preferences, along with their details and photos.</p>
                 </div>
                 <div className="feature-item">
                     <img src={Book} alt="Feature 3" />
                     <h3>Manage your property</h3>
                     <p>Search for properties based on their location, price <br /> range, property type, and other criteria. The search <br /> results show properties that match the user's <br /> preferences, along with their details and photos.</p>
                 </div>
                </>
                )}
                {key === "tales" && (
                    <>
                    <div className='feature-item'>

                    </div>
                    </>
                )
                }
                {key === "purchase" && (
                    <>
                    <div className='feature-item'>

                    </div>
                    </>
                )
                }
            </div>
        </div>
    );
}

export default Working;
