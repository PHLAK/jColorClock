$(document).ready(function(){
    
    // Set 24 hour time to true by default
    var twelveHour = false;
        
    // Set interval for every 0.1 seconds
    setInterval(function() {
        
        // Set color mode based on URL hash
        if (window.location.hash == '#continuous') {
            var continuous = true;
        } else {
            var continuous = false;
        }
        
        // Instantiate the date object
        var date = new Date();
        
        // Get the time
        var time = getTime(date, twelveHour);
        
        // Choose mode based on the hash
        if (continuous == true) {
            var color = getColor(date, 'continuous');
        } else {
            var color = getColor(date);
        }
        
        // Update the time
        $('#clock .text').text(time);
        
        // Change the background color
        $('body').animate({ backgroundColor: '#' + color }, 500);
        
        // Resize clock font
        clockScale();
        
    }, 1000);
    
    // Set the copyright date
    var date = new Date();
    $('#year').text(date.getFullYear());
    
    // Set the color mode on click
    $('#colorMode').click(function() {
        if (window.location.hash == '#continuous') {
            window.location.hash = '#default';
        } else {
            window.location.hash = '#continuous';
        }
        
        return false;
    });
    
    // Set the clock mode on click
    $('#clockMode').click(function() {
        if (twelveHour == true) {
            twelveHour = false;
        } else {
            twelveHour = true;
        }
        
        return false;
    });
    
    // Hide text on click
    $('#hideText').click(function(){
        $('#title').fadeOut();
        $('#description').fadeOut();
        $('#options').fadeOut();
        $('#credit').fadeOut();
        
        return false;
    });
    
    // Resize font on window resize
    $(window).resize(function(){
        clockScale();
    });

});

function getTime(date, twelveHour) {
    // Set the date variable
    var currentTime = date;
    
    // Set the hours, minutes and seconds to variables
    var hours   = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
        
    if (twelveHour) {
        if (hours > 12) {
            hours = hours - 12;
        }
    }
    
    // Fix variables when < 10
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10){ minutes = "0" + minutes; }
    if (seconds < 10){ seconds = "0" + seconds; }

    // Construct a string of the current time
    var time = hours + ':' + minutes + ':' + seconds;
    
    // Return the time string
    return time;
}

function getColor(date, mode) {
    // Instantiate the date object
    var currentTime = date;
    
    // Set the hours, minutes and seconds to variables
    var hours   = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Decide which mode to process
    if (mode == 'continuous') {
        var hex = ((hours * 3600) + (minutes * 60) + seconds) * 193.97;
        
        // Convert decimal to hex
        var hex = Math.round(hex);
        var hex = hex.toString(16);
        
        // Fill in leading 0's
        while (hex.length < 6) {
            var hex = '0' + hex;        
        }
    } else {
        // Set the hours, minutes and seconds to variables
        var r = Math.round(hours * (255 / 23));
        var g = Math.round(minutes * (255 / 59));
        var b = Math.round(seconds * (255 / 59));
        
        // Convert decimal to hex
        var r = r.toString(16);
        var g = g.toString(16);
        var b = b.toString(16);
        
        // Fix string lengths if needed
        if (r.length < 2) { r = '0' + r; }
        if (g.length < 2) { g = '0' + g; }
        if (b.length < 2) { b = '0' + b; }
    
        // Construct the hex string
        var hex = r + g + b;
    }

    // Return the color string
    return hex;
}

function clockScale() {
    // Set some variables
    var scaleSource = $('body').width();
    var scaleFactor = .12;
    var maxScale = 150;
    var minScale = 50;

    // Multiply the width of the body by the scaling factor
    var fontSize = scaleSource * scaleFactor; 

    //Enforce the minimum and maximums
    if (fontSize > maxScale) fontSize = maxScale;
    if (fontSize < minScale) fontSize = minScale; 

    // Set the new font size
    $('#clock .text').css('font-size', fontSize + '%');
    
    // Set the new top margin
    var margin = $('#clock').height() / 2;
    $('#clock').css('margin-top', '-' + margin + 'px');
}
