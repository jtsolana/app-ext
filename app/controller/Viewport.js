Ext.define('App.controller.Viewport', {
    extend: 'Ext.app.Controller',
    
    init: function() {
        this.control({
             'viewport': {
                 render: this.onViewportRendered
            }
        });
    },

    onViewportRendered: function(p) {
        // global variable userid ref: index.php
        var userid = 1;
        if (userid == 0) {
            p.add(Ext.create('App.view.Login')); 
            p.doLayout(); 
        } else {
            p.add(Ext.create('App.view.Header'),
                Ext.create('App.view.Footer'),
                Ext.create('App.view.Navigation'),
                Ext.create('App.view.Dashboard')
             ); 
            p.doLayout();
        }
    }
});

