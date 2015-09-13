'use strict';

var React = require('react'),
    Link = require('./link'),
    classNames = require('classnames'),

    Links = React.createClass({
        render: function() {
            var classes = classNames({
                'main-nav-links': true,
                'is-hidden': !this.props.display
            });

            return (
                <div className={classes}>
                    {this.props.navItems.map(function(navItem) {
                        return <Link key={navItem.id} link={navItem.link} text={navItem.text} />;
                    })}
                </div>
            );
        }
    });

module.exports = Links;
