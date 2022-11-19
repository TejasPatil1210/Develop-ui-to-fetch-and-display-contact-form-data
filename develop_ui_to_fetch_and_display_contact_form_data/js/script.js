// put validation code here
// provide the validation code here
//Provide the solution code here

 //{fun} from 'contact_service.js';
 let contacts = [];
 
 // listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.
 
 const submitContact = (event) => {
     var formdata=document.getElementsByTagName("form")[0];
     console.log(formdata);
     var feedback=Object.fromEntries(new FormData(formdata));
     console.log(feedback);
     var result= submitdata(feedback);
     return result;
 
     //contact object captures all the inputs provided
 
     //errors object captures all the validation errors
 
     //display validation summary with error messages
 
     //if no errors, push the contact to contacts array
 
     //contacts can be logged on to console, or can even be updated on UI
 }
 
 const submitdata= (feedback) =>{
     var errors={
         firstNameError:validateFirstName(feedback.firstname),
         lastNameError:validateLastName(feedback.lastname),
         emailError:validateEmail(feedback.email),
         homeNoError:validatehomeNo(feedback.homeNo),
         workNoError:validateworkNo(feedback.workNo),
         birthdateError:validatebirthdate(feedback.birthdate),
         companyError:validatecompany(feedback.company),
         jobTitleError:validatejobtitle(feedback.jobTitle),
         notesError:validateNotes(feedback.notes),
         homeNo1Error:validateadditionalcontactNo1(feedback.homeNo1),
         homeNo2Error:validateadditionalcontactNo2(feedback.homeNo2)
     }
     var errorMessages = Object.values(errors).filter(e => e !== '');
 
     if (errorMessages.length === 0) {
         
         contacts.push(feedback);
         console.log("helloo");
         fun(feedback);        
         console.log("helloo");
        // return true;
     }
     else {
         //display validation summary with error messages
         displayValidationSummary(errorMessages);
 
         //display error messages alongside the input fields
         displayIndividualErrorMessages(errors)
         return false;
     }
 
 }
 
 //function to display validation summary with error messages provided
 function displayValidationSummary(errorMessages) {
 
     let list = '';
     errorMessages.map(e => `<li>${e}</li>`).forEach(item => {
         list += item;
     });
     document.getElementsByTagName('ul')[0].innerHTML = list;
 }
 //function to display error messages alongside the input fields
 function displayIndividualErrorMessages(errorMessages) {
 
     document.getElementById('firstNameError').innerText = errorMessages.firstNameError;
 
     document.getElementById('lastNameError').innerText = errorMessages.lastNameError;
 
     document.getElementById('emailError').innerText = errorMessages.emailError;
 
     document.getElementById('homeNoError').innerText = errorMessages.homeNoError;
 
     document.getElementById('homeNo1Error').innerText = errorMessages.homeNo1Error;
 
     document.getElementById('homeNo2Error').innerText = errorMessages.homeNo2Error;
 
     document.getElementById('workNoError').innerText = errorMessages.workNoError;
 
     document.getElementById('birthdateError').innerText = errorMessages.birthdateError;
 
     document.getElementById('companyError').innerText = errorMessages.companyError;
 
     document.getElementById('jobTitleError').innerText = errorMessages.jobTitleError;
 
     document.getElementById('notesError').innerText = errorMessages.notesError;
 
 }
 
 //function to validate firstName
     const validateFirstName=(firstName) =>
     {
         let firstNameError = '';
         let validRegex = "^[a-zA-Z.](?:\.[a-zA-Z.]+)*$";
         if(firstName===''|| firstName===undefined||firstName===null)
         firstNameError+="First Name cannot be left blank";
         else if(!firstName.match(validRegex))
         firstNameError+="Invalid First Name";
         return firstNameError;
     }
 //function to validate lastName
 const validateLastName=(lastName) =>
 {
     let lastNameError = '';
     let validRegex = "^[a-zA-Z.](?:\.[a-zA-Z.]+)*$";
     if(lastName===''|| lastName===undefined||lastName===null)
     lastNameError+="Last Name cannot be left blank";
     else if(!lastName.match(validRegex))
     lastNameError+="Invalid Last Name";
     return lastNameError;
 }
 //function to validate email
 const validateEmail=(email) =>
 {
     let emailError = '';
     let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
     if(email===''|| email===undefined||email===null)
     emailError+="Email cannot be left blank";
     else if(!email.match(validRegex))
     emailError+="Invalid Email";
     return emailError;
 }
 //function to validate home no
 const validatehomeNo=(homeNo) =>
 {
     let homeError = '';
     let validRegex =/^(\+91[\-\s]?)?(91)?[789]\d{9}$/;
     if(homeNo===''|| homeNo===undefined||homeNo===null)
     homeError+="Home Contact Number cannot be left blank";
     else if(!homeNo.match(validRegex))
     homeError+="Invalid Home Number";
     return homeError;
 }
 //function to validate work no
 const validateworkNo=(workNo) =>
 {
     let workError = "";
     let validRegex =/^(\+91[\-\s]?)?(91)?[789]\d{9}$/;
     if(workNo===''|| workNo===undefined||workNo===null)
     workError +="Work Contact Number cannot be left blank";
     else if(!workNo.match(validRegex))
     workError +="Invalid Contact Number";
     return workError;
 }
 //function to validate additional contact no
 const validateadditionalcontactNo1=(addno1) =>
 {
     let addno1Error = '';
     let validRegex =/^(\+91[\-\s]?)?(91)?[789]\d{9}$/ ;
     if(addno1===''|| addno1===undefined||addno1===null)
     {
         return addno1Error;
     }
     //addno1Error+="Contact Number cannot be left blank";
     else if(!addno1.match(validRegex))
     addno1Error+="Invalid Contact Number";
      
     return addno1Error;
 }
 
 
 //function to validate additional contact no
 const validateadditionalcontactNo2=(addno2) =>
 {
     let addno2Error = '';
     let validRegex =/^(\+91[\-\s]?)?(91)?[789]\d{9}$/;
     if(addno2===''|| addno2===undefined||addno2===null)
     {
         return addno2Error;
     }
     else if(!addno2.match(validRegex))
     addno2Error+="Invalid Contact Number";
     return addno2Error;
 }
 const validatecompany=(company) =>
 {
     if (company === '' || company === undefined || company === null)
     return "company Name cannot be left blank";
 else
     return "";
 }
 const validatejobtitle=(jobtitle) =>
 {
     if (jobtitle === '' || jobtitle === undefined || jobtitle === null)
     return "Job Title cannot be left blank";
 else
     return "";
 }
 //function to validate notes
 const validateNotes=(notes) =>
 {
     let notesError='';
     let noteslength=notes.length;
     if(noteslength>200)
     notesError+="Notes should contain maximum of 200 characters"
     return notesError;
 }
 const validatebirthdate=(birthdate) =>
 {
     let birthDateError = '';
     if (birthdate === '' || birthdate === undefined || birthdate === null)
         birthDateError = "Birth Date cannot be left blank";
 
     return birthDateError;
 
 }
 
 //disable all dates for whom age is less than 18
 let birthDate = document.getElementById('birthdate');
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear()-18;
 
 // console.log(minyear);
 if (dd < 10) {
     dd = '0' + dd;
  }
  
  if (mm < 10) {
     mm = '0' + mm;
  }
  var minyear=yyyy+"-"+mm+"-"+dd; 
 // document.getElementById('bithdate').setAttribute('min', today.toISOString().split('T')[0]);
 birthDate!==null ? birthDate.setAttribute("max",minyear):birthDate;
 console.log(birthDate);
 
 //toggle subscript list box
 let additionalcontacts = document.getElementById('addContactNo');
 console.log(additionalcontacts);
 additionalcontacts.addEventListener('click', (event) => {
    event.preventDefault();
     if (additionalcontacts.click)
         document.getElementById('subscriptionDetailsBlock').style.display = "block";
     else
         document.getElementById('subscriptionDetailsBlock').style.display = "none";
 })