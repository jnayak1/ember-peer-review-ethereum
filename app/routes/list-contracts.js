import Ember from 'ember';

export default Ember.Route.extend({
    web3js: Ember.inject.service('web3js'),
    model(){
        // get all PeerReview contracts from PeerReviewDAO
    }
});
