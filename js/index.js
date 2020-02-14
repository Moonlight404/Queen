function navigate(){
    $(".nav-link").click(function(){
    const link = "./"+$(this).data("link")+".html";
    const name = $(this).data("link");
    const title = $(this).html();
    if(link){
    axios.get(link)
    .then(function (response) {
        // handle success  
        $("body").html(response.data);
        const stateObj = { foo: "bar" };
        history.pushState(stateObj, "Queen - " + name, link);
        document.title= "Queen - "+ title;
    })
    }
    })
}

function imageZoom(){
    $(".sair").click(function(){
        $("img").removeClass("zoom");
        $(".sair").css("background", "transparent")
        $(".sair").css("cursor", "default")
        $(".sair").css("z-index", "400");
    })
    $(".col-md-4 img").click(function(){
        $("img").removeClass("zoom");
        $(this).addClass("zoom");
        $(".sair").css("background", "rgba(0,0,0,.70)")
        $(".sair").css("cursor", "pointer")
        $(".sair").css("z-index", "100000");
    })
}

navigate();

imageZoom();