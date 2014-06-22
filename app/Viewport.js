/**
 *  文件名：Viewport.js
 *  功能描述：显示内容
 *  日期：2014-06-22
 *  编写：犸特头
 *  请查看：http://blog.mttqq.com
 */
Ext.define('My.Viewport', {
    extend: 'Ext.window.Window',
	title: 'Hello',
    height: 200,
    width: 400,
    layout: 'fit',
    items:[{contentEl:'desc'}]
});