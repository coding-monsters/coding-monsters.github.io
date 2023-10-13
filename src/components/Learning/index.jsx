import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Learning = ({ ...props }) => {
	// console.log('props', props)
	return (
		<>
		<div className={styles.learning + ' ' + layout.grid_container_25}>
		<div className={layout.grid_col_lg_2of3}>
            <h1>learn coding</h1>
			
        </div>
        <div className={layout.grid_col_lg_1of3}>
            
			
        </div>

        <div className={layout.grid_col_lg_2of3}>
           
			
        </div>
        <div className={layout.grid_col_lg_1of3}>
            <img src="lessons.png" width="100%"/>
			
        </div>
		
		</div>
		</>
        );
};

Learning.propTypes = {
};

Learning.defaultProps = {
	// nothing
};

export default Learning;