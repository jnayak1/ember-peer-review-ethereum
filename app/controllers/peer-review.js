import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		fileDetail(file) {
	        this.transitionToRoute('file',
	                               this.get('node'),
	                               file.get('provider'),
	                               file);
	    },

	    nodeDetail(node) {
	        this.transitionToRoute('nodes.detail', node);
	    }
	}
	
});
