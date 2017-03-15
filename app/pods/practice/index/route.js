import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    title: "Daily CodeBytes"
  },
  model() {
    return this.get('store').query('problem', {weekly: true});
  }
});