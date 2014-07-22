define(["handlebars","text!auditor/templates/Workspace.html","text!auditor/templates/detail/Detail.html","text!auditor/templates/partials/placeholder.html","text!auditor/templates/record/Record.html","text!auditor/templates/zone/Zone.html"], function (Handlebars,arg0,arg1,arg2,arg3,arg4) {
	return {
		"auditor/Workspace": Handlebars.compile(arg0),
		"auditor/detail/Detail": Handlebars.compile(arg1),
		"auditor/partials/placeholder": Handlebars.compile(arg2),
		"auditor/record/Record": Handlebars.compile(arg3),
		"auditor/zone/Zone": Handlebars.compile(arg4)
	};
});