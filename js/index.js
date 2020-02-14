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

navigate();