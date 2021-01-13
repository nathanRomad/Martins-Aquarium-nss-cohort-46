import { useLocation } from '/scripts/locations/LocationDataProvider.js'
import { Location } from '/scripts/locations/Locations.js'

export const LocationList = () => {
    
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

     let locationHTMLRepresentations = ""
     for (const location of locations) {
        locationHTMLRepresentations += Location(location)
     }

    contentElement.innerHTML += `
        <article class="travelLocations">
            ${locationHTMLRepresentations}
        </article>
    `
}