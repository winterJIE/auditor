define(["handlebars","text!login/templates/WorkSpace.html","text!login/templates/login.html","text!login/templates/login/Login.html","text!login/templates/partials/placeholder.html"], function (Handlebars,arg0,arg1,arg2,arg3) {
	return {
		"login/WorkSpace": Handlebars.compile(arg0),
		"login/login": Handlebars.compile(arg1),
		"login/login/Login": Handlebars.compile(arg2),
		"login/partials/placeholder": Handlebars.compile(arg3)
	};
});