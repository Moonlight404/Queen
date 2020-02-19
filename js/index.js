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
var vendoImage = false
var vendoIdImage = 0
var slider = null
function slide(){
    var elems = document.body.getElementsByTagName("img"); 
    if(vendoImage){
        slider = setInterval(() => {
            if(vendoIdImage < elems.length - 2){
                vendoIdImage++
            } else{
                $("img").removeClass("zoom");
                $(".sair").css("background", "transparent")
                $(".sair").css("cursor", "default")
                $(".sair").css("z-index", "400");
                vendoImage = false
                clearInterval(slider)
            }
            $("img").removeClass("zoom");
            $("#img"+vendoIdImage).addClass("zoom");
            $(".sair").css("background", "rgba(0,0,0,.70)")
            $(".sair").css("cursor", "pointer")
            $(".sair").css("z-index", "100000");
        }, 1500);
    }
}

function exit(){
    $( "body" ).keydown(function(key) {
      const keyEscape = [27, 17]
      const found = keyEscape.find(e => e === key.which)
      if(found){
        $("img").removeClass("zoom");
        $(".sair").css("background", "transparent")
        $(".sair").css("cursor", "default")
        $(".sair").css("z-index", "400");
        vendoImage = false
        vendoIdImage = 0
        clearInterval(slider)
      }
    });
}

function imageZoom(){
    $(".sair").click(function(){
        $("img").removeClass("zoom");
        $(".sair").css("background", "transparent")
        $(".sair").css("cursor", "default")
        $(".sair").css("z-index", "400");
        vendoImage = false
        clearInterval(slider)
    })
    $(".col-md-4 img").click(function(){
        $("img").removeClass("zoom");
        $(this).addClass("zoom");
        $(".sair").css("background", "rgba(0,0,0,.70)")
        $(".sair").css("cursor", "pointer")
        $(".sair").css("z-index", "100000");
        vendoIdImage = $(this).data("id");
        vendoImage = true
        clearInterval(slider)
        slide();
    })
}

function playMusic(){
    $(".music li").click(function(){
    $(".music li").removeClass("active");
    $(this).addClass("active");
    var audio = document.getElementById('myAudio');
    audio.src = "https://github.com/Hurricane404/itunes_audio/raw/master/audio/"+$(this).html()+".mp3";
    audio.load();//call this to just preload the audio without playing
    audio.play();
    $(".tocando").html($(this).html())
    })
}

navigate();
playMusic();
imageZoom();
exit();