/*Sample HTML PAGE
<!DOCTYPE html>

<!--
This is an HTML document. It contains information about how elements in the website
are arranged. In other words, it describes the layout of a website.

I can't wait to see the resumes you put together!

Cameron Pittman, Udacity Course Developer
-->

<!--
The <head> of a website generally links to important resources the page will
need to load. You'll see a lot of <link>s to CSS files for styles and
<scripts> for JavaScript files to build interactions.
-->
<html>
<head>
  <!-- This tells the browser how to read the document. -->
  <meta charset="utf-8">

  <!-- Tells the browser what the title of this page should be. -->
  <title>Resume</title>

  <!-- Load the page styles. -->
  <link href="css/style.css" rel="stylesheet">



  <!--
  Uncomment the <script> tag below when you're ready to add an interactive Google Map to your resume!
  -->
<!-- <script src="http://maps.googleapis.com/maps/api/js?libraries=places"></script> -->

  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
  <div id="main">
    Hello world!   <!-- You'll be deleting this line in the course -->

    <!--
    Everything from here to the <script> tag below is the skeleton of your
    website. Your code will add information to each of the sections of the
    resume below. You can pretty easily figure out what each section will
    display by looking at the id or at what's written between the <h2> tags.
    -->
    <div id="header" class="center-content clear-fix">
      <ul id="topContacts" class="flex-box"></ul>
    </div>
    <div style="clear: both;"></div>
    <div id="workExperience" class="gray">
      <h2>Work Experience</h2>
    </div>
    <div id="projects">
      <h2>Projects</h2>
    </div>
    <div id="education" class="gray">
      <h2>Education</h2>
    </div>
    <div id="mapDiv">
      <h2>Where I've Lived and Worked</h2>
    </div>
    <div id="lets-connect" class="dark-gray">
      <h2 class="orange center-text">Let's Connect</h2>
        <ul id="footerContacts" class="flex-box">
      </ul>
    </div>
  </div>
*/

/* Node location as Variable values

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

*/

var bio = {
  "name":"Omari",
  "role":"web developer",
  "welcomeMessage": "Experienced web developer, focused on innovation and efficiency",
  "biopic" :"Lorem Ipsum",
  "contact": {"Mobile": "510-421-1379",
      "Address": "3230 Storer Ave, Oakland,Ca 94619",
      "Email" : "oblockton@gmail.com",
      "Github" : "oblockton"
  },

  var formattedMobile = HTMLmobile.replace("%data%", bio.contact.Mobile);
$("#topContacts").prepend(formattedMobile);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.Address);
$("#topContacts").prepend(formattedLocation);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.Email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.Github);
$("#topContacts").append(formattedGithub);
console.log(bio.contact.Mobile);
