
$(document).ready(function(){
	$('.close').click(function() {
		$('.notification').toggle();
		});
	
	$('.send').live('touchend', function(){
		$('.notification').toggle();
		$('.send').css('background-image','url("images/navbar_buttons/send.png")');
		var msg = document.getElementById("message").value;
                alert("Msg sent.");
                sendComposedMsg(msg);
		//$('body').load('index3.html');
	});
	$('.send').live('touchstart', function(){
		$('.send').css('background-image','url("images/navbar_buttons/send_selected.png")');
	});
	
	
	//Chat.doConnection();
	//Chat.doLogin("avinash","cloud");
});


$(document).ready(function(){
	$('.send').click(function(){
		var msg = document.getElementById("message").value;
		alert("Msg sent.");
		sendComposedMsg(msg);
		//$('body').load('index3.html');
	});
});



function sendComposedMsg(msg){
	
	//var msg = document.getElementById("message").value;
	var userArray = User.selectedFriends;
	var frnds = userArray[0];
	//alert("Friend : "+frnds);
	Chat.addFriends(frnds);
	Chat.sendMessage(frnds,msg,null,null);
	$('body').load('index3.html', function() {

            User.initialize();
            User.getFriends();
            User.flushUsers();
            $('#header').css('display', 'block');
            $('#twentyatfooter').css('display', '-webkit-box');

            $('#twentyatbody').load('twentyat.html', function () {
                User.getFriends();
            });
        });
}

function acknowledge(msg){
	alert(msg);
}
