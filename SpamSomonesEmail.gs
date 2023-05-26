// This bot will send annoying quotes to the recipient. NOTE: These emails will be sent by your own email account so beware. It will be able to sent around 500 emails in 5 minutes. Once you send 1000, you won't be able to send more until the next day. This bot will be able to get through spam filters
// NOTE: This is intended for educational purposes only! Spamming people's email is illegal.
function getSentenceWithTenWords() {
  var words = ["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog","sky","fart","who","why","sky",,"long","how","chocolate","dark","while","grass","dirt","worms","hello","how is it going?","name","weather","cloudy","hi", "Do not go where the path may lead, go instead where there is no path and leave a trail.", "Whoever is happy will make others happy too.", "It is during our darkest moments that we must focus to see the light.", "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Tell me and I forget. Teach me and I remember. Involve me and I learn.",  "The future belongs to those who believe in the beauty of their dreams.", "Don't judge each day by the harvest you reap but by the seeds that you plant.", "Always remember that you are absolutely unique. Just like everyone else.", "When you reach the end of your rope, tie a knot in it and hang on.", "Spread love everywhere you go. Let no one ever come to you without leaving happier.", "The greatest glory in living lies not in never falling, but in rising every time we fall.","The way to get started is to quit talking and begin doing.","So we beat on, boats against the current, borne back ceaselessly into the past.", "post","past","hungery","how","going","french","english","spanish","lovely","lol","funny","now","get","here","banana","quit","do ","now","apple","fruit","how","why","tell","me","I","apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "mango", "nectarine", "orange", "palm", "papaya","the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog","sky","fart","who","why","sky",,"long","how","chocolate","dark","while","grass","dirt","worms","hello","how is it going?","name","weather","cloudy","hi", "Do not go where the path may lead, go instead where there is no path and leave a trail.", "Whoever is happy will make others happy too.", "It is during our darkest moments that we must focus to see the light.", "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Tell me and I forget. Teach me and I remember. Involve me and I learn.",  "The future belongs to those who believe in the beauty of their dreams.", "Don't judge each day by the harvest you reap but by the seeds that you plant.", "Always remember that you are absolutely unique. Just like everyone else.", "When you reach the end of your rope, tie a knot in it and hang on.", "Spread love everywhere you go. Let no one ever come to you without leaving happier.", "The greatest glory in living lies not in never falling, but in rising every time we fall.","The way to get started is to quit talking and begin doing.","So we beat on, boats against the current, borne back ceaselessly into the past.", "post","past","hungery","how","going","french","english","spanish","lovely","lol","funny","now","get","here","banana","quit","do ","now","apple","fruit","how","why","tell","me","I"]
  var sentence = "";

  for (var i = 0; i < 20; i++) {
    sentence += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return sentence.trim();
}


function getRandomWord() 
{
  var words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "mango", "nectarine", "orange", "palm", "papaya","the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog","sky","fart","who","why","sky",,"long","how","chocolate","dark","while","grass","dirt","worms","hello","how is it going?","name","weather","cloudy","hi", "Do not go where the path may lead, go instead where there is no path and leave a trail.", "Whoever is happy will make others happy too.", "It is during our darkest moments that we must focus to see the light.", "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Tell me and I forget. Teach me and I remember. Involve me and I learn.",  "The future belongs to those who believe in the beauty of their dreams.", "Don't judge each day by the harvest you reap but by the seeds that you plant.", "Always remember that you are absolutely unique. Just like everyone else.", "When you reach the end of your rope, tie a knot in it and hang on.", "Spread love everywhere you go. Let no one ever come to you without leaving happier.", "The greatest glory in living lies not in never falling, but in rising every time we fall.","The way to get started is to quit talking and begin doing.","So we beat on, boats against the current, borne back ceaselessly into the past.", "post","past","hungery","how","going","french","english","spanish","lovely","lol","funny","now","get","here","banana","quit","do ","now","apple","fruit","how","why","tell","me","I"]
  return words[Math.floor(Math.random() * words.length)]; 
}


var EamilSent = 0

function OperationFart20()
{
  while (EamilSent < 500)
  {
    getSentenceWithTenWords()
    getRandomWord() 
    var Sentence = getSentenceWithTenWords()
    var Word = getRandomWord()
    console.log(getSentenceWithTenWords())
    console.log(getRandomWord())
    GmailApp.sendEmail("Email Here", Word, Sentence)
    EamilSent = EamilSent + 1
    Logger.log(EamilSent)
  }
}
