import React, { useState, useEffect } from 'react';
import '../footer/footer.css'
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className='container'>
            <section className='contact'>
                <p>Contact us</p>
                <h3 className='contact-text'>We'd love to hear from you</h3>
                <a href='#'>support@talkinglands.com</a>
            </section>
            <section>
                <footer class="footer">
                    <hr class="solid" />

                    <div className='footer-content'>
                        <div className="link">
                            <h3 className='title'>Links</h3>
                            <p className="">Visit our legacy version</p>
                            <p className="">FAQ</p>
                            <p className="">Privacy Policy</p>
                        </div>

                        <div className="support">
                            <h3>Support</h3>
                            <p className="">+91 8068970575</p>
                            <div className=''>
                                <a className='icon' href="#"><AiFillLinkedin /></a>
                                <a className='icon' href="#"><AiOutlineTwitter /></a>
                                <a className='icon' href="#"><AiOutlineInstagram /></a>
                            </div>

                        </div>
                        <div className="office">
                            <h3>Office</h3>
                            <p className="">#302 / 304, 3rd Floor, Shravanee Premier Building, near Ashoka Pillar, 2nd Block, Jayanagar, Bengaluru - 560011, Karnataka</p>
                        </div>
                    </div>

                    <hr class="solid"></hr>
                    <div class="legal">
                        <p>&copy; {year} Talking Lands. All rights reserved.</p>
                    </div>
                </footer>
            </section>
        </div>
    );
}

export default Footer;