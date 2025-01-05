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

    if (window.matchMedia("(max-width: 767px)").matches) {
        // The viewport is less than 768 pixels wide 
        $("[data-fancybox='youtube']").removeAttr("data-fancybox");
    } else {
        // The viewport is more than 768 pixels wide 
    }
            
    
    //Fancybox Gallery
    if($.fn.fancybox) {
        $(".fancybox-gallery img").each(function() {
            var $link = $("<a />").attr({"href":$(this).attr("src"), "data-fancybox":"gallery"});
            $(this).wrap($link);
        });
        
            
        $("[data-fancybox]").fancybox({
            buttons: ['zoom', 'slideShow', 'thumbs', 'close'],    // show only close button
            arrows: true,    // show only close button
            iframe : {
                preload : false
            },
            animationEffect: "zoom",
            transitionEffect: "fade",
            loop: true
        })
    
    } 
    $("script").remove();
    
})