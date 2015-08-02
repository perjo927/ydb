var fireSelector = ".scrollfire" + "." + "icons";


Template.intro.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.intro.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.intro.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);

});

Template.edit_intro_title.events({
    "click .edit": App.Template.Session.setHelper("editingIntroTitle", "mdTitle")
});

Template.form_intro_title.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingIntroTitle")
});

//Template.form_navbar.helpers({
//    "affectedProperty": App.Template.Session.getHelper("editingNavbar")
//});
