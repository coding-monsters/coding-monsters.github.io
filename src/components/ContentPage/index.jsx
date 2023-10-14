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
        
       
        <h2 className={styles.heading}>{props.title}</h2>
        <p>Coming soon!</p>
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