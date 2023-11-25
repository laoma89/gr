<?php
//获取appid，timestamp，sign三个参数的值
$appid = $_GET['appid'];
$timestamp = $_GET['timestamp'];
$sign = $_GET['sign'];
//验证sign是否正确，用md5函数对appid和timestamp进行加密，然后和sign进行比较，如果不相等，就返回错误信息，用die函数
if ($sign != md5($appid.$timestamp)) {
    die('Invalid sign');
}
//生成二维码的URL地址，用一个叫qrcode.php的文件，传入appid和timestamp两个参数的值，用http_build_query函数拼接成一个查询字符串
$qrcode_url = 'qrcode.php?' . http_build_query(array('appid' => $appid, 'timestamp' => $timestamp));
//返回二维码的URL地址，用header函数设置一个Location的响应头，用exit函数结束脚本的执行
header('Location: ' . $qrcode_url);
exit;
?>
