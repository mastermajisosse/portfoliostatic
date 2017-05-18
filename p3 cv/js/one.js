
$(document).ready(function(){
    $("a").hover(function(){
        $(".bot").css("background-color","white");
    });
    $("a").mouseout(function(){
        $(".bot").css("background-color","#0d141c");
    });
    $("#D").click(function () {
      $("#banner-wrap").css("background-image","url('../img/maxresdefault.jpg')");
      $("#byeed").css("text-shadow","4px 4px 0px #000");
    });
    $("#E").click(function () {
      $("li").css("float","left");
      $("#smya").css("float","right");
    });
    $("#ana").hover(function () {
        this.src = '../img/CStuu4-WUAAVHV-.png';
    }, function () {
        this.src = '../img/Smiley-Face-Background-960x800.jpg';
    });
    $("#sweet").click(function () {
      swal("mon nom d'utilisateur :!", "You clicked the button!", "success");
    });
});
