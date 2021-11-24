import React from 'react';
import PropTypes from 'prop-types';
/**
 * @FeaturesItem
 * @classdesc COMPONENT Home
 * @return DISPLAY HOME PAGE
 */
 const FeatureItem = ({imgSrc, imgAlt, title, description}) => {
    return (
        <div className='feature-item'>
            <img src={imgSrc} className='feature-icon' alt={imgAlt}/>
            <h3 className='feature-item-title'>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

FeatureItem.propTypes = {
    imgSrc : PropTypes.string.isRequired,
    imgAlt : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

export default FeatureItem;