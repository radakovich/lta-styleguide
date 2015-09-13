'use strict';

var React = require('react'),

    Icon = React.createClass({
        render: function() {
            return (
                <span className="main-nav-icon">
                    <i onClick={this.props.handleClick} className="fa fa-bars fa-2x"></i>
                </span>
            );
        }
    });

module.exports = Icon;
