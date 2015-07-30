// TODO: ES6

Router.route('/', {
    name: "home",
    //loadingTemplate: "loading",
    //layoutTemplate: "app",

    action: function(){
        var router = this;

        router.render('home');
    }
});