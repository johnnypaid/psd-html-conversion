function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var m = document.getElementById('message').value;
    var onlyLetters =/^[a-zA-Z\s]*$/; 
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(n == "" || n == null){
        document.getElementById('nameLabel').innerHTML = ('Please enter your name.');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }

    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Only letters are allowed.');
        document.getElementById('name').style.borderColor = "#df2526";
        return false;
    }
  
    if(e == "" || e == null ){
          document.getElementById('emailLabel').innerHTML = ('Email is required.');
          document.getElementById('email').style.borderColor = "#df2526";
          return false;
      }
  
    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Not a valid email.');
        document.getElementById('email').style.borderColor = "#df2526";
        return false;
    }
  
    if(m == "" || m == null){
        document.getElementById('messageLabel').innerHTML = ('Your message is required.');
        document.getElementById('message').style.borderColor = "#df2526";
        return false;
    } else {
        return true;
    }
}