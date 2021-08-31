function formValidation()
{
    var name1 = document.registration.name1;
    var uid = document.registration.uid;
    var phno = document.registration.phno;
    var email = document.registration.email;
    var course1 = document.registration.course;
    if(nameValidation(name1,2,20))
    {
    if(unionidValidation(uid))
    {
    if(phnoValidation(phno))
    {
    if(ValidateEmail(email))
    { 
    if(courseValidation(course1))
    {
        alert("Thanks for registering with us!");
    } 
    }
    }
    }
    }
    return false;   
}

function nameValidation(name1,mx,my){
    var name_len = name1.value.length;
if (name_len == 0 || name_len >= my || name_len < mx)
{
alert("Length should be between "+mx+" to "+my);
name1.focus();
return false;
}
return true;
}

function unionidValidation(uid){
    var uid_len = uid.value.length;
if (uid_len == 4)
{
alert("Length should be 4 digits (4+4)");
uid.focus();
return false;
}
return true;
}

function phnoValidation(){
    var phno_len = phno.value.length;
    if (phno_len != 10)
    {
    alert("Length should be 10 digits (4+4)");
    uid.focus();
    return false;
    }
    return true;
}

function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}

function courseValidation(course1)
{
if(course1.value == "Select")
{
alert('Select the course you want from the list');
course1.focus();
return false;
}
else
{
return true;
}
}

function resetfn()
{
    document.getElementById("registration").reset();
}

function submitFn() {
    alert("Thank you for signing up!");
  }