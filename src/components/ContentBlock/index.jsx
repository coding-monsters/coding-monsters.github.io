import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const ContentBlock = ({ ...props }) => {
	// console.log('props', props)
	return (
		<div className={styles.content + ' ' + layout.grid_container_25}>
       
	   <div className={layout.grid_col_lg_full_inner}>
			<h2 className={styles.heading}>services</h2>

			</div>

			<div className={layout.grid_col_lg_1of3}>

			<img src="https://placehold.co/600x400/EEE/31343C" width="100%"/>
			<h2>Design</h2>
			<p>First package manager built specifically around workspaces, Yarn lets you split your project into sub-components.</p>
			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			
			<img src="https://placehold.co/600x400/EEE/31343C" width="100%"/>
			<h2>Web Development</h2>
            <p>Yarn guarantees that installs that work today will keep working the same way in the future.</p>
			
			</div>
			
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of3}>
			
			<img src="https://placehold.co/600x400/EEE/31343C" width="100%"/>
			<h2>Coding Lessons</h2>
            <p>Special care is put into our documentation, which we keep improving at every new version.</p>
			
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

ContentBlock.propTypes = {
};

ContentBlock.defaultProps = {
	// nothing
};
export default ContentBlock;