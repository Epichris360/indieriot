"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Home = (function (Component) {
    function Home() {
        _classCallCheck(this, Home);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Home, Component);

    _prototypeProperties(Home, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "nav-container " },
                        React.createElement(
                            "div",
                            { className: "bar bar--sm visible-xs" },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-3 col-sm-2" },
                                        React.createElement(
                                            "a",
                                            { href: "index.html" },
                                            React.createElement("img", { className: "logo logo-dark", alt: "logo", src: "/dist/img/logo-dark.png" }),
                                            React.createElement("img", { className: "logo logo-light", alt: "logo", src: "/dist/img/logo-light.png" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-9 col-sm-10 text-right" },
                                        React.createElement(
                                            "a",
                                            { href: "#", className: "hamburger-toggle", "data-toggle-class": "#menu2;hidden-xs hidden-sm" },
                                            React.createElement("i", { className: "icon icon--sm stack-interface stack-menu" })
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "nav",
                            { id: "menu2", className: "bar bar-2 hidden-xs bar--transparent bar--absolute", "data-scroll-class": "90vh:pos-fixed" },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-2 text-center text-left-sm hidden-xs col-md-push-5" },
                                        React.createElement(
                                            "div",
                                            { className: "bar__module" },
                                            React.createElement(
                                                "a",
                                                { href: "index.html" },
                                                React.createElement(
                                                    "h3",
                                                    { className: "logo logo-dark" },
                                                    React.createElement(
                                                        "strong",
                                                        null,
                                                        "IndieRiot"
                                                    )
                                                ),
                                                React.createElement(
                                                    "h3",
                                                    { className: "logo logo-light" },
                                                    React.createElement(
                                                        "strong",
                                                        { style: { color: "white" } },
                                                        "IndieRiot"
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-5 col-md-pull-2" },
                                        React.createElement(
                                            "div",
                                            { className: "bar__module" },
                                            React.createElement(
                                                "ul",
                                                { className: "menu-horizontal text-left" },
                                                React.createElement(
                                                    "li",
                                                    { className: "dropdown" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "dropdown__trigger" },
                                                        "Home"
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "dropdown__container" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "container" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "row" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "col-sm-12 dropdown__content dropdown__content--lg" },
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "pos-absolute col-md-5 imagebg hidden-sm hidden-xs", "data-overlay": "4" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "background-image-holder" },
                                                                            React.createElement("img", { alt: "background", src: "/dist/img/dropdown-1.jpg" })
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "container pos-vertical-center" },
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "row" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "col-md-8 col-md-offset-2" },
                                                                                    React.createElement("img", { alt: "Logo", src: "/dist/img/logo-light.png", className: "image--xxs" }),
                                                                                    React.createElement(
                                                                                        "span",
                                                                                        { className: "h2 color--white" },
                                                                                        "Beautiful, modular sites in moments."
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "a",
                                                                                        { href: "#", className: "btn btn--primary type--uppercase" },
                                                                                        React.createElement(
                                                                                            "span",
                                                                                            { className: "label" },
                                                                                            "$17 USD."
                                                                                        ),
                                                                                        React.createElement(
                                                                                            "span",
                                                                                            { className: "btn__text" },
                                                                                            "Purchase Stack Now"
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "col-md-2 col-md-offset-6 col-sm-4" },
                                                                        React.createElement(
                                                                            "h5",
                                                                            null,
                                                                            "Industries"
                                                                        ),
                                                                        React.createElement(
                                                                            "ul",
                                                                            { className: "menu-vertical" },
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-accommodation.html" },
                                                                                    "Accommodation"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-construction.html" },
                                                                                    "Construction"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-coworking.html" },
                                                                                    "Coworking"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-drone-photography.html" },
                                                                                    "Drone Photography"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-education.html" },
                                                                                    "Education"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-event.html" },
                                                                                    "Event"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-fitness.html" },
                                                                                    "Fitness"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-health-insurance.html" },
                                                                                    "Insurance"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-knowledge-base.html" },
                                                                                    "Knowledge Base"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-musician.html" },
                                                                                    "Musician"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-nonprofit.html" },
                                                                                    "Nonprofit"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-political.html" },
                                                                                    "Political"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-restaurant.html" },
                                                                                    "Restaurant"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-recruitment.html" },
                                                                                    "Recruitment"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-tourism.html" },
                                                                                    "Tourism"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-wedding.html" },
                                                                                    "Wedding"
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "col-md-2 col-sm-4" },
                                                                        React.createElement(
                                                                            "h5",
                                                                            null,
                                                                            "Landing Pages"
                                                                        ),
                                                                        React.createElement(
                                                                            "ul",
                                                                            { className: "menu-vertical" },
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-1.html" },
                                                                                    "Landing 1"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-2.html" },
                                                                                    "Landing 2"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-3.html" },
                                                                                    "Landing 3"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-4.html" },
                                                                                    "Landing 4"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-5.html" },
                                                                                    "Landing 5"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-6.html" },
                                                                                    "Landing 6"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-7.html" },
                                                                                    "Landing 7"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-8.html" },
                                                                                    "Landing 8"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-9.html" },
                                                                                    "Landing 9"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-landing-10.html" },
                                                                                    "Landing 10"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-software-1.html" },
                                                                                    "Software 1"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-software-2.html" },
                                                                                    "Software 2"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-software-3.html" },
                                                                                    "Software 3"
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "col-md-2 col-sm-4" },
                                                                        React.createElement(
                                                                            "h5",
                                                                            null,
                                                                            "Portfolios"
                                                                        ),
                                                                        React.createElement(
                                                                            "ul",
                                                                            { className: "menu-vertical" },
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-portfolio-agency-1.html" },
                                                                                    "Agency"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-portfolio-agency-2.html" },
                                                                                    "Agency 2"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-portfolio-personal-1.html" },
                                                                                    "Personal 1"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-portfolio-photography.html" },
                                                                                    "Photography"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-portfolio-photography-2.html" },
                                                                                    "Photography 2"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-portfolio-studio-1.html" },
                                                                                    "Studio 1"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-portfolio-studio-2.html" },
                                                                                    "Studio 2"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-portfolio-video.html" },
                                                                                    "Video"
                                                                                )
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            "h5",
                                                                            null,
                                                                            "Coming Soon"
                                                                        ),
                                                                        React.createElement(
                                                                            "ul",
                                                                            { className: "menu-vertical" },
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-coming-soon-1.html" },
                                                                                    "Coming Soon 1"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-coming-soon-2.html" },
                                                                                    "Coming Soon 2"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "home-coming-soon-3.html" },
                                                                                    "Coming Soon 3"
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    { className: "dropdown" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "dropdown__trigger" },
                                                        "Pages"
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "dropdown__container" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "container" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "row" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "dropdown__content col-md-2 col-sm-4" },
                                                                    React.createElement(
                                                                        "ul",
                                                                        { className: "menu-vertical" },
                                                                        React.createElement(
                                                                            "li",
                                                                            { className: "dropdown" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "About"
                                                                            ),
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "dropdown__container" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "container" },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        { className: "row" },
                                                                                        React.createElement(
                                                                                            "div",
                                                                                            { className: "dropdown__content col-md-2" },
                                                                                            React.createElement(
                                                                                                "ul",
                                                                                                { className: "menu-vertical" },
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-about-company.html" },
                                                                                                        "About Company"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-about-team.html" },
                                                                                                        "About Team"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-about-me.html" },
                                                                                                        "About Me"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-about-history.html" },
                                                                                                        "About History"
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            "li",
                                                                            { className: "dropdown" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "Careers"
                                                                            ),
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "dropdown__container" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "container" },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        { className: "row" },
                                                                                        React.createElement(
                                                                                            "div",
                                                                                            { className: "dropdown__content col-md-2 col-sm-4" },
                                                                                            React.createElement(
                                                                                                "ul",
                                                                                                { className: "menu-vertical" },
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-careers.html" },
                                                                                                        "Careers Listing"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-careers-single.html" },
                                                                                                        "Career Single"
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            "li",
                                                                            { className: "dropdown" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "Contact"
                                                                            ),
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "dropdown__container" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "container" },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        { className: "row" },
                                                                                        React.createElement(
                                                                                            "div",
                                                                                            { className: "dropdown__content col-md-2 col-sm-4" },
                                                                                            React.createElement(
                                                                                                "ul",
                                                                                                { className: "menu-vertical" },
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-contact-map-1.html" },
                                                                                                        "Contact Map 1"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-contact-map-2.html" },
                                                                                                        "Contact Map 2"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-contact-map-3.html" },
                                                                                                        "Contact Map 3"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-contact-map-4.html" },
                                                                                                        "Contact Map 4"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-contact-planner-1.html" },
                                                                                                        "Contact Planner 1"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-contact-planner-2.html" },
                                                                                                        "Contact Planner 2"
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            "li",
                                                                            { className: "dropdown" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "Pricing"
                                                                            ),
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "dropdown__container" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "container" },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        { className: "row" },
                                                                                        React.createElement(
                                                                                            "div",
                                                                                            { className: "dropdown__content col-md-2 col-sm-4" },
                                                                                            React.createElement(
                                                                                                "ul",
                                                                                                { className: "menu-vertical" },
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-pricing-1.html" },
                                                                                                        "Pricing Plans 1"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-pricing-2.html" },
                                                                                                        "Pricing Plans 2"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-pricing-3.html" },
                                                                                                        "Pricing Plans 3"
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            "li",
                                                                            { className: "dropdown" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "Services"
                                                                            ),
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "dropdown__container" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "container" },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        { className: "row" },
                                                                                        React.createElement(
                                                                                            "div",
                                                                                            { className: "dropdown__content col-md-2 col-sm-4" },
                                                                                            React.createElement(
                                                                                                "ul",
                                                                                                { className: "menu-vertical" },
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-services-1.html" },
                                                                                                        "Services 1"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-services-2.html" },
                                                                                                        "Services 2"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-services-3.html" },
                                                                                                        "Services 3"
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            "li",
                                                                            { className: "dropdown separate" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "Accounts"
                                                                            ),
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "dropdown__container" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "container" },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        { className: "row" },
                                                                                        React.createElement(
                                                                                            "div",
                                                                                            { className: "dropdown__content col-md-2 col-sm-4" },
                                                                                            React.createElement(
                                                                                                "ul",
                                                                                                { className: "menu-vertical" },
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-accounts-profile.html" },
                                                                                                        "Public Profile"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-accounts-settings.html" },
                                                                                                        "Account Settings"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-accounts-login-1.html" },
                                                                                                        "Login Simple"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-accounts-login-2.html" },
                                                                                                        "Login Social"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-accounts-create-1.html" },
                                                                                                        "Create Simple"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-accounts-create-2.html" },
                                                                                                        "Create Social"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-accounts-recover.html" },
                                                                                                        "Recover Account"
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            "li",
                                                                            { className: "dropdown" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "Utilities"
                                                                            ),
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "dropdown__container" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "container" },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        { className: "row" },
                                                                                        React.createElement(
                                                                                            "div",
                                                                                            { className: "dropdown__content col-md-2 col-sm-4" },
                                                                                            React.createElement(
                                                                                                "ul",
                                                                                                { className: "menu-vertical" },
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-utility-conversation.html" },
                                                                                                        "Conversation"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "404.html" },
                                                                                                        "Error 404"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "500.html" },
                                                                                                        "Error 500"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-utility-maintnence.html" },
                                                                                                        "Maintnence Mode"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-utility-onboarding.html" },
                                                                                                        "Onboarding"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-utility-search-results-list.html" },
                                                                                                        "Search Results List"
                                                                                                    )
                                                                                                ),
                                                                                                React.createElement(
                                                                                                    "li",
                                                                                                    null,
                                                                                                    React.createElement(
                                                                                                        "a",
                                                                                                        { href: "page-utility-search-results.html" },
                                                                                                        "Search Results Boxes"
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    { className: "dropdown" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "dropdown__trigger" },
                                                        "Blocks"
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "dropdown__container" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "container" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "row" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "dropdown__content dropdown__content--lg col-md-8" },
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "pos-absolute col-md-5 imagebg hidden-sm hidden-xs", "data-overlay": "6" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "background-image-holder" },
                                                                            React.createElement("img", { alt: "background", src: "/dist/img/inner-6.jpg" })
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "container pos-vertical-center" },
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "row" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "col-md-10 col-md-offset-1" },
                                                                                    React.createElement("img", { alt: "Logo", src: "/dist/img/logo-light.png", className: "image--xxs" }),
                                                                                    React.createElement(
                                                                                        "span",
                                                                                        { className: "h3 color--white" },
                                                                                        "Over 290 modular interface blocks."
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "a",
                                                                                        { href: "#", className: "btn btn--primary type--uppercase" },
                                                                                        React.createElement(
                                                                                            "span",
                                                                                            { className: "btn__text" },
                                                                                            "Launch Builder"
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "col-md-6 col-md-offset-6" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "row" },
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "col-sm-6" },
                                                                                React.createElement(
                                                                                    "ul",
                                                                                    { className: "menu-vertical" },
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-accordions.html" },
                                                                                            "Accordions"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-cta.html" },
                                                                                            "Calls To Action"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-cards.html" },
                                                                                            "Cards"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-covers.html" },
                                                                                            "Covers"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-features-small.html" },
                                                                                            "Features Small"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-features-large.html" },
                                                                                            "Features Large"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-contact.html" },
                                                                                            "Forms Contact"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-signup.html" },
                                                                                            "Forms Signup"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-subscribe.html" },
                                                                                            "Forms Subscribe"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-footers.html" },
                                                                                            "Footers"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-galleries.html" },
                                                                                            "Galleries"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-instagram.html" },
                                                                                            "Instagram"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-maps.html" },
                                                                                            "Maps"
                                                                                        )
                                                                                    )
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "col-sm-6" },
                                                                                React.createElement(
                                                                                    "ul",
                                                                                    { className: "menu-vertical" },
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-modals.html" },
                                                                                            "Modals"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-navigation.html" },
                                                                                            "Navigation Bars"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-notifications.html" },
                                                                                            "Notifications"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-pricing.html" },
                                                                                            "Pricing"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-processes.html" },
                                                                                            "Processes"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-sliders.html" },
                                                                                            "Sliders"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-twitter.html" },
                                                                                            "Twitter"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-tabs.html" },
                                                                                            "Tabs"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-team.html" },
                                                                                            "Teams"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-testimonials.html" },
                                                                                            "Testimonials"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-text-layouts.html" },
                                                                                            "Text Layouts"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-titles.html" },
                                                                                            "Titles"
                                                                                        )
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "li",
                                                                                        null,
                                                                                        React.createElement(
                                                                                            "a",
                                                                                            { href: "sections-videos.html" },
                                                                                            "Videos"
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    { className: "dropdown" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "dropdown__trigger" },
                                                        "Elements"
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "dropdown__container" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "container" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "row" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "col-sm-12 dropdown__content dropdown__content--lg" },
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "pos-absolute col-md-5 imagebg hidden-sm hidden-xs", "data-overlay": "4" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "background-image-holder" },
                                                                            React.createElement("img", { alt: "background", src: "/dist/img/dropdown-2.jpg" })
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "container pos-vertical-center" },
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "row" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "col-md-8 col-md-offset-2" },
                                                                                    React.createElement("img", { alt: "Logo", src: "/dist/img/logo-light.png", className: "image--xxs" }),
                                                                                    React.createElement(
                                                                                        "span",
                                                                                        { className: "h3 color--white" },
                                                                                        "Detailed and organised elements"
                                                                                    ),
                                                                                    React.createElement(
                                                                                        "a",
                                                                                        { href: "elements.html", className: "btn btn--primary type--uppercase" },
                                                                                        React.createElement(
                                                                                            "span",
                                                                                            { className: "btn__text" },
                                                                                            "Explore Elements"
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "col-md-2 col-md-offset-6 col-sm-4" },
                                                                        React.createElement(
                                                                            "ul",
                                                                            { className: "menu-vertical" },
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-accordions.html" },
                                                                                    "Accordions"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-alerts.html" },
                                                                                    "Alerts"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-boxes.html" },
                                                                                    "Boxes"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-buttons.html" },
                                                                                    "Buttons"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-colors.html" },
                                                                                    "Colors"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-countdown.html" },
                                                                                    "Countdown"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-dropdowns.html" },
                                                                                    "Dropdowns"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-form-elements.html" },
                                                                                    "Form Elements"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-gradient-backgrounds.html" },
                                                                                    "Gradient Backgrounds"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-grid.html" },
                                                                                    "Grid System"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-image-backgrounds.html" },
                                                                                    "Image Backgrounds"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-instagram.html" },
                                                                                    "Instagram"
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "col-md-2 col-sm-4" },
                                                                        React.createElement(
                                                                            "ul",
                                                                            { className: "menu-vertical" },
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-lightbox.html" },
                                                                                    "Lightbox"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-maps.html" },
                                                                                    "Maps"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-masonry.html" },
                                                                                    "Masonry"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-modals.html" },
                                                                                    "Modals"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-navigation.html" },
                                                                                    "Navigation Bars"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-navigation-inpage.html" },
                                                                                    "Navigation In-Page"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-navigation-sidebar.html" },
                                                                                    "Navigation Sidebar"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-notifications.html" },
                                                                                    "Notifications"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-parallax.html" },
                                                                                    "Parallax"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-pricing.html" },
                                                                                    "Pricing"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-progress-bars.html" },
                                                                                    "Progress Bars"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-radials.html" },
                                                                                    "Radials"
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "col-md-2 col-sm-4" },
                                                                        React.createElement(
                                                                            "ul",
                                                                            { className: "menu-vertical" },
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-scrims-overlays.html" },
                                                                                    "Scrims & Overlays"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-sliders.html" },
                                                                                    "Sliders"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-tables.html" },
                                                                                    "Tables"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-tabs.html" },
                                                                                    "Tabs"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-tooltips.html" },
                                                                                    "Tooltips"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-twitter.html" },
                                                                                    "Twitter Feed"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-typed-text.html" },
                                                                                    "Typed Text"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-typography.html" },
                                                                                    "Typography"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-video-background.html" },
                                                                                    "Video Backgrounds"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-video-inline.html" },
                                                                                    "Video Inline"
                                                                                )
                                                                            ),
                                                                            React.createElement(
                                                                                "li",
                                                                                null,
                                                                                React.createElement(
                                                                                    "a",
                                                                                    { href: "elements-wizards.html" },
                                                                                    "Wizards"
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-5 text-right text-left-xs text-left-sm" },
                                        React.createElement(
                                            "div",
                                            { className: "bar__module" },
                                            React.createElement(
                                                "a",
                                                { className: "btn btn--sm type--uppercase", href: "#" },
                                                React.createElement(
                                                    "span",
                                                    { className: "btn__text" },
                                                    "Sign In"
                                                )
                                            ),
                                            React.createElement(
                                                "a",
                                                { className: "btn btn--sm btn--primary type--uppercase", href: "#" },
                                                React.createElement(
                                                    "span",
                                                    { className: "btn__text" },
                                                    "Sign Up"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "main-container" },
                        React.createElement(
                            "section",
                            { className: "cover height-90 imagebg text-center", "data-overlay": "2", id: "home" },
                            React.createElement(
                                "div",
                                { className: "background-image-holder" },
                                React.createElement("img", { alt: "background", src: "/dist/img/concert.jpg" })
                            ),
                            React.createElement(
                                "div",
                                { className: "container pos-vertical-center" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-8" },
                                        React.createElement("img", { alt: "Image", className: "unmarg--bottom", src: "/dist/img/headline-1.png" }),
                                        React.createElement(
                                            "h3",
                                            null,
                                            "Indie Concerts, for True Blue Fans. Know'em Before They Become Cool"
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "btn btn--primary type--uppercase", href: "#" },
                                            React.createElement(
                                                "span",
                                                { className: "btn__text" },
                                                "View The Demos"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: "text-center cta cta-4 space--xxs border--bottom " },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-12" },
                                        React.createElement(
                                            "span",
                                            { className: "label label--inline" },
                                            "Hot!"
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Over 290 interface blocks, 140 demo pages and Variant Page Builder.",
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Purchase Stack"
                                            ),
                                            " for $17 USD."
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: " " },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-4" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature-1" },
                                            React.createElement("img", { alt: "Image", src: "/dist/img/blog-1.jpg" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body boxed boxed--border" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Built for teams"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "Ideal for large and small organisations"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Learn More"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-4" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature-1" },
                                            React.createElement("img", { alt: "Image", src: "/dist/img/inner-5.jpg" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body boxed boxed--border" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Modern Aesthetic"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "A highly adaptable look that's simple"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Learn More"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-4" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature-1" },
                                            React.createElement("img", { alt: "Image", src: "/dist/img/inner-4.jpg" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body boxed boxed--border" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Beautiful markup"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "Following BEM conventions for readability"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Learn More"
                                                ),
                                                React.createElement(
                                                    "span",
                                                    { className: "label" },
                                                    "Hot"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: "text-center", id: "about" },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" },
                                        React.createElement(
                                            "h2",
                                            null,
                                            "Perfect for Designers & Developers"
                                        ),
                                        React.createElement(
                                            "p",
                                            { className: "lead" },
                                            "Whether you’re building a welcome mat for your SaaS or a clean, corporate portfolio, Stack has your design needs covered."
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { id: "features" },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature-5 boxed boxed--lg boxed--border" },
                                            React.createElement("i", { className: "icon icon-Pantone icon--lg" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Highly Customizable"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "Stack's visual style is simple yet distinct. Perfect for your next project whether it be basic marketing site, or multi-page company presence."
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Learn More"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature--featured feature-5 boxed boxed--lg boxed--border" },
                                            React.createElement(
                                                "span",
                                                { className: "label" },
                                                "Free"
                                            ),
                                            React.createElement("i", { className: "icon icon-Duplicate-Window icon--lg" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Page Builder Included"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "Construct mockups or production-ready pages in-browser with Variant Page Builder — Included FREE with every licence purchase."
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Learn More"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: "text-center bg--secondary" },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-8 col-md-6" },
                                        React.createElement(
                                            "h2",
                                            null,
                                            "Building beautiful sites is easy"
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "video-cover border--round" },
                                            React.createElement(
                                                "div",
                                                { className: "background-image-holder" },
                                                React.createElement("img", { alt: "image", src: "/dist/img/blog-3.jpg" })
                                            ),
                                            React.createElement("div", { className: "video-play-icon" }),
                                            React.createElement("iframe", { "data-src": "https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1", allowFullScreen: true })
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Stack includes Variant Page Builder — used by over",
                                            React.createElement(
                                                "strong",
                                                null,
                                                "17,000"
                                            ),
                                            " customers",
                                            React.createElement(
                                                "a",
                                                { target: "_blank", href: "#" },
                                                "Try Now &nearr;"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: "bg--primary unpad cta cta-2", id: "video" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement(
                                    "div",
                                    { className: "container" },
                                    React.createElement(
                                        "div",
                                        { className: "row" },
                                        React.createElement(
                                            "div",
                                            { className: "col-sm-12 text-center" },
                                            React.createElement(
                                                "h2",
                                                null,
                                                "Build a beautiful site with Stack"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "footer",
                            { className: "footer-6 unpad--bottom  bg--dark " },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-3" },
                                        React.createElement(
                                            "h6",
                                            { className: "type--uppercase" },
                                            "About Us"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Stack is a robust multipurpose HTML template designed with modularity at the core. Easily combine over 290 interface blocks to create websites for any purpose."
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-3" },
                                        React.createElement(
                                            "h6",
                                            { className: "type--uppercase" },
                                            "Recent Updates"
                                        ),
                                        React.createElement("div", { className: "tweets-feed tweets-feed-2", "data-feed-name": "mrareweb", "data-amount": "2" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-3" },
                                        React.createElement(
                                            "h6",
                                            { className: "type--uppercase" },
                                            "Instagram"
                                        ),
                                        React.createElement("div", { className: "instafeed instafeed--gapless", "data-user-name": "mediumrarethemes", "data-amount": "6", "data-grid": "3" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-3" },
                                        React.createElement(
                                            "h6",
                                            { className: "type--uppercase" },
                                            "Newsletter"
                                        ),
                                        React.createElement(
                                            "form",
                                            { action: "//mrare.us8.list-manage.com/subscribe/post?u=77142ece814d3cff52058a51f&id=f300c9cce8", "data-success": "Thanks for signing up.  Please check your inbox for a confirmation email.", "data-error": "Please provide your email address." },
                                            React.createElement("input", { className: "validate-required validate-email", type: "text", name: "EMAIL", placeholder: "Email Address" }),
                                            React.createElement(
                                                "button",
                                                { type: "submit", className: "btn btn--primary type--uppercase" },
                                                "Subscribe"
                                            ),
                                            React.createElement(
                                                "div",
                                                { style: { position: "absolute", left: "-5000px" }, "aria-hidden": "true" },
                                                React.createElement("input", { type: "text", name: "b_77142ece814d3cff52058a51f_f300c9cce8", tabIndex: "-1", value: "" })
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "footer__lower text-center-xs" },
                                React.createElement(
                                    "div",
                                    { className: "container" },
                                    React.createElement(
                                        "div",
                                        { className: "row" },
                                        React.createElement(
                                            "div",
                                            { className: "col-sm-6" },
                                            React.createElement(
                                                "span",
                                                { className: "type--fine-print" },
                                                "©",
                                                React.createElement("span", { className: "update-year" }),
                                                " Medium Rare — All Rights Reserved"
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col-sm-6 text-right text-center-xs" },
                                            React.createElement(
                                                "ul",
                                                { className: "social-list list-inline" },
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#" },
                                                        React.createElement("i", { className: "socicon socicon-google icon icon--xs" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#" },
                                                        React.createElement("i", { className: "socicon socicon-twitter icon icon--xs" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#" },
                                                        React.createElement("i", { className: "socicon socicon-facebook icon icon--xs" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#" },
                                                        React.createElement("i", { className: "socicon socicon-instagram icon icon--xs" })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Home;
})(Component);

module.exports = Home;
/*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end bar-->*/ /*<!--end module-->*/ /*<!--end of row-->*/ /*<!--end dropdown content-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end of row-->*/ /*<!--end of row-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end container-->*/ /*<!--end dropdown container-->*/ /*<!--end of row-->*/ /*<!--end dropdown content-->*/ /*<!--end dropdown container-->*/ /*<!--end module-->*/ /*<!--end module-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end bar-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end feature-->*/ /*<!--end feature-->*/ /*<!--end feature-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end video cover-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/