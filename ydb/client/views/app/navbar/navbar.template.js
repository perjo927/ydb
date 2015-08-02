Template.navbar.onRendered( function() {
    this.$('.button-collapse').sideNav();
    this.$(".dropdown-button").dropdown();
});

/* */
Template.navbar.events({
    "click #sign-out": function (event,template) {
        Meteor.logout();
        Materialize.toast("Du &auml;r nu utloggad.", 5000, 'black');
    }
});

Template.nav_items.helpers({
    "editingNavbar": App.Template.Session.getHelper("editingNavbar")
});


Template.edit_navbar.events({
    "click .edit": App.Template.Session.setDesignatedCollectionPropertyFromClickName("editingNavbar", "text")
});

Template.form_navbar.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingNavbar")
});

Template.form_navbar.helpers({
    "affectedProperty": App.Template.Session.getHelper("editingNavbar")
});
