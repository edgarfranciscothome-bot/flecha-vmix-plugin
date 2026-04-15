let websocket=null;
let uuid=null;

function connectElgatoStreamDeckSocket(port,inUUID,registerEvent){
 uuid=inUUID;
 websocket=new WebSocket("ws://127.0.0.1:"+port);

 websocket.onopen=()=>{
  websocket.send(JSON.stringify({event:registerEvent,uuid:uuid}));
 };
}

function send(){
 let settings={
  ip:document.getElementById("ip").value,
  port:document.getElementById("port").value,
  func:document.getElementById("func").value,
  input:document.getElementById("input").value,
  value:document.getElementById("value").value
 };

 websocket.send(JSON.stringify({
  event:"setSettings",
  context:uuid,
  payload:settings
 }));
}

document.querySelectorAll("input,select").forEach(e=>{
 e.addEventListener("change",send);
});
