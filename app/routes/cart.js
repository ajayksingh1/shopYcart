import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        removeProduct(order){
            return this.get('store').removeOrder(order);
        }
    },
	model() {
		return Ember.RSVP.hash({
           itemDetail: this.get('store').getOrders(),
           totalPrice: this.getTotalPrice()
        })
	}, 
    store:Ember.inject.service(),

    getTotalPrice() {
        const placedOrder = this.get('store').getOrders()
        let totalPrice=0;
        placedOrder.forEach((item) =>{
          totalPrice = totalPrice + item.price;
        });
        return totalPrice;
    }
});
