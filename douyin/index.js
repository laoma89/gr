// index.js
// 这个文件是首页的主要交互逻辑

// 定义一些全局变量
var appid = getQueryVariable("appid"); // 获取网址中的appid参数
var downloadUrl = "http://qqapp.top/download.php?appid=" + appid; // 拼接下载页的网址
var exchangeUrl = "http://qqapp.top/exchange.php?appid=" + appid; // 拼接兑换页的网址
var downloadButton = document.getElementById("download-button"); // 获取下载按钮元素
var exchangeButton = document.getElementById("exchange-button"); // 获取兑换按钮元素

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

// 监听下载按钮的点击事件
downloadButton.addEventListener("click", function () {
  // 跳转到下载页的网址
  window.location.href = downloadUrl;
});

// 监听兑换按钮的点击事件
exchangeButton.addEventListener("click", function () {
  // 跳转到兑换页的网址
  window.location.href = exchangeUrl;
});
