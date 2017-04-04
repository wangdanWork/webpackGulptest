//数组去重
Array.prototype.info=function(){
    var n=[];
    for(var i=0;i<this.length;i++){
        if(n.indexOf(this[i])==-1){
           n.push(this[i]) 
        }
    }
    return n;
}
var arr=[1,5,3,5,8,1];
arr.info();