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

                    //rawEntry[1-MissingTotal]; //Value date - not used in our reports
                    entry.credit = rawEntry[2-MissingTotal];
                    entry.debit = rawEntry[3-MissingTotal];
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

if (typeof FRP.Parser.Isracard == 'undefined') {
    FRP.Parser.Isracard = {
        id: "",
        valid: function (rawData) {
            return  false;

        },
        parse: function (rawData) {
            return "Parsed_By_Card";
        }
    }
}
}).call(FRP);