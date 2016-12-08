$(function(){
	
	var note = $('#note'),
		ts = new Date(2016, 11, 14),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " дней" + ( days==1 ? '':'' ) + ", ";
			message += hours + " часов" + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " минут" + ( minutes==1 ? '':'' ) + ", ";
			message += seconds + " секунд" + ( seconds==1 ? '':'' ) + " <br />";
			
			if(newYear){
				message += "До начала продаж!";
			}
			else {
				
			}
			
			note.html(message);
		}
	});
	
});
