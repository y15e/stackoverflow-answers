function validateChild(dateOfBirthField) {
    var validated = {};
    var dateOfBirthValue = $(dateOfBirthField).val();
  
    console.log('Check DoB' + dateOfBirthValue);
    if(validateDateOfBirth(dateOfBirthValue, dateOfBirthField)){
        console.log('True');
        validated.dateOfBirth = true;
    } else {
        validated.dateOfBirth = false;
    }
  
    validateButton(validated);
}


function validateDateOfBirth(a, b) {
  return true;
}

function validateButton(a) {
  return;
}

function validateForms() {
    $('.child-form').on('keyup', '.date_of_birth', function() {
        validateChild(this);
    });
}

$(function() {
  validateForms();
});

$(document).on('click', '.removeButton', function (event) {
    console.log('Remove button clicked');
    $('.child-form .date_of_birth').each(function() {
        validateChild(this);
    });
});
