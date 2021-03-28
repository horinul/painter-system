import { myOrderCurrStatus } from "@/enums/orderEnums"
// 企划邀请信息
export interface OrderInvite {
  name: string
  price: string
  time: string
  content: string
  leave: string,
};
export interface myOrder {
  name: string,
  title: string,
  price: string,
  style: string, // 这个是否有选项
  format: string,
  startTime: string,
  deadline: string,
  endTime: string,
  currentStatus: myOrderCurrStatus,
  rate: number,
  imageUrl: string,
  signUpPrinterList: Array<printerMsg>,
  selectPrinter: printerMsg
}
export interface printerMsg {
  name: string,
  id: string,
  avatar: string
}