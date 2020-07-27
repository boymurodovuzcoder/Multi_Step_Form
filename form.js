$(document).ready(function() {

    //step one
    $("#StepOneNext").click(function(e) {
        e.preventDefault();

        var firstNameValidation = false;
        var lastNameValidation = false;
        var emailValidation = false;

        var checkLastName = /^[a-zA-Z ]+$/;
        var checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var checkFirstName = /^[a-zA-Z ]+$/;

        //validation First Name
        if ($("#first_name").val() === ''){
            $("#first_name_error").html("This field can not be empty!");
            $("#first_name_error").css("display", "block");
        } else {
            $("#first_name_error").css("display", "none");

            if (!checkFirstName.test($("#first_name").val())) {
                $("#first_name_error").html("Please enter a valid name");
                $("#first_name_error").css("display", "block");
            } else {
                $("#first_name_error").css("display", "none");
            };

        };
        
        if (($("#first_name").val()) && (checkFirstName.test($("#first_name").val()))) {
            firstNameValidation = true;
            console.log(firstNameValidation + "first name");
        

        //validation Email
        if ($("#email").val() === ''){
            $("#email_error").html("This field can not be empty!");
            $("#email_error").css("display", "block");
        } else {
            $("#email_error").css("display", "none");

            
            if (!checkEmail.test($("#email").val())) {
                $("#email_error").html("Please enter a valid email");
                $("#email_error").css("display", "block");
            } else {
                $("#email_error").css("display", "none");
            };

        };

        if (($("#email").val()) && (checkEmail.test($("#email").val()))) {
            emailValidation = true;
            console.log(emailValidation + "email");
        }

        //validation Last Name
        if ($("#last_name").val()) {
            
            if (!checkLastName.test($("#last_name").val())) {
                $("#last_name_error").css("display", "block");
            } else {
                $("#last_name_error").css("display", "none");
            };
        } else {
            $("#last_name_error").css("display", "none");
            lastNameValidation = true;
        };
        
        if ($("#last_name").val()) {
            if (checkLastName.test($("#last_name").val())) {
                lastNameValidation = true;
                console.log(lastNameValidation + "last name");
            }
        }
        if ((firstNameValidation) && (lastNameValidation) && (emailValidation)) {
            $("#StepOneContainer").css("display", "none");
            $("#StepTwoContainer").css("display", "block");
        }
        
    });

    //back to step one
    $("#StepTwoPrevious").click(function(e) {
        e.preventDefault();

        $("#StepTwoContainer").css("display", "none");
        $("#StepOneContainer").css("display", "block");
    });

    //step two
    $("#StepTwoNext").click(function(e) {
        e.preventDefault();

        var ContactValidation = false;
        var CityValidation = false;
        var CountryValidation = false;

        var checkContact = /^\+?[\d]{9,13}$/
        var checkCity = /^[a-zA-Z ]+$/;
        var checkCountry = /^[a-zA-Z ]+$/;

        //validation Contact
        if ($("#contact").val() === ''){
            $("#contact_error").html("This field can not be empty!");
            $("#contact_error").css("display", "block");
        } else {
            $("#contact_error").css("display", "none");

            
            if (!checkContact.test($("#contact").val())) {
                $("#contact_error").html("Please enter a valid contact");
                $("#contact_error").css("display", "block");
            } else {
                $("#contact_error").css("display", "none");
            };

        };
        
        if (($("#contact").val()) && (checkContact.test($("#contact").val()))) {
            ContactValidation = true;
            console.log(ContactValidation + "contact");
        }

        //validation City
        if ($("#city").val()){
            if (!checkCity.test($("#city").val())) {
                $("#city_error").css("display", "block");
            } else {
                $("#city_error").css("display", "none");
            };
        } else {
            $("#city_error").css("display", "none");
            CityValidation = true;

        };

        if ($("#city").val()) {
            if (checkCity.test($("#city").val())) {
                CityValidation = true;
                console.log(CityValidation + "City");
            }
        }

        //validation Country
        if ($("#country").val() === ''){
            $("#country_error").html("This field can not be empty!");
            $("#country_error").css("display", "block");
        } else {
            $("#country_error").css("display", "none");

            
            if (!checkCountry.test($("#country").val())) {
                $("#country_error").html("Please enter a valid Country");
                $("#country_error").css("display", "block");
            } else {
                $("#country_error").css("display", "none");
            };

        };
        
        if (($("#country").val()) && (checkCountry.test($("#country").val()))) {
            CountryValidation = true;
            console.log(CountryValidation + "country");
        }

        if ((ContactValidation) && (CityValidation) && (CountryValidation)) {
            $("#StepTwoContainer").css("display", "none");
            $("#StepThreeContainer").css("display", "block");

        }
        
    });

    //back to step two
    $("#StepThreePrevious").click(function(e) {
        e.preventDefault();

        $("#StepThreeContainer").css("display", "none");
        $("#StepTwoContainer").css("display", "block");
    });

    //step three
    $("#StepThreeSubmit").click(function(e) {
        e.preventDefault();

        var selectValidation = false;
        var messageValidation = false;
        
        if (!$("#select_program").val()) {
            $("#select_program_error").css("display", "block");
        } else {
            $("#select_program_error").css("display", "none");
        };
        if ($("#select_program").val()) {
            selectValidation = true;
            console.log(selectValidation + "select")
        }

        if (!$("#message").val()) {
            $("#message_error").css("display", "block");
        } else {
            $("#message_error").css("display", "none");
        };
        if ($("#message").val()) {
            messageValidation = true;
            console.log(messageValidation + "message")
        }

        if ((selectValidation) && (messageValidation)) {
            $("#MultiStepForm").css("display", "none");
            $("#SuccessContainer").css("display", "flex");
            
        }

    });



});