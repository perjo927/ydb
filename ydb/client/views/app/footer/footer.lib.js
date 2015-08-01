// TODO : Es6

Footer = {};


Footer.onValidationDone = function (isValid, errorMessage, formContainer) {
    var successMessage = "Meddelandet har skickats.";

    var email = formContainer["email"],
        message = formContainer["textmessage"],
        subject = formContainer["fullname"] +
            " har skickat dig ett meddelande på Yellow Dangers hemsida . ";

    var callback = function(err, res) {
        console.info(err, res); // TODO: remove

        if (!!err) {
            Materialize.toast(errorMessage, 5000, 'pink');
        } else {
            Materialize.toast(successMessage, 5000, 'cyan');
            $('form').trigger("reset");
        }
    };

    if (isValid) {
        Meteor.call('sendEmail', email, message, subject, callback);
    } else {
        Materialize.toast(errorMessage, 5000, 'pink');
    }
};
