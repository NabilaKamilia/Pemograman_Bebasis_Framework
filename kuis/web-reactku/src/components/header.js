import React from 'react';
// import "components/FontAwesomeIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <nav>
            <div className="logo">Rayes.</div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
            <div className="search">
                <FontAwesomeIcon icon = {faSearch} className="fa" />
                <FontAwesomeIcon icon = {faShoppingBasket} className="fa"/>
            </div>
        </nav>
    )
}
export default Header