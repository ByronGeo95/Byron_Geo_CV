//Level 2 - Task 6 - Online Portfolio
//Created by: Byron Geo
//Created on: 02/04/2020
//Description: Some JQuery to animate an arrow.

$("#moreBtn").mouseover(function() {

    $("#arrow").css("transform", "rotate(90deg)");
});

$("#moreBtn").mouseout(function() {

    $("#arrow").css("transform", "rotate(360deg)");
});
