import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title(i){
    return `${faker.random.arrayElement([
      "THE SOCIAL NETWORK",
      "TAKEDOWN",
      "PIRATES OF SILICON VALLEY",
      "THE IMITATION GAME",
      "THE FIFTH ESTATE",
      "JOBS",
      "HACKERS",
      "TRON",
      "THE MATRIX",
      "WAR GAMES",
      "SOURCE CODE"
    ])} ${i}`;
  },
  author(){
    return faker.name.firstName();
  },
  datePublished(){
    return faker.date.past();
  },
  numberOfPages(){
    return faker.random.number({
      min: 10,
      max: 100
    });
  },
  typeOfBook(){
    return faker.random.arrayElement(["One Of Novel","Documentation","Other"]);
  },
  cover(){
    return `${faker.image.imageUrl(300,300,"technics")}?random=${Date.now()}`;
  }
});
