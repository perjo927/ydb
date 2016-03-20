
Template.footer.onValidationDone = function (isValid, errorMessage, formContainer) {
    var successMessage = "Tack f&ouml;r ditt meddelande";

    var email = formContainer["email"],
        message = formContainer["textmessage"],
        subject = formContainer["fullname"] +
            " har skickat dig ett meddelande via Yellow Danger Brewery's webbplats . ";

    var callback = function(err, res) {
        if (!!err) {
            Materialize.toast(errorMessage, 5000, 'red');
        } else {
            Materialize.toast(successMessage, 5000, 'black');
            $('form').trigger("reset");
        }
    };

    if (isValid) {
        Meteor.call('sendEmail', email, message, subject, callback);
    } else {
        Materialize.toast(errorMessage, 5000, 'red');
    }
};
