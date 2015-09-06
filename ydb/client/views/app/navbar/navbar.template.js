Template.navbar.onRendered( function() {
    this.$('.button-collapse').sideNav();
    this.$(".dropdown-button").dropdown();
});

Template.nav_items.helpers({
    "items": function () {
        return NavbarItems;
    }
});