define([
	'handlebars',
	'./helpers',
	'commons/app/partials_compiled',
	'commons/app/templates_compiled',
	'lodash'
], function (Handlebars, helpers, partials, templates, _) {
	// register helpers
	_.each(helpers || [], function (helper, name) {
		Handlebars.registerHelper(name, helper);
	});

	return templates;
});
