/**
 *  文件名：RootController.js
 *  功能描述：显示控制组件
 *  日期：2014-06-16 
 *  编写：犸特头
 *  请查看：http://blog.mttqq.com
 */
Ext.define('AM.view.RootController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.root',

    onClickButton: function () {
        Ext.Msg.confirm('系统提示', 
		'请您点击确定?',
		'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
			alert('犸特头\nhttp://blog.mttqq.com');
        }
    }
});
