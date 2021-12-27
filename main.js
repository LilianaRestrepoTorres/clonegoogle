const searchInput = document.querySelector('#search-input');

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enCO933CO933&oq=" + input + "&aqs=chrome..69i57j46i433i512j46i199i433i465i512j46i199i465i512j0i131i433i457i512j0i433i512j0i512j0i131i433i512j0i433i512.687j0j1&sourceid=chrome&ie=UTF-8"
}