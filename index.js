var ibmdb = require('ibm_db');
var argv = require('minimist')(process.argv.slice(2));

var dbhost = argv.dbhost;
var dbname = argv.dbname;
var db2user = argv.db2user;
var password = argv.password;
var dbport = argv.dbport;
var query = argv.query;

var usage = "USAGE: \n--dbhost=<db2-server-ip> --dbname=<db2-name> --db2user=<db2user> --password=<password> --dbport=<db2-server-port> --query=<query-to-execute>"

if (dbhost && dbname && db2user && password && dbport && query) {
    ibmdb.open("DRIVER={DB2};DATABASE=" + dbname + ";HOSTNAME=" + dbhost + ";UID=" + db2user + ";PWD=" + password + ";PORT=" + dbport + ";PROTOCOL=TCPIP", function(err, conn) {
        if (err) return console.log(err);

        conn.query('SELECT * FROM MDLR_CORE_CLUSTERS', function(err, data) {
            if (err) console.log(err);
            else console.log(data);

            conn.close(function() {
                console.log('done');
            });
        });
    });
} else {
	console.info(usage);
}
