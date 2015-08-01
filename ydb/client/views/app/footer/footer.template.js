Template.footer.events({
    "submit form": function (event, template) {
        event.preventDefault();

        console.debug("Send");
        // TODO: App parse

        // TODO: Email.send(), assets


        var successMessage = "Email has been sent successfully.";

        var email = "email",
            message = "textmessage",
            subject = " has sent you a message from the contact form at ydb.com. ";

        var callback = function(err, res) {
            console.info(err, res);

            if (!!err) {
                Materialize.toast(errorMessage, 5000, 'red');
            } else {
                Materialize.toast(successMessage, 5000, 'black');

            }
        };

        Meteor.call('sendEmail', email, message, subject, callback);
    }
});
