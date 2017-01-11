import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('string'),
	title: DS.attr('string'),
	description: DS.attr('string'),
	price: DS.attr('string'),
	imageUrl: DS.attr('string')
});
