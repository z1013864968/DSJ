var URL="http://localhost:8000";
var article={
    search:function(param,callBack){
        $.get(URL+'/admin/search',param,function(res){
            callBack(res);
        })
    },
    
    del:function(id,callBack){
        $.get(URL+'/admin/article_delete',{id:id},function(res){
            callBack(res);
        })
    },
    add:function(fd,callBack){
            $.ajax({
                url:URL+'/admin/article_publish',
                type:'post',
                data:fd,
                processData:false,
                contentType:false,
              success:function(res){
                  callBack(res);
              }
            })
    }
}