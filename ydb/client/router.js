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
            "team": noParams,
            "navbar": noParams
        });
    },
    action: function(){
        var router = this;
        // TODO: refactor
        var intro = Collections.presentation["intro"].find();
        var work = Collections.presentation["work"].find();
        var team = Collections.presentation["team"].find();
        var navbar = Collections.presentation["navbar"].find();

        router.render('home', {
            data: function () {
                // TODO: refactor
                return {
                    intro: intro,
                    work: work,
                    team: team,
                    navbar: navbar
                }
            }
        });
        router.render('navbar', {
            to: "navbar",
            data: function () {
                return {
                    navbar: navbar
                }
            }
        });
        router.render('footer', {
            to: "footer"
        });
    }
});