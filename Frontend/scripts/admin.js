let contentBox = document.querySelector(".display-content-box")
let addBtn = document.getElementById("addBtn")
let readBtn = document.getElementById("readBtn")
let analysisBtn=document.getElementById("analysisBtn")
let logoutScreen=document.getElementById("mylogoutModel")
let logoutConfirmBtn=document.getElementById("logoutConfirmBtn")
let logoutCancelBtn=document.getElementById("logoutCancelBtn")

window.onload = () => {
    contentBox.innerHTML = ""
    contentBox.innerHTML = `
    <img src="../images/logo_glam.png">
    <h1>WELCOME TO GLAMHUB ADMIN-SIDE</h1>
    `;
}

//Add form======================================================
addBtn.addEventListener("click", () => {
    contentBox.innerHTML = "";

    contentBox.innerHTML = `
        <form id="yourFormId">
            <h3>ADD NEW SALON</h3>

            <input type="text" placeholder="Salon Image" id="salon_image" required>
            <input type="text" placeholder="Salon Name" id="salon_name" required>
            <input type="text" placeholder="Address" id="salon_address" required>
            <input type="number" placeholder="Contact" id="salon_number" required>
            <input type="text" placeholder="City" id="salon_city" required>

            <div class="multiselect">
                <div class="selectBox1" onclick="showCheckboxes1()">
                    <select>
                        <option>Select Hair Services</option>
                    </select>
                    <div class="overSelect1"></div>
                </div>
                <div id="checkboxes1">
                <label for="Hair cut">
                <input type="checkbox" id="Hair cut" />Hair cut
                </label>
                <label for="Hair Wash">
                    <input type="checkbox" id="Hair Wash" />Hair Wash
                </label>
                <label for="Hair Color">
                    <input type="checkbox" id="Hair Color" />Hair Color
                </label>
                </div>
            </div>

            <div class="multiselect">
                <div class="selectBox2" onclick="showCheckboxes2()">
                    <select>
                        <option>Select Face Services</option>
                    </select>
                    <div class="overSelect2"></div>
                </div>
                <div id="checkboxes2">
                <label for="Face Mask">
                    <input type="checkbox" id="Face Mask" />Face Mask
                </label>
                <label for="Face/body massage">
                    <input type="checkbox" id="Face/body massage" />Face/body massage
                </label>
                <label for="Manicure & pedicure">
                    <input type="checkbox" id="Manicure & pedicure" />Manicure & pedicure
                </label>
                </div>
            </div>

            <div class="multiselect">
                <div class="selectBox3" onclick="showCheckboxes3()">
                    <select>
                        <option>Select Body Services</option>
                    </select>
                    <div class="overSelect3"></div>
                </div>
                <div id="checkboxes3">
                <label for="value 1">
                <input type="checkbox" id="value 1" />value 1
                </label>
                <label for="value 2">
                    <input type="checkbox" id="value 2" />value 2
                </label>
                <label for="value 3">
                    <input type="checkbox" id="value 3" />Value 3
                </label>
                </div>
            </div>

            <button type="button" onclick="getSelectedValues()">Submit</button>
        </form>
    `;
});

//firstbox======================
var expanded1 = false;

function showCheckboxes1() {
    var checkboxes1 = document.getElementById("checkboxes1");
    if (!expanded1) {
        checkboxes1.style.display = "block";
        expanded1 = true;
    } else {
        checkboxes1.style.display = "none";
        expanded1 = false;
    }
}

//secondbox======================
var expanded2 = false;

function showCheckboxes2() {
    var checkboxes2 = document.getElementById("checkboxes2");
    if (!expanded2) {
        checkboxes2.style.display = "block";
        expanded2 = true;
    } else {
        checkboxes2.style.display = "none";
        expanded2 = false;
    }
}

//thirdbox======================
var expanded3 = false;

function showCheckboxes3() {
    var checkboxes3 = document.getElementById("checkboxes3");
    if (!expanded3) {
        checkboxes3.style.display = "block";
        expanded3 = true;
    } else {
        checkboxes3.style.display = "none";
        expanded3 = false;
    }
}

//Fetching part===============
async function getSelectedValues(event) {
    const salon_image = document.getElementById("salon_image");
    const salon_name = document.getElementById("salon_name");
    const salon_address = document.getElementById("salon_address");
    const salon_number = document.getElementById("salon_number");
    const salon_city = document.getElementById("salon_city");
    const checkboxes1 = document.querySelectorAll('#checkboxes1 input[type="checkbox"]');
    const checkboxes2 = document.querySelectorAll('#checkboxes2 input[type="checkbox"]');
    const checkboxes3 = document.querySelectorAll('#checkboxes3 input[type="checkbox"]');
    const selectedValuesFrom1Box = [];
    const selectedValuesFrom2Box = [];
    const selectedValuesFrom3Box = [];

    checkboxes1.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValuesFrom1Box.push(checkbox.id);
        }
    });

    checkboxes2.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValuesFrom2Box.push(checkbox.id);
        }
    });

    checkboxes3.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValuesFrom3Box.push(checkbox.id);
        }
    });

    let obj = {
        image: salon_image.value,
        name: salon_name.value,
        address: salon_address.value,
        contact: salon_number.value,
        city: salon_city.value,
        services: {
            Hair: selectedValuesFrom1Box,
            Face: selectedValuesFrom2Box,
            Body: selectedValuesFrom3Box,
        }
    };

    try {
        await fetch(`https://dull-teal-pelican-vest.cyclic.app/admin/register-salon`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                alert("Successfully registered!");
            })
            .catch((err) => {
                alert(err);
            });
    } catch (error) {
        alert(error)
    }

}



//Get all users data============================================================
readBtn.addEventListener("click", () => {
    contentBox.innerHTML = "";

    contentBox.innerHTML = `
    <div id="readbox">
      <form>
        <input type="text" placeholder="Search" id="searchbox">
        <button type="button" onclick="getSalons()">Search</button>
      </form>
      <div id="resultsBox">
        <h3>Loading...</h3>
      </div>
    </div>
  `;

    getSalons()

});

async function getSalons() {
    const searchbox = document.getElementById("searchbox");
    const resultsBox = document.getElementById("resultsBox");
    const admin_access_token=localStorage.getItem("admin_access_token")

    try {
        const response = await fetch("https://dull-teal-pelican-vest.cyclic.app/admin/salons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:admin_access_token
            },
            body: JSON.stringify({ name: searchbox.value })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            Display(data, resultsBox);
        } else {
            throw new Error("i am here admin.js");
        }
    } catch (error) {

        alert(error);
    }
}

function Display(arr, resultsBox) {
    resultsBox.innerHTML = "";

    arr.forEach((ele) => {
        let html = `
        <div>
          <img src="https://media.istockphoto.com/id/134052142/photo/hair-salon-situation.jpg?s=612x612&w=0&k=20&c=HM4Tl3ATijpIS1Rv097UHwmZ3OfmqGXkniNLuTCqB0A=" />
          <b><p>${ele.name}</p></b>
          <p>${ele.address}</p>
          <p>${ele.contact}</p>
          <p>${ele.city}</p>
          <button onclick="editform('${ele._id}','${ele.name}','${ele.city}','${ele.address}','${ele.contact}')">Edit</button>
        </div>`;

        resultsBox.innerHTML += html;
    });
}

function editform(id, name, city, address, contact) {
    console.log(id, name, city, address, contact)
    const modal = document.getElementById("myUpdateModel");

    const salon_id = document.getElementById("salon_id")
    salon_id.value = id

    const updateNameInput = document.getElementById("update_salon_name")
    updateNameInput.value = name

    const updateCityInput = document.getElementById("update_salon_city")
    updateCityInput.value = city

    const updateAddressInput = document.getElementById("update_salon_address")
    updateAddressInput.value = address

    const updateContactInput = document.getElementById("update_salon_contact")
    updateContactInput.value = contact

    modal.style.display = "block";
}



//from here updation part starts============================================

async function updateSalon() {
    const salon_id = document.getElementById("salon_id").value
    const updateImageInput = document.getElementById("update_salon_image").value
    const updateNameInput = document.getElementById("update_salon_name").value
    const updateCityInput = document.getElementById("update_salon_city").value
    const updateAddressInput = document.getElementById("update_salon_address").value
    const updateContactInput = document.getElementById("update_salon_contact").value
    const updateServicesCategory = document.getElementById("update-services").value
    const updateServicesInput = document.getElementById("update_service").value

    let payload = {
        _id: salon_id,
        image: updateImageInput,
        name: updateNameInput,
        address: updateAddressInput,
        contact: updateContactInput,
        city: updateCityInput,
        $push: {
            [`services.${updateServicesCategory}`]: updateServicesInput
        }
    }

    console.log(payload)

    try {
        await fetch(`https://dull-teal-pelican-vest.cyclic.app/admin/update-details`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Info updated successfully!");
            })
            .catch((err) => {
                alert(err);
            });
    } catch (error) {
        alert(error)
    }
}

// this is to cancel form by clicking outside
const modal = document.getElementById("myUpdateModel");
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == logoutScreen) {
        logoutScreen.style.display = "none";
    }
}

//Analysis button chartjs work here
analysisBtn.addEventListener("click", () => {
    contentBox.innerHTML = "";

    contentBox.innerHTML = `
        <div id="canvas_cantainer">
            <div >
                <button id="weeklySwitch">weekly</button>
                <button id="monthlySwitch">monthly</button>
            </div>
            <canvas id="myChart"></canvas>
        </div>
    `;

    let weeklySwitch = document.getElementById("weeklySwitch");
    let monthlySwitch = document.getElementById("monthlySwitch");

    weeklySwitch.addEventListener("click", weeklySwitchBtn);
    monthlySwitch.addEventListener("click", monthlySwitchBtn);


    let chart = null; // Variable to hold the chart instance

    function weeklySwitchBtn() {
        const chartData = {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: 'Weekly Revenue',
                data: [12, 19, 3, 5, 2, 3, 44],
                borderWidth: 1
            }]
        };

        const chartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        if (chart) {
            chart.data = chartData;
            chart.options = chartOptions;
            chart.update(); // Update the chart
        } else {
            const canvas = document.getElementById('myChart');
            chart = new Chart(canvas, {
                type: 'line',
                data: chartData,
                options: chartOptions
            });
        }
    }

    function monthlySwitchBtn() {
        const chartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
                label: 'Monthly Revenue',
                data: [12, 9, 5, 5, 5, 3, 4],
                borderWidth: 1
            }]
        };

        const chartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        if (chart) {
            chart.data = chartData;
            chart.options = chartOptions;
            chart.update(); // Update the chart
        } else {
            const canvas = document.getElementById('myChart');
            chart = new Chart(canvas, {
                type: 'line',
                data: chartData,
                options: chartOptions
            });
        }
    }

    weeklySwitchBtn();// calling for first time automatically
});

//for logout======================================================
// this is to cancel form by clicking outside

logoutBtn.addEventListener("click", () => {
    logoutScreen.style.display = "flex";
});

// window.onclick = function (event) {
//     if (event.target == logoutScreen) {
//         logoutScreen.style.display = "none";
//     }
// }

logoutCancelBtn.onclick = function (event) {
        logoutScreen.style.display = "none";
}

logoutConfirmBtn.onclick=function(){
    localStorage.clear()
    window.location="admin.login.html"
}
