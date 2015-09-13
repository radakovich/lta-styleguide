/**
 * Toolkit JavaScript
 */

'use strict';
var React = require('react'),
    MainNavBar = require('./navigation/main/bar');

React.render(
    React.createElement(MainNavBar, {
        navItems: [
            {
                id: 1,
                link: 'http://www.google.com',
                text: 'Donate'
            },
            {
                id: 2,
                link: 'http://espn.go.com',
                text: 'Amazon Smile'
            },
            {
                id: 3,
                link: 'http://news.ycombinator.com',
                text: 'Newsletter'
            },
            {
                id: 4,
                link: 'http://www.robbwolf.com',
                text: 'Blog'
            },
            {
                id: 5,
                link: 'http://www.amazon.com',
                text: 'About'
            }

        ],
        logoLink: '#',
        logoText: 'LTA Library'
    }),
    document.getElementById('mainNav')
);
