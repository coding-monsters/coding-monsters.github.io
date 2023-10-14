import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const AboutUs = ({ ...props }) => {
	// console.log('props', props)
	return (
		<>
		<div className={styles.aboutus + ' ' + layout.grid_container_25}>
      
		
		
	   

			<div className={layout.grid_col_lg_1of3}>
			<h2 className={styles.heading}>about us</h2>
			</div>

			<div className={layout.grid_col_lg_1of3}>
				<p>Hey there, we're not your average digital agency! At Coding Monsters, we're on a mission to turn young minds into tech superheroes. </p>
			</div>

			<div className={layout.grid_col_lg_1of3}>
			<p>We teach anyone aged 8 and older, and we aim to offer job opportunities to our students, providing them with valuable work experience and a chance to begin their careers in the tech industry.</p>
			<p>#DigitalAgency #WebDesign #CodingForKids #TechSuperheroes</p>
			</div>

		</div>
		<div className={styles.aboutus + ' ' + layout.grid_container_25}>

		<div className={layout.grid_col_lg_1of3}>
			<img src="lessons.png" width="100%"/>
			</div>
			<div className={layout.grid_col_lg_2of3}>
			<h3 className={styles.heading2}>why choose us?</h3>
			<p>We're creating a system to teach students tech skills and help them get tech jobs. We have our own web agency that students can work for, learning from real client projects and earn money.</p>

			<p>We'll hire more people from our student group as our company grows.</p>

			<p>We plan to start small in our local area of Danang, and when we're ready, we'll expand.</p>
			</div>

			
           
		</div>
		<div className={styles.aboutus + ' ' + layout.grid_container_25}>

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
		</>
        );
};

AboutUs.propTypes = {
};

AboutUs.defaultProps = {
	// nothing
};
export default AboutUs;