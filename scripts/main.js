import { useFish } from '/scripts/fish/FishDataProvider.js'
import { FishList } from '/scripts/fish/FishList.js'

import { useLocation } from '/scripts/locations/LocationDataProvider.js'
import { LocationList } from '/scripts/locations/LocationList.js'


const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()

const allTheLocations = useLocation()

for (const location of allTheLocations) {
    console.log(location)
}

LocationList()