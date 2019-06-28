# zabbix-customs-solutions
Tips to tune zabbix work

## preprocessing/snmp-discovery-hex-to-string.js
Sometimes devices return data in hex pairs like "D0 A7 D0 B5 D1 80 D0 BD D1 8B D0 B9 20 D0 BA D0"
Descovery rule passes to preprocessing rule JSON string 
```javascript
[{"{#SNMPINDEX}": "index", "{#SNMPVALUE}": "some data"}, ...]
```
So script looping through all SNMPVALUEs and if finding out that string is HEX representation, trying to convert it to regular string

## preprocessing/snmp-item-hex-to-string.js
Equal to snmp-discovery-hex-to-string.js but item preprocessing passes string value (not JSON) to filter
