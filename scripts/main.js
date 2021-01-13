import { useFish } from '/scripts/fish/FishDataProvider.js'
import { FishList } from '/scripts/fish/FishList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}


FishList()
