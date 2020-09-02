import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/IE_COVID19_Prime_FT_XSite_HeroTALL_3000x1200-min._CB435495210_.jpg"
        alt="amazon-prime"
      />

      {/* Product id,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="123456"
          title="The Learn Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={12.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="167456"
          title="JBL JBLFLIP4BK Flip 4 Portable Bluetooth Speaker with Rechargeable Battery, Waterproof, Siri and Google Compatible - Black"
          price={99.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61d5F64UDpL._AC_SL1200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="734874"
          title="Apple iPhone 11 Pro (64GB) - Space Grey"
          price={924.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81HSzsIkJdL._AC_SL1500_.jpg"
        />
        <Product
          id="534352"
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage) - Space Grey"
          price={2479.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71OrFgJ5N8L._AC_SL1500_.jpg"
        />
        <Product
          id="010123"
          title="Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminum Case with Black Sport Band"
          price={179.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71SLnRpatfL._AC_SX466_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="254636"
          title="Panasonic TX-50GX800B 50 inch LED 4K Ultra HD HDR Smart TV with Dolby Vision & Dolby Atmos Sound and Freeview Play (2019), Alexa compliant"
          price={589.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71z4itBqi6L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
