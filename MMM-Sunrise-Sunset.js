Module.register("MMM-Sunrise-Sunset",{
	defaults: {
		latitude: "",
		longitude: "",
		timezone: "Europe/London",
		daylength: true,
		layout: "inline",
		updateInterval: 3600000
	},
    start: function () {
		Log.info("Starting module: " + this.name);
		this.apiBase = "https://api.sunrise-sunset.org/json?lat="+this.config.latitude+"&lng="+this.config.longitude+"&date=today&formatted=0";
		this.updateSun(this);
		setInterval(function() {
			this.updateSun(this);
		}, this.config.updateInterval);
	},
	getScripts: function() {
		return ["jquery.js", "moment.js", "moment-timezone-with-data.js"];
	},
	getStyles: function () {
		return ["weather-icons.css"];
	},
    getDom: function() {
    	var wrapper = document.createElement("div");
    	wrapper.className = "small dimmed sunrise";
    	wrapper.innerHTML = "Loading...";
    	return wrapper;
    },
    updateSun: function() {
	    var url = this.apiBase;
	    var offset = this.config.timezone;
	    if(this.config.layout === "inline"){
    	    $.getJSON( url, function( data ) {
	    	    $('.sunrise').html('');
        	    var sunrise = moment.tz(data.results.sunrise, offset);
        	    var sunset = moment.tz(data.results.sunset, offset);
        	    var noon = moment.tz(data.results.solar_noon, offset);
            	var day_length = data.results.day_length;
                $('.sunrise').append('<i class="wi wi-sunrise"></i>'+ sunrise.format("hh:mm:ss a"));
                $('.sunrise').append(' | <i class="wi wi-sunset"></i>'+ sunset.format("hh:mm:ss a"));
                $('.sunrise').append(' | <i class="wi wi-day-sunny"></i>'+ noon.format("hh:mm:ss a"));
                if(this.config.daylength === "true") {
                  $('.sunrise').append(' | <i class="wi wi-time-1"></i>'+ parseFloat(dat_length/120).toFixed(2));
                }
        	});
    	}
		if(this.config.layout === "list"){
			$.getJSON( url, function( data ) {
	    	    $('.sunrise').html('');
            	var sunrise = moment.tz(data.results.sunrise, offset);
    	        var sunset = moment.tz(data.results.sunset, offset);
    	        var noon = moment.tz(data.results.solar_noon, offset);
    	        var day_length = data.results.daylength;
    	        $('.sunrise').append('<div><i class="wi wi-sunrise"></i>'+ sunrise.format("hh:mm:ss a") + '</div>');
                $('.sunrise').append('<div><i class="wi wi-sunset"></i>'+ sunset.format("hh:mm:ss a") + '</div>');
                $('.sunrise').append('<div><i class="wi wi-day-sunny"></i>'+ noon.format("hh:mm:ss a") + '</div>');
                if(this.config.daylength === "true") {
                  $('.sunrise').append('<div><i class="wi wi-time-1"></i>'+ parseFloat(dat_length/120).toFixed(2) + '</div>');
                }
    		});
    	}
    }
});