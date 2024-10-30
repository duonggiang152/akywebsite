import "./style/globalconfig.css"
import "./style/greeting.css"
import "./style/tittle.css"
import "./style/navigationbar.css"
import "./style/footer.css"
import "./style/slideBarProductDetails.css"
import "./style/serviceDetails.css"
import { PreviewSlideBarEvent } from "./previewSlideBarEvent"
import { GetHotLine } from "./getHotline"
import { bindEventSearch } from "./searchBox";
const s = new PreviewSlideBarEvent;
const init = () => {
    let hotlineDiv = document.getElementById("greeting").getElementsByClassName("hotline")[0];
    hotlineDiv.innerHTML  = "Hotline: " + GetHotLine();
    bindEventSearch()
    let params = new URL(document.location.toString()).searchParams;
    let id = params.get("product-id");
    s.init();
} 

init();