import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">20 W 55th St, New York, NY 10019</p>
        <p className="p__opensans">+1 212-759-5421</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__footer-name">Dorsia</h1>
        <p className="p__opensans">&quot;We strive for only the nicest&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">8:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">9:00 am - 1:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Dorsia. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;