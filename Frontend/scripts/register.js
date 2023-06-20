//
let form = document.getElementById("formcontainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let payload = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    gender: document.getElementById("gender").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch(`https://dull-teal-pelican-vest.cyclic.app/user/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.msg != "Registration successful") {
        console.log(res.msg), alert(res.msg);
      } else {
        // localStorage.setItem("fname", res.fname);
        console.log(res.msg);
        // alert(res.msg);
        document.getElementById("gender").value = "";
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        window.location.href = "login.html";
      }
    })
    .catch((err) => console.log(err));
});
