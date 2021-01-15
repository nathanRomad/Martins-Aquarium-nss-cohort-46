const fishCollection = [
    {
        image: "images/nemo-2.jpg",
        name: "Nemo",
        species: "Clownfish",
        length: 3,
        location: "Anemonefish are endemic to the warmer waters of the Indian Ocean, including the Red Sea and Pacific Oceans, the Great Barrier Reef, Southeast Asia, Japan, and the Indo-Malaysian region.",
        food: "Anemonefish primarily feed on small zooplankton from the water column, such as copepods and tunicate larvae, with a small portion of their diet coming from algae.",
    },
    {
        image: "images/Nemo_Maybe.png",
        name: "Nemo Maybe",
        species: "Clownfish",
        length: 5,
        location: "Anemonefish are endemic to the warmer waters of the Indian Ocean, including the Red Sea and Pacific Oceans, the Great Barrier Reef, Southeast Asia, Japan, and the Indo-Malaysian region.",
        food: "Anemonefish primarily feed on small zooplankton from the water column, such as copepods and tunicate larvae, with a small portion of their diet coming from algae.",
    },
    {
        image: "images/blueMarlin.jpg",
        name: "Marlin",
        species: "Blue Marlin/Makaira nigricans",
        length: 211,
        location: "Atlantic Ocean",
        food: "The larvae feed upon a variety of zooplankton along with drifting fish eggs and other larvae. They progress to feeding on a wide range of fishes, particularly scombrids, such as mackerel and tuna, squid, and especially near oceanic islands and coral reefs, on juvenile inshore fish.",
    },
    {
        image: "images/nemo-2.jpg",
        name: "Nemo",
        species: "Clownfish",
        length: 7,
        location: "Anemonefish are endemic to the warmer waters of the Indian Ocean, including the Red Sea and Pacific Oceans, the Great Barrier Reef, Southeast Asia, Japan, and the Indo-Malaysian region.",
        food: "Anemonefish primarily feed on small zooplankton from the water column, such as copepods and tunicate larvae, with a small portion of their diet coming from algae.",
    },
    {
        image: "images/nemo-2.jpg",
        name: "Nemo",
        species: "Clownfish",
        length: 9,
        location: "Anemonefish are endemic to the warmer waters of the Indian Ocean, including the Red Sea and Pacific Oceans, the Great Barrier Reef, Southeast Asia, Japan, and the Indo-Malaysian region.",
        food: "Anemonefish primarily feed on small zooplankton from the water column, such as copepods and tunicate larvae, with a small portion of their diet coming from algae.",
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

// Begin 3 functions for Holy fish Martin encountered in Tikal.
export const mostHolyFish = () => {
    const holyFish = []
    for (const fishObj of fishCollection) {
        if (fishObj.length % 3 === 0) {
            holyFish.push(fishObj)
    }
}
    return holyFish
}

export const soldierFish = () => {
    const soldiers = []
    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 === 0) {
            soldiers.push(fishObj)
    }
}
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 !== 0 && fishObj.length % 3 !== 0) {
            regularFish.push(fishObj)
    }
}
    return regularFish
}