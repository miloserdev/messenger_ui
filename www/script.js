var html = document.querySelector('html');

function ress() {
  html.style.width = window.innerWidth + 'px';
  html.style.height = window.innerHeight + 'px';
  console.log('resized');
}

//document.addEventListener("deviceready", running, false);

var chats = [
  {'with': "upliftedly", "avatar": "./images/1.jfif", 'raw': {'message': 'avenging fallacy atrip advisor puebloization unvictualed bicarbureted sepic hasenpfeffer universalness adventureful thoracocentesis pyritization yagua transocean linge notifier Leptolepis Christdom impressible vaire wakan torturously wrungness', 'time': 11111}},
  {'with': "sora", "avatar": "./images/2.jfif", 'raw': {'message': 'inspirable costopulmonary xylorcin Dantomania extrafocal sycamore autostandardization sleeper respire guinea adeptness pity helpingly Lyonetia monomolybdate lascar grizzler thecla frequentative soonish decalcify Papilioninae preseparation dilative', 'time': 11111}},
  {'with': "boltage", "avatar": "./images/3.jfif", 'raw': {'message': 'procaine Kiplingism nephelognosy swimming benzonaphthol drochuil zoologicoarchaeologist ropishness autotelegraph bespit unrefunding giggling ketose cheerless semibody diplosphene aknee monotrematous kamikaze Vipera averruncation reposedness outscour nonevolutionary', 'time': 11111}},
  {'with': "cacodemon", "avatar": "./images/4.jfif", 'raw': {'message': 'misexplication batrachiate misandry alone overgodliness overthrifty shivey decisively lachrymal piazzaed vatmaking faveolate unrelinquishable dronepipe transilluminate triphylite relaxable mitosome bashawship Euthyneura haberdash enrockment basiotripsy unleisuredness', 'time': 11111}},
  {'with': "oneness", "avatar": "./images/5.jfif", 'raw': {'message': 'spokesmanship trianthous befuddler shroudlike guydom demesman Laboulbeniaceae adversative estimable Frontignan unclerkly scuppet hauberk Eremurus reinsphere Poales rawhider gorblimy envied applicable multivibrator distruster altruist filicite', 'time': 11111}},
  {'with': "inhumanism", "avatar": "./images/6.jfif", 'raw': {'message': 'cordialness fetal demitranslucence sewerless microcolon Puru Real chromocyte dermatoneurosis inexpansible vaalite summer knead plagiotropism paralambdacismus swordswoman nocktat unbedecked trepanize lipectomy predelay reinstauration renunciatory malnourished', 'time': 11111}},
  {'with': "reverse", "avatar": "./images/7.jfif", 'raw': {'message': 'miterflower iceless cerebra roit magnisonant smudgily requestion leucoplakia inebrious colorability Ranunculus seigneur bisischiadic vivary crepe wayworn ilicic inalterable sesquiquartal unmaidenlike unextinguished brotocrystal Rowland duennadom', 'time': 11111}},
  {'with': "scleroticotomy", "avatar": "./images/8.jfif", 'raw': {'message': 'yohimbinization disinvest mothership ramigerous falltime orvietite reflectometer tunester phosphine sulphmethemoglobin creatinephosphoric concretism ruthenate microseismometer obituary fractureproof tuboperitoneal phocaceous Cestodaria uncenter enfasten figural entreaty connotative', 'time': 11111}},
  {'with': "microspectroscope", "avatar": "./images/9.jfif", 'raw': {'message': 'epihydrinic cystoparalysis ivoriness unanimism ant indeficient Iberic halfway hyperspherical nonsuffrage punkwood Hydrocorisae galvanic Platycarya young auchenium belga chemist calcariform precis intermunicipal residential perspire misexecute', 'time': 11111}},
  {'with': "physiographical", "avatar": "./images/10.jfif", 'raw': {'message': 'unconstrainedly rhinocerine autocratrix osteomalacic unpervert inkhornize veinage archleader shellapple pyelitis Ree pteroylglutamic undigenous Maratist nonseclusion unexcused pennorth parchmenty inharmonious pessomancy paralysis dishorner glauconitization edgeless', 'time': 11111}},
  {'with': "hypogeiody", "avatar": "./images/11.jfif", 'raw': {'message': 'overshoulder prorestoration anconeous unmetered polyspermia improvable Krigia uncloakable spoilt shopbreaker Don portio sobbingly Podaliriidae snippet Valvata subchorioidal metallurgical melodically capernoited untreatably isopentane Australopithecinae guardstone', 'time': 11111}},
  {'with': "moosetongue", "avatar": "./images/12.jfif", 'raw': {'message': 'upswarm Trochelminthes chattermag corrigibly pareiasaurian autoinoculable loma decarchy scarcely divisively microcrystalloscopy metaphysician banty tragicize unadded significator Janghey uncandied procellariine mentum unbenevolent zoosporocyst anaerobic bocedization', 'time': 11111}},
  {'with': "unformalized", "avatar": "./images/13.jfif", 'raw': {'message': 'mort productiveness nonpromotion humble strychnia roughet tricarpellary disagreeability autoeducation turkis disselboom forkedly mockado micrologist esophagoplication organismal coelongated stonebiter gonopoietic cardigan deutoplasmic tempo carvestrene zucchini', 'time': 11111}},
  {'with': "elabrate", "avatar": "./images/14.jfif", 'raw': {'message': 'saddik extrinsicalness tricaudate lissencephalous shanty deculturate leptocephaloid jambstone infradiaphragmatic Champlain shopkeeperess daffish Phalacrocoracidae antiromanticism gateman unrevealable cold disulfonic acclimatization Arabella cingle wrapped hobbyhorsical panelling', 'time': 11111}},
  {'with': "dendroceratina", "avatar": "./images/15.jfif", 'raw': {'message': 'rentrant undersociety transcend turbotlike Massalia Mandaean quadriad overchant undesigningly tetratone pinkly lobstering nonevasive operetta defiant divisory pyretic semicomical whikerby bibliomane Pellaea uvitonic originate divulgatory', 'time': 11111}}
];

for (let [key, value] of Object.entries(chats)) {
  checkAndAddItem(value.with, value.message, value.avatar);
}


function addItem(name, message, avatarUrl='https://vk.com./images/camera_200.png') {
	var cl = document.getElementById('chatsList');
    cl.innerHTML += `
        <li class="chatElem" id="chatItem` + name +`">
            <div class="chatElemAvatar">
              <img width="60px" height="60px" loading="lazy" src="` + avatarUrl + `">
            </div>
            <div class="chatElemMainContainer">
                <div class="chatElemName">` + name + `</div>
                <div class="chatElemMessage">` + message + `</div>
            </div>
        </li>
        <div class="bss" style="margin-left: 20px;margin-right: 20px;height:0.1px;background: #ffffff26;align-self:center;"></div>`
}

function checkAndAddItem(name, message, avatarUrl='https://vk.com./images/camera_200.png') {
  var cl = document.getElementById('chatsList');
  if (cl.getElementsByTagName('li').namedItem("chatItem" + name) == null) {
    addItem(name, message, avatarUrl);
  } else {
    chatItemUpdate(name, message)
  }
}

function chatItemUpdate(item, message, isReaded=false) {
	//var itm = document.getElementById(item);
  var cl = document.getElementById('chatsList');
  var itm = cl.getElementsByTagName('li').namedItem("chatItem" + item);
	//itm.getElementsByClassName('chatElemAvatar')[0].getElementsByTagName('img')[0].src;
	itm.getElementsByClassName('chatElemMainContainer')[0]
	.getElementsByClassName('chatElemMessage')[0].innerText = message;
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searcher');
  filter = input.value.toUpperCase();
  ul = document.getElementById("chatsList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName('chatElemMainContainer')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

var isreloading = false;

document.getElementById('BottomMainRefresh').onclick = () => {
  if (!isreloading) {
    isreloading = true;
    $("#BottomMainRefresh").toggleClass("ll");
    //document.getElementsByClassName('listloader')[0].toggleAttribute('hidden');
    loadMessages().then(ur => {
      isreloading = false;
      console.log('all messages loaded');
      $("#BottomMainRefresh").toggleClass("ll");
      //document.getElementsByClassName('listloader')[0].toggleAttribute('hidden');
    });
  }
}

//var night = true;
//
//document.getElementById('BottomSettings').onclick = () => {
//  if (night) {
//    $('head').html($('head').html().replace('<link rel="stylesheet" href="./style-dark.css">', ''));
//    night = !night;
//  } else {
//    $('head').append('<link rel="stylesheet" href="./style-dark.css">');
//    night = !night;
//  }
//}



$("#BottomMessages").addClass("active");

$(".bottomicon").click(function() {
  if (!$(this).hasClass("noclick")) {
    //this.children[0].style.color='red';
    //$('.NavBarElement').children[0].style.color='black';
    $('.bottomicon').each(function( key, value ) {
      $(this).removeClass("active");
    });
    //this.children[0].style.color='#0074f4';
    $(this).toggleClass("active");
  }
});







var ws;

function connect() {
  ws = new WebSocket('ws://localhost:8080?name='+name);
  ws.onmessage = function(msg) {
      console.dir(JSON.parse(msg.data));
      //document.getElementById('data').innerText = JSON.stringify(JSON.parse(msg.data), null, 2);
      //document.getElementById('data').appendChild(JSON.stringify(JSON.parse(msg.data), null, 2));
      document.getElementById('data').insertAdjacentHTML ('beforeend', '<br>' + JSON.stringify(JSON.parse(msg.data), null, 0));
  };
  ws.onerror = function() {
    connect();
  }
  ws.onclose = function() {
    connect();
  }
}

//connect();

//if (cordova.platformId == 'android') {
//    StatusBar.overlaysWebView(false);
//    StatusBar.backgroundColorByHexString('#212121');
//}





//$(".buttonMessages").click(function() {
//$.get("messages.html", {},
//   function(data){
//     //$(".MainContentHolder").html(data);
//     //$(".HeaderText").html("<span>Messages</span>");
//   });
//
//$(".buttonProfile").click(function() {
//$.get("index2.html", {},
//   function(data){
//     //$(".MainContentHolder").html(data);
//     //$(".HeaderText").html("<span>Profile</span>");
//   });
//});
//
//$(".buttonMessages").click(function() {
//$.get("messages.html", {},
//   function(data){
//     //$(".MainContentHolder").html(data);
//     //$(".HeaderText").html("<span>Messages</span>");
//   });
//});
//
//$(".buttonFriends").click(function() {
//$.get("index2.html", {},
//   function(data){
//     //$(".MainContentHolder").html(data);
//     //$(".HeaderText").html("<span>Ne Dodelal</span>");
//   });
//});
//var chats = [
//  {'with': "upliftedly", "avatar": "./images/1.jfif", 'raw': {'message': 'avenging fallacy atrip advisor puebloization unvictualed bicarbureted sepic hasenpfeffer universalness adventureful thoracocentesis pyritization yagua transocean linge notifier Leptolepis Christdom impressible vaire wakan torturously wrungness', 'time': 11111}},
//  {'with': "sora", "avatar": "./images/2.jfif", 'raw': {'message': 'inspirable costopulmonary xylorcin Dantomania extrafocal sycamore autostandardization sleeper respire guinea adeptness pity helpingly Lyonetia monomolybdate lascar grizzler thecla frequentative soonish decalcify Papilioninae preseparation dilative', 'time': 11111}},
//  {'with': "boltage", "avatar": "./images/3.jfif", 'raw': {'message': 'procaine Kiplingism nephelognosy swimming benzonaphthol drochuil zoologicoarchaeologist ropishness autotelegraph bespit unrefunding giggling ketose cheerless semibody diplosphene aknee monotrematous kamikaze Vipera averruncation reposedness outscour nonevolutionary', 'time': 11111}},
//  {'with': "cacodemon", "avatar": "./images/4.jfif", 'raw': {'message': 'misexplication batrachiate misandry alone overgodliness overthrifty shivey decisively lachrymal piazzaed vatmaking faveolate unrelinquishable dronepipe transilluminate triphylite relaxable mitosome bashawship Euthyneura haberdash enrockment basiotripsy unleisuredness', 'time': 11111}},
//  {'with': "oneness", "avatar": "./images/5.jfif", 'raw': {'message': 'spokesmanship trianthous befuddler shroudlike guydom demesman Laboulbeniaceae adversative estimable Frontignan unclerkly scuppet hauberk Eremurus reinsphere Poales rawhider gorblimy envied applicable multivibrator distruster altruist filicite', 'time': 11111}},
//  {'with': "inhumanism", "avatar": "./images/6.jfif", 'raw': {'message': 'cordialness fetal demitranslucence sewerless microcolon Puru Real chromocyte dermatoneurosis inexpansible vaalite summer knead plagiotropism paralambdacismus swordswoman nocktat unbedecked trepanize lipectomy predelay reinstauration renunciatory malnourished', 'time': 11111}},
//  {'with': "reverse", "avatar": "./images/7.jfif", 'raw': {'message': 'miterflower iceless cerebra roit magnisonant smudgily requestion leucoplakia inebrious colorability Ranunculus seigneur bisischiadic vivary crepe wayworn ilicic inalterable sesquiquartal unmaidenlike unextinguished brotocrystal Rowland duennadom', 'time': 11111}},
//  {'with': "scleroticotomy", "avatar": "./images/8.jfif", 'raw': {'message': 'yohimbinization disinvest mothership ramigerous falltime orvietite reflectometer tunester phosphine sulphmethemoglobin creatinephosphoric concretism ruthenate microseismometer obituary fractureproof tuboperitoneal phocaceous Cestodaria uncenter enfasten figural entreaty connotative', 'time': 11111}},
//  {'with': "microspectroscope", "avatar": "./images/9.jfif", 'raw': {'message': 'epihydrinic cystoparalysis ivoriness unanimism ant indeficient Iberic halfway hyperspherical nonsuffrage punkwood Hydrocorisae galvanic Platycarya young auchenium belga chemist calcariform precis intermunicipal residential perspire misexecute', 'time': 11111}},
//  {'with': "physiographical", "avatar": "./images/10.jfif", 'raw': {'message': 'unconstrainedly rhinocerine autocratrix osteomalacic unpervert inkhornize veinage archleader shellapple pyelitis Ree pteroylglutamic undigenous Maratist nonseclusion unexcused pennorth parchmenty inharmonious pessomancy paralysis dishorner glauconitization edgeless', 'time': 11111}},
//  {'with': "hypogeiody", "avatar": "./images/11.jfif", 'raw': {'message': 'overshoulder prorestoration anconeous unmetered polyspermia improvable Krigia uncloakable spoilt shopbreaker Don portio sobbingly Podaliriidae snippet Valvata subchorioidal metallurgical melodically capernoited untreatably isopentane Australopithecinae guardstone', 'time': 11111}},
//  {'with': "moosetongue", "avatar": "./images/12.jfif", 'raw': {'message': 'upswarm Trochelminthes chattermag corrigibly pareiasaurian autoinoculable loma decarchy scarcely divisively microcrystalloscopy metaphysician banty tragicize unadded significator Janghey uncandied procellariine mentum unbenevolent zoosporocyst anaerobic bocedization', 'time': 11111}},
//  {'with': "unformalized", "avatar": "./images/13.jfif", 'raw': {'message': 'mort productiveness nonpromotion humble strychnia roughet tricarpellary disagreeability autoeducation turkis disselboom forkedly mockado micrologist esophagoplication organismal coelongated stonebiter gonopoietic cardigan deutoplasmic tempo carvestrene zucchini', 'time': 11111}},
//  {'with': "elabrate", "avatar": "./images/14.jfif", 'raw': {'message': 'saddik extrinsicalness tricaudate lissencephalous shanty deculturate leptocephaloid jambstone infradiaphragmatic Champlain shopkeeperess daffish Phalacrocoracidae antiromanticism gateman unrevealable cold disulfonic acclimatization Arabella cingle wrapped hobbyhorsical panelling', 'time': 11111}},
//  {'with': "dendroceratina", "avatar": "./images/15.jfif", 'raw': {'message': 'rentrant undersociety transcend turbotlike Massalia Mandaean quadriad overchant undesigningly tetratone pinkly lobstering nonevasive operetta defiant divisory pyretic semicomical whikerby bibliomane Pellaea uvitonic originate divulgatory', 'time': 11111}}
//];

//chats.forEach(element => {
//    addItem(element.with, element.raw.message, element.avatar);
//});