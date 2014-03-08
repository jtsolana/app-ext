Ext.define('App.view.Footer', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'app-footer',
    region: 'south',
    itemId: 'footer',
    cls: 'icon-blue',
    border: false,
    
    initComponent: function() {
        var now = new Date(),
        now = Ext.Date.format(now, 'F j, Y');
        this.items = [
        '->',
        {
            xtype: 'label',
            style: { color: 'White'},
            text: 'Date:' + " " + now
        }]
    
        this.callParent(arguments); 
    }
    
   
});