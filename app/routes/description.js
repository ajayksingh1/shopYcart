import Ember from 'ember';

export default Ember.Route.extend({

	model(params){
      return this.get('store').getProducts().findBy('pid',params.pid);
    },

    actions:{
    	addToCart(model){
    		window.alert("Your Product has been added successfully."+model.pid);
    		this.get('store').saveOrder(model);
            console.log(this.get('store').getOrders());
    	}
    } 
    
});


