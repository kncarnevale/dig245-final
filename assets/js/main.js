
/* javascript */
var simba = "You are known as an adventurer. You have an introverted side, and may even have to step out of the spotlight to recharge every once in awhile. You want to go beyond the limits of what is expected of you. You usually have a small friend group surrounding and encouraging you. You are very loyal and will not hesitate to protect the people you love.";
var timon = "You are known as an entertainer: energetic and spontaneous. You can be a bit of a ham, but your enthusiasm is contagious to everyone around you. You love the spotlight, but you use it to encourage others as well";
var scar = "You are known as an architect: ambitious, cunning, and always have a plan for everything. You prefer scheming and analytical thinking over social gossip. You are a bit mysterious as well, making it hard for even your closest friends and family to read you.";
var sarabi = "You are known as a defender: reserved and protective. You are kind, always putting the needs of others before your own. You like to help as many people as you can.";
var nala = "You are a devoted friend, partner, and/or parent. You are sociable and a good leader. You also always want the best for the people you care about.";
var pumbaa = "You are a social person that loves to spend time with their friends. You have a great sense of humor and love to spread your laugher to the world. You would prefer to do this rather than philosophizing about the world and its problems.";
var zazu = "You are known as an executive. You live for administrative work and love managing people and things. You hold order and tradition close to your heart, which makes you a great adviser, but sometimes your opinions are a little outdated.";
var rafiki = "You are introverted and mystical, and would prefer to be by yourself rather than hanging out with others. You also have a strong code of ethics and always advuse your close friends to do the right thing.";
var mufasa = "You are known as a commander: driven, determined, and ruthless. You were born to lead with your confidence and charisma. You find happiness in your achievements, for Mufasa this was in his legacy.";

var imgArray = [];
imgArray.push('assets/img/simba.webp');
imgArray.push('assets/img/timon.webp');
imgArray.push('assets/img/scar.webp');
imgArray.push('assets/img/sarabi.png');
imgArray.push('assets/img/nala.webp');
imgArray.push('assets/img/pumbaa.webp');
imgArray.push('assets/img/zazu.webp');
imgArray.push('assets/img/rafiki.webp');
imgArray.push('assets/img/mufasa.webp');


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
var conclusionTextYes = "Clicked Yes";
var conclusionTextNo = "Clicked No";
var countYes = localStorage.setItem('countYes', "0");
var countNo = localStorage.setItem('countNo', "0");

function makePieChart(countYes,countNo){
  var pie = new ej.charts.AccumulationChart({
            //Initializing Series
            series: [
                {
                    dataSource: [
                        { 'x': 'Yes', y: countYes },
                        { 'x': 'No', y: countNo }
                    ],
                    dataLabel: {
                        visible: true,
                        position: 'Inside',
                    },
                    xName: 'x',
                    yName: 'y'
                }
            ],
        });
        pie.appendTo('#container');
}




function getResults(){
  index = getRandomInt(0,9);
  currentImage = imgArray[index];
  currentCharacter = characters[index];
  currentDescription = descriptions[index];
  $("#imgID").attr('src', currentImage);
  document.getElementById("charID").innerHTML= currentCharacter;
  document.getElementById("descriptID").innerHTML= currentDescription;
};


function makeConclusionsPage(){
  var valueYes = "";
  var valueNo = "";
  var stringToIntYes = 0;
  var stringToIntNo = 0;
  var value = $("input[type=radio][name=accuracy]:checked").val();

  document.getElementById("header").innerHTML= "Conclusion Page";
  document.getElementById("charID").remove();
  document.getElementById("link").remove();
  document.getElementById("accuracyQ").remove();
  document.getElementById("imgID").remove();

  if(value == "yes"){
    document.body.innerHTML = document.body.innerHTML.replace(currentDescription, conclusionTextYes);
    valueYes = localStorage.getItem('countYes');
    stringToIntYes = parseInt(valueYes);
    stringToIntYes++;

    valueNo = localStorage.getItem('countNo');
    stringToIntNo = parseInt(valueNo);

    makePieChart(stringToIntYes,stringToIntNo);
    localStorage.clear();
    localStorage.setItem('countYes', "stringToIntYes");
    localStorage.setItem('countNo', "stringToIntNo");
  }else{
    document.body.innerHTML = document.body.innerHTML.replace(currentDescription, conclusionTextNo);
    valueNo = localStorage.getItem('countNo');
    stringToIntNo = parseInt(valueNo);
    stringToIntNo++;

    valueYes = localStorage.getItem('countYes');
    stringToIntYes = parseInt(valueYes);

    makePieChart(stringToIntYes,stringToIntNo);
    localStorage.clear();
    localStorage.setItem('countYes', "stringToIntYes");
    localStorage.setItem('countNo', "stringToIntNo");
  }


};


//validate buttons before pressing submit
var q1 = $('input[name=answer1]');
var q2 = $('input[name=answer2]');
var q3 = $('input[name=answer3]');
var q4 = $('input[name=answer4]');
var q5 = $('input[name=answer5]');
var q6 = $('input[name=answer6]');
var q7 = $('input[name=answer7]');
var q8 = $('input[name=answer8]');
var q9 = $('input[name=answer9]');
var q10 = $('input[name=answer10]');
function checkRadioButtonsForQuiz() {
  if ($(q1).is(':checked') && $(q2).is(':checked') && $(q3).is(':checked')&& $(q4).is(':checked')&& $(q5).is(':checked')&& $(q6).is(':checked')&& $(q7).is(':checked')&& $(q8).is(':checked')&& $(q9).is(':checked')&& $(q10).is(':checked')) {
    document.getElementById("quizButton").onclick = location.href='results.html';
  }

};
