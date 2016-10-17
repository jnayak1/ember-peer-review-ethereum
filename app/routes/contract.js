import Ember from 'ember';
import Web3 from 'npm:web3';

export default Ember.Route.extend({
    model(){
        var web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
        var coinbase = web3.eth.coinbase;
        console.log(web3.eth.accounts);
        console.log(coinbase);
        var balance = web3.eth.getBalance(coinbase).toNumber();
        console.log(balance);
        Ember.$.getJSON("PeerReviewContract.json").then(function (contract) {
            console.log(contract.data);
        });
    }
});
