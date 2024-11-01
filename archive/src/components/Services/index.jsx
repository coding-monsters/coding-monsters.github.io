import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Services = ({ ...props }) => {
	// console.log('props', props)
	return (
		<div className={styles.content + ' ' + layout.grid_container_25}>
      
		
		
	   <div className={layout.grid_col_lg_full_inner}>
			<h2 className={styles.heading}>our services</h2>

			</div>

			<div className={layout.grid_col_lg_1of3}>

			<img src="design.png" width="100%"/>
			<h2>Design</h2>
			<p>At Coding Monsters, we're all about turning your ideas into captivating visuals. Whether it's a logo that leaves an impression, a user-friendly website, or striking graphics, we're here to bring your vision to life. </p>
			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			
			<img src="dev.png" width="100%"/>
			<h2>Web Development</h2>
            <p>We craft user-friendly, visually appealing websites that stand out. With a team with over 20 years experience developing and building websites and mobile apps.</p>
			
			</div>
			
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			
			<img src="lessons.png" width="100%"/>
			<h2>Coding Lessons</h2>
            <p>We turn learning to code into a thrilling adventure! We have lessons for different age groups from 8 years old onwards.</p>
			
			</div>


			<div className={layout.grid_col_lg_full_inner}>
			<p className={styles.services}>
				
				<span>Web Design</span>
				<span>Brand Identity</span>
				<span>Wordpress Development</span>
				<span>React Native Mobile Apps</span>
			</p>

			</div>



			

           
		</div>

        );
};

Services.propTypes = {
};

Services.defaultProps = {
	// nothing
};
export default Services;