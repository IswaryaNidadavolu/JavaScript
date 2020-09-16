var first=setInterval(function() {
    console.log('ping!');
},500);
setTimeout(function() {
    clearInterval(first);
},3000);