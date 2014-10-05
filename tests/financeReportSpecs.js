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
    var isracardRawData =  '<html xmlns:user="urn:user" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:x="urn:schemas-microsoft-com:office:excel" id="HTML_ID"><HEAD><META CONTENT="text/html" HTTP-EQUIV="Content-Type" charset="iso-8859-8"></META><META CONTENT="no-cache" HTTP-EQUIV="Pragma"></META><META CONTENT="0" HTTP-EQUIV="expires"></META></HEAD><BODY LINK="#0000A4" TEXT="#000000" ALINK="#0000A4" BGCOLOR="#fefefe" VLINK="#0000A4" dir="rtl"><DIV><TABLE border="0" class="arial12NoBold" cellpadding="0" cellspacing="0" dir="ltr"><TR><table border="1" class="arial12NoBold" id="trBlueOnWhite12" dir="ltr"><TR bgcolor="#d7d7d7" align="right"><DIV dir="rtl"><TD NOWRAP="yes">עסקאות בארץ - לידיעה</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">תאריך רכישה</TD><TD NOWRAP="yes">שם בית עסק</TD><TD NOWRAP="yes">סכום עסקה</TD><TD NOWRAP="yes">סכום לחיוב</TD><TD NOWRAP="yes">מספר שובר</TD><TD NOWRAP="yes">פרוט נוסף</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">09/03/2014</TD><TD NOWRAP="yes">מועצה אזורית חוף הכר</TD><TD NOWRAP="yes">843.50</TD><TD NOWRAP="yes">843.50</TD><TD NOWRAP="yes">0014870</TD><TD NOWRAP="yes">קרדיט ב3-  תש של 283.87     ש"ח</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD><TD NOWRAP="yes">לידיעה בקרדיט:</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes">843.50</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes">בחודש זה - לידיעה בלבד.</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">16/03/2014</TD><TD NOWRAP="yes">משיכת מזומנים</TD><TD NOWRAP="yes">1,000.00</TD><TD NOWRAP="yes">1,000.00</TD><TD NOWRAP="yes">0124110</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD><TD NOWRAP="yes">@סך חיוב בש"ח:</TD><TD NOWRAP="yes">18/03/14</TD><TD NOWRAP="yes">1,000.00</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">19/03/2014</TD><TD NOWRAP="yes">משיכת מזומנים</TD><TD NOWRAP="yes">201.50</TD><TD NOWRAP="yes">201.50</TD><TD NOWRAP="yes">0591480</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD><TD NOWRAP="yes">@סך חיוב בש"ח:</TD><TD NOWRAP="yes">20/03/14</TD><TD NOWRAP="yes">201.50</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">20/03/2014</TD><TD NOWRAP="yes">משיכת מזומנים</TD><TD NOWRAP="yes">200.00</TD><TD NOWRAP="yes">200.00</TD><TD NOWRAP="yes">0124110</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD><TD NOWRAP="yes">@סך חיוב בש"ח:</TD><TD NOWRAP="yes">21/03/14</TD><TD NOWRAP="yes">200.00</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">26/01/2014</TD><TD NOWRAP="yes">ביתילי חיפה</TD><TD NOWRAP="yes">16,011.25</TD><TD NOWRAP="yes">1,601.13</TD><TD NOWRAP="yes">1001013</TD><TD NOWRAP="yes">תשלום 3  מתוך 10</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">26/01/2014</TD><TD NOWRAP="yes">עמלת תשלום נדחה</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">1001013</TD><TD NOWRAP="yes">תשלום 3  מתוך 10</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">04/02/2014</TD><TD NOWRAP="yes">פליים אלקטריק לייטני</TD><TD NOWRAP="yes">3,220.00</TD><TD NOWRAP="yes">1,610.00</TD><TD NOWRAP="yes">0001001</TD><TD NOWRAP="yes">תשלום 2  מתוך 2</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">04/02/2014</TD><TD NOWRAP="yes">עמלת תשלום נדחה</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">0001001</TD><TD NOWRAP="yes">תשלום 2  מתוך 2</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">27/02/2014</TD><TD NOWRAP="yes">פנתה מרקט כרם המהרל</TD><TD NOWRAP="yes">98.82</TD><TD NOWRAP="yes">98.82</TD><TD NOWRAP="yes">0001498</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">28/02/2014</TD><TD NOWRAP="yes">אניפט בע"מ</TD><TD NOWRAP="yes">79.00</TD><TD NOWRAP="yes">79.00</TD><TD NOWRAP="yes">0004014</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">01/03/2014</TD><TD NOWRAP="yes">החברה להגנת הטבע</TD><TD NOWRAP="yes">14.00</TD><TD NOWRAP="yes">14.00</TD><TD NOWRAP="yes">6001456</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">01/03/2014</TD><TD NOWRAP="yes">ברייה - מחסן עצים רע</TD><TD NOWRAP="yes">300.00</TD><TD NOWRAP="yes">300.00</TD><TD NOWRAP="yes">0001004</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">03/03/2014</TD><TD NOWRAP="yes">מנהרות הכרמל-הו"ק</TD><TD NOWRAP="yes">224.08</TD><TD NOWRAP="yes">224.08</TD><TD NOWRAP="yes">4783223</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">07/03/2014</TD><TD NOWRAP="yes">אלון צומת עופר</TD><TD NOWRAP="yes">250.06</TD><TD NOWRAP="yes">248.81</TD><TD NOWRAP="yes">2001027</TD><TD NOWRAP="yes">הנחה 1.25       ש"ח סטייל</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">07/03/2014</TD><TD NOWRAP="yes">גולד פירזול ג.ו</TD><TD NOWRAP="yes">984.00</TD><TD NOWRAP="yes">328.00</TD><TD NOWRAP="yes">0032003</TD><TD NOWRAP="yes">תשלום 1  מתוך 3</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">07/03/2014</TD><TD NOWRAP="yes">עמלת תשלום נדחה</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">0032003</TD><TD NOWRAP="yes">תשלום 1  מתוך 3</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">07/03/2014</TD><TD NOWRAP="yes">פנתה מרקט כרם המהרל</TD><TD NOWRAP="yes">48.85</TD><TD NOWRAP="yes">48.85</TD><TD NOWRAP="yes">0001615</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">08/03/2014</TD><TD NOWRAP="yes">סופר אלונית -אלון צ.</TD><TD NOWRAP="yes">94.30</TD><TD NOWRAP="yes">87.70</TD><TD NOWRAP="yes">1001107</TD><TD NOWRAP="yes">הנחה 6.60       ש"ח  הוט</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">09/03/2014</TD><TD NOWRAP="yes">תלמה נסיעות ותירות ב</TD><TD NOWRAP="yes">5,873.00</TD><TD NOWRAP="yes">1,957.66</TD><TD NOWRAP="yes">5001046</TD><TD NOWRAP="yes">תשלום 1  מתוך 3</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">09/03/2014</TD><TD NOWRAP="yes">עמלת תשלום נדחה</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">5001046</TD><TD NOWRAP="yes">תשלום 1  מתוך 3</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">09/03/2014</TD><TD NOWRAP="yes">אלומה תיירות בע"מ</TD><TD NOWRAP="yes">1,572.22</TD><TD NOWRAP="yes">492.64</TD><TD NOWRAP="yes">7001017</TD><TD NOWRAP="yes">תשלום 1  מתוך 3</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">09/03/2014</TD><TD NOWRAP="yes">עמלת תשלום נדחה</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">7001017</TD><TD NOWRAP="yes">תשלום 1  מתוך 3</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">09/03/2014</TD><TD NOWRAP="yes">דלק קמעונאות  בת שלמ</TD><TD NOWRAP="yes">294.84</TD><TD NOWRAP="yes">294.84</TD><TD NOWRAP="yes">5099645</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">10/03/2014</TD><TD NOWRAP="yes">הנחה דלק-הוט</TD><TD NOWRAP="yes">-2.35</TD><TD NOWRAP="yes">-2.35</TD><TD NOWRAP="yes">8001468</TD><TD NOWRAP="yes">זיכוי</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">10/03/2014</TD><TD NOWRAP="yes">זיכוי מועדון הוט</TD><TD NOWRAP="yes">-0.78</TD><TD NOWRAP="yes">-0.78</TD><TD NOWRAP="yes">7001549</TD><TD NOWRAP="yes">זיכוי</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">11/03/2014</TD><TD NOWRAP="yes">הוראות קבע חשמל חיפה</TD><TD NOWRAP="yes">59.79</TD><TD NOWRAP="yes">59.79</TD><TD NOWRAP="yes">5636949</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">11/03/2014</TD><TD NOWRAP="yes">בזק בינלאומי בע"מ</TD><TD NOWRAP="yes">29.89</TD><TD NOWRAP="yes">29.89</TD><TD NOWRAP="yes">1595398</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">12/03/2014</TD><TD NOWRAP="yes">L\TRAVILING 2 ISRAEL</TD><TD NOWRAP="yes">320.40</TD><TD NOWRAP="yes">304.38</TD><TD NOWRAP="yes">0021325</TD><TD NOWRAP="yes">הנחה 16.02      ש"ח סטייל</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">13/03/2014</TD><TD NOWRAP="yes">מקדונלדס אלונים</TD><TD NOWRAP="yes">52.40</TD><TD NOWRAP="yes">52.40</TD><TD NOWRAP="yes">4007077</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">13/03/2014</TD><TD NOWRAP="yes">קפה קפה</TD><TD NOWRAP="yes">62.00</TD><TD NOWRAP="yes">62.00</TD><TD NOWRAP="yes">4001043</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">14/03/2014</TD><TD NOWRAP="yes">ממסי תיירות</TD><TD NOWRAP="yes">41.00</TD><TD NOWRAP="yes">41.00</TD><TD NOWRAP="yes">2001002</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">15/03/2014</TD><TD NOWRAP="yes">הום סנטר זכרון יעקב</TD><TD NOWRAP="yes">87.20</TD><TD NOWRAP="yes">87.20</TD><TD NOWRAP="yes">3001745</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">15/03/2014</TD><TD NOWRAP="yes">אניפט בע"מ</TD><TD NOWRAP="yes">142.52</TD><TD NOWRAP="yes">142.52</TD><TD NOWRAP="yes">0004003</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">16/03/2014</TD><TD NOWRAP="yes">אלון עין הכרמל</TD><TD NOWRAP="yes">316.16</TD><TD NOWRAP="yes">314.58</TD><TD NOWRAP="yes">7001019</TD><TD NOWRAP="yes">הנחה 1.58       ש"ח סטייל</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">16/03/2014</TD><TD NOWRAP="yes">איקאה קריית אתא</TD><TD NOWRAP="yes">750.00</TD><TD NOWRAP="yes">750.00</TD><TD NOWRAP="yes">0002195</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">17/03/2014</TD><TD NOWRAP="yes">קוריצה בר</TD><TD NOWRAP="yes">98.00</TD><TD NOWRAP="yes">95.06</TD><TD NOWRAP="yes">0001037</TD><TD NOWRAP="yes">הנחה 2.94       ש"ח סטייל</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">17/03/2014</TD><TD NOWRAP="yes">אניפט בע"מ</TD><TD NOWRAP="yes">59.00</TD><TD NOWRAP="yes">59.00</TD><TD NOWRAP="yes">0004021</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">18/03/2014</TD><TD NOWRAP="yes">הום סנטרס שער הכרמל</TD><TD NOWRAP="yes">160.50</TD><TD NOWRAP="yes">160.50</TD><TD NOWRAP="yes">7003058</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">18/03/2014</TD><TD NOWRAP="yes">הום סנטר זכרון יעקב</TD><TD NOWRAP="yes">122.40</TD><TD NOWRAP="yes">122.40</TD><TD NOWRAP="yes">6002990</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">18/03/2014</TD><TD NOWRAP="yes">קוריצה בר</TD><TD NOWRAP="yes">98.00</TD><TD NOWRAP="yes">95.06</TD><TD NOWRAP="yes">0001022</TD><TD NOWRAP="yes">הנחה 2.94       ש"ח סטייל</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">19/03/2014</TD><TD NOWRAP="yes">הום סנטרס שער הכרמל</TD><TD NOWRAP="yes">397.20</TD><TD NOWRAP="yes">199.20</TD><TD NOWRAP="yes">8005886</TD><TD NOWRAP="yes">תשלום 1  מתוך 2</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">19/03/2014</TD><TD NOWRAP="yes">עמלת תשלום נדחה</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">0.50</TD><TD NOWRAP="yes">8005886</TD><TD NOWRAP="yes">תשלום 1  מתוך 2</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">19/03/2014</TD><TD NOWRAP="yes">אקווריום</TD><TD NOWRAP="yes">108.00</TD><TD NOWRAP="yes">108.00</TD><TD NOWRAP="yes">0001020</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">19/03/2014</TD><TD NOWRAP="yes">איכות קייטרינג שולץ</TD><TD NOWRAP="yes">16.70</TD><TD NOWRAP="yes">16.70</TD><TD NOWRAP="yes">2001136</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">20/03/2014</TD><TD NOWRAP="yes">HOT MOBILE</TD><TD NOWRAP="yes">99.79</TD><TD NOWRAP="yes">99.79</TD><TD NOWRAP="yes">3738837</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">20/03/2014</TD><TD NOWRAP="yes">אלון עין הכרמל</TD><TD NOWRAP="yes">314.75</TD><TD NOWRAP="yes">313.18</TD><TD NOWRAP="yes">3003027</TD><TD NOWRAP="yes">הנחה 1.57       ש"ח סטייל</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">20/03/2014</TD><TD NOWRAP="yes">טיפה קרמיקה</TD><TD NOWRAP="yes">315.00</TD><TD NOWRAP="yes">315.00</TD><TD NOWRAP="yes">0001003</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">21/03/2014</TD><TD NOWRAP="yes">טרקליני אח"מ</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes">0.00</TD><TD NOWRAP="yes">2001155</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">21/03/2014</TD><TD NOWRAP="yes">סטימצקי דיוטי פרי ספ</TD><TD NOWRAP="yes">52.54</TD><TD NOWRAP="yes">50.44</TD><TD NOWRAP="yes">4005840</TD><TD NOWRAP="yes">הנחה 2.10       ש"ח  הוט</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">25/03/2014</TD><TD NOWRAP="yes">HOT</TD><TD NOWRAP="yes">322.73</TD><TD NOWRAP="yes">322.73</TD><TD NOWRAP="yes">6543291</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">27/03/2014</TD><TD NOWRAP="yes">שרותי בריאות כללית</TD><TD NOWRAP="yes">113.91</TD><TD NOWRAP="yes">113.91</TD><TD NOWRAP="yes">2877387</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">28/03/2014</TD><TD NOWRAP="yes">כלל ביטוח חיים</TD><TD NOWRAP="yes">36.00</TD><TD NOWRAP="yes">36.00</TD><TD NOWRAP="yes">3074233</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">28/03/2014</TD><TD NOWRAP="yes">כלל ביטוח חיים</TD><TD NOWRAP="yes">49.00</TD><TD NOWRAP="yes">49.00</TD><TD NOWRAP="yes">3074234</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">28/03/2014</TD><TD NOWRAP="yes">פאנגו חניה סלולרית</TD><TD NOWRAP="yes">16.51</TD><TD NOWRAP="yes">16.51</TD><TD NOWRAP="yes">8810697</TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD><TD NOWRAP="yes">@סך חיוב בש"ח:</TD><TD NOWRAP="yes">02/04/14</TD><TD NOWRAP="yes">11,401.64</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD><TD NOWRAP="yes">עמלת חיוב נדחה</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes">3.00</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes">כולל מע"מ ל: 6    עסקות.</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">עסקאות בחו"ל</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">תאריך חיוב</TD><TD NOWRAP="yes">תאריך קניה</TD><TD NOWRAP="yes">שם בית עסק</TD><TD NOWRAP="yes">עיר</TD><TD NOWRAP="yes">מטבע מקורי</TD><TD NOWRAP="yes">סכום מקורי</TD><TD NOWRAP="yes">מטבע לחיוב</TD><TD NOWRAP="yes">סכום לחיוב</TD><TD NOWRAP="yes">מספר שובר</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">02/04/2014</TD><TD NOWRAP="yes">03/02/2014</TD><TD NOWRAP="yes">PAYPAL *GSPNQ\'</TD><TD NOWRAP="yes">4029357733</TD><TD NOWRAP="yes">NIS</TD><TD NOWRAP="yes">200.0</TD><TD NOWRAP="yes">NIS</TD><TD NOWRAP="yes">200.00</TD><TD NOWRAP="yes">0028393</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">02/04/2014</TD><TD NOWRAP="yes">20/02/2014</TD><TD NOWRAP="yes">PAYPAL *DEALEXTREME</TD><TD NOWRAP="yes">4029357733</TD><TD NOWRAP="yes">NIS</TD><TD NOWRAP="yes">61.71</TD><TD NOWRAP="yes">NIS</TD><TD NOWRAP="yes">61.71</TD><TD NOWRAP="yes">0020841</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes">02/04/2014</TD><TD NOWRAP="yes">19/03/2014</TD><TD NOWRAP="yes">PAYPAL *GSPNQ\'</TD><TD NOWRAP="yes">4029357733</TD><TD NOWRAP="yes">NIS</TD><TD NOWRAP="yes">-200.0</TD><TD NOWRAP="yes">NIS</TD><TD NOWRAP="yes">-200.00</TD><TD NOWRAP="yes">0033523</TD></DIV></TR><TR align="right"><DIV dir="rtl"><TD NOWRAP="yes"></TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes">TOTAL:5 מ/ש,DATE:</TD><TD NOWRAP="yes">02/04/2014</TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes"></TD><TD NOWRAP="yes">NIS</TD><TD NOWRAP="yes">61.71</TD><TD NOWRAP="yes">0001140</TD> </DIV></TR></TABLE></TR></TABLE></DIV></BODY></html>';
    var isracardRawData_BAD =  '<html xmlns:user="urn:user" xmlns:msxsl="u';
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

    //Isracard
    it("Check ISRACARD validate BAD rawdata",function(){
        var value = true;
        for(var index in FRP.Parser) {
            if (FRP.Parser.hasOwnProperty(index)) {
                if (index != 'Isracard')
                {
                    continue;
                }
                var attr = FRP.Parser[index];
                value = attr.valid(isracardRawData_BAD);
                break;
            }
        }
        expect(value).toEqual(false);
    });

    it("Check ISRACARD validate GOOD rawdata",function(){
        var value = true;
        for(var index in FRP.Parser) {
            if (FRP.Parser.hasOwnProperty(index)) {
                if (index != 'Isracard')
                {
                    continue;
                }
                var attr = FRP.Parser[index];
                value = attr.valid(isracardRawData);
                break;
            }
        }
        expect(value).toEqual(true);
    });

    it("Check ISRACARD Parsing",function(){
        var report = [];
        for(var index in FRP.Parser) {
            if (FRP.Parser.hasOwnProperty(index)) {
                if (index != 'Isracard')
                {
                    continue;
                }
                var attr = FRP.Parser[index];
                if (attr.valid(isracardRawData))
                {
                    report = attr.parse(isracardRawData);
                }
                break;
            }
        }
        expect(report.length).toEqual(57);
    });


}});