Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
     requires:[    
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'App.view.Header',
        'App.view.Navigation',
        'App.view.Footer',
        'App.view.Dashboard'
    ],

    layout: {
        type: 'border'
    }
    
});
