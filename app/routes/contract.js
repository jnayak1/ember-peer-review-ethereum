import Ember from 'ember';
import Web3 from 'npm:web3';

export default Ember.Route.extend({
    model(){
        // get web3 instance
        var web3 = new Web3();

        // set rpc
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

        // get coinbase address
        var coinbase = web3.eth.coinbase;
        console.log(coinbase);

        // get balance of coinbase address
        var balance = web3.eth.getBalance(coinbase).toNumber();
        console.log(balance);

        // get all accounts
        var accounts = web3.eth.accounts;
        console.log(accounts);

        // for each account, get balance
        for (var i = 0; i < accounts.length; i++) {
            console.log(accounts[i] + ": " + web3.eth.getBalance(accounts[i]).toNumber());
        }

        // Get contract
        // Promise will be rejected because file isn't json, use rejection function
        Ember.$.getJSON("contracts/PeerReviewContract.sol").then(function () {}, function(value) {
            // rejection
            // promise rejected because not json file
            var contract = value.responseText;
            var contractWOLineBreaks = contract.replace(/\r?\n|\r/g, "");
            console.log(contractWOLineBreaks);
        });
    }
});
