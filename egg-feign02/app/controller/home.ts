import { Controller } from 'egg';

import {restfeign} from '../feign/feignConfig';
// @ts-ignore
var java = require('js-to-java');
export default class HomeController extends Controller {

  /**
   * @Author wjl
   * @Description   调用接口
   * @Date 18:16 2018/11/20
   * @Param
   * @return
   **/

  public async index() {
    const { ctx } = this;

    var info={"name":"wangsr001","email":"123456@qq.com","id":10};

    console.log(typeof info);

      console.log(  await restfeign.getUsers(JSON.parse(JSON.stringify(info))));   //后台数据接受 @Requestbody

    ctx.body = await ctx.service.test.sayHi('success');
  }
}
