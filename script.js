function validateForm() {
    var name = document.getElementById('name').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var date = document.getElementById('date').value;

    if (name === '' || from === '' || to === '' || date === '') {
        alert('Please fill in all fields');
        return false;
    }

    return true;
}
