import { useTip } from '/scripts/tips/TipDataProvider.js'
import { Tips } from '/scripts/tips/Tip.js'

export const TipList = () => {
    
    const contentElement = document.querySelector(".containerLeft__quoteList")
    const tipS = useTip()

     let tipHTMLRepresentations = ""
     for (const tip of tipS) {
        tipHTMLRepresentations += Tips(tip)
     }

    contentElement.innerHTML += `
        <article class="quoteList">
            ${tipHTMLRepresentations}
        </article>
    `
}