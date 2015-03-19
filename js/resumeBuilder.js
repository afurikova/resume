
var el      =  $('site')[0];
console.log(el);
// var src     =  $(el).css('background-image').slice(4, -1);
// var img     =  new Image();

// checkHeight =  function(){    
//     if(img.height < window.innerHeight){
//        repeatBg();     
//     }
// }
// img.onload  =  checkHeight();
// img.src = src;

// create an object, bio, with basic infomations and skills in JSON format
var bio = {
	"name" : "Andrea Furikova",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "afurikova@yahoo.fr",
		"mobile" : "+32 478 24 28 66", 
		"github" : "afurikova", 
		"location" : "Soignies (Belgium)"
		},
	"age" : 30,	
	"computerSkills" : ["HTML", " CSS", "Python","JavaScript","jQuery","Git","Windows", "Active Directory","Adobe Photoshop","Adobe InDesign","Adobe Illustrator","Amadeus","Analytic and Logical Thinking","Customer Service", "Communication","Czech", " Slovak", "English","French","Krav Maga","Cooking"],
    "bioPic" : "images/pic1.jpg",
	"welcomeMsg" : "<cite>Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.</cite> Martin Luther. " 
}

// deffine the display function in bio
bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", [bio.name]);
    var formattedRole = HTMLheaderRole.replace("%data%", [bio.role]);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    // display contacts
    var formattedMobile = HTMLmobile.replace("%data%", [bio.contacts.mobile]);
    var formattedEmail = HTMLemail.replace("%data%", [bio.contacts.email]);
    var formattedLocation = HTMLlocation.replace("%data%", [bio.contacts.location]);
    var formattedGithub = HTMLgithub.replace("%data%", [bio.contacts.github]);

    $("#topContacts").append(formattedMobile, formattedEmail, formattedLocation, formattedGithub);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedLocation, formattedGithub);

    // display picture
    var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedPic);

    // display Welcome msg
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
    $("#header").append(formattedWelcomeMsg);


    // adds skills to the header 
    $("#header").append(HTMLskillsStart)
    for (skill in bio.computerSkills){
        var formattedSkills = HTMLskills.replace("%data%", bio.computerSkills[skill]);
        $("#skills").append(formattedSkills)
    }

}
// call for display function in bio
bio.display();

// create an object "education" containing visite schools and courses in JSON format
var education = {
    "schools": [
        {
            "name" : "Metropolitan University Prague o.p.s",
            "degree" : "Bachelor",
            "major" : "International Relations and European Studies",
            "location" : "Prague, Czech Republic",
            "year" : "2012 "
        },
        {
            "name" : "Aarhus University",
            "major" : "Political science",
            "location" : "Aarhus, Denmark",
            "year" : "2012 "
        },
        {
            "name" : "Secondary Vocational School, s. r. o., Prague (Czech Republic) ",
            "degree" : "Leaving School Examination",
            "major" : "Management and Information Technology",
            "location" : "Prague, Czech Republic",
            "year" : "2005 "
        },
        {
            "name" : "Private Secondary School of Information Technology s.r.o.",
            "location" : "Prague, Czech Republic",
            "major" : "Information Technology",
            "year" : "2003 ",
            //"degree" : "none"
        }
    ],

    "onlineCourses": [{
            "name": "French",
            "school" : "Wallangue",
            "url": "http://www.wallangues.be/",
            "date" : "present"
        },
        {
            "name": "Java Script Basics",
            "school" : "Udacity",
            "url": "https://www.udacity.com/",
            "date" : "2014"
        },
        {
            "name": "Introduction to the Computer Science",
            "school" : "Udacity",
            "url": "https://www.udacity.com/",
            "date" : "2014"
        },
        {
            "name": "Windows 7",
            "school" : "IT Free Training",
            "url": "http://itfreetraining.com/",
            "date" : "2013"
        },
        {
            "name": "Dutch",
            "school" : "Wallangue",
            "url": "http://www.wallangues.be/",
            "date" : "present"
        },
        {
            "name": "Object-Oriented JavaScript",
            "school" : "Udacity",
            "url": "https://www.udacity.com/",
            "date" : "2015"
        },
        {
            "name": "Initiation au Language PHP",
            "school" : "Udacity",
            "url": "http://www.technofuturtic.be/",
            "date" : "2015"
        },
        {
            "name": "HTML5 Canvas",
            "school" : "Udacity",
            "url": "https://www.udacity.com/",
            "date" : "2015"
        },
        {
            "name": "Web Development",
            "school" : "Udacity",
            "url": "https://www.udacity.com/",
            "date" : "present"
        }
    ]
}

// define a display method for the object "education"
education.display = function(){
    
    // add information about schools
    $("#education").append(HTMLschoolStart); 
    for (school in education.schools){    
           
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        
        //display a degree if any
        if (education.schools[school].degree){   
            $(".education-entry:last").append(formattedSchoolName + formattedDegree);
            } else {
                $(".education-entry:last").append(formattedSchoolName);
            }       
            
        var formattedSchoolYear = HTMLschoolDates.replace("%data%", education.schools[school].year);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        $(".education-entry:last").append(formattedSchoolYear, formattedSchoolLocation, formattedSchoolMajor);
    };

    
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    
    for (course in education.onlineCourses){
        var formattedOnlineSchoolTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineSchoolYear = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedOnlineSchoolUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        var formattedOnlineSchoolUrl = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url); // replace all %data% occurences by using regEx

        // add a formatted name of the online course and name of the online school to HTML class "education-entry"
        $(".education-entry:last").append(formattedOnlineSchoolTitle + formattedOnlineSchool + formattedOnlineSchoolYear + formattedOnlineSchoolUrl);       
    }
};

// display education
education.display();

// create an object work in JSON 
var work = {
    "jobs": [
    {
        "position" : "Waitress",
        "company" : "La Cuve à bière",
        "years" : "4/2014 - 12/2014",
        "city" : "Soignies, Belgium",
        "description" : "Responsibility for the cash register. Taking customers’ orders. Preparing and serving drinks"
    },
    {
        "position" : "Night Auditor",
        "company" : "Andel's Hotel Prague",
        "years" : "7/2012 - 8/2013",
        "city" : "Prague, Czech Republic",
        "description" : "Ensuring accuracy of the charges to the guest folios. Giving daily management reports regarding occupancy reports, calculation of daily revenues. Providing client service and performing typical front desk functions such as check-in, check-out, reservations, responding to the guest complaints, etc."
    },
    {
        "position" : "Real Estate Agent",
        "company" : "RedHippo Real Estate s.r.o.",
        "years" : "6/2010 - 5/2011",
        "city" : "Prague, Czech Republic",
        "description" : "Arranging the selling or renting properties, providing full-service mediation, ensuring marketing and legal service. In addition to the cooperation with premanent clients, I was involved in active searching for and addressing potential clients."
    },
        {
        "position" : "Content Assistant",
        "company" : "MLiven s.r.o.",
        "years" : "9/2007 - 2/2008",
        "city" : "Prague, Czech Republic",
        "description" : "Webmastering, responsibility for providing technical support of dating website, answering users' questions and performing content control. Preparation of graphic sources for mobile phone applications. Text correction, updating databases."
    }
            ]
}


// define a display method for the ojbect "work"
function displayWork(){
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].position);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].company);
    
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;

    //The "last"is jQuery element which return last(newly added) position
    $(".work-entry:last").append(formattedEmployerTitle);

    // add a formatted date
    var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].years);
    $(".work-entry:last").append(formattedWorkDate);

    // add a formatted description
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    }
}

// display working experience in HTML
displayWork();

// add a button for making the name in an internationalized format
function inName(){
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1);

    return name[0] + " " + name[1];
}

// add a button for making the name internationalized
$("#main").append(internationalizeButton);

// add and display a google map
$("#mapDiv").append(googleMap);
