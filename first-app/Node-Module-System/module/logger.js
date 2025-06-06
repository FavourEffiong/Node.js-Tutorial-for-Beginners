
var url = 'http://mylogger.io/log';

function log (message) {
    // Send an HTTP request
    console.log(message);
}

module.export.log = log;

// Loading a Module