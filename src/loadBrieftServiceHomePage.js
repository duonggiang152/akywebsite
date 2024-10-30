const homePageContent = document.getElementById("homepage-content")
import { CATEGORY, brieftData } from "./mockDatabase"
export function LoadBrieftServerHomePage(type) {
    homePageContent.innerHTML = ""
    const brieftSerives = [];
    for(let  i = 0; i < brieftData.length; i++) {
        if(brieftData[i].category == type || type === CATEGORY.ALL) {
            brieftSerives.push(brieftData[i]);
        }
    }
    brieftSerives.forEach((service) => {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = `<div>
        <div class="image-brief-service">
            <img src="${service.img}" alt="">
        </div>
        <div>
            <h3>${service.name}</h3>
        </div>
    </div>`
    newDiv.addEventListener("click", () => {
        window.location.href = `./product-details.html?id=${service.id}`;
    })
        homePageContent.append(newDiv)
    })
   
}