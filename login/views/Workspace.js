/**
 * Created with IntelliJ IDEA.
 * User: jie
 * Date: 14-7-21
 * Time: 下午4:57
 * To change this template use File | Settings | File Templates.
 */
define([
    'core',
    'login/templates',
    './login/LoginView'
], function (core, templates, LoginView) {

    return core.View.extend({

        template: templates['login/WorkSpace'],

        initialize: function (options) {
            this.activeTab = options.tab;
        },

        render: function () {
            this.freeChildren();

            var tpl = this.template({
                active: this.activeTab
            });

            this.$el.html(tpl);

            var SubView;
            switch(this.activeTab) {
                case 'login':
                    SubView = LoginView;
                    break;
                default:
                    SubView = LoginView;
            }

            this.registerComponent('sub', new SubView(), '#main-content');
        }
    });
});

