define([], function() {
    /**
     * 【require配置文件】
     *  1,baseUrl:{}配置文件路径
     *  2,paths:{}配置别名
     *  3,shim:{}配置未使用define定义的模块如qjuery
     */
    var strUrl=location.href;
    var arrUrl=strUrl.split("/"); 
    var catalog = arrUrl[arrUrl.length-2]; //所属目录
    var strPage=arrUrl[arrUrl.length-1];
        strPage = strPage.split(".");
        strPage = strPage[strPage.length-2]; //所属文件名去掉.html
		strPage = (typeof(strPage)=='undefined') ? 'index' : strPage;

    var my_base_url = strPage == 'index' ? './js/' : '../../js/'+catalog+'/'; //自己写的js配置路径
    var lib_base_url = strPage == 'index' ? '../lib' : '../../lib'; 
   // console.log(lib_base_url+'/jquery/jquery.min');
    require.config({
        baseUrl:my_base_url,
        paths:{
            // 自己写的js别名
            index:'index',
            advert_add:'advert_add',
            advert_list:'advert_list',
            course_add: 'course_add',
            course_add_step1: 'course_add_step1',
            course_add_step2: 'course_add_step2',
            course_add_step3: 'course_add_step3',
            course_category: 'course_category',
            course_category_add: 'course_category_add',
            course_list: 'course_list',
            course_topic: 'course_topic',
            login: 'login',
            repass: 'repass',
            settings: 'settings',
            teacher_add: 'teacher_add',
            teacher_list: 'teacher_list',
            user_list: 'user_list',
            user_profile: 'user_profile',
            //第三方库的js别名
            template: lib_base_url+'/artTemplate/template',
            bootstrap: lib_base_url+'/bootstrap/js/bootstrap',
            datepicker:lib_base_url+'/bootstrap-datepicker/js/bootstrap-datepicker',
            ckeditor:lib_base_url+'/ckeditor/ckeditor',
            ckeditor_lang:lib_base_url+'/ckeditor/lang/zh-cn',
            echarts:lib_base_url+'/echarts/echarts.min',
            jquery: lib_base_url+'/jquery/jquery.min',
            jquery_cookie:lib_base_url+'/jquery-cookie/jquery.cookie',
            jquery_form:lib_base_url+'/jquery-form/jquery.form',
            jquery_region:lib_base_url+'/jquery-region/jquery.region',
            nprogress:lib_base_url+'/nprogress/nprogress'
        },
        shim:{
             //bootstrap依赖于jquery，是非define定义的模块
            bootstrap:{
                deps:['jquery']
            }
        }
    });
    
  // 这里根据页面的路径进行不同页面的区分进而加载不同的js
   switch(strPage) {
  	case 'index':
  		require(['index']);
  		break;
	case 'login':
	  	require(['login']);
  		break;
	case 'repass':
	  	require(['repass']);
  		break;
	case 'settings':
	  	require(['settings']);
  		break;
  	case 'advert_add':
  	  require(['advert_add']);
  		break;
  	case 'advert_list':
  	  require(['advert_list']);
  		break;
	  case 'course_add_step1':
  	  require(['course_add_step1']);
  		break;
  	case 'course_add_step2':
  	  require(['course_add_step2']);
  		break;
  	case 'course_add_step3':
  	  require(['course_add_step3']);
  		break;
  	case 'course_add.html':
  	  require(['course_add']);
  		break;
  	case 'course_category_add':
  	  require(['course_category_add']);
  		break;
  	case 'course_category':
  	  require(['course_category']);
  		break;
  	case 'course_list':
  	  require(['course_list']);
  		break;
  	case 'course_topic':
  	  require(['course_topic']);
  		break;
  	case 'teacher_add':
  	  require(['teacher_add']);
  		break;
  	case 'teacher_list':
  	  require(['teacher_list']);
  		break;
  	case 'user_profile':
  	  require(['user_profile']);
  		break;
  	case 'user_list':
  	  require(['user_list']);
  		break;

  }



});
