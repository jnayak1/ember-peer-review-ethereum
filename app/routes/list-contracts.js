import Ember from 'ember';
import Web3 from 'npm:web3';

var contractParams = {
    journalAddress: '',
    amountToSend: 0,
    fileHash: ''
}

var web3 = new Web3();
// set rpc
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

export default Ember.Route.extend({
});
