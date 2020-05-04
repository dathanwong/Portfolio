
//Change color and filter projects when a filter is selected
$(".filter").click(function(){
    if($(this).attr("on") == "true"){
        $(this).attr("on", "false");
        $(this).css("background-color", "transparent");
        $(this).css("color", "white");
        console.log("Reached true");
    }else{
        $(this).attr("on", "true");
        $(this).css("background-color", "#4AC7E5");
        $(this).css("color", "black");
        console.log("false");
    }
    
});