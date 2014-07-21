define([
	'lodash',
	'backbone',
	'jquery',
	'handlebars',
	'bootstrap',
	'core',
	'utils',
	'commons/app/templates'
], function () {
	// we must use 'switchToPath/index' here for requirejs build optimization

    var page = /\/([^\/]*)\/index\.html/.exec(window.location.pathname);

    if (!page || !page[1]) {
        alert('The page you are visiting can not be accessible, please check your URL!');

        return;
    }

    page = page[1];

    // we must use 'switchToPath/index' here for requirejs build optimization
    require([page + '/index'], function () {

    });

});
