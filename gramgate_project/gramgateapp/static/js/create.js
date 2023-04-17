function validation(){
    var status = 1
    var img = document.getElementById('image')
    var description = document.getElementById('description')

    if(img.value == ""){
        document.getElementById('image').style.borderColor="red"
        document.getElementById('image_error').innerHTML="** Please Upload Your Image **"
        document.getElementById('image_error').style.color="red"
        document.getElementById('image_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('image').style.borderColor="black"
        document.getElementById('image_error').style.display="none"
        var status = 1
    }

    if(description.value == ""){
        document.getElementById('description').style.borderColor="red"
        document.getElementById('description_error').innerHTML="** Please Enter Your Description **"
        document.getElementById('description_error').style.color="red"
        document.getElementById('description_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('description').style.borderColor="black"
        document.getElementById('description_error').style.display="none"
        var status = 1
    }

    if(status == 0){
        return false;
    }

    if(status == 1){
        return true;
    }
}