import React from "react";
import PropTypes from "prop-types";
import Layout from '../../components/Layout';
import Error404 from '../../components/404';

const ErrorPage404 = ({ ...props }) => {
	return (
		<>
            <Error404 />
        </>
        );
};

ErrorPage404.propTypes = {
};

ErrorPage404.defaultProps = {
	// nothing
};

export default ErrorPage404;