var appId = "566894"
var accessKey = "yWH9hjEhFXjQhvtQPA8HDnyVzi_ocqp0JvHQDdzE9jA"
var secretKey = "tLxOXBxVmBk3PeUzYuiAhr1MWH-HTTy3Crg4fIDaax8"



function fetchpictures(term) {
    document.getElementById("picturebox").innerHTML = ""
    const testUrl = "https://api.unsplash.com/search/photos?page=1&query=" + term + "&orientation=portrait&client_id=" + accessKey
    fetch(testUrl).then(response => response.json()).then(data => {
        for (var i = 2; i < data.results.length; i++) {
            var imgSrc = data.results[i].urls.thumb;
            var largeImage= data.results[i].urls.full
            var image = document.createElement("img")
            image.setAttribute("src", imgSrc)
            image.setAttribute("data-selected", "false")
            image.addEventListener("click", function () {
                console.log(this.src)
                var selectedImage=this.src
                localStorage.setItem("user-image", selectedImage)
            
                document.location.href="image.html"
            })
      
            document.getElementById("picturebox").appendChild(image)

        }
    })
}


document.getElementById("Search-btn").addEventListener("click", function () {
    document.getElementById("select").removeAttribute("class")
    var searchTerm = document.getElementById("Search-term").value
    fetchpictures(searchTerm)
})