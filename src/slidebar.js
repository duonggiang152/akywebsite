const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slideBack = document.getElementById("slide-back");
const slideFont = document.getElementById("slide-font");
const slideIndex0 =  document.getElementById("order-container-slide-block-1");
const slideIndex1 =  document.getElementById("order-container-slide-block-2");
const slideIndex2 =  document.getElementById("order-container-slide-block-3");
export class SlideBarEvent {
    state = 0;
    init() {
        this.stateUpdate();
        this.bindEvent();
    }
    resetIndex() {
        slideIndex0.classList.remove("index-slide")
        slideIndex1.classList.remove("index-slide")
        slideIndex2.classList.remove("index-slide")
    }
    bindEvent() {
        slideBack.addEventListener("click", () => {
            this.state--;
            if(this.state < 0) {this.state = 2};
            this.stateUpdate();
        })
        slideFont.addEventListener("click", () => {
            this.state++;
            if(this.state > 2) this.state = 0;
            this.stateUpdate();
        })
    }
    stateUpdate() {
        if(this.state == 0) {
            slide1.style.display = "block"; 
            slide2.style.display = "none"; 
            slide3.style.display = "none"; 
            this.resetIndex()
            slideIndex0.classList.add("index-slide")
        }
        if(this.state == 1) {
            slide1.style.display = "none"; 
            slide2.style.display = "block"; 
            slide3.style.display = "none";
            this.resetIndex()
            slideIndex1.classList.add("index-slide")
        }
        if(this.state == 2) {
            slide1.style.display = "none"; 
            slide2.style.display = "none"; 
            slide3.style.display = "block"; 
            this.resetIndex()
            slideIndex2.classList.add("index-slide")

        }
    }
   
}
