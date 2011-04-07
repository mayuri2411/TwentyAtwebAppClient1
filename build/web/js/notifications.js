
var Notifications = {
	notificationCount : new Array(),
	counter : 0,
	
	showStatusNotification : function(String uuid, String status) {
		for (counter=0; counter<20; counter++) {
			if (User.friendsobj.friends[counter]===uuid){
				//alert('UUID : ' + uuid);
				//alert('Status : ' + status);
				if (counter==0) {
					if (status === "online") {
						$('#twentyatbox1').css('opacity', '0');
					}
					else {
						$('#twentyatbox1').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
					
				}
				else if (counter==1) {
					if (status === "online") {
						$('#twentyatbox2').css('opacity', '0');
					}
					else {
						$('#twentyatbox2').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==2) {
					if (status === "online") {
						$('#twentyatbox3').css('opacity', '0');
					}
					else {
						$('#twentyatbox3').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==3) {
					if (status === "online") {
						$('#twentyatbox4').css('opacity', '0');
					}
					else {
						$('#twentyatbox4').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==4) {
					if (status === "online") {
						$('#twentyatbox5').css('opacity', '0');
					}
					else {
						$('#twentyatbox5').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==5) {
					if (status === "online") {
						$('#twentyatbox6').css('opacity', '0');
					}
					else {
						$('#twentyatbox6').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==6) {
					if (status === "online") {
						$('#twentyatbox7').css('opacity', '0');
					}
					else {
						$('#twentyatbox7').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==7) {
					if (status === "online") {
						$('#twentyatbox8').css('opacity', '0');
					}
					else {
						$('#twentyatbox8').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==8) {
					if (status === "online") {
						$('#twentyatbox9').css('opacity', '0');
					}
					else {
						$('#twentyatbox9').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==9) {
					if (status === "online") {
						$('#twentyatbox10').css('opacity', '0');
					}
					else {
						$('#twentyatbox10').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==10) {
					if (status === "online") {
						$('#twentyatbox11').css('opacity', '0');
					}
					else {
						$('#twentyatbox11').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==11) {
					if (status === "online") {
						$('#twentyatbox12').css('opacity', '0');
					}
					else {
						$('#twentyatbox12').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==12) {
					if (status === "online") {
						$('#twentyatbox13').css('opacity', '0');
					}
					else {
						$('#twentyatbox13').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==13) {
					if (status === "online") {
						$('#twentyatbox14').css('opacity', '0');
					}
					else {
						$('#twentyatbox14').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==14) {
					if (status === "online") {
						$('#twentyatbox15').css('opacity', '0');
					}
					else {
						$('#twentyatbox15').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==15) {
					if (status === "online") {
						$('#twentyatbox16').css('opacity', '0');
					}
					else {
						$('#twentyatbox16').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==16) {
					if (status === "online") {
						$('#twentyatbox17').css('opacity', '0');
					}
					else {
						$('#twentyatbox17').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==17) {
					if (status === "online") {
						$('#twentyatbox18').css('opacity', '0');
					}
					else {
						$('#twentyatbox18').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==18) {
					if (status === "online") {
						$('#twentyatbox19').css('opacity', '0');
					}
					else {
						$('#twentyatbox19').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				else if (counter==19) {
					if (status === "online") {
						$('#twentyatbox20').css('opacity', '0');
					}
					else {
						$('#twentyatbox20').css({'opacity': '0.4','filter': 'alpha(opacity=40)'});
					}
				}
				
			}
			
		}
	
	}
	
		
}
