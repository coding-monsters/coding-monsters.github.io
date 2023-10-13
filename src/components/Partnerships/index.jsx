import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Partnerships = ({ ...props }) => {
	// console.log('props', props)
	return (
		<div className={styles.content + ' ' + layout.grid_container_25}>
       
	   <div className={layout.grid_col_lg_full_inner}>
			<h2 className={styles.heading}>partnerships</h2>
			<p>Together, we can create new opportunities, unlock innovation, and amplify success. With our expertise and your unique strengths, there's no limit to what we can achieve. Let's collaborate and write the next chapter of success, hand in hand. Join us in shaping a brighter future!</p>

			</div>

			

			<div className={layout.grid_col_lg_1of3}>

			
			<h2>Get in touch today!</h2>
			<p><a href="" className={styles.btn}>Contact us</a></p>
			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			
			<h2>Sponsor Scholarships</h2>
			<p>The Coding Monsters' sponsorship program empowers donors to choose and provide full support for a student from a pool of eligible candidates. </p>
			<img src="office01.png" width="100%"/>
			
            
			
			</div>
			
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			<h2>School Partnerships</h2>
			<p>Let's make learning interactive and prepare them for a tech-savvy future. Reach out today to bring coding into your school.</p>
			<img src="office02.jpg" width="100%"/>
			
			
			</div>

			

           
		</div>

        );
};

Partnerships.propTypes = {
};

Partnerships.defaultProps = {
	// nothing
};
export default Partnerships;