// 验证

//1. 查找触发事件的元素
var txtName=document.getElementsByName("username")[0];
var txtph=document.getElementsByName("ph")[0];
//2. 绑定事件处理函数
/*文本框失去焦点，验证当前文本框的内容，修改提示信息的样式*/
//为姓名文本框绑定失去焦点事件
txtName.onblur=function(){
	//定义正则表达式
	var reg= /^[\u4E00-\u9FA5A-Za-z]+$/;
	//this->txtName
	//调用公共的验证方法vali
	vali.call( this ,reg);
}           //  |   ↓
function vali(/*|*/reg){
	//            ↓
	//this -> window->call->txtName
	//查找当前文本框旁边的span
	var span=this.nextElementSibling;
							//下一个兄弟
							
	//如果正则验证文本框的内容通过
	if(reg.test(this.value)==true){
		span.className="vali_success";
        return true;
	
	}else{//否则
		//就修改span的内容
	
        span.className="vali_fail";
        return false;
	}
}
txtph.onblur=function(){
	//定义正则表达式
	var reg=/^\d{11}$/;
	//this->txtPwd
	//调用公共的验证方法vali
	vali.call( this ,reg);

}
    // 数据库获取提交数据
    // 1找到要修改的元素
var btn=document.getElementById("bt");
    // 2绑定触发事件函数
  
  btn.onclick=function(){
      var btn=this;
    //   找到要修改span的元素
     var span=document.getElementById("danger");
    
    // 获取确认选框元素
        if(chb.checked===true){
        //1获取xhr对象
			var xhr=new XMLHttpRequest()
			//4绑定监听
			xhr.onreadystatechange=function(){
			    if (xhr.readyState==4 && xhr.status==200)
			    {     
                     var result=xhr.responseText
						if (result==1){
                      document.write(`<h1 style="color:red">预约成功</h1>`);
                      window.location.href="static.html"
					}else document.write("预约失败");
                   
				}
			}
			//2打开链接创建请求
			xhr.open("post","/user/v1/reContect",true);
			//3发送请求
			//创建请求头
			xhr.setRequestHeader("content-Type","application/x-www-form-urlencoded")
			//创建请求主体
			var formdate="Vehicle_type="+Vehicle_type.value+"&series="+series.value+"&buy_time="+buy_time.value+"&province="+province.value+"&city="+city.value+"&choice_dis="+choice_dis.value+"&is_drive="+is_drive.value+"&appe="+appe.value+"&user_name="+user_name.value+"&uphone="+uphone.value+"&uemail="+uemail.value
			xhr.send(formdate)
    }else{
        span.className="vali_fail";
        
    }
   
}

    /*实现“省”和“市”的级联下拉列表*/
	var cities=[
       [{"name":'合肥市',"value":101},
       {"name":'蚌埠市',"value":102},
       {"name":'阜阳市',"value":103},
       {"name":'滁州市',"value":104}],
      [{"name":'杭州市',"value":201},
       {"name":'衢州市',"value":202},
       {"name":'金华市',"value":203},
       {"name":'宁波市',"value":204},
       {"name":'台州市',"value":205}],
      [{"name":'东城区',"value":301},
       {"name":'西城区',"value":302},
       {"name":'海淀区',"value":303},
       {"name":'朝阳区',"value":304}],
      [{"name":'河东区',"value":401},
       {"name":'河西区',"value":402},
       {"name":'南开区',"value":403}],
      [{"name":'石家庄市',"value":501},
       {"name":'廊坊市',"value":502},
       {"name":'保定市',"value":503},
       {"name":'唐山市',"value":504},
       {"name":'秦皇岛市',"value":504}]
	];
    var srs=[
        [
            {"name":'三厢1.6 AT 舒适型(智行版)',"value":101},
            {"name":'三厢1.6 MT 舒适型(智行版)',"value":102},
            {"name":'三厢EcoBoost® 125 AT超能风尚型(智行版)',"value":103},
            {"name":'三厢1.6 MT 风尚型(智行版)',"value":104}
        ],
        [
            {"name":"三厢1.6 AT 舒适型(智行版)","value":201},
            {"name":"三厢1.6 MT 舒适型(智行版)","value":202},
            {"name":"三厢EcoBoost® 125 AT超能风尚型(智行版)","value":203},
            {"name":"三厢1.6 MT 风尚型(智行版)","value":204}
        ],
        [
            {"name":"三厢1.6 AT 舒适型(智行版)","value":301},
            {"name":"三厢1.6 MT 舒适型(智行版)","value":302},
            {"name":"三厢EcoBoost® 125 AT超能风尚型(智行版)","value":303},
            {"name":"三厢1.6 MT 风尚型(智行版)","value":304}
        ],
        [
            {"name":"三厢1.6 AT 舒适型(智行版)","value":401},
            {"name":"三厢1.6 MT 舒适型(智行版)","value":402},
            {"name":"三厢EcoBoost® 125 AT超能风尚型(智行版)","value":403},
            {"name":"三厢1.6 MT 风尚型(智行版)","value":404}
        ]
    ];
//找到name为provs和type的select元素
var selProvs=document.getElementsByName("provs")[0];
var types=document.getElementsByName("type")[0];
//找到name为cities和sers的select元素
var selCts=document.getElementsByName("cities")[0];
var sers=document.getElementsByName("sers")[0];
//当provs中选中的省份发生变化时
selProvs.onchange=function(){
  //获得当前选中省份的下标位置i
  var i=this.selectedIndex;//当前选中项在所有<option>中的下标
  //创建文档片段frag
  var frag=document.createDocumentFragment();
    //创建<option>=请选择=，并追加到frag中
    var opt=document.createElement("option");
    opt.innerHTML="选择一个省";
    frag.appendChild(opt);
  //只有点的不是第一项=请选择=时，才继续执行下列操作
  if(i>0){
    //去cities数组中获得i-1位置的子数组
    var cts=cities[i-1];
    
    //遍历cts中每个城市对象
    for(var c of cts){
      //每遍历一个城市对象，就创建一个<option>元素，设置起内容为城市名
      var opt=document.createElement("option");
      opt.innerHTML=c.name;
      //并将新<option>追加到frag中
      frag.appendChild(opt);
    }//(遍历结束)
    //在添加新内容前，先清空selCts的旧内容
    selCts.innerHTML="";
    //将frag整体追加到selCts中
    selCts.appendChild(frag);
    //让第二个select显示出来
  }else{//否则，如果点的是=请选择=
   //在添加新内容前，先清空selCts的旧内容
   selCts.innerHTML="";
    //追加请选择的frag追加到selCts中
    selCts.appendChild(frag);
  }
}
//当type中选中的车型发生变化时
types.onchange=function(){
  //获得当前选中车型的下标位置i
  var i=this.selectedIndex;//当前选中项在所有<option>中的下标
  //创建文档片段frag
  var frag=document.createDocumentFragment();
    //创建<option>=请选择=，并追加到frag中
    var opt=document.createElement("option");
    opt.innerHTML="选择一个车型";
    frag.appendChild(opt);
  //只有点的不是第一项=请选择=时，才继续执行下列操作
  if(i>0){
    //去sers数组中获得i-1位置的子数组
    var sr=srs[i-1];
    
    //遍历srs中每个系列对象
    for(var s of sr){
      //每遍历一个系列对象，就创建一个<option>元素，设置起内容为城市名
      var opt=document.createElement("option");
      opt.innerHTML=s.name;
      //并将新<option>追加到frag中
      frag.appendChild(opt);
    }//(遍历结束)
    //在添加新内容前，先清空sers的旧内容
    sers.innerHTML="";
    //将frag整体追加到sers中
    sers.appendChild(frag);
    //让第二个select显示出来
  }else{//否则，如果点的是=请选择=
   //在添加新内容前，先清空sers的旧内容
   sers.innerHTML="";
    //追加请选择的frag追加到selCts中
    sers.appendChild(frag);
  }
}