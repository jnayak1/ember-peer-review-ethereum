import Ember from 'ember';

export default Ember.Controller.extend({
	download: null,
	actions:{
		fileDetail(file) {
			var download = file.get('links.download');
			this.set('download', download);
	    },

	    nodeDetail(node) {
	        this.transitionToRoute('nodes.detail', node);
	    }
	}
	
});
