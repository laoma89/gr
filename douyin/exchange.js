// exchange.js
// 这个文件是兑换页的主要交互逻辑

// 定义一些全局变量
var appid = getQueryVariable("appid"); // 获取网址中的appid参数
var coins = getCookie("coins"); // 获取用户的金币数量，从cookie中读取
var prizes = document.getElementsByClassName("prize"); // 获取所有奖品元素，是一个数组
var exchangeButton = document.getElementById("exchange-button"); // 获取兑换按钮元素
var selectedPrize = null; // 定义一个变量，用来存储用户选择的奖品，初始为null

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

// 定义一个函数，用来获取cookie中的值
function getCookie(name) {
  // 获取所有的cookie，用;符号分割
  var cookies = document.cookie.split(";");
  // 遍历分割后的字符串数组
  for (var i = 0; i < cookies.length; i++) {
    // 用=符号分割每个字符串
    var pair = cookies[i].split("=");
    // 如果分割后的第一个元素等于参数名，返回第二个元素
    if (pair[0] == name) {
      return pair[1];
    }
  }
  // 如果没有找到参数名，返回空字符串
  return "";
}

// 定义一个函数，用来设置cookie中的值
function setCookie(name, value, days) {
  // 创建一个日期对象，表示当前时间
  var date = new Date();
  // 设置日期对象的时间，增加指定的天数
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  // 将日期对象转换为字符串，作为cookie的过期时间
  var expires = "expires=" + date.toUTCString();
  // 将参数名，参数值和过期时间拼接成一个字符串，作为cookie的值
  var cookie = name + "=" + value + ";" + expires;
  // 设置document的cookie属性，写入cookie
  document.cookie = cookie;
}

// 定义一个函数，用来选择奖品
function selectPrize(prize) {
  // 如果已经选择了一个奖品，取消它的选中状态，移除selected类名
  if (selectedPrize) {
    selectedPrize.classList.remove("selected");
  }
  // 将参数赋值给selectedPrize变量，表示当前选择的奖品
  selectedPrize = prize;
  // 给当前选择的奖品添加选中状态，添加selected类名
  selectedPrize.classList.add("selected");
}

// 定义一个函数，用来兑换奖品
function exchangePrize() {
  // 如果没有选择奖品，弹出提示框，提示用户选择奖品
  if (!selectedPrize) {
    alert("请先选择奖品");
    return;
  }
  // 获取选择的奖品的名称
  var name = selectedPrize.getAttribute("data-name");
  // 获取选择的奖品的价格
  var price = parseInt(selectedPrize.getAttribute("data-price"));
  // 如果用户的金币不足以兑换奖品，弹出提示框，提示用户金币不足
  if (coins < price) {
    alert("您的金币不足，无法兑换" + name);
    return;
  }
  // 如果用户的金币足以兑换奖品，弹出确认框，询问用户是否确定兑换
  var confirm = window.confirm("您确定要兑换" + name + "吗？");
  // 如果用户点击了确定按钮，执行以下操作
  if (confirm) {
    // 减去用户的金币，等于奖品的价格
    coins -= price;
    // 设置用户的金币到cookie中，保存7天
    setCookie("coins", coins, 7);
    // 弹出提示框，提示用户兑换成功
    alert("恭喜您，兑换成功！");
    // 刷新页面，更新用户的金币和奖品状态
    window.location.reload();
  }
}

// 遍历所有的奖品元素
for (var i = 0; i < prizes.length; i++) {
  // 获取每个奖品元素
  var prize = prizes[i];
  // 监听每个奖品元素的点击事件
  prize.addEventListener("click", function () {
    // 调用选择奖品的函数，传入当前点击的奖品元素
    selectPrize(this);
  });
}

// 监听兑换按钮的点击事件
exchangeButton.addEventListener("click", function () {
  // 调用兑换奖品的函数
  exchangePrize();
});
