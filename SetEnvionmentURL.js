
// Do not include 'http://' or 'https://' in the hostname
// Instead, change "UseSSL" to 'true' or 'false'
$context.currentClip.targets[0].systemPropertyList.setPropertyValue("UseSSL", "true");
var hostname = 'https://ctva.engprod-charter.net/api/';//68.114.167.14 is B //symphony.lab.charter.com is A

$context.result.postMessage($context.result.LEVEL_INFO, "hostname changed to: " + hostname);
$context.currentClip.targets[0].systemPropertyList.setPropertyValue("HostName", hostname);


$context.currentClip.targets[0].systemPropertyList.setPropertyValue("HttpHostOverride", hostname);
