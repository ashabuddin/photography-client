import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Emergency  Photography" , link: "/emergency"},
        {name: "bookDay" , link: "/bookDay"},
        {name: "Book Service" , link: "/personal-treatment"},
        {name: "Pra Wedding" , link: "/"},
        {name: "bookDay" , link: "/bookDay"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Photography" , link: "/emergency"},
        {name: "Family Event" , link: "/bookDay"},
        {name: "Class Event" , link: "/"},
        {name: "Wedding Package  " , link: "/"},
        
        
    ]
    const services = [
        {name: "Emergency Photography" , link: "/emergency"},
        {name: "Family Event" , link: "/bookDay"},
        {name: "About Us" , link: "/"},
        {name: "Our Service" , link: "/"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py- text-white">
                    <FooterCol key={1} menuTitle={"Photography"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="NAVIGATION" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral OUR SERVICE" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our CONTACT US" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li></li><i className="fab fa-facebook"></i> 
                            <li className="list-inline-item"><a href="//facebook.com"> <span> <i className="fab fa-facebook"></i> </span></a></li>
                            <li className="list-inline-item"><a href="//google.com"> <span> <i className="fa fa-twitter"></i> </span></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"> <span> <i class="fa fa-instagram"></i> </span></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className='text-white'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;