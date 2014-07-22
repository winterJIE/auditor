define([
    'backbone',
    './views/Workspace'
], function (Backbone, Workspace) {
    return Backbone.Router.extend({
        routes: {
			'*any': 'redirect'
        },

        initialize: function () {

        },

        showWorkspace: function () {

            if (this.workspace) {
                this.workspace.remove();
            }

            this.workspace = new Workspace({
            });

			$('#main').append(this.workspace.$el);
			this.workspace.render();
        },

		redirect: function (any) {
			console.log(any);

			this.showWorkspace();
		}
    });
});
