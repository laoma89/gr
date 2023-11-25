<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>下载抖音小程序</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .container {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: url(images/bg.jpg) no-repeat center center;
      background-size: cover;
    }
    .qrcode {
      width: 300px;
      height: 300px;
      border: 5px solid white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    .button {
      width: 300px;
      height: 80px;
      margin-top: 20px;
      border: none;
      border-radius: 10px;
      background: url(images/button.png) no-repeat center center;
      background-size: contain;
      font-size: 30px;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <div id="qrcode" class="qrcode"></div>
    <button id="button" class="button">立即下载</button>
  </div>
  <script src="js/qrcode.min.js"></script>
  <script src="js/download.js"></script>
</body>
</html>
