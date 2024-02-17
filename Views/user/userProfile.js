var token = sessionStorage.getItem("token");
console.log(token);



// let greetings = {"Welcome back","Hello",""};

 let users = [
     { id: 1, role: 'member', name: 'Sarah', lastName: 'Loh', age: 23, email: 'Sarah@mail.com', password: 'Secret@789', billing: { NOC: 'Sarah Loh', cardNo: 'xxxx-xxxx-xxxx-4444', exp: '2025-12', country: 'Singapore', address: 'somewhere somestreet 31', postalCode: 123456,  cvv: 121}},
     { id: 2, role: 'su', name: 'Superuser', lastName: '', age: 100, email: 'su@mail.com', password: 'Pass@123' },

   ];

 let reservations = [
      { id: 1,
        res: [{ carId: 1, startDate: '2023-12-01', endDate: '2023-12-05', location:'Marina Bay Sands', payment: 'y' },
              { carId: 2, startDate: '2024-03-10', endDate: '2024-03-15', location:'Marina Bay Sands', payment: 'n' },] ,
      },
      { id: 2,
        res: [],
      },

    ];


 function validateLogin() {
    try{
        // Fetch values from the form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email);
        console.log(password);

        // Check if email and password match any user in the users array
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Successful login
            if (user.role === 'su'){
                sessionStorage.setItem("name", user.name);
                sessionStorage.setItem("token", user.id);
                window.location.href = "../admin/admin.html";
                console.log("su login")
            }
            else if (user.role === "member") {
                sessionStorage.setItem("name", user.name);
                sessionStorage.setItem("token", user.id);
                token = sessionStorage.getItem("token");
                displayUserName();

                console.log(sessionStorage.getItem("token"));
                console.log(token);
            }
        }
        else {
            // Failed login
            alert('Invalid email or password. Please try again.');
        }
    }
    catch(error) {
                 // Log any errors to the console
                 console.error('An error occurred during login:', error);
             }

  }

function logOut(){
    sessionStorage.removeItem("token");
    window.location.href = '../Home/Home.html';
    console.log(sessionStorage.getItem("token"));
    updateNavLink();

}

 function displayUserProfile(){
    const user = reservations.find(u => u.id === parseInt(sessionStorage.getItem("token")));
    const billing = users.find(u => u.id === parseInt(sessionStorage.getItem("token")));
    console.log(billing.billing);
    if (user) {

        const idArray = user.res.map(u => u.carId);
        console.log(idArray);

        const reservationsDiv = document.getElementById('reservations');

        idArray.forEach(function(id) {
            console.log(id)
            const car = getProdById(id);
            console.log(car);


            const reservationCard = document.createElement('div');
            reservationCard.classList.add('reservationCard');

            reservationCard.innerHTML=
            `

                <div class="reservationCard">
                  <div class="card">
                    <div class="card-header">
                      ${car.long}
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <!-- First Column -->
                        <div class="col-md-6">
                            <img src="${car.img[0]}" style="height: 30vh; width: relative;" class="img-fluid w-100 h-100" alt="Car Image">
                        </div>
                        <!-- Second Column -->
                        <div class="col-md-6">
                            <h6 class="card-title">Payment Due: ${car.price}</h6>
                            <h6 class="card-title">Collection and return location: ${user.res[0].location}</h6  >
                            <h6 class="card-title">Collection Date: ${user.res[0].startDate}</h6>
                            <h6 class="card-title">Return Date: ${user.res[0].endDate}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>.

            `;

            reservationsDiv.appendChild(reservationCard);

        });



    }
    else {
        console.log(`'${name}' not found.`);
        //return [];
    }
    if (billing) {

        const tabContent = document.getElementById('billing');
        tabContent.innerHTML = `
            <h5>Card Info</h5>
            <p>Card Number: ${billing.billing.cardNo}</p>
            <p>Name On Card: ${billing.billing.NOC}</p>
            <p>Expiry Date: ${billing.billing.exp}</p>
            <h5>Billing Address</h5>
            <p>Billing Address: ${billing.billing.country}, ${billing.billing.address}</p>
            <p>Postal Code: ${billing.billing.postalCode}</p>
        `;
    }
 }

 function addReservation(carId){
 console.log(carId);
    try{
        const user = users.find(u => u.id === parseInt(sessionStorage.getItem("token")));
        console.log(user);
        const cvv = parseInt(document.getElementById('cvv').value);
        if (cvv === user.billing.cvv){

            const location = document.getElementById('location').value;
            const startDate = document.getElementById('pickUpDate').value;
            const endDate = document.getElementById('returnDate').value;
            console.log(location);
            console.log(pickUpDate);
            console.log(returnDate);
            console.log(cvv);
            const payment = 'n';

            const reservation = reservations.find(res => res.id === parseInt(sessionStorage.getItem("token")));
            console.log(reservation);

            // Add the submitted data to the 'res' property of the reservation
            const newRes = { carId, startDate, endDate, location, payment };
            reservation.res.push({
                carId: parseInt(carId),
                pickUpDate,
                returnDate,
                location,
                payment
            });

            console.log(reservation.res);

            window.location.href = `../thanks.html  `;

        }

    }
    catch(error) {
        console.error('An error occurred during add:', error);
    }

 }

 function displayUserName(){
    if(sessionStorage.getItem("token")){
        const user = users.find(u => u.id === parseInt(sessionStorage.getItem("token")));
        console.log(user);
        document.getElementById('userName').innerHTML = user.name;
        console.log(sessionStorage.getItem("token"));
    }
    else{
    console.log("session storage is empty");
    }
 }

setTimeout(() => {
    displayUserName();
    displayUserProfile();
}, 1);
