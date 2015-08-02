// Runs in both client and server contexts

//App

Collections = {
    "presentation": {},
    "server": {}
};

// Presentation collections to create
ContentAreas =
    [
        "intro",
        "work",
        "team",
        "navbar"
    ];

ContentAreas.forEach(function (area) {
    Collections.presentation[area] = new Mongo.Collection(area);
});

/* LIB */


/* *** */
AppLib.Collection.insert = function (collection, document, callback) {
    collection.insert(document, function (error, id) {
        if (!!error) {
            //console.error(error);
        } else {
            //console.info(id);
            if (!!callback) {
                callback();
            }
        }
    });
};

//
AppLib.Collection.update = function (collection, id, modifier, callback) {
    collection.update(id, modifier, function (error, id) {
        if (!!error) {
            //console.error("Features update", error);
        } else {
            //console.info("Features update", id);
            if (!!callback) {
                callback();
            }
        }
    });
};

AppLib.Collection.remove = function (collection,_id, callback) {
    collection.remove(_id, function (error) {
        if(!!error) {
            //console.error(error);
        } else {
            //console.info("Removed",docViewer)
            if (!!callback) {
                callback();
            }
        }
    });
};

AppLib.Collection.findOne = function (collection, query) {
    if (!query) {
        return collection.findOne();
    }
    return collection.findOne(query);
};

AppLib.Collection.find = function (collection, query) {
    if (!query) {
        return collection.find();
    }
    return collection.find(query);
};
