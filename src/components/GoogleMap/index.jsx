import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const GoogleMap = ({ ...props }) => {
	
    
    const location = {
        address: '810 Ng. Quyền, An Hải Bắc, Sơn Trà, Đà Nẵng 55000, Vietnam',
        lat: 16.079240,
        lng: 108.232760,
      }

      const LocationPin = ({ text }) => (
        <div className={styles.pin}>
          <Icon icon={locationIcon} className={styles.pinIcon} />
          <p className={styles.pinText}>{text}</p>
        </div>
      )

      const zoomLevel = 19;
      
	return (
		<>
		<div className={styles.photos + ' ' + layout.grid_container_25}>
    <div className={layout.grid_col_lg_full_inner}>
      <h1 className={styles.heading}>contact us</h1>
    </div>
    <div className={styles.map + ' ' + layout.grid_col_lg_1of3}>
      <h2>Danang, Viet Nam</h2>
      <p>810 Ng. Quyền, An Hải Bắc, Sơn Trà, Đà Nẵng 55000, Vietnam</p>
      <p>t: +84 (0)795508810</p>
      <p>e: xinchao@codingmonsters.com</p>

      <h2>London, United Kingdom</h2>

      <p>t: +44 (0)7723190251</p>
      <p>e: info@codingmonsters.com</p>
    </div>
		<div className={styles.map + ' ' + layout.grid_col_lg_2of3}>
	
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC-3saqYuCFoW0F3BdAVAMVCja5Rz_g3_8' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text="Coding Monsters"
        />
      </GoogleMapReact>
			</div>
			
		
		</div>
		</>
        );
};

GoogleMap.propTypes = {
};

GoogleMap.defaultProps = {
	// nothing
};

export default GoogleMap;