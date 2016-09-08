var work = {
  "jobs":[{
      "employer":"Applied Solutions of Trinidad and Tobago",
      "title":"Managing Director",
      "location":"Trinidad and Tobago",
      "dates":"June 2014 - Present",
      "description":"Business and marketing strategy development of Injury Care Utility (A lifesaving medical service application that will help individuals get to an emergency location faster.)"
    },{
      "employer":"Pro Pump Limited",
      "title":"Assistant Human Resources Manager",
      "location":"Trinidad and Tobago",
      "dates":"November 2014 - May 2016",
      "description":"Assisting with Human Resources and hiring processes, employee development and training"
    },{
      "employer":"Pro Pump Limited",
      "title":"Assistant Marketing Manager",
      "location":"Trinidad and Tobago",
      "dates":"December 2013 - August 2014",
      "description":"Assisting with the marketing strategy and planning as well as online marketing and development (www.propumptt.com) as a part time position"
    }]
};

var projects = {
  "projects": [
    {
      "title":"Injury Care Utility",
      "dates":"October 2015 - Present",
      "description":"ICU is a medical service that will primarily be used by individuals (ICU), emergency services (ICU First Response) and eventually hospitals and other medical data users (ICU Medical Professional) in developing countries. ",
      "images":[
        "images/icu-front-pic.png"
      ]
    },{
      "title":"Safe Jewellery",
      "dates":"October 2015 - Present",
      "description":"Safe Jewellery is a line of wearable accessories with technologies that work in conjunction with a mobile application to help detect if you have had too much to drink or is under the influence of certain drugs and sends out an alert to your friends, family and, if necessary, the police ",
      "images":[
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
};

var bio = {
  "name": "Christian Chandler",
  "role": "Web Developer",
  "welcomeMessage":"Hard working, focused and a creative thinker. ",
  "bioPic" : "images/me.png",

  "contacts" : {
    "mobile" : "868-339-3838",
    "email" : "mrchristianchandler@gmail.com",
    "github" : "24",
    "location" : "Trinidad and Tobago"
  },
    "skills": ["Business Development", "Marketing Development", "Front End Development", "Communication", "Organization"]
};

var education = {
  "schools" : [
    {
      "name":"Canadian Securities Institute",
      "location":"Toronto, Canada",
      "degree":"Canadian Securities Certificate",
      "majors" : [""],
      "dates":"October 2015 - May 2016",
      "url":""
    },{
      "name":"University of Sunderland",
      "location":"Sunderland, England",
      "degree":"Bachelor of Arts",
      "majors" : ["Business Management"],
      "dates":"September 2014 - May 2015",
      "url":"",
    },{
      "name":"George Brown College",
      "location":"Toronto, Canada",
      "degree":"Advanced Diploma",
      "majors" : ["Business Administration"],
      "dates":"September 2011 – January 2014",
      "url":"",
    }
  ],

  "onlineCourses": [
    {
      "title":"Front-End Web Developer",
      "school":"Udacity",
      "dates":"July 2016 - Present",
      "url":"https://www.udacity.com"
    }
  ]
};


work.display = function() {
  for(var job = 0; job < work.jobs.length; job++ ) {
    $("#workExperience").append(HTMLworkStart);

    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
    $(".work-entry:last").append(formattedworkLocation);
    $(".work-entry:last").append(formattedworkDates);
    $(".work-entry:last").append(formattedworkDescription);
  }
};

work.display();


projects.display = function() {
  for(var proj = 0; proj < projects.projects.length; proj++ ) {
    $("#projects").append(HTMLprojectStart);

    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
    var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);

    $(".project-entry:last").append(formattedprojectTitle);
    $(".project-entry:last").append(formattedprojectDates);
    $(".project-entry:last").append(formattedprojectDescription);

  //PROJECT IMAGES
    for(var projImg = 0; projImg < projects.projects[proj].images.length; projImg++ ) {
      var formattedprojectImages = HTMLprojectImage.replace("%data%", projects.projects[proj].images[projImg]);
      $(".project-entry:last").append(formattedprojectImages);
    }
  }
};

projects.display();


bio.display = function() {
  //NAME, ROLE
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  //WELCOMEMESSAGE
  var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedwelcomeMessage);


  //BIOPIC
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedbioPic);


  //CONTACTS
  var formattedContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedContactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  var formattedContacts = formattedContactsMobile + formattedContactsEmail + formattedContactsGithub + formattedContactsLocation;

  $("#topContacts").append(formattedContacts);
  $("#footerContacts").append(formattedContacts);


  //SKILLS

  $("#header").append(HTMLskillsStart);
  for(var skills = 0; skills < bio.skills.length; skills++ ) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
    $("#skills:last").append(formattedSkills);
  }

};

bio.display();


education.display = function() {
  for(var schools = 0; schools < education.schools.length; schools++ ) {
    $("#education").append(HTMLschoolStart);

    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[schools].location);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[schools].degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[schools].majors);

    $(".education-entry:last").append(formattedschoolName);
    $(".education-entry:last").append(formattedschoolLocation);
    $(".education-entry:last").append(formattedschoolDegree);
    $(".education-entry:last").append(formattedschoolDates);
    $(".education-entry:last").append(formattedschoolMajor);
  }

  for (var online = 0; online <education.onlineCourses.length; online++) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

    $(".education-entry:last").append(formattedonlineTitle);
    $(".education-entry:last").append(formattedonlineSchool);
    $(".education-entry:last").append(formattedonlineDates);
    $(".education-entry:last").append(formattedonlineURL);
  }
};

education.display();


$("#mapDiv").append(googleMap);
