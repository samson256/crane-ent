/******************* CONSTANTS & VARIABLES  *******************/
const apiURL = "https://www.";
const search = document.getElementById('filter');
const loader = document.querySelector('.loader');

const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');



/****************** Animating the menu icon ***************************/
function myFunction(x) {
    x.classList.toggle("change");
};



/****************** Show loader and fetch other results *************************/
// Function to Search (Fetch) Results from the server.
async function searchSongs(term) {
    const res = await fetch(`${apiURL}/sugget/${term}`);
    const data = await res.json();

    console.log(data);
};

var showLoading = function() {
    loading.classList.add('show');

    setTimeout(function () {
        loading.classList.remove('show');

        setTimeout(function () {
            // searchSongs();
        }, 400)
    }, 1000)
};



/****************** EVENT LISTENERS ***********************/
var allEventListeners = function(){

    document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        console.log('Clicked successfully');
        };
    });

    // On scroll display more results
    window.addEventListener('scroll', function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 5) {
            showLoading();
        };
    });

    // The Download button EventListener
    document.getElementById('download').addEventListener('click', function () { });
    
    // Toggle Icon EventListener
    function myFunction() {
        var x = document.getElementById("nav-items");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    } 

    // Search and Submit EventListener
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const searchTerm = search.value.trim();
    
        if (!searchTerm) {
            alert("Please Type a Word")
        } else {
            searchSongs(searchTerm);
        }
    });

};



/*************** Global App Controller *************/
var appController = function(){
    allEventListeners();
};

appController();