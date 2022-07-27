


$(document).ready(function () {
    
  $(".main-spinner").delay(3000).animate(
    {
      right: "100%",
    },
    "slow"
  );
});


setInterval(() => {
  $("div.logo_img").hide();
  this.hideSection = true;
}, 3200);

// stepper code
// For Step1

$(document).on("click", "#stepmodule1", function (e) {
   e.preventDefault();
  var data = $(this).attr("data-id");

  if (data == "backstep1" && data == "form1") {
    $("#step1").show();
    $("#step2").hide();
    formdata();
  } else {
    if (data == "Graphic Design") {
      $("#graphicItem").show();
      $("#appItem").hide();
      $("#gameItem").hide();
      $("#webItem").hide();
      $("#digitalItem").hide();
      $("#otherItem").hide();

      formdata();
    } else if (data == "App Development") {
      $("#graphicItem").hide();
      $("#appItem").show();
      $("#gameItem").hide();
      $("#webItem").hide();
      $("#digitalItem").hide();
      $("#otherItem").hide();
      formdata();
    } else if (data == "Game Development") {
      $("#graphicItem").hide();
      $("#appItem").hide();
      $("#gameItem").show();
      $("#webItem").hide();
      $("#digitalItem").hide();
      $("#otherItem").hide();
      formdata();
    } else if (data == "Web Development") {
      $("#graphicItem").hide();
      $("#appItem").hide();
      $("#gameItem").hide();
      $("#webItem").show();
      $("#digitalItem").hide();
      $("#otherItem").hide();
      formdata();
    } else if (data == "Digital Development") {
      $("#graphicItem").hide();
      $("#appItem").hide();
      $("#gameItem").hide();
      $("#webItem").hide();
      $("#digitalItem").show();
      $("#otherItem").hide();
      formdata();
    } else if (data == "others step1") {
      $("#graphicItem").hide();
      $("#appItem").hide();
      $("#gameItem").hide();
      $("#webItem").hide();
      $("#digitalItem").hide();
      $("#otherItem").show();
      formdata();
    }
    $("#stepinput1").val(data);
    $("#step1").hide();
    $("#step2").show();
  }
});

// For Form Fields Id
function formdata() {
  $("#FormField1").hide();
  $("#FormField2").hide();
  $("#FormField3").hide();
  $("#FormField4").hide();
  $("#FormField5").hide();
}

// For Step
function step() {
  $("#step1").hide();
  $("#step2").hide();
}
// For Others First
$(document).on("click", "#otherfirstbtn", function () {
  var data = $("#otherOption").val();
  $("#stepinput1").val(data);
  $("#stepinput2").val("");

  $("#step1").hide();
  $("#step2").hide();
  $("#FormField1").show();
});

// For Step2
$(document).on("click", "#stepmodule2", function (e) {
  e.preventDefault();

  var data = $(this).attr("data-id");
  if (data == "backbtn2") {
    $("#step2").hide();
    $("#FormField1").show();
    $("#FormField2").hide();
    $("#FormField3").hide();
    $("#FormField4").hide();
    $("#FormField5").hide();
  } else {
    if (data == "formfield1") {
      var res = $("#stepinput2").val();
      if (res != "") {
        $("#step1").hide();
        $("#step2").hide();
        $("#FormField1").show();
      } else {
        alert("Please select the option first");
      }
    } else {
      $("#stepinput2").val(data);
      $("#step1").hide();
      $("#step2").hide();
      $("#FormField1").show();
    }
  }
});

// For Form Step

$(document).on("click", "#FormBtn", function (e) {
  e.preventDefault();

  var data = $(this).attr("data-id");

  if (data == "form1" || data == "formback2" || data == "formFill1") {
    if (data == "formFill1" || data == "form1") {
      var res = $("#company_name").val();

      if (res == "") {
        alert("Please fill Country Name field..");
      } else {
        step();
        $("#FormField1").hide();
        $("#FormField2").show();
        $("#FormField3").hide();
        $("#FormField4").hide();
        $("#FormField5").hide();
      }
    } else {
      step();
      $("#FormField1").hide();
      $("#FormField2").show();
      $("#FormField3").hide();
      $("#FormField4").hide();
      $("#FormField5").hide();
    }
  } else if (data == "form2" || data == "formback3") {
    if (data == "formback3" || data == "form2") {
      var res = $("#business_address").val();

      if (res == "") {
        alert("Please fill street Address field..");
      } else {
        step();
        $("#FormField1").hide();
        $("#FormField2").hide();
        $("#FormField3").show();
        $("#FormField4").hide();
        $("#FormField5").hide();
      }
    } else {
      step();
      $("#FormField1").hide();
      $("#FormField2").hide();
      $("#FormField3").show();
      $("#FormField4").hide();
      $("#FormField5").hide();
    }
  } else if (data === "form3" || data == "formback4") {
    if (data == "formback4" || data === "form3") {
      var res = $("#name").val();

      if (res == "") {
        alert("Please fill Name field..");
      } else {
        step();
        $("#FormField1").hide();
        $("#FormField2").hide();
        $("#FormField3").hide();
        $("#FormField4").show();
        $("#FormField5").hide();
      }
    } else {
      step();
      $("#FormField1").hide();
      $("#FormField2").hide();
      $("#FormField3").hide();
      $("#FormField4").show();
      $("#FormField5").hide();
    }
  } else if (data == "form4" || data == "formback5") {
    if (data == "formback5" || data == "form4") {
      var res = $("#email").val();

      if (res == "") {
        alert("Please fill Email field..");
      } else {
        step();
        $("#FormField1").hide();
        $("#FormField2").hide();
        $("#FormField3").hide();
        $("#FormField4").hide();
        $("#FormField5").show();
      }
    } else {
      step();
      $("#FormField1").hide();
      $("#FormField2").hide();
      $("#FormField3").hide();
      $("#FormField4").hide();
      $("#FormField5").show();
    }
  } else if (data == "form5") {
    var business = $("#stepinput1").val();
    var industries = $("#stepinput2").val();
    var company_name = $("#company_name").val(); // Business Name
    var business_address = $("#business_address").val(); // Business Address
    var name = $("#name").val(); // Full Name
    var email = $("#email").val(); // Full Email
    var contact_number = $("#contact_number").val(); // Contact number
  }
});

// particals code start





// particals code start end
$(document).on("click", "#formSubmit", function (event) {
  event.preventDefault();

  var mainVal = {
    business: $("#stepinput1").val(),
    industries: $("#stepinput2").val(),
    company_name: $("#company_name").val(),
    business_address: $("#business_address").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    contact_number: $("#contact_number").val(),
  };

  console.log(mainVal);
  $.ajax({
    type: "POST",
    url: "https://api.webapp.world/userDetailes",
    data: mainVal,
    dataType: "json",
    encode: true,
    processData: false,
    contentType: false,
  }).done(function (data) {
    $('#formSubmit').prop('disabled', false);
    console.log(data);
    this.alertTue = true;
    this.router.navigate("/emailsend");

    setTimeout(() => {
    this.router.navigate("/");
     
    }, 2000);


  });
  event.preventDefault();
  console.log(event, "this is calling function");


});