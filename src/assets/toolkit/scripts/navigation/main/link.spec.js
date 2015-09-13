'use strict';

var React = require('react/addons'),
    MainNavLink = require('./main-nav-bar-link'),
    TestUtils = React.addons.TestUtils;

describe('MainNavLink', function() {
    beforeEach(function() {
        var shallowRenderer = TestUtils.createRenderer();

        shallowRenderer.render(
            React.createElement(
                MainNavLink,
                {
                    link: 'http://www.whatevs.org',
                    text: 'whatevs'
                }
            )
        )

        self.component = shallowRenderer.getRenderOutput();
    });

    it('should render the proper link', function() {
        expect(self.component.props.href).toBe('http://www.whatevs.org');
    });

    it('should render the proper text', function() {
        expect(self.component.props.children).toBe('whatevs');
    });

    it('should render an anchor tag', function() {
        expect(self.component.type).toBe('a');
    });

    it('should have a className of mainNavLink', function() {
        expect(self.component.props.className).toBe('mainNavLink');
    });
});
