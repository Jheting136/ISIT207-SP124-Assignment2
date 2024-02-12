

const urlSearchParams = new URLSearchParams(window.location.search);

function getProdInfo(){

    // Get the value of 'searchParam' or a default value if not present
    const searchParamValue = urlSearchParams.get('prodInfo') || 'default';
    const decodedSearchParamValue = JSON.parse(searchParamValue);
    // Use the searchParamValue as needed
    return decodedSearchParamValue;
    console.log(decodedSearchParamValue);


}

function displayProduct(){

    const prodInfoElement = document.getElementById('prodInfo');
    const carInfo = getProdInfo();
    //console.log(prodInfo);
    images = carInfo.img;
    details = carInfo.details;
    console.log(images[0]);

    const carouselInner = document.getElementById('carouselInner');

      images.forEach((slide, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
          carouselItem.classList.add('active');
        }

        carouselItem.innerHTML = `
          <img src="${images[index]}" style="height: 70vh; width: 60vw;" class="d-block w-100" alt="Car Image">
        `;
        carouselInner.appendChild(carouselItem);
      });

    const prodInfo = document.getElementById('prodInfo');
    prodInfo.innerHTML =
    `
        <div class="container text-center mt-5">
            <i class="bi bi-chevron-compact-down fs-1 "></i>
        </div>
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title"><b>Model Details</b></h3>
                    <div id="carDetailsGrid" class="grid-container">

                    </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">${carInfo.long}</h3>
                  <p></p>
                  <h5 class="card-text">$${carInfo.price}</h5>
                  <button class="btn btn-primary" id="reserveBtn" data-bs-toggle="modal" data-bs-target="#loginModal">Reserve Now</button>
                </div>
              </div>
            </div>
          </div>
    `;

    var gridContainer = document.getElementById('carDetailsGrid');

    for (var key in details) {
        if (details.hasOwnProperty(key)) {
            var gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            var keyElement = document.createElement('div');
            keyElement.classList.add('key');
            keyElement.textContent = key;

            var detailsElement = document.createElement('h5');
            detailsElement.classList.add('details');
            detailsElement.textContent = details[key];

            gridItem.appendChild(keyElement);
            gridItem.appendChild(detailsElement);

            gridContainer.appendChild(gridItem);
        }
    }




}

function updateReserveBtn(){

    const reserveBtn = document.getElementById("reserveBtn");
    if(sessionStorage.getItem("token")){
        reserveBtn.setAttribute("data-bs-target", "#checkoutModal");
    } else {
        reserveBtn.setAttribute("data-bs-target", "#loginModal");
    };

}


//setTimeout(() => {
//    getProdInfo();
//}, 10);


setTimeout(() => {
    displayProduct();
    updateReserveBtn();
}, 1);
