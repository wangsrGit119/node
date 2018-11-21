
var feign = require('feignjs');
// @ts-ignore
var FeignRequest = require('feignjs-request');

/**
 * @Author wjl
 * @Description   参考   feignjs  =====npm i feignjs --save
 * @Date 18:10 2018/11/20
 * @Param
 * @return
 **/


var restDescription = {
    getUsers: 'POST /provide/getAll',    //controller 中暴露的的restApi
};

export  const restfeign=feign.builder()      //将此变量暴露出去  在service 或者controller中访问
    .client(new FeignRequest({debug:true,json:true}))    //内部参数 json默认为true传送数据使用json格式
    .target(restDescription,'http://127.0.0.1:8082');
