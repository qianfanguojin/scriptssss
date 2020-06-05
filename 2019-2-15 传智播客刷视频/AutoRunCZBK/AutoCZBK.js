
var vBegin = 8;//视频开始序号，第一个视频为0

function Play(videoTemp){
	setTimeout(function(){
		videoTemp.play();
		videoTemp.playbackRate = 2.5;
		videoTemp.volume = 0;
		console.log(videoTemp);
		console.log("开始播放新视频");
	},500);
	
}

//可以采用JS的异步新特性Promise类来实现
function sleep(delay) {
	return new Promise(function(resolve, reject){ //做一些异步操作
	setTimeout(function(){
			resolve("时间结束：" + delay);
		}, delay);
	});
}


function main(){
	if(!leftBox){
		var leftBox;	
	}
	leftBox = $("#point_undefined.point-item-box");
	console.log(leftBox);
	let video;
	//console.log(video);
	var vi = setInterval(function(){
		if(!video || video.paused && !video.ended){
			video = $("#videoPlayer video").get(0);
			Play(video);
		}else if(video.ended || video.error){
			leftBox.get(++vBegin).click();
			video = $("#videoPlayer video").get(0);
			Play(video);		
		}else{
			console.log("没有到终点");
		}
	},1000);
}
//主函数执行
main();

//var video = $("#videoPlayer video");
//var vi = setInterval(function(){
//	console.log(video);
//},500);
//if(!leftBox){
//		var leftBox;	
//	}
//let leftBox = $("#point_undefined,.point-item-box");
//leftBox.bind("click",function(){
//    console.log($(this));
//});