var fireSelector = ".scrollfire.persons";

Template.team.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.team.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.team.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
    this.$('.modal-trigger').leanModal();
});


Template.team_cards.helpers({
    "cards": function () {
        return TeamCards;
    }
});