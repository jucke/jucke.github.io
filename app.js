var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});
App.Router.map(function() {
    this.route('credits', {
        path: '/thanks'
    });
    this.route('about', {
        path: '/about'
    });
    this.resource('contacts', function() {
        this.resource('contact', {
            path: '/:contact_id'
        });
    });
});

App.IndexController = Ember.Controller.extend({
    logo: 'images/logo-small.png',
    time: function() {
        return (new Date()).toDateString();
    }.property()
});
App.ContactsIndexController = Ember.Controller.extend({
    contactName: 'Anostagia',
    avatar: 'images/avatar.png',
    open: function() {
        return ((new Date()).getDay() === 0) ? "Closed" : "Open";
    }.property()
});

App.ContactsRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('contact');
    }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Contact = DS.Model.extend({
    name: DS.attr('string'),
    about: DS.attr('string'),
    avatar: DS.attr('string')
});
App.Contact.FIXTURES = [{
    id: 200,
    name: 'Giamia',
    about: 'Although Giamia came from a humble spark of lightning, he quickly grew to be a great craftsman, providing all the warming instruments needed by those close to him.',
    avatar: 'images/contacts/giamia.png'
}, {
    id: 201,
    name: 'Anostagia',
    about: 'Knowing there was a need for it, Anostagia drew on her experience and spearheaded the Flint & Flame storefront. In addition to coding the site, she also creates a few products available in the store.',
    avatar: 'images/contacts/anostagia.png'
}];