const tipCollection = [
    {
        author: "Martin",
        text: "This is where Martin will record his thoughts.",
        location: "A reference to where Martin was fishing or the location the fishing advice is about.",
        date: "input date of Martin's thoughts.",
    },
    {
        author: "Martin",
        text: "This is where Martin will record his thoughts.",
        location: "A reference to where Martin was fishing or the location the fishing advice is about.",
        date: "input date of Martin's thoughts.",
    },
]

export const useTip = () => {
    return tipCollection.slice()
}