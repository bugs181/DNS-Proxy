// Custom DNS Server with Pass-through support for domains

// Logging
var ansi = require('ansi'), cursor = ansi(process.stdout)

// DNS Server
var dnsServer = require("dns-server")

// Set up DNS logging functions
dnsServer.log(function(log) {
  cursor.hex('#2EAEBB').write(log + '\r\n').reset()
})

dnsServer.logRequest(function(log) {
  cursor.hex('#551A8B').write(log + '\r\n').reset()
})

dnsServer.logHit(function(log) {
  cursor.hex('#2EAEBB').write(log + '\r\n').reset()
})

// Start DNS Server with provided config file.
dnsServer.start( require("./config").dnsConfig )