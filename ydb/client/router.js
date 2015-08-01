// TODO: ES6


Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    waitOn: function() {
        var noParams = false;
        // TODO: refactor
        return CreateSubscriptions({
            "intro": noParams,
            "work": noParams,
            "team": noParams
        });
    },
    action: function(){
        var router = this;
        // TODO: refactor
        var intro = Collections.presentation["intro"].find();
        var work = Collections.presentation["work"].find();
        var team = Collections.presentation["team"].find();

        router.render('home', {
            data: function () {
                // TODO: refactor
                return {
                    intro: intro,
                    work: work,
                    team: team
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