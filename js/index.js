function navigate(){
    $(".nav-link").click(function(){
    const link = "./"+$(this).data("link")+".html";
    if(link){
    axios.get(link)
    .then(function (response) {
        // handle success  
        $("body").html(response.data);
    })
    }
    })
}

navigate();