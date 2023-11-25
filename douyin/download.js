// download.js
// 这个文件是网站的主要交互逻辑
// 定义一些全局变量
var qrcode = document.getElementById("qrcode"); // 获取二维码元素
var button = document.getElementById("button"); // 获取按钮元素
var appid = getQueryVariable("appid"); // 获取网址中的appid参数
var url = "https://www.douyin.com/app/" + appid; // 拼接抖音的小程序页面的网址

// 定义一个函数，用来获取网址中的参数
function getQueryVariable(variable) {
  // 获取网址中的查询字符串
  var query = window.location.search.substring(1);
  // 用&符号分割查询字符串
  var vars = query.split("&");
  // 遍历分割后的字符串数组
  for (var i = 0; i < vars.length; i++) {
    // 用=符号分割每个字符串
    var pair = vars[i].split("=");
    // 如果分割后的第一个元素等于参数名，返回第二个元素
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  // 如果没有找到参数名，返回空字符串
  return "";
}

// 调用第三方库的函数，生成二维码，传入抖音的小程序页面的网址
new QRCode(qrcode, url);

// 监听按钮的点击事件
button.addEventListener("click", function () {
  // 跳转到抖音的小程序页面的网址
  window.location.href = url;
});
