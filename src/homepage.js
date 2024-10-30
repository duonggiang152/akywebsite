import { GetHotLine } from "./getHotline";
import { SlideBarEvent } from "./slidebar";
import { LoadBrieftServerHomePage } from "./loadBrieftServiceHomePage";
import { CATEGORY } from "./mockDatabase";
import { handdleMenuButton } from "./handdleHomePageMenuButton";
import { bindEventSearch } from "./searchBox";
import "./style/globalconfig.css"
import "./style/greeting.css"
import "./style/homepage.css"
import "./style/tittle.css"
import "./style/navigationbar.css"
import "./style/slidebar.css"
import "./style/footer.css"
const s = new SlideBarEvent;
const init = () => {
    let hotlineDiv = document.getElementById("greeting").getElementsByClassName("hotline")[0];
    hotlineDiv.innerHTML  = "Hotline: " + GetHotLine();
    bindEventSearch();
    s.init()
    LoadBrieftServerHomePage(CATEGORY.ALL);
    handdleMenuButton();
   
} 

init();