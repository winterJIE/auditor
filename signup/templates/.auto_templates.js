define(["handlebars","text!signup/templates/partials/placeholder.html","text!signup/templates/signup.html"], function (Handlebars,arg0,arg1) {
	return {
		"signup/partials/placeholder": Handlebars.compile(arg0),
		"signup/signup": Handlebars.compile(arg1)
	};
});