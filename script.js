let playername = '';

let uhCounter = 0;

let free = false;

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

let C_start_fifth_1 = '(“Why only three?”)';
  let C_start_fifth_resp_1 = '“All good things come in threes, dummy”';

let C_start_fifth_2 = '(“Sounds doable.”)';
  let C_start_fifth_resp_2 = '“That’s what I like to hear.”';

let C_start_fifth_3 = '(“Uhhhh…….uhhh……..uhmmmmmm”)';
  let C_start_fifth_resp_3 = '“That’s definitely not the right option.”';

let C_start_close = '“Now I know that I might be asking a lot from a Smoothbrain like you, so I got you a training partner who was more than happy to escort me today. I had them wait in the basement to not overwhelm you right off the bat. Go down and talk to them.”';



//Basement
let C_basement_start = 'You arrive in your basement. It’s dark and smells like old cement mixed with mold. You turn on the light and see a slim woman crouching by the wall. She’s attached to the wall by a chain that’s wrapped around her left arm.<br><br>She has long, dirty and fuzzy, blonde hair and is wearing an equally dirty dress. She seems to wear some makeup as well, though it’s ruined from all the tears running down her face. She’s just sitting there, wailing and crying.<br><br>“HEEEEEELP!!!!” She screams out, obviously in despair.<br><br>You approach her and she flinches, getting even closer to the wall like she’s trying to run away through it. “No! Please! Get away from me!”';

let C_basement_start_1 = '(“Well hi there beautiful”)';
  let C_basement_start_resp_1 = '“NOO! PLEASE I DON’T WANNA, JUST LET ME GO!”';

let C_basement_start_2 = '(“What the fuck is going on down here?”)';
  let C_basement_start_resp_2 = '“Some man came up behind me, put a bag over my head and dragged me into his car. He mumbled something about dates and multiple choice, that I’ll be “The perfect training dummy”. I don’t know why I’m here, what have I done to deserve this? Please just let me go!”';
    let C_basement_start_2_1 = '(“I don’t really know what that guy wants from me either. Look, I’ll just help you out of those shackles. This is insane.”)';
      let C_basement_start_resp_2_1 = '“Oh god, thank you. I want to go home.”';
        let C_basement_start_2_1_1 = '(Free her “No problem. Hey, you mind if we go out at some point?”)';
          let C_basement_start_resp_2_1_1 = '“You’ve got to be kidding me.”<br><br>She runs away.';
        let C_basement_start_2_1_2 = '(“On second thought, I still need you for something.”)';
          let C_basement_start_resp_2_1_2 = '“No, please. I’m scared.”';
        let C_basement_start_2_1_3 = '(Free her “Uh…..uhhhhhh…….uughhhhhh”)';
          let C_basement_start_resp_2_1_3 = '“Stop! You’re scaring me!”<br>She pushes you away and runs upstairs.';
    let C_basement_start_2_2 = '(“Oh I see, I guess that makes sense. It’s really nice of you to go along with all of this. I suppose there really are still some good people out there.“)';
      let C_basement_start_resp_2_2 = '“What?!! No!! I don’t want to be here! Please let me out!!“';
    let C_basement_start_2_3 = '(“Uhhhhhh……...uhhhhhhhhhhh……...uhhhhh“)';
      let C_basement_start_resp_2_3 = '“Please! You’re creeping me out! Just let me go!“';


let C_basement_start_3 = '(“Uhhhhhhhh………uhhhhhhhhh………..ughghhhhhh….”)';
  let C_basement_start_resp_3 = '“NO! PLEASE GOD!! STAY AWAY FROM ME!!!”';
  
  
document.getElementById("story").innerHTML = C_basement_start;

document.getElementById("buttonOne").innerHTML = C_basement_start_1;
document.getElementById("buttonTwo").innerHTML = C_basement_start_2;
document.getElementById("buttonThree").innerHTML = C_basement_start_3;

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
      contentB1.innerHTML = C_start_fifth_1;
      contentB2.innerHTML = C_start_fifth_2;
      contentB3.innerHTML = C_start_fifth_3;
      contentContinue.innerHTML = 'filler';
      break;

    //Continue für Response Start Sekt. 5 Choice 1, Button 1
    case C_start_fifth_resp_1:
      mainStory(C_start_close);
      contentContinue.innerHTML = conti;
      break;

    //Continue für Response Start Sekt. 5 Choice 1, Button 2
    case C_start_fifth_resp_2:
      mainStory(C_start_close);
      contentContinue.innerHTML = conti;
      break;

    //Continue für Response Start Sekt. 5 Choice 1, Button 3
    case C_start_fifth_resp_3:
      mainStory(C_start_close);
      contentContinue.innerHTML = conti;
      break;

    //Continue zu Basement
    case C_start_close:
      mainStory(C_basement_start);
      contentB1.innerHTML = C_basement_start_1;
      contentB2.innerHTML = C_basement_start_2;
      contentB3.innerHTML = C_basement_start_3;
      contentContinue.innerHTML = 'filler';
      break;

    //Continue nach oben für Befreien Option 1
    case C_basement_start_resp_2_1_1:
      mainStory('noch nicht eingefügt');
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
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
      contentB2.innerHTML = C_start_second_1_2;
      contentB3.innerHTML = C_start_second_1_3;
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

    //Button Klick bei Response: Start Sekt. 5 Choice 1, Button 1
    case C_start_fifth_start:
      mainStory(C_start_fifth_resp_1);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Response: Basement Start, Button 1
    case C_basement_start:
      mainStory(C_basement_start_resp_1);
      contentB1.innerHTML = 'test1';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'filler';
      break;

    //Button Klick bei Response: Basement Start, B2, Button 1
    case C_basement_start_resp_2:
      mainStory(C_basement_start_resp_2_1);
      contentB1.innerHTML = C_basement_start_2_1_1;
      contentB2.innerHTML = C_basement_start_2_1_2;
      contentB3.innerHTML = C_basement_start_2_1_3;
      break;

    //Button Klick bei Response: Basement Start, B2-1, Button 1
    case C_basement_start_resp_2_1:
      mainStory(C_basement_start_resp_2_1_1);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = conti;
      free = true;
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

    //Button Klick bei Response: Start Sekt. 5 Choice 1, Button 2
    case C_start_fifth_start:
      mainStory(C_start_fifth_resp_2);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      break;

    //Button Klick bei Response: Basement Start, Button 2
    case C_basement_start:
      mainStory(C_basement_start_resp_2);
      contentB1.innerHTML = C_basement_start_2_1;
      contentB2.innerHTML = C_basement_start_2_2;
      contentB3.innerHTML = C_basement_start_2_3;
      contentContinue.innerHTML = 'filler';
      break;

    //Button Klick bei Response: Basement Start, B2, Button 2
    case (C_basement_start_resp_2):
      mainStory(C_basement_start_resp_2_2);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      break;
    
    case (C_basement_start_resp_2_1):
      mainStory(C_basement_start_resp_2_1_2);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
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

    //Button Klick bei Response: Start Sekt. 5 Choice 1, Button 3
    case C_start_fifth_start:
      mainStory(C_start_fifth_resp_3);
      contentB1.innerHTML = '';
      contentB2.innerHTML = '';
      contentB3.innerHTML = '';
      contentContinue.innerHTML = conti;
      uhCounter++;
      console.log(uhCounter);
      break;

    //Button Klick bei Response: Basement Start, Button 1
    case C_basement_start:
      mainStory(C_basement_start_resp_3);
      contentB1.innerHTML = 'test1';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = 'filler';
      break;

    case (C_basement_start_resp_2):
      mainStory(C_basement_start_resp_2_3);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      break;

    case (C_basement_start_resp_2_1):
      mainStory(C_basement_start_resp_2_1_3);
      contentB1.innerHTML = 'test';
      contentB2.innerHTML = 'test2';
      contentB3.innerHTML = 'test3';
      contentContinue.innerHTML = conti;
      free = true;
      break;
  }
    }


// Hide the login container per click on X
function closeLogin(){
  var loginForm = document.getElementById("login"); 
  loginForm.style.display = "none"; 
}