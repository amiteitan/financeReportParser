
var PARSER = PARSER || new FLIB("Operational");
//Report entry class
    var ReportEntry = function(){
        this.date = new Date().getTime();
        this.name = "";
        this.debit = 0;
        this.credit = 0;
        this.total = 0;
        this.description = "";
    };



    function textToFloat(text) {
        var tempNum = text.split(',');
        tempNum = parseFloat(tempNum[0] + tempNum[1]);
        if (isNaN(tempNum)) tempNum = 0;
        return  tempNum;
    };

    function textToDate(text) {
        //Parse the format DD/MM/YYYY
        var da = text.split("/");
        if (da.length != 3) return undefined;
        return new Date(da[2], da[1] - 1, da[0]).getTime();
    };

    function FLIB(id) {
        var parsers = [];
        this.id = id;
        this.addParser = function (parser) {
            parsers.push(parser);
        }
        this.parse = function (rawData) {
            var parsesLength = parsers.length;
            for (var i = 0; i < parsesLength; i++) {
                if (parsers[i].valid(rawData)) {
                    return parsers[i].parse(rawData);
                }
            }
            return [];
        }
    };

    var Parser = function (id, parser) {
        this.id = id;
        this.valid = function (rawData) {
            return (id.substring(0, id.length) === rawData.substring(0, id.length) );
        };
        this.parse = parser;
    };

    var isracardId = '<html xmlns:user="urn:user" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:x="urn:schemas-microsoft-com:office:excel" id="HTML_ID"><HEAD><META CONTENT="text/html" HTTP-EQUIV="Content-Type" charset="iso-8859-8"></META><META CONTENT="no-cache" HTTP-EQUIV="Pragma"></META><META CONTENT="0" HTTP-EQUIV="expires"></META></HEAD><BODY LINK="#0000A4" TEXT="#000000" ALINK="#0000A4" BGCOLOR="#fefefe" VLINK="#0000A4" dir="rtl">';

    function getText(html){
        return html.substring(html.lastIndexOf(">")+1);
    }

    var isracardParser = function (rawData) {
        var report = [];
        var entry = {};
        var tempMoney = 0;
        var rawReport = rawData.split("</TR>");
        var firsttime = true;
        for (var i=4; i<rawReport.length; i++){
            var rawEntry = rawReport[i].split("</TD>");
            switch (rawEntry.length)
            {
                case 7:
                    //Israeli transactions
                    entry=  new ReportEntry();
                    entry.date = textToDate(getText(rawEntry[0]));
                    if (entry.date == undefined) break; //This line is just informative and will not help in out report.
                    entry.name = getText(rawEntry[1]);
                    // rawEntry[2]; //Total amount of the deal
                    tempMoney = textToFloat(getText(rawEntry[3]));
                    entry.debit = tempMoney > 0 ? tempMoney : 0;
                    entry.credit = tempMoney < 0 ? (tempMoney*(-1)) : 0;
                    // rawEntry[4]; //Transaction id
                    entry.description = getText(rawEntry[5]);
                    report.push(entry);
                    break;
                case 10:
                    //International Transactions
                    if (firsttime) { firsttime=false;  break;} //skip international deal headers
                    entry = new ReportEntry();
                    entry.date = textToDate(getText(rawEntry[0]));
                    if (entry.date == undefined) break; //This line is just informative and will not help in out report.
                    // rawEntry[1]; //Date of buying
                    entry.name = getText(rawEntry[2]);
                    // rawEntry[3]; //City code
                    // rawEntry[4]; //Original currency
                    entry.debit = tempMoney > 0 ? tempMoney : 0;
                    entry.credit = tempMoney < 0 ? (tempMoney*(-1)) : 0;
                    // rawEntry[6]; //Currency to bill
                    // rawEntry[7]; //Total in the [6] currency
                    // rawEntry[8]; //Transaction id
                    entry.description = ""; //No description in international deals
                    report.push(entry);
                    break;
                default:
                    break;
            }

        }
        return report;
    }
    var otzarHaayalID = "יתרה   	  תאריך ערך  	 זכות 	 חובה 	 תאור 	אסמכתא 	 סוג פעולה  	 תאריך";
    var otzarHaayalParser = function (rawData) {
        var report = [];
        var rawReport = rawData.split('\n');
        for (var i = 2; i < rawReport.length; i++) {
            var rawEntry = rawReport[i].split('\t');
            if (rawEntry != undefined)
                if (rawEntry.length >= 7) {
                    var entry = new ReportEntry();
                    var MissingTotal = 0;
                    if (rawEntry.length == 8) {
                        entry.total = rawEntry[0];
                    } else {
                        MissingTotal = 1;
                    }
                    var credit = (rawEntry[2 - MissingTotal]);
                    var debit = (rawEntry[3 - MissingTotal]);
                    //rawEntry[1-MissingTotal]; //Value date - not used in our reports
                    entry.credit = textToFloat(credit);
                    entry.debit = textToFloat(debit);
                    entry.name = rawEntry[4 - MissingTotal];
                    //rawEntry[5-MissingTotal]; //Reference - not used in our reports
                    //rawEntry[6-MissingTotal]; //Action type - not used in our reports
                    entry.date = textToDate(rawEntry[7 - MissingTotal]);

                    entry.description = ""; //Bank report does not have detailed description

                    report.push(entry);
                }
        }
        return report;
    }

    var isracardParser = new Parser(isracardId, isracardParser);
    var otzarHahayalParser = new Parser(otzarHaayalID, otzarHaayalParser);
    PARSER.addParser(otzarHahayalParser);
    PARSER.addParser(isracardParser);
