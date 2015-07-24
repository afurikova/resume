// create an objects bio, education, work and projects with relevant description using JSON 
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
	"computerSkills" : ["HTML 5", "CSS", "JavaScript", "jQuery", "Python", "AJAX", "Knockout js", "Git", "OOP", "Adobe Photoshop","Adobe InDesign","Adobe Illustrator", "Windows", "Active Directory", "Amadeus", "Analytic and Logical Thinking", "Customer Service", "Communication", "Czech", "Slovak", "English", "French", "Krav Maga", "Cooking"],
    "bioPic" : "images/pic1.jpg",
	"welcomeMsg" : "<cite>Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.</cite> Martin Luther. " 
}

var education = {
    "schools": [
        {
            "name" : "Metropolitan University Prague",
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
            "name" : "Secondary Vocational School, Prague (Czech Republic) ",
            "degree" : "Leaving School Examination",
            "major" : "Management and Information Technology",
            "location" : "Prague, Czech Republic",
            "year" : "2005 "
        },
        {
            "name" : "Private Secondary School of Information Technology",
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
            "name": "JavaScript Design Patterns ",
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

var work = {
    "jobs": [
    {
        "position" : "Waitress",
        "company" : "La Cuve à bière",
        "years" : "4/2014 - 1/2015",
        "location" : "Soignies, Belgium",
        "description" : "Was responsible for cash register. Took customers’ orders. Prepared and served drinks."
    },
    {
        "position" : "Night Auditor",
        "company" : "Andel's Hotel Prague",
        "years" : "7/2012 - 8/2013",
        "location" : "Prague, Czech Republic",
        "description" : "Ensured the accuracy of the charges to the guest folios. Gave daily management reports regarding occupancy reports and calculation of daily revenues. Provided client service and performed typical front desk functions such as check-in, check-out, reservations, responding to the guest complaints, etc."
    },
    {
        "position" : "Real Estate Agent",
        "company" : "RedHippo Real Estate",
        "years" : "6/2010 - 5/2011",
        "location" : "Prague, Czech Republic",
        "description" : "Actively searched for and addressed potential clients. Assisted clients with property sells and rents. Ensured properties advertising. Coordinated appointments to show homes to prospective buyers and lessees. Negotiated and prepared legal documents and contracts or, in case of need, ensured legal services. Educated clients regarding financial possibilities. Ensured that all the property related documents were properly completed by the clients."
    },
        {
        "position" : "Content Assistant",
        "company" : "MLiven",
        "years" : "9/2007 - 2/2008",
        "location" : "Prague, Czech Republic",
        "description" : "Prepared of graphic sources and created databases to be used for mobile phone applications. Ensured technical support of dating website. Answered users' questions and performed content control of the website."
    }
            ]
}

var projects = {
    "work": [
    {
        "title" : "Portfolio",
        "url" : "http://adica.me.cz/portfolio/",
        "date" : "2015",
        "description" : "Responsive portfolio website built by using Bootstrap.",
        "img" : "images/portfolio.jpg"
    },
    {
        "title" : "Resume",
        "url" : "http://adica.me.cz/resume/",
        "date" : "2015",
        "description" : "This interactive résumé is the final project of JavaScript Basics course.",
        "img" : "images/resume.jpg"
    },
    {
        "title" : "Frogger",
        "url" : "http://adica.me.cz/frogger/",
        "date" : "2015",
        "description" : "My version of frogger-like canvas game I created was a final project of OOP JavaScript course.",
        "img" : "images/frogger.jpg"
    },
    {
        "title" : "Neighborhood app",
        "url" : "http://adica.me.cz/neighborhood/",
        "date" : "2015",
        "description" : "A single page web application. It shows my favourite places of chosen location . In this project I use framework Knockout js and in order to get some additional information about the places I retrieve data through the Google Maps API and its relevant services.",
        "img" : "images/neighborhood.jpg"
    }
  ]
}

var locationsDescription = {
            "Praha" : "This is the place where I was born and spent most of my life, the Hundred-spired Prague where beer is cheaper than water and all the girls are pretty :)",
            "Århus" : "Here I spent 5 wonderful months as an Erasmus student. Aarhus is definitely one of my favourite places!",
            "Soignies" : "My current home, finally I have managed to speak and understand some French and now I am struggling with Dutch..."
        }

// define function that will display the given information from bio object
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

    //$("#topContacts").append(formattedMobile, formattedEmail, formattedLocation, formattedGithub);
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
        console.log(formattedSkills)
        $("#skills").append(formattedSkills)
    }

}
// call for display function in bio
bio.display();



// define function that will display the given information from education object
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



// define function that will display the given information from work object
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

// display work
displayWork();


// define function that will display the given information from projects object
function displayProjects(){
    for (project in projects.work){
        $("#projects").append(HTMLprojectStart);
        
        // create variables
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.work[project].title);
        formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.work[project].url);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.work[project].date);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.work[project].description);
        var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.work[project].img);
        
        $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImg);
    }
}

// display projects
displayProjects();

// define function to create internationalized format of the name
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
