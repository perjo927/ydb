// TODO: ES6


Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var noParams = false;
        return CreateSubscriptions({
            "intro": noParams,
            "work": noParams
        });
    },
    action: function(){
        var router = this;
        var intro = Collections.presentation["intro"].find();
        var work = Collections.presentation["work"].find();

        router.render('home', {
            data: function () {
                return {
                    intro: intro,
                    work: work
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