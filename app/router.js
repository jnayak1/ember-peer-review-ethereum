import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('journals');
  this.route('create-contract');
  this.route('view-contract', { path: '/view-contract/:contract_id' });
  this.route('list-contracts');
  this.route('create-journal');
});

export default Router;
