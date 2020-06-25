import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deleteBook(id){
      this.store.findRecord('book', id, { backgroundReload: false })
      .then(function(book) {
        book.deleteRecord();
        book.get('isDeleted'); // => true
        book.save(); // => DELETE to /book/:id
        alert('Book Deleted!');
      })
      .catch(function(error) {
        alert('Delete Failed!');
        console.log(error);
      });
    }
  }
});
