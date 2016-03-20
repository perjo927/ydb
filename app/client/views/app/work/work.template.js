var fireSelector = ".scrollfire.cards";

Template.work.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.work.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.work.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);
    this.$('.modal-trigger').leanModal();
});

Template.work_cards.helpers({
    "cards": function () {
        return WorkCards;
    }
});