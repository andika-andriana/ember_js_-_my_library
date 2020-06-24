export default function() {
  // namespace
  this.namespace = '/api';

  // static-API books-data
  this.get('/books', 'book');
  this.post('/books', 'book');
  this.put('/books/:id', 'book');
  this.patch('/books/:id', 'book');
  this.del('/books/:id', 'book');
}
