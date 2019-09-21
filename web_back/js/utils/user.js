var url='http://localhost:8000';
var user={
    login:function(userName,password,callBack){
        $.post(url+'/admin/login',{user_name:userName,password:password},function(res){
            callBack(res);
        })
    }
}