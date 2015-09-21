'use strict';

var React = require('react'),

    HeroImage = React.createClass({
        render: function() {
            return (
                <div className="hero-image" style={{backgroundImage: 'url(' + this.props.heroImage + ')'}} >
                    <h1 className="hero-image-tagline">This is a tag line!</h1>
                </div>
            );
        }
    });

module.exports = HeroImage;
