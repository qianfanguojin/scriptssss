// ==UserScript==
// @name         测试脚本1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://stu.ityxb.com/preview/detail/*
// @icon         https://www.google.com/s2/favicons?domain=ityxb.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var vBegin = 0;//视频开始序号，第一个视频为0

    function Play(videoTemp){
        setTimeout(function(){
            videoTemp.play();
            videoTemp.playbackRate = 2.5;
            videoTemp.volume = 0;
            // console.log(videoTemp);
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
        // console.log(leftBox);
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


})();