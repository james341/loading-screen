/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"touhou01.jpg",
	"touhou02.jpg",
	"touhou03.jpg"
        "touhou04.jpg"
        "touhou05.jpg"
        "touhou06.jpg"
        "touhou07.jpg"
        "touhou08.jpg"
        "touhou09.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "ylbNYjXgh3M", name: "you reposted in the wrong neighborhood"},
	{youtube: "bR-s4ReIxJo", name: "Foster the People - Pumped up Kicks remix"},
	{youtube: "0t2tjNqGyJI", name: "Twenty One Pilots - Stressed Out"},
	{youtube: "q1ULJ92aldE", name: "Syn Cole - Feel Good"},
	{youtube: "ChK8TZCItyY", name: "Windows Song Trap Remix"},
	{youtube: "feA64wXhbjo", name: "Bag Raiders - Shooting Stars"},
	{youtube: "oxnqx6COUtI", name: "The Notorious B.I.G"},
	{youtube: "1b2MaQoIbRA", name: "A Himitsu - Adventures"},
        {youtube: "OgqDO1wxQ8E", name: "Over The Horizon"},
        {youtube: "owrhKIN3Y90", name: "Carefree - Kevin MacLeod"},
        {youtube: "YAG4k5f9ceQ", name: "take me down like a domino"},
        {youtube: "n4OS3MsWEtw", name: "Lily Allen - Smile"},
        {youtube: "aU3VTCmCWjs", name: "Dancing in the Moonlight"},
        {youtube: "dX3k_QDnzHE", name: "M83 'Midnight City' Official video"},
        {youtube: "R8ZRCXy5vhA", name: "HighNCS Release"},
        {youtube: "RLpPpQk6h7A", name: "Nightcore - Cosby Sweater"},
        {youtube: "s_KhOempeQE", name: "if you close your eyes"},
        {youtube: "v1hBPzPGrUA", name: "Poker Face Lyrics"},
        {youtube: "RPto4nRUsB8", name: "Odjbox - Otto Croy"}
        
        
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Vips Are Responsible For their Own Actions And Will Lose The Rank If Caught Abusing This Gos For Admins AsWell!",
	"The Admins Are AlWays Watching So Dont Fuck Up. And Behave Nigger!",
	"Mingeing In This Server Will Result In A Perma Ban With No Questions Asked!",
        "If you Have Any Issues Contact Us If You Don't See Us In Game 	Let Us Know Here Chromagaming.mistforums.com/!",
        "Thanks For Playing Here Hope You Enjoy Your Time Here M8!",
        "Donate Send Money To Taine049@gmail.com!",
        "Here To Advertise Your Server ? Well If You Are Then You Can Fuck Off Mate. This Server Is Not An Advertising Dumping Ground For 1O Year Old Kids!", 
        "Just Rp For Fuck Sakes!",
        "Do Not Ask For Ranks!",
        "I Dont Know What Else To Fucking Say AnyMore Just Be A Good Boy Or Girl  So You Dont Get Banned Ok!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
