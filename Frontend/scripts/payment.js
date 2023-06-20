new Vue({
  el: "#app",
  data() {
    return {
      currentCardBackground: Math.floor(Math.random() * 25 + 1), // just for fun :D
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      cardNumberTemp: "",
      isCardFlipped: false,
      focusElementStyle: null,
      isInputFocused: false,
    };
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType() {
      let number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";

      re = new RegExp("^9792");
      if (number.match(re) != null) return "troy";

      return "visa"; // default type
    },
    generateCardNumberMask() {
      return this.getCardType === "amex"
        ? this.amexCardMask
        : this.otherCardMask;
    },
    minCardMonth() {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
  },
  watch: {
    cardYear() {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    },
  },
  methods: {
    flipCard(status) {
      this.isCardFlipped = status;
    },
    focusInput(e) {
      this.isInputFocused = true;
      let targetRef = e.target.dataset.ref;
      let target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
      };
    },
    blurInput() {
      let vm = this;
      setTimeout(() => {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    },
  },
});

//Handling Submit Button

const submitButton = document.querySelector("#submitBtn");

const cardNumber = document.querySelector("#cardNumber");
const cardName = document.querySelector("#cardName");
const cardMonth = document.querySelector("#cardMonth");
const cardYear = document.querySelector("#cardYear");
const cardCvv = document.querySelector("#cardCvv");

// <-------------Event Listerners--------------->

let centername = document.getElementById("centerName");
let data = JSON.parse(localStorage.getItem("harshal"))
// console.log(centername);
let SalonData = JSON.parse(localStorage.getItem("SalonData"));
centername.innerText = SalonData.name;

let servicename = document.getElementById("searchInput");
let descService = document.getElementById("descService");
let priceService = document.getElementById("priceService");
let timeService = document.getElementById("timeService");
let timeslot = document.getElementById("timeslot");
let useremail = data.emailpass;
console.log(useremail) 

let selected_service = JSON.parse(localStorage.getItem("selected_service"));

servicename.innerText = selected_service.name;
descService.innerText = `Description: ${selected_service.desc}`;
priceService.innerText = `Price: ₹ ${selected_service.price}`;
timeService.innerText = `Time: ${selected_service.time}`;

let slotTime = localStorage.getItem("timeslot");
timeslot.innerText = `Slot time: ${slotTime}`;


//Place Order button addEventListener
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("test hello");

  if (validate()) {
    setTimeout(() => {
      
    }, 1000);

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);

    swal("Payment Sucessfull!");

    ordersavebackend()
    sendingOrderconformedemail()


  } else {
    swal("Please fill all  the details");
  }
});

// <--------------Functions-------------------->

//Backend POST function


function validate() {
  if (
    cardNumber.value == "" ||
    cardName.value == "" ||
    cardMonth.value == "" ||
    cardYear.value == "" ||
    cardCvv.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}

function ordersavebackend() {

  let userObj = {
    servicename : selected_service.name, 
    descService : selected_service.desc,
    priceService :selected_service.price,
    timeService : selected_service.time,
    timeslot : slotTime,
    email : useremail
  };

  fetch(`https://dull-teal-pelican-vest.cyclic.app/order/addorder`,{
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.msg);
      console.log("succesfully addded")
    })
    .catch((err) => {
      console.log(err);
    });
}
function sendingOrderconformedemail(){
  fetch("https://dull-teal-pelican-vest.cyclic.app/order/sendmail", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res.msg);
    
  })
  .catch((err) => {
    console.log(err);
    
  });



}
