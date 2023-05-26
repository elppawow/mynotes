"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 案例一
// export default {
//     name: 'joe',
//     age: 22
// }
// 案例二
// export class Coder{
//     name(val){
//         console.log(val);
//     }
// }
// export let a = 1
// 案例三
var _default = {
  name: 'joe',
  age: 22,
  f: function f() {
    console.log('fffff');
  },
  Clas:
  /*#__PURE__*/
  function () {
    function Clas() {
      _classCallCheck(this, Clas);
    }

    _createClass(Clas, [{
      key: "ce",
      value: function ce() {
        console.log('c1');
      }
    }]);

    return Clas;
  }()
};
exports["default"] = _default;