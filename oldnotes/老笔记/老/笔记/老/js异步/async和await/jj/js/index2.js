let state = Math.ceil(Math.random()*20); //生成1-10的随机数

// async定义的函数返回的是一个promise的实例对象
// 示例如下：
// async function timeout() {
//     if (state > 10) {
//         return 'hello world'
//     } else {
//         throw new Error('has Error')
//     }
// }

// timeout().then(function (data) {
//     console.log(data)
// }).catch(function (reson) {
//     console.log(reson)
// })

// await 关键字只能在async 函数里面使用。
// 它的目的是如果一个async函数里还包括promise函数，就等待其内部的promise函数都执行完才改变父async函数的promise状态
// 案例如下

function aAdd (num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num + 1)
        }, 500)
    })
}

async function testResult() {
    let first = await aAdd(30);
    let second = await aAdd(50);
    let third = await aAdd(20);
    // 等待所有await的函数都得到结果后，才执行后面的代码
    let result = first + second + third
    if (state > 10) {
        return result
    } else {
        throw new Error('has Error')
    }

}
testResult().then(function (data) {
    console.log(data)
}).catch(function (reson) {
    console.log(reson)
})