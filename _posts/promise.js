function runAsync(){
  var p = new Promise((resolve, reject)=>{
      //做一些异步操作
      setTimeout(function(){
          console.log('执行完成');
          resolve('随便什么数据');
      }, 2000);
  });
  return p;            
}
runAsync()