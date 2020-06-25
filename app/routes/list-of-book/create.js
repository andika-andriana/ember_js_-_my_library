import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  templateName: 'list-of-book/input',
  book: service(),
  
  model(){
    var data = this.store.createRecord('book');
    this.book.setModel(data);
    return this.book.model;
  },
});
