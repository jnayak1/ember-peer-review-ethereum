import Ember from 'ember';

var contractParams = {
            journalAddress: '',
            amountToSend: 0,
            fileHash: ''
}

export default Ember.Route.extend({
    model(){
        return contractParams;
    }
});
