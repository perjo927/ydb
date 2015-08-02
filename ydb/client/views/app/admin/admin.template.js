Template.admin.events({
    "submit form": function (event) {
        event.preventDefault();

        var formContainer = AppLib.UI.parseForm(event);

        // Validation in case HTML5 validation fails
        var formFields = [
            {
                name: "fullname",
                method: AppLib.UI.validateName
            },
            {
                name: "email",
                method: AppLib.UI.validateEmail
            }
        ];

        AppLib.UI.validateForm(formFields, formContainer, function (isValid, error) {
            var errorMessage =
                "F&ouml;ljande formul&auml;r hade felaktig data: "
                + error
                + ". Var god f&ouml;rs&ouml;k igen.";

            Admin.onValidationDone(isValid, errorMessage, formContainer);
        });
        // TODO: parse and redirect to home
        // TODO: Meteor.call
    }
});


