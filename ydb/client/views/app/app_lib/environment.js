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
        var validationClass = "red lighten-3";

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

/* */
App.Template["Session"] = {};

App.Template.Session.getHelper = function (variable) {
    return function () {
        return Session.get(variable);
    }
};

App.Template.Session.setHelper = function (variable, value) {
    return function () {
        Session.set(variable, value);
    }
};

App.Template.Session.setDesignatedCollectionPropertyFromClickName = function (sVariable, attribute) {
    return function (event) {
        var name = event.target.name;
        if (!!attribute) {
            name = name + "." + attribute;
        }
        Session.set(sVariable, name);
    }
};

App.Template.Session.toggleAfterKeyPress = function (variable) {
    return function (event) {
        console.debug(event.keyCode);
        // 13 = Enter, 17 = Ctrl+q, 27 = Esc
        if (event.keyCode == 13 || event.keyCode == 17 || event.keyCode == 27) {
            Session.set(variable, false);
        }
    }
};
