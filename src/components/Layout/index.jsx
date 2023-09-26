import React from "react";
import PropTypes from "prop-types";
import layout from "./index.module.scss";
import styles from "./index.module.scss";

const Layout = ({ ...props }) => {
	// console.log('props', props)
	return (
        <div className={layout.grid_styles}>
        <div className={layout.grid_styles + ' ' + layout.grid_container_25}>

        <div className={layout.grid_col_full}>

<p>1 of 1</p>
</div>

			<div className={layout.grid_col_lg_1of2}>

			<p>1 of 2</p>
			</div>
			<div className={layout.grid_col_lg_1of2}>

            <p>1 of 2</p>
			
			</div>
			<div className={layout.grid_col_lg_1of4}>

			<p>1 of 4</p>
			</div>
			<div className={layout.grid_col_lg_1of4}>

            <p>1 of 4</p>
			
			</div>
            <div className={layout.grid_col_lg_1of4}>

            <p>1 of 4</p>
			
			</div>
            <div className={layout.grid_col_lg_1of4}>

            <p>1 of 4</p>
			
			</div>


            <div className={layout.grid_col_lg_1of3}>

			<p>1 of 3</p>
			</div>
			<div className={layout.grid_col_lg_1of3}>

            <p>1 of 3</p>
			
			</div>
            <div className={layout.grid_col_lg_1of3}>

            <p>1 of 3</p>
			
			</div>

            <div className={layout.grid_col_lg_1of3}>

			<p>1 of 3</p>
			</div>
			<div className={layout.grid_col_lg_2of3}>

            <p>2 of 3</p>
			
			</div>

            <div className={layout.grid_col_lg_1of4}>

            <p>1 of 4</p>
			
			</div>

            <div className={layout.grid_col_lg_3of4}>

			<p>3 of 4</p>
			</div>
		</div>

        <div className={layout.grid_styles + ' ' + layout.grid_container_25}>
        <div className={layout.grid_col_full_width}>

<p>full</p>
</div>

        </div>
        </div>
        );
};

Layout.propTypes = {
};

Layout.defaultProps = {
	// nothing
};

export default Layout;