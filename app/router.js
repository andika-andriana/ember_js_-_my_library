import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list-of-book', {path: '/'},
  function() {
    this.route('create',{path: '/create'});
    this.route('edit',{path: '/edit/:id'});
    this.route('detail',{path: '/detail/:id'});
  });
});

export default Router;
