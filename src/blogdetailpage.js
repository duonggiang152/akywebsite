import { GetHotLine } from "./getHotline"
import { bindEventSearch } from "./searchBox";

import "./style/globalconfig.css"
import "./style/greeting.css"
import "./style/tittle.css"
import "./style/navigationbar.css"
import "./style/footer.css"
import "./style/blogpage.css"
const init = () => {
    let hotlineDiv = document.getElementById("greeting").getElementsByClassName("hotline")[0];
    hotlineDiv.innerHTML  = "Hotline: " + GetHotLine();
    bindEventSearch()
} 

init();