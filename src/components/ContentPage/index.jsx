import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Content = ({ ...props }) => {
	
    
      
	return (
		<>
	<div className={styles.content + ' ' + layout.grid_container_25}>
      
      <div className={layout.grid_col_full_width}>
     
      </div>
      
     <div className={layout.grid_col_lg_full_inner}>
        
       
        <h1 className={styles.heading}>{props.title}</h1>
        <p>Last updated: 14.10.2023</p>

        <h3>Introduction</h3>

<p>At Coding Monsters, we respect your privacy and are committed to ensuring that your online experience is safe and secure. This Cookie Policy explains how we use cookies on our website, https://www.codingmonsters.com (referred to as "the Site").</p>

<p>By using the Site, you consent to the use of cookies in accordance with this policy.</p>

<h3>What Are Cookies?</h3>

<p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.</p>

<h3>Our Use of Cookies</h3>

<p>At Coding Monsters, we use cookies to enhance your experience while using our Site. We use Google Analytics cookies to collect information about how our visitors use the Site. These cookies help us understand our website traffic and improve our website.</p>

<p>We do not use any marketing cookies. Therefore, we will not use cookies to build a profile of your browsing behavior for marketing purposes or for any other purpose unrelated to the operation of our Site.</p>

<h3>Contact Information</h3>

<p>If you have any questions or concerns about our Cookie Policy, please don't hesitate to contact us at xinchao@codingmonsters.com.</p>

<h3>Managing Cookies</h3>

<p>You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and certain parts of our website may no longer function correctly.</p>

<p>Most web browsers allow you to control cookies through their settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.</p>

<h3>Changes to This Cookie Policy</h3>

<p>Coding Monsters may update this Cookie Policy to reflect changes in how we use cookies or for other operational, legal, or regulatory reasons. Please check back frequently to stay informed about any updates to our Cookie Policy.</p>

<p>By continuing to use our website, you agree to the placement of cookies on your device. If you do not agree to our use of cookies, please disable cookies in your browser settings, but note that this may affect your user experience while using our Site.</p>

<p>Thank you for choosing Coding Monsters!</p>
        </div>
        
        </div>
		</>
        );
};

Content.propTypes = {
    title: PropTypes.string
};

Content.defaultProps = {
	title: "Content page"
};

export default Content;