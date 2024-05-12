$(document).ready(function() {
    //alert("ready");

    var fullfilepath = location.href.replace(/\/[^/]+$/, "/")
    var hostnamepath = location.protocol + "//" + location.host
    //alert(fullfilepath)
    //alert(hostnamepath)
    if(/^https?:/.test(location.protocol)) {
        $("img").each(function() {
            var imgsrc = $(this).attr("src").replace(/^\.\/([^/])/, "$1");
            if(!/^https?:\/\//.test(imgsrc)) {
                if(imgsrc[0] == "/") {
                    $(this).attr("src", hostnamepath + imgsrc)
                } else {
                    $(this).attr("src", fullfilepath + imgsrc)
                }
            }
        })
        $("a[href]").each(function() {
            var strlink = $(this).attr("href").replace(/^\.\/([^/])/, "$1");
            if(!/^https?:\/\//.test(strlink)) {
                if(strlink[0] == "/") {
                    $(this).attr("href", hostnamepath + strlink)
                } else {
                    $(this).attr("href", fullfilepath + strlink)
                }
            }
        })
    }

    $("script").remove();
})