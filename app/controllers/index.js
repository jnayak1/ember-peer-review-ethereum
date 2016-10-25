import Ember from 'ember';
import Web3 from 'npm:web3';


export default Ember.Controller.extend({
    contract: null,
    contractValue: null,
    contractState: null,
    contractJournal: null,
    contractResearcher: null,
    contractFileHash: null,
    actions:{
        sendContract(journalAddress, amountToSend, fileHash){
            
            var web3 = new Web3();

            // set rpc
            web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

            var _controller = this;
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

                var peerReview = peerReviewContract.new(_journal,{from:web3.eth.accounts[0], value: web3.toWei(amountToSend,'ether'), data: peerReviewCompiled.PeerReview.code, gas: 1000000}, function(e, contract){
                  if(!e) {

                    if(!contract.address) {
                      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

                    } else {
                      console.log("Contract mined! Address: " + contract.address);
                      _controller.set('contract', contract);
                      _controller.set('contractValue', web3.fromWei(contract.value(), "ether").toString());
                      _controller.set('contractState', contract.state());
                      _controller.set('contractJournal', contract.journal());
                      _controller.set('contractResearcher', contract.researcher());
                      _controller.set('contractFileHash', contract.fileHash());
                      console.log(_controller.get('contract'));

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
