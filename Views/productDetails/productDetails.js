function getProdID(){
    const urlSearchParams = new URLSearchParams(window.location.search);

    // Get the value of 'searchParam' or a default value if not present
    const searchParamValue = urlSearchParams.get('prodID') || 'default';
    const decodedSearchParamValue = decodeURIComponent(searchParamValue);
    // Use the searchParamValue as needed
    console.log('Search Parameter Value:', decodedSearchParamValue);
}


//setTimeout(() => {
//    getProdID();
//}, 10);

getProdID();