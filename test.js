async function async1() {
    console.log("async1 start");
    await  async2();
    console.log("async1 end");
}
async  function async2() {
    console.log( 'async2');
}
console.log("script start");

async1()
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});

process.nextTick(()=>{
    console.log("process")
})
console.log('script end');
setImmediate(()=>{
    console.log("setImmediate")
})
setTimeout(()=>{
    console.log("settimeout");
},0)