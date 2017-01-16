import Ember from 'ember';

export default Ember.Route.extend({


	model(params){
      return this.get('store').getProducts().findBy('pid',params.pid);
    },

    actions:{
    	addToCart(pid){
    		window.alert("Your Product has been added successfully.");
    		this.get('cart').pushObject('model.pid');
    		console.log(this.get(cart));
    	}
    } 
    
});


