// 使用return连续回调的例子
// http://jspang.com/posts/2019/01/20/es6.html#%E7%AC%AC16%E8%8A%82%EF%BC%9Apromise%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BD%BF%E7%94%A8

// let state=1; 
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }
 
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// }
 
// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完');
//      if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }
 
// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
 
// }).then(function(val){
//      console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// });




// 基本用法
// https://blog.csdn.net/qq_34645412/article/details/81170576

let state = Math.ceil(Math.random()*20); //生成1-10的随机数

let p1 = new Promise (function (resolve, reject) {
	var data = {
		name: 'joe',
		age: 22,
		say: function () {
			console.log(123)
		}
	}
	if (state > 10) {
		resolve(data)
	} else {
		reject('失败啦')
	}
})

// 方法一： .then接受两个函数作为参数，第一个接收成功的回调，第二个接收失败的回调
// p1.then(function (data) {
// 	console.log(data)
//  console.log(data.name)
//  data.say()
// },
// function (reson) {
// 	console.log(reson)
// })

// 方法二：使用.then只接收成功的回调，使用.catch来捕获失败的回调
p1.then(function (data) {
	console.log(data)
	console.log(data.name)
	data.say()
}).catch(function (reson) {
	console.log(reson)
})

