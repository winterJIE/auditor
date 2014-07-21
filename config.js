require.config({
    urlArgs: 'v=',
	baseUrl: '/',
	waitSeconds: 0,
	packages: ['commons/app/templates', 'auditor/templates','settings/templates','signup/templates','login/templates'],
	paths: {
        'commons/app/partials_compiled': 'commons/app/templates/.auto_partials',
        'commons/app/templates_compiled': 'commons/app/templates/.auto_templates',
        'settings/partials_compiled': 'settings/templates/.auto_partials',
        'settings/templates_compiled': 'settings/templates/.auto_templates',
        'signup/partials_compiled': 'signup/templates/.auto_partials',
        'signup/templates_compiled': 'signup/templates/.auto_templates',
        'login/partials_compiled': 'login/templates/.auto_partials',
        'login/templates_compiled': 'login/templates/.auto_templates',
        'auditor/partials_compiled': 'auditor/templates/.auto_partials',
        'auditor/templates_compiled': 'auditor/templates/.auto_templates',

		'core': 'commons/app/core/core',
		'utils': 'commons/app/core/utils',

        /* 3rd party libs*/
		'handlebars': 'commons/3rdparty/handlebars/handlebars-v1.3.0',
        'lodash': 'commons/3rdparty/lodash',
        'backbone': 'commons/3rdparty/backbone',
        'jquery': 'commons/3rdparty/jquery-2.1.1',
        'bootstrap': 'commons/3rdparty/bootstrap'
	},
	shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'bootstrap': ['jquery']
	},
	map: {
		'*': {
			'underscore': 'lodash'
		}
	}
});

