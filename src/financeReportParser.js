if (typeof FRP == 'undefined')
    FRP = {};

(function(){
    this.test = "Test";
    this.parsers = [];
    this.parse = function(rawData){
        for(var index in FRP.Parser) {
            if (FRP.Parser.hasOwnProperty(index)) {
                if (FRP.Parser[index].valid(rawData))
                {
                    return FRP.Parser[index].parse(rawData);
                }
            }
        }
        return undefined;
    };


function ReportEntry(){
    this.date = new Date();
    this.name ="";
    this.debit = 0;
    this.credit = 0;
    this.total = 0;
    this.description = "";
}

function textToFloat(text) {
    var tempNum = text.split(',');
    tempNum = parseFloat(tempNum[0] + tempNum[1]);
    if (isNaN(tempNum)) tempNum =0;
    return  tempNum;
}

if (typeof FRP.Parser == 'undefined')
    FRP.Parser = {};

if (typeof FRP.Parser.OtzahrHahayal == 'undefined') {
    FRP.Parser.OtzahrHahayal = {
        id: "יתרה   	  תאריך ערך  	 זכות 	 חובה 	 תאור 	אסמכתא 	 סוג פעולה  	 תאריך",
        valid: function (rawData) {
            return (this.id.substring(1,20) === rawData.substring(1,20));
        },
        parse: function (rawData) {
            var report = [];
            rawReport = rawData.split('\n');
            for (var i=2; i<rawReport.length; i++)
            {
                var rawEntry =  rawReport[i].split('\t');
                if (rawEntry != undefined)
                if (rawEntry.length >= 7) {
                    var entry = new ReportEntry();
                    var MissingTotal = 0;
                    if (rawEntry.length == 8) {
                        entry.total = rawEntry[0];
                    }else{
                        MissingTotal = 1;
                    }
                    var credit = (rawEntry[2-MissingTotal]);
                    var debit = (rawEntry[3-MissingTotal]);
                    //rawEntry[1-MissingTotal]; //Value date - not used in our reports
                    entry.credit = textToFloat(credit);
                    entry.debit = textToFloat(debit);
                    entry.name = rawEntry[4-MissingTotal];
                    //rawEntry[5-MissingTotal]; //Reference - not used in our reports
                    //rawEntry[6-MissingTotal]; //Action type - not used in our reports
                    entry.date = rawEntry[7-MissingTotal];

                    entry.description = ""; //Bank report does not have detailed description

                    report.push(entry);
                }
            }
            return report;
        }
    };
}

function getText(html){
    return html.substring(html.lastIndexOf(">")+1);
}



if (typeof FRP.Parser.Isracard == 'undefined') {
    var isracardId = '<html xmlns:user="urn:user" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:x="urn:schemas-microsoft-com:office:excel" id="HTML_ID"><HEAD><META CONTENT="text/html" HTTP-EQUIV="Content-Type" charset="iso-8859-8"></META><META CONTENT="no-cache" HTTP-EQUIV="Pragma"></META><META CONTENT="0" HTTP-EQUIV="expires"></META></HEAD><BODY LINK="#0000A4" TEXT="#000000" ALINK="#0000A4" BGCOLOR="#fefefe" VLINK="#0000A4" dir="rtl">';
    FRP.Parser.Isracard = {
        id: isracardId  ,
        valid: function (rawData) {
            if (this.id.substring(1,this.id.length) == rawData.substring(1,this.id.length))
                {
                return  true;
            }
            else {
                return false;
            }

        },
        parse: function (rawData) {
            var report = [];
            var rawReport = rawData.split("</TR>");
            var firsttime = true;
            for (var i=4; i<rawReport.length; i++){
                var rawEntry = rawReport[i].split("</TD>");
                switch (rawEntry.length)
                {
                    case 7:
                        //Israeli transactions
                        var entry = new ReportEntry();
                        entry.date = getText(rawEntry[0]);
                        if (entry.date == "") break; //This line is just informative and will not help in out report.
                        entry.name = getText(rawEntry[1]);
                        // rawEntry[2]; //Total amount of the deal
                        var tempMoney = textToFloat(getText(rawEntry[3]));
                        entry.debit = tempMoney > 0 ? tempMoney : 0;
                        entry.credit = tempMoney < 0 ? (tempMoney*(-1)) : 0;
                        // rawEntry[4]; //Transaction id
                        entry.description = getText(rawEntry[5]);
                        report.push(entry);
                        break;
                    case 10:
                        //International Transactions
                        if (firsttime) { firsttime=false;  break;} //skip international deal headers
                        var entry = new ReportEntry();
                        entry.date = getText(rawEntry[0]);
                        if (entry.date == "") break; //This line is just informative and will not help in out report.
                        // rawEntry[1]; //Date of buying
                        entry.name = getText(rawEntry[2]);
                        // rawEntry[3]; //City code
                        // rawEntry[4]; //Original currency
                        var tempMoney = textToFloat(getText(rawEntry[5]));
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
    }
}
}).call(FRP);