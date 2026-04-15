let websocket=null;

function connectElgatoStreamDeckSocket(port,uuid,registerEvent){
 websocket=new WebSocket("ws://127.0.0.1:"+port);

 websocket.onopen=()=>{
  websocket.send(JSON.stringify({event:registerEvent,uuid:uuid}));
 };

 websocket.onmessage=(evt)=>{
  let data=JSON.parse(evt.data);

  if(data.event==="keyDown"){
    let s=data.payload.settings;

    let url=`http://${s.ip}:${s.port}/api/?Function=${s.func}`;

    if(s.input) url+=`&Input=${s.input}`;
    if(s.value) url+=`&Value=${s.value}`;

    fetch(url);
  }
 };
}
