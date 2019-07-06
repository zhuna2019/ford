SET NAMES UTF8;
DROP DATABASE IF EXISTS ft;
CREATE DATABASE ft CHARSET=UTF8;
USE ft;


/**福特汽车型号家族**/
CREATE TABLE ft_car_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  ftype VARCHAR(32)
);

/**福特汽车**/
CREATE TABLE ft_car(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  price DECIMAL(10,2),        #价格
  spec VARCHAR(64),           #规格/颜色
  fname VARCHAR(32),          #商品名称
  is_onsale BOOLEAN           #是否促销中
);

/**福特汽车图片**/
CREATE TABLE ft_car_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  fcar_id INT,              #福特汽车编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);


/**预约试驾信息**/
CREATE TABLE ft_test_drive(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  Vehicle_type VARCHAR(32),    #预约车型
  series  VARCHAR(32),         #车型系列
  buy_time INT,                #购买时间
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  choice_dis VARCHAR(16),     #经销商
  appe INT,                  #性别  0-女生  1-先生
  user_name VARCHAR(32),      #用户名，如王小明
  uphone VARCHAR(16),     #手机
   uemail VARCHAR(64),         #邮箱
 is_drive BOOLEAN          #是否试驾
);



/****首页轮播广告商品****/
CREATE TABLE ft_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页商品****/
CREATE TABLE ft_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);

/*******************/
/******数据导入******/
/*******************/
/**笔记本电脑型号家族**/
INSERT INTO ft_car_family VALUES
(NULL,'轿车'),
(NULL,'SUV'),
(NULL,'MPV'),
(NULL,'性能车'),
(NULL,'商用车'),
(NULL,'新能源'), 
(NULL,'皮卡'),
(NULL,'未来车型')






/**用户信息**/


/****首页轮播广告商品****/


/****首页商品****/


