'use strict';

var React = require('react'),
    Icon = require('./icon'),
    Link = require('./link'),
    Links = require('./links'),
    Logo = require('./logo'),

    Bar = React.createClass({
        getInitialState: function() {
            return {
                displayMenu: window.innerWidth > 800,
                windowWidth: window.innerWidth
            };
        },

        handleResize: function(e) {
            this.setState({windowWidth: window.innerWidth});
            this.setState({displayMenu: window.innerWidth > 800})
        },

        componentDidMount: function() {
            window.addEventListener('resize', this.handleResize);
        },

        componentWillUnmount: function() {
            window.removeEventListener('resize', this.handleResize);
        },

        handleIconClick: function(event) {
            this.setState({
                displayMenu: !this.state.displayMenu
            });
        },

        render: function() {
            return (
                <nav className="main-nav-bar">
                    <div className="logo-icon-wrapper">
                        <Logo logoLink={this.props.logoLink} logoText={this.props.logoText} />
                        <Icon handleClick={this.handleIconClick}/>
                    </div>
                    <Links navItems={this.props.navItems} display={this.state.displayMenu}/>
                </nav>
            );
        }
    });

module.exports = Bar;
