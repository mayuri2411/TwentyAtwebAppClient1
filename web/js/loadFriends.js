/**
 * User script will be used for User profile and his / her friends.
 * 
 */
var User = {
	isFriendSet : new Array(),
	isFriendClicked : new Array(),
	friendClickedCount : 0,
	friendIterator : 0,
	friendsArray : null,
	friendsobj : null,
	name : "",
	totalFriends : null,
	selectedFriends : new Array(),
	friendsUserId : null,
	userProfile : null,
	userProfileobj : null,
	userFriends : new Array(),
	addAFriend : new Array(),
	
	initialize : function() {
		//alert("initialized");
		//alert(selectData("Profile"));
		User.friendsArray = selectData("Friends");
		User.friendsobj = eval("("+User.friendsArray+")");
		
		User.userProfile = selectData("Profile");
		
		User.userProfileobj = eval( "("+ User.userProfile + ")" );
		//alert(User.userProfileobj.twentyatUserId);
		User.totalFriends = User.friendsobj.friends.length;
		for (User.friendIterator=0; User.friendIterator<20; User.friendIterator++)
		{	//alert("in loop");
			User.isFriendClicked[User.friendIterator] = "false";
			User.isFriendSet[User.friendIterator] = "false";
			User.addAFriend[User.friendIterator] = "false";
		}
		
		for (User.friendIterator=0; User.friendIterator< User.totalFriends; User.friendIterator++)
		{
			User.userFriends[User.friendIterator] = User.friendsobj.friends[User.friendIterator].twentyatUserId;
			//alert(User.friendsobj.friends[User.friendIterator].twentyatUserId);
			//alert(User.userFriends[User.friendIterator]);
		}
		
		Chat.doConnection();
		Chat.doLogin(User.userProfileobj.twentyatUserId,User.userProfileobj.email);
	},
	
	getFriendsArray : function () {
		return selectedFriends;
	},
	
	flushUsers : function () {
            User.selectedFriends = new Array();
            User.friendClickedCount = 0;
            User.isFriendClicked = new Array();
            User.isFriendSet = new Array();
        },

	getFriends : function() {
		//alert('u called getFriends');
		//javascript:void($('<img/>').attr('src', User.friendsobj.friends[0].photo).load(function() { $('#friendimg1').css('background-image', 'url('+friendsobj.friends[0].photo+')'); }));
		
		var i=0;
		for (i=0; i<=User.totalFriends; i++) 
		{
			
		//var urlString = "'url(" + friendsobj.friends[i].photo + ")'";
		//alert(friendsobj.friends[i]);
		/*if(friendsobj.friends[i] != 'undefined')
		  {*/
			if (i < User.totalFriends) {
				User.name = User.friendsobj.friends[i].firstName + " " + User.friendsobj.friends[i].lastName;
				
				if (User.name.length > 8) {
					User.name=User.friendsobj.friends[i].firstName
				}
				User.isFriendSet[i] = "true"; 
			}
			if (i===0) {
				if (i===User.totalFriends) {
					//alert('0 friends');
					$('#friendimg1').css('visibility', 'visible');
					$('#friendname1').css('visibility', 'visible');
					User.addAFriend[i] = "true";
					//$(location).attr('href', 'AddFriends.html');
				}
				else {
					//alert("PHOTO : "+User.friendsobj.friends[0].photo);
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[0].photo).load(function() { 
						$('#friendimg1').css('background-image', 'url('+User.friendsobj.friends[0].photo+')'); 
						$('#friendimg1').css('background-size', '100%');
					}));
					
					$('#friendname1').text(User.name);
					$('#friendimg1').css('visibility', 'visible');
					$('#friendname1').css('visibility', 'visible');
					$('#twentyatbox1').fadeIn('slow');
					//alert("line above me didn't work");
				}
			}
			else if (i===1) {
				if (i===User.totalFriends) {
					$('#friendimg2').css('visibility', 'visible');
					$('#friendname2').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[1].photo).load(function() { 
						$('#friendimg2').css('background-image', 'url(' + User.friendsobj.friends[1].photo + ')'); 
						$('#friendimg2').css('background-size', '100%');
					}));
					$('#friendname2').text(User.name);
					$('#friendimg2').css('visibility', 'visible');
					$('#friendname2').css('visibility', 'visible');
					$('#twentyatbox2').fadeIn('slow');
				}
			}
			else if (i===2) {
				if (i===User.totalFriends) {
					$('#friendimg3').css('visibility', 'visible');
					$('#friendname3').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[2].photo).load(function() { 
						$('#friendimg3').css('background-image', 'url(' + User.friendsobj.friends[2].photo + ')'); 
						$('#friendimg3').css('background-size', '100%');
					}));
					$('#friendname3').text(User.name);
					$('#friendimg3').css('visibility', 'visible');
					$('#friendname3').css('visibility', 'visible');
				}
			}
			else if (i===3) {
				if (i===User.totalFriends) {
					$('#friendimg4').css('visibility', 'visible');
					$('#friendname4').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[3].photo).load(function() { 
						$('#friendimg4').css('background-image', 'url('+User.friendsobj.friends[3].photo+')'); 
						$('#friendimg4').css('background-size', '100%');
					}));
					$('#friendname4').text(User.name);
					$('#friendimg4').css('visibility', 'visible');
					$('#friendname4').css('visibility', 'visible');
				}
			}
			else if (i===4) {
				if (i===User.totalFriends) {
					$('#friendimg5').css('visibility', 'visible');
					$('#friendname5').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[4].photo).load(function() { 
						$('#friendimg5').css('background-image', 'url('+User.friendsobj.friends[4].photo+')'); 
						$('#friendimg5').css('background-size', '100%');
					}));
					$('#friendname5').text(User.name);
					$('#friendimg5').css('visibility', 'visible');
					$('#friendname5').css('visibility', 'visible');
				}
			}
			else if (i===5) {
				if (i===User.totalFriends) {
					$('#friendimg6').css('visibility', 'visible');
					$('#friendname6').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[5].photo).load(function() { 
						$('#friendimg6').css('background-image', 'url('+User.friendsobj.friends[5].photo+')'); 
						$('#friendimg6').css('background-size', '100%');
					}));
					$('#friendname6').text(User.name);
					$('#friendimg6').css('visibility', 'visible');
					$('#friendname6').css('visibility', 'visible');
				}
			}
			else if (i===6) {
				if (i===User.totalFriends) {
					$('#friendimg7').css('visibility', 'visible');
					$('#friendname7').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[6].photo).load(function() { 
						$('#friendimg7').css('background-image', 'url('+User.friendsobj.friends[6].photo+')'); 
						$('#friendimg7').css('background-size', '100%');
					}));
					$('#friendname7').text(User.name);
					$('#friendimg7').css('visibility', 'visible');
					$('#friendname7').css('visibility', 'visible');
				}
			}
			else if (i===7) {
				if (i===User.totalFriends) {
					$('#friendimg8').css('visibility', 'visible');
					$('#friendname8').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[7].photo).load(function() { 
						$('#friendimg8').css('background-image', 'url('+User.friendsobj.friends[7].photo+')'); 
						$('#friendimg8').css('background-size', '100%');
					}));
					$('#friendname8').text(User.name);
					$('#friendimg8').css('visibility', 'visible');
					$('#friendname8').css('visibility', 'visible');
				}
			}
			else if (i===8) {
				if (i===User.totalFriends) {
					$('#friendimg9').css('visibility', 'visible');
					$('#friendname9').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[8].photo).load(function() { 
						$('#friendimg9').css('background-image', 'url('+User.friendsobj.friends[8].photo+')'); 
						$('#friendimg9').css('background-size', '100%');
					}));
					$('#friendname9').text(User.name);
					$('#friendimg9').css('visibility', 'visible');
					$('#friendname9').css('visibility', 'visible');
				}
			}
			else if (i===9) {
				if (i===User.totalFriends) {
					$('#friendimg10').css('visibility', 'visible');
					$('#friendname10').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[9].photo).load(function() { 
						$('#friendimg10').css('background-image', 'url('+User.friendsobj.friends[9].photo+')'); 
						$('#friendimg10').css('background-size', '100%');
					}));
					$('#friendname10').text(User.name);
					$('#friendimg10').css('visibility', 'visible');
					$('#friendname10').css('visibility', 'visible');
				}
			}
			else if (i===10) {
				if (i===User.totalFriends) {
					$('#friendimg11').css('visibility', 'visible');
					$('#friendname11').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[10].photo).load(function() { 
						$('#friendimg11').css('background-image', 'url('+User.friendsobj.friends[10].photo+')'); 
						$('#friendimg11').css('background-size', '100%');
					}));
					$('#friendname11').text(User.name);
					$('#friendimg11').css('visibility', 'visible');
					$('#friendname11').css('visibility', 'visible');
				}
			}
			else if (i===11) {
				if (i===User.totalFriends) {
					$('#friendimg12').css('visibility', 'visible');
					$('#friendname12').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[11].photo).load(function() { 
						$('#friendimg12').css('background-image', 'url('+User.friendsobj.friends[11].photo+')'); 
						$('#friendimg12').css('background-size', '100%');
					}));
					$('#friendname12').text(User.name);
					$('#friendimg12').css('visibility', 'visible');
					$('#friendname12').css('visibility', 'visible');
				}
			}
			else if (i===12) {
				if (i===User.totalFriends) {
					$('#friendimg13').css('visibility', 'visible');
					$('#friendname13').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[12].photo).load(function() { 
						$('#friendimg13').css('background-image', 'url('+User.friendsobj.friends[12].photo+')'); 
						$('#friendimg13').css('background-size', '100%');
					}));
					$('#friendname13').text(User.name);
					$('#friendimg13').css('visibility', 'visible');
					$('#friendname13').css('visibility', 'visible');
				}
			}
			else if (i===13) {
				if (i===User.totalFriends) {
					$('#friendimg14').css('visibility', 'visible');
					$('#friendname14').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[13].photo).load(function() { 
						$('#friendimg14').css('background-image', 'url('+User.friendsobj.friends[13].photo+')'); 
						$('#friendimg14').css('background-size', '100%');
					}));
					$('#friendname14').text(User.name);
					$('#friendimg14').css('visibility', 'visible');
					$('#friendname14').css('visibility', 'visible');
				}
			}
			else if (i===14) {
				if (i===User.totalFriends) {
					$('#friendimg15').css('visibility', 'visible');
					$('#friendname15').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[14].photo).load(function() { 
						$('#friendimg15').css('background-image', 'url('+User.friendsobj.friends[14].photo+')'); 
						$('#friendimg15').css('background-size', '100%');
					}));
					$('#friendname15').text(User.name);
					$('#friendimg15').css('visibility', 'visible');
					$('#friendname15').css('visibility', 'visible');
				}
			}
			else if (i===15) {
				if (i===User.totalFriends) {
					$('#friendimg16').css('visibility', 'visible');
					$('#friendname16').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[15].photo).load(function() { 
						$('#friendimg16').css('background-image', 'url('+User.friendsobj.friends[15].photo+')'); 
						$('#friendimg16').css('background-size', '100%');
					}));
					$('#friendname16').text(User.name);
					$('#friendimg16').css('visibility', 'visible');
					$('#friendname16').css('visibility', 'visible');
				}
			}
			else if (i===16) {
				if (i===User.totalFriends) {
					$('#friendimg17').css('visibility', 'visible');
					$('#friendname17').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[16].photo).load(function() { 
						$('#friendimg17').css('background-image', 'url('+User.friendsobj.friends[16].photo+')'); 
						$('#friendimg17').css('background-size', '100%');
					}));
					$('#friendname17').text(User.name);
					$('#friendimg17').css('visibility', 'visible');
					$('#friendname17').css('visibility', 'visible');
				}
			}
			else if (i===17) {
				if (i===User.totalFriends) {
					$('#friendimg18').css('visibility', 'visible');
					$('#friendname18').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[17].photo).load(function() { 
						$('#friendimg18').css('background-image', 'url('+User.friendsobj.friends[17].photo+')'); 
						$('#friendimg18').css('background-size', '100%');
					}));
					$('#friendname18').text(User.name);
					$('#friendimg18').css('visibility', 'visible');
					$('#friendname18').css('visibility', 'visible');
				}
			}
			else if (i===18) {
				if (i===User.totalFriends) {
					$('#friendimg19').css('visibility', 'visible');
					$('#friendname19').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[18].photo).load(function() { 
						$('#friendimg19').css('background-image', 'url('+User.friendsobj.friends[18].photo+')'); 
						$('#friendimg19').css('background-size', '100%');
					}));
					$('#friendname19').text(User.name);
					$('#friendimg19').css('visibility', 'visible');
					$('#friendname19').css('visibility', 'visible');
				}
			}
			else if (i===19) {
				if (i===User.totalFriends) {
					$('#friendimg20').css('visibility', 'visible');
					$('#friendname20').css('visibility', 'visible');
					User.addAFriend[i] = "true";
				}
				else {
					javascript:void($('<img/>').attr('src', User.friendsobj.friends[19].photo).load(function() { 
						$('#friendimg20').css('background-image', 'url('+User.friendsobj.friends[19].photo+')'); 
						$('#friendimg20').css('background-size', '100%');
					}));
					$('#friendname20').text(User.name);
					$('#friendimg20').css('visibility', 'visible');
					$('#friendname20').css('visibility', 'visible');
				}
			}

		}
	}
}


