Ext.define('App.Application', {
    name: 'App',

    extend: 'Ext.app.Application',

    views: [
        'Viewport',
        'Login',
        'Header',
        'Navigation',
        'Footer',
        'Dashboard'
    ],

    models: [
        // TODO: add models here
    ],

    controllers: [
        // TODO: add controllers here
        'Viewport'
    ],

    stores: [
        // TODO: add stores here
    ]
});
