'use strict';

var React = require('react/addons'),
    MainNavBar = require('./main-nav-bar'),
    TestUtils = React.addons.TestUtils;

describe('MainNavBar', function() {
    beforeEach(function() {
        var shallowRenderer = TestUtils.createRenderer();

        shallowRenderer.render(
            React.createElement(
                MainNavBar,
                {
                    navItems: [
                        {
                            id: 1,
                            link: 'http://www.google.com',
                            text: 'Google'
                        },
                        {
                            id: 2,
                            link: 'http://espn.go.com',
                            text: 'ESPN'
                        },
                        {
                            id: 3,
                            link: 'http://news.ycombinator.com',
                            text: 'Hacker News'
                        }
                    ]
                }
            )
        )

        self.component = shallowRenderer.getRenderOutput();
    });

    it('should render 3 navigation links', function() {
        expect(self.component.props.children.length).toBe(3);
    });

    it('should have Google as first text', function() {
        expect(
            self.component.props.children[0].props.text
        ).toBe('Google');
    });

    it('should have Google as first link', function() {
        expect(
            self.component.props.children[0].props.link
        ).toBe('http://www.google.com');
    });

    it('should have ESPN as second text', function() {
        expect(
            self.component.props.children[1].props.text
        ).toBe('ESPN');
    });

    it('should have ESPN as second link', function() {
        expect(
            self.component.props.children[1].props.link
        ).toBe('http://espn.go.com');
    });

    it('should have Hacker News as third text', function() {
        expect(
            self.component.props.children[2].props.text
        ).toBe('Hacker News');
    });

    it('should have Hacker News as third link', function() {
        expect(
            self.component.props.children[2].props.link
        ).toBe('http://news.ycombinator.com');
    });
});
