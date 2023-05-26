/*
* @Author: zongmei
* @Date:   2019-09-02 13:52:17
* @Last Modified by:   Administrator
* @Last Modified time: 2019-09-02 16:26:27
*/

'use strict';
function myUtils(){}

//数组排序
/**
 * @param  {arr} 数组
 * @param  {type} 1：从小到大   2：从大到小   3：随机
 * @return {Array}
 */
myUtils.prototype.sort=function (arr, type = 1) {
    return arr.sort( (a, b) => {
        switch(type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
        }
    })
}

//数组去重
myUtils.prototype.unique = function(){
    var res = [];
    var b = {};
    var len =this.length;
    for(var i = 0;i<len;i++){
        if(!b[this[i]]){
            b[this[i]] = 'wangyao';
            res.push(this[i]);
        }
    }
    return res;
};

/*判断一个元素是否在数组中*/
myUtils.prototype.contains=function (arr, val) {
    return arr.indexOf(val) != -1 ? true : false;
}

/**
 * 去除空格
 * @param  {str}
 * @param  {type} 
 *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格
 * @return {String}
 */
myUtils.prototype.trim=function(str, type){
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
};

/**
 * @param  {str} 
 * @param  {type}
 *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
 * @return {String}
 */
myUtils.prototype.changeCase = function(str, type) {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map( function(word){
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                }else{
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
};

/**
 *  将小数字符串精确到指定位数
 * @param num string 字符串类型的小数
 * @param index int 精确到小数点第几位
 */
myUtils.prototype.roundFloat = function(num, index) {
    return Number(num).toFixed(index)
};

/*过滤html代码(把<>转换)*/
myUtils.prototype.filterTag = function (str) {
    str = str.replace(/&/ig, "&amp;");
    str = str.replace(/</ig, "&lt;");
    str = str.replace(/>/ig, "&gt;");
    str = str.replace(" ", "&nbsp;");
    return str;
}
 
/**
 * 获取地址栏参数
 * @param{string} name参数名称
 */
myUtils.prototype.getQueryString=function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}
 
/**
 * 获取全部url参数,并转换成json对象
 * @param{string}
 */
myUtils.prototype.getUrlAllParams=function (url) {
    var url = url ? url : window.location.href;
    var _pa = url.substring(url.indexOf('?') + 1),
        _arrS = _pa.split('&'),
        _rs = {};
    for (var i = 0, _len = _arrS.length; i < _len; i++) {
        var pos = _arrS[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        var name = _arrS[i].substring(0, pos),
            value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
}

/*
    检测密码强度
*/
myUtils.prototype.checkPwd =function(str) {
  var Lv = 0;
  if (str.length < 6) {
    return Lv
  }
  if (/[0-9]/.test(str)) {
    Lv++
  }
  if (/[a-z]/.test(str)) {
    Lv++
  }
  if (/[A-Z]/.test(str)) {
    Lv++
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++
  }
  return Lv;
}

/**
 * 针对某时间~倒计时
 * @param timestamp 截止时间 string类型
 * @param duration 加距离结束时长(分钟)  string类型
 * @return 剩余时间  object类型;
 * 
 * @方法调用
 * countDownTimer = setInterval(()=>{
 *     var time  = myUtils.prototype.countDown('2019-12-01 13:17:12','0');
 *     document.body.innerHTML =  time.day+':'+time.hour+':'+time.min+':'+time.sec
 * },1000);
 */
myUtils.prototype.countDown =function(timestamp,duration='0'){
    //小于10的格式化函数
    function timeFormat(param){
        return param < 10 ? '0' + param : param; 
    }
    var residueObj ={};
	var newTime =  new Date().getTime();
	var time1 = new Date(timestamp).getTime();
    var durationTimestamp = Number(duration)*60*60*1000
	var endTime = parseInt(time1)+parseInt(durationTimestamp);//+时长的时间戳
	if (endTime - newTime > 0){
        var time = (endTime - newTime) / 1000;
        var day = parseInt(time / (60 * 60 * 24));
        var hou = parseInt(time % (60 * 60 * 24) / 3600);
        var min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        var sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
		residueObj.day = timeFormat(day),
		residueObj.hour= timeFormat(hou),
		residueObj.min = timeFormat(min),
		residueObj.sec = timeFormat(sec)
	}else{//活动已结束，全部设置为'00'
		residueObj.day ="00"
		residueObj.hour ="00"
		residueObj.min ="00"
		residueObj.sec ="00"
    }
    return residueObj
}


