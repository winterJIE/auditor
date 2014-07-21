define([
    'core',
	'settings/templates'
], function (core, templates ) {

    return core.View.extend({

		template: templates['settings/Workspace'],

		initialize: function () {

		},

		render: function () {

			this.$el.html(this.template());

		}
    });
});

