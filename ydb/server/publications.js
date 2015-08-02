//

ContentAreas.forEach(function (key) {
    Meteor.publish(key, function () {
        return Collections.presentation[key].find();
    });
});
