const express = require("express");
const fs = require('fs');
var app = express();
//接收前台POST过来的base64
var imgData = ''
//过滤data:URL
app.get('/up', function (req, res) {
    console.log(1111);
    console.log(req.query);
    let imgData = req.query.url
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64'); // 解码图片
    let data = Date.parse(new Date());
    fs.writeFile(`${"../../Desktop/hmr_" + data + '.png'}`, dataBuffer, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(dataBuffer, '保存成功');
        }
    })
});
app.listen(3031, () => {
    console.log('服务已启动');
});