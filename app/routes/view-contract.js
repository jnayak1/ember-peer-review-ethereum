import Ember from 'ember';

export default Ember.Route.extend({
    web3js: Ember.inject.service('web3js'),
    model(params){
        // get PeerReview contract by address
        console.log(params);
    }
});
