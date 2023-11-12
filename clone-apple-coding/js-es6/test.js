

const promise = new Promise((resolve, reject) => {
    $.get('https://codingapple1.github.io/hello.txt').done(function(res) {
         console.log(res);
    })
 })
