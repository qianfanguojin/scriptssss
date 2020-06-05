/**
 * 作者：qianfanguojin
 * 版本:2.0
 */

 

 
function Play(video){
		var time;
		video.play();
		//video.playbackRate = 2; 
		video.volume = 0;
		video.oncanplay = function () {
			time = video.duration; 
			//video.currentTime = Math.floor(time - 10);
		}
		video.oncanplaythrough = function(){
			//video.play();
			setTimeout(function(){
				video.currentTime = Math.floor(time - 1);
				video.oncanplaythrough = "";
				console.log("设置时间");
			},1000);
			
			
		}
		
		return time;
}
//如果没有定义到视频框架变量，定义该变量
if(!frameVideos){
	var frameVideos;
}
//获取视频框
frameVideos = $("#iframe").contents().find(".ans-attach-online.ans-insertvideo-online").contents().find("#video_html5_api");
//如果视频框存在，自动播放视频
if(frameVideos.get(0)){
	var i = 0;	
	let video = frameVideos.get(i);
	console.log(video);
	var time = Play(video);
	var inn = setInterval(function(){
		if(video.ended){
			if((video = frameVideos.get(++i))){
				Play(video);
			}else{//播放完成，跳至下一节
				clearInterval(inn);
				$(".orientationright ").click();
			}
		}
		
		console.log("跳过");
	},1000);
}else{//如果视频框不存在，跳过该小节
	$(".orientationright ").click();
} 




checkStatus();


