import Service from '@/http'
import { HttpResponse } from '@/types/allUserTypes'
// /**
//  * @interface loginParams -登录参数
//  * @property {string} username -用户名
//  * @property {string} password -用户密码
//  */
// interface LoginParams {
//   username: string
//   password: string
// }
//封装User类型的接口方法
const id = 1
export class UserService {
  /**
   * @description 查询User的信息
   * @param {number} teamId - 所要查询的团队ID
   * @return {HttpResponse} result
   */
  static async clearedPlanList(): Promise<HttpResponse> {
    return Service('/printer/myPlan/cleared', {
      method: 'get',
      responseType: 'json',
      params: {
        id: id
      },
    })
  }
  static async planingList(): Promise<HttpResponse> {
    return Service('/printer/myPlan/planing', {
      method: 'get',
      responseType: 'json',
      params: {
        id: id
      }
    })
  }
  static async unfinishPlanList(): Promise<HttpResponse> {
    return Service('/printer/myPlan/unfinished', {
      method: 'get',
      responseType: 'json',
      params: {
        id: id
      }
    })
  }

  static async changeOrderStatus(state: string): Promise<HttpResponse> {
    return Service('/printer/myPlan/changeStatus', {
      method: 'put',
      responseType: 'json',
      params: {
        id: id,
        state: state
      }
    })
  }
  static async register(
    { identify, userName, password, nickName }
  ): Promise<HttpResponse> {
    return Service('/usercenter/register', {
      method: 'post',
      responseType: 'json',
      params: {
        identify: identify,
        nickName: nickName,
        password: password,
        userName: userName,
      }
    })
  }
  static async login(
    { identify, userName, password }
  ): Promise<HttpResponse> {
    return Service('/usercenter/login', {
      method: 'post',
      responseType: 'json',
      params: {
        identify: identify,
        password: password,
        userName: userName,
      }
    })
  }
  static async inviteList(): Promise<HttpResponse> {
    return Service('/printer/myInvite/lookInvite', {
      method: 'get',
      responseType: 'json',
    })
  }
  static async agreeInvite(): Promise<HttpResponse> {
    return Service('/printer/myInvite/argee', {
      method: 'patch',
      responseType: 'json',
      params: {
        id: id
      }
    })
  }
  static async userContributing(): Promise<HttpResponse> {
    return Service('/user/searchCleared', {
      method: 'get',
      responseType: 'json',
      params: {
        id: id
      }
    })
  }

  // static async resgister(params: LoginParams): Promise<HttpResponse> {
  //   return Axios('/api/user/resgister', {
  //     method: 'get',
  //     responseType: 'json',
  //     params: {
  //       ...params
  //     },
  //   })
  // }
}