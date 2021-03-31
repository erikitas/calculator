// This is a JavaScript file
var textoDisplay = "";
var n1 = 0;
var n2 = 0;
var puts = "";

$(document).on("click",".but", function(){
  textoDisplay += $(this).val();
  $(".display").val(textoDisplay);
});

function ce(){
  display = "";
  $(".display").val(0);
}
$(document).on("click","ce", function(){
  CE();
});


$(document).on("click",".puts", function(){
  n1 = display; 
  puts = $(this).val();
  CE();
});

$(document).on("click","igual", function(){
  n2 = display;
  var resultado = 0;
  if(puts == "+"){
    resultado = parseFloat(n1)+parseFloat(n2);
    $(".display").val(resultado);
  }
  //outras operações
  
)};
