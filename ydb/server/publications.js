//
var checkUser = function (collection, userId) {
    check(collection, String);
    check(userId, String);

    if (!!userId) {
        return Collections.presentation[collection].find({roomId: roomId});
    } else {
        return [];
    }
};



/* */
Meteor.publish("intro", function () {
    return Collections.presentation["intro"].find();
});


//
//Meteor.publish("estimationsPerRoom", function (roomId) {
//    return checkUser("estimations", roomId, this.userId);
//});

