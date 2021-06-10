import { myOrderCurrStatus } from "../enums/orderEnums"
// 企划邀请信息
export interface OrderInvite {
  name: string
  price: string
  time: string
  content: string
  leave: string,
};
export interface wholeMsg {
  order: defaultOrder,
  printer: defaultPrinter,
  user: defaultUser,
}
export interface defaultOrder {
  content: string,
  drawings: string,
  id: number,
  limitTime: string,
  money: number,
  printId: number,
  state: number,
  style: string,
  title: string,
  userId: number
}
export interface defaultPrinter {
  avatar: string,
  getImgTime: number,
  id: number,
  identify: number,
  isBusy: number,
  nickName: string,
  notice: string,
  password: string,
  rate: number,
  schedule: string,
  username: string
}
export interface defaultUser {
  avatar: string,
  getImgTime: string,
  id: number,
  identify: number,
  nickName: string,
  password: string,
  userName: string
}
export interface printerMsg {
  name: string,
  id: string,
  avatar: string
}