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



			<div className={layout.grid_col_lg_full_inner}>
			<h2 className={styles.heading}>our talented team</h2>

			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of4}>
			
			
			<h2 className={styles.smlHeading}>Join the team</h2>
            <p className={styles.bigHeading}>Are you passionate about teaching and supporting people entering the tech industry?</p>
			<p><a href="mailto:xinchao@codingmonsters.com" className={styles.btn}>Contact us today!</a></p>
			</div>

			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of4}>
			
			<img src="hien.png" width="100%"/>
			<h2>Hien - Co-Founder</h2>
            <p>Extensive background in hospitality management, complemented by a business marketing degree and ownership of a successful beauty clinic company.</p>
			
			</div>

			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of4}>
			
			<img src="matt.png" width="100%"/>
			<h2>Matt - Co-Founder</h2>
            <p>Nineteen years of expertise in software development, e-learning, and design, including pivotal roles at EY (Ernst & Young), where he contributed to a global e-learning platform, and leadership experience managing a team of developers at The University of the Arts London.</p>
			
			</div>

			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of4}>
			
			<img src="tuan.png" width="100%"/>
			<h2>Tuan - Teacher / Developer</h2>
            <p>A versatile professional with a rich background as a teacher and developer, specializing in working with children. Currently, he's actively expanding his development skills.</p>
			
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