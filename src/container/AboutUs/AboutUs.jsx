import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our establishment channels the essence of high class, offering a culinary journey that harmonizes gourmet craftsmanship with a luxurious atmosphere. Step into a world where each dish is a masterpiece and every moment is a celebration of opulence.</p>
        <button type="button" className="custom__button">Read More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Founded with a vision to redefine sophistication, Dorsia opened its doors as a testament to the allure of fine dining. Since our inception, we have tirelessly pursued culinary innovation and unwavering excellence, creating a legacy that resonates with those who seek the epitome of luxury in dining.</p>
        <button type="button" className="custom__button">Read More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;