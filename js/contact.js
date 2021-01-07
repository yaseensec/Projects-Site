function submitToAPI(e) {
  e.preventDefault();
  var URL =
    "https://rz9a5nh6v8.execute-api.us-east-1.amazonaws.com/projectsemail/projectsses";

  var name = document.getElementById("name-input").value;
  var email = document.getElementById("email-input").value;
  var subject = document.getElementById("subject-input").value;
  var message = document.getElementById("message-input").value;
  if (name == "" || email == "" || message == "") {
    alert("Please Fill All Required Field");
    return false;
  }

  emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRE.test(email)) {
    alert("Email Address entered, is not valid");
    return false;
  }
  var data = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open(
    "POST",
    "https://rz9a5nh6v8.execute-api.us-east-1.amazonaws.com/projectsemail/projectsses"
  );
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(data));
  xmlhttp.onreadystatechange = function () {
    document.getElementById("contact-form").reset();
    if (xmlhttp.readyState === 4) {
      var response = JSON.parse(xmlhttp.responseText);
      if (xmlhttp.status === 200) {
        console.log("successful");
        document.getElementById("contact-form").innerHTML =
          "<h1>Sent Successfully</h1>";
      } else {
        console.log("failed");
      }
    }
  };
}
