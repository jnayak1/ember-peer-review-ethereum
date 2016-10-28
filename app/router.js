import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('peer-review', { path: '/peer-review/:node_id' });
  this.route('login');
  this.route('signup');
  this.route('journals');
  this.route('contract');
  this.route('filters');
  this.route('contract-list');
});

export default Router;
