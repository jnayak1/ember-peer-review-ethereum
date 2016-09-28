import Ember from 'ember';

import { getAuthUrl } from 'ember-osf/utils/auth';

import OsfTokenLoginControllerMixin from 'ember-osf/mixins/osf-token-login-controller';

export default Ember.Controller.extend(OsfTokenLoginControllerMixin, {
	actions:{
		login() {
            window.location = getAuthUrl(window.location);
        }
    }
});
