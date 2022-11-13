function getStarted(em){
    let email1 = document.getElementById(em).value;
    if(email1){
        alert(`${email1} has successfully registered and is not a Netflix Member`);
    } else{
        alert('Provide valid email to get started..');
    }    
    document.getElementById(em).value = "";
}

function getSignedIn(){
    alert('Here you will find options to Sign in on Netflix..!');
}

function show_hide(dd_menu){
    if(document.getElementById(dd_menu).className === 'dropdown-menu show'){
        document.getElementById(dd_menu).className = "dropdown-menu";
    } else {
        document.getElementById(dd_menu).className = "dropdown-menu show";
    }
}

function myFunction(b,ans) {
    var x = document.getElementById(ans);
    var btn = document.getElementById(b);
    if (x.style.display === "none") {
        x.style.display = "block";
        btn.innerText = "x";
    } else {
      x.style.display = "none";
      btn.innerText = "+";
    }
    b = null;
    ans = null;
}
