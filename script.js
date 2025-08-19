document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let project = document.getElementById("project").value.trim();
    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(!name || !email || !dept || !year || !project){
        alert("⚠ Please fill all fields.");
        return;
    }
    
    if(!emailPattern.test(email)){
        alert("⚠ Invalid email format.");
        return;
    }

    // Show success animation
    document.getElementById("successMsg").style.display = "block";
    document.getElementById("regForm").reset();
});
