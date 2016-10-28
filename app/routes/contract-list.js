import Ember from 'ember';
import Web3 from 'npm:web3';


var web3 = new Web3();

export default Ember.Route.extend({
    model(){
        Ember.$.getJSON("contracts/PeerReviewDAO.sol").then(function () {}, function(value) {
            // promise rejected
            var rawContract = value.responseText;
            console.log(rawContract);

            // compile contract
            var peerReviewDAOCompiled = web3.eth.compile.solidity(rawContract);
            console.log(peerReviewDAOCompiled);

            // get contract abi (TODO: this could be cached, no compilation required)
            var peerReviewDAOABI = peerReviewDAOCompiled.PeerReviewDAO.info.abiDefinition;
            var peerReviewContract = peerReviewDAOCompiled.PeerReview.info.abiDefinition;

            // get DAO by address and abi
            prDAO = web3.eth.contract(peerReviewDAOABI).at('0x83D72FE5687Ec864B1f7E1A7f783eeE9c88fc59B');

            // add every prContract in DAO to array
            var allPeerReviewContracts = prDAO.peerReviewContracts();
            console.log(allPeerReviewContracts);
        });        
    }
});
