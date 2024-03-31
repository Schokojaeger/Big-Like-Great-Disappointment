// creates an object with passing the selector from the form >> signup
const validation = new JustValidate("#signup");

// validation rules for each field 
validation
    .addField("#name", [
        {
            rule: "required" // name needed
        }
    ])
    .addField("#email", [
        {
            rule: "required" // email needed
        },
        {
            rule: "email" //valid email 
        },
        {
            validator: (value) => () => {
                return fetch("validate-email.php?email=" + encodeURIComponent(value))
                       .then(function(response) {
                           return response.json(); // returns it as a js object
                       })
                       .then(function(json) {
                           return json.available;
                       });
            },
            errorMessage: "email already taken"
        }
    ])
    .addField("#password", [
        {
            rule: "required"
        },
        {
            rule: "password" // at least 8 characters, at least one letter and one number
        }
    ])
    .addField("#password_confirmation", [
        {
            validator: (value, fields) => {
                return value === fields["#password"].elem.value;
            },
            errorMessage: "Passwords should match"
        }
    ])
    .onSuccess((event) => { // callback function, so you can register
        document.getElementById("signup").submit();
    });
    
   