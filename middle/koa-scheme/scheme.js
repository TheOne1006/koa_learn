var validator = require('validator');
var crypto = require('crypto');

module.exports = {
    // '/(.*)' : {
    //     'request': {
    //         'header.version' : /^[0-9]+$/
    //     }
    // },
    'POST /signup': {
        'request': {
            'body': {
                'name': /^[a-zA-Z]+$/,
                'age': validator.isNumeric,
                'email': validator.isEmail,
                'password': /^[a-zA-Z0-9]{6,12}$/,
                'repassword': checkRepassword
            }
        }
    }
};

// 自定义验证方法
function checkRepassword(repassword) {
    var body = this.request.body;
    if(repassword !== body.password) {
        return this.throw(400, '两次密码不一致');
    }
    this.password = md5(repassword);
    return true;
}

// 自定义 md5 字符串
function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}
