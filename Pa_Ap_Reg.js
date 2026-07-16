let passwordAttempts = 0;

document.getElementById("appointmentForm").addEventListener("submit", function(event){

    event.preventDefault();

    
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("serviceError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";
    document.getElementById("descriptionError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    let valid = true;

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let department = document.getElementById("department").value;
    let description = document.getElementById("description").value.trim();

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    
    if(firstName==""){
        document.getElementById("firstNameError").innerHTML="First name is required";
        valid=false;
    }
    else if(!namePattern.test(firstName)){
        document.getElementById("firstNameError").innerHTML="Only alphabets allowed";
        valid=false;
    }

    
    if(lastName==""){
        document.getElementById("lastNameError").innerHTML="Last name is required";
        valid=false;
    }
    else if(!namePattern.test(lastName)){
        document.getElementById("lastNameError").innerHTML="Only alphabets allowed";
        valid=false;
    }

    // Email
    if(email==""){
        document.getElementById("emailError").innerHTML="Email is required";
        valid=false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerHTML="Invalid email";
        valid=false;
    }

    // Password
    if(password=="" || confirmPassword==""){
        document.getElementById("passwordError").innerHTML="Enter both passwords";
        valid=false;
    }
    else if(password!==confirmPassword){

        passwordAttempts++;

        if(passwordAttempts>=3){
            document.getElementById("passwordError").innerHTML="Maximum 3 attempts reached.";
            document.getElementById("password").disabled=true;
            document.getElementById("confirmPassword").disabled=true;
        }
        else{
            document.getElementById("passwordError").innerHTML="Passwords do not match. Attempts left: " + (3-passwordAttempts);
        }

        valid=false;
    }

    
    let gender = document.querySelector('input[name="gender"]:checked');

    if(gender==null){
        document.getElementById("genderError").innerHTML="Select gender";
        valid=false;
    }

    
    let services = document.querySelectorAll('input[name="service"]:checked');

    if(services.length==0){
        document.getElementById("serviceError").innerHTML="Select at least one service";
        valid=false;
    }

    
    if(department==""){
        document.getElementById("departmentError").innerHTML="Select a department";
        valid=false;
    }

   
    if(description.length<20){
        document.getElementById("descriptionError").innerHTML="Minimum 20 characters required";
        valid=false;
    }

    
    if(valid){
        document.getElementById("successMessage").innerHTML="Appointment Registration Completed Successfully!";
    }

});