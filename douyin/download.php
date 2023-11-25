<?php
//获取用户代理字符串
$user_agent = $_SERVER['HTTP_USER_AGENT'];
//检测是否是抖音内置浏览器
if (strpos($user_agent, 'douyin') !== false || strpos($user_agent, 'aweme') !== false) {
    //如果是，就跳转到微信的链接，替换成你想要的微信用户ID
    header('Location: weixin://qr/6520ee84e0c6c67132c00dad');
    exit();
}
//否则，就正常显示下载页的内容
//获取appid和t参数
$appid = $_GET['appid'];
$t = $_GET['t'];
//引用qqapp.js文件，用来生成二维码的外部URL地址
include 'qqapp.js';
//调用getQRCodeUrl方法，传入appid，得到二维码的外部URL地址
$qrcode_url = QQApp.getQRCodeUrl(appid);
//生成二维码和按钮的HTML代码
$qrcode = '<img src="'.$qrcode_url.'">';
$button = '<a href="https://douyin.com/app/'.$appid.'">点击下载</a>';
//输出HTML页面
echo '<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>抖音短视频</title>
</head>
<body>
    <h1>抖音短视频</h1>
    <p>扫描或者点击下面的二维码，即可下载和安装抖音短视频小程序，享受更多精彩内容！</p>
    '.$qrcode.'
    '.$button.'
</body>
</html>';
?>
