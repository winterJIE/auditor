define([
	'core',
	'auditor/templates'
], function (core, templates ) {
	return core.View.extend({
		template: templates['auditor/record/Record'],

		appEvents: {
		},

		initialize: function () {

		},

		render: function () {
			this.$el.html(this.template());

		}
	});
});

