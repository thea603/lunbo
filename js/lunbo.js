var data=[
	{img:1,h1:'ddaa',h2:'fasfas'},
	{img:2,h1:'fafas',h2:'fasfas'},
	{img:3,h1:'yryb',h2:'fasfas'},
	{img:4,h1:'yesa',h2:'fasfas'},
	{img:5,h1:'yesa',h2:'fasfas'}
];
var interval;
var time=6000;

//2通用函数
var g=function(id){
	if(id.substr(0,1)=='.'){//数据截取计算
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}


//3添加幻灯片内容操作
function addSliders(){

	//3.1获取模板
	var tpl_main= g('template_main').innerHTML.replace(/^\s*/,"").replace(/\s*$/,"");
	var tpl_ctrl= g('template_ctrl').innerHTML.replace(/^\s*/,"").replace(/\s*$/,"");
	//3.2最终输出的HTML变量,定义在一个数组中
	var out_main=[];
	var out_ctrl=[];
	//3.3遍历所有数据，构建HTML，并且替换它
	for(i in data){
		var _html_main = tpl_main.replace(/{{index}}/g,data[i].img)//  /g 匹配多个
								.replace(/{{h2}}/g,data[i].h1)
								.replace(/{{h3}}/g,data[i].h2);
		var _html_ctrl = tpl_ctrl.replace(/{{index}}/g,data[i].img);
		
		out_main.push(_html_main);   /*push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。*/
		out_ctrl.push(_html_ctrl);	 /*push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。*/
	}
	//把HTML写到DOM中
	g('template_main').innerHTML = out_main.join(''); /*join() 方法用于把数组中的所有元素放入一个字符串。*/
	g('template_ctrl').innerHTML = out_ctrl.join('');/*join() 方法用于把数组中的所有元素放入一个字符串。*/
	


}
	//幻灯片切换
function sss(n){
		//获得要展现的幻灯片&控制按钮
		var main= g('main_'+n);
		var ctrl= g('ctrl_'+n);

		var n=n;
	
		//幻灯片切换时，
		//获取所有的幻灯片以及控制按钮 
		var clear_main = g('.main-i');
		var clear_ctrl = g('.ctrl-i');
		//清除active样式
		for(i=0;i<clear_ctrl.length;i++){
			clear_main[i].className = clear_main[i].className.replace('main-i_active',"");
			clear_ctrl[i].className = clear_ctrl[i].className.replace('ctrl-i_active',"");
		}
		
	
		//为当前按钮和幻灯片附加样式
		main.className+=' main-i_active';
		ctrl.className+=' ctrl-i_active'; 


	}


		
//动态调整图片高度
function movepic(){
	var pic=g('.pic');
	for(i=0;i<pic.length;i++){
		pic[i].style.marginTop= (-1*pic[i].clientHeight/2) + 'px'
	}
}

function setinter(){
	var abc=document.querySelector(".main-i_active").getAttribute("id");//获取到ID
		// alert(abc.indexOf("_"))
		var index=abc.substr(abc.indexOf("_")+1,abc.length);//截取数据ID indexof 字符串首次出现的位置
		var xxx=document.getElementsByClassName("main-i");//获取main-i数据
		if(index==xxx.length){
			index=1;
		}
		else{
			index=parseInt(index)+1;
		}
		sss(index);
}
//定义何时输出
window.onload=function(){
	addSliders();
	sss(1);
	
	setTimeout(function(){
		movepic();
	},100)



	interval=setInterval(setinter,time)//setInterval周期内执行的函数

			var num =document.getElementById('template_main');
			num.onmousemove=function(){
				clearInterval(interval);
			}
			num.onmouseout=function(){
				interval=setInterval(setinter,time);
			}

}
