Ext.define('App.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'app-header',
    region: 'north',
    cls: 'icon-blue',
    border: false,
    height: 50,

    initComponent: function() {
        this.items = [{ 
            xtype: 'tbspacer', width: 5 
        },{
            xtype: 'tbtext',
            text:'<div style="height:16px;width:16px;background: url(\'resources/images/app.png\')" align="right"></div>'
        },{
            xtype: 'label',
            style: { color: 'White', font: 'normal 18px courier'},
            text: 'APP [TITLE]'
        },
        '->',
        {
            xtype: 'tbtext',
            text:'<div style="height:16px;width:16px;background: url(\'resources/images/user.png\')" align="right"></div>'
        },{
            xtype: 'label',
            itemId: 'userlabel',
            style: { color: 'White'}, 
            text: name 
        },{ 
            xtype: 'tbspacer', width: 5 
        },
        '-',{
            xtype: 'tbtext',
            text:'<div style="height:16px;width:16px;background: url(\'resources/images/logout.png\')" align="center"></div>'
        },{
            xtype: 'label',
            style: { color: 'White', cursor:'pointer'},
            text: 'LOGOUT',
            listeners : {
            render : function(c) {
                c.getEl().on('click', function(){ this.fireEvent('click', c); }, c);
                c.el.on('mouseover', function () {});
                }
            }
        }]
    
        this.callParent(arguments); 
    }
    
   
});


