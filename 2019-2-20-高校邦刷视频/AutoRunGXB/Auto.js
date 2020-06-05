

function Play(video){
        let time;
        setTimeout(function(){
            video.playbackRate = 2;
            video.volume = 0;
			//video.play();
            console.log("进入进度条设置");
            time = video.duration;
            video.currentTime = Math.floor(time - 1);
            video.onplay = "";
            console.log("设置时间");
        },2000);

		
		
}

function toWatch(){

	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve();
		},2000);
	});
}

function AutoRun(){
	//如果没有定义到视频变量，定义该变量
	if(!videoFrame){
		var videoFrame;
	}
	//获取视频框
	videoFrame = $("#video_player_html5_api");
	let video = videoFrame.get(0);
	//如果视频框存在，自动播放视频
	if(video){
        Play(video);
        video.volume = 0;
		//console.log(video);
		var inn = setInterval(function(){
			if(video.paused) {
				video.play();
				Play(video);
			}
			if(video.ended){
				console.log("跳转");
				//$(".chapter-next.gxb-cur-point").click();
			}
            
			console.log("跳过");
		},1000);
	}else{//如果视频框不存在，跳过该小节
		// $(".orientationright ").click();
		// console.log("跳转");
		// return true;
        $(".chapter-next.gxb-cur-point").click();
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
    await sleep(5000);
    console.log("run");
	AutoRun();
}

main();