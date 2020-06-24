import Controller from '@ember/controller';

export default Controller.extend({
  typeBooks: Array(),

  init(){
    this._super(...arguments);
    let types = ["One Of Novel","Documentation","Other"];
    this.set('typeBooks', types);
  },

  actions:{
    onChangeCombo(item){
      console.log(item);
    },
  }
});
