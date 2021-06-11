<template>
  <div id = "contains">
    <div id="username"><h3 style="text-align: center;">用户：张三<span>-在线</span></h3></div>
    <div id="Inchat"></div>
    <div id="left">
        <div id="content">

        </div>
        <div id="input">
            <textarea type="text" id="input_text" style="width: 695px;height: 200px;"></textarea>
            <button id="submit" style="float: right;">发送</button>
        </div>
    </div>
    <div id="right">
        <p id="hy" style="text-align: center;">在线列表</p>
        <div id="hyList">

        </div>
        <p id="xt" style="text-align: center">系统消息</p>
        <div id="xtList">

        </div>
    </div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})

export default class MsgList extends Vue {
//     private  websock=null;
//     created() {
//        console.log("调用了链接websock  ，获取的用户id为   ：")
//         // $.ajax({
//         //     url:"getUsername",
//         //     success:function (res) {
//         //         username = res;
//         //     },
//         //     async:false //同步请求，只有上面好了才会接着下面
//         // });
//       this.initWebSocket();
//     }
//     destroyed() { // 离开页面生命周期函数
//       // this.websocketclose();
//     }
       
//     private initWebSocket () {
//         // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
//         console.log("调用了链接websock  ，获取的用户id为   ：")
//         // var userId = store.getters.userInfo.id;
//         // var url = window._CONFIG['domianURL'].replace("https://","wss://").replace("http://","ws://")+"/websocket/"+userId;

//         // console.log(url);
//         this.websock = new WebSocket("ws://localhost:8085/chat");
//         this.websock.onopen = this.websocketOnopen;
//         this.websock.onerror = this.websocketOnerror;
//         this.websock.onmessage = this.websocketOnmessage;
//         this.websock.onclose = this.websocketOnclose;
//     }
//     private websocketOnopen() {
//       console.log("WebSocket连接成功");
//             $("#username").html("<h3 style=\"text-align: center;\">用户："+ username +"<span>-在线</span></h3>");

//       //心跳检测重置
//       //this.heartCheck.reset().start();
//     }
//     private websocketOnerror (e) {
//       console.log("WebSocket连接发生错误");
//       this.reconnect();
//     }
//     private websocketOnmessage (e) {
//         console.log('监听关闭' + e)
//       console.log("-----接收消息-------",e.data);
//        //获取服务端推送的消息
//             var dataStr = e.data;
//             //将dataStr转换为json对象
//             var res = JSON.parse(dataStr);

//             //判断是否是系统消息
//             if(res.system){
//                 //系统消息
//                 //1.好友列表展示
//                 //2.系统广播的展示
//                 //此处声明的变量是调试时命名的，可以直接合并
//                 var names = res.message;
//                 var userlistStr = "";
//                 var broadcastListStr = "";
//                 var temp01 = "<a style=\"text-align: center; display: block;\" onclick='showChat(\"";
//                 var temp03 = "\")'>";
//                 var temp04 = "</a></br>";
//                 var temp = "";
//                 for (var name of names){
//                     if (name != username){
//                         temp = temp01 + name + temp03 + name + temp04;
//                         userlistStr = userlistStr + temp;
//                         broadcastListStr += "<p style='text-align: center'>"+ name +"上线了</p>";
//                     }
//                 }
//                 //渲染好友列表和系统广播
//                 $("#hyList").html(userlistStr);
//                 $("#xtList").html(broadcastListStr);

//       // var data = eval("(" + e.data + ")"); //解析对象
//     }
//     private websocketOnclose (e) {
//       console.log("connection closed (" + e.code + ")");
//       this.reconnect();
//     }
//     private websocketSend(text) { // 数据发送
//       try {
//         this.websock.send(text);
//       } catch (err) {
//         console.log("send failed (" + err.code + ")");
//       }
//     }

//     private reconnect() {
//       var that = this;
//       if(that.lockReconnect) return;
//       // that.lockReconnect = true;
//       //没连接上会一直重连，设置延迟避免请求过多
//       setTimeout(function () {
//         console.info("尝试重连...");
//         that.initWebSocket();
//         // that.lockReconnect = false;
//       }, 5000);
//     }
}
</script>
<style lang="less" scoped>
    #contains{
        background-color: pink;
        width: 1000px;
        height: 700px;
        margin: auto;
    }
    #username{
        background-color: powderblue;
        width: 1000px;
        height: 30px;
    }
    #Inchat{
        background-color: rgb(5, 130, 146);
        width: 1000px;
        height: 30px;
    }
    #left{
        background-color: salmon;
        width: 700px;
        height: 640px;
        float: left;
        position: relative;
    }
    #content{
        background-color: silver;
        width: 700px;
        height: 400px;
        /*display: none;*/
        visibility: hidden;
    }
    #right{
        background-color: rgb(107, 3, 3);
        width: 300px;
        height: 640px;
        float: right;
    }
    #hyList{
        height: 270px;
        overflow-y: scroll;
        background: antiquewhite;
    }
    #xtList{
        height: 270px;
        overflow-y: scroll;
        background: antiquewhite;
    }
    #input{
        margin-bottom: 0px;
        position: absolute;
        bottom: 0px;
    }
    #mes_left{
        float: left;
        border: 2px aqua;
        max-width: 490px;
    }
    #mes_right{
        float: right;
        border: 2px aqua;
        max-width: 490px;
    }
    #hy{
        display: block;
        width: 300px;
    }
    textarea {
        resize: none;
        border: none;
        outline: none
    }
</style>
