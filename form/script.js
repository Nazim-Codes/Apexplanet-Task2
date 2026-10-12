const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault()

    const name = document.querySelector("#name").value.trim()
    const email = document.querySelector("#email").value.trim()
    const phone = document.querySelector("#phone").value.trim()
    const address = document.querySelector("#address").value.trim()

    if(name === "" || phone === "" || address === ""){
        alert("Please enter all details");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form Submitted Successfully")
    form.reset()
})