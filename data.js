'use strict';

require('./misc/functions')

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
    },],
};

const alcohol = /^(🍺|🍻|🍷|🍸|🍹|🍶|🥃|🍾)$/
const baby = /^(🍼|🍭)$/
const bowl = /^(🥣)$/
const birthday = /^(🎂)$/
const bread = /^(🍞|🥖)$/
const burger = /^(🍔)$/
const butter = /^(🧈)$/
const canned = /^(🥫)$/
const chocolate = /^(🍫)$/
const coffee = /^(☕)$/
const cold = /^(🍧|🍨|🍦)$/
const cold_drink = /^(🥤|🧃)$/
const cookie = /^(🍪)$/
const cooking = /^(🍳)$/
const croissant = /^(🥐)$/
const cupcake = /^(🧁)$/
const egg = /^(🥚)$/
const eggplant = /^(🍆)$/
const falafel = /^(🧆)$/
const ice = /^(🧊)$/
const japanese = /^(🍣|🍱|🍛|🍙|🍚|🍘|🍜|🍢|🍡|🧋|🍥|🍲)$/
const knife = /^(🔪)$/
const meat = /^(🍗|🍖|🍤|🌭|🥓|🥘|🥙|🥩)$/
const mexican = /^(🌮|🌯)$/
const milk = /^(🥛)$/
const nuts = /^(🌰|🥜)$/
const pasteries = /^(🥯|🥨)$/
const peach = /^(🍑)$/
const peanuts = /^(🥜)$/
const pepper = /^(🌶️|🌶)$/s
const pen = /^(🖊️)$/
const pizza = /^(🍕)$/
const popcorn = /^(🍿)$/
const salt = /^(🧂)$/
const sandwhich = /^(🥪)$/
const silverware = /^(🍴|🍽️|🥄|🥢)$/
const sweets = /^(🍰|🍮|🍬|🍫|🍩|🥮|🥧)$/
const takeout = /^(🥡)$/
const tea = /^(🍵)$/
const waffle = /^(🧇)$/
const wine = /^(🍷)$/
const misc = /^(🍏|🍎|🫐|🫒|🫑|🫓|🫔|🥘|🫕|🍤|🧋|🦪|🍐|🍊|🍋|🍌|🍉|🍇|🍓|🍈|🍒|🍑|🥭|🍍|🥥|🥝|🍅|🍆|🥑|🥦|🥬|🥒|🌶️|🌶|🌽|🥕|🧅|🧄|🥔|🍠|🥐|🥯|🍞|🥖|🥨|🧀|🥚|🍳|🥞|🧇|🥓|🥩|🍗|🍖|🌭|🍔|🍟|🍕|🥪|🧆|🥙|🌮|🌯|🥗|🥘|🥫|🍝|🍜|🍲|🍛|🍣|🍱|🥟|🍤|🍙|🍚|🍘|🍥|🥠|🥮|🍢|🍡|🍧|🍨|🍦|🥧|🧁|🍰|🎂|🍮|🍭|🍬|🍫|🍿|🍩|🍪|🌰|🥜|🍯|🧈|🥛|🍼|☕|🍵|🧉|🥤|🧃|🧊|🍶|🍺|🍻|🥂|🍷|🥃|🍸|🍹|🍾|🍽️|🥄|🍴|🥣|🥡|🥢|🧂)$/

function feed(text) {
    const arr = [];
    const date = new Date();
    if (!text) {
        arr.push('nothing')
    }
    else if (alcohol.test(text)) {
        arr.push('alcohol')
    } else if (bowl.test(text)) {
        arr.push('bowl')
    } else if (birthday.test(text)) {
        if (date.getDate() === 22 && date.getMonth() === 8) {
            arr.push('birthday')
        } else {
            arr.push('birthday_not')
        }
    } else if (baby.test(text)) {
        arr.push('baby')
    } else if (bread.test(text)) {
        arr.push('bread')
    } else if (burger.test(text)) {
        arr.push('burger')
    } else if (butter.test(text)) {
        arr.push('butter')
    } else if (canned.test(text)) {
        arr.push('canned')
    } else if (chocolate.test(text)) {
        arr.push('chocolate')
    } else if (coffee.test(text)) {
        arr.push('coffee')
    } else if (cold.test(text)) {
        arr.push('cold')
    } else if (cold_drink.test(text)) {
        arr.push('cold_drink')
    } else if (cookie.test(text)) {
        arr.push('cookie')
    } else if (cooking.test(text)) {
        arr.push('cooking')
    } else if (croissant.test(text)) {
        arr.push('croissant')
    } else if (cupcake.test(text)) {
        arr.push('cupcake')
    } else if (egg.test(text)) {
        arr.push('egg')
    } else if (eggplant.test(text)) {
        arr.push('eggplant')
    } else if (falafel.test(text)) {
        arr.push('falafel')
    } else if (ice.test(text)) {
        arr.push('ice')
    } else if (japanese.test(text)) {
        arr.push('japanese')
    } else if (knife.test(text)) {
        arr.push('knife')
    } else if (meat.test(text)) {
        arr.push('meat')
    } else if (mexican.test(text)) {
        arr.push('mexican')
    } else if (milk.test(text)) {
        arr.push('milk')
    } else if (nuts.test(text)) {
        arr.push('nuts')
    } else if (pasteries.test(text)) {
        arr.push('pasteries')
    } else if (peach.test(text)) {
        arr.push('peach')
    } else if (pepper.test(text)) {
        arr.push('pepper')
    } else if (pen.test(text)) {
        arr.push('pepper')
    } else if (pizza.test(text)) {
        arr.push('pizza')
    } else if (popcorn.test(text)) {
        arr.push('popcorn')
    } else if (salt.test(text)) {
        arr.push('salt')
    } else if (sandwhich.test(text)) {
        arr.push('sandwhich')
    } else if (silverware.test(text)) {
        arr.push('silverware')
    } else if (sweets.test(text)) {
        arr.push('sweets')
    } else if (takeout.test(text)) {
        arr.push('takeout')
    } else if (tea.test(text)) {
        arr.push('tea')
    } else if (waffle.test(text)) {
        arr.push('waffle')
    } else if (wine.test(text)) {
        arr.push('wine')
    } else if (misc.test(text)) {
        arr.push('misc')
    } else {
        arr.push('bad_food')
    }
    return arr
}

function handleFeed(opt) {
    if (opt.includes('nothing')) return 'You wanna feed me something? I\'m open for anything!';
    if (opt.includes('cookie')) {
        return 'A cookie?? Yummy! Thank you so much!';
    } else if (opt.includes('cupcake')) {
        return '*omnomnom* Ooo! This tastes just like Natsuki\'s cupcakes!';
    } else if (opt.includes('japanese')) {
        return 'Oooo! Japanese food! Reminds me of home!';
    } else if (opt.includes('takeout')) {
        return 'Yay we\'re getting take out! I love watching a movie with some warm takeout!';
    } else if (opt.includes('pizza')) {
        return 'I love pizza! Thanks!';
    } else if (opt.includes('burger')) {
        return 'Mmmmm! Burgers are delicious!';
    } else if (opt.includes('falafel')) {
        return '*om nom nom* It\'s salty, but I like it.';
    } else if (opt.includes('ice')) {
        return 'Puts it in mouth  Oww.. It\'s too cold and it tastes like water!';
    } else if (opt.includes('cold')) {
        return 'AHH! Brain freeze!!';
    } else if (opt.includes('cold_drink')) {
        return 'Sip, sip, hooray!';
    } else if (opt.includes('canned')) {
        return 'Canned food? Aww but I don\'t have a can opener.';
    } else if (opt.includes('alcohol')) {
        return 'H-Hey! I\'m too young for that!';
    } else if (opt.includes('coffee')) {
        return 'Ah, the delicious beverage known as coffee! Where would I be without thee?';
    } else if (opt.includes('tea')) {
        return 'How could I refuse a hot cup of tea? Thank you!';
    } else if (opt.includes('bread')) {
        return 'I mean, I suppose I could survive off of plain bread...';
    } else if (opt.includes('sandwich')) {
        return 'Oh! is this for me? thanks I love sandwiches!';
    } else if (opt.includes('waffle')) {
        return 'I\'ve waffled before. I\'ll waffle again!!';
    } else if (opt.includes('croissant')) {
        return 'yay! I love having these for breakfast!';
    } else if (opt.includes('pastries')) {
        return [
            'Mmm this is really yummy but I bet Natsuki can make better ones!',
            'Ooooo! I love these! thanks!',
        ].random()
    } else if (opt.includes('butter')) {
        return 'Oooo, Butter! But... how am I supposed to eat it without some toast?';
    } else if (opt.includes('pepper')) {
        return '***OWOWOWOWHOTHOTHOTHOT!!!***';
    } else if (opt.includes('cooking')) {
        return 'I made eggs and toast!';
    } else if (opt.includes('mexican')) {
        return 'Ole!';
    } else if (opt.includes('sweets')) {
        return 'Sweets! My one, true weakness!! *omnomnomnomnom*';
    } else if (opt.includes('peanuts')) {
        return 'Ooo! peanuts! they always make me remember when MC and I went to the fair as kids!';
    } else if (opt.includes('popcorn')) {
        return '*crunch crunch crunch*';
    } else if (opt.includes('baby')) {
        return 'Hey! I\'m not a baby!';
    } else if (opt.includes('egg')) {
        return 'I feel like I should cook this, first...';
    } else if (opt.includes('salt')) {
        return 'Sugar yay! ugh ptoo ugh yuck! this is salt isn\'t it? why would you do that meanie!';
    } else if (opt.includes('silverware')) {
        return 'I didn\'t know you could eat silverware!';
    } else if (opt.includes('bowl')) {
        return 'Hey! That bowl\'s empty you meanie!';
    } else if (opt.includes('milk')) {
        return 'Ah, a nice, cold glass of milk is always welcoming!';
    } else if (opt.includes('birthday_not')) {
        return 'It\'s not my birthday, but I accept!';
    } else if (opt.includes('birthday')) {
        return [
            'om nom nom OOOO! Monika\'s birthday cake tastes incredibly delicious!!! :star_struck:',
            'Oooo! Thanks I\'ll have piece of Monika\'s birthday cake! And I\'ll have another piece, of the one that Natsuki made eheheh~',
        ].random()
    } else if (opt.includes('misc')) {
        return '*om nom nom* Thank you! That was delicious! :grin:';
    } else if (opt.includes('bad_food')) {
        return 'Ptoo ptoo! This isn\'t food, you meanie!'
    }
}


exports.handleFeed = handleFeed;
exports.feed = feed;
exports.poems = poems;

// I think I've  lost my mind