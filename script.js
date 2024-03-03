let playername = '';

let uhCounter = 0;

let conti = 'Continue';

let contentContinue = document.getElementById("buttonContinue");
let contentB1 = document.getElementById("buttonOne");
let contentB2 = document.getElementById("buttonTwo");
let contentB3 = document.getElementById("buttonThree");

let startText = 'It’s another lonely night, like always. You sleep in your comfy bed, thinking of nothing. You never had any luck with women until now, you either don’t try anything at all or you fuck up so bad that you feel like you have to vanish from their lives like you never existed at all.<br><br>On this night, you are woken up by a raspy voice somewhere in front of you.<br><br>„Wakey wakey, you lonely sack of piss. Time to actually do something for once in your life.”<br><br>You open your eyes and are greeted by a bald, skinny man standing right in front of your bed. The window in your room is shattered and wet footsteps on the ground are leading right to him.';

//Start (Bedroom)
let C_start_first_1 = '(“OH GOD! WHO ARE YOU?! WHAT ARE YOU DOING IN MY HOUSE?!!”)';
  let C_start_first_resp_1 = '“My name is Not Important, I’m here to show you how to get a date”';

let C_start_first_2 = '(*pull out your self-defense ICBM from the drawer*)';
  let C_start_first_resp_2 = 'He slightly grazes your ICBM with his hand and it flies away from your flimsy grip<br><br>“There’s no time for making use of your 2nd amendment rights. We gotta get you a date.”';

let C_start_first_3 = '(“uhmm…..uh……I……uhm………aaargg….uhh“)';
  let C_start_first_resp_3 = '„You gotta get over that introvert gibberish if you want to get a date!”';

let C_start_second_1 = '(“A date?? I don’t wanna go on a date.”)';
  let C_start_second_resp_1 = 'He gives you a light smack on your cheek<br><br>“Yes you do!”';
    let C_start_second_1_1 = '(“No I don’t!”)';
      let C_start_second_resp_1_1 = 'He slaps you again<br><br>“YES YOU DO!”';
        let C_start_second_1_1_1 = '(“NO! I! DON’T!”)';
          let C_start_second_resp_1_1_1 = 'He slaps you for a third time<br><br>“YES YOU FUCKING DO!”<br><br>You fly against the wall, blood splatters all over it. You feel lightheaded.';
            let C_start_second_1_1_1_1 = '(“No……I…….don’t”)';
              let C_start_second_resp_1_1_1_1 = '“You stubborn little piece of shit! Why did you open this game then?!<br>Or did you just want to see what happens if you keep saying “No”?<br>You will listen to me and do as I say, Capice?”';
                let C_start_second_1_1_1_1_1 = '(“Ugghhhhhhhh Fine”)';
                  let C_start_second_resp_1_1_1_1_1 = '“Finally, now let me explain.”';
                let C_start_second_1_1_1_1_2 = '(“For the last time, n-“)';
                  let C_start_second_resp_1_1_1_1_2 = '“Shut up and listen.”';
                let C_start_second_1_1_1_1_3 = '(“Umm……uhhh….uh….arghh…..uhmmm”)';
                  let C_start_second_resp_1_1_1_1_3 = '„Did I give you a lobotomy or something? What’s wrong with<br>You? Anyway, let me explain.”';
            let C_start_second_1_1_1_2 = '(“Okay…….fine……geez”)';
              let C_start_second_resp_1_1_1_2 = '“Did that knock some sense into you? Now listen good.”';
            let C_start_second_1_1_1_3 = '(“uhhh…….uhm….uh……”)';
              let C_start_second_resp_1_1_1_3 = C_start_second_resp_1_1_1_1_3;
        let C_start_second_1_1_2 = '(“Okay, I do”)';
          let C_start_second_resp_1_1_2 = '“Good, now let me explain.”';
        let C_start_second_1_1_3 = '(“uhm…..uhhh…..uh”)';
          let C_start_second_resp_1_1_3 = '“Was I a bit too forceful there? Whatever, listen carefully.”';
    let C_start_second_1_2 = '(“Okay you’re right, I do.”)';
      let C_start_second_resp_1_2 = '“Why don’t you try to be honest from the get-go next time? Anyway.”';
    let C_start_second_1_3 = '(“Uhh….uh…..uhmmmmmm……”)';
      let C_start_second_resp_1_3 = '“What’s with you? Are you okay there? Anyway, listen.”';

let C_start_second_2 = '(“Get out of my house right now!”)';
  let C_start_second_resp_2 = '“No, this is crucial! Listen carefully.”';

let C_start_second_3 = '(“Uhmmm…..uhhhhh……uhhh”)';
  let C_start_second_resp_3 = '“We’ll get that shyness out of you yet. Now listen.”';

  
let C_start_third_start = '“If you want to find yourself someone who is willing to go out with someone like you, you have to do something you’ve never done before in your life.”<br><br>“Talk with them”';

let C_start_third_1 = '(“Okay?”)';
  let C_start_third_resp_1 = '“It’s not as easy as you think. There are very complicated and intricate aspects to talking with people.”';

let C_start_third_2 = '(“OH GOD NO! I’d rather die!!”)';
  let C_start_third_resp_2 = '“I know I’m asking a lot from you, but this is the only way to get your life back on track.”';

let C_start_third_3 = '(“UHHHHHHHHHHHHHHHHHHHHHHHHH”)';
  let C_start_third_resp_3 = '“Not a bad attempt, but you have to actually use words instead of one continuous sound.”';


let C_start_fourth_start = '“You have to find out what every individual person is interested in and take full advantage of it to get them to do what you want”';

let C_start_fourth_1 = '(“But isn’t that just being manipulative and deceitful?”)';
  let C_start_fourth_resp_1 = '“Yes, that’s what I just said, didn’t you listen?”';

let C_start_fourth_2 = '(“How about you and I try that right here and now?”)';
  let C_start_fourth_resp_2 = '“Sorry, I’m not gay.”';
    let C_start_fourth_2_1 ='(“I’m a woman, though”)';
      let C_start_fourth_resp_2_1 = '“No you’re not.”';
        let C_start_fourth_2_1_1 = '(“But I am.”)';
          let C_start_fourth_resp_2_1_1 = '“Not in this game, you’re not.”';
        let C_start_fourth_2_1_2 = '(“Okay, sorry”)';
          let C_start_fourth_resp_2_1_2 = '“Whatever dude.”';
        let C_start_fourth_2_1_3 = '(“Uhhhmmmmm……uhh…….arghhhh…..”)';
          let C_start_fourth_resp_2_1_3 = '“What in the world is wrong with you?”';
    let C_start_fourth_2_2 = '(“Okay, sorry”)';
      let C_start_fourth_resp_2_2 = '“You better be.”';
    let C_start_fourth_2_3 = '(“Uhhh….uhm….uh”)';
      let C_start_fourth_resp_2_3 = '“I know, being rejected hurts like hell huh? And that’s exactly why you gotta man up.”';

let C_start_fourth_3 = '(“Uh…..uh…..uhhhh….”)';
  let C_start_fourth_resp_3 = '“Too much input for you? That’s okay, you’ll get the hang of it.”';


let C_start_fifth_start = '“There are usually three things you can reply with, for anything another person says. You just have to find out which is the right one.”';

            
document.getElementById("story").innerHTML = startText;

document.getElementById("buttonOne").innerHTML = C_start_first_1;
document.getElementById("buttonTwo").innerHTML = C_start_first_2;
document.getElementById("buttonThree").innerHTML = C_start_first_3;

function mainStory(str){
    document.getElementById("story").innerHTML = str;
}



//Funktionen zum abändern des Text im Dialogfenster und der Buttons


//Funktion des Continue Button
function buttonChangeContinue(textContinue) {
  contentContinue.innerHTML = textContinue;
  switch (document.getElementById("story").innerHTML) {


//Continues für Start

    //Continue für Choice 2_1-4, Button 1
    case C_start_second_resp_1_1_1_1_1:
      mainStory(C_start_third_start);
      contentB1.innerHTML = C_start_third_1;
      contentB2.innerHTML = C_start_third_2;
      contentB3.innerHTML = C_start_third_3;
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2, Button 2
    case C_start_second_resp_2:
        mainStory(C_start_third_start);
        contentB1.innerHTML = C_start_third_1;
        contentB2.innerHTML = C_start_third_2;
        contentB3.innerHTML = C_start_third_3;
        contentContinue.innerHTML = 'Filler';

    //Continue für Choice 2, Button 3
    case C_start_second_resp_3:
        mainStory(C_start_third_start);
        contentB1.innerHTML = C_start_third_1;
        contentB2.innerHTML = C_start_third_2;
        contentB3.innerHTML = C_start_third_3;
        contentContinue.innerHTML = 'Filler';
        break;

    //Continue für Choice 2_1-1, Button 2
    case C_start_second_resp_1_2:
      mainStory(C_start_third_start);
      contentB1.innerHTML = C_start_third_1;
      contentB2.innerHTML = C_start_third_2;
      contentB3.innerHTML = C_start_third_3;
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2_1-2, Button 2
    case C_start_second_resp_1_1_2:
      mainStory(C_start_third_start);
      contentB1.innerHTML = C_start_third_1;
      contentB2.innerHTML = C_start_third_2;
      contentB3.innerHTML = C_start_third_3;
      contentContinue.innerHTML = 'Filler';
      break;


    //Continue für Choice 2_1-3, Button 2
    case C_start_second_resp_1_1_1_2:
      mainStory(C_start_third_start);
      contentB1.innerHTML = C_start_third_1;
      contentB2.innerHTML = C_start_third_2;
      contentB3.innerHTML = C_start_third_3;
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2_1-4, Button 2
    case C_start_second_resp_1_1_1_1_2:
      mainStory(C_start_third_start);
      contentB1.innerHTML = C_start_third_1;
      contentB2.innerHTML = C_start_third_2;
      contentB3.innerHTML = C_start_third_3;
      contentContinue.innerHTML = 'Filler';
      break;


    //Continue für Choice 2_1-1, Button 3
    case C_start_second_resp_1_3:
      mainStory(C_start_third_start);
      contentB1.innerHTML = C_start_third_1;
      contentB2.innerHTML = C_start_third_2;
      contentB3.innerHTML = C_start_third_3;
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2_1-2, Button 3
    case C_start_second_resp_1_1_3:
      mainStory(C_start_third_start);
      contentB1.innerHTML = C_start_third_1;
      contentB2.innerHTML = C_start_third_2;
      contentB3.innerHTML = C_start_third_3;
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2_1-3, Button 3
    case C_start_second_resp_1_1_1_3:
      mainStory(C_start_third_start);
      contentB1.innerHTML = C_start_third_1;
      contentB2.innerHTML = C_start_third_2;
      contentB3.innerHTML = C_start_third_3;
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Response Starttext 1_3, Button 1
    case C_start_third_resp_1:
      mainStory(C_start_fourth_start);
      contentB1.innerHTML = C_start_fourth_1;
      contentB2.innerHTML = C_start_fourth_2;
      contentB3.innerHTML = C_start_fourth_3;
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Response Starttext 1_3, Button 2
    case C_start_third_resp_2:
      mainStory(C_start_fourth_start);
      contentB1.innerHTML = C_start_fourth_1;
      contentB2.innerHTML = C_start_fourth_2;
      contentB3.innerHTML = C_start_fourth_3;
      contentContinue.innerHTML = 'Filler';
      break;
    
    //Continue für Response Starttext 1_3, Button 3
    case C_start_third_resp_3:
      mainStory(C_start_fourth_start);
      contentB1.innerHTML = C_start_fourth_1;
      contentB2.innerHTML = C_start_fourth_2;
      contentB3.innerHTML = C_start_fourth_3;
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Response Start Sekt. 4 Choice 1, Button 1
    case C_start_fourth_resp_1:
      mainStory(C_start_fifth_start);
      contentB1.innerHTML = 'test1';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'filler';
      break;

    //Continue für Response Start Sekt. 4 Choice 1, B2-1-1
    case C_start_fourth_resp_2_1_1:
      mainStory(C_start_fifth_start);
      contentB1.innerHTML = 'test1';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'filler';
      break;

    //Continue für Response Start Sekt. 4 Choice 1, B2-1-2
    case C_start_fourth_resp_2_1_2:
      mainStory(C_start_fifth_start);
      contentB1.innerHTML = 'test1';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'filler';
      break;

    //Continue für Response Start Sekt. 4 Choice 1, B2-1-3
    case C_start_fourth_resp_2_1_3:
      mainStory(C_start_fifth_start);
      contentB1.innerHTML = 'test1';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'filler';
      break;

    //Continue für Response Start Sekt. 4 Choice 1, B2-2
    case C_start_fourth_resp_2_2:
    mainStory(C_start_fifth_start);
    contentB1.innerHTML = 'test1';
    contentB2.innerHTML = 'test2';
    contentB3.innerHTML = 'test3';
    contentContinue.innerHTML = 'filler';
    break;

    //Continue für Response Start Sekt. 4 Choice 1, B2-3
    case C_start_fourth_resp_2_3:
    mainStory(C_start_fifth_start);
    contentB1.innerHTML = 'test1';
    contentB2.innerHTML = 'test2';
    contentB3.innerHTML = 'test3';
    contentContinue.innerHTML = 'filler';
    break;

    //Continue für Response Start Sekt. 4 Choice 1, Button 2
    case C_start_fourth_resp_2:
    mainStory(C_start_fifth_start);
    contentB1.innerHTML = 'test1';
    contentB2.innerHTML = 'test2';
    contentB3.innerHTML = 'test3';
    contentContinue.innerHTML = 'filler';
    break;

    //Continue für Response Start Sekt. 4 Choice 1, Button 3
    case C_start_fourth_resp_3:
    mainStory(C_start_fifth_start);
    contentB1.innerHTML = 'test1';
    contentB2.innerHTML = 'test2';
    contentB3.innerHTML = 'test3';
    contentContinue.innerHTML = 'filler';
    break;
  }
}



//Funktion zum abändern wenn man auf den ersten Button klickt
function buttonChangeOne() {
  switch (document.getElementById("story").innerHTML) {

    //Button Klick bei Starttext, Button 1
    case startText:
      mainStory(C_start_first_resp_1);
      contentB1.innerHTML = C_start_second_1;
      contentB2.innerHTML = C_start_second_2;
      contentB3.innerHTML = C_start_second_3;
      break;
    
    //Button Klick auf Response: Start Choice 2, Button 1
    case C_start_first_resp_1:
      mainStory(C_start_second_resp_1);
      contentB1.innerHTML = C_start_second_1_1;
      contentB2.innerHTML = C_start_second_1_2;
      contentB3.innerHTML = C_start_second_1_3;
      break;

    //Button Klick auf Response: Start Choice 2, Button 2
    case C_start_first_resp_2:
      mainStory(C_start_second_resp_1);
      contentB1.innerHTML = C_start_second_1_1;
      contentB2.innerHTML = C_start_second_1_2;
      contentB3.innerHTML = C_start_second_1_3;
      break;

    //Button Klick auf Response: Start Choice 2, Button 3
    case C_start_first_resp_3:
      mainStory(C_start_second_resp_1);
      contentB1.innerHTML = C_start_second_1_1;
      contentB2.innerHTML = C_start_second_2;
      contentB3.innerHTML = C_start_second_3;
      break;

    //Button Klick auf Response: Start Choice 2, 1-1, Button 1
    case C_start_second_resp_1:
      mainStory(C_start_second_resp_1_1);
      contentB1.innerHTML = C_start_second_1_1_1;
      contentB2.innerHTML = C_start_second_1_1_2;
      contentB3.innerHTML = C_start_second_1_1_3;
      break;
    
    //Button Klick auf Response: Start Choice 2, 1-2, Button 1
    case C_start_second_resp_1_1:
    mainStory(C_start_second_resp_1_1_1);
    contentB1.innerHTML = C_start_second_1_1_1_1;
    contentB2.innerHTML = C_start_second_1_1_1_2;
    contentB3.innerHTML = C_start_second_1_1_1_3;
    break;

    //Button Klick auf Response: Start Choice 2, 1-3, Button 1
    case C_start_second_resp_1_1_1:
    mainStory(C_start_second_resp_1_1_1_1);
    contentB1.innerHTML = C_start_second_1_1_1_1_1;
    contentB2.innerHTML = C_start_second_1_1_1_1_2;
    contentB3.innerHTML = C_start_second_1_1_1_1_3;
    break;

    //Button Klick auf Response: Start Choice 2, 1-4, Button 1
    case C_start_second_resp_1_1_1_1:
    mainStory(C_start_second_resp_1_1_1_1_1);
    contentB1.innerHTML = '';
    contentB2.innerHTML = '';
    contentB3.innerHTML = '';
    contentContinue.innerHTML = conti;
    break;

    //Button Klick bei Starttext 1_3, Button 1
    case C_start_third_start:
      mainStory(C_start_third_resp_1);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Starttext 1_4, Button 1
    case C_start_fourth_start:
      mainStory(C_start_fourth_resp_1);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Response: Start Sekt. 4 Choice 1, B2, Button 1
    case C_start_fourth_resp_2:
      mainStory(C_start_fourth_resp_2_1);
      contentB1.innerHTML = C_start_fourth_2_1_1;
      contentB2.innerHTML = C_start_fourth_2_1_2;
      contentB3.innerHTML = C_start_fourth_2_1_3;
      break;

    //Button Klick bei Response: Start Sekt. 4 Choice 1, B2-1, Button 1
    case C_start_fourth_resp_2_1:
      mainStory(C_start_fourth_resp_2_1_1);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;
    }
  }


function buttonChangeTwo() {
  switch (document.getElementById("story").innerHTML) {

    //Button Klick bei Starttext
    case startText:
      mainStory(C_start_first_resp_2);
      contentB1.innerHTML = C_start_second_1;
      contentB2.innerHTML = C_start_second_2;
      contentB3.innerHTML = C_start_second_3;
      break;

    //Funktionalitaet von Button 2 wenn bei Choice 1 Button 1 geklickt wurde
    case C_start_first_resp_1:
      mainStory(C_start_second_resp_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;
    //Choice 2, Button 2
    case C_start_first_resp_2:
      mainStory(C_start_second_resp_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;
    
    //Funktionalitaet von Button 2 wenn bei Choice 1 Button 3 geklickt wurde
    case C_start_first_resp_3:
      mainStory(C_start_second_resp_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;
    //Coice 2_1-1, Button 2
    case C_start_second_resp_1:
      mainStory(C_start_second_resp_1_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Choice 2_1-2, Button 2
    case C_start_second_resp_1_1:
      mainStory(C_start_second_resp_1_1_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Choice 2_1-3, Button 2
    case C_start_second_resp_1_1_1:
      mainStory(C_start_second_resp_1_1_1_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Choice 2_1-4, Button 2
    case C_start_second_resp_1_1_1_1:
      mainStory(C_start_second_resp_1_1_1_1_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Starttext 1_3, Button 2
    case C_start_third_start:
      mainStory(C_start_third_resp_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Starttext 1_4, Button 2
    case C_start_fourth_start:
      mainStory(C_start_fourth_resp_2);
      contentB1.innerHTML = C_start_fourth_2_1;
      contentB2.innerHTML = C_start_fourth_2_2;
      contentB3.innerHTML = C_start_fourth_2_3;
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Response: Start Sekt. 4 Choice 1, B2, Button 2
    case C_start_fourth_resp_2:
      mainStory(C_start_fourth_resp_2_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Response: Start Sekt. 4 Choice 1, B2-1, Button 2
    case C_start_fourth_resp_2_1:
      mainStory(C_start_fourth_resp_2_1_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;
  }
    }


function buttonChangeThree() {
  switch (document.getElementById("story").innerHTML) {

    //Button Klick bei Starttext
    case startText:
      mainStory(C_start_first_resp_3)
      contentB1.innerHTML = C_start_second_1;
      contentB2.innerHTML = C_start_second_2;
      contentB3.innerHTML = C_start_second_3;

      uhCounter++;
      console.log(uhCounter);
      break;

    ////Funktionalitaet von Button 3 wenn bei Choice 1 Button 1 geklickt wurde
    case C_start_first_resp_1:
      mainStory(C_start_second_resp_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Funktionalitaet von Button 2 wenn bei Choice 1 Button 2 geklickt wurde
    case C_start_first_resp_2:
      mainStory(C_start_second_resp_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Choice 2, Button 3  
    case C_start_first_resp_3:
      mainStory(C_start_second_resp_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;

      uhCounter++;
      console.log(uhCounter);
      break;

    //Choice 2_1-1, Button 3
    case C_start_second_resp_1:
      mainStory(C_start_second_resp_1_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Choice 2_1-2, Button 3
    case C_start_second_resp_1_1:
      mainStory(C_start_second_resp_1_1_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Choice 2_1-3, Button 3
    case C_start_second_resp_1_1_1:
      mainStory(C_start_second_resp_1_1_1_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Choice 2_1-4, Button 3
    case C_start_second_resp_1_1_1_1:
      mainStory(C_start_second_resp_1_1_1_1_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Starttext 1_3, Button 3
    case C_start_third_start:
      mainStory(C_start_third_resp_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;

      uhCounter++;
      console.log(uhCounter);
      break;

    //Button Klick bei Starttext 1_4, Button 3
    case C_start_fourth_start:
      mainStory(C_start_fourth_resp_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;

      uhCounter++;
      console.log(uhCounter);
      break;

    //Button Klick bei Response: Start Sekt. 4 Choice 1, B2, Button 3
    case C_start_fourth_resp_2:
      mainStory(C_start_fourth_resp_2_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Response: Start Sekt. 4 Choice 1, B2-1, Button 3
    case C_start_fourth_resp_2_1:
      mainStory(C_start_fourth_resp_2_1_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;
  }
    }
  
