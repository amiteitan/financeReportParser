//Jasmin tests for the finance report parser
describe("TEST FINANCE REPORT PARSER",function(){
{
    it("Check that the function is running",function(){
        expect(FRP.test).toEqual("Test");
    });

    it("return report in the correct format",function(){

        expect(FRP.parse("DATA")).toEqual(undefined);
    });

    it("check if FRP contains parsers",function(){
        expect( Object.keys(FRP.Parser).length).toBeGreaterThan(0);
    });
    var otzarHaHaYalRawData_BAD = "";
    var otzarHaHaYalRawData = "יתרה   	  תאריך ערך  	 זכות 	 חובה 	 תאור 	אסמכתא 	 סוג פעולה  	 תאריך\n \
\n\
    20,411.31 	01/07/2014 	12,480.85 	 	רפאל מערכות 	0063862 	222 	01/07/2014\n\
    02/07/2014 	 	1,911.54 	ישראכרט 	0020543 	162 	02/07/2014\n\
    5,839.39 	02/07/2014 	 	12,660.38 	ישראכרט 	0020543 	162 	02/07/2014\n\
    16,779.39 	04/07/2014 	10,940.00 	 	משכורת 	0099411 	222 	04/07/2014\n\
    16,721.75 	06/07/2014 	 	57.64 	מכבי 	0025300 	162 	06/07/2014\n\
    15,239.75 	10/07/2014 	 	1,482.00 	כ.א.ל-נ.קופל 	0042321 	162 	10/07/2014\n\
    01/08/2014 	 	3,872.43 	בינלאומי-משכנתא 	0000716 	162 	01/08/2014\n\
    29,184.85 	01/08/2014 	17,817.53 	 	רפאל מערכות 	0063862 	222 	01/08/2014\n\
    03/08/2014 	 	2,542.82 	ישראכרט 	0020543 	162 	03/08/2014\n\
    03/08/2014 	 	10,627.82 	ישראכרט 	0020543 	162 	03/08/2014\n\
    13,014.21 	03/08/2014 	 	3,000.00 	העברות באינטרנט 	0099400 	272 	03/08/2014\n\
    12,956.45 	06/08/2014 	 	57.76 	מכבי 	0025300 	162 	06/08/2014\n\
    08/08/2014 	 	250.00 	427548 משיכת שיק 	0427548 	162 	08/08/2014\n\
    22,832.45 	08/08/2014 	10,126.00 	 	משכורת 	0099411 	222 	08/08/2014\n\
    21,350.45 	10/08/2014 	 	1,482.00 	כ.א.ל-נ.קופל 	0042321 	162 	10/08/2014\n\
    20,850.45 	19/08/2014 	 	500.00 	427549 משיכת שיק 	0427549 	162 	19/08/2014\n\
    01/09/2014 	 	3,863.78 	בינלאומי-משכנתא 	0000716 	162 	01/09/2014\n\
    29,398.21 	01/09/2014 	12,411.54 	 	רפאל מערכות 	0063862 	222 	01/09/2014\n\
    02/09/2014 	 	2,557.05 	ישראכרט 	0020543 	162 	02/09/2014\n\
    18,673.17 	02/09/2014 	 	8,167.99 	ישראכרט 	0020543 	162 	02/09/2014\n\
    18,615.37 	05/09/2014 	 	57.80 	מכבי 	0025300 	162 	05/09/2014\n\
    29,875.37 	07/09/2014 	11,260.00 	 	משכורת 	0099411 	222 	07/09/2014\n\
    28,391.92 	10/09/2014 	 	1,483.45 	כ.א.ל-נ.קופל 	0042321 	162 	10/09/2014\n\
    28,190.42 	15/09/2014 	 	201.50 	ישראכרט 	0020543 	162 	15/09/2014\n\
    27,190.42 	17/09/2014 	 	1,000.00 	העברות באינטרנט 	0099400 	272 	17/09/2014\n\
    01/10/2014 	 	3,857.00 	בינלאומי-משכנתא 	0000716 	162 	01/10/2014\n\
    01/10/2014 	 	7.14 	ישראכרט 	0020543 	162 	01/10/2014\n\
    35,645.70 	01/10/2014 	12,319.42 	 	רפאל מערכות 	0063862 	222 	01/10/2014\n\
    02/10/2014 	 	2,817.75 	ישראכרט 	0020543 	162 	02/10/2014\n\
    20,572.38 	02/10/2014 	 	12,255.57 	ישראכרט 	0020543 	162 	02/10/2014\n\
    ";

    it("Check otzar haayal validate BAD rawdata",function(){
        var value = true;
        for(var index in FRP.Parser) {
            if (FRP.Parser.hasOwnProperty(index)) {
                if (index != 'OtzahrHahayal')
                {
                    continue;
                }
                var attr = FRP.Parser[index];
                value = attr.valid(otzarHaHaYalRawData_BAD);
                break;
            }
        }
        expect(value).toEqual(false);
    });

    it("Check otzar haayal validate GOOD rawdata",function(){
        var value = true;
        for(var index in FRP.Parser) {
            if (FRP.Parser.hasOwnProperty(index)) {
                if (index != 'OtzahrHahayal')
                {
                    continue;
                }
                var attr = FRP.Parser[index];
                value = attr.valid(otzarHaHaYalRawData);
                break;
            }
        }
        expect(value).toEqual(true);
    });

    it("Check otzar haayal Parsing",function(){
        var report = [];
        for(var index in FRP.Parser) {
            if (FRP.Parser.hasOwnProperty(index)) {
                if (index != 'OtzahrHahayal')
                {
                    continue;
                }
                var attr = FRP.Parser[index];
                if (attr.valid(otzarHaHaYalRawData))
                {
                    report = attr.parse(otzarHaHaYalRawData);
                }
                break;
            }
        }
        expect(report.length).toEqual(30);
    });
}});