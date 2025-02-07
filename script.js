const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "I'll start speaking finnish >:(",
    "Just think about it!",
    "Ole hyvä.",
    "Apparently it is friendsday in Finland, so Ole hyvä Ystävänpäivä",
    "Please.",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
