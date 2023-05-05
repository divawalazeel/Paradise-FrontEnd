import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="section-features" id="benefits">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et maxime quia ea voluptatibus obcaecati.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ea suscipit soluta consequuntur illum.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, inventore voluptas dolorem delectus.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fuga vel, ipsam consequuntur eum ratione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;