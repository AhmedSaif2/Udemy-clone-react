import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./footerStyles.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.partners}>
        <h2>
          Top companies choose{" "}
          <HashLink to="#udemy-business">Udemy Business</HashLink> to build
          in-demand career skills.
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
            <HashLink to="#udemy-business">Udemy Business</HashLink>
          </li>
          <li>
            <HashLink to="#Teach">Teach on Udemy</HashLink>
          </li>
          <li>
            <HashLink to="#get-app">Get the app</HashLink>
          </li>
          <li>
            <HashLink to="#about-us">about us</HashLink>
          </li>
          <li>
            <HashLink to="#contact-us">contact us</HashLink>
          </li>
        </ul>
        <ul>
          <li>
            <HashLink to="#careers">Careers</HashLink>
          </li>
          <li>
            <HashLink to="#blogs">Blogs</HashLink>
          </li>
          <li>
            <HashLink to="#help">Help and Support</HashLink>
          </li>
          <li>
            <HashLink to="#affiliate">Affiliate</HashLink>
          </li>
          <li>
            <HashLink to="#investors">Investors</HashLink>
          </li>
        </ul>
        <ul>
          <li>
            <HashLink to="#terms">Terms</HashLink>
          </li>
          <li>
            <HashLink to="#privacy-policy">Privacy Policy</HashLink>
          </li>
          <li>
            <HashLink to="#cookies">Cookie Settings</HashLink>
          </li>
          <li>
            <HashLink to="#sitemap">Sitemap</HashLink>
          </li>
          <li>
            <HashLink to="#accessability">Accessability Statements</HashLink>
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
