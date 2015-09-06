// TODO: 404, etc


Router.route('/', {
    name: "home",
    loadingTemplate: "loading",
    layoutTemplate: "app",
    action: function(){
        var router = this;

        router.render('home', {});
        router.render('navbar', {
            to: "navbar"
        });
        router.render('footer', {
            to: "footer"
        });
    }
});


