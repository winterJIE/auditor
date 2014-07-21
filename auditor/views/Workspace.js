define([
    'core',
	'auditor/templates',
    './zone/ZoneView',
    './detail/DetailView',
    './record/RecordView'
], function (core, templates,ZoneView, DetailView, RecordView) {

    return core.View.extend({

		template: templates['auditor/WorkSpace'],

		initialize: function (options) {
			this.activeTab = options.tab;
		},

		render: function () {
			this.freeChildren();

			this.$el.html(this.template({
				active: this.activeTab
			}));

			var SubView;
			switch(this.activeTab) {
				case 'record':
					SubView = RecordView;
					break;
				case 'zone':
					SubView = ZoneView;
					break;
				case 'detail':
					SubView = DetailView;
					break;
				default:
					SubView = ZoneView;
			}

			this.registerComponent('sub', new SubView(), '#main-content');
		}
    });
});

