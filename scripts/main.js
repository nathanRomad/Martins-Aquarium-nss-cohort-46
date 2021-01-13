import { useFish } from '/scripts/fish/FishDataProvider.js'
import { FishList } from '/scripts/fish/FishList.js'

import { useLocation } from '/scripts/locations/LocationDataProvider.js'
import { LocationList } from '/scripts/locations/LocationList.js'

import { useTip } from '/scripts/tips/TipDataProvider.js'
import { TipList } from '/scripts/tips/TipList.js'

const allTheFish = useFish()
for (const fish of allTheFish) {
    // console.log(fish)
}
FishList()

const allTheLocations = useLocation()
for (const location of allTheLocations) {
    // console.log(location)
}
LocationList()

const allTheTips = useTip()
for (const tip of allTheTips) {
    // console.log(tip)
}
TipList()
