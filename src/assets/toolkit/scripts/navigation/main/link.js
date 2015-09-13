'use strict';

var React = require('react'),

    Link = React.createClass({
        render: function() {
            return (
                <a className="main-nav-link" href={this.props.link}>{this.props.text}</a>
            );
        }
    });

module.exports = Link;
