var myVideo = document.getElementById("videoGrato"); 

function playPause() { 
  if (myVideo.paused) 
	myVideo.play(); 
  else 
	myVideo.pause(); 
} 

$(document).ready(function(){
  apagaConteudo();
  selecionaMenu('home');
  $(".itemMenu").click(function(){
	$(".itemMenu").children("a").removeClass("active");
	$(this).children("a").addClass("active");
	  //Recolhendo menu apenas para celulares.
	  console.log(screen.width);
	  if(screen.width <= 480){
		  recolheMenu();
	  }
	 
  });
  
});

function selecionaMenu(id){
	apagaConteudo();
	$("#"+id).show();
}
  
function apagaConteudo(){
	$("#home").hide();
	$("#quemSomos").hide();
	$("#nossaHistoria").hide();
	$("#acoes").hide();
	$("#passeios").hide();
	$("#eventos").hide();
	$("#torneseIntegrante").hide();
	$("#facaobem").hide();
	$("#visitenos").hide();
	$("#hino").hide();
	
}

function recolheMenu(){
	$("body").removeClass( "sidebar-open");
	$("body").addClass( "sidebar-closed sidebar-collapse");
}