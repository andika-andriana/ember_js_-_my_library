import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveBook(){
      this.model.save().then(() =>{
        alert("Book Created!");
        this.transitionToRoute('list-of-book.index');
      }).catch((error)=>{
        alert("Create Book Failed!");
        console.log(error)
      });
    },
    cancelBook(){
      this.model.rollbackAttributes();
      this.transitionToRoute('list-of-book.index');
    }
  }
});
