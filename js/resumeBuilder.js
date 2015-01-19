
// create an object, bio, with basic infomations and skills in JSON format
var bio = {
	"name" : "Andrea Furikova",
	"role" : "Junior Web Developer",
	"contacts" : {
		"email" : "afurikova@yahoo.fr",
		"mobile" : "+32 478 24 28 66", 
		"github" : "afurikova", 
		"location" : "Soignies (Belgium)"
		},
	"age" : 29,	
	"computerSkills" : ["HTML", " CSS", "Python","JavaScript","jQuery","Git","Windows", "Active Directory","Adobe Photoshop","Adobe InDesign","Adobe Illustrator","Amadeus","Analytic and Logical Thinking","Customer Service", "Communication","Czech", " Slovak", "English","French","Krav Maga","Cooking"],
    "bioPic" : "images/ja.jpg",
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

// crate an ojbect education in JSON format
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

    "onlineCourses": [
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
    ]
}

// defina a display function for education
education.display = function(){
    
    // adds information about schools
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

        //$(".education-entry:last").append(formattedOnlineSchoolTitle)
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

        // adds name of the online course and name of the school formatted to class education-entry
        $(".education-entry:last").append(formattedOnlineSchoolTitle + formattedOnlineSchool);

        var formattedOnlineSchoolYear = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedOnlineSchoolUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        formattedOnlineSchoolUrl = formattedOnlineSchoolUrl.replace("%url%",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineSchoolYear, formattedOnlineSchoolUrl);        
    }
};

// display education
education.display();