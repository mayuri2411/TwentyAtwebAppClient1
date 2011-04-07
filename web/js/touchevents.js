$(document).ready(function() {
	var twentyat = false;
	var conversation = false;
	$('#thballfriends').live('touchstart', function() {
		if (twentyat === false) {
			twentyat=true;
			conversation=false;
			$('#thbconversation').css('background-image', 'url(images/navbar_buttons/segmented1_conversationlist.png)');
			$('#thballfriends').css('background-image', 'url(images/navbar_buttons/segmented1_allfriends_selected.png)');
		
			$('#twentyatbody').load('twentyat.html', function () { 
				//$('#twentyatbody').css('height', '340px');
				User.getFriends();
			});
			$('#twentyatfooter').load('twentyatfooter.html');
                        User.flushUsers();
		}
		
	});
	
	$('#thbconversation').live('touchstart', function() {
		if (conversation === false) {
			twentyat=false;
			conversation=true;
			$('#thbconversation').css('background-image', 'url(images/navbar_buttons/segmented1_conversationlist_selected.png)');
			$('#thballfriends').css('background-image', 'url(images/navbar_buttons/segmented1_allfriends.png)');
		
			//$(location).attr('href', 'compose.html');
			$('#twentyatbody').load('conversation.html');
			//$('#twentyatbody').css('height', '320px');
			$('#twentyatfooter').load('twentyatfooter.html');
		}
	});
	
	$('#twentyatbox1').live('touchstart', function() {
		/*var elementId = this.id;
		//alert(elementId);
		var elementLength = elementId.length;
		var elementNumber = elementId[elementLength - 1];
		//alert(elementNumber);*/
		//alert("over here");
		if (User.isFriendSet[0] === "true") {
			if (User.isFriendClicked[0] === "true") {
				User.isFriendClicked[0] = "false";
				User.friendClickedCount -= 1;
				//alert("User.isFriendClicked "+User.isFriendClicked[0]);
				//alert("FriendClickedCount "+ User.friendClickedCount);
				//alert("User.isFriendSet "+User.isFriendSet);
				$('#twentyatbox1').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount === 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					//alert(User.friendsobj.friends.twentyatUserId);
					
				}
				else if (User.friendClickedCount === 0)
				{
					//alert("loaded footer");
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[0] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[0]==="true") {
				User.selectedFriends[0] = User.userFriends[0];
				//alert("user Selected"+User.userFriends[0]);
				//alert(User.selectedFriends[0]);
				if (User.friendClickedCount === 1)
				{
					//alert("Single User click");
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox1').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					//alert("Multi User click");
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox1').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			
			/*$('#twentyatbox1').css('margin', '1px');*/
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
			
			
		}
		else {
			//alert('got u');
			if (User.addAFriend[0] === "true")
			{	
				//alert("working");
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
                        else {

                            $('body').load('AddFriends.html', function () {
					getAllContacts();
				});
                        }

		}
	});
	
	$('#twentyatbox2').live('touchstart', function() {
		if (User.isFriendSet[1] === "true") {
			if (User.isFriendClicked[1] === "true") {
				User.isFriendClicked[1] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox2').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount === 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount === 0)
				{
					//alert("loaded footer");
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[1] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[1]==="true") {
				User.selectedFriends[1] = User.userFriends[1];
				if (User.friendClickedCount === 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox2').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox2').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[1] === "true")
			{	
				//alert("working");
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox3').live('touchstart', function() {
		if (User.isFriendSet[2] === "true") {
			if (User.isFriendClicked[2] === "true") {
				User.isFriendClicked[2] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox3').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount === 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					//$('#twentyatfooter').css('height','90px');
				}
				else if (User.friendClickedCount === 0)
				{
					//alert("loaded footer");
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[2] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[2]==="true") {
				User.selectedFriends[2] = User.userFriends[2];
				if (User.friendClickedCount === 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox3').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox3').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[2] === "true")
			{	
				//alert("working");
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox4').live('touchstart', function() {
		if (User.isFriendSet[3] == "true") {
			if (User.isFriendClicked[3] == "true") {
				User.isFriendClicked[3] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox4').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[3] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[3]=="true") {
				User.selectedFriends[3] = User.userFriends[3];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox4').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox4').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[3] === "true")
			{	
				//alert("working");
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox5').live('touchstart', function() {
		if (User.isFriendSet[4] == "true") {
			if (User.isFriendClicked[4] == "true") {
				User.isFriendClicked[4] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox5').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[4] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[4]=="true") {
				User.selectedFriends[4] = User.userFriends[4];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox5').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox5').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[4] === "true")
			{	
				//alert("working");
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox6').live('touchstart', function() {
		if (User.isFriendSet[5] == "true") {
			if (User.isFriendClicked[5] == "true") {
				User.isFriendClicked[5] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox6').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[5] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[5]=="true") {
				User.selectedFriends[5] = User.userFriends[5];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox6').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox6').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[5] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox7').live('touchstart', function() {
		if (User.isFriendSet[6] == "true") {
			if (User.isFriendClicked[6] == "true") {
				User.isFriendClicked[6] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox7').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[6] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[6]=="true") {
				User.selectedFriends[6] = User.userFriends[6];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox7').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox7').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[6] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox8').live('touchstart', function() {
		if (User.isFriendSet[7] == "true") {
			if (User.isFriendClicked[7] == "true") {
				User.isFriendClicked[7] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox8').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[7] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[7]=="true") {
				User.selectedFriends[7] = User.userFriends[7];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox8').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox8').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[7] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox9').live('touchstart', function() {
		if (User.isFriendSet[8] == "true") {
			if (User.isFriendClicked[8] == "true") {
				User.isFriendClicked[8] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox9').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[8] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[8]=="true") {
				User.selectedFriends[8] = User.userFriends[8];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox9').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox9').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[8] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox10').live('touchstart', function() {
		if (User.isFriendSet[9] == "true") {
			if (User.isFriendClicked[9] == "true") {
				User.isFriendClicked[9] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox10').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[9] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[9]=="true") {
				User.selectedFriends[9] = User.userFriends[9];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox10').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfoo10').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[9] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox11').live('touchstart', function() {
		if (User.isFriendSet[10] == "true") {
			if (User.isFriendClicked[10] == "true") {
				User.isFriendClicked[10] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox11').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[10] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[10]=="true") {
				User.selectedFriends[10] = User.userFriends[10];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox11').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox11').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[10] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox12').live('touchstart', function() {
		if (User.isFriendSet[11] == "true") {
			if (User.isFriendClicked[11] == "true") {
				User.isFriendClicked[11] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox12').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[11] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[11]=="true") {
				User.selectedFriends[11] = User.userFriends[11];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox12').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox12').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[11] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
			
	$('#twentyatbox13').live('touchstart', function() {
		if (User.isFriendSet[12] == "true") {
			if (User.isFriendClicked[12] == "true") {
				User.isFriendClicked[12] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox5').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[12] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[12]=="true") {
				User.selectedFriends[12] = User.userFriends[12];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox13').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox13').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[12] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox14').live('touchstart', function() {
		if (User.isFriendSet[13] == "true") {
			if (User.isFriendClicked[13] == "true") {
				User.isFriendClicked[13] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox14').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[13] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[13]=="true") {
				User.selectedFriends[13] = User.userFriends[13];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox14').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox14').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[13] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox15').live('touchstart', function() {
		if (User.isFriendSet[14] == "true") {
			if (User.isFriendClicked[14] == "true") {
				User.isFriendClicked[14] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox15').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[14] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[14]=="true") {
				User.selectedFriends[14] = User.userFriends[14];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox15').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox15').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[14] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox16').live('touchstart', function() {
		if (User.isFriendSet[15] == "true") {
			if (User.isFriendClicked[15] == "true") {
				User.isFriendClicked[15] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox16').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[15] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[15]=="true") {
				User.selectedFriends[15] = User.userFriends[15];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox16').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox16').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[15] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox17').live('touchstart', function() {
		if (User.isFriendSet[16] == "true") {
			if (User.isFriendClicked[16] == "true") {
				User.isFriendClicked[16] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox17').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[16] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[16]=="true") {
				User.selectedFriends[16] = User.userFriends[16];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox17').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox17').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[16] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox18').live('touchstart', function() {
		if (User.isFriendSet[17] == "true") {
			if (User.isFriendClicked[17] == "true") {
				User.isFriendClicked[17] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox18').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[17] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[17]=="true") {
				User.selectedFriends[17] = User.userFriends[17];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox18').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox18').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[17] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox19').live('touchstart', function() {
		if (User.isFriendSet[18] == "true") {
			if (User.isFriendClicked[18] == "true") {
				User.isFriendClicked[18] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox19').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[18] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[18]=="true") {
				User.selectedFriends[18] = User.userFriends[18];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox19').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox19').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[18] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#twentyatbox20').live('touchstart', function() {
		if (User.isFriendSet[19] == "true") {
			if (User.isFriendClicked[19] == "true") {
				User.isFriendClicked[19] = "false"
				User.friendClickedCount -= 1;
				$('#twentyatbox20').css('-webkit-box-shadow', '0 0 0');
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
				}
				else if (User.friendClickedCount == 0)
				{
					$('#twentyatfooter').load('twentyatfooter.html');
				}
			}
			else {
			//alert("over there");
				User.isFriendClicked[19] = "true";
				User.friendClickedCount += 1;
			}
			
			if (User.isFriendClicked[19]=="true") {
				User.selectedFriends[19] = User.userFriends[19];
				if (User.friendClickedCount == 1)
				{
					$('#twentyatfooter').load('singleuser.html');
					$('#twentyatbox20').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
				else if (User.friendClickedCount > 1)
				{
					$('#twentyatfooter').load('multiuser.html');
					$('#twentyatbox20').css('-webkit-box-shadow', 'inset 0 0 15px #2cb7f8, 0 0 4px #2f7393');
				}
			}
			$('#twentyatbox').css('height', '56px');
			$('#twentyatbox').css('width', '56px');
		}
		else {
			if (User.addAFriend[19] === "true")
			{	
				//$(location).attr('href', 'AddFriends.html');
				$('body').load('AddFriends.html', function () {
					getAllContacts();
				});
			}
		}
	});
	
	$('#compose').live('touchstart', function() {
		//alert('u clicked compose');
		//$(location).attr('href', 'compose.html');
		$('body').load('compose.html', function() {
                    $('#compose-container').css('display', 'block');

                });
			
	});
	
	$('#multicompose').live('touchstart', function() {
		
		$('body').load('compose.html', function() {
                    $('#compose-container').css('display', 'block');

                });
			
	});
	
});
