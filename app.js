/**
 *  文件名：app.js
 *  功能描述：加载项目入口
 *  日期：2014-06-16 
 *  编写：犸特头
 *  请查看：http://blog.mttqq.com
 */
Ext.application({
    name: 'AM',

    // 自动加载显示 viewport.js 内容
    autoCreateViewport: true,
	// 自动加载 指定类显示
	 //autoCreateViewport: 'Demo.view.main.Main' 

    controllers: [
        //'Main'
    ]
});
