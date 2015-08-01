//
var checkUser = function (collection, userId) {
    check(collection, String);
    check(userId, String);

    if (!!userId) {
        return Collections.presentation[collection].find();
    } else {
        return [];
    }
};


/* TODO: refactor, forEach */
Meteor.publish("intro", function () {
    return Collections.presentation["intro"].find();
});
Meteor.publish("work", function () {
    return Collections.presentation["work"].find();
});
Meteor.publish("team", function () {
    return Collections.presentation["team"].find();
});
Meteor.publish("navbar", function () {
    return Collections.presentation["navbar"].find();
});
//
//Meteor.publish("estimationsPerRoom", function (roomId) {
//    return checkUser("estimations", roomId, this.userId);
//});

