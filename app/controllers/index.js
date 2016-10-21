import Ember from 'ember';
import Web3 from 'npm:web3';


export default Ember.Controller.extend({
    actions:{
        sendContract(journalAddress, amountToSend, fileHash){
            
            var web3 = new Web3();

            // set rpc
            web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));


            // Get contract
            // Promise will be rejected because file isn't json, use rejection function
            Ember.$.getJSON("contracts/PeerReviewContract.sol").then(function () {}, function(value) {
                // promise rejected
                var rawContract = value.responseText;
                console.log(rawContract);

                // compile contract
                var peerReviewCompiled = web3.eth.compile.solidity(rawContract);
                console.log(peerReviewCompiled);

                // Deploy contract
                var _journal = journalAddress;
                var peerReviewContract = web3.eth.contract(peerReviewCompiled.PeerReview.info.abiDefinition);

                var peerReview = peerReviewContract.new(_journal,{from:web3.eth.accounts[0], data: peerReviewCompiled.PeerReview.code, gas: 1000000}, function(e, contract){
                  if(!e) {

                    if(!contract.address) {
                      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

                    } else {
                      console.log("Contract mined! Address: " + contract.address);
                      console.log(contract);
                    }

                  } else{
                    console.log(e);
                  }
                });
                console.log(peerReview);
            });
        }

    }
});
