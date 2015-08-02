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
    "click #sign-out": function (event,template) {
        Meteor.logout();
        Materialize.toast("Du &auml;r nu utloggad.", 5000, 'black');
    }
});


Template.edit_navbar.events({
    "click .edit": function (event,template) {
        var name = event.target.name;
        var navbarData = template.data;
        var id = navbarData._id;
        var affectedData = navbarData[name];

        console.debug(name, navbarData, id, affectedData.text);

        Session.set("editingNavbar", name);

    }
});

Template.form_navbar.events({
    "form submit": function (event,template) {
        event.preventDefault();
        console.debug(event, template);

        Session.set("editingNavbar", false);

    }
});