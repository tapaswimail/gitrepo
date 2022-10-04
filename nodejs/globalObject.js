setTimeout(function(){
    console.log('3 seconds have passed-message from setTimeout');
},3000);

var time=0;

var timer=setInterval(function(){
    time+=1;
    console.log(time+'-seconds have passed');
    console.log(__dirname);
    console.log(__filename);
    if(time>=10)
    {
        clearInterval(timer);
    }
},1000);


