Module.register("MMM-Sunrise-Sunset",{
	defaults: {
		apiKey: '',
		latitude: '',
		longitude: '',
		layout: "inline",
		updateInterval: 3600000
	},
    start: function () {
		Log.info("Starting module: " + this.name);
		this.apiBase = "https://api.ipgeolocation.io/astronomy?apiKey="+this.config.apiKey+"&lang=en&lat="+this.config.latitude+"&long="+this.config.longitude;
		this.updateSun(this);
		setInterval(function() {
			this.updateSun(this);
		}, this.config.updateInterval);
	},
	getScripts: function() {
		return ["jquery.js"];
	},
	getStyles: function () {
		return ["weather-icons.css", "MMM-Sunrise-Sunset.css"];
	},
    getDom: function() {
    	var wrapper = document.createElement("div");
    	wrapper.className = "small normal sunrise";
    	wrapper.innerHTML = "Loading...";
    	return wrapper;
    },
    updateSun: function() {
	    var url = this.apiBase;
	    var offset = this.config.timezone;
	    if(this.config.layout === "inline"){
    	    $.getJSON( url, function( data ) {
	    	    $('.sunrise').html('');
        	    var sunrise = data.sunrise;
        	    var sunset = data.sunset;
        	    var noon = data.solar_noon;
            	var daylength = data.day_length;
            	var moonrise = data.moonrise;
            	var moonset = data.moonset;
                $('.sunrise').append('<i class="wi wi-sunrise"></i>'+ sunrise);
                $('.sunrise').append(' | <i class="wi wi-sunset"></i>'+ sunset);
                $('.sunrise').append(' | <i class="wi wi-day-sunny"></i>'+ noon);
                $('.sunrise').append(' | <i class="wi wi-time-12"></i>'+ daylength);
                $('.sunrise').append(' | <i class="wi wi-moonrise"></i>'+ moonrise);
                $('.sunrise').append(' | <i class="wi wi-moonset"></i>'+ moonset);
        	});
    	}
		if(this.config.layout === "list"){
			$.getJSON( url, function( data ) {
	    	    $('.sunrise').html('');
        	    var sunrise = data.sunrise;
        	    var sunset = data.sunset;
        	    var noon = data.solar_noon;
            	var daylength = data.day_length;
            	var moonrise = data.moonrise;
            	var moonset = data.moonset;
                $('.sunrise').append('<table>');
                $('.sunrise').append('<tr><td class="fw-icon"><i class="wi wi-sunrise"></i></td><td class="time" width="200">'+ sunrise + '</td></tr>');
                $('.sunrise').append('<tr><td class="fw-icon"><i class="wi wi-sunset"></i></td><td class="time" width="200">'+ sunset + '</td></tr>');
                $('.sunrise').append('<tr><td class="fw-icon"><i class="wi wi-day-sunny"></i></td><td class="time" width="200">'+ noon + '</td></tr>');
                $('.sunrise').append('<tr><td class="fw-icon"><i class="wi wi-time-12"></i></td><td class="time" width="200">'+ daylength + '</td></tr>');
                $('.sunrise').append('<tr><td class="fw-icon"><i class="wi wi-moonrise"></i></td><td class="time" width="200">'+ moonrise + '</td></tr>');
                $('.sunrise').append('<tr><td class="fw-icon"><i class="wi wi-moonset"></i></td><td class="time" width="200">'+ moonset + '</td></tr>');
                $('.sunrise').append('</table>');
    		});
    	}
    }
});