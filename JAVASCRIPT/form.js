function validateForm() {
    var a = document.forms["contactForm"]["name"].value;
    var b = document.forms["contactForm"]["email"].value;
    var c = document.forms["contactForm"]["subject"].value;
    var d = document.forms["contactForm"]["message"].value;
    if (a=="" && b=="" && c=="" && d=="") {
      alert("Fill the form");
    }else if (a=="" && b=="" && c=="") {
      alert("You missed name, email address and subject");
    }else if (a=="" && b=="" && d=="") {
      alert("You missed name, email address and message");
    }else if (b=="" && c=="" && d=="") {
      alert("You missed email address, subject and message");
    }else if (a=="" && b== "") {
      alert("You missed name and email address");
    }else if (a=="" && c=="") {
      alert("You missed name and subject");
    }else if (a=="" && d=="") {
      alert("You missed name and message");
    }else if (b=="" && c=="") {
      alert("You missed email address and subject");
    }else if (b=="" && d=="") {
      alert("You missed email address and message");
    }else if (c == "" && d=="") {
      alert("You missed subject and message");
    }else if (a=="") {
      alert("You missed name");
    }else if (b=="") {
      alert("You missed email address");
    }else if (c=="") {
      alert("You missed subject");
    }else if (d=="") {
      alert("You missed message");
    }else {
      alert("Thanks for contacting us. You will soon receive our email.");
    }
}  