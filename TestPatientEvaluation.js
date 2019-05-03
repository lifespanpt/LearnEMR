(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap51 = function() {
	this.initialize(img.Bitmap51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,391);


(lib.Bitmap52 = function() {
	this.initialize(img.Bitmap52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,631,763);


(lib.ipadclipartpng14transparent = function() {
	this.initialize(img.ipadclipartpng14transparent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1700,2474);


(lib.NewProject22 = function() {
	this.initialize(img.NewProject22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,850,767);


(lib.NewProject23 = function() {
	this.initialize(img.NewProject23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,705,220);


(lib.NewProject26 = function() {
	this.initialize(img.NewProject26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,233);


(lib.NewProject28 = function() {
	this.initialize(img.NewProject28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,233);


(lib.ScreenShot20190419at20450PMpngcopy = function() {
	this.initialize(img.ScreenShot20190419at20450PMpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,42);


(lib.ScreenShot20190422at32710PM = function() {
	this.initialize(img.ScreenShot20190422at32710PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,30);


(lib.ScreenShot20190422at74532AMpngcopy = function() {
	this.initialize(img.ScreenShot20190422at74532AMpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,761);


(lib.ScreenShot20190422at75123AM = function() {
	this.initialize(img.ScreenShot20190422at75123AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,760);


(lib.ScreenShot20190422at75413AM = function() {
	this.initialize(img.ScreenShot20190422at75413AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,41);


(lib.ScreenShot20190422at75450AM = function() {
	this.initialize(img.ScreenShot20190422at75450AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,45);


(lib.ScreenShot20190422at75854AM = function() {
	this.initialize(img.ScreenShot20190422at75854AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,759);


(lib.ScreenShot20190422at80722AM = function() {
	this.initialize(img.ScreenShot20190422at80722AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,762);


(lib.ScreenShot20190422at80838AM = function() {
	this.initialize(img.ScreenShot20190422at80838AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,41);


(lib.ScreenShot20190422at81131AM = function() {
	this.initialize(img.ScreenShot20190422at81131AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,762);


(lib.ScreenShot20190422at81151AM = function() {
	this.initialize(img.ScreenShot20190422at81151AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,33);


(lib.ScreenShot20190422at81402AM = function() {
	this.initialize(img.ScreenShot20190422at81402AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,761);


(lib.ScreenShot20190422at81415AM = function() {
	this.initialize(img.ScreenShot20190422at81415AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,17);


(lib.ScreenShot20190422at81645AM = function() {
	this.initialize(img.ScreenShot20190422at81645AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,19);


(lib.ScreenShot20190422at81814AM = function() {
	this.initialize(img.ScreenShot20190422at81814AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,760);


(lib.ScreenShot20190422at81823AM = function() {
	this.initialize(img.ScreenShot20190422at81823AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,36);


(lib.ScreenShot20190422at82200AM = function() {
	this.initialize(img.ScreenShot20190422at82200AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,657,759);


(lib.ScreenShot20190425at11727PM = function() {
	this.initialize(img.ScreenShot20190425at11727PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,760);


(lib.ScreenShot20190425at102510AM = function() {
	this.initialize(img.ScreenShot20190425at102510AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,40);


(lib.ScreenShot20190425at102527AM = function() {
	this.initialize(img.ScreenShot20190425at102527AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,763);


(lib.ScreenShot20190425at102728AM = function() {
	this.initialize(img.ScreenShot20190425at102728AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,610,232);


(lib.ScreenShot20190425at102734AM = function() {
	this.initialize(img.ScreenShot20190425at102734AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,609,231);


(lib.ScreenShot20190425at103642AM = function() {
	this.initialize(img.ScreenShot20190425at103642AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,237);


(lib.ScreenShot20190425at103706AM = function() {
	this.initialize(img.ScreenShot20190425at103706AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,614,239);


(lib.ScreenShot20190425at103738AM = function() {
	this.initialize(img.ScreenShot20190425at103738AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,659,764);


(lib.ScreenShot20190425at122626PM = function() {
	this.initialize(img.ScreenShot20190425at122626PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,662,763);


(lib.ScreenShot20190425at122848PM = function() {
	this.initialize(img.ScreenShot20190425at122848PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,41);


(lib.ScreenShot20190425at123118PM = function() {
	this.initialize(img.ScreenShot20190425at123118PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,762);


(lib.ScreenShot20190425at123358PM = function() {
	this.initialize(img.ScreenShot20190425at123358PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,42);


(lib.ScreenShot20190425at123450PM = function() {
	this.initialize(img.ScreenShot20190425at123450PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,761);


(lib.ScreenShot20190425at123509PM = function() {
	this.initialize(img.ScreenShot20190425at123509PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,37);


(lib.ScreenShot20190425at123518PM = function() {
	this.initialize(img.ScreenShot20190425at123518PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,21);


(lib.ScreenShot20190425at123527PM = function() {
	this.initialize(img.ScreenShot20190425at123527PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,20);


(lib.ScreenShot20190425at123937PM = function() {
	this.initialize(img.ScreenShot20190425at123937PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,229);


(lib.ScreenShot20190425at124343PM = function() {
	this.initialize(img.ScreenShot20190425at124343PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,760);


(lib.ScreenShot20190425at124546PM = function() {
	this.initialize(img.ScreenShot20190425at124546PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,749);


(lib.ScreenShot20190425at124553PM = function() {
	this.initialize(img.ScreenShot20190425at124553PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,40);


(lib.ScreenShot20190425at125322PM = function() {
	this.initialize(img.ScreenShot20190425at125322PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,763);


(lib.ScreenShot20190425at125338PM = function() {
	this.initialize(img.ScreenShot20190425at125338PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,44);


(lib.ScreenShot20190425at125610PM = function() {
	this.initialize(img.ScreenShot20190425at125610PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,760);


(lib.ScreenShot20190425at20221PM = function() {
	this.initialize(img.ScreenShot20190425at20221PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,760);


(lib.ScreenShot20190425at20458PM = function() {
	this.initialize(img.ScreenShot20190425at20458PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,759);


(lib.ScreenShot20190425at20931PM = function() {
	this.initialize(img.ScreenShot20190425at20931PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,42);


(lib.ScreenShot20190425at21035PM = function() {
	this.initialize(img.ScreenShot20190425at21035PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,760);


(lib.ScreenShot20190425at21148PM = function() {
	this.initialize(img.ScreenShot20190425at21148PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,22);


(lib.ScreenShot20190425at21218PM = function() {
	this.initialize(img.ScreenShot20190425at21218PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,21);


(lib.ScreenShot20190425at21502PM = function() {
	this.initialize(img.ScreenShot20190425at21502PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,760);


(lib.ScreenShot20190425at21944PM = function() {
	this.initialize(img.ScreenShot20190425at21944PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,645,759);


(lib.ScreenShot20190425at22400PM = function() {
	this.initialize(img.ScreenShot20190425at22400PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,760);


(lib.ScreenShot20190425at22619PM = function() {
	this.initialize(img.ScreenShot20190425at22619PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,582,66);


(lib.ScreenShot20190425at22729PM = function() {
	this.initialize(img.ScreenShot20190425at22729PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,763);


(lib.ScreenShot20190425at22951PM = function() {
	this.initialize(img.ScreenShot20190425at22951PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,39);


(lib.ScreenShot20190425at22958PM = function() {
	this.initialize(img.ScreenShot20190425at22958PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,761);


(lib.ScreenShot20190425at23356PM = function() {
	this.initialize(img.ScreenShot20190425at23356PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,760);


(lib.ScreenShot20190425at42427PM = function() {
	this.initialize(img.ScreenShot20190425at42427PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,760);


(lib.ScreenShot20190425at42932PM = function() {
	this.initialize(img.ScreenShot20190425at42932PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,645,764);


(lib.ScreenShot20190425at82001AM = function() {
	this.initialize(img.ScreenShot20190425at82001AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,511,33);


(lib.ScreenShot20190425at82012AM = function() {
	this.initialize(img.ScreenShot20190425at82012AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,514,22);


(lib.ScreenShot20190425at82326AM = function() {
	this.initialize(img.ScreenShot20190425at82326AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,762);


(lib.ScreenShot20190425at92924AM = function() {
	this.initialize(img.ScreenShot20190425at92924AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,511,18);


(lib.ScreenShot20190426at112639AM = function() {
	this.initialize(img.ScreenShot20190426at112639AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,19);


(lib.ScreenShot20190426at20710PM = function() {
	this.initialize(img.ScreenShot20190426at20710PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,38);


(lib.ScreenShot20190426at21932PM = function() {
	this.initialize(img.ScreenShot20190426at21932PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,65);


(lib.ScreenShot20190426at80327AM = function() {
	this.initialize(img.ScreenShot20190426at80327AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,770);


(lib.ScreenShot20190426at81207AM = function() {
	this.initialize(img.ScreenShot20190426at81207AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,762);


(lib.ScreenShot20190426at81545AM = function() {
	this.initialize(img.ScreenShot20190426at81545AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,33);


(lib.ScreenShot20190426at81553AM = function() {
	this.initialize(img.ScreenShot20190426at81553AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,760);


(lib.ScreenShot20190426at81601AM = function() {
	this.initialize(img.ScreenShot20190426at81601AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,19);


(lib.ScreenShot20190426at81610AM = function() {
	this.initialize(img.ScreenShot20190426at81610AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,16);


(lib.ScreenShot20190426at81620AM = function() {
	this.initialize(img.ScreenShot20190426at81620AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,644,763);


(lib.ScreenShot20190426at81659AM = function() {
	this.initialize(img.ScreenShot20190426at81659AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,762);


(lib.ScreenShot20190426at81706AM = function() {
	this.initialize(img.ScreenShot20190426at81706AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,176);


(lib.ScreenShot20190426at81720AM = function() {
	this.initialize(img.ScreenShot20190426at81720AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,761);


(lib.ScreenShot20190426at82814AM = function() {
	this.initialize(img.ScreenShot20190426at82814AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,761);


(lib.ScreenShot20190426at83210AM = function() {
	this.initialize(img.ScreenShot20190426at83210AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,622,53);


(lib.ScreenShot20190426at83227AM = function() {
	this.initialize(img.ScreenShot20190426at83227AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,645,762);


(lib.ScreenShot20190426at83737AM = function() {
	this.initialize(img.ScreenShot20190426at83737AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,762);


(lib.ScreenShot20190426at84029AM = function() {
	this.initialize(img.ScreenShot20190426at84029AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,760);


(lib.ScreenShot20190426at84314AM = function() {
	this.initialize(img.ScreenShot20190426at84314AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,760);


(lib.ScreenShot20190426at84358AM = function() {
	this.initialize(img.ScreenShot20190426at84358AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,662,760);


(lib.ScreenShot20190426at84408AM = function() {
	this.initialize(img.ScreenShot20190426at84408AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,662,764);


(lib.ScreenShot20190426at84420AM = function() {
	this.initialize(img.ScreenShot20190426at84420AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,760);


(lib.ScreenShot20190426at84432AM = function() {
	this.initialize(img.ScreenShot20190426at84432AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,761);


(lib.ScreenShot20190426at84608AM = function() {
	this.initialize(img.ScreenShot20190426at84608AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,662,763);


(lib.ScreenShot20190426at84624AM = function() {
	this.initialize(img.ScreenShot20190426at84624AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,759);


(lib.ScreenShot20190426at84653AM = function() {
	this.initialize(img.ScreenShot20190426at84653AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,38);


(lib.ScreenShot20190426at84743AM = function() {
	this.initialize(img.ScreenShot20190426at84743AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,761);


(lib.ScreenShot20190426at84807AM = function() {
	this.initialize(img.ScreenShot20190426at84807AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,763);


(lib.ScreenShot20190426at91428AM = function() {
	this.initialize(img.ScreenShot20190426at91428AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,761);


(lib.ScreenShot20190426at91439AM = function() {
	this.initialize(img.ScreenShot20190426at91439AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,22);


(lib.ScreenShot20190426at91449AM = function() {
	this.initialize(img.ScreenShot20190426at91449AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,19);


(lib.ScreenShot20190426at91653AM = function() {
	this.initialize(img.ScreenShot20190426at91653AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,762);


(lib.ScreenShot20190426at91942AM = function() {
	this.initialize(img.ScreenShot20190426at91942AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,645,759);


(lib.ScreenShot20190426at92256AM = function() {
	this.initialize(img.ScreenShot20190426at92256AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,760);


(lib.ScreenShot20190426at92702AM = function() {
	this.initialize(img.ScreenShot20190426at92702AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,40);


(lib.ScreenShot20190426at92713AM = function() {
	this.initialize(img.ScreenShot20190426at92713AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,762);


(lib.ScreenShot20190426at93310AM = function() {
	this.initialize(img.ScreenShot20190426at93310AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,762);


(lib.ScreenShot20190426at93533AM = function() {
	this.initialize(img.ScreenShot20190426at93533AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,763);


(lib.ScreenShot20190426at93545AM = function() {
	this.initialize(img.ScreenShot20190426at93545AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651,762);


(lib.ScreenShot20190426at93557AM = function() {
	this.initialize(img.ScreenShot20190426at93557AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,21);


(lib.ScreenShot20190426at93608AM = function() {
	this.initialize(img.ScreenShot20190426at93608AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,17);


(lib.ScreenShot20190426at93628AM = function() {
	this.initialize(img.ScreenShot20190426at93628AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,763);


(lib.ScreenShot20190426at94157AM = function() {
	this.initialize(img.ScreenShot20190426at94157AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,36);


(lib.ScreenShot20190426at94206AM = function() {
	this.initialize(img.ScreenShot20190426at94206AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,173);


(lib.ScreenShot20190426at94217AM = function() {
	this.initialize(img.ScreenShot20190426at94217AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,40);


(lib.ScreenShot20190426at94317AM = function() {
	this.initialize(img.ScreenShot20190426at94317AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,743);


(lib.ScreenShot20190426at94336AM = function() {
	this.initialize(img.ScreenShot20190426at94336AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,748);


(lib.ScreenShot20190426at95001AM = function() {
	this.initialize(img.ScreenShot20190426at95001AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,763);


(lib.unnamed = function() {
	this.initialize(img.unnamed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,126);


(lib.Viewpastnotes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at94157AM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,36);


(lib.Tinetti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at22619PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,582,66);


(lib.TherapyOrder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at81645AM();
	this.instance.parent = this;
	this.instance.setTransform(-75,-12);

	this.instance_1 = new lib.ScreenShot20190422at81415AM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-12,205,19);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Submit1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at22951PM();
	this.instance.parent = this;
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,0,90,39);


(lib.Signdate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at103642AM();
	this.instance.parent = this;
	this.instance.setTransform(-306,-119);

	this.instance_1 = new lib.ScreenShot20190425at103706AM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-308,-119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306,-119,612,237);


(lib.Signature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102734AM();
	this.instance.parent = this;
	this.instance.setTransform(-262,-103);

	this.instance_1 = new lib.ScreenShot20190425at102728AM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-262,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262,-103,609,231);


(lib.Showpaperwork = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at94217AM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,40);


(lib.SelectForm3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at81151AM();
	this.instance.parent = this;
	this.instance.setTransform(-80,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-16,181,33);


(lib.Selectform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at81151AM();
	this.instance.parent = this;
	this.instance.setTransform(-80,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-16,181,33);


(lib.SelectBodyArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at81545AM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,33);


(lib.Selectapatient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at82001AM();
	this.instance.parent = this;
	this.instance.setTransform(-255,-12);

	this.instance_1 = new lib.Bitmap51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-267,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255,-12,511,33);


(lib.SelectAction3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at123509PM();
	this.instance.parent = this;
	this.instance.setTransform(-141,-19);

	this.instance_1 = new lib.ScreenShot20190425at123937PM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-138,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-19,279,37);


(lib.SelectAction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at123509PM();
	this.instance.parent = this;
	this.instance.setTransform(-141,-19);

	this.instance_1 = new lib.ScreenShot20190425at123937PM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-138,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-19,279,37);


(lib.ScrollDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.Scroll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.ScheduleCall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Schedule a Call with HR", "30px 'Times'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 198;
	this.text.parent = this;
	this.text.setTransform(63,-22.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330033").s().p("A07FKIAAqTMAp3AAAIAAKTg");
	this.shape.setTransform(64.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-27.5,268,69);


(lib.Save = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at84653AM();
	this.instance.parent = this;
	this.instance.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,0,85,38);


(lib.Return = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-65,-33,0.251,0.273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-33,177,60);


(lib.Retrive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190419at20450PMpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-46,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-22,84,42);


(lib.RestartTutorial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Restart Tutorial", "30px 'Times'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 201;
	this.text.parent = this;
	this.text.setTransform(136.5,13.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330033").s().p("A07FKIAAqTMAp3AAAIAAKTg");
	this.shape.setTransform(134,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,77.5);


(lib.Proceedtoeval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at124553PM();
	this.instance.parent = this;
	this.instance.setTransform(-64,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-19,125,40);


(lib.Proceed1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at125338PM();
	this.instance.parent = this;
	this.instance.setTransform(-45,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-24,90,44);


(lib.PainYes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at21148PM();
	this.instance.parent = this;

	this.instance_1 = new lib.ScreenShot20190425at21218PM();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,22);


(lib.Pain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at20931PM();
	this.instance.parent = this;
	this.instance.setTransform(-58,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-21,128,42);


(lib.OtherForms3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at80838AM();
	this.instance.parent = this;
	this.instance.setTransform(-57,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-22,114,41);


(lib.otherformbutton1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at80838AM();
	this.instance.parent = this;
	this.instance.setTransform(-57,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-22,114,41);


(lib.nextplot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at92702AM();
	this.instance.parent = this;
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,0,90,40);


(lib.Nextplot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.NextOrder12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.NextOrder3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.Nextforever = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.nexteval9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nexteval1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-68,-25,0.231,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-25,163,56);


(lib.nextcc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.nextcc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.nextcc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.nextall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.next3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.next2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at102510AM();
	this.instance.parent = this;
	this.instance.setTransform(-37,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-20,70,40);


(lib.MyReferrals3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at123358PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,42);


(lib.myreferrals1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at123358PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,42);


(lib.MenuTO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Scheduling Therapy Order", "20px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 206;
	this.text.alpha = 0.74509804;
	this.text.parent = this;
	this.text.setTransform(4,-28.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,1).p("A1jkmMArHAAAIAAJNMgrHAAAg");
	this.shape.setTransform(7,-7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.749)").s().p("A1jEnIAApNMArHAAAIAAJNg");
	this.shape_1.setTransform(7,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-37.9,278,105.8);


(lib.MenuRI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Referral Inbox", "30px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 261;
	this.text.alpha = 0.74509804;
	this.text.parent = this;
	this.text.setTransform(47.5,-15.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,1).p("A1jkmMArHAAAIAAJNMgrHAAAg");
	this.shape.setTransform(47.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.749)").s().p("A1jEnIAApNMArHAAAIAAJNg");
	this.shape_1.setTransform(47.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-30,278,61);


(lib.MenuPlot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Plotting Visits", "30px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 262;
	this.text.alpha = 0.74117647;
	this.text.parent = this;
	this.text.setTransform(46.5,-14.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,1).p("A1jkmMArHAAAIAAJNMgrHAAAg");
	this.shape.setTransform(47.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.749)").s().p("A1jEnIAApNMArHAAAIAAJNg");
	this.shape_1.setTransform(47.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-30,278,61);


(lib.MenuHome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Restart", "30px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 167;
	this.text.alpha = 0.74509804;
	this.text.parent = this;
	this.text.setTransform(48.5,-12.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,1).p("A1jkmMArHAAAIAAJNMgrHAAAg");
	this.shape.setTransform(47.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.749)").s().p("A1jEnIAApNMArHAAAIAAJNg");
	this.shape_1.setTransform(47.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-30,278,61);


(lib.MenuEval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Evaluation", "30px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 257;
	this.text.alpha = 0.74117647;
	this.text.parent = this;
	this.text.setTransform(45.5,-10.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,1).p("A1jkmMArHAAAIAAJNMgrHAAAg");
	this.shape.setTransform(47.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.749)").s().p("A1jEnIAApNMArHAAAIAAJNg");
	this.shape_1.setTransform(47.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-30,278,61);


(lib.MenuClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Close menu", "30px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 221;
	this.text.alpha = 0.74509804;
	this.text.parent = this;
	this.text.setTransform(48.5,-11.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.NewProject22, null, new cjs.Matrix2D(1,0,0,1,-425,-383.5)).s().p("A1jCWIAAkrMArHAAAIAAErg");
	this.shape.setTransform(47.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-14.4,276,38.5);


(lib.MenuCC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Adding  Case Conference", "20px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 276;
	this.text.alpha = 0.74117647;
	this.text.parent = this;
	this.text.setTransform(47,-18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,1).p("A1jkmMArHAAAIAAJNMgrHAAAg");
	this.shape.setTransform(47.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.749)").s().p("A1jEnIAApNMArHAAAIAAJNg");
	this.shape_1.setTransform(47.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-30,280,61);


(lib.Lifespan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.unnamed();
	this.instance.parent = this;
	this.instance.setTransform(-123,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-50,250,126);


(lib.Keep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at91439AM();
	this.instance.parent = this;

	this.instance_1 = new lib.ScreenShot20190426at91449AM();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,22);


(lib.homebutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new cjs.Text("Menu", "15px 'Trajan Pro'", "#535353");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-1.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Layer_1
	this.instance = new lib.ScreenShot20190426at21932PM();
	this.instance.parent = this;
	this.instance.setTransform(-40,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-31,104,65);


(lib.heelraise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at81706AM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304,176);


(lib.HP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at75413AM();
	this.instance.parent = this;
	this.instance.setTransform(-60,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-21,110,41);


(lib.Finalize = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at122848PM();
	this.instance.parent = this;
	this.instance.setTransform(-46,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-22,92,41);


(lib.Eval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at123518PM();
	this.instance.parent = this;
	this.instance.setTransform(-92,-11);

	this.instance_1 = new lib.ScreenShot20190425at123527PM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-93,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-11,276,21);


(lib.Doe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190425at82012AM();
	this.instance.parent = this;
	this.instance.setTransform(-200,-12);

	this.instance_1 = new lib.ScreenShot20190425at92924AM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-197,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-12,514,22);


(lib.Confirm6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at81823AM();
	this.instance.parent = this;
	this.instance.setTransform(-45,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-19,93,36);


(lib.Confirm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190422at81823AM();
	this.instance.parent = this;
	this.instance.setTransform(-45,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-19,93,36);


(lib.CaseConference = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at93557AM();
	this.instance.parent = this;

	this.instance_1 = new lib.ScreenShot20190426at93608AM();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206,21);


(lib.Balance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at83210AM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,622,53);


(lib.Back66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxBv2MAiDAAAIAAftMgiDAAAg");
	this.shape_1.setTransform(110,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxBP3IAA/tMAiDAAAIAAftg");
	this.shape_2.setTransform(110,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AxGvxMAiNAAAIAAfjMgiNAAAg");
	this.shape_1.setTransform(110.5,99.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AxGPyIAA/jMAiNAAAIAAfjg");
	this.shape_2.setTransform(110.5,99.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F7F7F7").ss(1,1,1).p("AuhvxIdDAAIAAfjI9DAAg");
	this.shape_1.setTransform(127,99.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AuhPyIAA/jIdDAAIAAfjg");
	this.shape_2.setTransform(127,99.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("AuxPyIAA/jIdjAAIAAfjg");
	this.shape.setTransform(125.4,99.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape_1.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(99,1,197,0)").s().p("AuxPyIAA/jIdjAAIAAfjg");
	this.shape_2.setTransform(125.4,99.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F7F7F7").ss(1,1,1).p("Ausv2IdZAAIAAftI9ZAAg");
	this.shape_3.setTransform(124.9,99.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.047)").s().p("AusP3IAA/tIdZAAIAAftg");
	this.shape_4.setTransform(124.9,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.shape_4},{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Back2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AuhvxIdDAAIAAfjI9DAAg");
	this.shape.setTransform(127,99.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.047)").s().p("AuhPyIAA/jIdDAAIAAfjg");
	this.shape_1.setTransform(127,99.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s("#F7F7F7").ss(1,1,1).rr(-110,-101.5,220,203,1);
	this.shape_2.setTransform(110,99.6);

	this.instance = new lib.NewProject28();
	this.instance.parent = this;
	this.instance.setTransform(0,-16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(99,1,197,0)").s().p("AucP3IAA/tIc5AAIAAftg");
	this.shape_3.setTransform(126.5,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16,276,233);


(lib.Anklefoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ScreenShot20190426at81601AM();
	this.instance.parent = this;

	this.instance_1 = new lib.ScreenShot20190426at81610AM();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,19);


// stage content:
(lib.PTWalkthrough5219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{homepage:0,homepage2:1,Retrieve:2,patientrecord:3,patientrecord2:4,"H&P":5,Scheduling:6,otherforms:7,TO:8,TherapyOrder:9,TO3:10,STO:11,STOsig:12,STOdate:13,STOrvw:14,patientrecord3:15,referralinbox:16,referralinbox2:17,proceedtoeval1:18,proceedtoeval2:19,frame21:20,eval2:21,eval3:22,eval4:23,eval5:24,eval6:25,eval7:26,eval8:27,eval9:28,eval10:29,eval11:30,frame32:31,frame33:32,frame34:33,frame35:34,frame36:35,frame37:36,frame38:37,frame39:38,frame40:39,frame41:40,frame42:41,frame43:42,frame44:43,frame45:44,frame46:45,frame47:46,frame48:47,frame49:48,frame50:49,Number51:50,frame52:51,frame53:52,frame54:53,frame55:54,Frame56:55,frame57:56,frame58:57,frame59:58,frame60:59,frame61:60,frame62:61,frame63:62,frame64:63,frame65:64,frame66:65});

	// timeline functions:
	this.frame_0 = function() {
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
		this.MenuCC.visible = true
		this.MenuClose.visible = true
			
		}
		
		this.MenuClose.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
		this.MenuClose.visible = false
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('Scheduling');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('referralinbox');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuEval.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay('frame21');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuPlot.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay('Number51');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuCC.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay('frame58');
		}
		this.stop();
		
		
		this.Selectapatient1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_1.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_1()
		{
			this.gotoAndStop('homepage2');
		}
	}
	this.frame_1 = function() {
		this.Back2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_26()
		{
			this.gotoAndStop(0);
		}
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.Doe.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('Retrieve');
		}
	}
	this.frame_2 = function() {
		this.Back3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop(1);
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.retrieve1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop('patientrecord');
		}
	}
	this.frame_3 = function() {
		this.Back4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop(2);
		}
		this.stop();
		
		/* Click to Display a TextField
		Clicking on the specified symbol instance creates and displays a TextField at the x-coordinate and y-coordinate you specify.
		
		Instructions:
		1. Replace the value 200 with the x-coordinate where you want to position the TextField.
		2. Replace the value 100 with the y-coordinate where you want to position the TextField.
		3. Replace the string value "Lorem ipsum dolor sit amet" with the text you want to display in the TextField that appears. Keep the quotation marks.
		*/
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.Scrolldown1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop('patientrecord2');
		}
	}
	this.frame_4 = function() {
		this.Back5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(3);
		}
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Scrolly.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay('H&P');
		}
	}
	this.frame_5 = function() {
		this.Back6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(4);
		}
		this.stop();
		
		this.Return1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop('Scheduling');
		}
	}
	this.frame_6 = function() {
		this.Back7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(5);
		}
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
		this.MenuCC.visible = true
		this.MenuClose.visible = true
			
		}
		
		this.MenuClose.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
		this.MenuClose.visible = false
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('Scheduling');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('referralinbox');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuEval.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay('frame21');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuPlot.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay('Number51');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuCC.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay('frame58');
		}
		this.stop();
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.nextblue.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay('otherforms');
		}
	}
	this.frame_7 = function() {
		this.Back8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(6);
		}
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.otherformbutton1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay('TO');
		}
	}
	this.frame_8 = function() {
		this.Back9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(7);
		}
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Selectform.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay('TherapyOrder');
		}
	}
	this.frame_9 = function() {
		this.Back10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(8);
		}
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.TO.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{
			this.gotoAndPlay('TO3');
		}
	}
	this.frame_10 = function() {
		this.Back11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(9);
		}
		this.stop();
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Confirm1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{
			this.gotoAndPlay('STO');
		}
	}
	this.frame_11 = function() {
		this.Back12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(10);
		}
		this.stop();
		
		
		this.nextall.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop('STOsig');
		}
	}
	this.frame_12 = function() {
		this.Back13.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(11);
		}
		this.stop();
		
		this.next2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop('STOdate');
		}
	}
	this.frame_13 = function() {
		this.Back14.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(12);
		}
		this.stop();
		
		this.next3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.gotoAndStop('STOrvw');
		}
	}
	this.frame_14 = function() {
		this.Back15.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(13);
		}
		this.stop();
		
		this.finalize1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			this.gotoAndStop('patientrecord3');
		}
	}
	this.frame_15 = function() {
		this.Back16.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(14);
		}
		this.stop();
		
		this.myreferrals1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop('referralinbox');
		}
	}
	this.frame_16 = function() {
		this.Back17.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(15);
		}
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
		this.MenuCC.visible = true
		this.MenuClose.visible = true
			
		}
		
		this.MenuClose.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
		this.MenuClose.visible = false
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('Scheduling');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('referralinbox');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuEval.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay('frame21');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuPlot.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay('Number51');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuCC.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay('frame58');
		}
		this.stop();
		
		this.selectaction1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			this.gotoAndStop('referralinbox2');
		}
	}
	this.frame_17 = function() {
		this.Back18.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(16);
		}
		this.stop();
		
		this.Eval1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_18.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_18()
		{
			this.gotoAndStop('proceedtoeval1');
		}
	}
	this.frame_18 = function() {
		this.Back19.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(17);
		}
		this.stop();
		
		this.proceedtoeval1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_19()
		{
			this.gotoAndStop('proceedtoeval2');
		}
	}
	this.frame_19 = function() {
		this.Back20.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(18);
		}
		this.stop();
		
		this.proceed1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop('frame21');
		}
	}
	this.frame_20 = function() {
		this.Back21.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(19);
		}
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
		this.MenuCC.visible = true
		this.MenuClose.visible = true
			
		}
		
		this.MenuClose.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
		this.MenuClose.visible = false
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('Scheduling');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('referralinbox');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuEval.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay('frame21');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuPlot.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay('Number51');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuCC.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay('frame58');
		}
		this.stop();
		
		this.nexteval1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_21.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_21()
		{
			this.gotoAndStop('eval2');
		}
	}
	this.frame_21 = function() {
		this.Back22.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(20);
		}
		this.stop();
		
		this.nexteval2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_22.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_22()
		{
			this.gotoAndStop('eval3');
		}
	}
	this.frame_22 = function() {
		this.Back23.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(21);
		}
		this.stop();
		
		this.nexteval3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_23.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_23()
		{
			this.gotoAndStop('eval4');
		}
	}
	this.frame_23 = function() {
		this.Back24.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(22);
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.painoption.addEventListener("click", fl_ClickToGoToAndStopAtFrame_24.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_24()
		{
			this.gotoAndStop('eval5');
		}
	}
	this.frame_24 = function() {
		this.Back25.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(23);
		}
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.pain2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop('eval6');
		}
	}
	this.frame_25 = function() {
		this.Back26.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(24);
		}
		this.stop();
		
		this.nexteval4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_26()
		{
			this.gotoAndStop('eval7');
		}
	}
	this.frame_26 = function() {
		this.Back27.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(25);
		}
		this.stop();
		
		this.nexteval5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop('eval8');
		}
	}
	this.frame_27 = function() {
		this.Back28.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(26);
		}
		this.stop();
		
		this.Tinetti1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop('eval9');
		}
	}
	this.frame_28 = function() {
		this.Back29.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(27);
		}
		this.stop();
		
		this.Submit1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop('eval10');
		}
	}
	this.frame_29 = function() {
		this.Back30.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(28);
		}
		this.stop();
		
		this.nexteval6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_30.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_30()
		{
			this.gotoAndStop('eval11');
		}
	}
	this.frame_30 = function() {
		this.Back31.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(29);
		}
		this.stop();
		
		this.nexteval18.addEventListener("click", fl_ClickToGoToAndStopAtFrame_31.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_31()
		{
			this.gotoAndStop('frame32');
		}
	}
	this.frame_31 = function() {
		this.Back32.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(30);
		}
		this.stop();
		
		this.nexteval7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_32.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_32()
		{
			this.gotoAndStop('frame33');
		}
	}
	this.frame_32 = function() {
		this.Back33.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(31);
		}
		this.stop();
		
		this.nexteval8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_33.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_33()
		{
			this.gotoAndStop('frame34');
		}
	}
	this.frame_33 = function() {
		this.Back34.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(32);
		}
		this.stop();
		
		this.NextOrder3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_34.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_34()
		{
			this.gotoAndStop('frame35');
		}
	}
	this.frame_34 = function() {
		this.Back35.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(33);
		}
		this.stop();
		
		this.Selectbody.addEventListener("click", fl_ClickToGoToAndStopAtFrame_35.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_35()
		{
			this.gotoAndStop('frame36');
		}
	}
	this.frame_35 = function() {
		this.Back36.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(34);
		}
		this.stop();
		
		this.anklefoot.addEventListener("click", fl_ClickToGoToAndStopAtFrame_36.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_36()
		{
			this.gotoAndStop('frame37');
		}
	}
	this.frame_36 = function() {
		this.Back37.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(35);
		}
		this.stop();
		
		this.nexteval9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_37.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_37()
		{
			this.gotoAndStop('frame38');
		}
	}
	this.frame_37 = function() {
		this.Back38.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(36);
		}
		this.stop();
		
		this.heelraise1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_38.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_38()
		{
			this.gotoAndStop('frame39');
		}
	}
	this.frame_38 = function() {
		this.Back39.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(37);
		}
		this.stop();
		
		this.NextOrder4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_39.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_39()
		{
			this.gotoAndStop('frame40');
		}
	}
	this.frame_39 = function() {
		this.Back40.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(38);
		}
		this.stop();
		
		this.balance1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_40.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_40()
		{
			this.gotoAndStop('frame41');
		}
	}
	this.frame_40 = function() {
		this.Back41.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(39);
		}
		this.stop();
		
		this.nexteval10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_41.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_41()
		{
			this.gotoAndStop('frame42');
		}
	}
	this.frame_41 = function() {
		this.Back42.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(40);
		}
		this.stop();
		
		this.NextOrder5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_42.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_42()
		{
			this.gotoAndStop('frame43');
		}
	}
	this.frame_42 = function() {
		this.Back43.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(41);
		}
		this.stop();
		
		this.NextOrder6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_43.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_43()
		{
			this.gotoAndStop('frame44');
		}
	}
	this.frame_43 = function() {
		this.Back44.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(42);
		}
		this.stop();
		
		this.NextOrder7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_44.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_44()
		{
			this.gotoAndStop('frame45');
		}
	}
	this.frame_44 = function() {
		this.Back45.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(43);
		}
		this.stop();
		
		this.NextOrder8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_45.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_45()
		{
			this.gotoAndStop('frame46');
		}
	}
	this.frame_45 = function() {
		this.Back46.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(44);
		}
		this.stop();
		
		this.NextOrder9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_46.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_46()
		{
			this.gotoAndStop('frame47');
		}
	}
	this.frame_46 = function() {
		this.Back47.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(45);
		}
		this.stop();
		
		this.NextOrder10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_47.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_47()
		{
			this.gotoAndStop('frame48');
		}
	}
	this.frame_47 = function() {
		this.Back48.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(46);
		}
		this.stop();
		
		this.NextOrder11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_48.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_48()
		{
			this.gotoAndStop('frame49');
		}
	}
	this.frame_48 = function() {
		this.Back49.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(47);
		}
		this.stop();
		
		this.NextOrder12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_49.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_49()
		{
			this.gotoAndStop('frame50');
		}
	}
	this.frame_49 = function() {
		this.Back50.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(48);
		}
		this.stop();
		
		this.Save.addEventListener("click", fl_ClickToGoToAndStopAtFrame_50.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_50()
		{
			this.gotoAndStop('Number51');
		}
	}
	this.frame_50 = function() {
		this.Back51.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(49);
		}
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
		this.MenuCC.visible = true
		this.MenuClose.visible = true
			
		}
		
		this.MenuClose.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
		this.MenuClose.visible = false
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('Scheduling');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('referralinbox');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuEval.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay('frame21');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuPlot.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay('Number51');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuCC.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay('frame58');
		}
		this.stop();
		
		this.MyReferrals3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_51.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_51()
		{
			this.gotoAndStop('frame52');
		}
	}
	this.frame_51 = function() {
		this.Back52.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(50);
		}
		this.stop();
		
		this.SelectAction3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_52.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_52()
		{
			this.gotoAndStop('frame53');
		}
	}
	this.frame_52 = function() {
		this.Back53.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(51);
		}
		this.stop();
		
		this.Keep3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_53.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_53()
		{
			this.gotoAndStop('frame54');
		}
	}
	this.frame_53 = function() {
		this.Back54.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(52);
		}
		this.stop();
		
		this.Nextplot1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_54.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_54()
		{
			this.gotoAndStop('frame55');
		}
	}
	this.frame_54 = function() {
		this.Back55.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(53);
		}
		this.stop();
		
		this.Nextforever.addEventListener("click", fl_ClickToGoToAndStopAtFrame_55.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_55()
		{
			this.gotoAndStop('Frame56');
		}
	}
	this.frame_55 = function() {
		this.Back56.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(54);
		}
		this.stop();
		
		this.nextplot2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_56.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_56()
		{
			this.gotoAndStop('frame57');
		}
	}
	this.frame_56 = function() {
		this.Back57.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(55);
		}
		this.stop();
		
		this.Confirm6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_57.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_57()
		{
			this.gotoAndStop('frame58');
		}
	}
	this.frame_57 = function() {
		this.Back58.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(56);
		}
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
		this.MenuCC.visible = true
		this.MenuClose.visible = true
			
		}
		
		this.MenuClose.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
		this.MenuClose.visible = false
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuCC.visible = false
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('Scheduling');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('referralinbox');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuEval.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay('frame21');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuPlot.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay('Number51');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.MenuCC.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay('frame58');
		}
		this.stop();
		
		this.OtherForms3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_58.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_58()
		{
			this.gotoAndStop('frame59');
		}
	}
	this.frame_58 = function() {
		this.Back59.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(57);
		}
		this.stop();
		
		this.SelectForm3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_59.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_59()
		{
			this.gotoAndStop('frame60');
		}
	}
	this.frame_59 = function() {
		this.Back60.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(58);
		}
		this.stop();
		
		this.CaseConference3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_60.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_60()
		{
			this.gotoAndStop('frame61');
		}
	}
	this.frame_60 = function() {
		this.Back61.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(59);
		}
		this.stop();
		
		this.Viewpastnotes1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_61.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_61()
		{
			this.gotoAndStop('frame62');
		}
	}
	this.frame_61 = function() {
		this.Back62.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(60);
		}
		this.stop();
		
		this.Showpaperwork.addEventListener("click", fl_ClickToGoToAndStopAtFrame_62.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_62()
		{
			this.gotoAndStop('frame63');
		}
	}
	this.frame_62 = function() {
		this.Back63.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(61);
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.nextcc1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_63.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_63()
		{
			this.gotoAndPlay('frame64');
		}
	}
	this.frame_63 = function() {
		this.Back64.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(62);
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.nextcc2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_64.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_64()
		{
			this.gotoAndPlay('frame65');
		}
	}
	this.frame_64 = function() {
		this.Back65.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(63);
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.nextcc3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_65.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_65()
		{
			this.gotoAndPlay('frame66');
		}
	}
	this.frame_65 = function() {
		this.Back66.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(64);
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.RestartTut.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_66.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_66()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.ScheduleCall.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.picktime.com/0192ba76-23e4-49fa-8b2d-b95afd768dba", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(1).call(this.frame_43).wait(1).call(this.frame_44).wait(1).call(this.frame_45).wait(1).call(this.frame_46).wait(1).call(this.frame_47).wait(1).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1).call(this.frame_53).wait(1).call(this.frame_54).wait(1).call(this.frame_55).wait(1).call(this.frame_56).wait(1).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(1).call(this.frame_62).wait(1).call(this.frame_63).wait(1).call(this.frame_64).wait(1).call(this.frame_65).wait(1));

	// Back
	this.Back2 = new lib.Back2();
	this.Back2.parent = this;
	this.Back2.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back2, 0, 1, 1);

	this.Back3 = new lib.Back3();
	this.Back3.parent = this;
	this.Back3.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back3, 0, 1, 2, false, new lib.Back3(), 3);

	this.Back4 = new lib.Back4();
	this.Back4.parent = this;
	this.Back4.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back4, 0, 1, 2, false, new lib.Back4(), 3);

	this.Back5 = new lib.Back5();
	this.Back5.parent = this;
	this.Back5.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back5, 0, 1, 2, false, new lib.Back5(), 3);

	this.Back6 = new lib.Back6();
	this.Back6.parent = this;
	this.Back6.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back6, 0, 1, 2, false, new lib.Back6(), 3);

	this.Back7 = new lib.Back7();
	this.Back7.parent = this;
	this.Back7.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back7, 0, 1, 2, false, new lib.Back7(), 3);

	this.Back8 = new lib.Back8();
	this.Back8.parent = this;
	this.Back8.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back8, 0, 1, 2, false, new lib.Back8(), 3);

	this.Back9 = new lib.Back9();
	this.Back9.parent = this;
	this.Back9.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back9, 0, 1, 2, false, new lib.Back9(), 3);

	this.Back10 = new lib.Back10();
	this.Back10.parent = this;
	this.Back10.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back10, 0, 1, 2, false, new lib.Back10(), 3);

	this.Back11 = new lib.Back11();
	this.Back11.parent = this;
	this.Back11.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back11, 0, 1, 2, false, new lib.Back11(), 3);

	this.Back12 = new lib.Back12();
	this.Back12.parent = this;
	this.Back12.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back12, 0, 1, 2, false, new lib.Back12(), 3);

	this.Back13 = new lib.Back13();
	this.Back13.parent = this;
	this.Back13.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back13, 0, 1, 2, false, new lib.Back13(), 3);

	this.Back14 = new lib.Back14();
	this.Back14.parent = this;
	this.Back14.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back14, 0, 1, 2, false, new lib.Back14(), 3);

	this.Back15 = new lib.Back15();
	this.Back15.parent = this;
	this.Back15.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back15, 0, 1, 2, false, new lib.Back15(), 3);

	this.Back16 = new lib.Back16();
	this.Back16.parent = this;
	this.Back16.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back16, 0, 1, 2, false, new lib.Back16(), 3);

	this.Back17 = new lib.Back17();
	this.Back17.parent = this;
	this.Back17.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back17, 0, 1, 2, false, new lib.Back17(), 3);

	this.Back18 = new lib.Back18();
	this.Back18.parent = this;
	this.Back18.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back18, 0, 1, 2, false, new lib.Back18(), 3);

	this.Back19 = new lib.Back19();
	this.Back19.parent = this;
	this.Back19.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back19, 0, 1, 2, false, new lib.Back19(), 3);

	this.Back20 = new lib.Back20();
	this.Back20.parent = this;
	this.Back20.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back20, 0, 1, 2, false, new lib.Back20(), 3);

	this.Back21 = new lib.Back21();
	this.Back21.parent = this;
	this.Back21.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back21, 0, 1, 2, false, new lib.Back21(), 3);

	this.Back22 = new lib.Back22();
	this.Back22.parent = this;
	this.Back22.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back22, 0, 1, 2, false, new lib.Back22(), 3);

	this.Back23 = new lib.Back23();
	this.Back23.parent = this;
	this.Back23.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back23, 0, 1, 2, false, new lib.Back23(), 3);

	this.Back24 = new lib.Back24();
	this.Back24.parent = this;
	this.Back24.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back24, 0, 1, 2, false, new lib.Back24(), 3);

	this.Back25 = new lib.Back25();
	this.Back25.parent = this;
	this.Back25.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back25, 0, 1, 2, false, new lib.Back25(), 3);

	this.Back26 = new lib.Back26();
	this.Back26.parent = this;
	this.Back26.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back26, 0, 1, 2, false, new lib.Back26(), 3);

	this.Back27 = new lib.Back27();
	this.Back27.parent = this;
	this.Back27.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back27, 0, 1, 2, false, new lib.Back27(), 3);

	this.Back28 = new lib.Back28();
	this.Back28.parent = this;
	this.Back28.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back28, 0, 1, 2, false, new lib.Back28(), 3);

	this.Back29 = new lib.Back29();
	this.Back29.parent = this;
	this.Back29.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back29, 0, 1, 2, false, new lib.Back29(), 3);

	this.Back30 = new lib.Back30();
	this.Back30.parent = this;
	this.Back30.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back30, 0, 1, 2, false, new lib.Back30(), 3);

	this.Back31 = new lib.Back31();
	this.Back31.parent = this;
	this.Back31.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back31, 0, 1, 2, false, new lib.Back31(), 3);

	this.Back32 = new lib.Back32();
	this.Back32.parent = this;
	this.Back32.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back32, 0, 1, 2, false, new lib.Back32(), 3);

	this.Back33 = new lib.Back33();
	this.Back33.parent = this;
	this.Back33.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back33, 0, 1, 2, false, new lib.Back33(), 3);

	this.Back34 = new lib.Back34();
	this.Back34.parent = this;
	this.Back34.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back34, 0, 1, 2, false, new lib.Back34(), 3);

	this.Back35 = new lib.Back35();
	this.Back35.parent = this;
	this.Back35.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back35, 0, 1, 2, false, new lib.Back35(), 3);

	this.Back36 = new lib.Back36();
	this.Back36.parent = this;
	this.Back36.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back36, 0, 1, 2, false, new lib.Back36(), 3);

	this.Back37 = new lib.Back37();
	this.Back37.parent = this;
	this.Back37.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back37, 0, 1, 2, false, new lib.Back37(), 3);

	this.Back38 = new lib.Back38();
	this.Back38.parent = this;
	this.Back38.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back38, 0, 1, 2, false, new lib.Back38(), 3);

	this.Back39 = new lib.Back39();
	this.Back39.parent = this;
	this.Back39.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back39, 0, 1, 2, false, new lib.Back39(), 3);

	this.Back40 = new lib.Back40();
	this.Back40.parent = this;
	this.Back40.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back40, 0, 1, 2, false, new lib.Back40(), 3);

	this.Back41 = new lib.Back41();
	this.Back41.parent = this;
	this.Back41.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back41, 0, 1, 2, false, new lib.Back41(), 3);

	this.Back42 = new lib.Back42();
	this.Back42.parent = this;
	this.Back42.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back42, 0, 1, 2, false, new lib.Back42(), 3);

	this.Back43 = new lib.Back43();
	this.Back43.parent = this;
	this.Back43.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back43, 0, 1, 2, false, new lib.Back43(), 3);

	this.Back44 = new lib.Back44();
	this.Back44.parent = this;
	this.Back44.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back44, 0, 1, 2, false, new lib.Back44(), 3);

	this.Back45 = new lib.Back45();
	this.Back45.parent = this;
	this.Back45.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back45, 0, 1, 2, false, new lib.Back45(), 3);

	this.Back46 = new lib.Back46();
	this.Back46.parent = this;
	this.Back46.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back46, 0, 1, 2, false, new lib.Back46(), 3);

	this.Back47 = new lib.Back47();
	this.Back47.parent = this;
	this.Back47.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back47, 0, 1, 2, false, new lib.Back47(), 3);

	this.Back48 = new lib.Back48();
	this.Back48.parent = this;
	this.Back48.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back48, 0, 1, 2, false, new lib.Back48(), 3);

	this.Back49 = new lib.Back49();
	this.Back49.parent = this;
	this.Back49.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back49, 0, 1, 2, false, new lib.Back49(), 3);

	this.Back50 = new lib.Back50();
	this.Back50.parent = this;
	this.Back50.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back50, 0, 1, 2, false, new lib.Back50(), 3);

	this.Back51 = new lib.Back51();
	this.Back51.parent = this;
	this.Back51.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back51, 0, 1, 2, false, new lib.Back51(), 3);

	this.Back52 = new lib.Back52();
	this.Back52.parent = this;
	this.Back52.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back52, 0, 1, 2, false, new lib.Back52(), 3);

	this.Back53 = new lib.Back53();
	this.Back53.parent = this;
	this.Back53.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back53, 0, 1, 2, false, new lib.Back53(), 3);

	this.Back54 = new lib.Back54();
	this.Back54.parent = this;
	this.Back54.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back54, 0, 1, 2, false, new lib.Back54(), 3);

	this.Back55 = new lib.Back55();
	this.Back55.parent = this;
	this.Back55.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back55, 0, 1, 2, false, new lib.Back55(), 3);

	this.Back56 = new lib.Back56();
	this.Back56.parent = this;
	this.Back56.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back56, 0, 1, 2, false, new lib.Back56(), 3);

	this.Back57 = new lib.Back57();
	this.Back57.parent = this;
	this.Back57.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back57, 0, 1, 2, false, new lib.Back57(), 3);

	this.Back58 = new lib.Back58();
	this.Back58.parent = this;
	this.Back58.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back58, 0, 1, 2, false, new lib.Back58(), 3);

	this.Back59 = new lib.Back59();
	this.Back59.parent = this;
	this.Back59.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back59, 0, 1, 2, false, new lib.Back59(), 3);

	this.Back60 = new lib.Back60();
	this.Back60.parent = this;
	this.Back60.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back60, 0, 1, 2, false, new lib.Back60(), 3);

	this.Back61 = new lib.Back61();
	this.Back61.parent = this;
	this.Back61.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back61, 0, 1, 2, false, new lib.Back61(), 3);

	this.Back62 = new lib.Back62();
	this.Back62.parent = this;
	this.Back62.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back62, 0, 1, 2, false, new lib.Back62(), 3);

	this.Back63 = new lib.Back63();
	this.Back63.parent = this;
	this.Back63.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back63, 0, 1, 2, false, new lib.Back63(), 3);

	this.Back64 = new lib.Back64();
	this.Back64.parent = this;
	this.Back64.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back64, 0, 1, 2, false, new lib.Back64(), 3);

	this.Back65 = new lib.Back65();
	this.Back65.parent = this;
	this.Back65.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back65, 0, 1, 2, false, new lib.Back65(), 3);

	this.Back66 = new lib.Back66();
	this.Back66.parent = this;
	this.Back66.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back66, 0, 1, 2, false, new lib.Back66(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Back2}]},1).to({state:[{t:this.Back3}]},1).to({state:[{t:this.Back4}]},1).to({state:[{t:this.Back5}]},1).to({state:[{t:this.Back6}]},1).to({state:[{t:this.Back7}]},1).to({state:[{t:this.Back8}]},1).to({state:[{t:this.Back9}]},1).to({state:[{t:this.Back10}]},1).to({state:[{t:this.Back11}]},1).to({state:[{t:this.Back12}]},1).to({state:[{t:this.Back13}]},1).to({state:[{t:this.Back14}]},1).to({state:[{t:this.Back15}]},1).to({state:[{t:this.Back16}]},1).to({state:[{t:this.Back17}]},1).to({state:[{t:this.Back18}]},1).to({state:[{t:this.Back19}]},1).to({state:[{t:this.Back20}]},1).to({state:[{t:this.Back21}]},1).to({state:[{t:this.Back22}]},1).to({state:[{t:this.Back23}]},1).to({state:[{t:this.Back24}]},1).to({state:[{t:this.Back25}]},1).to({state:[{t:this.Back26}]},1).to({state:[{t:this.Back27}]},1).to({state:[{t:this.Back28}]},1).to({state:[{t:this.Back29}]},1).to({state:[{t:this.Back30}]},1).to({state:[{t:this.Back31}]},1).to({state:[{t:this.Back32}]},1).to({state:[{t:this.Back33}]},1).to({state:[{t:this.Back34}]},1).to({state:[{t:this.Back35}]},1).to({state:[{t:this.Back36}]},1).to({state:[{t:this.Back37}]},1).to({state:[{t:this.Back38}]},1).to({state:[{t:this.Back39}]},1).to({state:[{t:this.Back40}]},1).to({state:[{t:this.Back41}]},1).to({state:[{t:this.Back42}]},1).to({state:[{t:this.Back43}]},1).to({state:[{t:this.Back44}]},1).to({state:[{t:this.Back45}]},1).to({state:[{t:this.Back46}]},1).to({state:[{t:this.Back47}]},1).to({state:[{t:this.Back48}]},1).to({state:[{t:this.Back49}]},1).to({state:[{t:this.Back50}]},1).to({state:[{t:this.Back51}]},1).to({state:[{t:this.Back52}]},1).to({state:[{t:this.Back53}]},1).to({state:[{t:this.Back54}]},1).to({state:[{t:this.Back55}]},1).to({state:[{t:this.Back56}]},1).to({state:[{t:this.Back57}]},1).to({state:[{t:this.Back58}]},1).to({state:[{t:this.Back59}]},1).to({state:[{t:this.Back60}]},1).to({state:[{t:this.Back61}]},1).to({state:[{t:this.Back62}]},1).to({state:[{t:this.Back63}]},1).to({state:[{t:this.Back64}]},1).to({state:[{t:this.Back65}]},1).to({state:[{t:this.Back66}]},1).wait(1));

	// menu
	this.MenuCC = new lib.MenuCC();
	this.MenuCC.parent = this;
	this.MenuCC.setTransform(321,820.9);
	new cjs.ButtonHelper(this.MenuCC, 0, 1, 2, false, new lib.MenuCC(), 3);

	this.MenuPlot = new lib.MenuPlot();
	this.MenuPlot.parent = this;
	this.MenuPlot.setTransform(321.5,756.9);
	new cjs.ButtonHelper(this.MenuPlot, 0, 1, 2, false, new lib.MenuPlot(), 3);

	this.MenuEval = new lib.MenuEval();
	this.MenuEval.parent = this;
	this.MenuEval.setTransform(322.5,693);
	new cjs.ButtonHelper(this.MenuEval, 0, 1, 2, false, new lib.MenuEval(), 3);

	this.MenuClose = new lib.MenuClose();
	this.MenuClose.parent = this;
	this.MenuClose.setTransform(323.5,443.4,1.022,1);
	new cjs.ButtonHelper(this.MenuClose, 0, 1, 1);

	this.MenuRI = new lib.MenuRI();
	this.MenuRI.parent = this;
	this.MenuRI.setTransform(322.5,629.6);
	new cjs.ButtonHelper(this.MenuRI, 0, 1, 1);

	this.MenuHome = new lib.MenuHome();
	this.MenuHome.parent = this;
	this.MenuHome.setTransform(322.5,503.4);
	new cjs.ButtonHelper(this.MenuHome, 0, 1, 1);

	this.MenuTO = new lib.MenuTO();
	this.MenuTO.parent = this;
	this.MenuTO.setTransform(363,574.3);
	new cjs.ButtonHelper(this.MenuTO, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot},{t:this.MenuCC}]}).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot},{t:this.MenuCC}]},6).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot},{t:this.MenuCC}]},10).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot},{t:this.MenuCC}]},4).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot},{t:this.MenuCC}]},30).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot},{t:this.MenuCC}]},7).wait(9));

	// iphoneFrame
	this.Menu = new lib.homebutton();
	this.Menu.parent = this;
	this.Menu.setTransform(389.5,986.4);
	new cjs.ButtonHelper(this.Menu, 0, 1, 1);

	this.instance = new lib.ipadclipartpng14transparent();
	this.instance.parent = this;
	this.instance.setTransform(1,85,0.433,0.391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.Menu}]}).to({state:[{t:this.instance}]},65).wait(1));

	// text
	this.text = new cjs.Text("This is your EMR home page! Lets start by navigating to a patient. Choose \"Select a Patient\"", "20px 'Times'", "#0C99C7");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 703;
	this.text.parent = this;
	this.text.setTransform(369.5,49.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.NewProject22, null, new cjs.Matrix2D(1,0,0,1,-722.4,-705.6)).s().p("ArnA5IADgEIANgHIAMgIIAPgIIAjgHIAMgFIAbgEIAOgBIAMgFIAtgFIAPgEIAmgDIATgEIAagFIATgDIANgCIAKgDIBBgDIAMgCIAKgCIALgDICxgDIAUgFIAmgFIAOgCIAIgDIAKgCIBWgEQATgBASgDIAOgCIAxgDIAZgDIANgCQAGABAGgCIABgBIBkAAIAMACQATADASAAQBLAEBLABIANACIAMADIAkACICYAFIALAFIABABIAUAEIAKAIIADAHIAAAIIgFAIIgGAEIgHADIgZgDIgKgEIh4gEIgtgCIgOgCIgNgCQhLgChLgDQgTAAgSgDIgNgCIh9AAIgMACIgOACIgYACIgyAEIgNACQgSADgTABIhcAGIgWAFIglAEIgVAFIi0ACIgKADIgHADIgNACIhDACIgNADIgZAFIgYAFIgaAEIgoAGIgMAFIglAFIgNAFIgmAFIgMAFIgUAEQgZgIghgHg");
	this.shape.setTransform(297.4,402.2);

	this.instance_1 = new lib.NewProject22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(696.2,504,0.384,0.218,0,0,180);

	this.text_1 = new cjs.Text("The Objective section should summarize any objective measures you have taken note of.  \n\nYour Assessment will use these objective measures to assess what the plan for the patient should be.  ", "18px 'Times'", "#0C99C7");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 688;
	this.text_1.parent = this;
	this.text_1.setTransform(367.9,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text_1,p:{x:367.9,y:12.6,text:"The Objective section should summarize any objective measures you have taken note of.  \n\nYour Assessment will use these objective measures to assess what the plan for the patient should be.  ",lineWidth:688}},{t:this.instance_1,p:{scaleX:0.384,scaleY:0.218,skewY:180,x:696.2,y:504}},{t:this.text}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.304,scaleY:0.239,skewY:0,x:37,y:226}},{t:this.text_1,p:{x:367.2,y:7.6,text:"Once you've filled out the plan and any other sections of the note that apply to the patient, you are done with the SOAP portion of the Evaluation! \n\nPress 'Next' to access the next page.",lineWidth:705}},{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[]},1).to({state:[{t:this.text}]},2).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:0.86,x:368,y:51.6,text:"Choose patient John Doe from your active patient list",font:"24px 'Times'",lineHeight:26,lineWidth:822},0).wait(1).to({scaleX:1,x:368.3,y:55.1,text:"Finally, click 'Retrieve' to open the patient's record",lineWidth:704},0).wait(1).to({x:369.2,y:27.5,text:"This is the patient record! The top section includes the patient contact information"},0).wait(1).to({x:367.7,y:35.5,text:"Uploaded documents have additional contact information, as well as the medical history of the patient. Go ahead and open this patient's H&P.",font:"20px 'Times'",lineHeight:22,lineWidth:703},0).wait(1).to({x:369.2,y:36.1,text:"Uploaded documents will differ, depending on the agency. But all should have the medical history, insurance, MD, and alternative contact information. ",lineWidth:706},0).wait(1).to({x:368.3,y:39,text:"Now that we have the patient's contact information, lets give the patient a call and put in a Scheduling Therapy Order with the date they want to be seen.  ",lineWidth:702},0).wait(1).to({x:367.3,y:38.6,text:"Choose 'Other Forms' to open communication notes, therapy orders, and case conference templates.",lineWidth:703},0).wait(1).to({x:368.3,y:47.6,text:"Select 'Form Type to' bring up the note template options. ",lineWidth:699},0).wait(1).to({x:367.7,y:51,text:"Choose Therapy Order",lineWidth:703},0).wait(1).to({x:368.3,y:56.6,text:"Finally, press 'Confirm' to begin a therapy order! ",lineWidth:701},0).wait(1).to({x:367.8,y:4,text:"The Scheduling Therapy Order should be formatted as:\n\n'Spoke with (relationship) (name) to schedule (discipline) Evaluation for (date). (reason why family may have delayed Eval, if applicable).'",lineWidth:705},0).wait(1).to({x:366.8,y:31,text:"Every communication note, therapy order, visit note, or case conference must be signed by you.  Click 'next' below to continue. ",lineWidth:703},0).wait(1).to({x:369.5,y:29.6,text:"Every communication note, therapy order, visit note, or case conference must be dated by you. Click 'next' below to continue. ",lineWidth:699},0).wait(1).to({x:367.8,y:32.6,text:"This page gives you a chance to review what you have written.  If everything looks good, press 'Finalize' to submit! "},0).wait(1).to({y:3,text:"Okay, now that you've scheduled your Evaluation with the family, lets fast forward to 4/23/19 start the visit! \n\nClick 'My Referrals' above to access your referral inbox.",lineWidth:703},0).wait(1).to({x:366.2,y:15.7,text:"Here you can see a list of your new patients.  \n\nPress 'Select Action' under John Doe to bring up a list of actions. "},0).wait(1).to({x:370.2,y:46,text:"Now, lets choose 'Eval' from the list to bring up the Evaluation page. ",lineWidth:695},0).wait(1).to({x:367.1,y:19.8,text:"This gives you a quick snapshot of the patient. \n\nChoose Proceed to Eval. ",lineWidth:697},0).wait(1).to({x:367.4,y:27.9,text:"You don't need to fill anything in here, just double check the date and visit type. \n\nPress 'Proceed'! ",lineWidth:693},0).wait(1).to({x:369.1,y:16.8,text:"You are now in the Evaluation! Most of the patient information will be pre-filled by Intake. \nAt any time in the real Evaluation you can press 'Save & Exit' below. "},0).wait(1).to({x:365.9,y:31.8,text:"Every note must have a subjective.  Write how the patient and/or family members feel to give important insight in to their psychosocial state and goals for therapy. ",lineWidth:696},0).wait(1).to({x:367.9,y:17.8,text:"Every note must have heart rate, blood pressure, respirations, and temperature.  \n\nIf you do not already have your equipment, please start ordering it! "},0).wait(1).to({x:368.9,y:37.7,text:"Lets not forget the pain vital! Pain must be addressed at every visit. Go ahead and mark that John Doe is experiencing pain. ",lineWidth:702},0).wait(1).to({x:362.9,y:53.1,text:"Yes to pain. ",lineWidth:698},0).wait(1).to({x:374.6,y:35.7,text:"Great job! Now options for filling the patients pain levels have populated.  If a patient has pain, you should fill these in, but for now we are going to skip them. ",lineWidth:674},0).wait(1).to({x:367.9,y:19.7,text:"For the Evaluation, you should fill out details of the patient's living situation, especially as they may relate to the plan of care (e.g. a patient with 3 steps to the kitchen may have a goal to safely go up and down 3 steps to complete ADLs)",lineWidth:708},0).wait(1).to({x:365.9,y:24.6,text:"It's appropriate to have a test to include as an objective measure (and goal) for each Evaluation.  Lets put in a Tinetti for John. ",lineWidth:696},0).wait(1).to({x:366.9,y:29.6,text:"The test gives you easy dropdowns to select from for scoring.  Once you're done with each question, you just press 'Submit' and the system scores it for you! \nGo ahead and press 'submit.' We've filled in some answers for you. ",font:"18px 'Times'",lineHeight:20,lineWidth:706},0).wait(1).to({y:10.6,text:"Now we know that John has only scored a 9/28. Maybe we'll make a goal for him to improve his score to a reasonable 18/28 by discharge.  \n\nThat should allow him to be more independent. ",lineWidth:702},0).wait(1).to({x:369.9,y:2,text:"For the sake of time, we're really only focusing on the vitals, SOAP, goals, and verbal orders.  \n\nBut any sections that apply to your patient should be filled out with the checkboxes, fill in the blanks, etc. to provide enough objective measures and details. ",lineWidth:704},0).wait(1).to({x:366.2,y:14,text:"The Objective section should summarize any objective measures you have taken note of.  \n\nYour Assessment will use these objective measures to assess what the plan for the patient should be.  ",lineWidth:695},0).wait(1).to({x:525.6,y:544,text:"Tip: 'Patient tolerated treatment' isn't enough for an assessment! ",font:"20px 'Times'",color:"#FFFFFF",lineHeight:22,lineWidth:256},0).wait(1).to({x:166.1,y:250.6,text:"Tip: The dropdown menu (where it says 'PT Evaluation') allows you to quickly jump around the note. ",font:"18px 'Times'",lineHeight:20,lineWidth:205},0).wait(1).to({x:370.9,y:2,text:"You can either write your own exercises in to the 'additional information' box or pull up exercises in the system library.\n\nLets add a heel raise exercise.  Start by selecting the body area. ",color:"#0C99C7",lineWidth:694},0).wait(1).to({x:366.9,y:53.9,text:"Now choose 'ankle/foot' to pull up a list of ankle and foot exercises. ",lineWidth:686},0).wait(1).to({x:370.2,y:43,text:"We'll have to scroll down to find this one. ",lineWidth:679},0).wait(1).to({x:365.5,y:46.9,text:"Click the heel raises exercise to add it.",lineWidth:699},0).wait(1).to({x:363.5,y:28.9,text:"Great job!\nLet's move on to the goals on the next page. ",font:"24px 'Times'",lineHeight:26,lineWidth:709},0).wait(1).to({x:369.5,y:22,text:"Goals are organized by category, with templates in each section. \n\nWe wanted to improve Mr. Doe's Tinetti from 9 to 18 by discharge, so let's open up 'Balance'.  ",font:"18px 'Times'",lineHeight:20,lineWidth:699},0).wait(1).to({x:368.2,y:34.9,text:"See tinetti down at the bottom? We just need to check the box (indicating we are adding the goal to the care plan) and fill in the blanks.  ",lineWidth:693},0).wait(1).to({x:368,y:44,text:"There! Now we have a goal for Mr. Doe. Let's move on. ",font:"24px 'Times'",lineHeight:26,lineWidth:698},0).wait(1).to({x:366.3,y:31,text:"Go ahead and skip this calendar. It's only purpose is planning out your frequency.",lineWidth:701},0).wait(1).to({x:368.3,y:14.8,text:"Every in-person visit needs a patient or POA signature. \n\nIf you lose signal, please obtain this on paper. ",font:"20px 'Times'",lineHeight:22},0).wait(1).to({x:364,y:48.8,text:"Your signature is also needed. ",font:"24px 'Times'",lineHeight:26,lineWidth:696},0).wait(1).to({x:366,y:31.8,text:"And of course the date (which should match the Evaluation date) ",lineWidth:692},0).wait(1).to({x:369.3,y:16.8,text:"Double check the time in and time out. Make any corrections. \n\nKeep in mind, the note time starts when you open the visit up.  ",font:"20px 'Times'",lineHeight:22,lineWidth:697},0).wait(1).to({x:368,y:11.8,text:"Finally, we need the verbal orders! \nPer CMS guidelines, you will need to write who you spoke to at the PCP's office, when you spoke to them, and why.  ",lineWidth:698},0).wait(1).to({x:369.2,y:20,text:"Since it's a Monday, the frequency called in was for 2 visits the first week. \n\nTypically from M-W it's best to put in at least 2 visits to minimize gaps in care. ",lineWidth:697},0).wait(1).to({x:365.2,y:2,text:"Done! Before Finalizing a note, the system gives you an option to review.\nWe only added a Tinetti goal and should really go back in and put some others, though. \n\nSo let's press Save & Exit instead of Finalize.  ",font:"18px 'Times'",lineHeight:20,lineWidth:703},0).wait(1).to({x:369,y:6.5,text:"Now your Evaluation is on the patient's record! You can come back and finalize it later.\nNow, let's plot out your frequency and visits. \n\nTo do this, head back to 'My Referrals'",lineWidth:704},0).wait(1).to({x:366.7,y:43,text:"From John Doe's actions, you will select 'Keep'    ",font:"24px 'Times'",lineHeight:26},0).wait(1).to({x:367,lineWidth:706},0).wait(1).to({x:369.5,y:35,text:"This is where you plot the frequency and visits. From the side bar, you will select 2w3 and then 1w1.   ",lineWidth:705},0).wait(1).to({x:370.5,y:7.1,text:"Great! Now we plot out a rough schedule. \nJohn definitely wanted to be seen on Friday after the eval, but from that point onwards, there is nothing set in stone. \nLets just plot a consistent schedule for now. These can always be moved within the week. ",font:"18px 'Times'",lineHeight:20,lineWidth:703},0).wait(1).to({x:367,y:2,text:"While plotting, the system won't let us plot past 5 visits and the message below appeared.\n\"You are currenttly at the max number of visits authorized.\"\nNon-Medicare patients have authorizations, so you can only plot the 5 auth'd visits until the rest are approved. \n\nGo ahead and press 'Continue'",font:"16px 'Times'",lineHeight:18,lineWidth:706},0).wait(1).to({x:368,y:36.4,text:"All of the visits are standard visits since you can't yet plot your discharge, so go ahead and press confirm. ",font:"20px 'Times'",lineHeight:22},0).wait(1).to({x:367.3,y:15.4,text:"The system takes you back to the patient's record where you can see all plotted visits. \n\nEvery patient needs a Case Conference, so lets put one in. Press 'Other Forms'. ",lineWidth:700},0).to({_off:true},1).wait(2).to({_off:false,x:370.3,y:2,text:"A Case Conference is the Progress and Plan for the patient. You've already typed this up in your Eval, so there's no need to re-write it. Let's just copy & paste from the Eval.\n \nSelect 'View Past Notes' "},0).wait(1).to({x:369.8,y:45.3,text:"Choose 'show paperwork' to open the Evaluation Notes",font:"24px 'Times'",lineHeight:26,lineWidth:699},0).wait(1).to({x:366.3,y:52.4,text:"Copy your assessment and paste it in to 'Progress'",lineWidth:698},0).wait(1).to({x:365.8,y:54.4,text:"Copy your verbal order and paste it in to 'Plan'",lineWidth:697},0).wait(1).to({x:368.3,y:34.3,text:"Easy! Done! \nThe rest you know. Sign, date, and Finalize. ",lineWidth:700},0).wait(2));

	// Arrows
	this.instance_2 = new lib.NewProject26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(230,377,0.207,0.184,180);

	this.instance_3 = new lib.NewProject26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(342,587,0.207,0.184,180);

	this.instance_4 = new lib.NewProject26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(470,394,0.207,0.184,180);

	this.instance_5 = new lib.NewProject26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(460,345,0.207,0.184,180);

	this.instance_6 = new lib.NewProject26();
	this.instance_6.parent = this;
	this.instance_6.setTransform(482,780,0.207,0.184,180);

	this.instance_7 = new lib.NewProject26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(317,780,0.207,0.184,180);

	this.instance_8 = new lib.NewProject26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(622,711,0.207,0.184,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{x:342,y:587}},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_5,p:{x:460,y:345}},{t:this.instance_4,p:{x:470,y:394}},{t:this.instance_3,p:{x:432,y:437}},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_5,p:{x:206,y:702}},{t:this.instance_4,p:{x:206,y:779}},{t:this.instance_3,p:{x:206,y:844}},{t:this.instance_2}]},1).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:317,y:846}},{t:this.instance_4,p:{x:482,y:841}},{t:this.instance_3,p:{x:317,y:925}},{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{x:451,y:403}},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:287,y:445},0).wait(1).to({rotation:0,skewX:180,x:529,y:378},0).wait(1).to({rotation:180,skewX:0,x:374,y:544},0).wait(1).to({x:237,y:433},0).wait(1).to({x:203,y:587},0).to({_off:true},1).wait(1).to({_off:false,x:375,y:787},0).wait(1).to({x:508,y:582},0).wait(1).to({x:456,y:634},0).wait(1).to({rotation:0,skewX:180,x:220,y:636},0).wait(1).to({x:565,y:943},0).wait(1).to({x:573},0).wait(2).to({x:551,y:944},0).wait(1).to({x:121,y:230},0).wait(1).to({rotation:180,skewX:0,x:244,y:642},0).wait(1).to({x:196,y:677},0).wait(1).to({rotation:0,skewX:90,skewY:-90,x:657,y:314},0).wait(1).to({rotation:90,skewX:0,skewY:0,x:627,y:661},0).to({_off:true},1).wait(1).to({_off:false,rotation:180,x:221,y:471},0).wait(1).to({x:425,y:514},0).wait(1).to({x:399,y:402},0).wait(1).to({x:318,y:422},0).to({_off:true},1).wait(1).to({_off:false,x:435,y:447},0).wait(1).to({x:217,y:488},0).wait(1).to({rotation:0,skewX:180,x:501,y:864},0).to({_off:true},1).wait(2).to({_off:false,rotation:180,skewX:0,x:228,y:260},0).wait(1).to({x:355,y:327},0).wait(1).to({rotation:0,skewX:180,x:567,y:943},0).wait(1).to({x:246,y:672},0).wait(1).to({rotation:180,skewX:0,x:444,y:688},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,skewX:180,x:350,y:811},0).wait(1).to({x:567,y:943},0).wait(1).to({rotation:180,skewX:0,x:233,y:619},0).wait(1).to({rotation:0,skewX:-90,skewY:90,x:291,y:730},0).to({_off:true},1).wait(1).to({_off:false,skewX:-180,skewY:0,x:567,y:944},0).wait(7).to({skewX:-90,skewY:90,x:74,y:850},0).wait(1).to({skewX:-180,skewY:0,x:123,y:230},0).wait(1).to({skewX:0,skewY:180,x:226,y:601},0).wait(1).to({x:239,y:684},0).wait(1).to({rotation:180,skewY:0,x:206,y:920},0).wait(1).to({rotation:270,x:571,y:419},0).wait(1).to({x:606,y:411},0).wait(1).to({rotation:360,skewX:180,x:222,y:849},0).wait(1).to({rotation:180,skewX:0,x:372,y:503},0).wait(1).to({x:515,y:584},0).wait(1).to({x:468,y:667},0).wait(1).to({rotation:90,x:213,y:850},0).wait(1).to({rotation:0,skewY:180,x:575,y:621},0).wait(1).to({x:553,y:734},0).wait(1).to({skewY:0,x:339,y:893},0).to({_off:true},1).wait(2));

	// actionsbuttonsandbg
	this.Selectapatient1 = new lib.Selectapatient();
	this.Selectapatient1.parent = this;
	this.Selectapatient1.setTransform(326.5,350.4,1.027,1);
	new cjs.ButtonHelper(this.Selectapatient1, 0, 1, 2);

	this.instance_9 = new lib.ScreenShot20190426at112639AM();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,600);

	this.Doe = new lib.Doe();
	this.Doe.parent = this;
	this.Doe.setTransform(256.6,422.6,1.022,1);
	new cjs.ButtonHelper(this.Doe, 0, 1, 1);

	this.instance_10 = new lib.Bitmap52();
	this.instance_10.parent = this;
	this.instance_10.setTransform(46,185,1.022,1);

	this.instance_11 = new lib.ScreenShot20190426at20710PM();
	this.instance_11.parent = this;
	this.instance_11.setTransform(67,338);

	this.retrieve1 = new lib.Retrive();
	this.retrieve1.parent = this;
	this.retrieve1.setTransform(635,358);
	new cjs.ButtonHelper(this.retrieve1, 0, 1, 1);

	this.instance_12 = new lib.ScreenShot20190425at82326AM();
	this.instance_12.parent = this;
	this.instance_12.setTransform(50,186,1.022,1);

	this.instance_13 = new lib.ScreenShot20190422at32710PM();
	this.instance_13.parent = this;
	this.instance_13.setTransform(67,860);

	this.Scrolldown1 = new lib.ScrollDown();
	this.Scrolldown1.parent = this;
	this.Scrolldown1.setTransform(585,910.6);
	new cjs.ButtonHelper(this.Scrolldown1, 0, 1, 1);

	this.instance_14 = new lib.ScreenShot20190422at74532AMpngcopy();
	this.instance_14.parent = this;
	this.instance_14.setTransform(47,185);

	this.Scrolly = new lib.HP();
	this.Scrolly.parent = this;
	this.Scrolly.setTransform(129.5,409);
	new cjs.ButtonHelper(this.Scrolly, 0, 1, 1);

	this.instance_15 = new lib.ScreenShot20190422at75450AM();
	this.instance_15.parent = this;
	this.instance_15.setTransform(49,388);

	this.instance_16 = new lib.ScreenShot20190422at75123AM();
	this.instance_16.parent = this;
	this.instance_16.setTransform(46,186);

	this.Return1 = new lib.Return();
	this.Return1.parent = this;
	this.Return1.setTransform(596,913.5,1,1,0,0,0,23.5,-3);
	new cjs.ButtonHelper(this.Return1, 0, 1, 1);

	this.instance_17 = new lib.ScreenShot20190422at75854AM();
	this.instance_17.parent = this;
	this.instance_17.setTransform(49,185);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AmykDINlAAIAAIHItlAAg");
	this.shape_1.setTransform(102,552.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmyEEIAAoHINlAAIAAIHg");
	this.shape_2.setTransform(102,552.5);

	this.nextblue = new lib.Scroll();
	this.nextblue.parent = this;
	this.nextblue.setTransform(583,910.5);
	new cjs.ButtonHelper(this.nextblue, 0, 1, 1);

	this.otherformbutton1 = new lib.otherformbutton1();
	this.otherformbutton1.parent = this;
	this.otherformbutton1.setTransform(256.5,765.8);
	new cjs.ButtonHelper(this.otherformbutton1, 0, 1, 1);

	this.instance_18 = new lib.ScreenShot20190422at80722AM();
	this.instance_18.parent = this;
	this.instance_18.setTransform(49,184);

	this.Selectform = new lib.Selectform();
	this.Selectform.parent = this;
	this.Selectform.setTransform(350.5,559.9);
	new cjs.ButtonHelper(this.Selectform, 0, 1, 1);

	this.instance_19 = new lib.ScreenShot20190422at81131AM();
	this.instance_19.parent = this;
	this.instance_19.setTransform(50,185);

	this.TO = new lib.TherapyOrder();
	this.TO.parent = this;
	this.TO.setTransform(335.9,612.9);
	new cjs.ButtonHelper(this.TO, 0, 1, 2, false, new lib.TherapyOrder(), 3);

	this.instance_20 = new lib.ScreenShot20190422at81402AM();
	this.instance_20.parent = this;
	this.instance_20.setTransform(51,185);

	this.Confirm1 = new lib.Confirm1();
	this.Confirm1.parent = this;
	this.Confirm1.setTransform(322,618.5);
	new cjs.ButtonHelper(this.Confirm1, 0, 1, 1);

	this.instance_21 = new lib.ScreenShot20190422at81814AM();
	this.instance_21.parent = this;
	this.instance_21.setTransform(50,186);

	this.nextall = new lib.nextall();
	this.nextall.parent = this;
	this.nextall.setTransform(658.5,923.4);
	new cjs.ButtonHelper(this.nextall, 0, 1, 2, false, new lib.nextall(), 3);

	this.SchedulingTOText = new lib.an_TextInput({'id': 'SchedulingTOText', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.SchedulingTOText.setTransform(368.7,662,6.034,3.353,0,0,0,50.1,11.1);

	this.instance_22 = new lib.ScreenShot20190422at82200AM();
	this.instance_22.parent = this;
	this.instance_22.setTransform(49,186,0.979,1);

	this.next2 = new lib.next2();
	this.next2.parent = this;
	this.next2.setTransform(659.5,923.4);
	new cjs.ButtonHelper(this.next2, 0, 1, 2, false, new lib.next2(), 3);

	this.instance_23 = new lib.Signature();
	this.instance_23.parent = this;
	this.instance_23.setTransform(335,412);
	new cjs.ButtonHelper(this.instance_23, 0, 1, 2, false, new lib.Signature(), 3);

	this.instance_24 = new lib.ScreenShot20190425at102527AM();
	this.instance_24.parent = this;
	this.instance_24.setTransform(50,185,0.97,1);

	this.instance_25 = new lib.Signdate();
	this.instance_25.parent = this;
	this.instance_25.setTransform(380.5,397.1);
	new cjs.ButtonHelper(this.instance_25, 0, 1, 2, false, new lib.Signdate(), 3);

	this.next3 = new lib.next3();
	this.next3.parent = this;
	this.next3.setTransform(660.6,923.4);
	new cjs.ButtonHelper(this.next3, 0, 1, 2, false, new lib.next3(), 3);

	this.instance_26 = new lib.ScreenShot20190425at103738AM();
	this.instance_26.parent = this;
	this.instance_26.setTransform(50,185,0.976,1);

	this.finalize1 = new lib.Finalize();
	this.finalize1.parent = this;
	this.finalize1.setTransform(645.5,925);
	new cjs.ButtonHelper(this.finalize1, 0, 1, 1);

	this.instance_27 = new lib.ScreenShot20190425at122626PM();
	this.instance_27.parent = this;
	this.instance_27.setTransform(48,185,0.973,1);

	this.myreferrals1 = new lib.myreferrals1();
	this.myreferrals1.parent = this;
	this.myreferrals1.setTransform(171.5,186.5);
	new cjs.ButtonHelper(this.myreferrals1, 0, 1, 1);

	this.instance_28 = new lib.ScreenShot20190425at123118PM();
	this.instance_28.parent = this;
	this.instance_28.setTransform(47,185);

	this.selectaction1 = new lib.SelectAction();
	this.selectaction1.parent = this;
	this.selectaction1.setTransform(214,619,1,1,0,0,0,0,-2);
	new cjs.ButtonHelper(this.selectaction1, 0, 1, 2, false, new lib.SelectAction(), 3);

	this.instance_29 = new lib.ScreenShot20190425at123450PM();
	this.instance_29.parent = this;
	this.instance_29.setTransform(47,185);

	this.Eval1 = new lib.Eval();
	this.Eval1.parent = this;
	this.Eval1.setTransform(156.5,654);
	new cjs.ButtonHelper(this.Eval1, 0, 1, 2, false, new lib.Eval(), 3);

	this.instance_30 = new lib.ScreenShot20190425at124343PM();
	this.instance_30.parent = this;
	this.instance_30.setTransform(48,186);

	this.proceedtoeval1 = new lib.Proceedtoeval();
	this.proceedtoeval1.parent = this;
	this.proceedtoeval1.setTransform(636,227.6);
	new cjs.ButtonHelper(this.proceedtoeval1, 0, 1, 1);

	this.instance_31 = new lib.ScreenShot20190425at124546PM();
	this.instance_31.parent = this;
	this.instance_31.setTransform(49,184,0.973,1.019);

	this.proceed1 = new lib.Proceed1();
	this.proceed1.parent = this;
	this.proceed1.setTransform(604.5,741.5);
	new cjs.ButtonHelper(this.proceed1, 0, 1, 1);

	this.instance_32 = new lib.ScreenShot20190425at125322PM();
	this.instance_32.parent = this;
	this.instance_32.setTransform(49,185);

	this.nexteval1 = new lib.nexteval1();
	this.nexteval1.parent = this;
	this.nexteval1.setTransform(585,872.4);
	new cjs.ButtonHelper(this.nexteval1, 0, 1, 1);

	this.instance_33 = new lib.ScreenShot20190425at125610PM();
	this.instance_33.parent = this;
	this.instance_33.setTransform(49,186);

	this.nexteval2 = new lib.nexteval2();
	this.nexteval2.parent = this;
	this.nexteval2.setTransform(591,867);
	new cjs.ButtonHelper(this.nexteval2, 0, 1, 1);

	this.instance_34 = new lib.ScreenShot20190425at11727PM();
	this.instance_34.parent = this;
	this.instance_34.setTransform(49,187);

	this.nexteval3 = new lib.nexteval3();
	this.nexteval3.parent = this;
	this.nexteval3.setTransform(591,867);
	new cjs.ButtonHelper(this.nexteval3, 0, 1, 1);

	this.instance_35 = new lib.ScreenShot20190425at20221PM();
	this.instance_35.parent = this;
	this.instance_35.setTransform(49,188);

	this.painoption = new lib.Pain();
	this.painoption.parent = this;
	this.painoption.setTransform(271.5,380.5);
	new cjs.ButtonHelper(this.painoption, 0, 1, 1);

	this.instance_36 = new lib.ScreenShot20190425at20458PM();
	this.instance_36.parent = this;
	this.instance_36.setTransform(47,189);

	this.pain2 = new lib.PainYes();
	this.pain2.parent = this;
	this.pain2.setTransform(205.5,387.6);
	new cjs.ButtonHelper(this.pain2, 0, 1, 2, false, new lib.PainYes(), 3);

	this.instance_37 = new lib.ScreenShot20190425at21035PM();
	this.instance_37.parent = this;
	this.instance_37.setTransform(49,186);

	this.nexteval4 = new lib.nexteval4();
	this.nexteval4.parent = this;
	this.nexteval4.setTransform(591,867.4);
	new cjs.ButtonHelper(this.nexteval4, 0, 1, 1);

	this.instance_38 = new lib.ScreenShot20190425at21502PM();
	this.instance_38.parent = this;
	this.instance_38.setTransform(49,187);

	this.nexteval5 = new lib.nexteval5();
	this.nexteval5.parent = this;
	this.nexteval5.setTransform(590.5,866.9);
	new cjs.ButtonHelper(this.nexteval5, 0, 1, 1);

	this.instance_39 = new lib.ScreenShot20190425at21944PM();
	this.instance_39.parent = this;
	this.instance_39.setTransform(50,187);

	this.Tinetti1 = new lib.Tinetti();
	this.Tinetti1.parent = this;
	this.Tinetti1.setTransform(95.5,441);
	new cjs.ButtonHelper(this.Tinetti1, 0, 1, 1);

	this.instance_40 = new lib.ScreenShot20190425at22400PM();
	this.instance_40.parent = this;
	this.instance_40.setTransform(50,187);

	this.Submit1 = new lib.Submit1();
	this.Submit1.parent = this;
	this.Submit1.setTransform(555.5,825);
	new cjs.ButtonHelper(this.Submit1, 0, 1, 1);

	this.instance_41 = new lib.ScreenShot20190425at22729PM();
	this.instance_41.parent = this;
	this.instance_41.setTransform(49,186);

	this.nexteval6 = new lib.nexteval6();
	this.nexteval6.parent = this;
	this.nexteval6.setTransform(596.5,864.9);
	new cjs.ButtonHelper(this.nexteval6, 0, 1, 1);

	this.instance_42 = new lib.ScreenShot20190425at22958PM();
	this.instance_42.parent = this;
	this.instance_42.setTransform(49,187);

	this.nexteval18 = new lib.nexteval18();
	this.nexteval18.parent = this;
	this.nexteval18.setTransform(596.5,864.9);
	new cjs.ButtonHelper(this.nexteval18, 0, 1, 1);

	this.instance_43 = new lib.ScreenShot20190425at23356PM();
	this.instance_43.parent = this;
	this.instance_43.setTransform(49,187);

	this.nexteval7 = new lib.nexteval7();
	this.nexteval7.parent = this;
	this.nexteval7.setTransform(597,864.9);
	new cjs.ButtonHelper(this.nexteval7, 0, 1, 1);

	this.instance_44 = new lib.ScreenShot20190425at42427PM();
	this.instance_44.parent = this;
	this.instance_44.setTransform(49,188);

	this.nexteval8 = new lib.nexteval8();
	this.nexteval8.parent = this;
	this.nexteval8.setTransform(597.5,864.9);
	new cjs.ButtonHelper(this.nexteval8, 0, 1, 1);

	this.instance_45 = new lib.ScreenShot20190425at42932PM();
	this.instance_45.parent = this;
	this.instance_45.setTransform(51,186);

	this.NextOrder3 = new lib.NextOrder3();
	this.NextOrder3.parent = this;
	this.NextOrder3.setTransform(660.5,923.4);
	new cjs.ButtonHelper(this.NextOrder3, 0, 1, 2, false, new lib.NextOrder3(), 3);

	this.instance_46 = new lib.ScreenShot20190426at80327AM();
	this.instance_46.parent = this;
	this.instance_46.setTransform(50,179);

	this.Selectbody = new lib.SelectBodyArea();
	this.Selectbody.parent = this;
	this.Selectbody.setTransform(302.5,639.5);
	new cjs.ButtonHelper(this.Selectbody, 0, 1, 1);

	this.instance_47 = new lib.ScreenShot20190426at81207AM();
	this.instance_47.parent = this;
	this.instance_47.setTransform(48,186);

	this.anklefoot = new lib.Anklefoot();
	this.anklefoot.parent = this;
	this.anklefoot.setTransform(298.5,658.5);
	new cjs.ButtonHelper(this.anklefoot, 0, 1, 2, false, new lib.Anklefoot(), 3);

	this.instance_48 = new lib.ScreenShot20190426at81553AM();
	this.instance_48.parent = this;
	this.instance_48.setTransform(48,186);

	this.nexteval9 = new lib.nexteval9();
	this.nexteval9.parent = this;
	this.nexteval9.setTransform(582.5,869.9);
	new cjs.ButtonHelper(this.nexteval9, 0, 1, 1);

	this.instance_49 = new lib.ScreenShot20190426at81620AM();
	this.instance_49.parent = this;
	this.instance_49.setTransform(51,186);

	this.heelraise1 = new lib.heelraise();
	this.heelraise1.parent = this;
	this.heelraise1.setTransform(376,701.9);
	new cjs.ButtonHelper(this.heelraise1, 0, 1, 1);

	this.instance_50 = new lib.ScreenShot20190426at81659AM();
	this.instance_50.parent = this;
	this.instance_50.setTransform(48,186);

	this.NextOrder4 = new lib.NextOrder4();
	this.NextOrder4.parent = this;
	this.NextOrder4.setTransform(660.5,923.4);
	new cjs.ButtonHelper(this.NextOrder4, 0, 1, 2, false, new lib.NextOrder4(), 3);

	this.instance_51 = new lib.ScreenShot20190426at81720AM();
	this.instance_51.parent = this;
	this.instance_51.setTransform(49,186);

	this.balance1 = new lib.Balance();
	this.balance1.parent = this;
	this.balance1.setTransform(62.5,570.4);
	new cjs.ButtonHelper(this.balance1, 0, 1, 1);

	this.instance_52 = new lib.ScreenShot20190426at82814AM();
	this.instance_52.parent = this;
	this.instance_52.setTransform(49,186);

	this.nexteval10 = new lib.nexteval10();
	this.nexteval10.parent = this;
	this.nexteval10.setTransform(586.5,868.9);
	new cjs.ButtonHelper(this.nexteval10, 0, 1, 1);

	this.instance_53 = new lib.ScreenShot20190426at83227AM();
	this.instance_53.parent = this;
	this.instance_53.setTransform(50,186);

	this.NextOrder5 = new lib.NextOrder5();
	this.NextOrder5.parent = this;
	this.NextOrder5.setTransform(660.5,923.5);
	new cjs.ButtonHelper(this.NextOrder5, 0, 1, 2, false, new lib.NextOrder5(), 3);

	this.instance_54 = new lib.ScreenShot20190426at83737AM();
	this.instance_54.parent = this;
	this.instance_54.setTransform(50,185);

	this.NextOrder6 = new lib.NextOrder6();
	this.NextOrder6.parent = this;
	this.NextOrder6.setTransform(660.5,923.5);
	new cjs.ButtonHelper(this.NextOrder6, 0, 1, 2, false, new lib.NextOrder6(), 3);

	this.instance_55 = new lib.ScreenShot20190426at84029AM();
	this.instance_55.parent = this;
	this.instance_55.setTransform(48,187);

	this.NextOrder7 = new lib.NextOrder7();
	this.NextOrder7.parent = this;
	this.NextOrder7.setTransform(660.5,923.5);
	new cjs.ButtonHelper(this.NextOrder7, 0, 1, 2, false, new lib.NextOrder7(), 3);

	this.instance_56 = new lib.ScreenShot20190426at84314AM();
	this.instance_56.parent = this;
	this.instance_56.setTransform(50,186,0.973,1);

	this.NextOrder8 = new lib.NextOrder8();
	this.NextOrder8.parent = this;
	this.NextOrder8.setTransform(660.5,923.5);
	new cjs.ButtonHelper(this.NextOrder8, 0, 1, 2, false, new lib.NextOrder8(), 3);

	this.instance_57 = new lib.ScreenShot20190426at84358AM();
	this.instance_57.parent = this;
	this.instance_57.setTransform(49,186,0.976,1);

	this.NextOrder9 = new lib.NextOrder9();
	this.NextOrder9.parent = this;
	this.NextOrder9.setTransform(660.5,923.5);
	new cjs.ButtonHelper(this.NextOrder9, 0, 1, 2, false, new lib.NextOrder9(), 3);

	this.instance_58 = new lib.ScreenShot20190426at84408AM();
	this.instance_58.parent = this;
	this.instance_58.setTransform(50,185,0.973,1);

	this.NextOrder10 = new lib.NextOrder10();
	this.NextOrder10.parent = this;
	this.NextOrder10.setTransform(660.5,923.5);
	new cjs.ButtonHelper(this.NextOrder10, 0, 1, 2, false, new lib.NextOrder10(), 3);

	this.instance_59 = new lib.ScreenShot20190426at84420AM();
	this.instance_59.parent = this;
	this.instance_59.setTransform(49,186,0.976,1);

	this.NextOrder11 = new lib.NextOrder11();
	this.NextOrder11.parent = this;
	this.NextOrder11.setTransform(660.5,923.5);
	new cjs.ButtonHelper(this.NextOrder11, 0, 1, 2, false, new lib.NextOrder11(), 3);

	this.instance_60 = new lib.ScreenShot20190426at84432AM();
	this.instance_60.parent = this;
	this.instance_60.setTransform(48,185,0.976,1);

	this.NextOrder12 = new lib.NextOrder12();
	this.NextOrder12.parent = this;
	this.NextOrder12.setTransform(660.5,923.5);
	new cjs.ButtonHelper(this.NextOrder12, 0, 1, 2, false, new lib.NextOrder12(), 3);

	this.instance_61 = new lib.ScreenShot20190426at84608AM();
	this.instance_61.parent = this;
	this.instance_61.setTransform(49,185,0.973,1);

	this.Save = new lib.Save();
	this.Save.parent = this;
	this.Save.setTransform(48.1,906.5);
	new cjs.ButtonHelper(this.Save, 0, 1, 1);

	this.instance_62 = new lib.ScreenShot20190426at84624AM();
	this.instance_62.parent = this;
	this.instance_62.setTransform(48,187);

	this.MyReferrals3 = new lib.MyReferrals3();
	this.MyReferrals3.parent = this;
	this.MyReferrals3.setTransform(173,186.5);
	new cjs.ButtonHelper(this.MyReferrals3, 0, 1, 1);

	this.instance_63 = new lib.ScreenShot20190426at84743AM();
	this.instance_63.parent = this;
	this.instance_63.setTransform(48,185);

	this.SelectAction3 = new lib.SelectAction3();
	this.SelectAction3.parent = this;
	this.SelectAction3.setTransform(212,622);
	new cjs.ButtonHelper(this.SelectAction3, 0, 1, 2, false, new lib.SelectAction3(), 3);

	this.instance_64 = new lib.ScreenShot20190426at84807AM();
	this.instance_64.parent = this;
	this.instance_64.setTransform(47,184);

	this.Keep3 = new lib.Keep();
	this.Keep3.parent = this;
	this.Keep3.setTransform(63,692.4);
	new cjs.ButtonHelper(this.Keep3, 0, 1, 2, false, new lib.Keep(), 3);

	this.instance_65 = new lib.ScreenShot20190426at91428AM();
	this.instance_65.parent = this;
	this.instance_65.setTransform(49,184);

	this.Nextplot1 = new lib.Nextplot1();
	this.Nextplot1.parent = this;
	this.Nextplot1.setTransform(589.5,904.9,0.759,0.82);
	new cjs.ButtonHelper(this.Nextplot1, 0, 1, 1);

	this.instance_66 = new lib.ScreenShot20190426at91653AM();
	this.instance_66.parent = this;
	this.instance_66.setTransform(48,185);

	this.Nextforever = new lib.Nextforever();
	this.Nextforever.parent = this;
	this.Nextforever.setTransform(575.5,901.9);
	new cjs.ButtonHelper(this.Nextforever, 0, 1, 1);

	this.instance_67 = new lib.ScreenShot20190426at91942AM();
	this.instance_67.parent = this;
	this.instance_67.setTransform(49,186);

	this.nextplot2 = new lib.nextplot2();
	this.nextplot2.parent = this;
	this.nextplot2.setTransform(580.5,314.5);
	new cjs.ButtonHelper(this.nextplot2, 0, 1, 1);

	this.instance_68 = new lib.ScreenShot20190426at92256AM();
	this.instance_68.parent = this;
	this.instance_68.setTransform(49,186);

	this.Confirm6 = new lib.Confirm6();
	this.Confirm6.parent = this;
	this.Confirm6.setTransform(324,826.4);
	new cjs.ButtonHelper(this.Confirm6, 0, 1, 1);

	this.instance_69 = new lib.ScreenShot20190426at92713AM();
	this.instance_69.parent = this;
	this.instance_69.setTransform(48,186);

	this.OtherForms3 = new lib.OtherForms3();
	this.OtherForms3.parent = this;
	this.OtherForms3.setTransform(257.5,482);
	new cjs.ButtonHelper(this.OtherForms3, 0, 1, 1);

	this.instance_70 = new lib.ScreenShot20190426at93310AM();
	this.instance_70.parent = this;
	this.instance_70.setTransform(49,185);

	this.SelectForm3 = new lib.SelectForm3();
	this.SelectForm3.parent = this;
	this.SelectForm3.setTransform(351,562);
	new cjs.ButtonHelper(this.SelectForm3, 0, 1, 1);

	this.instance_71 = new lib.ScreenShot20190426at93533AM();
	this.instance_71.parent = this;
	this.instance_71.setTransform(48,185);

	this.CaseConference3 = new lib.CaseConference();
	this.CaseConference3.parent = this;
	this.CaseConference3.setTransform(261.5,635);
	new cjs.ButtonHelper(this.CaseConference3, 0, 1, 2, false, new lib.CaseConference(), 3);

	this.instance_72 = new lib.ScreenShot20190426at93545AM();
	this.instance_72.parent = this;
	this.instance_72.setTransform(47,186);

	this.Viewpastnotes1 = new lib.Viewpastnotes();
	this.Viewpastnotes1.parent = this;
	this.Viewpastnotes1.setTransform(135,906.9);
	new cjs.ButtonHelper(this.Viewpastnotes1, 0, 1, 1);

	this.instance_73 = new lib.ScreenShot20190426at93628AM();
	this.instance_73.parent = this;
	this.instance_73.setTransform(49,185,0.973,1);

	this.Showpaperwork = new lib.Showpaperwork();
	this.Showpaperwork.parent = this;
	this.Showpaperwork.setTransform(377.5,621.4);
	new cjs.ButtonHelper(this.Showpaperwork, 0, 1, 1);

	this.instance_74 = new lib.ScreenShot20190426at94206AM();
	this.instance_74.parent = this;
	this.instance_74.setTransform(166,494);

	this.nextcc1 = new lib.nextcc1();
	this.nextcc1.parent = this;
	this.nextcc1.setTransform(581.5,245.9);
	new cjs.ButtonHelper(this.nextcc1, 0, 1, 1);

	this.instance_75 = new lib.ScreenShot20190426at94317AM();
	this.instance_75.parent = this;
	this.instance_75.setTransform(49,185,1,1.027);

	this.nextcc2 = new lib.nextcc2();
	this.nextcc2.parent = this;
	this.nextcc2.setTransform(581.5,242.9);
	new cjs.ButtonHelper(this.nextcc2, 0, 1, 1);

	this.instance_76 = new lib.ScreenShot20190426at94336AM();
	this.instance_76.parent = this;
	this.instance_76.setTransform(49,187,1,1.011);

	this.nextcc3 = new lib.nextcc3();
	this.nextcc3.parent = this;
	this.nextcc3.setTransform(586.5,868.3);
	new cjs.ButtonHelper(this.nextcc3, 0, 1, 1);

	this.instance_77 = new lib.ScreenShot20190426at95001AM();
	this.instance_77.parent = this;
	this.instance_77.setTransform(49,185,0.979,1);

	this.ScheduleCall = new lib.ScheduleCall();
	this.ScheduleCall.parent = this;
	this.ScheduleCall.setTransform(298.5,737.4);
	new cjs.ButtonHelper(this.ScheduleCall, 0, 1, 1);

	this.RestartTut = new lib.RestartTutorial();
	this.RestartTut.parent = this;
	this.RestartTut.setTransform(228.5,614.7);
	new cjs.ButtonHelper(this.RestartTut, 0, 1, 1);

	this.instance_78 = new lib.Lifespan();
	this.instance_78.parent = this;
	this.instance_78.setTransform(358.5,302.5,1.78,1.724);
	new cjs.ButtonHelper(this.instance_78, 0, 1, 1);

	this.text_2 = new cjs.Text("Thank you for taking the time to go through this! If you have any questions, please feel free to contact our office. ", "30px 'Times'", "#330033");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 461;
	this.text_2.parent = this;
	this.text_2.setTransform(362,465.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Selectapatient1}]}).to({state:[{t:this.instance_10},{t:this.Doe},{t:this.instance_9}]},1).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.retrieve1},{t:this.instance_11}]},1).to({state:[{t:this.instance_14},{t:this.Scrolldown1,p:{x:585,y:910.6}}]},1).to({state:[{t:this.instance_16,p:{x:46}},{t:this.instance_15},{t:this.Scrolly,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_17},{t:this.Return1}]},1).to({state:[{t:this.instance_16,p:{x:50}},{t:this.instance_15},{t:this.Scrolly,p:{mode:"synched",startPosition:0}},{t:this.nextblue,p:{x:583,y:910.5}}]},1).to({state:[{t:this.instance_18},{t:this.otherformbutton1}]},1).to({state:[{t:this.instance_19},{t:this.Selectform}]},1).to({state:[{t:this.instance_20},{t:this.TO}]},1).to({state:[{t:this.instance_21},{t:this.Confirm1}]},1).to({state:[{t:this.instance_22},{t:this.SchedulingTOText},{t:this.nextall}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.next2}]},1).to({state:[{t:this.instance_26},{t:this.next3},{t:this.instance_25}]},1).to({state:[{t:this.instance_27},{t:this.finalize1}]},1).to({state:[{t:this.instance_28},{t:this.myreferrals1}]},1).to({state:[{t:this.instance_29},{t:this.selectaction1}]},1).to({state:[{t:this.instance_30},{t:this.Eval1}]},1).to({state:[{t:this.instance_31},{t:this.proceedtoeval1}]},1).to({state:[{t:this.instance_32},{t:this.proceed1}]},1).to({state:[{t:this.instance_33},{t:this.nexteval1}]},1).to({state:[{t:this.instance_34},{t:this.nexteval2}]},1).to({state:[{t:this.instance_35},{t:this.nexteval3}]},1).to({state:[{t:this.instance_36,p:{x:47,y:189}},{t:this.painoption}]},1).to({state:[{t:this.instance_36,p:{x:48,y:187}},{t:this.painoption},{t:this.instance_37},{t:this.pain2}]},1).to({state:[{t:this.instance_38},{t:this.nexteval4}]},1).to({state:[{t:this.instance_39},{t:this.nexteval5}]},1).to({state:[{t:this.instance_40},{t:this.Tinetti1}]},1).to({state:[{t:this.instance_41},{t:this.Submit1}]},1).to({state:[{t:this.instance_42},{t:this.nexteval6}]},1).to({state:[{t:this.instance_43},{t:this.nexteval18}]},1).to({state:[{t:this.Scrolldown1,p:{x:596.5,y:864.9}},{t:this.instance_44},{t:this.nexteval7}]},1).to({state:[{t:this.instance_45},{t:this.nexteval8}]},1).to({state:[{t:this.instance_46},{t:this.NextOrder3}]},1).to({state:[{t:this.instance_47},{t:this.Selectbody}]},1).to({state:[{t:this.instance_48},{t:this.anklefoot}]},1).to({state:[{t:this.instance_49},{t:this.nexteval9}]},1).to({state:[{t:this.instance_50},{t:this.heelraise1}]},1).to({state:[{t:this.instance_51},{t:this.NextOrder4}]},1).to({state:[{t:this.instance_52},{t:this.balance1}]},1).to({state:[{t:this.instance_53},{t:this.nexteval10}]},1).to({state:[{t:this.instance_54},{t:this.NextOrder5}]},1).to({state:[{t:this.instance_55},{t:this.NextOrder6}]},1).to({state:[{t:this.instance_56},{t:this.NextOrder7}]},1).to({state:[{t:this.instance_57},{t:this.NextOrder8}]},1).to({state:[{t:this.instance_58},{t:this.NextOrder9}]},1).to({state:[{t:this.instance_59},{t:this.NextOrder10}]},1).to({state:[{t:this.instance_60},{t:this.NextOrder11}]},1).to({state:[{t:this.instance_61},{t:this.NextOrder12}]},1).to({state:[{t:this.instance_62},{t:this.Save}]},1).to({state:[{t:this.instance_63},{t:this.MyReferrals3}]},1).to({state:[{t:this.instance_64},{t:this.SelectAction3}]},1).to({state:[{t:this.instance_65},{t:this.Keep3}]},1).to({state:[{t:this.instance_66},{t:this.Nextplot1}]},1).to({state:[{t:this.instance_67},{t:this.nextblue,p:{x:609.2,y:986.4}},{t:this.Nextforever}]},1).to({state:[{t:this.instance_68},{t:this.nextplot2}]},1).to({state:[{t:this.instance_69},{t:this.Confirm6}]},1).to({state:[{t:this.instance_70},{t:this.OtherForms3}]},1).to({state:[{t:this.instance_71},{t:this.SelectForm3}]},1).to({state:[{t:this.instance_72},{t:this.CaseConference3}]},1).to({state:[{t:this.instance_73},{t:this.Viewpastnotes1}]},1).to({state:[{t:this.instance_73},{t:this.instance_74},{t:this.Showpaperwork}]},1).to({state:[{t:this.instance_75},{t:this.nextcc1}]},1).to({state:[{t:this.instance_76},{t:this.nextcc2}]},1).to({state:[{t:this.instance_77},{t:this.nextcc3}]},1).to({state:[{t:this.text_2},{t:this.instance_78},{t:this.RestartTut},{t:this.ScheduleCall}]},1).wait(1));

	// bg
	this.instance_79 = new lib.ScreenShot20190425at82326AM();
	this.instance_79.parent = this;
	this.instance_79.setTransform(50,186,1.022,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371,572.1,736.3,1004.4);
// library properties:
lib.properties = {
	width: 740,
	height: 1050,
	fps: 12,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap51.png", id:"Bitmap51"},
		{src:"images/Bitmap52.png", id:"Bitmap52"},
		{src:"images/ipadclipartpng14transparent.png", id:"ipadclipartpng14transparent"},
		{src:"images/NewProject22.png", id:"NewProject22"},
		{src:"images/NewProject23.png", id:"NewProject23"},
		{src:"images/NewProject26.png", id:"NewProject26"},
		{src:"images/NewProject28.png", id:"NewProject28"},
		{src:"images/ScreenShot20190419at20450PMpngcopy.png", id:"ScreenShot20190419at20450PMpngcopy"},
		{src:"images/ScreenShot20190422at32710PM.png", id:"ScreenShot20190422at32710PM"},
		{src:"images/ScreenShot20190422at74532AMpngcopy.jpg", id:"ScreenShot20190422at74532AMpngcopy"},
		{src:"images/ScreenShot20190422at75123AM.jpg", id:"ScreenShot20190422at75123AM"},
		{src:"images/ScreenShot20190422at75413AM.png", id:"ScreenShot20190422at75413AM"},
		{src:"images/ScreenShot20190422at75450AM.png", id:"ScreenShot20190422at75450AM"},
		{src:"images/ScreenShot20190422at75854AM.jpg", id:"ScreenShot20190422at75854AM"},
		{src:"images/ScreenShot20190422at80722AM.jpg", id:"ScreenShot20190422at80722AM"},
		{src:"images/ScreenShot20190422at80838AM.png", id:"ScreenShot20190422at80838AM"},
		{src:"images/ScreenShot20190422at81131AM.jpg", id:"ScreenShot20190422at81131AM"},
		{src:"images/ScreenShot20190422at81151AM.png", id:"ScreenShot20190422at81151AM"},
		{src:"images/ScreenShot20190422at81402AM.jpg", id:"ScreenShot20190422at81402AM"},
		{src:"images/ScreenShot20190422at81415AM.png", id:"ScreenShot20190422at81415AM"},
		{src:"images/ScreenShot20190422at81645AM.jpg", id:"ScreenShot20190422at81645AM"},
		{src:"images/ScreenShot20190422at81814AM.jpg", id:"ScreenShot20190422at81814AM"},
		{src:"images/ScreenShot20190422at81823AM.png", id:"ScreenShot20190422at81823AM"},
		{src:"images/ScreenShot20190422at82200AM.jpg", id:"ScreenShot20190422at82200AM"},
		{src:"images/ScreenShot20190425at11727PM.png", id:"ScreenShot20190425at11727PM"},
		{src:"images/ScreenShot20190425at102510AM.png", id:"ScreenShot20190425at102510AM"},
		{src:"images/ScreenShot20190425at102527AM.png", id:"ScreenShot20190425at102527AM"},
		{src:"images/ScreenShot20190425at102728AM.png", id:"ScreenShot20190425at102728AM"},
		{src:"images/ScreenShot20190425at102734AM.png", id:"ScreenShot20190425at102734AM"},
		{src:"images/ScreenShot20190425at103642AM.png", id:"ScreenShot20190425at103642AM"},
		{src:"images/ScreenShot20190425at103706AM.png", id:"ScreenShot20190425at103706AM"},
		{src:"images/ScreenShot20190425at103738AM.png", id:"ScreenShot20190425at103738AM"},
		{src:"images/ScreenShot20190425at122626PM.png", id:"ScreenShot20190425at122626PM"},
		{src:"images/ScreenShot20190425at122848PM.png", id:"ScreenShot20190425at122848PM"},
		{src:"images/ScreenShot20190425at123118PM.png", id:"ScreenShot20190425at123118PM"},
		{src:"images/ScreenShot20190425at123358PM.png", id:"ScreenShot20190425at123358PM"},
		{src:"images/ScreenShot20190425at123450PM.png", id:"ScreenShot20190425at123450PM"},
		{src:"images/ScreenShot20190425at123509PM.png", id:"ScreenShot20190425at123509PM"},
		{src:"images/ScreenShot20190425at123518PM.png", id:"ScreenShot20190425at123518PM"},
		{src:"images/ScreenShot20190425at123527PM.png", id:"ScreenShot20190425at123527PM"},
		{src:"images/ScreenShot20190425at123937PM.png", id:"ScreenShot20190425at123937PM"},
		{src:"images/ScreenShot20190425at124343PM.png", id:"ScreenShot20190425at124343PM"},
		{src:"images/ScreenShot20190425at124546PM.png", id:"ScreenShot20190425at124546PM"},
		{src:"images/ScreenShot20190425at124553PM.png", id:"ScreenShot20190425at124553PM"},
		{src:"images/ScreenShot20190425at125322PM.png", id:"ScreenShot20190425at125322PM"},
		{src:"images/ScreenShot20190425at125338PM.png", id:"ScreenShot20190425at125338PM"},
		{src:"images/ScreenShot20190425at125610PM.png", id:"ScreenShot20190425at125610PM"},
		{src:"images/ScreenShot20190425at20221PM.png", id:"ScreenShot20190425at20221PM"},
		{src:"images/ScreenShot20190425at20458PM.jpg", id:"ScreenShot20190425at20458PM"},
		{src:"images/ScreenShot20190425at20931PM.png", id:"ScreenShot20190425at20931PM"},
		{src:"images/ScreenShot20190425at21035PM.png", id:"ScreenShot20190425at21035PM"},
		{src:"images/ScreenShot20190425at21148PM.png", id:"ScreenShot20190425at21148PM"},
		{src:"images/ScreenShot20190425at21218PM.png", id:"ScreenShot20190425at21218PM"},
		{src:"images/ScreenShot20190425at21502PM.png", id:"ScreenShot20190425at21502PM"},
		{src:"images/ScreenShot20190425at21944PM.png", id:"ScreenShot20190425at21944PM"},
		{src:"images/ScreenShot20190425at22400PM.png", id:"ScreenShot20190425at22400PM"},
		{src:"images/ScreenShot20190425at22619PM.png", id:"ScreenShot20190425at22619PM"},
		{src:"images/ScreenShot20190425at22729PM.png", id:"ScreenShot20190425at22729PM"},
		{src:"images/ScreenShot20190425at22951PM.png", id:"ScreenShot20190425at22951PM"},
		{src:"images/ScreenShot20190425at22958PM.png", id:"ScreenShot20190425at22958PM"},
		{src:"images/ScreenShot20190425at23356PM.png", id:"ScreenShot20190425at23356PM"},
		{src:"images/ScreenShot20190425at42427PM.png", id:"ScreenShot20190425at42427PM"},
		{src:"images/ScreenShot20190425at42932PM.png", id:"ScreenShot20190425at42932PM"},
		{src:"images/ScreenShot20190425at82001AM.png", id:"ScreenShot20190425at82001AM"},
		{src:"images/ScreenShot20190425at82012AM.png", id:"ScreenShot20190425at82012AM"},
		{src:"images/ScreenShot20190425at82326AM.png", id:"ScreenShot20190425at82326AM"},
		{src:"images/ScreenShot20190425at92924AM.png", id:"ScreenShot20190425at92924AM"},
		{src:"images/ScreenShot20190426at112639AM.png", id:"ScreenShot20190426at112639AM"},
		{src:"images/ScreenShot20190426at20710PM.png", id:"ScreenShot20190426at20710PM"},
		{src:"images/ScreenShot20190426at21932PM.png", id:"ScreenShot20190426at21932PM"},
		{src:"images/ScreenShot20190426at80327AM.png", id:"ScreenShot20190426at80327AM"},
		{src:"images/ScreenShot20190426at81207AM.png", id:"ScreenShot20190426at81207AM"},
		{src:"images/ScreenShot20190426at81545AM.png", id:"ScreenShot20190426at81545AM"},
		{src:"images/ScreenShot20190426at81553AM.png", id:"ScreenShot20190426at81553AM"},
		{src:"images/ScreenShot20190426at81601AM.png", id:"ScreenShot20190426at81601AM"},
		{src:"images/ScreenShot20190426at81610AM.png", id:"ScreenShot20190426at81610AM"},
		{src:"images/ScreenShot20190426at81620AM.png", id:"ScreenShot20190426at81620AM"},
		{src:"images/ScreenShot20190426at81659AM.png", id:"ScreenShot20190426at81659AM"},
		{src:"images/ScreenShot20190426at81706AM.png", id:"ScreenShot20190426at81706AM"},
		{src:"images/ScreenShot20190426at81720AM.png", id:"ScreenShot20190426at81720AM"},
		{src:"images/ScreenShot20190426at82814AM.png", id:"ScreenShot20190426at82814AM"},
		{src:"images/ScreenShot20190426at83210AM.png", id:"ScreenShot20190426at83210AM"},
		{src:"images/ScreenShot20190426at83227AM.png", id:"ScreenShot20190426at83227AM"},
		{src:"images/ScreenShot20190426at83737AM.png", id:"ScreenShot20190426at83737AM"},
		{src:"images/ScreenShot20190426at84029AM.png", id:"ScreenShot20190426at84029AM"},
		{src:"images/ScreenShot20190426at84314AM.png", id:"ScreenShot20190426at84314AM"},
		{src:"images/ScreenShot20190426at84358AM.png", id:"ScreenShot20190426at84358AM"},
		{src:"images/ScreenShot20190426at84408AM.png", id:"ScreenShot20190426at84408AM"},
		{src:"images/ScreenShot20190426at84420AM.png", id:"ScreenShot20190426at84420AM"},
		{src:"images/ScreenShot20190426at84432AM.png", id:"ScreenShot20190426at84432AM"},
		{src:"images/ScreenShot20190426at84608AM.png", id:"ScreenShot20190426at84608AM"},
		{src:"images/ScreenShot20190426at84624AM.png", id:"ScreenShot20190426at84624AM"},
		{src:"images/ScreenShot20190426at84653AM.png", id:"ScreenShot20190426at84653AM"},
		{src:"images/ScreenShot20190426at84743AM.png", id:"ScreenShot20190426at84743AM"},
		{src:"images/ScreenShot20190426at84807AM.png", id:"ScreenShot20190426at84807AM"},
		{src:"images/ScreenShot20190426at91428AM.png", id:"ScreenShot20190426at91428AM"},
		{src:"images/ScreenShot20190426at91439AM.png", id:"ScreenShot20190426at91439AM"},
		{src:"images/ScreenShot20190426at91449AM.png", id:"ScreenShot20190426at91449AM"},
		{src:"images/ScreenShot20190426at91653AM.png", id:"ScreenShot20190426at91653AM"},
		{src:"images/ScreenShot20190426at91942AM.png", id:"ScreenShot20190426at91942AM"},
		{src:"images/ScreenShot20190426at92256AM.png", id:"ScreenShot20190426at92256AM"},
		{src:"images/ScreenShot20190426at92702AM.png", id:"ScreenShot20190426at92702AM"},
		{src:"images/ScreenShot20190426at92713AM.png", id:"ScreenShot20190426at92713AM"},
		{src:"images/ScreenShot20190426at93310AM.png", id:"ScreenShot20190426at93310AM"},
		{src:"images/ScreenShot20190426at93533AM.png", id:"ScreenShot20190426at93533AM"},
		{src:"images/ScreenShot20190426at93545AM.png", id:"ScreenShot20190426at93545AM"},
		{src:"images/ScreenShot20190426at93557AM.png", id:"ScreenShot20190426at93557AM"},
		{src:"images/ScreenShot20190426at93608AM.png", id:"ScreenShot20190426at93608AM"},
		{src:"images/ScreenShot20190426at93628AM.png", id:"ScreenShot20190426at93628AM"},
		{src:"images/ScreenShot20190426at94157AM.png", id:"ScreenShot20190426at94157AM"},
		{src:"images/ScreenShot20190426at94206AM.png", id:"ScreenShot20190426at94206AM"},
		{src:"images/ScreenShot20190426at94217AM.png", id:"ScreenShot20190426at94217AM"},
		{src:"images/ScreenShot20190426at94317AM.png", id:"ScreenShot20190426at94317AM"},
		{src:"images/ScreenShot20190426at94336AM.png", id:"ScreenShot20190426at94336AM"},
		{src:"images/ScreenShot20190426at95001AM.png", id:"ScreenShot20190426at95001AM"},
		{src:"images/unnamed.png", id:"unnamed"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;