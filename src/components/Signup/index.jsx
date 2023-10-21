import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Signup = ({ ...props }) => {
	// console.log('props', props)

    //<p>For more comprehensive information, kindly download a copy of our educational curriculum brochure.</p>
    //<p><a href="" className={styles.btn}>Download our brochure</a></p>
	return (
		<>
		<div className={styles.aboutus + ' ' + layout.grid_container_25}>
      
		
		
	   

			<div className={layout.grid_col_lg_1of3}>
			<h2 className={styles.heading}>Let's code</h2>
			</div>

			<div className={layout.grid_col_lg_1of3}>
				<p>Welcome to our exciting journey into the world of coding and technology for kids.</p><p>Sign up today to join our vibrant community of young learners, where your child will discover the magic of coding, problem-solving, and creativity. </p>
			</div>

			<div className={layout.grid_col_lg_1of3}>
                <p>For more comprehensive information, kindly fill in the form below and we'll be in touch or email <a href="mailto:xinchao@codingmonsters.com">xinchao@codingmonsters.com</a> or message on zalo to 0795508810 .</p>
			</div>

           

		</div>
        <div className={styles.aboutus + ' ' + layout.grid_container_25}>
        <div className={layout.grid_col_lg_1of3}>
			<h3 className={styles.heading2}>Sign up form</h3>
			</div>
            </div>

        <div className={layout.grid_container_25}>

        <div className={layout.grid_col_lg_2of3}><iframe src="form.html" title="description" style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}} frameBorder="0" height="600px"></iframe></div>
        </div>
		
		
		</>
        );
};

	// nothing
    Signup.propTypes = {
};

	// nothing
    Signup.defaultProps = {
	// nothing
};
export default Signup;