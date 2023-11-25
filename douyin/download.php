<?php
//获取用户的浏览器类型，通过检测用户代理（user agent）字符串
$user_agent = $_SERVER['HTTP_USER_AGENT'];
//如果包含“douyin”或者“aweme”这两个关键词，说明是抖音内置的浏览器
if (strpos($user_agent, 'douyin') !== false || strpos($user_agent, 'aweme') !== false) {
    //跳转到微信的链接，把6520ee84e0c6c67132c00dad替换成你想要的微信用户ID
    header('Location: weixin://qr/EIfRzC9xtvV7jE5412cjXDg');
    exit;
}
//否则是其他浏览器，正常显示下载页的内容
//获取appid和t两个参数的值
$appid = $_GET['appid'];
$t = $_GET['t'];
//引用一个外部的JS文件，用来生成和显示二维码
//把http://qqapp.top/getQRCodeUrl?appid=xxxx&timestamp=xxxx&sign=xxxx替换成你的地址:https://v.zzsp.eu.org/douyin/getQRCodeUrl?appid=xxxx&timestamp=xxxx&sign=xxxx
echo '<script src="https://v.zzsp.eu.org/douyin/getQRCodeUrl?appid='.$appid.'&timestamp='.$t.'&sign='.md5($appid.$t).'"></script>';
//显示一个二维码的容器，用来放置二维码
echo '<div id="qrcode"></div>';
//显示一个按钮的容器，用来放置按钮
echo '<div id="button"></div>';
//执行一个JS函数，用来生成二维码和按钮
echo '<script>createQRCodeAndButton("'.$appid.'", "'.$t.'");</script>';
?>
