import { useLocation } from '/scripts/Locations/LocationDataProvider'
import { Location } from '/scripts/locations/Locations.js'

export const LocationList = () => {
    
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

     // Generate all of the HTML for all of the fish
     let locationHTMLRepresentations = ""
     for (const location of locations) {
        locationHTMLRepresentations += Location(location)
         /*
             Invoke the Fish component function
             and pass the current fish object as an argument.
             Each time, add the return value to the
             fishHTMLRepresentations variable with `+=`
         */
     }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="travelLocations">
            ${locationHTMLRepresentations}
        </article>
    `
}

