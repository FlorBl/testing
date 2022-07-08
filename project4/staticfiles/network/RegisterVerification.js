// Verify Username, email, password
// IDs
// Usename:            #username
// Email:              #email
// Password:           #password
// Password confirm:   #confirmpassword
// Image:              #file-upload
// Submit Button:      #registerBtn

var username = document.getElementById('username').value;
var email = document.getElementById('email').value;

var picture = document.getElementById('file-upload').value;


// Function that check if passwords match
function checkPasswordMatch() {

var password = document.getElementById('password').value;
var confirmpassword = document.getElementById('confirmpassword').value;
    if (password != confirmpassword){
        $("#divCheckPasswordMatch").html("Passwords do not match!");
        $("#divCheckPasswordMatch").css('color', 'red');
        $('#registerBtn').attr('disabled',true);
        console.log(password);

    }
    else
    {
        $("#divCheckPasswordMatch").html("Passwords match.");
         $("#divCheckPasswordMatch").css('color', 'green');
        $('#registerBtn').attr('disabled',false);
        console.log(confirmpassword);


    }
    
    if(password == '' || confirmation == ''){
         $("#divCheckPasswordMatch").html("")
    }

}




// Function that checks if username exists

function checkUsername(){

    var userCheck = document.getElementById('username');
    var username = '';



    userCheck.addEventListener('keyup', function(){
        username = userCheck.value;
        console.log(username);

        if(ALL_USERNAMES.includes(username)){
            $("#divSearchUsername").html("Username already exists!");
            $("#divSearchUsername").css('color', 'red');
            $('#button').attr('disabled',true);     
            }
        else {
            $("#divSearchUsername").html(""+username+" is available!");
            $("#divSearchUsername").css('color', 'green');
            $('#button').attr('disabled',false);
        }
        if($('#username').val() == ''){
            $('#divSearchUsername').html('');

        }

})
}


// Verify if the email entered is already used
function checkEmail(){

    var emailCheck = document.getElementById('email');
    var email = '';



    emailCheck.addEventListener('keyup', function(){
        email = emailCheck.value;
        console.log(email);

        if(EMAILS.includes(email)){
            $("#checkThisEmail").html("Email already exists!");
            $("#checkThisEmail").css('color', 'red');
            $('#button').attr('disabled',true);     
            }
        else {
            $("#checkThisEmail").html(""+email+" is available!");
            $("#checkThisEmail").css('color', 'green');
            $('#button').attr('disabled',false);
        }
        if($('#email').val() == ''){
            $('#checkThisEmail').html('');
        }
        $('#email').keydown(function(){
            check_Email();
        })

})
}





function check_Email() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    $("#checkThisEmail").html("Please provide a valid email address");
    email.focus;
    return false;
 }
 else{
     checkEmail();
 }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return alert(re.test(String(email).toLowerCase()));
    
}