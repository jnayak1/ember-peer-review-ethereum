import Ember from 'ember';
import Web3 from 'npm:web3';


export default Ember.Route.extend({
    model(){
        var web3 = new Web3();
        web3.eth.filter('latest', function(error, result){
          if (!error)
            console.log(result);
        });
    }

});
