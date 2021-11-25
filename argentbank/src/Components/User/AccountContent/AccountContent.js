import React from 'react';
import PropTypes from 'prop-types';

/**
 * @AccountContent
 * @classdesc COMPONENT AccountContent
 * GET DATA FROM COMPONENT USER
 * @param {string} props.amount  - amount
 * @param {string} props.title  - title
 * @param {string} props.description  - description
 * @return DISPLAY INFOS ACOUNT
 */
const AccountContent = ({title, amount, description}) => {
    return (
        <section className='account'>
            <article className='account-content-wrapper'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>{amount}</p>
                <p className='account-amount-description'>{description}</p>
            </article>
            <div className='account-content-wrapper cta'>
               <button className='transaction-button'>View transactions</button>
            </div>
        </section>
    );
}

AccountContent.propTypes = {
    title : PropTypes.string.isRequired,
    amount : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

export default AccountContent;