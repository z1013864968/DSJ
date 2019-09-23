var url='http://localhost:8000';
var slug={
    search:function(callBack){
        
        $.get(url+'/admin/category_search',function(res){
            callBack(res);
        })
       
    },

    add:function(name,slug,callBack){
        $.post(url+'/admin/category_add',{name:name,slug:slug},function(res){
            callBack(res);
        })
    },
    del:function(id,callBack){
        $.post(url+'/admin/category_delete',{id:id},function(res){
            callBack(res);
        })
    }
}