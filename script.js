const quotesArray = [
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "You are never too old to set another goal or to dream a new dream.",
    "Believe you can and you're halfway there.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "It always seems impossible until it is done.",
    "Do what you can, with what you have, where you are.",
    "Opportunities don't happen. You create them.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "You don't have to be great to start, but you have to start to be great.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream it. Wish it. Do it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "The key to success is to focus on goals, not obstacles.",
    "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
    "Fall seven times, stand up eight.",
    "The only way to do great work is to love what you do.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream big and dare to fail.",
    "Focus on being productive instead of being busy.",
    "The only person you should try to be better than is the person you were yesterday.",
    "If you want something you never had, you have to do something you’ve never done.",
    "Don’t be afraid to give up the good to go for the great.",
    "Act as if what you do makes a difference. It does.",
    "Success is not just about making money. It's about making a difference.",
    "Work hard in silence, let your success be your noise.",
    "Don't let what you cannot do interfere with what you can do.",
    "The way to get started is to quit talking and begin doing.",
    "If you're going through hell, keep going.",
    "Difficult roads often lead to beautiful destinations.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    "Success means doing the best we can with what we have.",
    "The only place where success comes before work is in the dictionary.",
    "Start where you are. Use what you have. Do what you can.",
    "Failure is the opportunity to begin again more intelligently.",
    "Success is getting what you want. Happiness is wanting what you get."
];

let quoteEl = document.getElementById("quote");
let arrayLength = quotesArray.length;
function generateQuote(){
    let RandomIndex = Math.floor(Math.random()*arrayLength)
    quoteEl.textContent = quotesArray[RandomIndex]
    console.log(RandomIndex)
}


