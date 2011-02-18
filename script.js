window.onload = init;

function well(){
	var obj = new Object( );
	obj.blur = function(){return false;}
	obj.moveTo = function(){return false;}
	obj.resizeTo = function(){return false;}
	obj.location = "";
	return obj;
}
function sleep(str){
}
if (window.location.host == "" || window.location.host == "localhost"){
	document.write = sleep;
}window.open = well;


function init(){
    var _h4  = new Array();

    _h4 = document.getElementsByTagName("h4");

    for (var x = 0; x < _h4.length; x++){
        _h4[x].onclick = hide_div_by_event;
    }
    for (var x = 1; x < _h4.length; x++){
    	hide_div_by_header(_h4[x]);
    }
}

function hide_div(obj2hide){
    if (obj2hide.nodeType == 3){
        // not text node
        obj2hide = obj2hide.nextSibling;
    }

    if (obj2hide.style.display == ""){
    // first click action
        obj2hide.style.display = "none";
    }
    else if (obj2hide.style.display == "none"){
        obj2hide.style.display = "block";
    }
    else {
        obj2hide.style.display = "none";
    }
}

function hide_div_by_header(header){
	obj2hide = header.nextSibling;
	hide_div(obj2hide);
}

function hide_div_by_event(e){
    var obj2hide = null;
    var targ;

    // event access
    if (!e){
        // e for W3C/FireFox, window.event for IE
        e = window.event;
    }

    // retrieve target
    if (e.target){
        targ = e.target;
    }
    else if (e.srcElement){
        targ = e.srcElement;
    }

    // fix for Safari
    if (targ.nodeType == 3){
        targ = targ.parentNode;
    }

    // now, retrieve the next sibling tag p
    obj2hide = targ.nextSibling;
    
    hide_div(obj2hide);
}
