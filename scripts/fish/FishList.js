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
    const holyFishHTMLRepresentations = buildFishListHTML(holyFishArray, "Holy Fish")
    
    const soldierFishArray = soldierFish()
    const soldierFishHTMLRepresentations = buildFishListHTML(soldierFishArray, "Soldier Fish")
    
    const regularFishArray = nonHolyFish()
    const regularFishHTMLRepresentations = buildFishListHTML(regularFishArray, "Regular Fish")

    contentElement.innerHTML += `
        <article class="fishList">
            ${holyFishHTMLRepresentations}
            ${soldierFishHTMLRepresentations}
            ${regularFishHTMLRepresentations}
        </article>
    `
}

