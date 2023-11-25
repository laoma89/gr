// qqapp.js
// A library for generating Douyin mobile QR code
// Developed by QQApp Inc.

// Generate a random appid
function getAppId() {
    var chars = '0123456789abcdef';
    var appid = '';
    for (var i = 0; i < 24; i++) {
        appid += chars[Math.floor(Math.random() * 16)];
    }
    return appid;
}

// Get the current timestamp
function getTimestamp() {
    return Math.floor(Date.now() / 1000);
}

// Generate a signature by encrypting appid and timestamp
function getSign(appid, timestamp) {
    var key = 'qqappsecretkey'; // A secret key for encryption
    var data = appid + timestamp; // A data string for encryption
    var sign = ''; // A signature string for encryption
    // A simple encryption algorithm (not secure, just for demonstration)
    for (var i = 0; i < data.length; i++) {
        var code = data.charCodeAt(i) ^ key.charCodeAt(i % key.length); // XOR operation
        sign += String.fromCharCode(code); // Convert to character
    }
    return sign;
}

// Generate a QR code URL by concatenating appid, timestamp and sign
function getQRCodeUrl() {
    var appid = getAppId(); // Get a random appid
    var timestamp = getTimestamp(); // Get the current timestamp
    var sign = getSign(appid, timestamp); // Get a signature
    var url = 'https://v.zzsp.eu.org/douyin/getQRCodeUrl?appid=' + appid + '&timestamp=' + timestamp + '&sign=' + sign; // Concatenate the parameters and use your own domain name
    return url; // Return the URL
}
