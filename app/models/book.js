import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  datePublished: DS.attr('date'),
  numberOfPages: DS.attr('number'),
  typeOfBook: DS.attr('string'),
  cover: DS.attr('string')
});
