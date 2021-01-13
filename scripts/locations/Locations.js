export const Location = (location) => {
    return `
        <section class="locationCard">
            <div class="locationCard__city">${location.city}</div>
            <div class="locationCard__country">${location.country}</div>
            <div class="locationCard__bodyOfWater">${location.bodyOfWater}</div>
            <div class="locationCard__landmark">${location.landmark}</div>
        </section>
    `
}