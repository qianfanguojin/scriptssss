// ==UserScript==
// @name         测试脚本2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //从第二行开始
    var i = 2;
    var item = [];
    var saveButton;
    for(var j = 0 ; j < 13 ; j++){
    
    item[j] = document.getElementById("DataGrid1__ctl" + i + "_JS1"); 
  
    if(j == 12) {
        item[j].options[2].selected = true;
		saveButton = document.getElementById("Button1"); 
		saveButton.click();
        break;
    }
    
    for(var z = 0;z< item[j].options.length;z++){
        
            item[j].options[1].selected = true;
        
    }
   
    i++;
}



})();
