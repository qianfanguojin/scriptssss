$("#iframe").contents().find(".ans-attach-online.ans-insertvideo-online").contents().find("#video").val();



let video = $("#iframe").contents().find(".ans-attach-online.ans-insertvideo-online").contents().find("#video_html5_api").get(0);
alert(video.playbackRate);
let frames = $("#iframe").contents().find(".ans-attach-online.ans-insertvideo-online");
for(let frame of frames){
	let video = frame.contents().find("#video_html5_api").get(0);
	video.play();
	video.playbackRate = 2;
	break;
}
console.log("aaa");

let videos = $("#iframe").contents().find(".ans-attach-online.ans-insertvideo-online").contents().find("#video_html5_api");
let arr = [];
for(let i in frames){
    //let video = frames.each(function(){
      //  arr.push($(this));
//})
    videos[i].play();
	videos[i].playbackRate = 2; 
	
}
console.log(frames);
console.log(arr);



let frames = $("#iframe").contents().find(".ans-attach-online.ans-insertvideo-online").contents().find("#video_html5_api");
console.log(frames.get(0));

    //let video = frames.each(function(){
      //  arr.push($(this));
//})
/*	var i = 0;
	var video;
		let time;
		video.play();
		video.oncanplay = function () {
			time = video.duration); 
		}*/
		var i = 0;
		
		let video = frames.get(i);
		var time = Play(video);
		setInterval(function(){
			if(video.ended){
				
				if((let v = frames.get(i))){
					Play(v);
				}else{
					$(".orientationright ").click();
				}
			}
		},1000)
	}
	
    console.log(frames[i]);
	frames[i].play();
	frames[i].oncanplay = function () {
		alert(frames[i].duration); 
	}
    var tim    
    break;

console.log(frames);
console.log(arr);



/**
	最终版本
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
if(!frames){
	var frames;
}
frames = $("#iframe").contents().find(".ans-attach-online.ans-insertvideo-online").contents().find("#video_html5_api");

if(frames.get(0)){
	var i = 0;	
	let video = frames.get(i);
	console.log(video);
	var time = Play(video);
	var inn = setInterval(function(){
		if(video.ended){
			if((video = frames.get(++i))){
				Play(video);
			}else{
				clearInterval(inn);
				$(".orientationright ").click();
			}
		}
		
		console.log("跳过");
	},1000);
}else{
	$(".orientationright ").click();
}  