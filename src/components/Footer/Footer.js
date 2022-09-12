import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./footerStyles.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.partners}>
        <h2>
          Top companies choose <a href="#udemy-business">Udemy Business</a> to
          build in-demand career skills.
        </h2>
        <div className={styles.logos}>
          <img
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="Nasdaq"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            alt="Volkswagen"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
            alt="Box"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            alt="Netapp"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            alt="Eventbrite"
          />
        </div>
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <a href="#udemy-business">Udemy Business</a>
          </li>
          <li>
            <a href="#Teach">Teach on Udemy</a>
          </li>
          <li>
            <a href="#get-app">Get the app</a>
          </li>
          <li>
            <a href="#about-us">about us</a>
          </li>
          <li>
            <a href="#contact-us">contact us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#help">Help and Support</a>
          </li>
          <li>
            <a href="#affiliate">Affiliate</a>
          </li>
          <li>
            <a href="#investors">Investors</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#terms">Terms</a>
          </li>
          <li>
            <a href="#privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#cookies">Cookie Settings</a>
          </li>
          <li>
            <a href="#sitemap">Sitemap</a>
          </li>
          <li>
            <a href="#accessability">Accessability Statements</a>
          </li>
        </ul>
        <button className={styles.language}>
          <FontAwesomeIcon icon="fa-solid fa-globe"></FontAwesomeIcon>
          &nbsp;English
        </button>
      </div>
      <div className={styles.copyright}>
        <div>
          <Link to="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              alt="Udemy logo"
            />
          </Link>
        </div>
        <div>© 2022 Udemy, Inc.</div>
      </div>
    </footer>
  );
}

export default Footer;
