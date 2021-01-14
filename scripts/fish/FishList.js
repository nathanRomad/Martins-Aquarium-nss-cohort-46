import { useFish } from '/scripts/fish/FishDataProvider.js'
import { Fish } from '/scripts/fish/Fish.js'

export const FishList = () => {
    
    const contentElement = document.querySelector(".containerLeft__fishList")
    const fishes = useFish()

     let fishHTMLRepresentations = ""
     for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
     }

    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}
