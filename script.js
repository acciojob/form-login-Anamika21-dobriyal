// function getFormvalue() {
//     //Write your code here

// }

function getFormValue(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    alert(`${firstName} ${lastName}`);
}

document.getElementById('loginForm').addEventListener('submit', getFormValue);