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
      contentB1.innerHTML ='test';
      contentB2.innerHTML ='test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2, Button 2
    case C_start_second_resp_2:
        mainStory(C_start_third_start);
        contentB1.innerHTML ='test';
        contentB2.innerHTML ='test2';
        contentB3.innerHTML = 'test3';
        contentContinue.innerHTML = 'Filler';

    //Continue für Choice 2, Button 3
    case C_start_second_resp_3:
        mainStory(C_start_third_start);
        contentB1.innerHTML = 'test';
        contentB2.innerHTML = 'test2';
        contentB3.innerHTML = 'test3';
        contentContinue.innerHTML = 'Filler';
        break;

    //Continue für Choice 2_1-1, Button 2
    case C_start_second_resp_1_2:
      mainStory(C_start_third_start);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2_1-2, Button 2
    case C_start_second_resp_1_1_2:
      mainStory(C_start_third_start);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'Filler';
      break;


    //Continue für Choice 2_1-3, Button 2
    case C_start_second_resp_1_1_1_2:
      mainStory(C_start_third_start);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2_1-4, Button 2
    case C_start_second_resp_1_1_1_1_2:
      mainStory(C_start_third_start);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'Filler';
      break;


    //Continue für Choice 2_1-1, Button 3
    case C_start_second_resp_1_3:
      mainStory(C_start_third_start);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'tes2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2_1-2, Button 3
    case C_start_second_resp_1_1_3:
      mainStory(C_start_third_start);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'tes2';
      contentB3.innerHTML = 'tes3';
      contentContinue.innerHTML = 'Filler';
      break;

    //Continue für Choice 2_1-3, Button 3
    case C_start_second_resp_1_1_1_3:
      mainStory(C_start_third_start);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'tes2';
      contentB3.innerHTML = 'tes3';
      contentContinue.innerHTML = 'Filler';
      break;

   // //Continue für Response Starttext 1_3, Button 1
    //case C_start_third_resp_1:
      //mainStory(C_start_fourth_start);
      //contentB1.innerHTML = 'test';
      //contentB1.innerHTML = 'test';
      //contentB1.innerHTML = 'test';
      //contentContinue.innerHTML = 'Filler';
      //break;
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
    
    //Button Klick auf Response: Choice 2, Button 1
    case C_start_first_resp_1:
      mainStory(C_start_second_resp_1);
      contentB1.innerHTML = C_start_second_1_1;
      contentB2.innerHTML = C_start_second_1_2;
      contentB3.innerHTML = C_start_second_1_3;
      break;

    //Button Klick auf Response: Choice 2, Button 2
    case C_start_first_resp_2:
      mainStory(C_start_second_resp_1);
      contentB1.innerHTML = C_start_second_1_1;
      contentB2.innerHTML = C_start_second_1_2;
      contentB3.innerHTML = C_start_second_1_3;
      break;

    //Button Klick auf Response: Choice 2, Button 3
    case C_start_first_resp_3:
      mainStory(C_start_second_resp_1);
      contentB1.innerHTML = C_start_second_1_1;
      contentB2.innerHTML = C_start_second_2;
      contentB3.innerHTML = C_start_second_3;
      break;

    //Button Klick auf Response: Choice 2_1-1, Button 1
    case C_start_second_resp_1:
      mainStory(C_start_second_resp_1_1);
      contentB1.innerHTML = C_start_second_1_1_1;
      contentB2.innerHTML = C_start_second_1_1_2;
      contentB3.innerHTML = C_start_second_1_1_3;
      break;
    
    //Button Klick auf Response: Choice 2_1-2, Button 1
    case C_start_second_resp_1_1:
    mainStory(C_start_second_resp_1_1_1);
    contentB1.innerHTML = C_start_second_1_1_1_1;
    contentB2.innerHTML = C_start_second_1_1_1_2;
    contentB3.innerHTML = C_start_second_1_1_1_3;
    break;

    //Button Klick auf Response: Choice 2_1-3, Button 1
    case C_start_second_resp_1_1_1:
    mainStory(C_start_second_resp_1_1_1_1);
    contentB1.innerHTML = C_start_second_1_1_1_1_1;
    contentB2.innerHTML = C_start_second_1_1_1_1_2;
    contentB3.innerHTML = C_start_second_1_1_1_1_3;
    break;

    //Button Klick auf Response: Choice 2_1-4, Button 1
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
      uhCounter = uhCounter + 1;
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
      uhCounter = uhCounter + 1;
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
  }
    }
  
