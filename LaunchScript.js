	var cname = new Array('Antares','Atlas V','Delta II','Delta IV','Falcon 9','Minotaur','Minotaur-C','Pegasus','Long March 2-4','Long March 5-7','Ariane 5','Vega','PSLV','GSLV','Safir','H-IIA','Unha','Angara','Dnepr','Proton','Soyuz','Start','Naro-1','Zenit');
	var cflag = new Array('USA','USA','USA','USA','USA','USA','USA','USA','China','China','Europe','Europe','India','India','Iran','Japan','N. Korea','Russia','Russia','Russia','Russia','Russia','S. Korea','Ukraine');
	var cval = new Array('206','101','102','103','208','105','108','106','109','212','110','207','111','121','119','112','211','204','113','115','116','117','120','118');
	var pname = new Array('Falcon Heavy','SLS','Vulcan','VLS');
	var pflag = new Array('USA','USA','USA','Brazil');
	var pval = new Array('209','210','213','205');
	var hname = new Array('Athena','Atlas I/II','Atlas III','Falcon 1','Saturn I','Saturn V','Shuttle','Titan II','Titan III','Titan IV','Ariane 4','Energia','Kosmos','Cyclone');
	var hflag = new Array('USA','USA','USA','USA','USA','USA','USA','USA','USA','USA','Europe','Russia','Russia','Ukraine');
	var hval = new Array('301','302','303','104','309','310','107','304','305','306','307','311','114','308');
	var sname = new Array('Cape Canaveral','Kodiak','Vandenberg AFB','Wallops','Kwajalein','Woomera','Alcantara','Jiuquan','Taiyuan','Xichang','Wenchang','Kourou','Satish Dhawan','Semnan','Sohae','Tanegashima','Baikonur','Kapustin Yar','Plesetsk','Svobodny','Naro','Sea Launch');
	var sflag = new Array('USA','USA','USA','USA','USA/Marshalls','Australia','Brazil','China','China','China','China','French Guyana','India','Iran','North Korea','Japan','Russia/Khazakstan','Russia','Russia','Russia','South Korea','Offshore');
	var sval = new Array('001','002','003','004','005','006','018','007','008','009','022','010','011','019','020','012','013','015','014','016','021','017');
	var iswitch = new Array();
	var jswitch = new Array();
	var kswitch = new Array();
	var lswitch = new Array();
	var sswitch = new Array();
	var alldivs = document.getElementsByTagName("div");     
	var allpara = document.getElementsByTagName("p");     
	var allmens = document.getElementsByTagName("select");
	var allinp = document.getElementsByTagName("input");
	var lastf = 0;
	var lasti = 0;
	function start()
		{
		document.getElementById('claunch').style.display="none";
		document.getElementById('plaunch').style.display="none";
		document.getElementById('hlaunch').style.display="none";
		document.getElementById('ulaunch').style.display="none";
		document.getElementById('csite').style.display="none";
		document.getElementById('fsite').style.display="none";
		document.getElementById('usite').style.display="none";
		document.getElementById('udResidual').style.display="none";  
		if (document.getElementById('LVclass1').checked==true) LVCswitch('claunch','clf',0);
		if (document.getElementById('LVclass2').checked==true) LVCswitch('plaunch','plf',0);
		if (document.getElementById('LVclass3').checked==true) LVCswitch('hlaunch','hlf',0);
		if (document.getElementById('LVclass4').checked==true) LVCswitch('ulaunch','udl',0);
		if (document.getElementById('LSclass1').checked==true) LSswitch('fsite','fsl');
		if (document.getElementById('LSclass2').checked==true) LSswitch('csite','csl');
		if (document.getElementById('LSclass3').checked==true) LSswitch('usite','usl');
		if (document.getElementById('isEscape0').checked==true) orbiton();
		if (document.getElementById('isEscape1').checked==true) escapeon();
		if (document.getElementById('udStages3').checked==true) USswitch(3);
		if (document.getElementById('udStages2').checked==true) USswitch(2);
		if (document.getElementById('udStages1').checked==true) USswitch(1);
		if (document.getElementById('udSRBon1').checked==true) UBswitch(1);
		else UBswitch(2);
		DRESswitch(1);
		for (var cv=0; cv<alldivs.length; cv++) if (alldivs[cv].className.slice(1,7)=='config') alldivs[cv].style.display="none";
		for (cv=0; cv<allmens.length; cv++) if (allmens[cv].className.slice(1,7)=='config') allmens[cv].style.display="none";
		for (cv=0; cv<allinp.length; cv++) if (allinp[cv].className.slice(1,7)=='config') allinp[cv].style.display="none";

// 		iconfig switching parameters: family, iconfig on, 2burn switch, GCS switch, iconfig label, # ivals, ival name array
// 		jklconfig switching parameters: family, i start, i stop, jklconfig label, #jklvals, jklval name array 
// 		lconfig switching parameters: family, i start, i stop, kconfig label, #kvals, kval name array
		lswitch[0]=new Array(0,0,0,'',0,'');
		var ix=0; iswitch[ix]=new Array('000',0,0,0,'',0,'');
		var jx=0; jswitch[jx]=new Array(0,0,0,'',0,''); 
		var kx=0; kswitch[kx]=new Array(0,0,0,'',0,'');
		var lx=0; lswitch[lx]=new Array(0,0,0,'',0,'');
		var sx=0; sswitch[sx]=new Array('000',0,'');
// Atlas V
		ix++; iswitch[ix]=new Array('101',1,3,1,'labeli5',3,'400 series','500 series','Atlas V Heavy');
		jx++; jswitch[jx]=new Array(101,1,1,'labelj6',8,'Atlas 401','Atlas 411','Atlas 421','Atlas 431','Atlas 402','Atlas 412','Atlas 422','Atlas 432');
		jx++; jswitch[jx]=new Array(101,2,2,'labelj6',12,'Atlas 501','Atlas 511','Atlas 521','Atlas 531','Atlas 541','Atlas 551','Atlas 502','Atlas 512','Atlas 522','Atlas 532','Atlas 542','Atlas 552');
		jx++; jswitch[jx]=new Array(101,3,3,'labelj1',2,'Single-Engine Centaur','Double-Engine Centaur');
		kx++; kswitch[kx]=new Array(101,1,1,'labelk4',2,'LPF','EPF');
		kx++; kswitch[kx]=new Array(101,2,2,'labelk4',2,'5-meter short','5-meter medium');
		kx++; kswitch[kx]=new Array(101,3,3,'labelk1',3,'5-meter short','5-meter medium','5-meter long');
		sx++; sswitch[sx]=new Array('101',2,'001','003');
// Delta II
		ix++; iswitch[ix]=new Array('102',1,3,0,'labeli5',2,'6000 series','7000 series');
		jx++; jswitch[jx]=new Array('102',1,1,'labelj6',9,'Delta 6320','Delta 6325','Delta 6326','Delta 6420','Delta 6425','Delta 6426' ,'Delta 6920','Delta 6925','Delta 6926');
		jx++; jswitch[jx]=new Array('102',2,2,'labelj6',12,'Delta 7320','Delta 7325','Delta 7326','Delta 7420','Delta 7425','Delta 7426' ,'Delta 7920','Delta 7925','Delta 7926' ,'Delta 7920H','Delta 7925H','Delta 7926H');
		kx++; kswitch[kx]=new Array(102,1,1,'labelk4',3,'8-foot','9.5-foot','10-foot');
		kx++; kswitch[kx]=new Array(102,2,2,'labelk4',3,'9.5-foot','10-foot','10-ft long');
		sx++; sswitch[sx]=new Array('102',2,'001','003');
// Delta IV
		ix++; iswitch[ix]=new Array('103',1,3,1,'labeli1',5,'Delta IV Medium','Delta IV M+(4,2)','Delta IV M+(5,2)','Delta IV M+(5,4)','Delta IV Heavy');
		jx++; jswitch[jx]=new Array(103,3,4,'labelj2',2,'5-meter short','5-meter long');
		jx++; jswitch[jx]=new Array(103,5,5,'labelj2',3,'5-meter short','5-meter long','5-meter metallic');
		sx++; sswitch[sx]=new Array('103',2,'001','003');
// Falcon 1
		ix++; iswitch[ix]=new Array('104',1,3,0,'labeli1',2,'Falcon 1','Falcon 1e');
		sx++; sswitch[sx]=new Array('104',3,'005','003','001');
// Minotaur
		ix++; iswitch[ix]=new Array('105',1,2,0,'labeli1',3,'Minotaur I','Minotaur IV','Minotaur V');
		jx++; jswitch[jx]=new Array(105,1,1,'labelj2',2,'OSP Standard','AFRL 59-inch');
		jx++; jswitch[jx]=new Array(105,2,2,'labelj3',2,'None','HAPS');
		jx++; jswitch[jx]=new Array(105,3,3,'labelj1',2,'Star 37FMV (3-axis)','Star 37FM (spin)');
		sx++; sswitch[sx]=new Array('105',4,'003','001','002','004');
// Pegasus
		ix++; iswitch[ix]=new Array('106',1,3,0,'labeli1',2,'Pegasus','Pegasus XL');
		jx++; jswitch[jx]=new Array(106,1,2,'labelj3',2,'None','HAPS');
		sx++; sswitch[sx]=new Array('106',4,'003','001','004','005');
// Shuttle
		ix++; iswitch[ix]=new Array('107',1,3,0,'labeli2',5,'Challenger (lost)','Columbia (lost)','Discovery','Atlantis','Endeavour');
		jx++; jswitch[jx]=new Array(107,1,1,'labelj4',1,'SRB');
		jx++; jswitch[jx]=new Array(107,2,4,'labelj4',2,'SRB','RSRM');
		jx++; jswitch[jx]=new Array(107,5,5,'labelj4',1,'RSRM');
		kx++; kswitch[kx]=new Array(107,1,1,'labelk2',2,'Standard','Lightweight');
		kx++; kswitch[kx]=new Array(107,2,2,'labelk2',3,'Standard','Lightweight','Super Lightweight');
		kx++; kswitch[kx]=new Array(107,3,5,'labelk2',2,'Lightweight','Super Lightweight');
		sx++; sswitch[sx]=new Array('107',2,'001','003');
// Minotaur-C, Formerly Taurus
		ix++; iswitch[ix]=new Array('108',1,2,0,'labeli1',14,'Minotaur-C 1110','Minotaur-C 1113','Minotaur-C 2110','Minotaur-C 2120','Minotaur-C 2113','Minotaur-C 2210','Minotaur-C 2220','Minotaur-C 2213','Minotaur-C 3110','Minotaur-C 3120','Minotaur-C 3113','Minotaur-C 3210','Minotaur-C 3220','Minotaur-C 3213');
		sx++; sswitch[sx]=new Array('108',4,'001','002','003','004');
// Long March 2-4
		ix++; iswitch[ix]=new Array('109',1,3,1,'labeli1',8,'Long March LM-2C','Long March LM-2E','Long March LM-2F','Long March LM-3','Long March LM-3A','Long March LM-3B','Long March LM-3C','Long March LM-4B');
		jx++; jswitch[jx]=new Array(109,1,1,'labelj1',2,'None','CTS');
		jx++; jswitch[jx]=new Array(109,2,2,'labelj1',3,'None','ETS','EPKM');
		sx++; sswitch[sx]=new Array('109',3,'009','007','008');
// Ariane 5
		ix++; iswitch[ix]=new Array('110',1,3,1,'labeli1',4,'Ariane 5 G','Ariane 5 ES','Ariane 5 ECA','Ariane 5 ME');
		jx++; jswitch[jx]=new Array(110,1,4,'labelj2',3,'5.4-meter short','5.4-meter medium','5.4-meter long');
		sx++; sswitch[sx]=new Array('110',1,'010');
// PSLV
		ix++; iswitch[ix]=new Array('111',1,3,0,'labeli11',4,'0','2','4','6');
		sx++; sswitch[sx]=new Array('111',1,'011');
// GSLV
		ix++; iswitch[ix]=new Array('121',1,3,0,'labeli5',3,'Mark I','Mark II','Mark III');
		sx++; sswitch[sx]=new Array('121',1,'011');
// H-IIA
		ix++; iswitch[ix]=new Array('112',1,3,0,'labeli1',4,'H-IIA 202','H-IIA 2022','H-IIA 2024','H-IIA 204');
		jx++; jswitch[jx]=new Array(112,1,4,'labelj2',3,'4-meter short','5-meter short','5/4-meter dual');
		sx++; sswitch[sx]=new Array('112',1,'012');
// Dnepr
		ix++; iswitch[ix]=new Array('113',0,1,0,'labeli1',0,'');
		sx++; sswitch[sx]=new Array('113',1,'013');
// Kosmos
		ix++; iswitch[ix]=new Array('114',1,2,0,'labeli1',1,'Kosmos 3M');
		sx++; sswitch[sx]=new Array('114',2,'014','015');
// Proton   
		ix++; iswitch[ix]=new Array('115',1,3,0,'labeli1',2,'Proton K','Proton M');
		jx++; jswitch[jx]=new Array(115,1,1,'labelj1',3,'None','Block DM','Breeze M');
		jx++; jswitch[jx]=new Array(115,2,2,'labelj1',3,'None','Breeze M','KVRB');
		kx++; kswitch[kx]=new Array(115,1,2,'labelk1',4,'Commercial 4.35x11.6m','Commercial 4.35x13.3m','Commercial 4.35x15.2m','Government 4.4x15.6m');
		sx++; sswitch[sx]=new Array('115',1,'013');
// Soyuz
		ix++; iswitch[ix]=new Array('116',1,3,0,'labeli1',6,'Molniya','Soyuz U','Soyuz FG','Soyuz 2-1A','Soyuz 2-1B','Soyuz 2-1v');
		jx++; jswitch[jx]=new Array(116,2,2,'labelj1',3,'None','Ikar','Fregat');
		jx++; jswitch[jx]=new Array(116,3,5,'labelj1',2,'None','Fregat');
		jx++; jswitch[jx]=new Array(116,6,6,'labelj10',2,'NK-33','RD-193');
		kx++; kswitch[kx]=new Array(116,2,3,'labelk1',4,'Soyuz LES','Progress','3.3-m Kosmos','Type S');
		kx++; kswitch[kx]=new Array(116,4,5,'labelk1',5,'Soyuz LES','Progress','3.3-m Kosmos','Type S','Type ST');
		kx++; kswitch[kx]=new Array(116,6,6,'labelk6',2,'None','Volga');
		sx++; sswitch[sx]=new Array('116',3,'013','014','010');
// Start
		ix++; iswitch[ix]=new Array('117',1,1,0,'labeli1',1,'Start-1');
		jx++; jswitch[jx]=new Array(117,0,1,'labelj3',2,'None','SS-25 Post-Boost');
		sx++; sswitch[sx]=new Array('117',2,'016','014');
// Zenit
		ix++; iswitch[ix]=new Array('118',1,3,1,'labeli1',4,'Zenit 2','Zenit 2SLB','Zenit 3SL','Zenit 3SLB');
		jx++; jswitch[jx]=new Array(118,1,1,'labelj2',2,'3.9-meter short','3.9-meter long');
		jx++; jswitch[jx]=new Array(118,2,2,'labelj1',2,'None','Fregat');
		kx++; kswitch[kx]=new Array(118,2,2,'labelk1',2,'3.9-meter short','3.9-meter long');
		sx++; sswitch[sx]=new Array('118',2,'013','017');
// Ares I, now unlisted
		ix++; iswitch[ix]=new Array('201',1,3,0,'labeli3',2,'Capsule w/LAS','Cargo Fairing');
		sx++; sswitch[sx]=new Array('201',1,'001');
// Ares V, now unlisted
		ix++; iswitch[ix]=new Array('202',1,3,1,'labeli4',2,'Original (5xRS-68)','Stretch (6xRS-68)');
		jx++; jswitch[jx]=new Array(202,1,2,'labelj4',2,'5-segment SRB','5.5-segment SRB');
		kx++; kswitch[kx]=new Array(202,1,2,'labelk3',2,'None','Standard');
		sx++; sswitch[sx]=new Array('202',1,'001','002');
// K-1, now unlisted
		ix++; iswitch[ix]=new Array('203',1,3,0,'labeli6',3,'Standard','Extended','ISS Cargo');
		sx++; sswitch[sx]=new Array('203',1,'006');
// Angara
		ix++; iswitch[ix]=new Array('204',1,3,0,'labeli1',4,'Angara 1.1','Angara 1.2','Angara A3','Angara A5');
		jx++; jswitch[jx]=new Array(204,3,3,'labelj1',2,'None','Breeze-M');
		jx++; jswitch[jx]=new Array(204,4,4,'labelj1',3,'None','Breeze-M','KVRB');
		kx++; kswitch[kx]=new Array(204,3,3,'labelk1',2,'4.35-meter short','4.35-meter long');
		kx++; kswitch[kx]=new Array(204,4,4,'labelk1',2,'4.35-meter','5.1-meter');
		sx++; sswitch[sx]=new Array('204',1,'014');
// Athena
		ix++; iswitch[ix]=new Array('301',1,3,0,'labeli1',4,'Athena I','Athena Ic','Athena II','Athena IIc');
		jx++; jswitch[jx]=new Array(301,3,4,'labelj1',2,'None','Star-37');
		sx++; sswitch[sx]=new Array('301',2,'001','002');
// Atlas I-II
		ix++; iswitch[ix]=new Array('302',1,3,0,'labeli1',4,'Atlas I','Atlas II','Atlas IIA','Atlas IIAS');
		jx++; jswitch[jx]=new Array(302,1,4,'labelj2',3,'MPF','LPF','EPF');
		sx++; sswitch[sx]=new Array('302',2,'001','003');
// Atlas III
		ix++; iswitch[ix]=new Array('303',1,3,0,'labeli1',2,'Atlas IIIA','Atlas IIIB');
		jx++; jswitch[jx]=new Array(303,1,1,'labelj2',2,'LPF','EPF');
		jx++; jswitch[jx]=new Array(303,2,2,'labelj1',2,'Single-Engine Centaur','Double-Engine Centaur');
		kx++; kswitch[kx]=new Array(303,2,2,'labelk1',2,'LPF','EPF');
		sx++; sswitch[sx]=new Array('303',2,'001','003');
// Titan II
		ix++; iswitch[ix]=new Array('304',1,1,0,'labeli7',4,'25-foot','30-foot','35-foot','Gemini Spacecraft');
		sx++; sswitch[sx]=new Array('304',2,'001','003');
// Titan III
		ix++; iswitch[ix]=new Array('305',1,3,0,'labeli1',10,'Titan IIIA','Titan IIIB','Titan IIIC','Titan IIID','Titan IIIE','Titan 23C','Titan 33B','Titan 34B','Titan 34D','Commercial Titan');
		jx++; jswitch[jx]=new Array(305,9,9,'labelj1',4,'None','Transtage','TOS','IUS');
		jx++; jswitch[jx]=new Array(305,10,10,'labelj1',5,'None','PAM D-II','Transtage','TOS','IUS');
		sx++; sswitch[sx]=new Array('305',2,'001','003');
// Titan IV
		ix++; iswitch[ix]=new Array('306',1,3,0,'labeli1',2,'Titan IV','Titan IVB');
		jx++; jswitch[jx]=new Array(306,1,2,'labelj1',3,'None','IUS','Centaur');
		kx++; kswitch[kx]=new Array(306,1,2,'labelk1',4,'56-foot','66-foot','76-foot','86-foot');
		sx++; sswitch[sx]=new Array('306',2,'001','003');
// Ariane 4
		ix++; iswitch[ix]=new Array('307',1,1,0,'labeli1',6,'Ariane AR40','Ariane AR42P','Ariane AR44P','Ariane AR42L','Ariane AR44LP','Ariane AR44L');
		jx++; jswitch[jx]=new Array(307,1,6,'labelj1',3,'H10','H10+','H10-3');
		kx++; kswitch[kx]=new Array(307,1,6,'labelk1',3,'Short','Long','Extra Long');
		lx++; lswitch[lx]=new Array(307,1,6,'labell1',4,'None','Sylda','Mini-Spelda','Spelda');
		sx++; sswitch[sx]=new Array('307',1,'010');
// VLS
		ix++; iswitch[ix]=new Array('205',1,1,0,'labeli1',2,'VLS-1','VLM');
		sx++; sswitch[sx]=new Array('205',1,'018');
// Antares, formerly Taurus II
		ix++; iswitch[ix]=new Array('206',1,3,0,'labeli9',2,'NK-33','RD-181');
		jx++; jswitch[jx]=new Array(206,1,1,'labelj6',7,'110','120','121','122','130','131','132');		
		jx++; jswitch[jx]=new Array(206,2,2,'labelj6',7,'210','220','221','222','230','231','232');	
		sx++; sswitch[sx]=new Array('206',4,'001','002','003','004');
// Vega	
		ix++; iswitch[ix]=new Array('207',0,3,0,'labeli1',1,'Vega');
		sx++; sswitch[sx]=new Array('207',1,'010');
// Falcon 9
		ix++; iswitch[ix]=new Array('208',1,3,1,'labeli1',3,'Falcon 9 Block I','Falcon 9 v1.1','Falcon 9 v1.2');
		jx++; jswitch[jx]=new Array(208,1,1,'labelj8',1,'None');		
		jx++; jswitch[jx]=new Array(208,2,3,'labelj8',3,'None','Ocean Recovery','Launch Site');		
		kx++; kswitch[kx]=new Array(208,1,3,'labelk6',2,'Standard','Delta-V Mission Kit');
		lx++; lswitch[lx]=new Array(208,1,3,'labell3',3,'Standard','Long','Dragon');
		sx++; sswitch[sx]=new Array('208',3,'001','003','005');
// Falcon Heavy
		ix++; iswitch[ix]=new Array('209',1,3,1,'labeli10',2,'No','Yes');
		jx++; jswitch[jx]=new Array(209,1,2,'labelj11',6,'Fully expendable','Ocean (boosters only)','Ocean (boosters + core)','Land (boosters only)','Booster land + Core ocean','Land (boosters+core)');
		kx++; kswitch[kx]=new Array(209,1,2,'labelk6',2,'Standard','Delta-V Mission Kit');
		lx++; lswitch[lx]=new Array(209,1,2,'labell3',2,'Short','Long');
		sx++; sswitch[sx]=new Array('209',2,'001','003');
// Cyclone
		ix++; iswitch[ix]=new Array('308',1,3,0,'labeli1',4,'Cyclone 2','Cyclone 2K','Cyclone 3','Cyclone 4')
		sx++; sswitch[sx]=new Array('308',3,'013','014','018');
// Senate Launch System
		ix++; iswitch[ix]=new Array('210',1,3,0,'labeli1',3,'Block 1','Block 1A','Block 2');
		jx++; jswitch[jx]=new Array(210,1,1,'labelj1',2,'None','iCPS');
		jx++; jswitch[jx]=new Array(210,2,2,'labelj1',3,'None','iCPS','LUS');
		jx++; jswitch[jx]=new Array(210,3,3,'labelj1',1,'EDS');
		kx++; kswitch[kx]=new Array(210,1,1,'labelk5',1,'FSB');
		kx++; kswitch[kx]=new Array(210,2,3,'labelk5',2,'ASB','LHB');
		lx++; lswitch[lx]=new Array(210,1,3,'labell3',3,'Capsule w/LAS','27-meter Cargo','40-meter Cargo');
		sx++; sswitch[sx]=new Array('210',1,'001');
// Uhna-3
		ix++; iswitch[ix]=new Array('211',0,1,0,'labeli1',1,'Uhna-3');
		sx++; sswitch[sx]=new Array('211',1,'020');
// Safir
		ix++; iswitch[ix]=new Array('119',1,1,0,'labeli1',3,'Safir','Safir B','Safir Block II');
		sx++; sswitch[sx]=new Array('119',1,'019');
// Naro-1, formerly KSLV
		ix++; iswitch[ix]=new Array('120',0,2,0,'labeli1',1,'Naro-1');
		sx++; sswitch[sx]=new Array('120',1,'021');
// Saturn I
		ix++; iswitch[ix]=new Array('309',1,3,0,'labeli1','2','S-I','S-IB');
		jx++; jswitch[jx]=new Array(309,1,1,'labelj9',1,'None');
		jx++; jswitch[jx]=new Array(309,2,2,'labelj9',2,'None','Centaur');
		kx++; kswitch[kx]=new Array(309,1,1,'labelk1',2,'Apollo LES','Payload Shroud');
		kx++; kswitch[kx]=new Array(309,2,2,'labelk1',2,'Apollo LES','Payload Shroud');
		sx++; sswitch[sx]=new Array('309',1,'001');
// Saturn V
		ix++; iswitch[ix]=new Array('310',1,3,0,'labeli8','2','None','S-IVB');
		jx++; jswitch[jx]=new Array(310,1,1,'labelj2',1,'Skylab Fairing');
		jx++; jswitch[jx]=new Array(310,2,2,'labelj2',2,'Apollo LES','Payload Shroud');
		sx++; sswitch[sx]=new Array('310',1,'001');
// Energia
		ix++; iswitch[ix]=new Array('311',1,3,0,'labeli3','3','Buran Orbiter','Cargo Pod w/RCS','Cargo Pod w/EUS');
		jx++; jswitch[jx]=new Array(311,1,1,'labelj9',1,'None');
		jx++; jswitch[jx]=new Array(311,2,3,'labelj9',2,'None','RCS');
		sx++; sswitch[sx]=new Array('311',1,'013');
// Long March 5-7
		ix++; iswitch[ix]=new Array('212',1,3,0,'labeli5','3','Long March 5','Long March 6','Long March 7');
		jx++; jswitch[jx]=new Array(212,1,1,'labelj6',3,'CZ-540','CZ-522','CZ-504');
		jx++; jswitch[jx]=new Array(212,2,2,'labelj6',1,'CZ-5-200');
		jx++; jswitch[jx]=new Array(212,3,3,'labelj6',3,'CZ-5-300','CZ-5-320','CZ-5-340');
		kx++; kswitch[kx]=new Array(212,1,1,'labelk6',2,'None','5-meter LH2/LOX');
		kx++; kswitch[kx]=new Array(212,3,3,'labelk6',2,'None','3.35-meter LH2/LOX');
		sx++; sswitch[sx]=new Array('212',4,'007','008','009','022');
// Vulcan
		ix++; iswitch[ix]=new Array('213',1,3,1,'labeli1',8,'Vulcan 401','Vulcan 421','Vulcan 441','Vulcan 501','Vulcan 521','Vulcan 541','Vulcan 561','Vulcan 56x');
		jx++; jswitch[jx]=new Array(213,1,8,'labelj4',2,'GEM-63','Aerojet')
		kx++; kswitch[kx]=new Array(213,1,8,'labelk5',2,'BE-4 (Methane)','AR-1 (Kerosene)');
		lx++; lswitch[lx]=new Array(213,1,3,'labell3',2,'LPF','EPF');
		lx++; lswitch[lx]=new Array(213,4,8,'labell3',2,'5-meter short','5-meter medium');
		sx++; sswitch[sx]=new Array('213',2,'001','003');

// Done
		}
	function escapeon()
		{
		document.getElementById('escape1').disabled=false;
		document.getElementById('escape2').disabled=false;
		document.getElementById('escape3').disabled=false;
		document.getElementById('orbit1').disabled=true;
		document.getElementById('orbit2').disabled=true;
		document.getElementById('orbit3').disabled=true;
		}
	function orbiton()
		{
		document.getElementById('escape1').disabled=true;
		document.getElementById('escape2').disabled=true;
		document.getElementById('escape3').disabled=true;
		document.getElementById('orbit1').disabled=false;
		document.getElementById('orbit2').disabled=false;
		document.getElementById('orbit3').disabled=false;
		}
	function LSswitch(n1,n2)
		{
		for (var cv=0; cv<alldivs.length; cv++) if (alldivs[cv].className.slice(0,4) == 'site') alldivs[cv].style.display="none";
		for (cv=0; cv<allmens.length; cv++) if (allmens[cv].className.slice(0,4) == 'site') allmens[cv].disabled=true;
		for (cv=0; cv<allinp.length; cv++) if (allinp[cv].className.slice(0,4) == 'site') allinp[cv].disabled=true;
		if (n1=='csite') for (cv=0; cv<sname.length; cv++) document.getElementById('csl').options[cv+1] = new Option(sname[cv]+' ('+sflag[cv]+')',sval[cv]);
		document.getElementById(n1).style.display="block";
		if (n2!='usl') 
			{
			document.getElementById(n2).disabled=false;
			document.getElementById(n2).value="000";
			}
		}
	function LVCswitch(n1,n2)
		{
		for (var cv=0; cv<alldivs.length; cv++) if (alldivs[cv].className.slice(0,6) == 'family') alldivs[cv].style.display="none";
		for (cv=0; cv<allmens.length; cv++) if (allmens[cv].className.slice(0,6) == 'family') allmens[cv].disabled=true;
		for (cv=0; cv<allinp.length; cv++) if (allinp[cv].className.slice(0,6) == 'family') allinp[cv].disabled=true;
		if (n1=='claunch') for (cv=0; cv<cname.length; cv++) document.getElementById('clf').options[cv+1] = new Option(cname[cv]+' ('+cflag[cv]+')',cval[cv]);
		if (n1=='plaunch') for (cv=0; cv<pname.length; cv++) document.getElementById('plf').options[cv+1] = new Option(pname[cv]+' ('+pflag[cv]+')',pval[cv]);
		if (n1=='hlaunch') for (cv=0; cv<hname.length; cv++) document.getElementById('hlf').options[cv+1] = new Option(hname[cv]+' ('+hflag[cv]+')',hval[cv]);
		document.getElementById(n1).style.display="block";
		LVFswitch(000);
		if (n2=='udl') 
			{
			document.getElementById('Stypes').style.display="none"; 
			document.getElementById('Stype0').checked="checked"; 
			document.getElementById('fnull').disabled=false;
			document.getElementById('CalSwitch').style.display="none";
			if (document.getElementById('LSclass1').checked==true)
				{
				document.getElementById('LSclass2').checked=true;
				LSswitch('csite','csl');
				}
			}
		else 
			{
			document.getElementById(n2).disabled=false;
			document.getElementById(n2).value="000";
			document.getElementById('CalSwitch').style.display="inline";
			}
		}
	function LVFswitch(n1)
		{
		lastf = n1;
		for (var cv=0; cv<alldivs.length; cv++) if (alldivs[cv].className.slice(0,7) == 'iconfig') alldivs[cv].style.display="none";    // need to hide and disable the model/configuration inputs
		for (cv=0; cv<allmens.length; cv++) if (allmens[cv].className.slice(0,7) == 'iconfig') allmens[cv].disabled=true;
		for (cv=0; cv<allinp.length; cv++) if (allinp[cv].className.slice(0,7) == 'iconfig') allinp[cv].disabled=true;
		document.getElementById('i0002').disabled=false;
		JKLswitch('j',0);
		JKLswitch('k',0);
		JKLswitch('l',0);
		for (cv=0; cv<iswitch.length; cv++)
			{
			if (iswitch[cv][0]==n1) 
				{
				if (iswitch[cv][1]==1) 
					{
					document.getElementById('i0000').style.display="block";
					document.getElementById('i0001').style.display="inline";
					document.getElementById('i0001').disabled=false;
					document.getElementById('i0001').value='0';
					document.getElementById('i0002').disabled=true;
					document.getElementById(iswitch[cv][4]).style.display="inline";
					document.getElementById('i0001').length=1;
					for (var cv2=1; cv2<=iswitch[cv][5]; cv2++) document.getElementById('i0001').options[cv2] = new Option(iswitch[cv][5+cv2],cv2);
					if (iswitch[cv][5]==1) document.getElementById('i0001').options[1].selected="selected";
					}
				var sitecount = 0;
				document.getElementById('fsl').length=1;
				for (cv2=0; cv2<sswitch[cv][1]; cv2++)	
					for (var cv3=0; cv3<sval.length; cv3++)
						if (sval[cv3]==sswitch[cv][2+cv2]) 
							{
							sitecount = sitecount+1;
							document.getElementById('fsl').options[sitecount] = new Option(sname[cv3]+' ('+sflag[cv3]+')',sval[cv3],defaultSelected=(sswitch[cv][1]==1));
							}
				if (iswitch[cv][2]==1) {document.getElementById('Ttypes').style.display="none"; document.getElementById('Ttype1').checked="checked"; }
					else {document.getElementById('Ttypes').style.display="inline"; document.getElementById('Ttype2').checked="checked"; }
				if (iswitch[cv][2]==2) document.getElementById('Tlabel3').style.display="none"; 
					else document.getElementById('Tlabel3').style.display="inline"; 
				if (iswitch[cv][3]==0) {document.getElementById('Stypes').style.display="none"; document.getElementById('Stype0').checked="checked"; }
					else {document.getElementById('Stypes').style.display="inline"; document.getElementById('Stype0').checked="checked"; }
				}
			}
		for (cv=0; cv<allpara.length; cv++) 
			if (allpara[cv].className == 'fnotes')
				{
				if (allpara[cv].id == 'x'+n1+'notes') allpara[cv].style.display="block";
				else allpara[cv].style.display="none";
				}
		}
	function JKLswitch(jkl,n1)
		{
		for (var cv=0; cv<alldivs.length; cv++) if (alldivs[cv].className.slice(0,7) == jkl+'config') alldivs[cv].style.display="none";    // need to hide and disable the model/configuration inputs
		for (cv=0; cv<allmens.length; cv++) if (allmens[cv].className.slice(0,7) == jkl+'config') allmens[cv].disabled=true;
		for (cv=0; cv<allinp.length; cv++) if (allinp[cv].className.slice(0,7) == jkl+'config') allinp[cv].disabled=true;
		if (jkl=='j') 
			{
			var xswitch = jswitch; 
			lasti = n1; 
			for (var cv=0; cv<alldivs.length; cv++) if ((alldivs[cv].className.slice(0,7)=='kconfig')||(alldivs[cv].className.slice(0,7)=='lconfig')) alldivs[cv].style.display="none";    // clear these away; will rebuild later
			for (cv=0; cv<allmens.length; cv++) if ((allmens[cv].className.slice(0,7)=='kconfig')||(allmens[cv].className.slice(0,7)=='lconfig')) allmens[cv].disabled=true;
			for (cv=0; cv<allinp.length; cv++) if ((allinp[cv].className.slice(0,7)=='kconfig')||(allinp[cv].className.slice(0,7)=='lconfig')) allinp[cv].disabled=true;
			document.getElementById('k0002').disabled=false;
			document.getElementById('l0002').disabled=false;
			}
		if (jkl=='k') var xswitch = kswitch;   
		if (jkl=='l') var xswitch = lswitch;
		document.getElementById(jkl+'0002').disabled=false;
		for (cv=1; cv<xswitch.length; cv++)
			{
			if (lastf==xswitch[cv][0])
			if (lasti>=xswitch[cv][1])
			if (lasti<=xswitch[cv][2])
				{
				document.getElementById(jkl+'0000').style.display="block";
				document.getElementById(jkl+'0001').style.display="inline";
				document.getElementById(jkl+'0001').disabled=false;
				document.getElementById(jkl+'0001').value='0';
				document.getElementById(jkl+'0002').disabled=true;
				document.getElementById(xswitch[cv][3]).style.display="inline";
				document.getElementById(jkl+'0001').length=1;
				for (var cv2=1; cv2<=xswitch[cv][4]; cv2++) document.getElementById(jkl+'0001').options[cv2] = new Option(xswitch[cv][4+cv2],cv2);
				if (xswitch[cv][4]==1) 
					{
					document.getElementById(jkl+'0001').options[1].selected="selected";
					if (jkl=='j') JKLswitch('k',1); if (jkl=='k') JKLswitch('l',1);
					}
				}
			}
		}
	function USswitch(n)
		{
		for (var cv=0; cv<allinp.length; cv++)
			if (allinp[cv].name.slice(0,3)=='udS') for (var cv2=1; cv2<=3; cv2++)
				if (allinp[cv].name.slice(3,4)==cv2) 
					if (cv2<=n)
						{
						allinp[cv].disabled=false;
						}
					else
						{
						allinp[cv].disabled=true;
						allinp[cv].value="0";
						}
		if (document.getElementById('udRes1').checked)
			{
			document.getElementById('udS1res').value="0.5";
			if (n>=2) {document.getElementById('udS2res').value="0.5";}
			if (n>=3) {document.getElementById('udS3res').value="0.5";}
			if (document.getElementById('udRestart1').checked)
				{
				if (n==1) {document.getElementById('udS1res').value="1.0";}
				if (n==2) {document.getElementById('udS2res').value="1.0";}
				if (n==3) {document.getElementById('udS3res').value="1.0";}
				}
			}
		}
	function UBswitch(n)
		{
		for (var cv=0; cv<allinp.length; cv++)
			if (allinp[cv].name.slice(0,3)=='udS') 
				if (allinp[cv].name.slice(3,4)=='0') 
					if (n==1)
						{
						allinp[cv].disabled=false;
						}
					else
						{
						allinp[cv].disabled=true;
						allinp[cv].value="0";
						document.getElementById('udS0res').value="0";
						}
		}
	function RUSswitch(n)
		{
		if (n==1) 
			{
			document.getElementById('Ttypes').style.display="inline";  
			document.getElementById('Tlabel3').style.display="inline"; 
			document.getElementById('Ttype2').checked="checked"; 
			if (document.getElementById('udRes1').checked)
				{
				if (document.getElementById('udStages1').checked) {document.getElementById('udS1res').value="1.0";}
				if (document.getElementById('udStages2').checked) {document.getElementById('udS2res').value="1.0";}
				if (document.getElementById('udStages3').checked) {document.getElementById('udS3res').value="1.0";}
				}
			}
		else
			{
			if (document.getElementById('udStages1').checked)
				{
				document.getElementById('Ttypes').style.display="none";  
				document.getElementById('Ttype1').checked="checked"; 
				if (document.getElementById('udRes1').checked)  {document.getElementById('udS1res').value="0.5";}
				}
			else
				{
				document.getElementById('Ttypes').style.display="inline";  
				document.getElementById('Tlabel3').style.display="none"; 
				document.getElementById('Ttype2').checked="checked"; 
				if (document.getElementById('udRes1').checked)
					{
					if (document.getElementById('udStages1').checked) {document.getElementById('udS1res').value="0.5";}
					if (document.getElementById('udStages2').checked) {document.getElementById('udS2res').value="0.5";}
					if (document.getElementById('udStages3').checked) {document.getElementById('udS3res').value="0.5";}
					}
				}
			}
		}	
	function DRESswitch(n)
		{
		if (n==0) 
			{
			document.getElementById('udResidual').style.display="inline";  
			}
		else
			{
			document.getElementById('udResidual').style.display="none";  
			document.getElementById('udS0res').value="0";
			document.getElementById('udS1res').value="0.5";	
			document.getElementById('udS2res').value="0";
			document.getElementById('udS3res').value="0";
			if (document.getElementById('udStages2').checked) {document.getElementById('udS2res').value="0.5";}	
			if (document.getElementById('udStages3').checked) {document.getElementById('udS2res').value="0.5";}	
			if (document.getElementById('udStages3').checked) {document.getElementById('udS3res').value="0.5";}	
			if (document.getElementById('udRestart1').checked)
				{
				if (document.getElementById('udStages1').checked) {document.getElementById('udS1res').value="1.0";}
				if (document.getElementById('udStages2').checked) {document.getElementById('udS2res').value="1.0";}
				if (document.getElementById('udStages3').checked) {document.getElementById('udS3res').value="1.0";}
				}
			}
		}	
	function fullreset()
		{
		orbiton();
		LVCswitch('claunch','clf');
		LSswitch('fsite','fsl');
		USswitch(1);
		UBswitch(0);
		}
	function fullsubmit()
		{
		}