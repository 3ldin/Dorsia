import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">At Dorsia, our culinary canvas is a fusion of passion and precision.</p>
        </div>
        <p className="p__opensans"> We believe in crafting not just meals, but unforgettable experiences that linger on the palate and in the heart. Our commitment to excellence is unwavering, as we blend innovation with tradition to create dishes that resonate with the soul.&quot; </p>
      </div>

      <div className="app__chef-sign">
        <p>Jacques Bocuse</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;