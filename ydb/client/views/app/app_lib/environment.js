App = {
    "UI": {},
    "Collection": {},
    "Plugin": {},
    "Http": {}
};


/* */
App.UI.parseForm = function(event) {
    var formContainer = {};
    var form = $(event.target).serializeArray();

    form.forEach(function (element, index, array) {
        formContainer[element.name] = element.value;
    });
    return formContainer;
};

App.UI.validateName = function (name) {
    return name !== "";
};

App.UI.validateEmail = function(email) {
    return email.indexOf('@') !== -1;
};

App.UI.validateTextArea = function (text) {
    var length = text.length;
    var minLength = 20, maxLength = 500;
    var isValid = length >= minLength && length <= maxLength;

    return isValid;
};

App.UI.validateForm = function (formFields, formContainer, callback) {
    var errorMessage = "", isValid = undefined;

    isValid = formFields.every(function (ff, i, arr) {
        var fieldValidator = ff["method"],
            fieldValue = formContainer[ff["name"]];

        var valid = fieldValidator.call(null, fieldValue);
        var field = $("#" + ff["name"]);
        var validationClass = "pink lighten-3"; // TODO: fetch from theme (?)

        if (!valid) {
            field.addClass(validationClass);
            errorMessage += ff["name"] + ". ";
        } else {
            field.removeClass(validationClass);
        }
        return valid;
    });

    callback(isValid, errorMessage);
};



/* *** */
App.Collection.insert = function (collection, document, callback) {
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
App.Collection.update = function (collection, id, modifier, callback) {
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

App.Collection.remove = function (collection,_id, callback) {
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

App.Collection.findOne = function (collection, query) {
    if (!query) {
        return collection.findOne();
    }
    return collection.findOne(query);
};

App.Collection.find = function (collection, query) {
    if (!query) {
        return collection.find();
    }
    return collection.find(query);
};
