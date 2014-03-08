Ext.define('App.view.Navigation', {
    extend: 'Ext.container.Container',
    region: 'west',
    requires:[
        'Ext.panel.Panel',
        'Ext.layout.container.Accordion'
    ],

    xtype: 'app-navigation',
    itemId: 'navigation',
    width: 230,

    defaults: { 
        // applied to each contained panel
        bodyStyle: 'padding:15px'
    },

    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },

    items: [{
        title: 'Main',
        itemId: 'main',
        iconCls: 'icon-menu',
        items: [{
            xtype: 'menu',
            itemId: 'menu',
            border: false,
            bodyStyle:'background-color:white !important;',
            floating: false,  // usually you want this set to True (default)
            items: [{
                text: 'Menu Button Here',
                panel: '',
                iconCls: 'icon-arrow-right'
            },{
                text: 'Menu Button Here',
                panel: 'List',
                hidden: true,
                iconCls: 'icon-arrow-right'
            }]
        }]
       
    },{
        title: 'Reports',
        iconCls: 'icon-reports'
    },{
        title: 'Settings',
        itemId: 'settings',
        iconCls: 'icon-settings',
        items: [{
            xtype: 'menu',
            itemId: 'menusettings',
            border: false,
            bodyStyle:'background-color:white !important;',
            floating: false,  // usually you want this set to True (default)
            items: [{
                text: 'Change Password',
                panel: '',
                iconCls: 'icon-arrow-right'
            }]
        }]
    }]


});