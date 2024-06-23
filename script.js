var check = function() {
    if (document.getElementById('password').value == document.getElementById('confirm').value && document.getElementById('password').value != null) {
      document.getElementById('message').innerHTML = '';
      document.getElementById('password').style.border = "";
      document.getElementById('confirm').style.border = "";
    } else {
      document.getElementById('password').style.border = "1px solid red";
      document.getElementById('confirm').style.border = "1px solid red";
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = '*Passwords not matching';
    }
  }