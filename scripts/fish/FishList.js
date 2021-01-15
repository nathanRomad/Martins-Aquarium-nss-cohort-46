import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"
import { Fish } from '/scripts/fish/Fish.js'

const buildFishListHTML = (arrayofFish, heading) => {

    let fishHTMLRepresentations = `<h3>${heading}</h3>`
    for (const fishObj of arrayofFish) {
        fishHTMLRepresentations += Fish(fishObj)
    }
    return fishHTMLRepresentations
}

export const FishList = () => {
    
    const contentElement = document.querySelector(".containerLeft__fishList")
    // const fishes = useFish()

    const holyFishArray = mostHolyFish()
    const holyFishHTMLRepresentation = buildFishListHTML(holyFishArray, "Holy Fish")
    
    const soldierFishArray = soldierFish()
    const soldierFishHTMLRepresentation = buildFishListHTML(soldierFishArray, "Soldier Fish")
    
    const regularFishArray = nonHolyFish()
    const regularFishHTMLRepresentation = buildFishListHTML(regularFishArray, "Regular Fish")

    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
            ${fishHTMLRepresentations}
            ${fishHTMLRepresentations}
        </article>
    `
}

