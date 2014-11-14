// Define variables here. 
var bio = {
 "name": "Rohit Gupta",
 "role": "Web Developer",

 "contacts": {
  "mobile": "408-421-2791",
  "email": "rohit_bmw@yahoo.com",
  "github": "rohitcricket",
  "twitter": "@rohit_bmw",
  "linkedin": "/in/rohitbmw",
  "location": "Santa Clara, Calilfornia"
  },

 "welcomeMessage": "Hello! My mission is to help build great user experiences. I did that at Palm; I want to do it for you.",
 "skills": ["JavaScript ...",  "HTML/CSS ...", "Ruby on Rails ...", "AngularJS ...", "Usability Analysis ...", "SaaS Marketing/Sales"],

 "bioPic": "images/rohit.jpg"
}


var work = {
	"jobs": [
		{
			"employer": "Morgan Stanley",
			"title": "Business Development",
			"location": "Menlo Park, CA",
			"dates": "Jan 2013 - Apr 2014",
			"description": "Bringing financial solutions to startups and recently IPOed companies. Stock plans, lending against receivables and bridge loans."
		},

		{
			"employer": "VC Taskforce",
			"title": "Social Media Manager",
			"location": "Palo Alto, CA",
			"dates": "Mar 2012 - Dec 2012",
			"description": "Social Media marketing targeting the venture community. Key clients: The Draper Family, Pitch Johson, Reid Hoffman, Ann Winblad."

		},

				{
			"employer": "Vayulogic",
			"title": "Account Manager",
			"location": "Palo Alto, CA",
			"dates": "Aug 2009 - Dec 2010",
			"description": "Selling mobile SaaS platform for retailers. Key clients: Whole Foods, Round Table Pizza."

		},

		{
			"employer": "Palm",
			"title": "Market Intelligence Manager (Strategic Marketing)",
			"location": "Sunnyvale, CA",
			"dates": "June 2008 - Jan 2009",
			"description": "Positioning Palm webOS devices as the lifestyle and work choice."

		},

		{
			"employer": "Credence",
			"title": "Corporate Marketing Manager (Strategic Marketing)",
			"location": "Sunnyvale, CA",
			"dates": "Aug 2006 - Jan 2008",
			"description": "Turning around Credence as the consumer, mobile chip testing company."

		},

				{
			"employer": "Credence",
			"title": "Engineering Manager/Staff Engineer",
			"location": "Sunnyvale, CA",
			"dates": "Apr 2005 - Jul 2006",
			"description": "Architecting Flash Memory Chip Testing Machine."

		}

	]
}

var projects = {
	"projects": [
		{
			"title": "Interative Resume",
			"dates": "2014",
			"description": "An online resume that interacts with the user.",
			"images": [
				
			]
		},

		{
			"title": "Sell your handmade stuff",
			"dates": "2014",
			"description": "An ecommerce website powered by Ruby on Rails.",
			"images": [
				"http://daedraevans.files.wordpress.com/2012/04/etsy.gif",
				"http://daedraevans.files.wordpress.com/2012/04/etsy.gif"
			]
		}

	]
}


var education = {

	"schools": [
		{
			"name": "University of California, Santa Barbara",
			"years": "1992-1998",
			"city": "Santa Barbara, California, USA",
			"degree": "Doctorate",
			"major": "Mechanical Engineering"
		},

		{
			"name": "University of California, Santa Barbara",
			"years": "1990-1992",
			"city": "Santa Barbara, California, USA",
			"degree": "Masters",
			"major": "Mechanical Engineering"
		},

		{

			"name": "Indian Institute of Technology, BHU",
			"years": "1986-1990",
			"city": "Varanasi, UP, India",
			"degree": "Bachelors",
			"major": "Mechanical Engineering"

		}
	],

	"onlineCourse": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"urls" : "http://wwww.udacity.com"
	
		},

		{
			"title": "The Startup's Guide to Web Development with Ruby On Rails",
			"school": "Udemy",
			"dates": 2014,
			"urls" : "http://wwww.udemy.com"

		}

	]
} 

// End of variables section. 


// The header section.

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);


$("#header").prepend(formattedImage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$('#header').append(formattedWelcomeMsg);


$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedlinkedin);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);

// Displaying Skills at a Glance

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills.join(" "));
    $("#skills").append(formattedSkill);
}



// Displaying Work Experience
function displayWork() {

	for (job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    formattedworkTitle = formattedworkEmployer + formattedworkTitle;
    $(".work-entry:last").append(formattedworkTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    }
}

displayWork();

// End of Work Experience section

projects.display = function() {
  for (project in projects.projects) {

   $("#projects").append(HTMLprojectStart);

   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
   $(".project-entry:last").append(formattedTitle);

   var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
   $(".project-entry:last").append(formattedDates);

   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
   $(".project-entry:last").append(formattedDescription);

   if (projects.projects[project].images.length > 0) {
   	for (image in projects.projects[project].images) {
   		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
   		$(".project-entry:last").append(formattedImage);
   	}
   }

  }

}

projects.display();


// End of Projects section

function displayEducation () {
  
   for (school in education.schools) {
	   $("#education").append(HTMLschoolStart);
	  
	   var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	   var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	   var formattedschoolDegree = formattedschoolName + formattedschoolDegree; 
	   $(".education-entry:last").append(formattedschoolDegree);
	  
	   var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
	   $(".education-entry:last").append(formattedschoolDates);
	  
	   var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
	   $(".education-entry:last").append(formattedschoolLocation);

	   var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	   $(".education-entry:last").append(formattedschoolMajor);

	}

  }

displayEducation(); 


function displayonlinecourses() { 

  $(".education-entry:last").append(HTMLonlineClasses);
  for (course in education.onlineCourse) {

	  var formattedonlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
	  $(".education-entry:last").append(formattedonlineTitle);
	  
	  var formattedonlineDates =  HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
	  $(".education-entry:last").append(formattedonlineDates);

	  var formattedonlineSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
	  $(".education-entry:last").append(formattedonlineSchool);
	   
	  var formattedonlineUrl =  HTMLonlineURL.replace("%data%", education.onlineCourse[course].urls);
	  $(".education-entry:last").append(formattedonlineUrl);

  }	
			 
}

displayonlinecourses();



// Other sections



$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

function locationizer(work_obj) {
   var locationArray = [];

   for (job in work_obj.jobs) {
   	var newLocation = work_obj.jobs[job].location;
   	locationArray.push(newLocation);
   }

   return locationArray;

}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase;
	name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}


// footer section

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$('#footerContacts').append(internationalizeButton);
$("#footerContacts").append(formattedtwitter);
$("#footerContacts").append(formattedlinkedin);

// map section

$("#mapDiv").append(googleMap);