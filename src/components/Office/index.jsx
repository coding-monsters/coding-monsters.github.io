import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Office = ({ ...props }) => {
	// console.log('props', props)
	return (
		<div className={styles.content + ' ' + layout.grid_container_25}>
       
	   <div className={layout.grid_col_lg_full_inner}>
			<h2 className={styles.heading}>training centre</h2>

			</div>

			<div className={layout.grid_col_lg_1of3}>

			
			<h2>Danang our first flagship centre</h2>
			<p>Located in the heart of Danang's Son Tra, our 60-square-meter training center offers a fun and enjoyable learning environment.</p>
			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			
			
			<img src="office01.png" width="100%"/>
			
            
			
			</div>
			
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			
			<img src="office02.jpg" width="100%"/>
			
			
			</div>

			

           
		</div>

        );
};

Office.propTypes = {
};

Office.defaultProps = {
	// nothing
};
export default Office;