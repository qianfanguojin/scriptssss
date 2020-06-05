/**
 * 作者：qianfanguojin
 * 版本:1.2
 */
 
 var autoTime = 15000;//ms 每过多少秒主函数执行，也就是每个小节的运行时间，视个人网速修改。
						//网速快修改小一点，网速慢大一点，但最好不要小于5000，不然时间不够脚本运行
 
 
 //检查该小节是否完成任务点，已完成则直接跳过
 function checkStatus(){
	if((!frames) && (!status)){
		var frames;
		var status;
	}
	frames = $("#iframe").contents().find("div.ans-attach-ct");
	status = [];
	frames.each(function(index){
		status[index] = $(this).hasClass("ans-job-finished");//有这个class代表该小节有任务点已完成
	});
	//console.log(status);
	for(let i = 0 ; i < status.length ;i++){//判断是否每个任务点都完成
		if(!status[i])//如果有任务点未完成，返回false
			return false;
	}
	//true代表没有任务点或者任务点全部完成
	return true;

} 
 
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
function AutoRun(){
	if(checkStatus()){//任务点全部完成，直接跳过
		$(".orientationright ").click();
		console.log("跳转");
		return true;
	}
	//如果没有定义到视频框架变量，定义该变量
	if(!frames){
		var frames;
	}
	//获取视频框
	frames = $("#iframe").contents().find(".ans-attach-online.ans-insertvideo-online").contents().find("#video_html5_api");
	//如果视频框存在，自动播放视频
	if(frames.get(0)){
		var i = 0;	
		let video = frames.get(i);
		//console.log(video);
		var time = Play(video);
		var inn = setInterval(function(){
			if(video.ended){
				if((video = frames.get(++i))){
					Play(video);
				}else{//播放完成，跳至下一节
					clearInterval(inn);
					$(".orientationright ").click();
					console.log("跳转");
					return true;
				}
			}
			
			console.log("跳过");
		},500);
	}else{//如果视频框不存在，跳过该小节
		$(".orientationright ").click();
		console.log("跳转");
		return true;
	}  
}

//可以采用JS的异步新特性Promise类来实现
function sleep(delay) {
	return new Promise(function(resolve, reject){ //做一些异步操作
	setTimeout(function(){
			resolve("时间结束：" + delay);
		}, delay);
	});
}

async function main(){
	let n = 200;
	while(n--){
		let pi = await sleep(autoTime);
		console.log(pi);
		console.log(n);
		AutoRun();
	}
}

main();


