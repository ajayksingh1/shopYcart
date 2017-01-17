import Ember from 'ember';

export default Ember.Service.extend({
	orders: Ember.A(),

	getProducts(){
		return [{
	        type: 'books',
	        pid: '1',
	        title: 'The 40 Rules of Love',
	        description: 'Ella Rubinstein has a husband, three teenage children, and a pleasant home. Everything that should make her confident and fulfilled. Yet there is an emptiness at the heart of Ellas life - an emptiness once filled by love. So when Ella reads a manuscript about the thirteenth-century Sufi poet Rumi and Shams of Tabriz, and his forty rules of life and love, she is shocked out of herself. Turning her back on her family she embarks on a journey to meet the mysterious author of this work.It is a quest infused with Sufi mysticism and verse, taking Ella and us into an exotic world where faith and love are heartbreakingly explored...',
	        price: 321,
	        imageUrl: 'https://rukminim1.flixcart.com/image/312/312/book/9/3/9/the-forty-rules-of-love-original-imae5jy9d5vb8tqz.jpeg'
	      }, {
	        type: 'books',
	        pid: '2',
	        title: 'Harry Potter and the Goblet of Fire',
	        description: 'Harry starts his fourth year at Hogwarts, and yet again, he and his friends invite a danger so wicked, that it finally dawns on Harry why He Who Must Not Be Named is actually dreaded.',
	        price: 314,
	        imageUrl: 'https://rukminim1.flixcart.com/image/312/312/book/6/8/3/harry-potter-and-the-goblet-of-fire-original-imaepgzxzy4v4jyh.jpeg'
	      }, {
	        type: 'books',
	        pid: '3',
	        title: 'Many Lives, Many Masters',
	        description: 'Many Lives Many Masters is the real-life account of a psychiatrist’s life-changing discovery of past-life regression during the course of his patient’s therapy.',
	        price: 240,
	        imageUrl: 'https://rukminim1.flixcart.com/image/312/312/book/7/8/6/many-lives-many-masters-the-true-story-of-a-prominent-original-imaejb5p2bhhfupn.jpeg'
	    }];
	},
	saveOrder(order) {
		this.get('orders').pushObject(order);
	},
	getOrders() {
		return this.get('orders');
	},
	removeOrder(order) {
		this.get('orders').removeObject(order);
	}
});
