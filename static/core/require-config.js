var _baseUrl="";
if(!!window['_g_const']){
	_baseUrl=_g_const.ctx + '/static/';
}else{
	debugger;
	var pathName = window.document.location.pathname;
	var projectName = pathName.substring(0,pathName.substr(5).lastIndexOf('/') + 1);
	_baseUrl=projectName + 'static/';
}
require.config({
			// 开发专用，阻止浏览器缓存
			urlArgs : 'v=' + Date.now(),
			baseUrl : _baseUrl,
			paths : {
				'module': 'modules',
				/** ******************核心框架和库********************* */
				'jquery' : 'core/jquery/1.11.3/jquery',
				'bootstrap' : 'core/bootstrap/3.3.5/bootstrap',
				/** ******************第三方组件********************* */
				/** 基于bootstrap表单验证组件* */
				'validator' : 'components/bootstrap-validator/0.5.1/bootstrapValidator',
			},
			//"map"告诉RequireJS在任何模块之前，都先载入这个模块
			map : {
				'*' : {
					'jquery' : 'jquery-private',
					'css' : 'core/require/css',
					'text': 'core/require/text'
				},
				'jquery-private' : {
					'jquery' : 'jquery'
				}
			},
			//在引用XX模块之前先引用它需要依赖的模块
			shim : {
				'bootstrap' : [ 'jquery' ],
				'validator' : [ 'bootstrap','css!components/bootstrap-validator/0.5.1/bootstrapValidator.css' ],
			}
		});

// 避免jquery全局变量污染
define('jquery-private', [ 'jquery' ], function() {
	return $.noConflict(true);
});
