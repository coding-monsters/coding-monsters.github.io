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

			
			<h2>DaNang our first flagship centre</h2>
			<p>Situated in the heart of Danang son tra...</p>
			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			
			<p>60sq metre training centre with a fun and enjoyable place to learn.</p>
			<img src="office01.png" width="100%"/>
			
            
			
			</div>
			
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			<p>&nbsp;</p><p>&nbsp;</p>
			<img src="office02.jpg" width="100%"/>
			
			
			</div>

			<div className={layout.grid_col_lg_full_inner}>
			<h2 className={styles.heading}>our talented team</h2>

			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of4}>
			
			<img src="https://placehold.co/316x434/F8F8F8/F8F8F8" width="100%"/>
			<h2>Branding</h2>
            <p>Special care is put into our documentation, which we keep improving at every new version.</p>
			
			</div>

			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of4}>
			
			<img src="https://placehold.co/316x434/F2F2F2/F2F2F2" width="100%"/>
			<h2>Hien</h2>
            <p>Special care is put into our documentation, which we keep improving at every new version.</p>
			
			</div>

			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of4}>
			
			<img src="https://placehold.co/316x434/F2F2F2/F2F2F2" width="100%"/>
			<h2>Matt</h2>
            <p>Special care is put into our documentation, which we keep improving at every new version.</p>
			
			</div>

			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of4}>
			
			<img src="https://placehold.co/316x434/F2F2F2/F2F2F2" width="100%"/>
			<h2>Tuan</h2>
            <p>Special care is put into our documentation, which we keep improving at every new version.</p>
			
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