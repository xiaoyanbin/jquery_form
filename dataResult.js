(function(root,factory,plug){
   factory(jQuery,plug);
})(this,function(jQuery,plug){
    //默认参数
   
    var config ={
        initEvent:"input",
        plugName:"dr"
    };
    var _RELES_ = {
    	"regexp":function(data){
            return new RegExp(data).test(this.val()); //true false

    	},
    	"required":function(data){
             return this.val();
    	}
    }
    $.fn[plug] = function(options){
    	if(!this.is("form")) return;
        console.log(options)
    	this.$find =this.find("input");
        
        $.extend(this,config,options);

    	this.$find.on(this.initEvent,function(){
    		var _this =$(this); 
    		   _this.siblings("p").remove();
    		$.each(_RELES_,function(key,fn){
		  	    var $fileName = _this.data(config.plugName+"-"+key);
		  	    var $message = _this.data(config.plugName+"-"+key+"-"+"message");
		  	  
		  	    if($fileName){
		  	    	var result = fn.call(_this,$fileName);
		  	    	if(!result){
		  	    		_this.after("<p>"+$message+"</p>");
		  	    	}
		  	    }

    		})
    	})
    	
    }

    //扩展接口
    $.fn[plug].extension = function(options){
        $.extend(_RELES_,options);
/*    	"min-length" : function(data){
             
    	}*/
    }
},"dataResult");