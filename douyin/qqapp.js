//定义一个函数，用来生成一个随机的appid，它是由一串16进制的数字和字母组成的
function getAppId() {
    //定义一个空的字符串，用来存储appid
    var appid = '';
    //定义一个字符串，用来存储所有可能的16进制的数字和字母
    var chars = '0123456789abcdef';
    //定义一个数字，用来存储appid的长度，它是16
    var length = 16;
    //使用一个for循环，从0开始，到length结束，每次增加1，用i作为循环变量
    for (var i = 0; i < length; i++) {
        //使用Math.random方法，生成一个0到1之间的随机数，然后乘以chars的长度，得到一个0到chars的长度之间的随机数，然后使用Math.floor方法，取整，得到一个0到chars的长度减1之间的随机整数，用index作为变量名
        var index = Math.floor(Math.random() * chars.length);
        //使用chars的charAt方法，传入index，得到chars中对应位置的字符，然后使用+=运算符，把这个字符拼接到appid的后面
        appid += chars.charAt(index);
    }
    //返回appid
    return appid;
}
//定义一个函数，用来生成一个外部的JS文件的地址，它是一个类似于http://qqapp.top/getQRCodeUrl?appid=xxxx&timestamp=xxxx&sign=xxxx的格式，其中appid是一个由getAppId函数生成的随机字符串，timestamp是一个当前的时间戳，sign是一个由appid和timestamp加密后的签名
function getQRCodeUrl() {
    //调用getAppId函数，得到一个随机的appid，用appid作为变量名
    var appid = getAppId();
    //使用Date对象的now方法，得到一个当前的时间戳，用timestamp作为变量名
    var timestamp = Date.now();
    //使用md5函数，传入appid和timestamp，得到一个加密后的签名，用sign作为变量名
    var sign = md5(appid + timestamp);
    //定义一个字符串，用来存储外部的JS文件的地址，它是一个类似于http://qqapp.top/getQRCodeUrl?appid=xxxx&timestamp=xxxx&sign=xxxx的格式，其中appid，timestamp，sign都是用+运算符拼接的变量
    var url = 'http://qqapp.top/getQRCodeUrl?appid=' + appid + '&timestamp=' + timestamp + '&sign=' + sign;
    //返回url
    return url;
}
