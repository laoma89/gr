<?php
//获取appid和timestamp两个参数的值
$appid = $_GET['appid'];
$timestamp = $_GET['timestamp'];
//生成二维码的内容，用一个叫jump.php的文件，传入appid和timestamp两个参数的值，用http_build_query函数拼接成一个查询字符串
$qrcode_content = 'https://v.zzsp.eu.org/douyin/jump.php?' . http_build_query(array('appid' => $appid, 'timestamp' => $timestamp));
//引用一个第三方的库，用来生成二维码的图片，这个库叫PHP QR Code，它是一个开源的项目，它的地址是http://phpqrcode.sourceforge.net/
require_once('phpqrcode.php');
//调用这个库的方法，传入二维码的内容，二维码的大小，二维码的容错率，二维码的边距，二维码的logo，二维码的logo的大小，生成二维码的图片，并直接输出到浏览器，用PNG格式
QRcode::png($qrcode_content, false, QR_ECLEVEL_H, 10, 4, true, 'https://v.zzsp.eu.org/douyin/logo.png', 40);
?>
