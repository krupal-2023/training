
function onSubmit (event) {
    event.preventDefault();
    let selectedGender;
    
    let nameElement = document.myForm.name;
    let commentsElement = document.myForm.comments;

    let genders = document.getElementsByName("gender");

    if(nameElement.value.trim() === "") {
        alert("Please Enter name");
        nameElement.focus();
        return;
    }

    if(commentsElement.value.trim() === "") {
        alert("Please Enter Comments");
        commentsElement.focus();
        return;
    }

    for (let index = 0; index < genders.length; index++) {
        const gender = genders[index];
        if(!gender.checked) {
            alert('Please select your gender');
            return;
        } else {
            selectedGender = gender;
            break;
        }
    }

    console.log("Name: "+nameElement.value.trim())
    console.log("Comments: "+commentsElement.value.trim())
    console.log("Gender: "+selectedGender.value.trim())
    return
}