// This is the heading behavior.
$(document).ready(function(){
  $(".designphoto").click(function(){
    $(".designphoto").slideDown().hide();
    $(".designinfo").show();
  });
  $(".designinfo").click(function(){
    $(".designinfo").slideUp();
    $(".designphoto").slideDown();
  });
});

$(document).ready(function(){
  $(".devphoto").click(function(){
    $(".devphoto").slideDown().hide();
    $(".devinfo").show();
  });
  $(".devinfo").click(function(){
    $(".devinfo").slideUp();
    $(".devphoto").slideDown();
  });
});

$(document).ready(function(){
  $(".productphoto").click(function(){
    $(".productphoto").slideDown().hide();
    $(".productinfo").show();
  });
  $(".productinfo").click(function(){
    $(".productinfo").slideUp();
    $(".productphoto").slideDown();
  });
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

// This is the portfolio behavior.
$(document).ready(function(){
  $("#item1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});

$(document).ready(function(){
  $("#item2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});

$(document).ready(function(){
  $("#item3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});

$(document).ready(function(){
  $("#item4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#item5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#item6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#item7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#item8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});

// This is the form section.
function myFunction() {
  alert("We have received your message. Thank you for contacting us.");
}
