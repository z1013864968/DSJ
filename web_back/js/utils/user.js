


var url='http://localhost:8000';
var user={
    /**
     * 管理员登陆
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callBack 回调函数
     */
    // 登陆
    login:function(userName,password,callBack){
        $.post(url+'/admin/login',{user_name:userName,password:password},function(res){
            callBack(res);
        })
    },
    // 退出
    login_out:function(callBack){
        $.post(url+'/admin/logout',function(res){
            callBack(res);
        })
    },
    // 获取用户信息
    login_users:function(callBack){
        $.get(url+'/admin/getuser',function(res){
            callBack(res);
        })
    },
}