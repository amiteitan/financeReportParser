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


    };

}).call(FRP);


//Two types of parsers Banks export files and Credit card companies exprot files
if (typeof FRP.Bank == 'undefined')
    FRP.Parser = {};


if (typeof FRP.Parser.OtzahrHahayal == 'undefined')
    FRP.Parser.OtzahrHahayal = {};

FRP.Parser.OtzahrHahayal = {
    valid : function(rawData) {
        return true;
    },
    parse : function(rawData) {
        return "Parsed_By_Bank";
    }
}

if (typeof FRP.Parser.Isracard == 'undefined') {
    FRP.Parser.Isracard = {
        valid: function (rawData) {
            return true;
        },
        parse: function (rawData) {
            return "Parsed_By_Card";
        }
    }
}