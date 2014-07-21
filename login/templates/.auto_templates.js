define(["handlebars","text!login/templates/login.html","text!login/templates/partials/placeholder.html"], function (Handlebars,arg0,arg1) {
	return {
		"login/login": Handlebars.compile(arg0),
		"login/partials/placeholder": Handlebars.compile(arg1)
	};
});