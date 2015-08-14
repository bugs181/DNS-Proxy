function getIPAddress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return alias.address;
    }
  }

  return '0.0.0.0';
}

module.exports = {
	dnsConfig: {
		
		DNS: "208.67.222.222", // OpenDNS (does not like some websites; treats them as fishing)
		// DNS: "8.8.8.8", // Google DNS

		domains: [
			{
				name: "mycomputer",
				ip: getIPAddress() // Retrieve our local IP address.
			}
		]

	}
}