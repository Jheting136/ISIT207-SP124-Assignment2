var token = sessionStorage.getItem("token");
window.token = token;

 let users = [
     { id: 1,name: 'Sarah Loh', age: 23, email: 'Sarah@mail.com', password: 'Secret@789' },
     { id: 2, name: 'Jane Doe', age: 30, email: 'jane@mail.com', password: 'securepass456' },
     { id: 3, name: 'John Wick', age: 25, email: 'john@mail.com', password: 'Pass@123' },
   ];

 let reservations = [
      { id: 1, name: 'Sarah Loh',
        res: [{ car: 'Toyota Camry', startDate: '2023-12-01', endDate: '2023-12-05', payment: 'y' },
               { car: 'Honda Civic', startDate: '2024-03-10', endDate: '2024-03-15', payment: 'n' },] ,
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

        // Check if email and password match any user in the users array
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Successful login
            console.log("Login successful!");
            sessionStorage.setItem("token", user.name);
            token = sessionStorage.getItem("token");
            console.log(sessionStorage.getItem("token"));
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
    console.log(sessionStorage.getItem("token"));
    updateNavLink();
}

 function getReservations(name){
    const user = usersWithReservations.find(user => user.name === name);

    if (user) {
        console.log(user.reservations);
    }
    else {
        console.log(`'${name}' not found.`);
        //return [];
    }
 }
