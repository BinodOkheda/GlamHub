let centername = document.getElementById("centerName");
// console.log(centername);
let SalonData = JSON.parse(localStorage.getItem("SalonData"));
centername.innerText = SalonData.name;

let servicename = document.getElementById("searchInput");
let descService = document.getElementById("descService");
let priceService = document.getElementById("priceService");
let timeService = document.getElementById("timeService");

let selected_service = JSON.parse(localStorage.getItem("selected_service"));
servicename.innerText = selected_service.name;
descService.innerText = `Description: ${selected_service.desc}`;
priceService.innerText = `Price: ₹ ${selected_service.price}`;
timeService.innerText = `Time: ${selected_service.time}`;

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let time = e.target.innerText;
    localStorage.setItem("timeslot", time);

    swal({
      title: "Are you sure?",
      text: "Once you Booked won't be able to cancel this",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("You have selected GlamHub service", {
          icon: "success",
        });

        setTimeout(() => {
          window.location.href = "../pages/payment.html";
        }, 1500);
      } else {
        swal("You have not confirmed any service");
      }
    });
  });
});
