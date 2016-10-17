import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
    namespace : '',
    host: 'localhost:8000',


    //this function exists to deal with the trailing /, See ember-osf adapter
    buildURL(){
        var url = this._super(...arguments);
        if (url.lastIndexOf('/') !== url.length - 1) {
            url += '/';
        }
        return url;
    },
    ajax: function(url, method, hash) {
        hash = hash || {};
        hash.crossDomain = true;
        hash.xhrFields = {withCredentials: true};
        return this._super(url, method, hash);
    },

    headers: Ember.computed(function() {
        var csrftoken = "";
        try {
            csrftoken = Ember.get(document.cookie.match(/csrftoken\=([^;]*)/), "1");
        } catch(e){
            console.log(e);
            console.log('no csrftoken present');
        }

        return { "X-CSRFToken": csrftoken };
    }).volatile()
});
