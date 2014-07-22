/**
 * Created by winter on 14-7-21.
 */
define([
    'core',
    'login/templates',
    '../../models/login/loginModel'
], function(core, templates, loginModel){
    return core.View.extend({
        template: templates['login/login/Login'],

        events: {
           'click #submit-button': '_submit',
           'click #sign-button':'_signUp'
        },

        initialize: function(){
            this.loginData = new loginModel();

        },

        render: function(){
            this.$el.html(this.template());
        },

        _submit: function(){
            var formData = {}, _form = $("#lm-login-form");
            formData.username = _form.find("input[name=username]").val();
            formData.password = _form.find("input[name=password]").val();

            this.loginData.save(formData);
            e.preventDefault();
        },

        _signUp: function(e){
            var domain = window.location.origin;
            window.location.href = domain + '/signup/index.html';
            e.preventDefault();

        }
    });

});

