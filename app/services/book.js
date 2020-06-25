import Service from '@ember/service';

export default Service.extend({
  model:null,
  
  setModel(data){
    this.set('model', data);
    let types = ["One Of Novel","Documentation","Other"];
    this.set('typeBooks', types)
  },
  
});
