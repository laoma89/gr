//获取按钮和二维码的元素
var button = document.getElementById('generate');
var qrcode = document.getElementById('qrcode');
//给按钮添加一个点击事件的监听器
button.addEventListener('click', function() {
    //调用getAppId方法，生成一个随机的appid
    var appid = QQApp.getAppId();
    //调用getQRCodeUrl方法，传入appid，得到一个二维码的外部URL地址
    var qrcode_url = QQApp.getQRCodeUrl(appid);
    //创建一个img标签，设置它的src属性为二维码的外部URL地址
    var img = document.createElement('img');
    img.src = qrcode_url;
    //清空二维码的元素的内容，然后把img标签添加到二维码的元素中，显示二维码
    qrcode.innerHTML = '';
    qrcode.appendChild(img);
});
