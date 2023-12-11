import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutUsPage = () => {
  const navigate =  useNavigate()
  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">WARONGWAREM</div>
          <div className="group">
            <div className="A1-wrapper">
              <p className="A1">
              Established in 1999, WarongWarem has been a culinary 
              destination for discerning food enthusiasts seeking an
              exquisite dining experience. Our passion for delivering 
              the finest in cuisine, coupled with the artistry of our 
              expert chefs, has made us a renowned name in the culinary world.
              </p>
            </div>
            <div className="A2-wrapper">
              <p className="A2">
              In the heart of 1999, WarongWarem opened its doors with 
              a commitment to provide not just meals, but an unforgettable 
              gastronomic journey. Over the years, we have evolved, 
              inspired by the rich tapestry of flavors from around the world.
              </p>
            </div>
            <div className="A3-wrapper">
              <p className="A3">
              At WarongWarem, we take pride in offering a menu curated with 
              the utmost care and attention to detail. Each dish is a masterpiece, 
              crafted by our team of talented and dedicated chefs. From traditional 
              favorites to innovative culinary creations, our diverse menu caters to every palate.
              </p>
            </div>
            <div className="A4-wrapper">
              <p className="A4">
              Our vision has always been to create a space where food is not just a 
              necessity but an art form. We believe in using the finest ingredients, 
              combined with the skills of our chefs, to elevate dining to a memorable experience.
              </p>
            </div>
            <div className="group-2">
              <div className="overlap-group">
                <img className="line3" alt="marker.png" src="marker.png" />
                <button onClick={() => navigate('/')} className="text-wrapper-2">Home</button>
              </div>
              <div>
              <button onClick={() => navigate('/Signup')}className="text-wrapper-3">Login</button>
              </div>
              <div>
              <button onClick={() => navigate('/AboutUs')}className="text-wrapper-4">About Us </button>
              </div>
            </div>
          </div>
          <div className="About1">Welcome to WarongWarem</div>
          <div className="About2">Our Journey</div>
          <div className="About3">The Culinary Excellencey</div>
          <div className="About4">Our Vision</div>
        </div>
        <img className="img2" alt="page2.jpg" src="page2.jpg" />
      </div>
    </div>
  );
};

export default AboutUsPage;