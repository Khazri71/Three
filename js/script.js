//Jequery 
//Smooth Scrolling and remove #

$("ul li a").on("click" , function(event){
    if(this.hash !== ""){
        event.preventDefault();

        const hash = this.hash;

        $("html , body").animate({scrollTop : $(hash).offset().top + 2} , 100);
    }
}); 