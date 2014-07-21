/**
 * Created by winter on 14-7-21.
 */
define([
    'core',
    'login/templates'
], function(core, templates){
    return core.View.extend({
        template: templates['login/login/Login'],

        initialize: function(){

        },

        render: function(){
            this.$el.html(this.template());
        }
    });

});

