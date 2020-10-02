import React from 'react'
import "./Home.css";

import Product from "./Product";

function Home() {
    return (
        <div className="home">
         <img 
         className="home-backgroundImage"
         src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
         alt="bg" />


                <div className="home-container">
                    <div className="home-row">
                        <Product 
                        id="1235353"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={615}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
                        />
                        <Product 
                        id="1235353"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={615}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
                        />
                </div>
            </div>
        </div>
    )
}

export default Home
