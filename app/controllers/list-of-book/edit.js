import Controller from '@ember/controller';

export default Controller.extend({
  typeBooks: Array(),

  init(){
    this._super(...arguments);
    let types = ["One Of Novel","Documentation","Other"];
    this.set('typeBooks', types);
  },
  actions:{
    saveBook(){
      this.model.save().then((response) =>{
        alert("Book Updated!");
        this.transitionToRoute('list-of-book.detail', response.id);
      }).catch((error)=>{
        alert("Update Book Failed!");
        console.log(error)
      });
    }
  }
});
