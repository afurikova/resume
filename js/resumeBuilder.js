
// this is how to define an object using an OBJECT LITERAL NOTATION = myObj.property = value
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
	"welcomeMsg" : "<cite>Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.</cite> Martin Luther. " // here should be quotes that change on every page upload in the future
    } 


// deffines the disploy function in bio
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
