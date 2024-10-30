const searchBox = document.getElementById("search-box")
const searchButton = document.getElementById("search-button")
export function bindEventSearch() {
    searchBox.addEventListener("keydown", function(event) {
        console.log("event")
        if (event.key === "Enter") {
          let searchText = searchBox.value;
          event.preventDefault();
          location.href=`./services.html?name=${searchText}`
        }
    });
    searchButton.addEventListener("click", () => {
        let searchText = searchBox.value;
        event.preventDefault();
        location.href=`./services.html?name=${searchText}`
    })
}