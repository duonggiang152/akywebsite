import "./style/globalconfig.css"
import "./style/greeting.css"
import "./style/tittle.css"
import "./style/navigationbar.css"
import "./style/footer.css"
import "./style/services.css"
import { GetHotLine } from "./getHotline"
import { LoadBrieftServicesPage } from "./LoadBrieftServicePage"
import { bindEventSearch } from "./searchBox";
const category = document.getElementById("search-tag");
const init = () => {
    let hotlineDiv = document.getElementById("greeting").getElementsByClassName("hotline")[0];
    hotlineDiv.innerHTML  = "Hotline: " + GetHotLine();
    bindEventSearch()
    let params = new URL(document.location.toString()).searchParams;
    let name = params.get("name");
    LoadBrieftServicesPage(name);
    if(!name) {
        category.innerHTML = "Tất cả";
    }
    else {
        category.innerHTML=name;
    }
} 

init();