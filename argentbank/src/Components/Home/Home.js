import React from 'react';
import {HOME_DATA} from '../../data/data';
import FeatureItem from './FeatureItem/FeatureItem';
/**
 * @Home
 * @classdesc COMPONENT Home
 * @return DISPLAY HOME PAGE
 */
class Home extends React.Component {
  render(){
    return (
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
            {HOME_DATA.map(({ id, imgSrc, imgAlt, title, description }) => (
                  <FeatureItem
                      key = {id}
                      imgSrc = {imgSrc}
                      imgAlt = {imgAlt}
                      title = {title}
                      description = {description}
                  />
            ))}
        </section>
      </main>
    );
  }
}

export default Home;