const express = require("express");
const fs = require('fs');
var app = express();
//过滤data:URL
app.get('/up', function (req, res) {
    // console.log(req.query);
    let imgData = req.query.url
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64'); // 解码图片
    let data = Date.parse(new Date());
    fs.writeFile(`${"../../Desktop/hmr_" + data + '.png'}`, dataBuffer, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(dataBuffer, '图片已保存至桌面');
        }
    })
});
app.listen(3031, () => {
    console.log('服务已启动，浏览器输入：http://localhost:3031/');
});