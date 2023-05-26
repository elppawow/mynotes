// class Cla1 {
//     constructor () {

//     }
//     f1 () {
//         console.log(123)
//     }
// }

// let c1 = new Cla1
// c1.f1()
// function f2 () {
//     console.log(222222)
// }
// $('h2').on('done2',f2);
// function f1(){
//     console.log(111111111)
//     setTimeout(function(){
//        //f1的任务代码
//        $('h2').trigger('done2');
//     },3000);
// }
// f1()
// $('button').on('click', function () {
//     console.log(33333333333)
// })

function trigger(ele){
    if(document.all) {  //IE
        document.getElementById(ele).click();
    } else { //其它浏览器
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);　　　　　　　　　　　　　　//这里的click可以换成你想触发的行为
        document.getElementById(ele).dispatchEvent(e);
    }   
}
document.getElementById("d1").addEventListener('click', function () {
    console.log(777777777)
})
trigger("d1")