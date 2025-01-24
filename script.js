/* This is the HTML Version of Big Like, Great Disappointment.
   It is extremely limited because I can't be arsed to add anymore to this
   rather stupid Version. Maybe I'll do another one with renpy where I'll actually
   put in some effort (I hope) */

const dialogue = ({
  "start": 
      {
          "text": ["It’s another lonely night, like always. You sleep in your comfy bed, thinking of nothing. You never had any luck with women until now, you either don’t try anything at all or you fuck up so bad that you feel like you have to vanish from their lives like you never existed at all.<br><br>On this night, you are woken up by a raspy voice somewhere in front of you.<br><br>„Wakey wakey, you lonely sack of piss. Time to actually do something for once in your life.”<br><br>You open your eyes and are greeted by a bald, skinny man standing right in front of your bed. The window in your room is shattered and wet footsteps on the ground are leading right to him.", false, [true, "start.choices['1-1']", "start.choices['1-2']", "start.choices['1-3']"]],
          "choices" :
              {
                  "1-1": ["(“OH GOD! WHO ARE YOU?! WHAT ARE YOU DOING IN MY HOUSE?!!”)", false, ["dialogue.start.responses['1-1R']"]],
                  "1-2": ["(*pull out your self-defense ICBM from the drawer*)", false, ["dialogue.start.responses['1-2R']"]],
                  "1-3": ["(“uhmm…..uh……I……uhm………aaargg….uhh“)", true, ["dialogue.start.responses['1-3R']"]],
                  "1-1-1": ["(“A date?? I don’t wanna go on a date.”)", false, ["dialogue.start.responses['1-1-1R']"]],
                  "1-1-2": ["(“Get out of my house right now!”)", false, ["dialogue.start.responses['1-1-2R']"]],
                  "1-1-3": ["(“Uhmmm…..uhhhhh……uhhh”)", true, ["dialogue.start.responses['1-1-3R']"]],
                  "1-1-1-1": ["(“No I don’t!”)", false, ["dialogue.start.responses['1-1-1-1R']"]],
                  "1-1-1-2": ["(“Okay you’re right, I do.”)", false, ["dialogue.start.responses['1-1-1-2R']"]],
                  "1-1-1-3": ["(“Uhh….uh…..uhmmmmmm……”)", false, ["dialogue.start.responses['1-1-1-3R']"]],
                  "1-1-1-1-1": ["(“NO! I! DON’T!”)", false, ["dialogue.start.responses['1-1-1-1-1R']"]],
                  "1-1-1-1-2": ["(“Okay, I do”)", false, ["dialogue.start.responses['1-1-1-1-2R']"]],
                  "1-1-1-1-3": ["(“uhm…..uhhh…..uh”)", false, ["dialogue.start.responses['1-1-1-1-3R']"]],
                  "1-1-1-1-1-1": ["(“No……I…….don’t”)", false, ["dialogue.start.responses['1-1-1-1-1-1R']"]],
                  "1-1-1-1-1-2": ["(“Okay…….fine……geez”)", false, ["dialogue.start.responses['1-1-1-1-1-2R']"]],
                  "1-1-1-1-1-3": ["(“uhhh…….uhm….uh……”)", false, ["dialogue.start.responses['1-1-1-1-1-3R']"]],
                  "1-1-1-1-1-1-1": ["(“Ugghhhhhhhh Fine”)", false, ["dialogue.start.responses['1-1-1-1-1-1-1R']"]],
                  "1-1-1-1-1-1-2": ["(“For the last time, n-“)", false, ["dialogue.start.responses['1-1-1-1-1-1-2R']"]],
                  "1-1-1-1-1-1-3": ["(“Umm……uhhh….uh….arghh…..uhmmm”)", false, ["dialogue.start.responses['1-1-1-1-1-1-3R']"]],
                  "2-1": ["(“Okay?”)", false, ["dialogue.start.responses['2-1R']"]],
                  "2-2": ["(“OH GOD NO! I’d rather die!!”)", false, ["dialogue.start.responses['2-2R']"]],
                  "2-3": ["(“UHHHHHHHHHHHHHHHHHHHHHHHHH”)", true, ["dialogue.start.responses['2-3R']"]],
                  "3-1": ["(“But isn’t that just being manipulative and deceitful?”)", false, ["dialogue.start.responses['3-1R']"]],
                  "3-2": ["(“How about you and I try that right here and now?”)", false, ["dialogue.start.responses['3-2R']"]],
                  "3-3": ["(“Uh…..uh…..uhhhh….”)", true, ["dialogue.start.responses['3-3R']"]],
                  "3-2-1": ["(“I’m a woman, though”)", false, ["dialogue.start.responses['3-2-1R']"]],
                  "3-2-2": ["(“Okay, sorry”)", false, ["dialogue.start.responses['3-2-2R']"]],
                  "3-2-3": ["(“Uhhh….uhm….uh”)", false, ["dialogue.start.responses['3-2-3R']"]],
                  "3-2-1-1": ["(“But I am.”)", false, ["dialogue.start.responses['3-2-1-1R']"]],
                  "3-2-1-2": ["(“Okay, sorry”)", false, ["dialogue.start.responses['3-2-1-2R']"]],
                  "3-2-1-3": ["(“Uhhhmmmmm……uhh…….arghhhh…..”)", false, ["dialogue.start.responses['3-2-1-3R']"]],
                  "4-1": ["(“Why only three?”)", false, ["dialogue.start.responses['4-1R']"]],
                  "4-2": ["(“Sounds doable.”)", false, ["dialogue.start.responses['4-2R']"]],
                  "4-3": ["(“Uhhhh…….uhhh……..uhmmmmmm”)", true, ["dialogue.start.responses['4-3R']"]]
              },
          "responses":
              {
                  "1-1R": ["“My name is Not Important, I’m here to show you how to get a date”", false, [true, "dialogue.start.choices['1-1-1']", "dialogue.start.choices['1-1-2']", "dialogue.start.choices['1-1-3']"]],
                  "1-2R": ["He slightly grazes your ICBM with his hand and it flies away from your flimsy grip<br><br>“There’s no time for making use of your 2nd amendment rights. My name is Not Important and we gotta get you a date.”", false, [true, "dialogue.start.choices['1-1-1']", "dialogue.start.choices['1-1-2']", "dialogue.start.choices['1-1-3']"]],
                  "1-3R": ["„Stop with that introvert gibberish and listen to me. My name is Not Important and I'm here to get you a date!”", false, [true, "dialogue.start.choices['1-1-1']", "dialogue.start.choices['1-1-2']", "dialogue.start.choices['1-1-3']"]],
                  "1-1-1R": ["He gives you a light smack on your cheek<br><br>“Yes you do!”", false, [true, "dialogue.start.choices['1-1-1-1']", "dialogue.start.choices['1-1-1-2']", "dialogue.start.choices['1-1-1-3']"]],
                  "1-1-2R": ["“No, this is crucial! Listen carefully.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-3R": ["“We’ll get that shyness out of you yet. Now listen.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-1R": ["He slaps you again<br><br>“YES YOU DO!”", false, [true, "dialogue.start.choices['1-1-1-1-1']", "dialogue.start.choices['1-1-1-1-2']", "dialogue.start.choices['1-1-1-1-3']"]],
                  "1-1-1-2R": ["“Why don’t you try to be honest from the get-go next time? Anyway.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-3R": ["“What’s with you? Are you okay there? Anyway, listen.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-1-1R": ["He slaps you for a third time<br><br>“YES YOU FUCKING DO!”<br><br>You fly against the wall, blood splatters all over it. You feel lightheaded.", false, [true, "dialogue.start.choices['1-1-1-1-1-1']", "dialogue.start.choices['1-1-1-1-1-2']", "dialogue.start.choices['1-1-1-1-1-3']"]],
                  "1-1-1-1-2R": ["“Good, now let me explain.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-1-3R": ["“Was I a bit too forceful there? Whatever, listen carefully.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-1-1-1R": ["“You stubborn little piece of shit! Why did you open this game then?!<br>Or did you just want to see what happens if you keep saying “No”?<br>You will listen to me and do as I say, Capice?”", false, [true, "dialogue.start.choices['1-1-1-1-1-1-1']", "dialogue.start.choices['1-1-1-1-1-1-2']", "dialogue.start.choices['1-1-1-1-1-1-3']"]],
                  "1-1-1-1-1-2R": ["“Did that knock some sense into you? Now listen good.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-1-1-3R": ["„Did I give you a lobotomy or something? What’s wrong with<br>You? Anyway, let me explain.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-1-1-1-1R": ["“Finally, now let me explain.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-1-1-1-2R": ["“Shut up and listen.”", "c", ["dialogue.start.responses['2S']"]],
                  "1-1-1-1-1-1-3R": ["„Did I give you a lobotomy or something? What’s wrong with<br>You? Anyway, let me explain.”", "c", ["dialogue.start.responses['2S']"]],
                  "2S": ["“If you want to find yourself someone who is willing to go out with someone like you, you have to do something you’ve never done before in your life.”<br><br>“Talk with them”", false, [true, "dialogue.start.choices['2-1']", "dialogue.start.choices['2-2']", "dialogue.start.choices['2-3']"]],
                  "2-1R": ["“It’s not as easy as you think. There are very complicated and intricate aspects to talking with people.”", "c", ["dialogue.start.responses['3S']"]],
                  "2-2R": ["“I know I’m asking a lot from you, but this is the only way to get your life back on track.”", "c", ["dialogue.start.responses['3S']"]],
                  "2-3R": ["“Not a bad attempt, but you have to actually use words instead of one continuous sound.”", "c", ["dialogue.start.responses['3S']"]],
                  "3S": ["“You have to find out what every individual person is interested in and take full advantage of it to get them to do what you want”", false, [true, "dialogue.start.choices['3-1']", "dialogue.start.choices['3-2']", "dialogue.start.choices['3-3']"]],
                  "3-1R": ["“Yes, that’s what I just said, didn’t you listen?”", "c", ["dialogue.start.responses['4S']"]],
                  "3-2R": ["“Sorry, I’m not gay.”", false, [true, "dialogue.start.choices['3-2-1']", "dialogue.start.choices['3-2-2']", "dialogue.start.choices['3-2-3']"]],
                  "3-3R": ["“Too much input for you? That’s okay, you’ll get the hang of it.”", "c", ["dialogue.start.responses['4S']"]],
                  "3-2-1R": ["“No you’re not.”", false, [true, "dialogue.start.choices['3-2-1-1']", "dialogue.start.choices['3-2-1-2']", "dialogue.start.choices['3-2-1-3']"]],
                  "3-2-2R": ["“You better be.”", "c", ["dialogue.start.responses['4S']"]],
                  "3-2-3R": ["“I know, being rejected hurts like hell huh? And that’s exactly why you gotta man up.”", "c", ["dialogue.start.responses['4S']"]],
                  "3-2-1-1R": ["“Not in this game, you’re not.”", "c", ["dialogue.start.responses['4S']"]],
                  "3-2-1-2R": ["“Don't pull shit like that again.”", "c", ["dialogue.start.responses['4S']"]],
                  "3-2-1-3R": ["“What in the world is wrong with you?”", "c", ["dialogue.start.responses['4S']"]],
                  "4S": ["“There are usually three things you can reply with, for anything another person says. You just have to find out which is the right one.”", false, [true, "dialogue.start.choices['4-1']", "dialogue.start.choices['4-2']", "dialogue.start.choices['4-3']"]],
                  "4-1R": ["“All good things come in threes, dummy”", "c", ["dialogue.start.responses['5S']"]],
                  "4-2R": ["“That’s what I like to hear.”", "c", ["dialogue.start.responses['5S']"]],
                  "4-3R": ["“That’s definitely not the right option.”", "c", ["dialogue.start.responses['5S']"]],
                  "5S": ["“Now I know that I might be asking a lot from a Smoothbrain like you, so I got you a training partner who was more than happy to escort me today. I had them wait in the basement to not overwhelm you right off the bat. Go down and talk to them.”", "c", ["end", "dialogue.base.text", "dialogue.base.choices['1-1']", "dialogue.base.choices['1-2']", "dialogue.base.choices['1-3']"]]
              }
      },

  "base":
      {
          "text": "You arrive in your basement. It’s dark and smells like old cement mixed with mold. You turn on the light and see a slim woman crouching by the wall. She’s attached to the wall by a chain that’s wrapped around her left arm.<br><br>She has long, dirty and fuzzy, blonde hair and is wearing an equally dirty dress. She seems to wear some makeup as well, though it’s ruined from all the tears running down her face. She’s just sitting there, wailing and crying.<br><br>“HEEEEEELP!!!!” She screams out, obviously in despair.<br><br>You approach her and she flinches, getting even closer to the wall like she’s trying to run away through it. “No! Please! Get away from me!”",
          "choices": 
              {
                  "1-1": ["(“Well hi there beautiful”)", false, ["dialogue.base.responses['1-1R']"]],
                  "1-2": ["(“What the fuck is going on down here?”)", false, ["dialogue.base.responses['1-2R']"]],
                  "1-2-1": ["(“I don’t really know what that guy wants from me either. Look, I’ll just help you out of those shackles. This is insane.”)", false, ["dialogue.base.responses['1-2-1R']"]],
                  "1-2-1-1": ["(Free her “No problem. Hey, you mind if we go out at some point?”)", false, ["dialogue.base.responses['1-2-1-1R']"]],
                  "1-2-1-2": ["(“On second thought, I still need you for something.”)", false, ["dialogue.base.responses['1-2-1-2R']"]],
                  "1-2-1-3": ["(Free her “Uh…..uhhhhhh…….uughhhhhh”)", false, ["dialogue.base.responses['1-2-1-3R']"]],
                  "1-2-2": ["(“Oh I see, I guess that makes sense. It’s really nice of you to go along with all of this. I suppose there really are still some good people out there.“)", false, ["dialogue.base.responses['1-2-2R']"]],
                  "1-2-3": ["(“Uhhhhhh……...uhhhhhhhhhhh……...uhhhhh“)", false, ["dialogue.base.responses['1-2-3R']"]],
                  "1-3": ["(“Uhhhhhhhh………uhhhhhhhhh………..ughghhhhhh….”)", true, ["dialogue.base.responses['1-3R']"]],
                  "2-1": ["(“So, uhh. What are your hobbies?”", false, ["dialogue.base.responses['2-1R']"]],
                  "2-1-1": ["(“Me? I like to stay home mostly. Sometimes, I like to go out and buy groceries. It’s not that common of a hobby, I know, but it's something I enjoy.”)", false, ["dialogue.base.responses['2-1-1R']"]],
                  "2-1-2": ["(“Look, this is hard for me as well. I don’t really have any social interaction in my daily life, but I’m doing my best. So just bear with me.”)", false, ["dialogue.base.responses['2-1-2R']"]],
                  "2-1-2-1": ["(“I’m just trying to get you to go on a date with me”)", false, ["dialogue.base.responses['2-1-2-1R']"]],
                  "2-1-2-2": ["(“I’m sorry, this is stupid. Let’s just forget about it.”)", false, ["dialogue.base.responses['2-1-2-2R']"]],
                  "2-1-2-3": ["(“uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh”)", false, ["dialogue.base.responses['2-1-2-3R']"]],
                  "2-1-3": ["(“Uhhhhhh…….uhhhhhhhhh………ugh”)", false, ["dialogue.base.responses['2-1-3R']"]],
                  "2-2": ["(“I need you to go on a date with me.”)", false, ["dialogue.base.responses['2-2R']"]],
                  "2-2-1": ["(“Unfortunately for you, I do.”)", false, ["dialogue.base.responses['2-2-1R']"]],
                  "2-2-1-1": ["(“I hate it just as much as you do, but I have no other choice.”)", false, ["dialogue.base.responses['2-2-1-1R']"]],
                  "2-2-1-1-1": ["(Kick her in the head)", false, ["dialogue.base.responses['2-2-1-1-1R']"]],
                  "2-2-1-1-2": ["(“Kill you? I just want to go on a date with you”)", false, ["dialogue.base.responses['2-2-1-1-2R']"]],
                  "2-2-1-1-3": ["(“Uhhhhhhhh……..uhmmm……huuuuuuuuuu”)", false, ["dialogue.base.responses['2-2-1-1-3R']"]],
                  "2-2-1-2": ["(“Your mere existence is an insult to god.”)", false, ["dialogue.base.responses['2-2-1-2R']"]],
                  "2-2-1-3": ["(“uhhhhhhhhhhhh…….uhhhh………uhhhhhhh”)", false, ["dialogue.base.responses['2-2-1-3R']"]],
                  "2-2-2": ["(*approach her* “Come on, let's go. You and me!”)", false, ["dialogue.base.responses['2-2-2R']"]],
                  "2-2-3": ["(“ughhhhhhh……….uhhhhhhhhhh”)", false, ["dialogue.base.responses['2-2-3R']"]],
                  "2-3": ["(“ughhhhhhh……….uhhhhhhhhhh”)", true, ["dialogue.base.responses['2-3R']"]]
              },
          "responses":
              {
                  "1-1R": ["“NOO! PLEASE I DON’T WANNA, JUST LET ME GO!”", false, [true, "dialogue.base.choices['2-1']", "dialogue.base.choices['2-2']", "dialogue.base.choices['2-3']"]],
                  "1-2R": ["“Some man came up behind me, put a bag over my head and dragged me into his car. He mumbled something about dates and multiple choice, that I’ll be “The perfect training dummy”. I don’t know why I’m here, what have I done to deserve this? Please just let me go!”", false, [true, "dialogue.base.choices['1-2-1']", "dialogue.base.choices['1-2-2']", "dialogue.base.choices['1-2-3']"]],
                  "1-2-1R": ["“Oh god, thank you. I want to go home.”", false, [true, "dialogue.base.choices['1-2-1-1']", "dialogue.base.choices['1-2-1-2']", "dialogue.base.choices['1-2-1-3']"]],
                  "1-2-1-1R": ["“You’ve got to be kidding me.”<br><br>She runs away.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1free']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "1-2-1-2R": ["“No, please. I’m scared.”", false, [true, "dialogue.base.choices['2-1']", "dialogue.base.choices['2-2']", "dialogue.base.choices['2-3']"]],
                  "1-2-1-3R": ["“Stop! You’re scaring me!”<br>She pushes you away and runs upstairs.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1free']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "1-2-2R": ["“What?!! No!! I don’t want to be here! Please let me out!!“", false, [true, "dialogue.base.choices['2-1']", "dialogue.base.choices['2-2']", "dialogue.base.choices['2-3']"]],
                  "1-2-3R": ["“Please! You’re creeping me out! Just let me go!“", false, [true, "dialogue.base.choices['2-1']", "dialogue.base.choices['2-2']", "dialogue.base.choices['2-3']"]],
                  "1-3R": ["“NO! PLEASE GOD!! STAY AWAY FROM ME!!!”", false, [true, "dialogue.base.choices['2-1']", "dialogue.base.choices['2-2']", "dialogue.base.choices['2-3']"]],
                  "2-1R": ["“Please just let me go! I want to go home! I don’t want to die here!”", false, [true, "dialogue.base.choices['2-1-1']", "dialogue.base.choices['2-1-2']", "dialogue.base.choices['2-1-3']"]],
                  "2-1-1R": ["“Please just let me go! I won’t call the police or anyone else, just let me leave!”<br><br>This isn’t going anywhere, it’s like she’s ignoring your every word, absolutely disinterested. If she wants to be like that, you might as well just leave and go back upstairs.<br><br>“WAIT! Don’t leave me down here! HEEELP!!”", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-1-2R": ["“I……I don’t understand! What is happening?!”", false, [true, "dialogue.base.choices['2-1-2-1']", "dialogue.base.choices['2-1-2-2']", "dialogue.base.choices['2-1-2-3']"]],
                  "2-1-2-1R": ["“Is that what this is about?! No! No! I won’t! Just let me go!”<br><br>That’s a very clear rejection. Defeated, you lower your head and begin to head back upstairs.<br><br>“Hey! Wait! Let me go! Please!!”", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-1-2-2R": ["You know when to give up, that’s not necessarily a bad thing. With a new lesson learned, you head back upstairs.<br><br>“Wait! What’s going on!! Let me OUUUUT!!!!”", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-1-2-3R": ["She cowers in fear. Your crippling social anxiety has taken a hold of you once again. Defeated, you make your way back upstairs.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-1-3R": ["“WHY!! WHY!!!” She hides her face and just repeats that word over and over again. It doesn’t seem like she’d be able to enjoy a day out like this. You give up and head back upstairs.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-2R": ["“A Date?? Is that some other way to say torture?? Just let me go, you don’t have to do this!”", false, [true, "dialogue.base.choices['2-2-1']", "dialogue.base.choices['2-2-2']", "dialogue.base.choices['2-2-3']"]],
                  "2-2-1R": ["“Why do you do this? What have I done to hurt you?”", false, [true, "dialogue.base.choices['2-2-1-1']", "dialogue.base.choices['2-2-1-2']", "dialogue.base.choices['2-2-1-3']"]],
                  "2-2-1-1R": ["“Don’t kill me.”", false, [true, "dialogue.base.choices['2-2-1-1-1']", "dialogue.base.choices['2-2-1-1-2']", "dialogue.base.choices['2-2-1-1-3']"]],
                  "2-2-1-1-1R": ["Why would you want to do that?<br><br>This is a Safe-for-Work, wholesome chungus<br>game. You slip on the ground and hit your head, making you lose 20 IQ<br>and lowering your social credit score by -500. Afterwards, you leave<br>and go upstairs since you can’t remember what you were doing.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-2-1-1-2R": ["“Wait, do you mean an actual date? Is that what all this is about? You psycho!”<br><br>You inquire “Is that a no?”<br><br>“OF COURSE!!”<br><br>Defeated, you leave the basement and head back upstairs.<br><br>“Hey! Wait! Don’t just leave me down here!”", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-2-1-1-3R": ["“NO!” Her voice loses its tone and she goes quiet. She doesn’t seem to respond to anything anymore. There’s no point in staying down here now. You decide to head back upstairs.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-2-1-2R": ["“I just want to go home.”<br><br>It seems like you have pushed her too far. She now just sits there with her head hidden beneath her hands. She doesn’t respond to any stimulation anymore. You won’t get to go on a date with her. Good job.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-2-1-3R": ["“OH GOD!”<br>She got scared by your sudden noises of anxiety and passes out. She can’t go on a date like that. Mission failed. You go back upstairs.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-2-2R": ["“NO! NO!!! DON’T HURT MEE!!!!! PLEASE DON’T HURT ME!!!”<br><br>She hides her face. It doesn’t seem like she’ll move even an inch anymore without being forced to do so. You probably won’t be able to take her on a date of her own volition. You decide to head back upstairs.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-2-3R": ["“NO! NO!!! DON’T HURT MEE!!!!! PLEASE DON’T HURT ME!!!”<br><br>She hides her face. It doesn’t seem like she’ll move even an inch anymore without being forced to do so. You probably won’t be able to take her on a date of her own volition. You decide to head back upstairs.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]],
                  "2-3R": ["“Why me?! WHY!!” She hides her face. It doesn’t seem like she’ll move even an inch anymore without being forced to do so. You probably won’t be able to take her on a date of her own volition. You decide to head back upstairs.", "c", ["end", "dialogue.up.text", "dialogue.up.choices['1-1']", "dialogue.up.choices['1-2']", "dialogue.up.choices['1-3']"]]
              }
      },
  
  "up":
      {
          "text": "You enter your bedroom, where Not Important is waiting for you on your bed. You sit down next to him.<br><br>“So, how did it go?”",
          "choices":
              {
                  "1-1": ["(“I got rejected.”)", false, ["dialogue.up.responses['1-1R']"]],
                  "1-1free": ["(*Lie* “I got rejected“)", false, ["dialogue.up.responses['1-1R']"]],
                  "1-2": ["(“Why was there a woman locked in my basement?”)", false, ["dialogue.up.responses['1-2R']"]],
                  "1-3": ["(“uhhhhhhh…….uhhhhhhh………uh”)", true, ["dialogue.up.responses['1-3R']"]],
                  "2-1": ["(“Maybe I’m just not cut out for this.”)", false, ["dialogue.up.responses['2-1R']"]],
                  "2-2": ["(“I don’t know why you insist on getting me a date. And I don’t actually want to go out.”)", false, ["dialogue.up.responses['2-2R']"]],
                  "2-3": ["(“Uhhhh……uhm…….uhhhhhhhh”)", true, ["dialogue.up.responses['2-3R']"]]
              },
          "responses":
              {
                  "1-1R": ["“Tough luck. But there’ll be more chances.”", "c", ["dialogue.up.responses['2S']"]],
                  "1-2R": ["“I told you, she’s your training partner. I take it you got rejected huh?”", "c", ["dialogue.up.responses['2S']"]],
                  "1-3R": ["“Was it too much for you? Did you do that when you talked to her as well? I don’t even have to ask if you got anywhere then.”", "c", ["dialogue.up.responses['2S']"]],
                  "2S": ["“Well, I don’t have another partner prepared for you, so I guess you’ll have to learn the hard way. Go out there. There are more than enough locations where you could find your soulmate.”", false, [true, "dialogue.up.choices['2-1']", "dialogue.up.choices['2-2']", "dialogue.up.choices['2-3']"]],
                  "2-1R": ["“Don’t give up so fast. Plenty of fish in the sea, as they say. I’ve always managed to get my clients on some kind of date and I won’t fail here either.”", "c", ["dialogue.up.responses['3S']"]],
                  "2-2R": ["“Bullshit, you have just clearly developed Stockholm Syndrome for your prison you call your “House””", "c", ["dialogue.up.responses['3S']"]],
                  "2-3R": ["“Get that out of your system already, you sound like a zombie”", "c", ["dialogue.up.responses['3S']"]],
                  "3S": ["“We’ll have to make do with whatever you did learn down there, if anything. Just go to…...pffffffff……...a bar or something and start from there.”", "c", ["end", "dialogue.bar.text", "dialogue.bar.choices['1-1']", "dialogue.bar.choices['1-2']", "dialogue.bar.choices['1-3']"]]
              }
      },

  "bar":
      {
          "text": "You arrive at the classic, the good-old, the bar. Meeting place for depressed alcoholics in their mid 20s to mid 30s and the most uncreative, unoriginal location to put in your dating game.<br><br>You sit down at the bar. The Bartender comes up to you “What’s your poison?”",
          "choices":
              {
                  "1-1": ["(“Martini, shaken, not stirred”)", false, ["dialogue.bar.responses['1-1R']"]],
                  "1-2": ["(“Whisky, mixed with vodka and gin. Blue Energy-Drink, soda-pop, a teaspoon of brown sugar, spice, everything nice, sprinkles and a cherry on top”)", false, ["dialogue.bar.responses['1-2R']"]],
                  "1-3": ["(“UHHHHHH……..UHMM……UHH”)", true, ["dialogue.bar.responses['1-3R']"]],
                  "2-1": ["(Use a cheesy pickup line)", false, ["dialogue.bar.responses['2-1R']"]],
                  "2-2": ["(“Hi, How are you tonight”)", false, ["dialogue.bar.responses['2-2R']"]],
                  "2-2-1": ["(„Ain’t that nice. Do you mind if we talk for a bit?“)", false, ["dialogue.bar.responses['2-2-1R']"]],
                  "2-2-1-1": ["(“So, what’s your name?”)", false, ["dialogue.bar.responses['2-2-1-1R']"]],
                  "2-2-1-1-1": ["(“Chloe? Your parents must’ve not been that creative huh?”)", false, ["dialogue.bar.responses['2-2-1-1-1R']"]],
                  "2-2-1-1-2": ["(“Nice to meet you Chloe. Sooooo, why are you here alone on such a beautiful friday night?”)", false, ["dialogue.bar.responses['2-2-1-1-2R']"]],
                  "2-2-1-1-2-1": ["(“Drinking alone in a bar is fun for you? That’s just pathetic if you ask me.”)", false, ["dialogue.bar.responses['2-2-1-1-2-1R']"]],
                  "2-2-1-1-2-2": ["(“I know what you mean. The pizza boxes and clothes just pile up and it starts to smell moldy when you don’t open your windows for a while. Your PC heats up and makes the air all dry and stuff.”)", false, ["dialogue.bar.responses['2-2-1-1-2-2R']"]],
                  "2-2-1-1-2-3": ["(“Uhhhhhhhhh......uh......uh.....uh....uhhh“)", false, ["dialogue.bar.responses['2-2-1-3R']"]],
                  "2-2-1-1-3": ["(“Uhhhhhhm………uhhh……..mmmmmmmmhhh”)", false, ["dialogue.bar.responses['2-2-1-3R']"]],
                  "2-2-1-2": ["(“You wanna know how I got these scars?“)", false, ["dialogue.bar.responses['2-2-1-2R']"]],
                  "2-2-1-3": ["(“Uhhhhh......uhmmmmmm.......uhhhhhhhhh“)", false, ["dialogue.bar.responses['2-2-1-3R']"]],
                  "2-2-2": ["(“Now that’s a pretty fucking weird name”)", false, ["dialogue.bar.responses['2-2-2R']"]],
                  "2-2-3": ["(“Uhhhhhh……uhhhh…….uh……arghhh”)", false, ["dialogue.bar.responses['2-2-3R']"]],
                  "2-3": ["(“Uhhhhhh……uhhhh…….uh……arghhh”)", true, ["dialogue.bar.responses['2-3R']"]]
              },
          "responses":
              {
                  "1-1R": ["“Who the fuck stirs a Martini?”<br>After a short while, he comes back and hands you your Drink.", "c", ["dialogue.bar.responses['2S']"]],
                  "1-2R": ["“…….Sir, are you alright?”<br><br>Regardless, he returns after a while and hands you your “Drink”. It looks absolutely revolting.", "c", ["dialogue.bar.responses['2S']"]],
                  "1-3R": ["“……….I’ll just get you a Cuba Libre.”", "c", ["dialogue.bar.responses['2S']"]],
                  "2S": ["From the corner of your eye, you spot a good looking woman in a nice evening dress, short, brown hair, drinking Sex on the Beach with a little umbrella in it.<br><br>This is your chance! You take your alcoholic beverage and approach her.", false, [true, "dialogue.bar.choices['2-1']", "dialogue.bar.choices['2-2']", "dialogue.bar.choices['2-3']"]],
                  "2-1R": ["Confidently, you start “Hey babe, are you free tonight? Because I have no money.”<br><br>She slaps you, spills her drink on your face and spits on you, then promptly leaves. How can you fuck up such an old line? Not that it would have worked but it’d still be better than this.<br><br>You’d better get out of here before it gets even more embarrassing.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]],
                  "2-2R": ["“Well hi there, I’m just fine and dandy.”", false, [true, "dialogue.bar.choices['2-2-1']", "dialogue.bar.choices['2-2-2']", "dialogue.bar.choices['2-2-3']"]],
                  "2-2-1R": ["“Why of course.”<br><br>You sit down, holding your Drink and say:", false, [true, "dialogue.bar.choices['2-2-1-1']", "dialogue.bar.choices['2-2-1-2']", "dialogue.bar.choices['2-2-1-3']"]],
                  "2-2-1-1R": ["“Chloe”", false, [true, "dialogue.bar.choices['2-2-1-1-1']", "dialogue.bar.choices['2-2-1-1-2']", "dialogue.bar.choices['2-2-1-1-3']"]],
                  "2-2-1-1-1R": ["“How rude!”<br><br>She slaps you and leaves the bar without finishing her Drink. You’re not sure what you did wrong. Maybe she just had a bad day.<br><br>Now there’s nothing else to do here, might as well leave too.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]],
                  "2-2-1-1-2R": ["“It’s just too boring at home, I needed to get out of there and have some fun.”", false, [true, "dialogue.bar.choices['2-2-1-1-2-1']", "dialogue.bar.choices['2-2-1-1-2-2']", "dialogue.bar.choices['2-2-1-1-2-3']"]],
                  "2-2-1-1-2-1R": ["“Screw you!” She slaps you and leaves the bar without finishing her Drink. If there’s something to take away from this encounter, it would probably be to not be too honest when talking to other people.<br><br>Since there is nothing else to do here now, you might as well just leave too.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]],
                  "2-2-1-1-2-2R": ["She visibly recoils. “Yeah, haha. Hey, give me just a minute I have to fix my makeup.” You see her make her way to the restroom. Suddenly, you hear a thump somewhere around the back of the building, then hasty footsteps. You wonder what that could be. After an hour of waiting, the bartender comes up to you and says “She’s gone bro, go home.” Defeated once again, you leave the bar.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]],
                  "2-2-1-2R": ["“What scars?“<br><br>You continue “You see, my father was a Gamer, a really bad one. And one day, he loses way more than usual and gets very angry. So he takes his CS-GO knife replica and puts it up to my face“<br><br>You take the straw from her Cocktail, shove it in her mouth and go on<br><br>“And he says “Why so-““<br><br>The woman shoves you away and you fall to the floor. She spits on you agressively and stomps out of the bar. You were just getting to the good part too.<br><br>The bartender comes up to you and politely, yet furiously asks you to leave his establishment. You do as he says.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]],
                  "2-2-1-3R": ["“Are you alright there?” It seems like you’re once again taken over by  your carnal desire to sound like you just got a lobotomy. Since nothing else comes out of your mouth, she gets creeped out and leaves the bar without finishing her drink.<br><br>At some point, you regain consciousness and since she’s already gone, you also leave.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]],
                  "2-2-2R": ["She gets up and slaps your dumbass head, then leaves the bar.<br><br>That is a pretty weird name though…<br><br>Since there’s nothing else to do, you also leave.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]],
                  "2-2-3R": ["“Oh, you are an insane person. And here I was hoping you were a decent guy.“<br><br>She gulps down her drink in one go and leaves the bar. When you regain consciousness a while later, you notice she is long gone and decide to leave as well.<br><br>You should really do something about that habit of yours to just let out one continuous sound every once in a while.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]],
                  "2-3R": ["She turns away from you and leaves without finishing her drink. It seems like you still have a long way to go before you can overcome your social anxiety……or you could just not pick the meme option.<br><br>Regardless, you leave the bar as well since there is nothing else to do now.", "c", ["end", "dialogue.alley.text", "dialogue.alley.choices['1-1']", "dialogue.alley.choices['1-2']", "dialogue.alley.choices['1-3']"]]
              }
      },

  "alley":
      {
          "text": "After the humiliation in that bar, you roam the streets, still disappointed by your incompetence. After a short while, you hear two loud bangs from around the corner. You decide to investigate.<br><br>You arrive at a curious scene. There are two people, a man and a woman, lying on the ground surrounded by blood and a young boy crying beside them. He’s nudging and shaking the woman while crying “Mommy!!”. You wonder who that little boy is and why he’s harassing that woman.<br><br>You approach the young man.",
          "choices":
              {
                  "1-1": ["(“Good evening there young lad. You’re pretty sharply dressed, looks real good on you. You have any plans for tonight?”)", false, ["dialogue.alley.responses['1-1R']"]],
                  "1-2": ["(“Hi there little man, what’s your name?”)", false, ["dialogue.alley.responses['1-2R']"]],
                  "1-3": ["(“Uhhhhhhhhhh……uh……”)", true, ["dialogue.alley.responses['1-3R']"]],
                  "2-1": ["(“Making me meet your parents already? You must be pretty eager.”)", false, ["dialogue.alley.responses['2-1R']"]],
                  "2-2": ["(“Ah, you must be his parents. Nice to meet you”)", false, ["dialogue.alley.responses['2-2R']"]],
                  "2-3": ["(“Uhhhhhhh……..uhmmmmmmmmmmmm”)", true, ["dialogue.alley.responses['2-3R']"]],
                  "3-1": ["(“Hey, sorry for being so straightforward but do you maybe want to go out some time?”)", false, ["dialogue.alley.responses['3-1R']"]],
                  "3-2": ["(Give up)", false, ["dialogue.alley.responses['3-2R']"]],
                  "3-3": ["(“Uhhhhhhh……..uhmmmmmmmmmmmm”)", true, ["dialogue.alley.responses['3-3R']"]]
              },
          "responses":
              {
                  "1-1R": ["“Help! My parents! M-mommy!”", "c", ["dialogue.alley.responses['2S']"]],
                  "1-2R": ["“Bruce. Please! You gotta help my parents!!”", "c", ["dialogue.alley.responses['2S']"]],
                  "1-3R": ["“Help!! My mommy and daddy!!”", "c", ["dialogue.alley.responses['2S']"]],
                  "2S": ["Using your detective-like deduction skills, you find out that these people must be the little boy’s parents.", false, [true, "dialogue.alley.choices['2-1']", "dialogue.alley.choices['2-2']", "dialogue.alley.choices['2-3']"]],
                  "2-1R": ["“Please, call an ambulance, they’ve been shot!!”", "c", ["dialogue.alley.responses['3S']"]],
                  "2-2R": ["“What are you talking about?! You have to help!!”", "c", ["dialogue.alley.responses['3S']"]],
                  "2-3R": ["“Mommy!!!!!!”", "c", ["dialogue.alley.responses['3S']"]],
                  "3S": ["It doesn’t seem to be going too well for you here, but maybe you still have a chance. Will you keep trying?", false, [true, "dialogue.alley.choices['3-1']", "dialogue.alley.choices['3-2']", "dialogue.alley.choices['3-3']"]],
                  "3-1R": ["The little boy cries and wails “HELP!!!!!”. Ouch, seems like he’s not that interested in even giving you a chance. Disappointed, you leave the scene.", "c", ["end", "dialogue.last.text", "dialogue.last.choices['1-1']", "dialogue.last.choices['1-2']", "dialogue.last.choices['1-3']"]],
                  "3-2R": ["It doesn’t seem like he’s interested to go on a date with you in the slightest. Instead of stubbornly trying to seduce him, you realize that you have no chance and leave the scene.", "c", ["end", "dialogue.last.text", "dialogue.last.choices['1-1']", "dialogue.last.choices['1-2']", "dialogue.last.choices['1-3']"]],
                  "3-3R": ["I’ll take that as a no.", "c", ["end", "dialogue.last.text", "dialogue.last.choices['1-1']", "dialogue.last.choices['1-2']", "dialogue.last.choices['1-3']"]]
              }
      },
  
  "last":
      {
          "text": "You’re at the end of the line. There are no more viable places to go. At least none you could think of right now. With your head hung low, you return home. Not Important is already waiting for you in your living room. He’s currently sitting on the sofa, eating chips.<br><br>He turns to you and says “So, how did it go today? Actually, don’t bother answering, I can tell from your aura that you had no luck.”<br><br>He puts the bag of chips on the table and says “I must say, I have never had a case like you. I always believed that everyone is capable of finding at least one person who would be interested in them, but you managed to prove me wrong. It seems there really is no hope for some people out there, including you.”<br><br>You can’t muster up the motivation to deny it, he’s right and you know it.<br><br>“It seems you’ll remain a loner for the rest of your life, I’m sorry but it appears that even I can’t fix you.“<br><br><br>What will you do now?",
          "choices":
              {
                  "1-1": ["(“There’s no point in living like this. I want to share my life with someone, to really matter to just one person. But if that goal is unobtainable, I don’t see the point in anything anymore…”)", false, ["dialogue.last.responses['1-1R']"]],
                  "1-1-1": ["(Do it in the comfort of your own home)", false, ["dialogue.last.responses['1-1-1R']"]],
                  "1-1-2": ["(Leave a last impression on the world)", false, ["dialogue.last.responses['1-1-2R']"]],
                  "1-1-3": ["(“UHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH”)", false, ["dialogue.last.responses['1-1-3R']"]],
                  "1-2": ["(“I will legally marry my favorite anime character!!”)", false, ["dialogue.last.responses['1-2R']"]],
                  "1-3": ["(“Uhhhhhhhhhhhhhhhhh……..uhhhhhh”)", true, ["dialogue.last.responses['1-3R']"]]
              },
          "responses":
              {
                  "1-1R": ["“Yeah, that’s what I thought. I’m not going to try to talk you out of this, it’s your choice. Hell, I’d do the same in your situation. I guess the only choice left to make is how you’ll do it.”", false, [true, "dialogue.last.choices['1-1-1']", "dialogue.last.choices['1-1-2']", "dialogue.last.choices['1-1-3']"]],
                  "1-1-1R": ["After having one last glass of milk, you make your way up to your bedroom and put a belt around your neck. You figure you’re worth just as much as the clothes you wear, so you enter your wardrobe and attach the belt right beside your coats. After some more minutes of reflecting on your life, you plunge yourself into the cold abyss. It doesn’t take long, and hurts less than you imagined. Everything goes dark.", "e", ["dialogue.ending"]],
                  "1-1-2R": ["You want to leave your mark on history. You grab your shotgun you use for home defense and leave your house. You conceal the gun and ride the bus to the local elementary school. You wait right in front of the entrance and remain there until school is over. As soon as the first bulk of children come out, you pull out your shotgun and shout “Hey kids! Check this out!” You bite into the muzzle and say “Get traumatized bitches!” You pull the trigger and everything goes dark.", "e", ["dialogue.ending"]],
                  "1-1-3R": ["There’s nothing else for you to say. You sit down in a corner and repeat this noise. Days pass…..eventually, Not Important leaves, realizing you will never return from this state. After weeks, your body finally gives in and you die of thirst.", "e", ["dialogue.ending"]],
                  "1-2R": ["“Huh? What…..?”<br><br>You sprint to your computer and look up what it takes to buy the rights to a single character of a series and legally marry it. It costs a fortune.<br><br>You empty your bank account and hire a priest to marry your waifu “Yui-chan”. Not Important left ages ago, the moment he realized you were serious about that. You’re finally happy, even though you have no money left, lost your job because of your obsession with your “wife” and subsequently, now live in an alley.", "e", ["dialogue.ending"]],
                  "1-3R": ["This is it. This is all you can do. This is what this adventure has led to. An indecisive, broken man who doesn’t even have the will to put a stop to this miserable existence. You go on living your life the way it has always been. No more adventures, nothing interesting in your life. You will work until you’re too old to be able to, then do nothing until your body gives in. You chose this.", "e", ["dialogue.ending"]]
              }
      },
  
  "secret":
      {
          "text": "Suddenly, a bright light shines through your ceiling and a person descends from the heavens.<br><br>Not Important gets startled and falls to the ground.<br><br>Before you stands a beautiful woman in some kind of white gown with blonde hair.<br>“Greetings, I am Indecivia, goddess of Uhhhhhh. Through your sheer Will and unfaltering conviction, you have proven your dedication to me like no one has ever before.”<br><br>“I have decided to award you the highest honor I can and make you my consort, if you wish so.”<br><br>Not Important mutters “D-does that mean you’ll go on a date with him?”<br><br>“Yes, and much much more. We’ll be together for eternity.”<br><br>“Oh.”<br><br>“So, do you accept my proposal?",
          "choices":
              {
                  "1": ["“Uhhhhhhhhhhh”", false, ["dialogue.secret.responses['resp']"]],
                  "2": ["“UHHHHHMMMMM”", false, ["dialogue.secret.responses['resp']"]],
                  "3": ["“uh”", false, ["dialogue.secret.responses['resp']"]]
              },
          "responses":
              {
                  "resp": ["“I’m glad to hear that. Come, let’s ascend to our happy ending……together.”", "e", ["dialogue.ending"]]
              }
      },
  
  "ending": "Congratulations, you have finished the game.<br><br>Go back and try different options to maybe find another outcome."
});



let uhCounter = 0

image = document.getElementById("image")
// for use when images have been added
image.style.display = "none"
//image.src = "insert here"


currentMain = dialogue.start.text
contentMain = document.getElementById("story")
currentB1 = dialogue.start.choices['1-1']
currentB2 = dialogue.start.choices['1-2']
currentB3 = dialogue.start.choices['1-3']

let contentContinue = document.getElementById("buttonContinue")
let contentB1 = document.getElementById("buttonOne")
let contentB2 = document.getElementById("buttonTwo")
let contentB3 = document.getElementById("buttonThree")

contentMain.innerHTML = currentMain[0]
contentContinue.style.display = "none"
contentB1.innerHTML = currentB1[0];
contentB2.innerHTML = currentB2[0];
contentB3.innerHTML = currentB3[0];


// main method to refresh main text and buttons
function main() {
    evaluatedMain = eval(currentMain[0])
    contentMain.innerHTML = evaluatedMain[0]
    // for when the next element needs a continue button
    if (evaluatedMain[1] == "c") {
        contentContinue.style.display = "block"
        contentContinue.innerHTML = "Continue"
        contentB1.style.display = "none"
        contentB2.style.display = "none"
        contentB3.style.display = "none"
        // for when the current element is the end of a location in the game
        if (evaluatedMain[2][0] == "end") {
          contentContinue.style.display = "block"
          contentB1.style.display = "none"
          contentB2.style.display = "none"
          contentB3.style.display = "none"
          currentMain = eval(evaluatedMain[2][1])
          currentB1 = eval(evaluatedMain[2][2])
          currentB2 = eval(evaluatedMain[2][3])
          currentB3 = eval(evaluatedMain[2][4])
        }
        // normal behavior, will just switch the main text
        else {newCurrent = currentMain[2]
        }
      }
    // triggers the ending sequence
    else if (evaluatedMain[1] == "e") {
        contentContinue.style.display = "block"
        contentContinue.innerHTML = "End"
        contentB1.style.display = "none"
        contentB2.style.display = "none"
        contentB3.style.display = "none"
        currentMain = eval(evaluatedMain[2])
    }
    // will change buttons if needed
    else if (eval(evaluatedMain[2][0]) == true) {
      newButtons = evaluatedMain[2]
      deepcopy1 = structuredClone(newButtons[1])
      deepcopy2 = structuredClone(newButtons[2])
      deepcopy3 = structuredClone(newButtons[3])
      currentB1 = eval(deepcopy1)
      currentB2 = eval(deepcopy2)
      currentB3 = eval(deepcopy3)
      contentB1.innerHTML = currentB1[0]
      contentB2.innerHTML = currentB2[0]
      contentB3.innerHTML = currentB3[0]
    }
    // default behavior for buttons (triggered only if something is wrong)
    else {
      contentB1.innerHTML = "B1 None Dummy"
      contentB2.innerHTML = "B2 None Dummy"
      contentB3.innerHTML = "B3 None Dummy"
    }
}


// gets called when clicking the "Continue" or "End" button
function buttonChangeContinue() {
  // trigger the ending sequence
  if (contentContinue.innerHTML == "End") {
    contentMain.innerHTML = dialogue.ending
    contentContinue.style.display = "none"
  }
  // switch to new location
  else if (evaluatedMain[2][0] == "end") {
    currentMain = evaluatedMain[2][1]
    contentMain.innerHTML = eval(currentMain)
    contentB1.style.display = "block"
    contentB2.style.display = "block"
    contentB3.style.display = "block"
    contentB1.innerHTML = eval(evaluatedMain[2][2])[0]
    contentB2.innerHTML = eval(evaluatedMain[2][3])[0]
    contentB3.innerHTML = eval(evaluatedMain[2][4])[0]
    contentContinue.style.display = "none"
  }
  // standard continue behavior
  else {
    currentMain = evaluatedMain[2]
    contentContinue.style.display = "none"
    contentB1.style.display = "block"
    contentB2.style.display = "block"
    contentB3.style.display = "block"
    main()
  }
}



// gets called when clicking the first choice
function buttonChangeOne() {
  // set the new main text
  currentMain = currentB1[2]
  main()
}


// gets called when clicking the second choice
function buttonChangeTwo() {
  // set the new main text
  currentMain = currentB2[2]
  main()
}

// gets called when clicking the third choice
function buttonChangeThree() {
  // increment the counter for choosing the third option for the secret ending
  if (currentB3[1] == true) {
    uhCounter++
  }
  // trigger the secret ending
  if (uhCounter == 15) {
    uhCounter = 0
    contentMain.innerHTML = dialogue.secret.text
    contentB1.innerHTML = dialogue.secret.choices['1'][0]
    contentB2.innerHTML = dialogue.secret.choices['2'][0]
    contentB3.innerHTML = dialogue.secret.choices['3'][0]
    currentB1 = dialogue.secret.choices['1']
    currentB2 = dialogue.secret.choices['2']
    currentB3 = dialogue.secret.choices['3']
    return
  }
  // set the new main text
  else {
  currentMain = currentB3[2]
  }
main()
}