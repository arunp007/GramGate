function validation(){
    var status = 1
    var fullname = document.getElementById('fullname')
    var username = document.getElementById('username')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var phone = document.getElementById('phone')
    var gender = document.getElementById('gender')
    var pic = document.getElementById('pic')
    var bio = document.getElementById('bio')
    var website = document.getElementById('website')
    var category = document.getElementById('category')

    if(fullname.value == ""){
        document.getElementById('fullname').style.borderColor="red"
        document.getElementById('fullname_error').innerHTML="** Please Enter Your Fullname **"
        document.getElementById('fullname_error').style.color="red"
        document.getElementById('fullname_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('fullname').style.borderColor="black"
        document.getElementById('fullname_error').style.display="block"
        var status = 1
    }

    if(username.value == ""){
        document.getElementById('username').style.borderColor="red"
        document.getElementById('username_error').innerHTML="** Please Enter Your Username **"
        document.getElementById('username_error').style.color="red"
        document.getElementById('username_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('username').style.borderColor="black"
        document.getElementById('username_error').style.display="block"
        var status = 1
    }

    if(email.value == ""){
        document.getElementById('email').style.borderColor="red"
        document.getElementById('email_error').innerHTML="** Please Enter Your Email Id **"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('email').style.borderColor="black"
        document.getElementById('email_error').style.display="block"
        var status = 1
    }

    if(password.value == ""){
        document.getElementById('password').style.borderColor="red"
        document.getElementById('password_error').innerHTML="** Please Enter Your Password **"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('password').style.borderColor="black"
        document.getElementById('password_error').style.display="block"
        var status = 1
    }

    if(phone.value == ""){
        document.getElementById('phone').style.borderColor="red"
        document.getElementById('phone_error').innerHTML="** Please Enter Your Phone Number **"
        document.getElementById('phone_error').style.color="red"
        document.getElementById('phone_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('phone').style.borderColor="black"
        document.getElementById('phone_error').style.display="block"
        var status = 1
    }

    if(gender.value == ""){
        document.getElementById('gender').style.borderColor="red"
        document.getElementById('gender_error').innerHTML="** Please Enter Your Gender **"
        document.getElementById('gender_error').style.color="red"
        document.getElementById('gender_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('gender').style.borderColor="black"
        document.getElementById('gender_error').style.display="block"
        var status = 1
    }

    if(pic.value == ""){
        document.getElementById('pic').style.borderColor="red"
        document.getElementById('pic_error').innerHTML="** Please Enter Your Profile Picture **"
        document.getElementById('pic_error').style.color="red"
        document.getElementById('pic_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('pic').style.borderColor="black"
        document.getElementById('pic_error').style.display="block"
        var status = 1
    }

    if(bio.value == ""){
        document.getElementById('bio').style.borderColor="red"
        document.getElementById('bio_error').innerHTML="** Please Enter Your Bio **"
        document.getElementById('bio_error').style.color="red"
        document.getElementById('bio_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('bio').style.borderColor="black"
        document.getElementById('bio_error').style.display="block"
        var status = 1
    }

    if(website.value == ""){
        document.getElementById('website').style.borderColor="red"
        document.getElementById('website_error').innerHTML="** Please Enter Your Website **"
        document.getElementById('website_error').style.color="red"
        document.getElementById('website_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('website').style.borderColor="black"
        document.getElementById('website_error').style.display="block"
        var status = 1
    }

    if(category.value == ""){
        document.getElementById('category').style.borderColor="red"
        document.getElementById('category_error').innerHTML="** Please Enter Your Category **"
        document.getElementById('category_error').style.color="red"
        document.getElementById('category_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('category').style.borderColor="black"
        document.getElementById('category_error').style.display="block"
        var status = 1
    }


    if(status == 0){
        return false;
    }

    if(status == 1){
        return true;
    }
}

function uservalid(){
    var uname = document.getElementById('username').value

    if(uname.length <= 5){
        document.getElementById('username_error').innerHTML="Username must be like this name1234"
        document.getElementById('username_error').style.color="green"
    }

}

function emailvalid(){
    var email = document.getElementById('email').value

    if(email.length <= 5){
        document.getElementById('email_error').innerHTML="Email id must have @gmail.com"
        document.getElementById('email_error').style.color="green" 
    }
}

function passwordvalid(){
    var pass = document.getElementById('password').value

    if(pass.length <= 5){
        document.getElementById('password_error').innerHTML="Password must have 8 character"
        document.getElementById('password_error').style.color="red"  
    }

    if(pass.length == 8){
        document.getElementById('password_error').innerHTML="You entered a perfect password!"
        document.getElementById('password_error').style.color="green"    
    }

    if(pass.length > 8){
        document.getElementById('password_error').innerHTML="Please enter valid password"
        document.getElementById('password_error').style.color="red"    
    }
}

function phonevalid(){
    var phone = document.getElementById('phone').value

    if(phone.length < 10){
        document.getElementById('phone_error').innerHTML="Phone number must have 10 digits"
        document.getElementById('phone_error').style.color="red" 
    }

    if(phone.length == 10){
        document.getElementById('phone_error').innerHTML="You entered a perfect phone number!"
        document.getElementById('phone_error').style.color="green" 
    }

    if(phone.length > 10){
        document.getElementById('phone_error').innerHTML="Phone number must have 10 digits"
        document.getElementById('phone_error').style.color="red" 
    }
}
