function brightness(){
    let checkBox = document.getElementById('bright-switch');
    let checkBoxLabel = document.getElementById('bright-switch-label');
    if(checkBox.checked){
        darkMode(checkBoxLabel);
    }else{
        lightMode(checkBoxLabel);
    }
}

function lightMode(modeLabel){
    document.body.setAttribute('data-bs-theme', 'light');
    modeLabel.innerHTML = 'Light Mode';
}

function darkMode(modeLabel){
    document.body.setAttribute('data-bs-theme', 'dark');
    modeLabel.innerHTML = 'Dark Mode';
}