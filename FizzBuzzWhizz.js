function fbw(a,b,c){for(i=0;i<100;)console.log((++i).toString().indexOf(a.toString()) > -1 ?'Fizz':''||(i%a?'':'Fizz')+(i%b?'':'Buzz')+(i%c?'':'Whizz')||i);}fbw(3,5,7);
