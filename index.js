const Discord = require('discord.js');
const CorsairianBot1 = new Discord.Client();
const CorsairianBot2 = new Discord.Client();
const CorsairianBot3 = new Discord.Client();
const CorsairianBot4 = new Discord.Client();
const CorsairianBot5 = new Discord.Client();
const CorsairianBot6 = new Discord.Client();
const PREFIX = '!';
const YTDL = require("ytdl-core")
var servers = {};
var Verifying = false;

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    }); 
}

let VariableVerified = false;
CorsairianBot1.on('message', (message) => {{
    if(message.channel.name == "cross_communication") {
        console.log(message.channel);
    }
    //Sean
    var VerifyingRBLXUsername;
    if(message.channel.name == "verify" && message.author.username != "Thomson" && VariableVerified == false) {
        let VerifyingRBLXUsername = message.content;
        let VerifyingMember = message.member;
        CorsairianBot1.on('message', (message) => {{
            if(message.channel.name == "verify" && message.author.username == "Thomson" && VariableVerified == false) {
                var VerifyingStatement = message.content;
                if (VerifyingStatement.slice(0, VerifyingStatement.indexOf(" ")) == VerifyingRBLXUsername) {
                    message.channel.send("Verified. Adding you to the discord.");
                    let role = message.guild.roles.find("name", "Tourist");
                    let member = VerifyingMember;
                    member.addRole(role);
                    VariableVerified = true;
                    setTimeout(1000);
                    VariableVerified = nofalse;
                } else {
                    message.channel.send("I suggest you wait for a bit until no one is chatting here, then verify.");
                }
            }
        }})
    }
    
    if(message.content == (PREFIX+'How are you doing, Sean?')) {
        message.channel.send("I'm doing good. You?");
    } else if (message.content == (PREFIX+"How is it going, Sean?")) {
        message.channel.send("Good.");
    } else if (message.content == (PREFIX+"Good")) {
        message.channel.send("Nice.");
    }
    
    if(message.content.startsWith(PREFIX + "start vote") && message.author.username == "SpeakerColonia") {
        let member = message.mentions.members.first();
        message.channel.send(`Vote for ${member.user.username} by putting a reaction on this comment with a checkmark for a vote.`);
    } else if (message.content.startsWith(PREFIX + "commands")) {
        message.author.send("!kick [@member]: Kicks the person from the discord. \n\n!ban [@member]: Bans the person from the discord. \n\n!purge [#]: Removes messages. Number of messages are determined by the #. \n\n!play [youtube link]: Plays out the audio of that youtube video. \n\n!play airhorn, !play no, !play applause, !play ooh, !play hallelujah, !play sadviolin, !play transition, !play doom, !play chant, !play tide, !play march1, !play march2, !play march3, !play trumpet: Plays out a preset sound effect or song. \n\n!roll [#]: Does a dice roll based on #. \n\n!8ball: Gives you an answer from 21 selections. \n\n!either [option 1] | [option 2]: Picks out either option 1 or option 2. \n\n!flip: Does a coin flip. \n\n!newstats: Gives you random stats based on a 100 sided dice. \n\n!battle [player health #] [enemy health #] [player weapon] [enemy weapon] [player attack] [enemy attack] [player stamina] [enemy stamina]: Gives you a battle result based on multiple factors. For attack, usually use custom. \n\n![train/raid/rally] [hour] [place] [@role]: Does an official mention of an event coming.");
    }
    if(message.content.startsWith(PREFIX + "report")) {
        message.channel.send("Here's the criminal report website link, you orfa: https://sites.google.com/view/corsairian-union-hub/criminal-report");
    }
    if(message.content.startsWith(PREFIX + "register")) {
        message.channel.send("The roblox form: https://forum.roblox.com/Forum/ShowPost.aspx?PostID=223711206 \nThe google form: https://sites.google.com/view/corsairian-union-hub/civilian-registration")
    }
    if(message.content.startsWith(PREFIX + "guidebook")) {
        message.channel.send("The KORSAR guidebook: https://sites.google.com/view/corsairian-union-hub/guidebooks");
    }
    if(message.content.startsWith(PREFIX + "language books")) {
        message.channel.send("The language books: https://sites.google.com/view/corsairian-union-hub/language-books")
    }
    if(message.content.startsWith(PREFIX + "rank me") && (message.channel.name == "rank_change")) {
        let MentionedRoles = message.mentions.roles.first();
        var role = message.channel.guild.roles.find('name', 'Rank Assigners');
        
        message.channel.send("Requesting rank assigners.");
        message.channel.send(`${role}, ${message.author.username} requests that they need a rank change to ${MentionedRoles}`);
        message.delete();
        
        console.log("Done");
        
    } else if (message.content.startsWith(PREFIX + "rank me") && (message.channel.name != "rank_change")) {
        message.channel.send("Not in #rank_change channel.")
    }
    if(message.content.startsWith(PREFIX + "help")) {
        message.author.send("Hello. I am Sean, the first Corsairian Automation. My purpose is to make things easier by giving you information on the Corsair, and giving you avenues to learn more about the other bots. Here are the commands that I have. \n\n!amount [role] | I proceed to tell you the amount of people in that role. \n\n!repeat [words] | I repeat what you just said. \n\n!rank me [role] | I message rank assigners that you need a new rank. \n\n!language books | Prints out the link to the language guidebooks. \n\n!registry | Prints out the link to the civilian registration. \n\n!report | Prints out the link to the criminal report. \n\n!guidebook | Prints out the link to the guidebooks for KORSAR. \n\n!main | Prints the main group's link. \n\n!administration | Prints out the administration group link. \n\n!army | Prints out the army group link. \n\n!industry | Prints out the industry group link. \n\n!education | Prints out the education group link. \n\n!kinship | Prints out the family group link. \n\n!art | Prints out the art group link. \n\n!commands | I print out all of the commands you can do in all of the Corsairian discords. \n\n!How are you doing, Sean? | I print out a response. \n\n!How is it going, Sean? | I print out a response. \n\n!Hello, Sean | I say hello to you!")
        //message.channel.send("!train [role] | I message every person that has that specific role the message you want to send out.")
    }
    if(message.content.startsWith(PREFIX + "amount")) {
        const args = message.content.split(/\s+/g).slice(1);
        let role = message.mentions.roles.first();
        members = message.guild.roles.get(role.id).members; 
        message.channel.send(`${members.size} is the amount of people in this role.`);
        //members.sendMessage(args[1]);
    }
    if(message.content.startsWith(PREFIX + "main")) {
        message.channel.send("Main group: https://www.roblox.com/My/Groups.aspx?gid=2736265");
    } else if (message.content.startsWith(PREFIX + "administration")) {
        message.channel.send("Administration group: https://www.roblox.com/My/Groups.aspx?gid=2837340");
    } else if (message.content.startsWith(PREFIX + "army")) {
        message.channel.send("Armed forces group: https://www.roblox.com/My/Groups.aspx?gid=2659147");
    } else if (message.content.startsWith(PREFIX + "industry")) {
        message.channel.send("Industry group: https://www.roblox.com/My/Groups.aspx?gid=2641732");
    } else if (message.content.startsWith(PREFIX + "education")) {
        message.channel.send("Education group: https://www.roblox.com/My/Groups.aspx?gid=2680067");
    } else if (message.content.startsWith(PREFIX + "kinship")) {
        message.channel.send("Art group: https://www.roblox.com/My/Groups.aspx?gid=2680146");
    } else if (message.content.startsWith(PREFIX + "art")) {
        message.channel.send("Art group: https://www.roblox.com/My/Groups.aspx?gid=2680075");
    }
    
    if(message.content == (PREFIX+'Hello, Sean')) {
        //const args = message.content.split(/\s+/g).slice(1);
        message.channel.send(`Hello ${message.author.username}`);
    } else if(message.content.startsWith(PREFIX + "repeat")) {
        const args = message.content.split(/\s+/g).slice(1);
        i = 0;
        message.channel.send(args.join(" "));
        
    } 
    
    
}})
CorsairianBot2.on('message', (message) => {{
    //Kim
    if(message.channel.name == "bot_commands" &&  message.content.startsWith(PREFIX) != true && message.author.username != 'CorsairianAutomatonIII' && message.author.username != 'CorsairianAutomaton') {
        message.delete();
        message.channel.send("Go back to the text channel from whence you came, you off topic poster!");
    }
    if(message.content != PREFIX + "rank me" && (message.channel.name == "rank_change") && message.author.username != 'CorsairianAutomatonIII' && message.author.username != 'CorsairianAutomaton') {
        message.delete();
        message.channel.send("Ugh, say !rank me @[rolename]. Raejael. Read what Sean spams all the time, will ya?");
    }
    if(message.content != "" && message.channel.name == "patron_god_offerings" && message.author.username != 'CorsairianAutomatonIII' && message.author.username != 'CorsairianAutomaton') {
        message.delete();
        message.channel.send("Images only, mortal. Your gods demand it, Servitor!");
    }
    if(message.content != "" && message.channel.name == "voting" && message.author.username != 'CorsairianAutomatonIII' && message.author.username != 'CorsairianAutomaton') {
        message.delete();
        message.channel.send("Silly civilian. Your votes don't matter.");
    }
    if (message.content.startsWith(PREFIX + "kick") && message.author.username == "SpeakerColonia") {
        let member = message.mentions.members.first();
        member.kick();
        message.channel.send("Finally that taee kgnus-zo zehanmus is gone, for now.");
    } else if (message.content.startsWith(PREFIX + "ban") && message.author.username == "SpeakerColonia") {
        let member = message.mentions.members.first();
        member.ban();
        message.channel.send("Raejael, that felt good. To see someone gone that has been causing a disturbance to the server.");
    } else if (message.content.startsWith(PREFIX + "purge") && message.author.username == "SpeakerColonia") {
        const args = message.content.split(/\s+/g).slice(1);
        let messagecount = parseInt(args[0]);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
        message.channel.send("I deleted your messages. Are you happy now?");
    }
    
}})
CorsairianBot3.on('message', (message) => {{
    //Michelle
    if (message.content.startsWith(PREFIX + "play")) {
        const args = message.content.split(/\s+/g).slice(1);
        if (args[0] == null) {
            message.channel.send(`Add a youtube link ${message.author.username} please. I need a link to play the music.`);
        } 
        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }
        if (!message.member.voiceChannel) {
            message.channel.send(`${message.author.username}, how can you listen to music without being in a voice channel?`)
        } else {
            var server = servers[message.guild.id];
            if(args[0].startsWith("http") != true) {
                
                if (args[0] == "airhorn") {
                    server.queue.push(`https://www.youtube.com/watch?v=2Tt04ZSlbZ0`);
                } else if (args[0] == "no") {
                    server.queue.push(`https://www.youtube.com/watch?v=kiA_wC01KKo`);
                } else if (args[0] == "applause") {
                    server.queue.push(`https://www.youtube.com/watch?v=Gyu82WG_edM`);
                } else if (args[0] == "ooh") {
                    server.queue.push(`https://www.youtube.com/watch?v=ffAFlvLaHBM`);
                } else if (args[0] == "hallelujah") {
                    server.queue.push(`https://www.youtube.com/watch?v=nsBByTiKfyY`);
                } else if (args[0] == "sadviolin") {
                    server.queue.push(`https://www.youtube.com/watch?v=7ODcC5z6Ca0`);
                } else if (args[0] == "transition") {
                    server.queue.push(`https://www.youtube.com/watch?v=adWQPXQAG4A`);
                }
                if (!message.guild.voiceConnection) message.member.voiceChannel.join()
                    .then(function(connection) {
                    play(connection, message);
                });
            } else {
              server.queue.push(args[0]);  

              if (!message.guild.voiceConnection) message.member.voiceChannel.join()
                    .then(function(connection) {
                    play(connection, message);
                });
            }  
        }
        
    } else if(message.content.startsWith(PREFIX + "stop")) {
        var server = servers[message.guild.id];

        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    } else if(message.content.startsWith(PREFIX + "skip")) {
        var server = servers[message.guild.id];

        if(server.dispatcher) server.dispatcher.end();
    }

}})
CorsairianBot4.on('message', (message) => {{
    //Nolan
    if(message.channel.name == "roleplay" && message.content.startsWith(PREFIX + "roll")) {
        message.channel.send("You got a " + Math.floor(Math.random() * 100));
    } else if (message.channel.name == "roleplay" && message.content.startsWith(PREFIX + "8ball")) {
        const args = message.content.split(/\s+/g).slice(1);
        var Result = Math.floor(Math.random() * 20)
        if (Result == 0) {
            message.channel.send("It is certain.")
        } else if (Result == 1) {
            message.channel.send("It is decidedly so.")
        } else if (Result == 2) {
            message.channel.send("Without a doubt.")
        } else if (Result == 3) {
            message.channel.send("Yes definitely.")
        } else if (Result == 4) {
            message.channel.send("You may rely on it.")
        } else if (Result == 5) {
            message.channel.send("As I see it, yes.")
        } else if (Result == 6) {
            message.channel.send("Most likely.")
        } else if (Result == 7) {
            message.channel.send("Outlook good.")
        } else if (Result == 8) {
            message.channel.send("Yes.")
        } else if (Result == 9) {
            message.channel.send("Signs point to yes.")
        } else if (Result == 10) {
            message.channel.send("Reply hazy try again.")
        } else if (Result == 11) {
            message.channel.send("Ask again later.")
        } else if (Result == 12) {
            message.channel.send("Better not tell you now.")
        } else if (Result == 13) {
            message.channel.send("Cannot predict now.")
        } else if (Result == 14) {
            message.channel.send("Concentrate and ask again.")
        } else if (Result == 15) {
            message.channel.send("Don't count on it.")
        } else if (Result == 16) {
            message.channel.send("My reply is no.")
        } else if (Result == 17) {
            message.channel.send("My sources say no.")
        } else if (Result == 18) {
            message.channel.send("Outlook not so good.")
        } else if (Result == 19) {
            message.channel.send("Very doubtful.")
        } else if (Result == 20) {
            message.channel.send("You got the magic number 20! Also, my reply is no.")
        }
    } else if (message.channel.name == "roleplay" && message.content.startsWith(PREFIX + "either")) {
        const args = message.content.split(/\s+/g).slice(1);
        for (i = 0; i < args.length; i++) { 
            if (args[i] == "|") {
                var Border = i;
                var Chance = Math.floor(Math.random() * 2);
                if (Chance == 1) {
                    let newargs = args.slice(Border + 1);
                    message.channel.send(`I choose, ` + newargs.join(" "))
                } else {
                    let newargs = args.slice(0, Border);
                    message.channel.send(`I choose, ` + newargs.join(" "))
                }
            }
        }
    } else if (message.channel.name == "roleplay" && message.content.startsWith(PREFIX + "flip")) {
        var Chance = Math.floor(Math.random() * 2);
        if (Chance == 1) {
            message.channel.send("Tails.")
        } else {
            message.channel.send("Heads.")
        }
    } else if (message.channel.name == "roleplay" && message.content.startsWith(PREFIX + "newstats")) {
        message.channel.send("Your strength is " + Math.floor(Math.random() * 100) + ". Your health is " + Math.floor(Math.random() * 100) + ". Your stamina is " + Math.floor(Math.random() * 100) + ".");
    } else if (message.channel.name == "roleplay" && message.content.startsWith(PREFIX + "battle")) {
        const args = message.content.split(/\s+/g).slice(1);
        var PlayerHealth = Number(args[0]);
        var EnemyHealth = Number(args[1]);
        var PlayerWeapon = args[2];
        var EnemyWeapon = args[3];
        var PlayerTypeOfAttack = args[4];
        var EnemyTypeOfAttack = args[5];
        var PlayerStamina = args[6];
        var EnemyStamina = args[7];
        if (PlayerWeapon == "fist") {
            PlayerTypeOfAttack = "punch";
        } else if (PlayerWeapon == "feet") {
            PlayerTypeOfAttack = "kick";
        }  
        if (EnemyWeapon == "fist") {
            EnemyTypeOfAttack = "punch";
        } else if (EnemyWeapon == "feet") {
            EnemyTypeOfAttack = "kick";
        } 
        if (PlayerTypeOfAttack == "kick") {
            var PlayerAttack = 5;
            var PlayerThresholdStamina = 130;
        } else if (PlayerTypeOfAttack == "punch") {
            var PlayerAttack = 3;
            var PlayerThresholdStamina = 120;
        }
        if (PlayerTypeOfAttack == "custom") {
            var PlayerAttack = PlayerStamina / 5;
            var PlayerThresholdStamina = 170;
        }
        if (EnemyTypeOfAttack == "kick") {
            var EnemyAttack = 5;
            var EnemyThresholdStamina = 130;
        } else if (EnemyTypeOfAttack == "punch") {
            var EnemyAttack = 3;
            var EnemyThresholdStamina = 120;
        }
        if (EnemyTypeOfAttack == "custom") {
            var EnemyAttack = EnemyStamina / 5;
            var EnemyThresholdStamina = 170;
        }
        var PlayerResult = Math.floor(Math.random() * 100) + Number(PlayerStamina);
        var EnemyResult = Math.floor(Math.random() * 100) + Number(EnemyStamina);
        
        message.channel.send("You attacked with your " + PlayerWeapon + " and rolled a " + Number(PlayerResult));
        if (PlayerResult >= PlayerThresholdStamina) {
            message.channel.send("You dealt " + PlayerAttack + " and now the enemy has " + EnemyHealth - PlayerAttack);
        } else {
            var Chance = Math.floor(Math.random() * 5)
            if (Chance == 0) {
                Chance == 3;
            }
            if (Chance == 1) {
                message.channel.send("You tripped on your way to attack.");
            } else if (Chance == 2) {
                message.channel.send("Your winded. You just can't fight right now.");
            } else if (Chance == 3) {
                message.channel.send("Your attempt to attack was blocked by the enemy.");
            } else if (Chance == 4) {
                message.channel.send("Your hit barely did anything to harm the enemy.");
            } else if (Chance == 5) {
                message.channel.send("Just by random chance, the enemy dodged your attack.");
            } 
        }
        message.channel.send("The enemy attacked with it's " + EnemyWeapon + " and rolled a " + Number(EnemyResult));
        if (EnemyResult >= EnemyThresholdStamina) {
            message.channel.send("The enemy dealt " + EnemyAttack + " and now you now have " + PlayerHealth - EnemyAttack);
        } else {
            var Chance = Math.floor(Math.random() * 5)
            if (Chance == 0) {
                Chance == 3;
            }
            if (Chance == 1) {
                message.channel.send("The enemy tripped on it's way to attack.");
            } else if (Chance == 2) {
                message.channel.send("The enemy is winded. It just can't fight right now.");
            } else if (Chance == 3) {
                message.channel.send("The enemy attempt to attack was blocked by you.");
            } else if (Chance == 4) {
                message.channel.send("The enemy's hit barely did anything to harm you.");
            } else if (Chance == 5) {
                message.channel.send("Through determination and agility, you dodged the enemies attack.");
            } 
        }
    }
}})
CorsairianBot5.on('message', (message) => {{
    //Adolph
    if(message.content.startsWith(PREFIX + "train")) {
        const args = message.content.split(/\s+/g).slice(1);
        let hour = args[0];
        let place = args[1];
        let role = message.mentions.roles.first();
        message.channel.send(`${message.author.username} is training the ${role} at ${place} in ${hour} hours.`);
    } else if (message.content.startsWith(PREFIX + "rally")) {
        const args = message.content.split(/\s+/g).slice(1);
        let hour = args[0];
        let place = args[1];
        let role = message.mentions.roles.first();
        message.channel.send(`${message.author.username} is rallying at ${place} with the ${role} in ${hour} hours.`);
    } else if (message.content.startsWith(PREFIX + "raid")) {
        const args = message.content.split(/\s+/g).slice(1);
        let hour = args[0];
        let place = args[1];
        let role = message.mentions.roles.first();
        message.channel.send(`${message.author.username} is raiding ${place} with the ${role} in ${hour} hours.`);
    } 
}})

CorsairianBot6.on('message', (message) => {{
    //Joseph
    if (message.content.startsWith(PREFIX + "play")) {
        const args = message.content.split(/\s+/g).slice(1);
        if (args[0] == null) {
            message.channel.send(`I, the greatest of music bots, will inform you that you need to do !doom, !chant, !tide, !march(1-3), or !trumpet. Another soul enlightened.`);
        } 
        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }
        if (!message.member.voiceChannel) {
            message.channel.send(`${message.author.username}, may I inform you that you need to be in a voice channel? Another soul enlightened.`)
        } else {
            var server = servers[message.guild.id];
           
                
            if (args[0] == "doom") {
                server.queue.push(`https://www.youtube.com/watch?v=BSsfjHCFosw`);
            } else if (args[0] == "chant") {
                server.queue.push(`https://www.youtube.com/watch?v=yx61xeDV_60`);
            } else if (args[0] == "tide") {
                server.queue.push(`https://www.youtube.com/watch?v=2iiRrjiIuSU`);
            } else if (args[0] == "march1") {
                server.queue.push(`https://www.youtube.com/watch?v=zgKazTrhXmI`);
            } else if (args[0] == "march2") {
                server.queue.push(`https://www.youtube.com/watch?v=p5mmFPyDK_8`);
            } else if (args[0] == "march3") {
                server.queue.push(`https://www.youtube.com/watch?v=Fr8dNK4xBfo`);
            } else if (args[0] == "trumpet") {
                server.queue.push(`https://www.youtube.com/watch?v=0vZpb9wFPx0`);
            }
            if (!message.guild.voiceConnection) message.member.voiceChannel.join()
                .then(function(connection) {
                play(connection, message);
            });
             
        }
        
    } else if(message.content.startsWith(PREFIX + "stop")) {
        var server = servers[message.guild.id];

        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    } else if(message.content.startsWith(PREFIX + "skip")) {
        var server = servers[message.guild.id];

        if(server.dispatcher) server.dispatcher.end();
    }
}})
CorsairianBot1.login(process.env.BOT_TOKEN1);
CorsairianBot2.login(process.env.BOT_TOKEN2);
CorsairianBot3.login(process.env.BOT_TOKEN3);
CorsairianBot4.login(process.env.BOT_TOKEN4);
CorsairianBot5.login(process.env.BOT_TOKEN5);
CorsairianBot6.login(process.env.BOT_TOKEN6);
