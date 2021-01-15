export const Fish = (fishObj) => {
    return `
        <section class="fishCard">
            <div><img  class="fish__image image--card" src="${fishObj.image}" /></div>
            <div class="fishCard__name">${fishObj.name}</div>
            <div class="fishCard__species">${fishObj.species}</div>
            <div class="fishCard__length">${fishObj.length}</div>
            <div class="fishCard__location">${fishObj.location}</div>
            <div class="fishCard__diet">${fishObj.food}</div>
        </section>
    `
}