var uuid=null;
         
function createIndividualFriendElements(contact,index){
    //alert('creating** individual frnd elts');
    //  alert('*uuid=='+selectData("Profile").twentyatUserId);
    var fbfriendlist = document.createElement("div");
    fbfriendlist.setAttribute("id","fbfriendlist"+index);
    var radiobutton = document.createElement("div");
    radiobutton.setAttribute("id", "radiobutton"+index);
    var imgRadio=document.createElement("img");
    imgRadio.setAttribute("id", "imgRadio"+index);
    imgRadio.setAttribute("src", "images/radio_button_open.png");
    radiobutton.appendChild(imgRadio);     
    var fbfriendname = document.createElement("div");
    fbfriendname.setAttribute("id", "fbfriendname"+index);
    fbfriendname.innerHTML=contact.firstName +" "+contact.lastName;
    var fbfriendimage = document.createElement("div");
    fbfriendimage.setAttribute("id", "fbfriendimage"+index);   
    var imgProfile=document.createElement("img");
    imgProfile.setAttribute("id", "imgProfile"+index);
    imgProfile.setAttribute("src", contact.photoUrl); 
    fbfriendimage.appendChild(imgProfile);
    fbfriendlist.appendChild(radiobutton);
    fbfriendlist.appendChild(fbfriendname);
    fbfriendlist.appendChild(fbfriendimage);    
    var basediv=document.getElementById("frndlist");
    //basediv.style.display='block';
    basediv.appendChild(fbfriendlist);       
    $('#fbfriendlist'+index).addClass("div-add-friend");
    $('#radiobutton'+index).addClass("radiobutton1");
    $('#fbfriendname'+index).addClass("btn-add-friend");
    $('#fbfriendimage'+index).addClass("FBF-Img");
    $('#radiobutton'+index).click( function(){
        //  alert("you clicked me"+index);
        var radiobtnImg=document.getElementById('imgRadio'+index);
        var imgsrc=radiobtnImg.getAttribute("src");        
        //alert('imgsrc==='+imgsrc);
        if(imgsrc=='images/radio_button_open.png'){
            //alert('current deselected, change to select')
            radiobtnImg.src="images/radio_button_selected.png";
            addContactToArray(contact);
        }else if (imgsrc=='images/radio_button_selected.png'){
            //alert('current selected, change to deselect');
            radiobtnImg.src="images/radio_button_open.png";
            removeContactFromArray(contact);
        } 
    });           
}
   
var contactDetails=new Array(); 
//building data to send to review page 
function addContactToArray(contact){ 
    //alert('addContactToArray'+contact);
    
    var personObj=new Object();
    //alert('contact.firstName;=='+contact.firstName);
    personObj.firstName=contact.firstName;
    personObj.lastName=contact.lastName;
    personObj.contactPersonId=contact.contactPersonId;
    personObj.photo=contact.photoUrl;
    personObj.email="avinash@techingen.com";

    //alert('person obj set');
    var cnt=contactDetails.length;
    //alert('cnt'+cnt);
    contactDetails[cnt] = personObj; 
//alert("*+--"+contactDetails[cnt].firstName+"contactPersonId--"+contactDetails[cnt].contactPersonId);
//alert("len"+contactDetails.length);
}



function removeContactFromArray(contact){
    //alert('removing the contact from array'+contact.firstName);
    var contactlength=contactDetails.length;
    //alert('contactlength==='+contactlength);
    for(var i in contactDetails) {
        var item = contactDetails[i];
        //        params.contacts.push({
        //            "email" : item.email,
        //            "contactPersonId":item.contactPersonId
        //        });
        if(contact.contactPersonId==item.contactPersonId){
            contactDetails.splice(i,1);
        }
    }
//alert('final length of array'+contactDetails.length);
}

                              
function callReviewFriends(){ 
    //alert('call add friends service');
    
    if((contactDetails!=null) || (contactDetails!=undefined)){
        
    
    var contactlength=contactDetails.length;
    //alert('contactlength'+contactlength);
    if (contactlength > 0){
    
    var objProfile=null;
    if(existsData("Profile")){
        objProfile=eval('('+selectData("Profile")+')');
        uuid=objProfile.twentyatUserId;
    //alert('**uuid=='+uuid);
    }
    var params = {
        uuid:uuid,
        contacts: [],
        twentyatuser:[]
    };
    for(var i in contactDetails) {
        var item = contactDetails[i];
        params.contacts.push({
            "email" : item.email,
            "contactPersonId":item.contactPersonId 
        }); 
    } 
    contactDetails=null;
    contactDetails=new Array(); 
    var strJson=JSONstring.make(params);
    //alert('calling server for add friends service :::: '+strJson);
    $.ajax({ 
        type: "POST",  
       //  url: 'http://192.168.1.100:8080/twentyat-web/addFriend/',
        url: 'http://ec2-50-16-41-243.compute-1.amazonaws.com:8080/twentyat-web/addFriend/',
        data: strJson,
        contentType: 'application/json',
        success: function successdone(addFriendData){
            var statusMessage=addFriendData.status.message;
            //alert(addFriendData.toString());
            if(statusMessage=='ok'){
                //alert('status ok now calling insert data');
                var arrObj=new TwentyAtFriends(addFriendData);
                //alert('arrObj.friends[0].lastName==='+arrObj.friends[0].lastName);
                var strArray=JSONstring.make(arrObj);
                //   alert(strArray);                
                insertData("Friends",strArray);
                var mainAddFriendsDiv=document.getElementById('main-wrapper');
                mainAddFriendsDiv.style.display='none'; 
                var gridViewDiv=document.getElementById('gridViewDiv');
                gridViewDiv.style.display='block';
                //alert('gridViewDiv=='+gridViewDiv);
                // $(location).attr('href', '../../20S_ClientURL/index3.html');                      
                //alert('Select Data Friends Exists::::::::'+selectData("Friends"));
                
                    $('body').load("../../20S_ClientURL/index3.html", function () {
                    User.flushUsers();
                    User.initialize();
                    User.getFriends();                     
                    $('#header').css('visibility', 'visible');
                    $('#header').css('display', 'block');
                    $('#twentyatbody').css('visibility', 'visible');
                    $('#twentyatfooter').css('visibility', 'visible');
                });                 
            //  alert('done');
            }
        },
        error: function erroroccoured(data){
            alert('error : '+data.status);
        },
        dataType: "json"
    });
    } else {
       // alert('No Friends Selected!');

        $('body').load("../../20S_ClientURL/index3.html", function () {
                    User.flushUsers();
                    User.initialize();
                    User.getFriends();
                    $('#header').css('visibility', 'visible');
                    $('#header').css('display', 'block');
                    $('#twentyatbody').css('visibility', 'visible');
                    $('#twentyatfooter').css('visibility', 'visible');
                }); 
    }
    }
}///end of call Review Friends 


function deleteFromReviewFriends(){

}

function createFriendElements(objJson){
    //alert('inside create frnd elts');
    var mainAddFriendsDiv=document.getElementById('main-wrapper');
    mainAddFriendsDiv.style.display='block';
    //var wrapper1Div=document.getElementById('wrapper1');
    //alert('wrapper1Div'+wrapper1Div);
    //wrapper1Div.style.display='block';
    
    var ajaxLoadingDiv=document.getElementById('ajaxLoading'); 
    ajaxLoadingDiv.style.display='none';
    //alert('create friend elements*=='+objJson);
    //alert(objJson.contacts.length);
    var max=objJson.contacts.length;
    for(var i=0;i<max;i++){
        var objContact=objJson.contacts[i];
        // alert('-----'+objContact.firstName);
        createIndividualFriendElements(objContact,i);
    }
}



function getAllContacts() { 
    var objProfile=null;
    if(existsData("Profile")){
        objProfile=eval('('+selectData("Profile")+')');
        uuid=objProfile.twentyatUserId;
    //alert('**uuid=='+uuid);
    }
    //alert('getAll Contacts with==='+uuid);
    $.ajax({  
        type: "POST",  
     //    url: 'http://192.168.1.100:8080/twentyat-web/getcontacts/',
       url: 'http://ec2-50-16-41-243.compute-1.amazonaws.com:8080/twentyat-web/getcontacts/',
        data: '{"uuid": "'+uuid+'"}',
        contentType: 'application/json',
        success: function successdone(contactData){            
            var statusMessage=contactData.status.message;
            //alert('statusMessage of contact data==='+statusMessage);

            //alert('SUCCESS In Get All Contacts'+contactData);
            var contactsArray=new TwentyAtContacts(JSONstring.make(contactData));
            //alert('contactsArray==='+contactsArray)
            createFriendElements(contactsArray);
        },        
        error: function erroroccoured(data){
            alert('Service ERROR : '+data.status);
        },
        dataType: "json"
    });
}

