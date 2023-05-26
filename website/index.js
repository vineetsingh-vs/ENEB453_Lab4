function changeFunc() {
    var selectBox = document.getElementById("countries");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var countryISO , countryName;

    //fetch names
    fetch('https://eneb453.s3.us-east-2.amazonaws.com/country.json')
    .then(response => { return response.json();})
    .then(users => {
        for(let i = 0; i<users.length;i++){
            if(users[i].name == selectedValue){
                countryISO = users[i].iso;
                countryName = users[i].name;
                console.log(countryName);
                console.log(countryISO);
            }
            
        } 
        //fetch images
        var url = "https://eneb453.s3.us-east-2.amazonaws.com/"+countryISO+"/pictures.json";
        fetch(url)
        .then(response2 => { return response2.json();})
        .then(users2 => {
            var myNode = document.getElementById("photos");
            myNode.innerHTML="";
            
            for(let j = 0; j<users2.length;j++){
                console.log(users2[j].filename)
                var img = new Image();
                img.src = "https://eneb453.s3.us-east-2.amazonaws.com/"+countryISO+"/"+users2[j].filename;
                img.style.padding = "4px";
                myNode.appendChild(img);
            } 
        });
    });
    

}

function makecall(event) {
    event.preventDefault();
    const dropdowndiv = document.getElementById("dropdowndiv");
    dropdowndiv.style.display = "block";
    const photosdiv = document.getElementById("photos");
    photosdiv.style.display = "block";
  
}   