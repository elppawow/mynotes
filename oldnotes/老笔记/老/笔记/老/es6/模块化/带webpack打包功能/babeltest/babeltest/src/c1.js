// 案例一 暴露一个对象
// export default {
//     name: 'joe',
//     age: 22
// }

// 案例二 多个export
// export class Coder{
//     name(val){
//         console.log(val);
//     }
// }
// export let a = 1

// 案例三 暴露一个对象，里面有属性，方法，和类
export default {
    name: 'joe',
    age: 22,
    f: function () {
        console.log('fffff')
    },
    Clas: class {
        ce(){
            console.log('c1')
        }
    }
}