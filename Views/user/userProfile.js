var token = sessionStorage.getItem("token");
console.log(token);



// let greetings = {"Welcome back","Hello",""};

 let users = [
     { id: 1,name: 'Sarah Loh', age: 23, email: 'Sarah@mail.com', password: 'Secret@789' },
     { id: 2, name: 'Jane Doe', age: 30, email: 'jane@mail.com', password: 'securepass456' },
     { id: 3, name: 'John Wick', age: 25, email: 'john@mail.com', password: 'Pass@123' },
   ];

 let reservations = [
      { id: 1, name: 'Sarah Loh',
        res: [{ id: '1', startDate: '2023-12-01', endDate: '2023-12-05', payment: 'y' },
              { id: '2', startDate: '2024-03-10', endDate: '2024-03-15', payment: 'n' },] ,
      },
      { id: 2, name: 'Jane Doe',
        res: [],
      },
      { id: 3, name: 'John Wick',
        res: [],
      },
    ];


 function validateLogin() {
    try{
        // Fetch values from the form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email)
        console.log(password    )

        // Check if email and password match any user in the users array
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Successful login
            console.log("Login successful!");
            sessionStorage.setItem("token", user.name);
            token = sessionStorage.getItem("token");
            displayUserName(token);

            console.log(sessionStorage.getItem("token"));
            console.log(token);
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

 function getReservations(){
    const user = reservations.find(u => u.name === sessionStorage.getItem("token"));
    if (user) {

        const idArray = user.res.map(u => u.id);
        console.log(idArray);

        idArray.forEach(function(id) {
            const car = getProdById(id);

            const reservationsDiv = document.getElementById('reservations');
            const reservationCard = document.createElement('div');
            reservationCard.classList.add('reservationCard');

            reservationCard.innerHTML=
            `
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <img src="${car.img[0]}" style="height: 30vh; width: 10vw;" class="d-block w-100" alt="Car Image">

                            <div id="carDetailsGrid" class="grid-container">
                                <h5 class="card-title"><b>${car.long}</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            reservationsDiv.appendChild(reservationCard);

        });



    }
    else {
        console.log(`'${name}' not found.`);
        //return [];
    }
 }

 function displayUserName(){
    if(sessionStorage.getItem("token")){
        document.getElementById('userName').innerHTML = sessionStorage.getItem("token");
        console.log(sessionStorage.getItem("token"));
    }
    else{
    console.log("session storage is empty");
    }
 }

setTimeout(() => {
    displayUserName();
    getReservations();
}, 10);
