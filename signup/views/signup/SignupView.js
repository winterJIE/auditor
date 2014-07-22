/**
 * Created by winter on 14-7-21.
 */
define([
    'core',
    'signup/templates',
    '../../models/signup/signupModel'
], function(core, templates, signupModel){
    return core.View.extend({
        template: templates['signup/signup/Signup'],

        events: {
            'click #submit-button' : '_signUp'
        },

        initialize: function(){
            this.signUpData = new signupModel();

        },

        render: function(){
            var tpl = this.template();
            this.$el.html(tpl);
        },

        _signUp: function(e){
            var formData = {}, _form =  $("#lm-sign-up-form");

            formData.email = _form.find("input[name=email]").val();
            var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
            var tag = reg.test(formData.email);

            if(tag){
                formData.username = _form.find("input[name=username]").val();
                formData.password = _form.find("input[name=password]").val();
                this.signUpData.save(formData);
            }else {
                alert("please check your email");
            }

            e.preventDefault();
        }
    });

});

