'use strict';

require('./misc/functions');

const poems = {
    normal: [{
        name: 'Bottles',
        value: 'I pop off my scalp like the lid of a cookie jar.\nIt\'s the secret place where I keep all my dreams.\nLittle balls of sunshine, all rubbing together like a bundle of kittens.\nI reach inside with my thumb and forefinger and pluck one out.\nIt\'s warm and tingly.\nBut there\'s no time to waste! I put it in a bottle to keep it safe.\nAnd I put the bottle on the shelf with all of the other bottles.\nHappy thoughts, happy thoughts, happy thoughts in bottles, all in a row.\n\nMy collection makes me lots of friends.\nEach bottle a starlight to make amends.\nSometimes my friend feels a certain way.\nDown comes a bottle to save the day.\n\nNight after night, more dreams.\nFriend after friend, more bottles.\nDeeper and deeper my fingers go.\nLike exploring a dark cave, discovering the secrets hiding in the nooks and crannies.\nDigging and digging.\nScraping and scraping.\n\nI blow dust off my bottle caps.\nIt doesn\'t feel like time elapsed.\nMy empty shelf could use some more.\nMy friends look through my locked front door.\n\nFinally, all done. I open up, and in come my friends.\nIn they come, in such a hurry. Do they want my bottles that much?\nI frantically pull them from the shelf, one after the other.\nHolding them out to each and every friend.\nEach and every bottle.\nBut every time I let one go, it shatters against the tile between my feet.\nHappy thoughts, happy thoughts, happy thoughts in shards, all over the floor.\n\nThey were supposed to be for my friends, my friends who aren\'t smiling.\nThey\'re all shouting, pleading. Something.\nBut all I hear is echo, echo, echo, echo, echo\nInside my head.',
    },
    {
        name: 'Dear sunshine',
        value: 'The way you glow through my blinds in the morning\nIt makes me feel like you missed me.\nKissing my forehead to help me out of bed.\nMaking me rub the sleepy from my eyes.\n\nAre you asking me to come out and play?\nAre you trusting me to wish away a rainy day?\nI look above. The sky is blue.\nIt\'s a secret, but I trust you too.\n\nIf it wasn\'t for you, I could sleep forever.\nBut I\'m not mad.\n\nI want breakfast.',
    },
    ],
    tampered: [{
        name: '',
        value: 'Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of\nGet.\nOut.\nOf.\nMy.\nHead.\n\n\nGet out of my head before I do what I know is best for you.\nGet out of my head before I listen to everything she said to me.\nGet out of my head before I show you how much I love you.\nGet out of my head before I finish writing this poem.\n\n\n\nBut a poem is never actually finished.\nIt just stops moving."',
    }],
};

const jokes = [
    'What do you call a mix between a fish and an elephant? Swimming trunks!',
    'I was going to tell a joke about a skunk, but, honestly, it really stinks.',
    'Why did the rooster cross the road? To prove he wasn\'t a chicken!',
    'Why did the golfer wear two pairs of pants? In case he got a hole in one!',
    'I have severe depression. That\'s not a joke, it\'s a cry for help.',
    'My life. Ehehe...~',
    'What do you get when you cross an author and an alcoholic? Ernest Hemmingway!',
    'What do you call fake spaghetti? An im-pasta!',
    'Why don\'t cannibals eat clowns? Because they taste funny...',
    'What do you call a bird that sticks to everything? A vel-crow!',
    'What do you call a sleepwalking nun? A Roamin\' Catholic!',
    'What\'s brown and sticky? A stick!',
    'Why do seagulls fly over the sea? Because if they flew over the bay, they\'d be bagels.',
    'How many tickles does it take to make an octopus laugh? Ten tickles!',
    'Why do stadiums get hot after games? All the fans left!',
    'What do attorneys wear to court? Lawsuits!',
    'Why are there gates around cemeteries? Everyone is dying to get in!',
    'Why did the baby strawberry cry? His parents were in a jam!',
    'I was gonna tell a joke about a broken pencil, but it\'s pointless.',
    'The past, present, and future walk into a bar. It was tense.',
    'How do you comfort the Grammar Police? "There, they\'re, their..."',
    'Is there a word in the English language that uses all 5 vowels, as well as \'y\'? Unquestionably!',
    'Once, I was spacing out in class and my English teacher asked me to name two pronouns. Not sure who she was talking to, I replied, "Who, me?"',
    'Why do writers feel so cold? They\'re surrounded by drafts!',
    'A man went into a library and asked for a book on how to commit suicide. The librarian replies, "Why would I give you that? You won\'t return it!"',
    '"I\'m sorry" and "I apologize" mean the same thing. Unless you\'re at a funeral.',
    'A dyslexic man walks into a bra...',
    'What does cement and MC have in common? They both can be dense.',
    'I asked Yuri if I can have a book-mark, and she said her name is Yuri.',
    'I should probably clean my room\'s windows. But privacy is important too.',
    'I used think that the brain was the most important organ. But then I thought, hey, look how\'s telling me that.',
    'Why did the dinosaur cross the road? Because the chicken hasn\'t evolved yet.',
    'I told MC he should embrace his mistakes. He laughed, then he gave me a quick hug.',
];

const quotes = [
    'I want breakfast.',
    'AAAAAaaaaAAAAAAAAHH!!!!',
    'get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head',
    'I made eggs and toast!',
    'It\'s bad to skip breakfast! I get all cranky...',
    'I was playing with the crayons and smacked my forehead into the shelf!',
    'Yuri\'s boobs are just as they\'ve always been! Big and beautiful!',
    'I did something bad, and now I have to accept the revolution!',
    'This isn\'t the napping club!',
    'I\'m fine with--looking like a unicorn--',
    'So, if I keep it unbuttoned then I won\'t get a boyfriend, right?',
];

const swearWords = [
    'HECK!',
    'DARN IT!',
    'POOP!',
    'CRUD!',
    'FRICK!',
    'SON OF A BISCUIT!',
    'MOTHERTRUCKER!',
];

const tickle = [
    '*giggles*',
    `PFFFT BWA${'HA'.repeat(Math.floor(Math.random() * 5) + 1)}-`,
];

const commands = {
    'ask [question]': 'Ask Sayori anything you want to ask.',
    'changelog': 'See the latest changes. (alias: log)',
    'debug': 'View Sayori\'s statistics.',
    'feed [emote]': 'Give Sayori food. (alias: eat)',
    'headpat': 'Headpat Sayori. (alias: pat)',
    'help [about]': 'Help about Sayori. (alias: manual)',
    'hug [person]': 'Let Sayori hug someone.',
    'invite': 'Invite Sayori to your server.',
    'jokes': 'Sayori will tell you a funy joke. (alias: joke)',
    'lifeline': 'If you feel suicidal, please let Sayori help.',
    'ping': 'Get Sayori\'s heartbeat. (alias: doki)',
    'poems [poem name]': 'Get Sayori\'s poems from the game. (alias: poem)',
    'quotes': 'Get Sayori\'s quotes from the game. (alias: quote)',
    'shard': 'Check which shard are you on for Sayori.',
    'swear': 'Sayori will say a forbidden word.',
    'tamper': 'Mess up or fix Sayori\'s personality.',
    'tickle': 'Tickle Sayori.',
    'trigger': 'Set triggers for Sayori on/off. (alias: triggers)',
};

const askResponses = [
    ['Yes', 'Of course', 'Of course no', 'No', 'Maybe', 'Possibly'].random() + ['!', '.'].random(),
    'My vice president powers ' + ['says ', 'tells me '].random() + ['\'yes\'!', '\'no\'!', '\'maybe\'!'].random(),
    ['Yes ', 'Of course ', 'Of course not '].random() + 'silly!',
    'I\'d say ask Monika, but she\'s busy being ~~a meanie~~ an amazing club president!',
    'I\'d say ask Yuri, but she\'s a little shy at the moment.',
    'I\'d say ask Natsuki, but she\'s busy baking some cookies for ~~me to steal~~ the club!',
    'You\'ve got a better chance of having a happy ending in DDLC! Ehehe...~',
    'Not really.',
    'J-Just a little bit!',
];

const headpatResponses = [
    'Hehehe!~', 'Just don\'t mess up my bow!',
    'S-stop being so silly! :blush:',
    'Well, my hair\'s already pretty messy, so I don\'t see an issue!',
    'Hehehe! Thank you!',
];

const alcohol = /^(🍺|🍻|🍷|🍸|🍹|🍶|🥃|🍾)$/;
const baby = /^(🍼|🍭)$/;
const bowl = /^(🥣)$/;
const birthday = /^(🎂)$/;
const bread = /^(🍞|🥖)$/;
const burger = /^(🍔)$/;
const butter = /^(🧈)$/;
const canned = /^(🥫)$/;
const chocolate = /^(🍫)$/;
const coffee = /^(☕)$/;
const cold = /^(🍧|🍨|🍦)$/;
const cold_drink = /^(🥤|🧃)$/;
const cookie = /^(🍪)$/;
const cooking = /^(🍳)$/;
const croissant = /^(🥐)$/;
const cupcake = /^(🧁)$/;
const egg = /^(🥚)$/;
const eggplant = /^(🍆)$/;
const falafel = /^(🧆)$/;
const ice = /^(🧊)$/;
const japanese = /^(🍣|🍱|🍛|🍙|🍚|🍘|🍜|🍢|🍡|🧋|🍥|🍲)$/;
const knife = /^(🔪)$/;
const meat = /^(🍗|🍖|🍤|🌭|🥓|🥘|🥙|🥩)$/;
const mexican = /^(🌮|🌯)$/;
const milk = /^(🥛)$/;
const nuts = /^(🌰|🥜)$/;
const pasteries = /^(🥯|🥨)$/;
const peach = /^(🍑)$/;
const pepper = /^(🌶️|🌶)$/s;
const pen = /^(🖊️)$/;
const pizza = /^(🍕)$/;
const popcorn = /^(🍿)$/;
const salt = /^(🧂)$/;
const sandwhich = /^(🥪)$/;
const silverware = /^(🍴|🍽️|🥄|🥢)$/;
const sweets = /^(🍰|🍮|🍬|🍫|🍩|🥮|🥧)$/;
const takeout = /^(🥡)$/;
const tea = /^(🍵)$/;
const waffle = /^(🧇)$/;
const wine = /^(🍷)$/;
const misc = /^(🍏|🍎|🫐|🫒|🫑|🫓|🫔|🥘|🫕|🍤|🧋|🦪|🍐|🍊|🍋|🍌|🍉|🍇|🍓|🍈|🍒|🍑|🥭|🍍|🥥|🥝|🍅|🍆|🥑|🥦|🥬|🥒|🌶️|🌶|🌽|🥕|🧅|🧄|🥔|🍠|🥐|🥯|🍞|🥖|🥨|🧀|🥚|🍳|🥞|🧇|🥓|🥩|🍗|🍖|🌭|🍔|🍟|🍕|🥪|🧆|🥙|🌮|🌯|🥗|🥘|🥫|🍝|🍜|🍲|🍛|🍣|🍱|🥟|🍤|🍙|🍚|🍘|🍥|🥠|🥮|🍢|🍡|🍧|🍨|🍦|🥧|🧁|🍰|🎂|🍮|🍭|🍬|🍫|🍿|🍩|🍪|🌰|🥜|🍯|🧈|🥛|🍼|☕|🍵|🧉|🥤|🧃|🧊|🍶|🍺|🍻|🥂|🍷|🥃|🍸|🍹|🍾|🍽️|🥄|🍴|🥣|🥡|🥢|🧂)$/;

function feed(text) {
    const arr = [];
    const date = new Date();
    if (!text) {
        arr.push('nothing');
    }
    else if (alcohol.test(text)) {
        arr.push('alcohol');
    }
    else if (bowl.test(text)) {
        arr.push('bowl');
    }
    else if (birthday.test(text)) {
        if (date.getDate() === 22 && date.getMonth() === 8) {
            arr.push('birthday');
        }
        else {
            arr.push('birthday_not');
        }
    }
    else if (baby.test(text)) {
        arr.push('baby');
    }
    else if (bread.test(text)) {
        arr.push('bread');
    }
    else if (burger.test(text)) {
        arr.push('burger');
    }
    else if (butter.test(text)) {
        arr.push('butter');
    }
    else if (canned.test(text)) {
        arr.push('canned');
    }
    else if (chocolate.test(text)) {
        arr.push('chocolate');
    }
    else if (coffee.test(text)) {
        arr.push('coffee');
    }
    else if (cold.test(text)) {
        arr.push('cold');
    }
    else if (cold_drink.test(text)) {
        arr.push('cold_drink');
    }
    else if (cookie.test(text)) {
        arr.push('cookie');
    }
    else if (cooking.test(text)) {
        arr.push('cooking');
    }
    else if (croissant.test(text)) {
        arr.push('croissant');
    }
    else if (cupcake.test(text)) {
        arr.push('cupcake');
    }
    else if (egg.test(text)) {
        arr.push('egg');
    }
    else if (eggplant.test(text)) {
        arr.push('eggplant');
    }
    else if (falafel.test(text)) {
        arr.push('falafel');
    }
    else if (ice.test(text)) {
        arr.push('ice');
    }
    else if (japanese.test(text)) {
        arr.push('japanese');
    }
    else if (knife.test(text)) {
        arr.push('knife');
    }
    else if (meat.test(text)) {
        arr.push('meat');
    }
    else if (mexican.test(text)) {
        arr.push('mexican');
    }
    else if (milk.test(text)) {
        arr.push('milk');
    }
    else if (nuts.test(text)) {
        arr.push('nuts');
    }
    else if (pasteries.test(text)) {
        arr.push('pasteries');
    }
    else if (peach.test(text)) {
        arr.push('peach');
    }
    else if (pepper.test(text)) {
        arr.push('pepper');
    }
    else if (pen.test(text)) {
        arr.push('pepper');
    }
    else if (pizza.test(text)) {
        arr.push('pizza');
    }
    else if (popcorn.test(text)) {
        arr.push('popcorn');
    }
    else if (salt.test(text)) {
        arr.push('salt');
    }
    else if (sandwhich.test(text)) {
        arr.push('sandwhich');
    }
    else if (silverware.test(text)) {
        arr.push('silverware');
    }
    else if (sweets.test(text)) {
        arr.push('sweets');
    }
    else if (takeout.test(text)) {
        arr.push('takeout');
    }
    else if (tea.test(text)) {
        arr.push('tea');
    }
    else if (waffle.test(text)) {
        arr.push('waffle');
    }
    else if (wine.test(text)) {
        arr.push('wine');
    }
    else if (misc.test(text)) {
        arr.push('misc');
    }
    else {
        arr.push('bad_food');
    }
    return arr;
}

const foodResponses = {
    nothing: 'You wanna feed me something? I\'m open for anything!',
    cookie:'A cookie?? Yummy! Thank you so much!',
    cupcake:'*omnomnom* Ooo! This tastes just like Natsuki\'s cupcakes!',
    japanese: 'Oooo! Japanese food! Reminds me of home!',
    takeout:'Yay we\'re getting take out! I love watching a movie with some warm takeout!',
    pizza:'I love pizza! Thanks!',
    burger:'Mmmmm! Burgers are delicious!',
    falafel:'*om nom nom* It\'s salty, but I like it.',
    ice:'Puts it in mouth  Oww.. It\'s too cold and it tastes like water!',
    cold:'AHH! Brain freeze!!',
    cold_drink:'Sip, sip, hooray!',
    canned:'Canned food? Aww but I don\'t have a can opener.',
    alcohol:'H-Hey! I\'m too young for that!',
    coffee:'Ah, the delicious beverage known as coffee! Where would I be without thee?',
    tea:'How could I refuse a hot cup of tea? Thank you!',
    bread:'I mean, I suppose I could survive off of plain bread...',
    sandwhich:'Oh! is this for me? thanks I love sandwiches!',
    waffle:'I\'ve waffled before. I\'ll waffle again!!',
    croissant:'yay! I love having these for breakfast!',
    pasteries:[
        'Mmm this is really yummy but I bet Natsuki can make better ones!',
        'Ooooo! I love these! thanks!',
    ],
    butter:'Oooo, Butter! But... how am I supposed to eat it without some toast?',
    pepper:'***OWOWOWOWHOTHOTHOTHOT!!!***',
    cooking:'I made eggs and toast!',
    mexican:'Ole!',
    sweets:'Sweets! My one, true weakness!! *omnomnomnomnom*',
    peanuts:'Ooo! peanuts! they always make me remember when MC and I went to the fair as kids!',
    popcorn:'*crunch crunch crunch*',
    baby:'Hey! I\'m not a baby!',
    egg:'I feel like I should cook this, first...',
    salt:'Sugar yay! ugh ptoo ugh yuck! this is salt isn\'t it? why would you do that meanie!',
    silverware:'I didn\'t know you could eat silverware!',
    bowl:'Hey! That bowl\'s empty you meanie!',
    milk:'Ah, a nice, cold glass of milk is always welcoming!',
    birthday:'It\'s not my birthday, but I accept!',
    birthday_not:[
        'om nom nom OOOO! Monika\'s birthday cake tastes incredibly delicious!!! :star_struck:',
        'Oooo! Thanks I\'ll have piece of Monika\'s birthday cake! And I\'ll have another piece, of the one that Natsuki made eheheh~',
    ],
    misc:'*om nom nom* Thank you! That was delicious! :grin:',
    bad_food: 'Ptoo ptoo! This isn\'t food, you meanie!'
}

function handleFeed(opt) {
    const item = opt[0]
    
    if (item.isArray()) {
      return item.random();
    }
    else return item;
}

const hang_reg = /(^|[^A-Za-z])h(a|u)ng(s|ing|ed)?([^A-Za-z]|$)/
const kill_reg = /(^|[^A-Za-z])kill(s|ing|ed)?([^A-Za-z]|$)/
const hangKillSelf_reg = /(^|[^A-Za-z])(h(a|u)ng(s|ing|ed)?|kill(s|ing|ed)?) *(my)?self([^A-Za-z]|$)/
const bully_reg = /(^|[^A-Za-z])(mean(y|ies?)|bull(y|i|ies))([^A-Za-z]|$)/
const breakfast_reg = /(^|[^A-Za-z])breakfasts?([^A-Za-z]|$)/
const cinnamonBun_reg = /(^|[^A-Za-z])cinnamon *bun([^A-Za-z]|$)/

function trigger(text) {
    if (hang_reg.test(text)) {
        return [
            ':unamused:',
            'Hey! Stop acting like a meanie!',
            ':rolling_eyes:',
            'I thought we were better than this...',
            'Ha, ha. Funny. Can you sense my sarcasm?',
        ].random();
    }
    else if (kill_reg.test(text)) {
        return 'Can we change the topic to something more wholesome please?';
    }
    else if (hangKillSelf_reg.test(text)) {
        return [
            'H-Hey! There\'s no need to do that, I promise you! Someone out there still wants you to keep going, I\'m sure!',
            'If I\'m reading this right, then it sounds like you\'re thinking of doing something terrible. Please, don\'t do it!',
            'Listen, I\'ve been where you are. You\'ll get through it, I promise.',
            'Here, this is the National Suicide Prevention Lifeline. They\'ll be able to help you, I promise! 1-800-273-8255',
        ].random();
    }
    else if (breakfast_reg.test(text)) {
        return 'I want breakfast.';
    }
    else if (cinnamonBun_reg.test(text)) {
        return [
            'Did someone mention me?',
            'You rang?',
            'Are you guys talking about me?',
        ].random();
    }
    else if (bully_reg.test(text)) {
      return [
            'Do we have a meanie in the server? If so, please stop.',
            'Cease your bulli, you meanie!',
            'Boo! You meanie...',
        ].random();
    } 
    else return 'None'
}

// Functions
exports.handleFeed = handleFeed;
exports.feed = feed;
exports.trigger = trigger

// Data
exports.poems = poems;
exports.jokes = jokes;
exports.quotes = quotes;
exports.swearWords = swearWords;
exports.tickle = tickle;
exports.askResponses = askResponses;
exports.headpatResponses = headpatResponses;
exports.commands = commands;
// I think I've  lost my mind