Template.body.onRendered(function () {
    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({menuWidth: 240, activationWidth: 70});
    $('.parallax').parallax();
});