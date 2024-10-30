const serviceContainer = document.getElementById("service-container")
import { CATEGORY, brieftData } from "./mockDatabase"
export function LoadBrieftServicesPage(searchparam) {
    serviceContainer.innerHTML = ""
    const brieftSerives = [];

    for(let  i = 0; i < brieftData.length; i++) {
        if(brieftData[i].name.includes(searchparam) || !searchparam) {
            brieftSerives.push(brieftData[i]);
        }
    }
    brieftSerives.forEach((service) => {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = `
        <div class="image-brief-service">
            <img src="${service.img}" alt="">
        </div>
        <div>
            <h3>${service.name}</h3>
        </div>`
        newDiv.classList.add("brief-service")
        newDiv.addEventListener("click", () => {
            window.location.href = `./product-details.html?id=${service.id}`;
        })
    serviceContainer.append(newDiv)
    })
   
}