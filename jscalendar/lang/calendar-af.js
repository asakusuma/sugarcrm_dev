/*

Modification information for LGPL compliance

r58364 - 2010-09-29 22:39:05 -0700 (Wed, 29 Sep 2010) - kjing - Author: Stanislav Malyshev <smalyshev@gmail.com>
    Fix languages in JS calendar

r56990 - 2010-06-16 13:05:36 -0700 (Wed, 16 Jun 2010) - kjing - snapshot "Mango" svn branch to a new one for GitHub sync

r56989 - 2010-06-16 13:01:33 -0700 (Wed, 16 Jun 2010) - kjing - defunt "Mango" svn dev branch before github cutover

r55980 - 2010-04-19 13:31:28 -0700 (Mon, 19 Apr 2010) - kjing - create Mango (6.1) based on windex

r51719 - 2009-10-22 10:18:00 -0700 (Thu, 22 Oct 2009) - mitani - Converted to Build 3  tags and updated the build system 

r51634 - 2009-10-19 13:32:22 -0700 (Mon, 19 Oct 2009) - mitani - Windex is the branch for Sugar Sales 1.0 development

r50375 - 2009-08-24 18:07:43 -0700 (Mon, 24 Aug 2009) - dwong - branch kobe2 from tokyo r50372

r42807 - 2008-12-29 11:16:59 -0800 (Mon, 29 Dec 2008) - dwong - Branch from trunk/sugarcrm r42806 to branches/tokyo/sugarcrm

r550 - 2004-09-03 15:39:17 -0700 (Fri, 03 Sep 2004) - jostrow - Calendar feature


*/

// ** I18N Afrikaans
Calendar._DN = new Array
("Sondag",
 "Maandag",
 "Dinsdag",
 "Woensdag",
 "Donderdag",
 "Vrydag",
 "Saterdag",
 "Sondag");
Calendar._MN = new Array
("Januarie",
 "Februarie",
 "Maart",
 "April",
 "Mei",
 "Junie",
 "Julie",
 "Augustus",
 "September",
 "Oktober",
 "November",
 "Desember");

// tooltips
if(Calendar._TT == undefined) Calendar._TT = {};
Calendar._TT["TOGGLE"] = "Verander eerste dag van die week";
Calendar._TT["PREV_YEAR"] = "Vorige jaar (hou vir keuselys)";
Calendar._TT["PREV_MONTH"] = "Vorige maand (hou vir keuselys)";
Calendar._TT["GO_TODAY"] = "Gaan na vandag";
Calendar._TT["NEXT_MONTH"] = "Volgende maand (hou vir keuselys)";
Calendar._TT["NEXT_YEAR"] = "Volgende jaar (hou vir keuselys)";
Calendar._TT["SEL_DATE"] = "Kies datum";
Calendar._TT["DRAG_TO_MOVE"] = "Sleep om te skuif";
Calendar._TT["PART_TODAY"] = " (vandag)";
Calendar._TT["MON_FIRST"] = "Vertoon Maandag eerste";
Calendar._TT["SUN_FIRST"] = "Display Sunday first";
Calendar._TT["CLOSE"] = "Close";
Calendar._TT["TODAY"] = "Today";
