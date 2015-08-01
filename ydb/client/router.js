// TODO: ES6


Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var hasParams = false;
        return CreateSubscriptions({
            "intro": hasParams
        });
    },
    action: function(){
        var router = this;
        var intro = Collections.presentation["intro"].find();


        router.render('home', {
            data: function () {
                return {
                    intro: intro
                }
            }
        });
        router.render('navbar', {
            to: "navbar"
        });
        router.render('footer', {
            to: "footer"
        });
    }
});