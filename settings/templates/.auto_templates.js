define(["handlebars","text!settings/templates/Workspace.html","text!settings/templates/partials/placeholder.html"], function (Handlebars,arg0,arg1) {
	return {
		"settings/Workspace": Handlebars.compile(arg0),
		"settings/partials/placeholder": Handlebars.compile(arg1)
	};
});