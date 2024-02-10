

function getProdInfo(){
    const urlSearchParams = new URLSearchParams(window.location.search);

    // Get the value of 'searchParam' or a default value if not present
    const searchParamValue = urlSearchParams.get('prodInfo') || 'default';
    const decodedSearchParamValue = decodeURIComponent(searchParamValue);
    // Use the searchParamValue as needed
    return decodedSearchParamValue;
    console.log('Search Parameter Value:', decodedSearchParamValue);
}

function displayProduct(){

    const prodInfo = getProdInfo;
    console.log(prodInfo);

}


//setTimeout(() => {
//    getProdID();
//}, 10);

getProdID();