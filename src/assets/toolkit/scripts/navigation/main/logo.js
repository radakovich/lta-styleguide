'use strict';

var React = require('react'),

    Logo = React.createClass({
        render: function() {
            return (
                <h1 className="logo-header">
                    <a href={this.props.logoLink} className="main-nav-logo">
                        {this.props.logoText}
                    </a>
                </h1>
            );
        }
    });

module.exports = Logo;
