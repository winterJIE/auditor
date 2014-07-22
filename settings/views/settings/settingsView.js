/**
 * Created with IntelliJ IDEA.
 * User: winter
 * Date: 14-7-22
 * Time: 下午6:12
 * To change this template use File | Settings | File Templates.
 */
define([
    'core',
    'settings/templates',
    '../../models/settings/settingsModel'
], function(core,templates, settingsModel){
    return core.View.extend({

        template: templates['settings/settings/Settings'],

        initialize: function(){

        },

        render: function(){
           this.$el.html(this.template());
        }

    });

});
