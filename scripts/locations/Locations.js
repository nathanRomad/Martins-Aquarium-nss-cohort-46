export const Locations = (location) => {
    return `
        <section class="locationCard">
            <div class="location__city">${location.city}</div>
            <div class="location__bodyOfWater">${location.bodyOfWater}</div>
            <div class="location__landmark">${location.landmark}</div>
        </section>
    `
}