define([
	'core',
	'auditor/templates'
], function (core, templates) {
	return core.View.extend({
		template: templates['auditor/zone/Zone'],

		initialize: function () {

		},

		render: function () {
			this.$el.html(this.template());
		}
	});
});