function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var guest = document.getElementById("guest").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(guest>8)
  {
    text = "More than 8 Guests Not Allowed";
    error_message.innerHTML = text;
    return false;
  }
  alert("Your Seat Has Been Successfully Booked: ");
  return true;
}

