import Ember from 'ember';
import Web3 from 'npm:web3'; 

export default Ember.Service.extend({
    web3: null,

    init() {
        this._super(...arguments);
        var web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
        this.set('web3', web3);
    }
});
