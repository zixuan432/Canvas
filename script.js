//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //城堡主體繪製開始
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()
  
  //左城門
  ctx.fillStyle = "#BFA688"
  ctx.fillRect(50,200,25,50) //(x軸,y軸,寬,高)
  ctx.strokeRect(50,200,25,50) //延續地面線條設定，一樣是黑色
  
  //左城門頭蓋
  ctx.beginPath()
    ctx.moveTo(50,200)
    ctx.lineTo(62.5,150)
    ctx.lineTo(75,200)
  ctx.closePath()
    ctx.fillStyle = "#6D90A6"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke() 
  
  //右城門
  ctx.fillStyle = "#BFA688"
  ctx.fillRect(325,200,25,50) //(x軸,y軸,寬,高)
  ctx.strokeRect(325,200,25,50) //延續地面線條設定，一樣是黑25
  
  //右城門頭蓋
 

  ctx.beginPath()
    ctx.moveTo(325,200)
    ctx.lineTo(337.5,150)
    ctx.lineTo(350,200)
  ctx.closePath()
    ctx.fillStyle = "#6D90A6"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke() 
  //拱門繪製
  ctx.beginPath()
    //右半邊
    ctx.moveTo(50,250)
    ctx.lineTo(350,250)
    ctx.lineTo(350,350)
   
    //左半邊
    ctx.lineTo(50,350)
    ctx.closePath()
    ctx.fillStyle="#C4BBAC"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
    ctx.lineWidth = 1;
  
    //方形主體
    ctx.beginPath()
      ctx.moveTo(125,155)
      ctx.lineTo(275,155)
      ctx.lineTo(275,250)
      ctx.lineTo(125,250)
    ctx.closePath()
    ctx.fillStyle="#C4BBAC"
    ctx.fill()
    ctx.strokStyle = "black"
      ctx.stroke() 
  
  
    //三角形圓塔
            ctx.beginPath()
        //沿用寬度及色彩設定
        ctx.lineWidth = 1;
       
        ctx.fillStyle = "#6D90A6"
        /*使用arc(x,y,r,s,e)畫一個圓
        x,y是圓心的座標，r是半徑，s和e是起點和終點的角度*/
        ctx.arc(200,155,65,0,Math.PI,Math.PI*2)
        ctx.fill()
        ctx.stroke()


    //窗戶
    ctx.beginPath()
      ctx.arc(200,185,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(185,220)
      ctx.lineTo(215,220)
    ctx.closePath()

      ctx.fillStyle="#626463"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
 //窗戶左
    ctx.beginPath()
      ctx.arc(150,185,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(135,220)
      ctx.lineTo(165,220)
    ctx.closePath()

      ctx.fillStyle="#626463"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()


 //窗戶右
    ctx.beginPath()
      ctx.arc(250,185,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(235,220)
      ctx.lineTo(265,220)
    ctx.closePath()

      ctx.fillStyle="#626463"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()





  //大門
 ctx.beginPath()
      ctx.arc(200,300,25,Math.PI*2,Math.PI,true)
      ctx.lineTo(175,350)
      ctx.lineTo(225,350)
    ctx.closePath()
      ctx.fillStyle="white"
      ctx.fill()
    ctx.stroke()


    //窗戶下
    ctx.beginPath()
      ctx.arc(75,300,10,Math.PI*2,Math.PI,true)
      ctx.lineTo(65,325)
      ctx.lineTo(85,325)
    ctx.closePath()
      ctx.fillStyle="#282E34"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
       //窗戶
    ctx.beginPath()
      ctx.arc(125,300,10,Math.PI*2,Math.PI,true)
      ctx.lineTo(115,325)
      ctx.lineTo(135,325)
    ctx.closePath()
      ctx.fillStyle="#282E34"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()

    //窗戶
    ctx.beginPath()
      ctx.arc(275,300,10,Math.PI*2,Math.PI,true)
      ctx.lineTo(265,325)
      ctx.lineTo(285,325)
    ctx.closePath()

      ctx.fillStyle="#282E34"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
       //窗戶
    ctx.beginPath()
      ctx.arc(325,300,10,Math.PI*2,Math.PI,true)
      ctx.lineTo(315,325)
      ctx.lineTo(335,325)
    ctx.closePath()

      ctx.fillStyle="#282E34"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()





  
  //左城門旗子
      ctx.beginPath()
        ctx.moveTo(200,90)
        ctx.lineTo(200,50-mouse.x/4)
        ctx.lineTo(240,50 - (time%2)-mouse.x/4)
        ctx.lineTo(240,90 - (time%2)-mouse.x/4)
        ctx.lineTo(200,90-mouse.x/4)
      ctx.closePath()
      ctx.fillStyle="green"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
  
  
  
  //車子
    ctx.fillStyle="brown"
    let carx = time%440-40
    ctx.fillRect(carx,340,55,20)
    ctx.strokeRect(carx,340,55,20)
   
    ctx.beginPath()
    ctx.arc(carx+10,365,6,0,Math.PI*2)
    ctx.arc(carx+30,365,6,0,Math.PI*2)
     ctx.arc(carx+50,365,6,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    
    ctx.beginPath()
     ctx.fillStyle="blue"
    ctx.fill()
    ctx.fillRect(carx,340,35,10)
    ctx.strokeRect(carx,340,35,10)
   
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,1) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})