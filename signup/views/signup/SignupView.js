/**
 * Created by winter on 14-7-21.
 */
define([
    'core',
    'signup/templates'
], function(core, templates){
    return core.View.extend({
        template: templates['signup/signup/Signup'],

        initialize: function(){

        },

        render: function(){
            var tpl = this.template();
            this.$el.html(tpl);
        }
    });

});

