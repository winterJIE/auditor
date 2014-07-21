define(["handlebars","text!signup/templates/WorkSpace.html","text!signup/templates/partials/placeholder.html","text!signup/templates/signup/Signup.html"], function (Handlebars,arg0,arg1,arg2) {
	return {
		"signup/WorkSpace": Handlebars.compile(arg0),
		"signup/partials/placeholder": Handlebars.compile(arg1),
		"signup/signup/Signup": Handlebars.compile(arg2)
	};
});