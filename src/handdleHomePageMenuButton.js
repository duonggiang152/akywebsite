import { LoadBrieftServerHomePage } from "./loadBrieftServiceHomePage"
import { CATEGORY } from "./mockDatabase"
const decanSearch = document.getElementById("decan-search")
const marrySearch = document.getElementById("marry-search")
const stickerSearch = document.getElementById("sticker-search")
export function handdleMenuButton() {
    decanSearch.addEventListener("click", () => {
        LoadBrieftServerHomePage(CATEGORY.DECAN)
    })

    marrySearch.addEventListener("click", () => {
        LoadBrieftServerHomePage(CATEGORY.MARRYCARD)
    })

    stickerSearch.addEventListener("click", () => {
        LoadBrieftServerHomePage(CATEGORY.STICKER)
    })
}