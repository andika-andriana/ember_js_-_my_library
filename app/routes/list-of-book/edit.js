import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'list-of-book/input',
  model({id}){
    return this.store.peekRecord('book', id);
  }
});
