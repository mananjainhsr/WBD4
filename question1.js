function formValidation()
{
var emailadd = document.registration.email;
if(ValidateEmail(emailadd))
{
}
return false;
}
function ValidateEmail(emailadd)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(emailadd.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address! The format should be abc@xyz.def");
emailadd.focus();
return false;
}
}
function submitFn() {
    alert("Thank you for signing up!");
  }

