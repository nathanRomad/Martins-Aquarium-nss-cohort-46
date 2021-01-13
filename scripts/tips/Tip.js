export const Tip = (tip) => {
    return `
        <section class="fishCard">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${tip.name}</div>
            <div class="fish__species">${tip.species}</div>
            <div class="fish__length">${tip.length}</div>
        </section>
    `
}