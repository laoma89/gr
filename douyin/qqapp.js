//定义一个QQApp对象，用来封装一些方法和属性
var QQApp = {
    //定义一个getAppId方法，用来生成一个随机的appid
    getAppId: function() {
        //定义一个字符集，包含16进制的数字和字母
        var chars = '0123456789abcdef';
        //定义一个空字符串，用来存储生成的appid
        var appid = '';
        //循环16次，每次从字符集中随机选择一个字符，拼接到appid后面
        for (var i = 0; i < 16; i++) {
            //生成一个0到15之间的随机整数，作为字符集的索引
            var index = Math.floor(Math.random() * 16);
            //根据索引，从字符集中取出一个字符
            var char = chars[index];
            //将字符拼接到appid后面
            appid += char;
        }
        //返回生成的appid
        return appid;
    },
    //定义一个getQRCodeUrl方法，用来生成一个二维码的外部URL地址
    getQRCodeUrl: function(appid) {
        //获取当前的时间戳，单位是秒
        var timestamp = Math.floor(Date.now() / 1000);
        //将appid和时间戳拼接成一个字符串，然后用md5算法加密，得到一个签名
        var sign = md5(appid + timestamp);
        //将appid，时间戳，和签名拼接成一个查询字符串，用&符号分隔
        var query = 'appid=' + appid + '&timestamp=' + timestamp + '&sign=' + sign;
        //将查询字符串拼接到qqapp.top域名下的getQRCodeUrl路径后面，得到一个完整的URL地址
        var url = 'http://qqapp.top/getQRCodeUrl?' + query;
        //返回生成的URL地址
        return url;
    }
};
