/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.06
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Nigress Gaming ";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/touhou01.jpg",
	"backgrounds/images/touhou02.jpg",
        "backgrounds/images/touhou03.jpg",
        "backgrounds/images/touhou04.jpg",
        "backgrounds/images/touhou05.jpg",
        "backgrounds/images/touhou06.jpg"
        "backgrounds/images/touhou07.jpg"
        "backgrounds/images/touhou08.jpg"
        "backgrounds/images/touhou09.jpg"
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
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "TW9d8vYrVFQ", name: "Elektronomia - Sky High"},
	{youtube: "NJNp6DnAAIo", name: "Cartoon - C U Again feat. Mikk Mäe (Cartoon vs Futuristik VIP"},
	{youtube: "6-hRrKFkAQE", name: "WRLD - By Design"},
        {youtube: "9iHM6X6uUH8", name: "Jim Yosef Link"},
        {youtube: "nfWlot6h_JM", name: "Taylor Swift - Shake It Off"},
        {youtube: "Ssvu2yncgWU", name: "We Are One Vexento"},
        {youtube: "dM2hrLwdaoU", name: "Distrion & Alex Skrindo Lightning"},
        {youtube: "47P3bzefCVI", name: "Silverchair Straight Lines"},
        {youtube: "Ycmwj461TtU", name: "You Reposted In The Wrong Neighborhood"},
	{youtube: "MkNeIUgNPQ8", name: "Adventures A Himitsu"},
        {youtube: "q1ULJ92aldE", name: "Syn Cole Feel Good"},
        {youtube: "VcEKPAKuvgU", name: "Close to You"},
        {youtube: "szj59j0hz_4", name: "Galantis Runaway"},
        {youtube: "SE_QDk3dR4c", name: "Candy Coloured Sky"},
        {youtube: "If191dSnbvU", name: "Candyland NCSRelease"},
        {youtube: "RPto4nRUsB8", name: "Odjbox - Otto Croy"}
        
        
];
/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Enjoy the server!",
"Thanks For Joining Us To Day M8!",
"if you are here to  minge rdm prop kill and all of that shit you might as well bloody fuck off out of here!",
"Need a staff member? Use @ Before your message!",
"Groups Known As The Chaink Gang OR Trout Gang. Are Not Permitted And Will Be Ip Banned ASAP!",
"Apply For Staff Here http://divineforums.mistforums.com/category/staff-application-198649!",
"Do Not Hack With In This Server Or You May Get Banned!",

];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
