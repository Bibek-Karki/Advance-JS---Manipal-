function validateform(){
    var name = document.userRegistrationForm.name.value;
    var password = document.userRegistrationForm.password.value;
    var age = document.userRegistrationForm.age.value;
    var email = document.userRegistrationForm.email.value;

    if (name == null || name == ""){
        alert("Name cannot be blank");
        return false;
    }

    if (age == "" || isNaN(age)){
        alert("Enter a Numeric value for the age");
        return false;
    }

    if (password == "" || password.length<6){
        alert("Password must be specified and at least 6 character long.");
        return false;
    }

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
        alert("Please enter a valid email address");
        return false;
    }
}