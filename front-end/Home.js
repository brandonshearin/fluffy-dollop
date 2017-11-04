var wristband = function (partyName, date, time, from, to, location, organization, partyID) {
	this.getPartyName = function() {
		return partyName;
	}

	this.getDate = function() {
		return date;
	}

	this.getTime = function() {
		return time;
	}

	this.getFrom = function() {
		return from;
	}

	this.getTo = function() {
		return to;
	}

	this.getLocation = function() {
		return location;
	}

	this.getOrganization = function() {
		return organization;
	}

	this.getPartyID = function() {
		return partyID;
	}
}

function renderWristbands() {
	
	var exampleBand1 = new wristband("Bears Beats Bananas", "11/6/2017", "11:00", "Mike", "Brandon", "204 W Cameron Ave", "Kappa Sigma", 1);
	var exampleBand2 = new wristband("Construction Themed", "11/9/2017", "11:30", "Brandon", "Simon", "West Franklin St", "Wendy's", 2);

	var wristbands = [];
	wristbands.push(exampleBand1);
	wristbands.push(exampleBand2);

	$('body').append("<table>");

	//Class should be changed to band/party id
	wristbands.forEach(function(w) {

		$('table').append("<tr class = " + w.getPartyID() + ">");

		$("." + w.getPartyID()).append("<td>" + w.getPartyName() + "</td>");
		$("." + w.getPartyID()).append("<td>" + w.getDate() + "</td>");
		$("." + w.getPartyID()).append("<td>" + w.getTime() + "</td>");
		$("." + w.getPartyID()).append("<td>" + w.getFrom() + "</td>");
		$("." + w.getPartyID()).append("<td>" + w.getTo() + "</td>");
		$("." + w.getPartyID()).append("<td>" + w.getLocation() + "</td>");
		$("." + w.getPartyID()).append("<td>" + w.getOrganization() + "</td>");

		$('table').append("</tr>");
	});

	$('table').css({"width": "100%", "table-layout": "auto"});

	$('body').append("</table>");

}

renderWristbands();
