import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Notification = ({ ...props }) => {
	// console.log('props', props)
	return (
		<div className={styles.notification + ' ' + layout.grid_container_25}>
       
			
            <div className={layout.grid_col_lg_full_inner}>

            <p>This website is currently a living work in progress and will be continually updated, until we are happy [▪‿▪]</p>

            </div>
		
		</div>

        );
};

Notification.propTypes = {
};

Notification.defaultProps = {
	// nothing
};

export default Notification;