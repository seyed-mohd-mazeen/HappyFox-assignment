/*
*
* script.js
* @author - Mazeen
* @date - 9 October, 2022
**/

// USED FOR CLOSING AND OPENING THE ACCORDION
// targetClass - GET THE CLASS NAMES FROM THE RESPESCTIVE ELEMENT
// targetId - GETS THE ID FROM THE ELEMENT
// imgID - GETS THE IMAGE ID FROM THE ELEMENT
// img_src - GETS THE IMAGE FROM PARTICULAR SOURCE
function collapse(targetClass, targetId, imgID, img_src) {
  // FINDING THE ELEMENTS BY CLASSNAME AND SAVING IT TO acc VARIABLE
	var acc = document.getElementsByClassName(targetClass);
  // FINDING THE ELEMENT BY ID AND SAVING IT TO target VARIABLE
  var target = document.getElementById(targetId);
  // LOOPING THE CLASS TO REMOVE THE ACTIVE CLASS IN ALL THE ACCORDION
    for (var i = 0; i < acc.length; i++) {
      // REMOVES THE CLASS ACTIVE
      acc[i].classList.remove("active");
      // THE NEXT ACCORDION'S HEIGHT GOES ZERO
      acc[i].nextElementSibling.style.maxHeight = null;
    }
    // ADDS THE CLASS ACTIVE IN THE CLASSLIST
    target.classList.add("active");
    // THE HEIGHT OF THE ACCORDION IS SET ACCORDINGLY TO THE CONTENT INSIDE
    target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight+ "px";
    // GETS THE IMAGE ID AND THE SOURCE TO DISPLAY IT ACCORDINGLY
    document.getElementById(imgID).src = img_src;
}
// TO KEEP THE FIRST ACCORDION OF CUSTOMER-COMMUNICATION-SECTION OPEN BY DEFAULT.
collapse('accordion-cc', 'cc-1', 'img-cc','./img/customer-service/customer-service-1.png');
// TO KEEP THE FIRST ACCORDION OF SUPPORT-TEAM-SECTION OPEN BY DEFAULT.
collapse('accordion-ts', 'ts-1', 'img-st', './img/support-team/support-team-1.png');
// TO KEEP THE FIRST ACCORDION OF SUPPORT-EXPERIENCE-SECTION OPEN BY DEFAULT.
collapse('accordion-se', 'se-1', 'img-se', './img/support-experience/support-experience-1.png');
// TO KEEP THE FIRST ACCORDION OF TICKET-MANAGEMENT-SECTION OPEN BY DEFAULT.
collapse('accordion-tm', 'tm-1', 'img-tm', './img/ticket-management/ticket-management-1.png');
// TO KEEP THE FIRST ACCORDION OF AUTOMATION-SECTION OPEN BY DEFAULT.
collapse('accordion-au', 'au-1', 'img-au', './img/automation/automation-1.png');
// TO KEEP THE FIRST ACCORDION OF CALL CENTER-SECTION OPEN BY DEFAULT.
collapse('accordion-cs', 'cs-1', 'img-cs', './img/call-center/call-center-1.png');

// USED FOR CLOSING AND OPENING THE ACCORDION
// targetClass - GET THE CLASS NAMES FROM THE RESPESCTIVE ELEMENT
// targetId - GETS THE ID FROM THE ELEMENT
// imgID - GETS THE IMAGE ID FROM THE ELEMENT
// img_src - GETS THE IMAGE FROM PARTICULAR SOURCE
function toggleTab(targetClass, targetId, imgID, img_src) {
  // FINDING THE ELEMENTS BY CLASSNAME AND SAVING IT TO acc VARIABLE
	var acc = document.getElementsByClassName(targetClass);
  // FINDING THE ELEMENT BY ID AND SAVING IT TO target VARIABLE
  var target = document.getElementById(targetId);
  // LOOPING THE CLASS TO REMOVE THE ACTIVE CLASS IN ALL THE CELL
    for (var i = 0; i < acc.length; i++) {
      // REMOVES THE CLASS ACTIVE-CELL
      acc[i].classList.remove("active-cell");
    }
    // ADDS THE CLASS ACTIVE-CELL IN THE CLASSLIST ON WHICH THE USER CLICKS
    target.classList.add("active-cell");
    // GETS THE IMAGE ID AND THE SOURCE TO DISPLAY IT ACCORDINGLY
    document.getElementById(imgID).src = img_src;
}
// TO KEEP THE FIRST CELL OF SELF-SERVICE-SECTION OPEN BY DEFAULT.
toggleTab('self-service-box', 'self-service-1', 'self-service-img','./img/self-service/customer-portal.png');
// TO KEEP THE FIRST CELL OF SUPPORT-SECTION OPEN BY DEFAULT.
toggleTab('support-box', 'support-1', 'support-img','./img/support/ticket-action.png');

// USED TO SHOW AND HIDE SUBMENU IN DESKTOP VERSION
function toggleSubmenu(submenuId) {
  // GETTING ALL SUBMENU BOX USING COMMON SUBMENU BOX CLASS NAME
  var subMenuBoxes = document.getElementsByClassName("submenu-item");
  // LOOPING ALL SUBMENU BOXES
  for (var i = 0; i < subMenuBoxes.length; i++) {
    // CHECKING WHETHER INTENDED TO OPEN SUBMENU ID IS EQUAL TO LOOPING SUBMENU BOX ID
    // IF BOTH ARE NOT SAME THEN REMOVE ACTIVE-SUBMENU CLASS FROM SUBMENU BOX TO HIDE IT
    if (subMenuBoxes[i].id !== submenuId) {
    subMenuBoxes[i].classList.remove("active-submenu");
    }  
  }
    // SHOW AND HIDE THE INTENDED TO OPEN SUB MENU BOX USING PASSED ID
    document.getElementById(submenuId).classList.toggle("active-submenu");
}

function collapseSubmenuXS(targetId, selectedItem) {
  // GETTING ELEMENTS BY ID 
  var target = document.getElementById(targetId);
  // CHECKS IF THE CLASS LIST HAS THE ACTIVE-SUBMENU-XS CLASS
  if (target.classList.contains('active-submenu-xs')) {
    // IF IT HAS, THE MAX-HEIGHT IS SET TO ZERO
    target.style.maxHeight = 0;
  } else {
    // IF NOT, MAX-HEIGHT IS SET TO MAX-CONTENT
    target.style.maxHeight = 'max-content';
  }
    // IF THE CLASS LIST CONTAINS ACTIVE-SUBMENU-XS, IT WILL BE REMOVED IF NOT IT WILL BE ADDED
    target.classList.toggle("active-submenu-xs");
    // IF THE CLASS LIST CONTAINS ACTIVE CLASS, IT WILL BE REMOVED, IF NOT IT WILL BE ADDED
    selectedItem.classList.toggle('active');
}

function toggleMenuXs(targetId) {
  // GETS THE ELEMENT BY ID
  var target = document.getElementById(targetId);
  // IF THE CLASS LIST CONTAINS ACTIVE-SUBMENU-XS THE IF CONDITION PASSES
  if (target.classList.contains('active-submenu-xs')) {
    // SUB-MENU'S MAX-HEIGHT BECOMES ZERO, SO THE SUB-MENU DOESNT SHOW UP
    target.style.visibility = "hidden";
  } else {
    // IF ACTIVE SUBMENU DOESNT EXISTS IN THE TARGET, IT SHOWS THE SUB-MENU.
    target.style.visibility = "visible";
  }
    // IT CHECKS IF THE SUB-MENU CLASS-LIST CONTAINS ACTIVE-SUBMENU-XS IT REMOVES IT
    // IF NOT, IT ADDS THE CLASS ACTIVE-SUBMENU-XS INTO SUB-MENU CLASS LIST
    target.classList.toggle("active-submenu-xs");
    // IT CHECKS IF THE ID MENU-XS-ICON HAS FA-MARK IT SHOWS THE HAMBURGER ICON,
    // IF NOT IT SHOWS THE X ICON.
    document.getElementById('menu-xs-icon').classList.toggle('fa-xmark');
}