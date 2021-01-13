export const Tips = (tip) => {
    return `
        <section class="quoteCard">
            <div class="quoteCard__author">${tip.author}</div>
            <div class="quoteCard__text">${tip.text}</div>
            <div class="quoteCard__location">${tip.location}</div>
            <div class="quoteCard__date">${tip.date}</div>
        </section>
    `
}