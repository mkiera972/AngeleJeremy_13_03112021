import React from 'react';
import PropTypes from 'prop-types';
/**
 * @FeaturesItem
 * @classdesc COMPONENT FeaturesItem
 * @param {string} props.imgSrc  - src img
 * @param {string} props.imgAlt  - alt img
 * @param {string} props.title  - title
 * @param {string} props.description  - description
 * @return DISPLAY FEATURE ITEM
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