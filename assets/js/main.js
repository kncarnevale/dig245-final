
/* javascript */
var simba = "You are known as an adventurer. You have an introverted side, and may even have to step out of the spotlight to recharge every once in awhile. You want to go beyond the limits of your life and what is expected of you. You usually have a small friend group surrounding you and encouraging you. You are very loyal and will not hesitate to protect the people you love.";
var timon = "You are known as an entertainer: energetic and spontaneous. You can be a bit of a ham, but your enthusiasm is contagious to everyone around you. You love the spotlight, but you use it to encourage others as well";
var scar = "You are known as an architect: ambitious, cunning, and always have a plan for everything. You prefer scheming and analytical thinking over social gossip. You are a bit mysterious as well, making it hard for even your closest friends and family to read you.";
var sarabi = "You are known as a defender: reserved and protective. You are kind, always putting the needs of others before your own. You like to help as many people as you can.";
var nala = "You are a devoted friend, partner, and/or parent. You are sociable and a good leader. You also always want the best for the people you care about.";
var pumbaa = "You are a social person that loves to spend time with their friends. You have a great sense of humor and love to spread your laugher to the world. You would prefer to do this rather than philosophizing about the world and its problems.";
var zazu = "You are known as an executive. You live for administrative work and love managing people and things. You hold order and tradition close to your heart, which makes you a great adviser, but sometimes your opinions are a little outdated.";
var rafiki = "You are introverted and mystical, and would prefer to be by yourself rather than hanging out with others. You also have a strong code of ethics and always advuse your close friends to do the right thing.";
var mufasa = "You are known as a commander: driven, determined, and ruthless. You were born to lead with your confidence and charisma. You find happiness in your achievements, for Mufasa this was in his legacy.";

var imgArray = [];
imgArray[0] = new Image();
// imgArray[0].src = '../assets/img/simba.webp';

// imgArray[1] = new Image();
// imgArray[1].src = '../assets/img/timon.webp';
//
// imgArray[2] = new Image();
// imgArray[2].src = '../assets/img/scar.webp';
//
// imgArray[3] = new Image();
// imgArray[3].src = '../assets/img/sarabi.png';
//
// imgArray[4] = new Image();
// imgArray[4].src = '../assets/img/nala.webp';
//
// imgArray[5] = new Image();
// imgArray[5].src = '../assets/img/pumbaa.webp';
//
// imgArray[6] = new Image();
// imgArray[6].src = '../assets/img/zazu.webp';
//
// imgArray[7] = new Image();
// imgArray[7].src = '../assets/img/rafiki.webp';
//
// imgArray[8] = new Image();
// imgArray[8].src = '../assets/img/mufasa.webp';

var characters = ["Simba", "Timon","Scar","Sarabi","Nala","Pumbaa","Zazu","Rafiki","Mufasa"];
var descriptions = [simba, timon, scar,sarabi,nala,pumbaa,zazu,rafiki,mufasa];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

var index = 0;
var currentImage = imgArray[index];
var currentCharacter = characters[index];
var currentDescription = descriptions[index];

function getResults(){
  index = getRandomInt(0,9);
  // currentImage = imageArray[index];
  currentCharacter = characters[index];
  currentDescription = descriptions[index];
  document.getElementById("charID").innerHTML= currentCharacter;
  document.getElementById("descriptID").innerHTML= currentDescription;
};

//fix passing value
function yesOrNo(){
  var value = $("input[type=radio][name=accuracy]:checked").val();
  if(value != null){
    document.getElementById("resultsButton").onclick = location.href='conclusion.html';
  }
  localStorage.setItem('greeting', value);
};

function test(){
  const greetingValue = localStorage.getItem('greeting');

  document.getElementById("demo").innerHTML+= greetingValue;
}

//validate buttons before pressing submit
var q1 = $('input[name=answer1]');
var q2 = $('input[name=answer2]');
function checkRadioButtonsForQuiz() {
  if ($(q1).is(':checked') && $(q2).is(':checked')) {
    document.getElementById("quizButton").onclick = location.href='results.html';
  }

};
