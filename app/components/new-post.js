import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  admin: Ember.inject.service('logged-in'),
  actions: {
    save(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        date: moment().format('LL'),
        edited: moment().format('LL h:mm:ss a')
      };
      this.sendAction('save', params);
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
    }
  }
});
