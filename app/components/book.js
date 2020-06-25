import Component from '@ember/component';

export default Component.extend({
  typeBooks: Array(),
  init(){
    this._super(...arguments);
    let types = ["One Of Novel","Documentation","Other"];
    this.set('typeBooks', types);
  },
});
