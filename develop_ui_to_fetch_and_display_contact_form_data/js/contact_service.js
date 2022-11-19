// put the solution code to persist and fetch data here

// method to persist data
const httpClient = axios('http://localhost:3010/posts');

function fun(feedback) 
 {
    const httpClient =axios("http://localhost:3010/posts")
    // alert("contact file");
    // alert(feedback);
    var contact=contactdetails(feedback);
    httpClient.then((response) => {
        // alert("in then");
        post(contact);  
        // alert('record added');
        console.log(response);
    })
.catch(err=>{
    document.write(err);
    console.log(err);
})  
alert("Hi");
}


function contactdetails(feedback)
{
    // alert("contact");
    var idno="";
    for(var i=0;i<6;i++)
    {
        var rdnum=Math.floor(Math.random() * 10);
        idno=idno+rdnum.toString();
    }
    console.log("fun access");
    var contact = {
        "id":parseInt(idno),
        "firstname": feedback.firstname,
        "lastname":feedback.lastname,
        "email":feedback.email,
        "company":feedback.company,
        "birthdate":feedback.birthdate,
        "homeNo":feedback.homeNo,
        "homeNo1":feedback.homeNo1,
        "homeNo2":feedback.homeNo2,
        "jobTitle":feedback.jobTitle,
        "notes":feedback.notes,
        "workNo":feedback.workNo
    };
    return contact;
}


function post(contact){
    // alert("connection");
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function() {
        // if (xhr2.status == 200) 
        if (this.readyState == 4 && this.status == 201)
        {
            console.log("connection success");
            // alert("connection");
        }
    }
    xhr2.open("POST", "http://localhost:3010/posts",false);
    xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr2.send(JSON.stringify(contact));
    // alert("success");
}

// method to fetch all contacts

const httpClient1 = axios('http://localhost:3010/posts');
httpClient1
.then((response)=>{
    let tableBody = document.getElementById('contact-list').getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
    //let data = '<ul>'
    //let records = JSON.parse(response);
    let records = response.data;
    records.forEach(r => {
    tableBody.innerHTML += `<tr><td>${r.firstname}</td><td>${r.lastname}</td><td>${r.email}</td>
    <td>${r.homeNo}</td><td><button class="btn btn-primary" id=${records.indexOf(r)+1} 
    onclick="displayInfo(id)" data-toggle="modal" data-target="#exampleModal">+</button></td></tr>`
    })
    //data+='</ul>'
    //document.body.innerHTML += data;
    console.log(response);
})
.catch(err=>{
    document.write(err);
    console.log(err)
})


// method to fetch contact by id

function displayInfo(id){
    let fullcontactinfo =document.getElementsByTagName('tr')[id].getElementsByTagName('td')[0].innerText;    
    console.log(fullcontactinfo);  
    httpClient1
    .then((response)=>{
    let records = response.data;
    console.log(records);
    //records.filter(x=>console.log(x[0]));
    let maininfo=records.filter(x=>x.firstname == fullcontactinfo);
    console.log(maininfo[0].firstname);
    var alertbody=document.getElementById('contact-data');
    alertbody.innerHTML =`
    <h4>${maininfo[0].firstname.toUpperCase()} ${maininfo[0].lastname.toUpperCase()}</h4><br>
    Home ${maininfo[0].homeNo} <br>
    Work ${maininfo[0].workNo}  <br>
    Birthdate ${maininfo[0].birthdate} <br> 
    Company ${maininfo[0].company} <br>
    Job Title ${maininfo[0].jobTitle} <br>
    ${maininfo[0].notes}`;
})
.catch(err=>{
    document.write(err);
    console.log(err)
})
}
$(document).ready(function(){
    // Show the Modal on load
    $("#exampleModal").modal("show");
   // $('.modal-backdrop').show();
    // Hide the Modal
    $("#clsbtn1").click(function(){
        $("#exampleModal").hide();
        $('.modal-backdrop').hide();
  });
    $("#clsbtn").click(function(){
        $("#exampleModal").hide();
        $('.modal-backdrop').hide();
       // $("contact-data").removeData('bs.modal');
       // e.stopPropagation();
  });
});