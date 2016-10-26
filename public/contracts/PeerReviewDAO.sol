pragma solidity ^0.4.2;

import "PeerReviewContract";

contract PeerReviewDAO {
    address[] peerReviewContracts;

    function createPeerReviewContract(address initJournal, bytes initFileHash) payable {
        // https://solidity.readthedocs.io/en/develop/control-structures.html#creating-contracts-via-new
        // Cannot limit the amount of gas
        
        PeerReview newPR = (new PeerReview).value(msg.value)(initJournal, initFileHash)
    }
}