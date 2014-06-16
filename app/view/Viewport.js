/**
 *  文件名：Viewport.js
 *  功能描述：显示组件
 *  日期：2014-06-16 
 *  编写：犸特头
 *  请查看：http://blog.mttqq.com
 */
Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires: [
        'AM.view.RootController'
    ],
	autoScroll : true,
	controller: 'root',
    items: [{
		margin:10,
		xtype:'button',
		text:'点击',
		listeners: {
			click: 'onClickButton'
		}
	},
	{
		border:false,
		contentEl: 'desc'
	},
	{
		border:false,
		contentEl: 'context'
	}
	]
});