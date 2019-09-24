var url="http://localhost:8000";
var article={
    search:function(param,callBack){
        $.get(url+'/admin/search',param,function(res){
            callBack(res);
        })
    }
}