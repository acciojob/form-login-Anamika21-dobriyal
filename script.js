// function getFormvalue() {
//     //Write your code here

// }
function getFormvalue(event) {
	event.preventDefault();
    // Get the first name value
    // let firstName = document.getElementById('fname').value;
    
    // // Get the last name value
    // let lastName = document.getElementById('lname').value;
	let firstName = document.getElementsByName('fname')[0].value;
    let lastName = document.getElementsByName('lname')[0].value;
    
    // Concatenate first and last name
    let fullName = firstName + " " + lastName;
    
    // Display the full name using an alert
    alert(fullName);
}
