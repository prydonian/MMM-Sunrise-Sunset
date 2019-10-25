Module.register("MMM-Sunrise-Sunset",{
	defaults: {
		latitude: "",
		longitude: "",
		layout: "inline",
		updateInterval: 3600000
	},
    start: function () {
		Log.info("Starting module: " + this.name);
		this.apiBase = "https://api.sunrise-sunset.org/json?lat="+this.config.latitude+"&lng="+this.config.longitude+"&date=today";
		var layout = this.config.layout;
		this.updateSun(this);
		setInterval(function() {
			this.updateSun(this);
		}, this.config.updateInterval);
	},
	getScripts: function() {
		return ["jquery.js"];	
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
	    if(this.config.layout === "inline"){
    	    $.getJSON( url, function( data ) {
        		$('.sunrise').html('<i class="wi wi-sunrise"></i> '+data.results.sunrise + ' <i class="wi wi-sunset"></i> '+data.results.sunset + ' <i class="wi wi-day-sunny"></i> '+data.results.solar_noon);
        	});
    	}
		if(this.config.layout === "list"){
			$.getJSON( url, function( data ) {
    		    $('.sunrise').html('<div><i class="wi wi-sunrise"></i> '+data.results.sunrise + '</div><div><i class="wi wi-sunset"></i> '+data.results.sunset + '</div><div><i class="wi wi-day-sunny"></i> '+data.results.solar_noon) + '</div>';
    		});
    	}
    }
});