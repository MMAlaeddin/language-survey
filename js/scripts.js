$(document).ready(function() {
  $("#form").submit(function(event){
    var code1 = $("input:radio[name=code1]:checked").val();
    var code2 = $("input:radio[name=code2]:checked").val();
    var code3 = $("input:radio[name=code3]:checked").val();
    var code4 = $("input:radio[name=code4]:checked").val();
    var code5 = $("input:radio[name=code5]:checked").val();


    if(code1 === "design"){
      $("#java").show();
      $("#sharp").hide();
      $("#plus").hide();
    }else if(code1 === "make"){
      $("#sharp").show();
      $("#plus").hide();
      $("#java").hide();
    }else{(code1 === "game")
      $("#plus").show();
      $("#sharp").hide();
      $("#java").hide();
  }

  event.preventDefault();
  });
});