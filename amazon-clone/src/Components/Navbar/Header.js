import React from 'react'
import "./Header.css"

import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
           
                <Link to="/">
                <img className="header-logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="logo" />
                </Link>
                
                <div className="header-search">
                <input type="text" className="header-searchInput" />
                <SearchIcon className="header-searchIcon" />
                </div>

                <div className="header-nav">
                    <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Hello John</span>
                        <span className="header-optionLineTwo">Sign In</span>
                    </div>
             
                    </Link>
                    <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Return</span>
                        <span className="header-optionLineTwo">& Orders</span>
                    </div>
             
                    </Link>
                    <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Your</span>
                        <span className="header-optionLineTwo">Prime</span>
                    </div>
             
                    </Link>
                    <Link to="/checkout" className="header-link">
                        <div className="header-optionBasket">
                         
                         <ShoppingBasketIcon />
                         <span className="header-optionLineTwo header-basketCount">0</span>
                        </div>
                    </Link>
                </div>
        
        </nav>
    )
}

export default Header
