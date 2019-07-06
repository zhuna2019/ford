//引入express 模块
const express=require('express')
//引入连接池模块 自定义模块
const pool=require('../pool.js')
//创建路由器对象
var router=express.Router()
//1注册用户
router.post("/v1/reContect",function(req,res){
    //获取post请求的数据
	 var obj=req.body;
	 
		 //验证每一项的数据是否为空 
	      if(obj.user_name===''){
		      res.send("401");
		 	//return 阻止往后执行
		 	 return;
		   }else if (obj.uemail==='')
		   {
		 	 res.send("402")
		 	 return;
		   }else if (obj.uphone==='')
		   {
		 	 res.send("403")
		 	 return;
			
		   }	
     //根据连接池的连接将获取的数据插入数据库
	 pool.query('INSERT INTO ft_test_drive SET ?',[obj],function(err,result){
	      if (err)
	      { 
			  throw err
	      }else if (result.affectedRows>0)
	      {
				  res.send("1")
	      }
		
	 
	 })
})
//检测用户名是否重复预约
router.post("/v1/checkuname",(req,res)=>{
		//获取数据
		var obj=req.body
			//console.log(obj)
		//验证非空
		if (!obj.user_name)
		{
			res.send("301")
		    return
		}
		//执行sql语句
		var sql="select *from ft_test_drive where user_name=?"
		pool.query(sql,[obj.user_name],function(err,result){
		   if (err)
		   {
			   throw err
		   }
		   if (result.length>0)
		   {
			   res.send("1")
		   }
		})
})

//2.添加查询用户列表
router.get("/v1/userlist",(req,res)=>{
	//2-1获取数据
	var obj=req.params;
	console.log(obj);
	//2-2执行sql语句
	var sql="select *from ft_test_drive"
	pool.query(sql,function(err,result){
		  if (err)
		  {
			  throw err
		  }
		  if (result.length>0)
		  {
			  res.send(result)
		  }
	})
  })

   

//导出路由器
module.exports=router
