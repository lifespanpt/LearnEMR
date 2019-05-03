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



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


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


(lib.ScreenShot20190426at21932PM = function() {
	this.initialize(img.ScreenShot20190426at21932PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,65);


(lib.ScreenShot20190502at25958PM = function() {
	this.initialize(img.ScreenShot20190502at25958PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,762);


(lib.ScreenShot20190502at25958PMpngcopy = function() {
	this.initialize(img.ScreenShot20190502at25958PMpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,762);


(lib.ScreenShot20190502at30050PM = function() {
	this.initialize(img.ScreenShot20190502at30050PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,534,43);


(lib.ScreenShot20190502at30100PM = function() {
	this.initialize(img.ScreenShot20190502at30100PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,762);


(lib.ScreenShot20190502at30116PM = function() {
	this.initialize(img.ScreenShot20190502at30116PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,527,25);


(lib.ScreenShot20190502at30127PM = function() {
	this.initialize(img.ScreenShot20190502at30127PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,529,24);


(lib.ScreenShot20190502at30136PM = function() {
	this.initialize(img.ScreenShot20190502at30136PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,45);


(lib.ScreenShot20190502at30145PM = function() {
	this.initialize(img.ScreenShot20190502at30145PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,764);


(lib.ScreenShot20190502at30229PM = function() {
	this.initialize(img.ScreenShot20190502at30229PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,762);


(lib.ScreenShot20190502at30243PM = function() {
	this.initialize(img.ScreenShot20190502at30243PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,762);


(lib.ScreenShot20190502at30259PM = function() {
	this.initialize(img.ScreenShot20190502at30259PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,115);


(lib.ScreenShot20190502at30316PM = function() {
	this.initialize(img.ScreenShot20190502at30316PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,763);


(lib.ScreenShot20190502at30324PMpngcopy = function() {
	this.initialize(img.ScreenShot20190502at30324PMpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,40);


(lib.ScreenShot20190502at30340PM = function() {
	this.initialize(img.ScreenShot20190502at30340PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,764);


(lib.ScreenShot20190502at30359PM = function() {
	this.initialize(img.ScreenShot20190502at30359PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651,763);


(lib.ScreenShot20190502at30430PM = function() {
	this.initialize(img.ScreenShot20190502at30430PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,763);


(lib.ScreenShot20190502at30441PM = function() {
	this.initialize(img.ScreenShot20190502at30441PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,20);


(lib.ScreenShot20190502at30500PM = function() {
	this.initialize(img.ScreenShot20190502at30500PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,762);


(lib.ScreenShot20190502at30508PM = function() {
	this.initialize(img.ScreenShot20190502at30508PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,45);


(lib.ScreenShot20190502at30536PM = function() {
	this.initialize(img.ScreenShot20190502at30536PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,762);


(lib.ScreenShot20190502at30613PM = function() {
	this.initialize(img.ScreenShot20190502at30613PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,73);


(lib.ScreenShot20190502at30621PM = function() {
	this.initialize(img.ScreenShot20190502at30621PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,74);


(lib.ScreenShot20190502at30703PM = function() {
	this.initialize(img.ScreenShot20190502at30703PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,74);


(lib.ScreenShot20190502at30714PM = function() {
	this.initialize(img.ScreenShot20190502at30714PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,74);


(lib.ScreenShot20190502at30718PM = function() {
	this.initialize(img.ScreenShot20190502at30718PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,71);


(lib.ScreenShot20190502at30723PMpngcopy = function() {
	this.initialize(img.ScreenShot20190502at30723PMpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,763);


(lib.ScreenShot20190502at30735PM = function() {
	this.initialize(img.ScreenShot20190502at30735PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,40);


(lib.ScreenShot20190502at30743PM = function() {
	this.initialize(img.ScreenShot20190502at30743PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,762);


(lib.ScreenShot20190502at30752PM = function() {
	this.initialize(img.ScreenShot20190502at30752PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,35);


(lib.ScreenShot20190502at30806PM = function() {
	this.initialize(img.ScreenShot20190502at30806PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,762);


(lib.ScreenShot20190502at30813PM = function() {
	this.initialize(img.ScreenShot20190502at30813PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,25);


(lib.ScreenShot20190502at30827PM = function() {
	this.initialize(img.ScreenShot20190502at30827PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,763);


(lib.ScreenShot20190502at30838PM = function() {
	this.initialize(img.ScreenShot20190502at30838PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,118);


(lib.ScreenShot20190502at30849PM = function() {
	this.initialize(img.ScreenShot20190502at30849PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,763);


(lib.ScreenShot20190502at30857PM = function() {
	this.initialize(img.ScreenShot20190502at30857PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,41);


(lib.ScreenShot20190502at30912PM = function() {
	this.initialize(img.ScreenShot20190502at30912PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,762);


(lib.ScreenShot20190502at31041PM = function() {
	this.initialize(img.ScreenShot20190502at31041PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651,764);


(lib.ScreenShot20190502at31137PM = function() {
	this.initialize(img.ScreenShot20190502at31137PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,766);


(lib.ScreenShot20190502at31152PM = function() {
	this.initialize(img.ScreenShot20190502at31152PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,765);


(lib.ScreenShot20190502at31200PM = function() {
	this.initialize(img.ScreenShot20190502at31200PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,33);


(lib.ScreenShot20190502at31209PM = function() {
	this.initialize(img.ScreenShot20190502at31209PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,764);


(lib.ScreenShot20190502at31227PM = function() {
	this.initialize(img.ScreenShot20190502at31227PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,20);


(lib.ScreenShot20190502at31232PM = function() {
	this.initialize(img.ScreenShot20190502at31232PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,18);


(lib.ScreenShot20190502at31243PM = function() {
	this.initialize(img.ScreenShot20190502at31243PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,763);


(lib.ScreenShot20190502at31747PM = function() {
	this.initialize(img.ScreenShot20190502at31747PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,763);


(lib.ScreenShot20190502at32006PM = function() {
	this.initialize(img.ScreenShot20190502at32006PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,763);


(lib.ScreenShot20190502at32540PM = function() {
	this.initialize(img.ScreenShot20190502at32540PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,765);


(lib.ScreenShot20190502at32553PM = function() {
	this.initialize(img.ScreenShot20190502at32553PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,37);


(lib.ScreenShot20190502at32611PM = function() {
	this.initialize(img.ScreenShot20190502at32611PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,764);


(lib.ScreenShot20190502at32639PM = function() {
	this.initialize(img.ScreenShot20190502at32639PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,652,763);


(lib.ScreenShot20190502at32654PM = function() {
	this.initialize(img.ScreenShot20190502at32654PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,664,763);


(lib.ScreenShot20190502at32706PM = function() {
	this.initialize(img.ScreenShot20190502at32706PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,763);


(lib.ScreenShot20190502at32716PM = function() {
	this.initialize(img.ScreenShot20190502at32716PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,664,762);


(lib.ScreenShot20190502at32725PM = function() {
	this.initialize(img.ScreenShot20190502at32725PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,662,763);


(lib.ScreenShot20190502at32829PM = function() {
	this.initialize(img.ScreenShot20190502at32829PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,762);


(lib.ScreenShot20190502at32839PM = function() {
	this.initialize(img.ScreenShot20190502at32839PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,34);


(lib.ScreenShot20190502at32857PM = function() {
	this.initialize(img.ScreenShot20190502at32857PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,764);


(lib.ScreenShot20190502at32922PM = function() {
	this.initialize(img.ScreenShot20190502at32922PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,49);


(lib.ScreenShot20190502at32946PM = function() {
	this.initialize(img.ScreenShot20190502at32946PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,647,762);


(lib.ScreenShot20190502at32954PM = function() {
	this.initialize(img.ScreenShot20190502at32954PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,123);


(lib.ScreenShot20190502at33018PM = function() {
	this.initialize(img.ScreenShot20190502at33018PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651,762);


(lib.ScreenShot20190502at34536PM = function() {
	this.initialize(img.ScreenShot20190502at34536PM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,638,121);


(lib.ScreenShot20190503at91651AM = function() {
	this.initialize(img.ScreenShot20190503at91651AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,72);


(lib.ScreenShot20190503at92205AM = function() {
	this.initialize(img.ScreenShot20190503at92205AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,75);


(lib.ScreenShot20190503at92211AM = function() {
	this.initialize(img.ScreenShot20190503at92211AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,74);


(lib.unnamed = function() {
	this.initialize(img.unnamed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,126);


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


(lib.MenuTO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Review Evaluation", "20px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 206;
	this.text.alpha = 0.74117647;
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
p.nominalBounds = new cjs.Rectangle(-132,-37.9,278,61);


(lib.MenuRI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Plot Visits", "30px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 261;
	this.text.alpha = 0.74117647;
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
	this.text = new cjs.Text("View Alerts", "30px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 262;
	this.text.alpha = 0.73725490;
	this.text.parent = this;
	this.text.setTransform(46.5,-14.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,1).p("A1jkmMArHAAAIAAJNMgrHAAAg");
	this.shape.setTransform(47.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.749)").s().p("A1jEnIAApNMArHAAAIAAJNg");
	this.shape_1.setTransform(47.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"View Alerts"}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"Plotting Visits"}}]},3).wait(1));

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
	this.text = new cjs.Text("Begin Follow-up", "25px 'Trajan Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 257;
	this.text.alpha = 0.73725490;
	this.text.parent = this;
	this.text.setTransform(45.5,-10.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,1).p("A1jkmMArHAAAIAAJNMgrHAAAg");
	this.shape.setTransform(47.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.749)").s().p("A1jEnIAApNMArHAAAIAAJNg");
	this.shape_1.setTransform(47.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"Begin Follow-up",font:"25px 'Trajan Pro'",lineHeight:27}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"Evaluation",font:"30px 'Trajan Pro'",lineHeight:32}}]},3).wait(1));

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


(lib.Lifespan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.unnamed();
	this.instance.parent = this;
	this.instance.setTransform(-123,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-50,250,126);


(lib.img35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30718PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,71);


(lib.img11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30714PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,74);


(lib.img9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


(lib.img8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30703PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,74);


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


(lib.btn57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190503at91651AM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,72);


(lib.btn35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30621PM();
	this.instance.parent = this;
	this.instance.setTransform(8,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,1,80,74);


(lib.btn34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewProject23();
	this.instance.parent = this;
	this.instance.setTransform(-108,-34,0.302,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-34,213,68);


(lib.btn30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30324PMpngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,40);


(lib.btn29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32954PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215,123);


(lib.btn28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32922PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,49);


(lib.btn27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32839PM();
	this.instance.parent = this;
	this.instance.setTransform(7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,0,81,34);


(lib.btn26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32553PM();
	this.instance.parent = this;
	this.instance.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,0,66,37);


(lib.btn25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32553PM();
	this.instance.parent = this;
	this.instance.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,0,66,37);


(lib.btn24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32553PM();
	this.instance.parent = this;
	this.instance.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,0,66,37);


(lib.btn23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32553PM();
	this.instance.parent = this;
	this.instance.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,0,66,37);


(lib.btn22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32553PM();
	this.instance.parent = this;
	this.instance.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,0,66,37);


(lib.btn21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32553PM();
	this.instance.parent = this;
	this.instance.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,0,66,37);


(lib.btn20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at32553PM();
	this.instance.parent = this;
	this.instance.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,0,66,37);


(lib.btn18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at31227PM();
	this.instance.parent = this;

	this.instance_1 = new lib.ScreenShot20190502at31232PM();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,20);


(lib.btn17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at31200PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,33);


(lib.btn16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30857PM();
	this.instance.parent = this;
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,0,89,41);


(lib.btn15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30838PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305,118);


(lib.btn14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30813PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,25);


(lib.btn13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30752PM();
	this.instance.parent = this;
	this.instance.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,92,35);


(lib.btn12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30735PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,40);


(lib.btn10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30613PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,73);


(lib.btn9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190503at92211AM();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,80,74);


(lib.btn8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190503at92205AM();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,80,75);


(lib.btn7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30508PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,45);


(lib.Back90 = function(mode,startPosition,loop) {
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


(lib.btn6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30441PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,20);


(lib.btn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30259PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305,115);


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30136PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,45);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30116PM();
	this.instance.parent = this;

	this.instance_1 = new lib.ScreenShot20190502at30127PM();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,527,25);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ScreenShot20190502at30050PM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,534,43);


(lib.img10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.5,37,1,1,0,0,0,39.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,74);


// stage content:
(lib.Walkthrough = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{homepage:0,homepage2:1,Retrieve:2,patientrecord:3,patientrecord2:4,"H&P":5,Scheduling:6,otherforms:7,TO:8,TherapyOrder:9,TO3:10,STO:11,STOsig:12,STOdate:13,STOrvw:14,patientrecord3:15,referralinbox:16,referralinbox2:17,proceedtoeval1:18,proceedtoeval2:19,frame21:20,eval2:21,eval3:22,eval4:23,eval5:24,eval6:25,eval7:26,eval8:27,eval9:28,eval10:29,eval11:30,frame32:31,frame33:32,frame34:33,frame35:34,frame36:35,frame66:36});

	// timeline functions:
	this.frame_0 = function() {
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
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
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('H&P');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('STO');
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
			this.gotoAndPlay('referralinbox');
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
			this.gotoAndPlay('frame36');
		}
		this.stop();
		
		
		this.btn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_1.bind(this));
		
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
		
		
		this.btn2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
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
		
		
		this.btn3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
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
		
		
		this.btn31.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
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
		
		
		this.btn32.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
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
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
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
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('H&P');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('STO');
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
			this.gotoAndPlay('referralinbox');
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
			this.gotoAndPlay('frame36');
		}
		this.stop();
		
		this.btn4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
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
		this.stop();
		
		
		this.btn30.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
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
		
		
		
		this.btn33.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
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
		
		
		
		this.btn34.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
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
		
		
		this.btn6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
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
		
		
		
		this.btn7.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
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
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
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
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('H&P');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('STO');
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
			this.gotoAndPlay('referralinbox');
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
			this.gotoAndPlay('frame36');
		}
		this.stop();
		
		
		
		this.img8.visible = false
		this.btn8.addEventListener("click", fl_MouseClickHandler_1.bind(this));
		function fl_MouseClickHandler_1()
		{this.img8.visible = true;}
		
		
		this.img9.visible = false
		this.btn9.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2()
		{this.img9.visible = true;}
		
		this.img10.visible = false
		this.btn10.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		function fl_MouseClickHandler_3()
		{this.img10.visible = true;}
		
		
		
		this.img35.visible = false
		this.btn35.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4()
		{this.img35.visible = true;}
		
		
		this.btn36.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{
			this.gotoAndPlay('STOsig');
		}
	}
	this.frame_12 = function() {
		this.Back13.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(11);
		}
		this.stop();
		
		this.btn12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
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
		
		this.btn13.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
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
		
		this.btn14.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
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
		
		this.btn15.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
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
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
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
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('H&P');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('STO');
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
			this.gotoAndPlay('referralinbox');
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
			this.gotoAndPlay('frame36');
		}
		this.stop();
		
		this.btn16.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
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
		
		this.btn38.addEventListener("click", fl_ClickToGoToAndStopAtFrame_18.bind(this));
		
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
		
		this.btn39.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
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
		
		this.btn40.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
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
		this.stop();
		
		this.btn17.addEventListener("click", fl_ClickToGoToAndStopAtFrame_21.bind(this));
		
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
		
		this.btn18.addEventListener("click", fl_ClickToGoToAndStopAtFrame_22.bind(this));
		
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
		
		this.btn50.addEventListener("click", fl_ClickToGoToAndStopAtFrame_23.bind(this));
		
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
		
		
		this.btn54.addEventListener("click", fl_ClickToGoToAndStopAtFrame_24.bind(this));
		
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
		
		
		this.btn42.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
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
		
		this.btn26.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
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
		
		this.btn25.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop('eval8');
		}
	}
	this.frame_27 = function() {
		this.Back90.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop('eval7');
		}
		this.stop();
		
		this.btn24.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop('eval9');
		}
	}
	this.frame_28 = function() {
		this.Back29.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop('eval8');
		}
		this.stop();
		
		this.btn23.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop('eval10');
		}
	}
	this.frame_29 = function() {
		this.Back30.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop('eval9');
		}
		this.stop();
		
		this.btn22.addEventListener("click", fl_ClickToGoToAndStopAtFrame_30.bind(this));
		
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
		
		this.btn21.addEventListener("click", fl_ClickToGoToAndStopAtFrame_31.bind(this));
		
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
		
		this.btn20.addEventListener("click", fl_ClickToGoToAndStopAtFrame_32.bind(this));
		
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
		
		this.btn27.addEventListener("click", fl_ClickToGoToAndStopAtFrame_33.bind(this));
		
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
		
		this.btn28.addEventListener("click", fl_ClickToGoToAndStopAtFrame_34.bind(this));
		
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
		
		this.btn29.addEventListener("click", fl_ClickToGoToAndStopAtFrame_35.bind(this));
		
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
		this.MenuHome.visible = false
		this.MenuTO.visible = false
		this.MenuRI.visible = false
		this.MenuEval.visible = false
		this.MenuPlot.visible = false
		this.MenuClose.visible = false
		
		
		this.Menu.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.MenuHome.visible = true
		this.MenuTO.visible = true
		this.MenuRI.visible = true
		this.MenuEval.visible = true
		this.MenuPlot.visible = true
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
		
		}
		
		
		
		this.MenuHome.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_67()
		{
			this.gotoAndPlay('homepage');
		}
		
		
		
		this.MenuTO.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_68()
		{
			this.gotoAndPlay('H&P');
		}
		
		
		
		this.MenuRI.addEventListener("click", fl_ClickToGoToAndPlayAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame_69()
		{
			this.gotoAndPlay('STO');
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
			this.gotoAndPlay('referralinbox');
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
			this.gotoAndPlay('frame36');
		}
		this.stop();
		
		this.btn57.addEventListener("click", fl_ClickToGoToAndStopAtFrame_36.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_36()
		{
			this.gotoAndStop('frame66');
		}
	}
	this.frame_36 = function() {
		this.Back66.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(35);
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(30));

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

	this.Back90 = new lib.Back90();
	this.Back90.parent = this;
	this.Back90.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back90, 0, 1, 2, false, new lib.Back90(), 3);

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

	this.Back66 = new lib.Back66();
	this.Back66.parent = this;
	this.Back66.setTransform(86,146.6,0.309,0.339,0,0,0,137.5,116.5);
	new cjs.ButtonHelper(this.Back66, 0, 1, 2, false, new lib.Back66(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Back2}]},1).to({state:[{t:this.Back3}]},1).to({state:[{t:this.Back4}]},1).to({state:[{t:this.Back5}]},1).to({state:[{t:this.Back6}]},1).to({state:[{t:this.Back7}]},1).to({state:[{t:this.Back8}]},1).to({state:[{t:this.Back9}]},1).to({state:[{t:this.Back10}]},1).to({state:[{t:this.Back11}]},1).to({state:[{t:this.Back12}]},1).to({state:[{t:this.Back13}]},1).to({state:[{t:this.Back14}]},1).to({state:[{t:this.Back15}]},1).to({state:[{t:this.Back16}]},1).to({state:[{t:this.Back17}]},1).to({state:[{t:this.Back18}]},1).to({state:[{t:this.Back19}]},1).to({state:[{t:this.Back20}]},1).to({state:[{t:this.Back21}]},1).to({state:[{t:this.Back22}]},1).to({state:[{t:this.Back23}]},1).to({state:[{t:this.Back24}]},1).to({state:[{t:this.Back25}]},1).to({state:[{t:this.Back26}]},1).to({state:[{t:this.Back27}]},1).to({state:[{t:this.Back90}]},1).to({state:[{t:this.Back29}]},1).to({state:[{t:this.Back30}]},1).to({state:[{t:this.Back31}]},1).to({state:[{t:this.Back32}]},1).to({state:[{t:this.Back33}]},1).to({state:[{t:this.Back34}]},1).to({state:[{t:this.Back35}]},1).to({state:[{t:this.Back36}]},1).to({state:[{t:this.Back66}]},1).to({state:[]},1).wait(29));

	// menu
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot}]}).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot}]},5).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot}]},6).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot}]},5).to({state:[{t:this.MenuTO},{t:this.MenuHome},{t:this.MenuRI},{t:this.MenuClose},{t:this.MenuEval},{t:this.MenuPlot}]},19).to({state:[]},2).wait(29));

	// iphoneFrame
	this.Menu = new lib.homebutton();
	this.Menu.parent = this;
	this.Menu.setTransform(389.5,986.4);
	new cjs.ButtonHelper(this.Menu, 0, 1, 1);

	this.instance = new lib.ipadclipartpng14transparent();
	this.instance.parent = this;
	this.instance.setTransform(1,85,0.433,0.391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.Menu}]}).to({state:[{t:this.instance}]},36).to({state:[]},1).wait(29));

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

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAHQgCgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(283,885.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEAqIAAgDQAHgBACgCQADgDAAgJIAAglQAAgHgDgFQgDgFgHAAQgEAAgGAEIgHAGIAAAwQAAAGADADQACACAGAAIAAADIgmAAIAAgDQAGgBADgCQACgDAAgHIAAgsIgBgIQgBgDgGAAIgBAAIgCAAIAAgDIARgFIAIgDIABAAIAAACIAAAMIAMgKQAGgFAIAAQAGAAAFAEQAJAHAAARIAAAoQAAAHADACQACADAGAAIAAADg");
	this.shape_2.setTransform(275.6,882);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAeQgMgMAAgSQAAgRALgNQAMgMAQABQARAAAMALQALALAAATQAAARgLANQgLAMgRAAQgRAAgLgMgAgOggQgIAJgBATQAAAPAIANQAHAOALAAQAKgBAGgIQAEgKAAgOQAAgPgGgNQgHgNgMAAQgHAAgFAEg");
	this.shape_3.setTransform(266.5,882.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_4.setTransform(259.5,880);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAsQgCgFgBgJIAAg0IgJAAIgBgBIAAgBIAAgBIADgCIAJgIIALgRIACAAIAAACIAAAVIASAAIAAAHIgSAAIgBAxQABAHABADQACAGAGAAQAEAAACgBIAFgFIACACIgCADQgEAGgGACQgEADgGAAQgJAAgDgJg");
	this.shape_5.setTransform(254.7,881);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAgQgKgLAAgTQAAgRALgNQAMgNARAAQAKAAAJAFQAHAGABAHQAAADgDACQgCADgDAAQgDAAgDgCQgDgCAAgEIgBgFQgCgEgDgCQgDgCgEAAQgJAAgHAJQgHAIAAAPQAAAMAIALQAIAKALAAQAJAAAIgGQADgDAGgIIACACQgFAKgFAHQgLALgOAAQgNAAgLgKg");
	this.shape_6.setTransform(248,882);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARA9IAAgEIAKgCQACAAAAgFIgBgEIgCgHIgIgSIguAAIgIAWIgCAGQAAAFAEABIAJACIAAAEIgkAAIAAgEQAHgBADgEQAEgFAIgTIAmhYIACAAIAtBlQAFAKACADQADACAGABIAAAEgAAPAOIgTgwIgVAwIAoAAg");
	this.shape_7.setTransform(237.6,880.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAeQgMgMAAgSQAAgRALgNQALgMARABQARAAALALQAMALAAATQAAARgLANQgLAMgSAAQgPAAgMgMgAgOggQgJAJABATQAAAPAGANQAIAOALAAQAKgBAFgIQAGgKAAgOQgBgPgGgNQgHgNgMAAQgGAAgGAEg");
	this.shape_8.setTransform(222.1,882.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAsQgCgFAAgJIAAg0IgKAAIAAgBIgBgBIABgBIACgCIAJgIIALgRIACAAIAAACIAAAVIASAAIAAAHIgSAAIgBAxQAAAHACADQACAGAGAAQADAAACgBIAGgFIACACIgBADQgGAGgEACQgFADgGAAQgIAAgEgJg");
	this.shape_9.setTransform(215.3,881);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLAsQgCgFAAgJIAAg0IgJAAIgBgBIAAgBIAAgBIADgCIAJgIIAMgRIABAAIAAACIAAAVIASAAIAAAHIgSAAIAAAxQgBAHACADQACAGAGAAQAEAAABgBIAGgFIACACIgCADQgFAGgEACQgFADgFAAQgJAAgFgJg");
	this.shape_10.setTransform(205.8,881);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAGApIAAgDIACAAIADgCIACgCIgEgHIgEgIIgFgHIgDgHIgPAWIgDAGIAAACIABACIAFABIAAADIgZAAIAAgDIAGgDQADgBAEgGIATgcIgQgaIgHgJIgIgCIAAgCIAlAAIAAACIgGABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAACAFAIIAFAKIAIgLQAEgHAAgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgBIAAgCIAdAAIAAACQgFAAgEACQgEACgCAEIgPAVIAXAjQAFAHADACQACACAFAAIAAADg");
	this.shape_11.setTransform(198.6,882.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_12.setTransform(190.2,882.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEAqIAAgDQAHgBACgCQADgDAAgJIAAglQAAgHgDgFQgDgFgHAAQgEAAgGAEIgHAGIAAAwQAAAGADADQACACAGAAIAAADIgmAAIAAgDQAGgBADgCQACgDAAgHIAAgsIgBgIQgBgDgGAAIgBAAIgCAAIAAgDIARgFIAIgDIABAAIAAACIAAAMIAMgKQAGgFAIAAQAGAAAFAEQAJAHAAARIAAAoQAAAHADACQACADAGAAIAAADg");
	this.shape_13.setTransform(181.7,882);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAEAqIAAgDQAHgBACgCQADgDAAgJIAAglQAAgHgDgFQgDgFgHAAQgEAAgGAEIgHAGIAAAwQAAAGADADQACACAGAAIAAADIgmAAIAAgDQAGgBADgCQACgDAAgHIAAgsIgBgIQgBgDgGAAIgBAAIgCAAIAAgDIARgFIAIgDIABAAIAAACIAAAMIAMgKQAGgFAIAAQAGAAAFAEQAJAHAAARIAAAoQAAAHADACQACADAGAAIAAADg");
	this.shape_14.setTransform(168.2,882);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYApIgCgBIgVg0IgVA0IAAABIgBAAIgBAAIgahAIgGgMQgBgDgFAAIAAgCIAhAAIAAACQgEAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABIADAMIAGAPIAKAXIAPggIABgBIgCgHIgEgJIgEgGQgCgBgEAAIAAgCIAkAAIAAACIgIABQgDACAAADIABAEIABAFIAQApIAQgmIACgGIABgGQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgGgBIAAgCIAXAAIAAACIgEACIgEAIIgcBEIgBABg");
	this.shape_15.setTransform(157.2,882.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAeQgMgMAAgSQAAgRALgNQALgMARABQARAAALALQAMALAAATQAAARgLANQgLAMgRAAQgQAAgMgMgAgOggQgJAJAAATQABAPAGANQAIAOALAAQAKgBAGgIQAEgKABgOQAAgPgHgNQgHgNgMAAQgGAAgGAEg");
	this.shape_16.setTransform(146.2,882.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAPA+IAAgLQgFAFgEACQgGAEgIAAQgOAAgKgLQgJgMAAgPQAAgTALgNQALgNAQAAQAGAAAFADQAEABADAEIAAgcIgBgIQgBgCgFAAIgCAAIgEABIAAgDIAHgCIAIgCIAIgCIAEgCIAAAAIAAAJIAAALIAAAKIAABHQAAAGACACQABACAGAAIACAAIACAAIAAADIgNAEIgNAFgAgTgGQgHAIAAAPQABAOAGALQAHALAMAAQAGAAAEgEQAFgEAAgEIAAglQAAgLgHgFQgFgEgFAAQgMAAgFAKg");
	this.shape_17.setTransform(137.4,880);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpA9IAAgDQAIAAADgDQACgDAAgGIAAhUQAAgHgCgCQgBgCgFAAIgCAAIgCABIAAgDIAIgCIASgGIABAAIAAABIAAALIAKgIQAHgFAIAAQAMAAAJAKQAJALAAARQAAASgLAOQgKAOgQgBIgIgBQgFgBgFgGIAAAeQAAAIADADQADACAJAAIAAADgAgIguQgFAFAAADIAAArQACAHAFACQAEADAFABQAKAAAHgKQAGgJAAgQQAAgQgHgIQgHgIgJAAQgFAAgGADg");
	this.shape_18.setTransform(128,883.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAeQgMgMAAgSQAAgRALgNQALgMARABQARAAALALQAMALAAATQAAARgLANQgLAMgSAAQgPAAgMgMgAgOggQgJAJAAATQABAPAGANQAIAOALAAQAKgBAFgIQAFgKABgOQAAgPgHgNQgHgNgMAAQgGAAgGAEg");
	this.shape_19.setTransform(119.2,882.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAqIAAgEQAIAAADgCQACgDAAgGIAAgnQAAgJgBgEQgCgDgEAAIgCAAIgEABIAAgEIALgDIAHgCIAJgFIABABIAAACIAAAOQAFgHAFgFQAFgFAGAAQAEAAADAEQADACAAAEQAAADgCADQgCACgEAAQgDAAgDgDQgEgCgCAAQgDAAgEAEQgEAGAAAEIAAAoQAAAHADADQADADAIgBIAAAEg");
	this.shape_20.setTransform(111.9,882);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPA+IAAgLQgFAFgEACQgGAEgIAAQgOAAgKgLQgJgMAAgPQAAgTALgNQALgNAQAAQAGAAAFADQADABAEAEIAAgcIgBgIQgCgCgEAAIgCAAIgEABIAAgDIAHgCIAIgCIAIgCIAEgCIAAAAIAAAJIAAALIAAAKIAABHQAAAGABACQACACAGAAIACAAIACAAIAAADIgNAEIgNAFgAgTgGQgHAIAAAPQABAOAGALQAHALAMAAQAGAAAEgEQAFgEAAgEIAAglQgBgLgGgFQgFgEgFAAQgMAAgFAKg");
	this.shape_21.setTransform(104.5,880);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_22.setTransform(294.3,862.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAFA9IAAgCQAHgBADgDQACgCAAgKIAAgkQAAgHgDgFQgDgGgHAAQgHAAgGAFQgGAFAAABIAAArQAAAKACACQADADAHABIAAACIgnAAIAAgCQAIgBACgDQACgCAAgKIAAhTQAAgFgBgDQgCgCgFAAIgCAAIgBAAIAAgDIAJgCIAIgDIAIgCIABAAIAAA2IAJgJQAHgFAJAAQAOAAAGALQACAHAAAJIAAAkQAAAJACADQACADAHABIAAACg");
	this.shape_23.setTransform(285.8,860);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAsQgBgFAAgJIAAg0IgKAAIAAgBIgBgBIABgBIACgCIAJgIIALgRIACAAIAAACIAAAVIASAAIAAAHIgSAAIAAAxQAAAHABADQACAGAGAAQADAAACgBIAGgFIACACIgBADQgFAGgFACQgGADgEAAQgKAAgEgJg");
	this.shape_24.setTransform(278.9,861);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdApIAAgCQAHgBADgCQACgDAAgHIAAglQAAgIgCgEQgDgIgJAAQgGAAgGAEIgIAHIAAAsQAAAHADAEQACAEAIAAIAAACIgnAAIAAgCQAIgBADgDQACgDAAgMIAAgXQAAgOgCgFQgDgJgJAAQgGAAgFADQgFADgEAFIAAAvQAAAHADACQACADAIAAIAAACIgoAAIAAgCQAHgBACgBQADgDAAgIIAAgsQAAgGgBgCQgCgDgEAAIgDABIgCAAIAAgDIAGgCIAMgEIAIgDIAAAAIAAACIAAAMQAJgIAGgDQAHgDAGAAQAKAAAEAGQADADACAGIALgKQAIgFAJAAQAOAAAFALQADAHAAAOIAAAkQAAAGACACQADACAHABIAAACg");
	this.shape_25.setTransform(264.9,862);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAfQgMgNAAgSQAAgSALgMQAMgLAQAAQARAAAMALQALAMAAASQAAARgLANQgLAMgSAAQgPABgMgMgAgOgfQgIAHAAAUQgBAOAIAOQAGAOAMAAQAKgBAFgIQAGgKAAgOQgBgOgGgNQgHgOgMAAQgGAAgGAFg");
	this.shape_26.setTransform(253.3,862.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdApIAAgDQAIAAADgCQACgDAAgGIAAgnQAAgJgBgDQgCgEgEgBIgCABIgEABIAAgEIALgDIAHgCIAJgFIABABIAAACIAAAOQAFgIAFgEQAFgEAGgBQAEAAADADQADADAAAEQAAADgCADQgCACgEAAQgDAAgDgCQgEgDgCgBQgDABgEAEQgEAFAAAFIAAAoQAAAHADADQADADAIgBIAAADg");
	this.shape_27.setTransform(245.9,862);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggA9IAAgCQAKgBADgCQACgEAAgJIAAg4IgPAAIAAgGIAPAAQAAgOAEgJQAHgSATAAQAIAAAGACQAGAEAAAFQAAADgCACQgCACgDABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgEgGIgCgCIgDgDIgEgBQgHAAgBAGIgBAJIAAAVIAUAAIAAAGIgUAAIAAA4QAAAJABAEQADACALABIAAACg");
	this.shape_28.setTransform(240.5,860);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAaIgEgjIgBgEIAAgEQAAgDABgDQABgCADAAQAEAAACACIAAAGIAAACIAAADIgEAmg");
	this.shape_29.setTransform(230.8,856.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLAsQgBgFgBgJIAAg0IgJAAIAAgBIgBgBIABgBIACgCIAJgIIAMgRIABAAIAAACIAAAVIASAAIAAAHIgSAAIAAAxQAAAHABADQACAGAGAAQADAAACgBIAGgFIACACIgBADQgFAGgFACQgFADgFAAQgJAAgFgJg");
	this.shape_30.setTransform(226.8,861);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqQAAgFgBgCQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_31.setTransform(221.7,860);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_32.setTransform(215.8,862);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_33.setTransform(209.7,860);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAApIAAgDIgbg/QgDgIgEgDQgCgBgEgBIAAgCIAjAAIAAACIgGABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAABIAAACIABAEIASArIAPgmIADgGIABgFQAAgDgEgCIgFgBIAAgCIAZAAIAAACQgEABgCACIgGAMIgZA+IgBACIgBAAg");
	this.shape_34.setTransform(202.7,862.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAPA+IAAgLQgFAFgEACQgGAEgIAAQgPAAgJgLQgJgMAAgPQAAgTALgNQALgNAQAAQAFAAAGADQAEABADAEIAAgcIgBgIQgCgCgEAAIgCAAIgDABIAAgDIAGgCIAIgCIAHgCIAFgCIABAAIAAAJIAAALIAAAKIgBBHQAAAGACACQABACAGAAIACAAIACAAIAAADIgNAEIgOAFgAgUgGQgFAIgBAPQAAAOAHALQAGALANAAQAGAAAFgEQADgEABgEIAAglQAAgLgHgFQgGgEgFAAQgKAAgHAKg");
	this.shape_35.setTransform(189.4,860);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_36.setTransform(180.7,862.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_37.setTransform(173.3,862);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_38.setTransform(166.3,862);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_39.setTransform(160.2,860);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAdApIAAgCQAHgBADgCQACgDAAgHIAAglQAAgIgCgEQgDgIgJAAQgGAAgGAEIgIAHIAAAsQAAAHADAEQACAEAIAAIAAACIgnAAIAAgCQAIgBADgDQACgDAAgMIAAgXQAAgOgCgFQgDgJgJAAQgGAAgFADQgFADgEAFIAAAvQAAAHADACQACADAIAAIAAACIgoAAIAAgCQAHgBACgBQADgDAAgIIAAgsQAAgGgBgCQgCgDgEAAIgDABIgCAAIAAgDIAGgCIAMgEIAIgDIAAAAIAAACIAAAMQAJgIAGgDQAHgDAGAAQAKAAAEAGQADADACAGIALgKQAIgFAJAAQAOAAAFALQADAHAAAOIAAAkQAAAGACACQADACAHABIAAACg");
	this.shape_40.setTransform(150.9,862);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAAAaIgEgjIgBgEIAAgEQAAgDABgDQABgCADAAQAEAAABACIABAGIAAACIAAADIgEAmg");
	this.shape_41.setTransform(142.1,856.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_42.setTransform(132.1,862.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_43.setTransform(124.7,862);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgbAfQgMgNAAgSQAAgSALgMQAMgLAQAAQARAAAMALQALAMAAASQAAARgLANQgLAMgRAAQgRABgLgMgAgOgfQgIAHAAAUQgBAOAIAOQAGAOAMAAQAKgBAGgIQAEgKAAgOQAAgOgGgNQgHgOgMAAQgGAAgGAFg");
	this.shape_44.setTransform(116.6,862.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgbAfQgMgNAAgSQAAgSALgMQAMgLAQAAQARAAAMALQALAMAAASQAAARgLANQgLAMgRAAQgRABgLgMgAgOgfQgIAHAAAUQgBAOAIAOQAGAOAMAAQAKgBAGgIQAEgKAAgOQAAgOgGgNQgHgOgMAAQgGAAgGAFg");
	this.shape_45.setTransform(107.6,862.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAFA9IAAgCQAHgBADgDQACgCAAgKIAAgkQAAgHgDgFQgDgGgHAAQgHAAgGAFQgGAFAAABIAAArQAAAKACACQADADAHABIAAACIgnAAIAAgCQAIgBACgDQACgCAAgKIAAhTQAAgFgBgDQgCgCgFAAIgBAAIgCAAIAAgDIAJgCIAIgDIAIgCIABAAIAAA2IAJgJQAHgFAJAAQAOAAAGALQACAHAAAJIAAAkQAAAJACADQACADAHABIAAACg");
	this.shape_46.setTransform(98.6,860);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgYAgQgKgLAAgTQAAgRALgNQAMgNARAAQAKAAAJAFQAHAGABAHQAAADgDACQgCADgDAAQgDAAgDgCQgDgCAAgEIgBgFQgCgEgDgCQgDgCgEAAQgJAAgHAJQgHAIAAAPQAAAMAIALQAIAKALAAQAJAAAIgGQADgDAGgIIACACQgFAKgFAHQgLALgOAAQgNAAgLgKg");
	this.shape_47.setTransform(90.1,862);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgiA6QgEgDAAgFQAAgEADgCQACgCAEAAIAHACIAGABQAFAAAFgMQAGgMAAgEIAAgBIgBgCIgbg7QgDgHgDgCQgCgCgFgBIAAgCIAlAAIAAACIgGABQgEABAAAEIAAACIACAEIAUAsIAQgsIABgDIABgEQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgEgBIgDgBIAAgCIAYAAIAAACQgEABgBACIgDAGIgcBIQgGATgGAJQgIAIgKAAQgEAAgFgCg");
	this.shape_48.setTransform(296,844);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUA+IAAgDQAIgBADgCQADgDAAgHIAAhVIgBgIQgCgDgFAAIgDAAIgDABIAAgDIAbgJIABABIAAACIAABpQAAAHADACQACADAIAAIAAADg");
	this.shape_49.setTransform(289,839.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgpA9IAAgCQAIgBADgDQACgDAAgHIAAhTQAAgGgCgCQgBgCgFAAIgCAAIgCAAIAAgDIAIgDIASgGIABAAIAAACIAAAMIAKgJQAHgFAIAAQAMAAAJAKQAJAKAAATQAAARgLANQgKAOgQABIgIgBQgFgDgFgEIAAAcQAAAKADABQADACAJABIAAADgAgIgtQgFAEAAAEIAAArQACAFAFAEQAEACAFAAQAKAAAHgJQAGgJAAgQQAAgQgHgIQgHgIgJAAQgFAAgGAEg");
	this.shape_50.setTransform(281.8,843.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAdApIAAgCQAHgBADgCQACgDAAgHIAAglQAAgIgCgEQgDgIgJAAQgGAAgGAEIgIAHIAAAsQAAAHADAEQACAEAIAAIAAACIgnAAIAAgCQAIgBADgDQACgDAAgMIAAgXQAAgOgCgFQgDgJgJAAQgGAAgFADQgFADgEAFIAAAvQAAAHADACQACADAIAAIAAACIgoAAIAAgCQAHgBACgBQADgDAAgIIAAgsQAAgGgBgCQgCgDgEAAIgDABIgCAAIAAgDIAGgCIAMgEIAIgDIAAAAIAAACIAAAMQAJgIAGgDQAHgDAGAAQAKAAAEAGQADADACAGIALgKQAIgFAJAAQAOAAAFALQADAHAAAOIAAAkQAAAGACACQADACAHABIAAACg");
	this.shape_51.setTransform(270.7,842);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_52.setTransform(261,840);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_53.setTransform(255.1,842);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAPA+IAAgLQgFAFgEACQgGAEgIAAQgOAAgKgLQgJgMAAgPQAAgTALgNQALgNAQAAQAGAAAFADQAEABADAEIAAgcIgBgIQgBgCgFAAIgCAAIgEABIAAgDIAHgCIAIgCIAIgCIAEgCIAAAAIAAAJIAAALIAAAKIAABHQAAAGACACQABACAGAAIACAAIACAAIAAADIgNAEIgNAFgAgTgGQgHAIAAAPQABAOAGALQAHALAMAAQAGAAAEgEQAFgEAAgEIAAglQAAgLgHgFQgFgEgFAAQgMAAgFAKg");
	this.shape_54.setTransform(242.7,840);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgUA+IAAgDQAIgBADgCQADgDAAgHIAAhVIgBgIQgCgDgFAAIgDAAIgDABIAAgDIAbgJIABABIAAACIAABpQAAAHADACQACADAIAAIAAADg");
	this.shape_55.setTransform(235.5,839.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AARApIAAgBIAAgOQgGAHgFADQgGAGgJAAQgHgBgHgFQgHgFAAgNIAAgtQAAgGgDgDQgCgCgGAAIAAgCIAaAAIAAA3QAAAGACAEQADAGAJAAQAFAAAFgEQAEgCADgEIAAgvQAAgHgDgCQgCgCgIAAIAAgDIAcAAIAAA8QAAAHACACQADACAGAAIAAACIgHACIgHACIgKAFIgBgBg");
	this.shape_56.setTransform(228.4,842.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgbAfQgMgNAAgSQAAgSALgLQAMgNAQAAQARAAAMAMQALAMAAASQAAARgLANQgLANgSAAQgPgBgMgLgAgOgfQgIAIAAATQgBAOAIAOQAGANAMAAQAKAAAFgJQAGgIgBgPQAAgPgGgMQgHgOgMAAQgGAAgGAFg");
	this.shape_57.setTransform(219.5,842.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAYAqIgCgBIgVg0IgVA0IAAABIgBAAIgBgBIgahAIgGgNQgBgCgFAAIAAgCIAhAAIAAACQgEAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIADANIAGANIAKAYIAPghIABgBIgCgGIgEgIIgEgHQgCgBgEAAIAAgCIAkAAIAAACIgIABQgDACAAADIABAEIABAFIAQAoIAQgkIACgHIABgGQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgGgBIAAgCIAXAAIAAACIgEACIgEAIIgcBEIgBACg");
	this.shape_58.setTransform(208.5,842.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AARApIAAgBIAAgOQgGAHgFADQgGAGgJAAQgHgBgHgFQgHgFAAgNIAAgtQAAgGgDgDQgCgCgGAAIAAgCIAaAAIAAA3QAAAGACAEQADAGAJAAQAFAAAFgEQAEgCADgEIAAgvQAAgHgDgCQgCgCgIAAIAAgDIAcAAIAAA8QAAAHACACQADACAGAAIAAACIgHACIgHACIgKAFIgBgBg");
	this.shape_59.setTransform(193,842.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgbAfQgMgNAAgSQAAgSALgLQAMgNAQAAQARAAAMAMQALAMAAASQAAARgLANQgLANgRAAQgRgBgLgLgAgOgfQgIAIAAATQgBAOAIAOQAGANAMAAQAKAAAGgJQAEgIAAgPQAAgPgGgMQgHgOgMAAQgGAAgGAFg");
	this.shape_60.setTransform(184.1,842.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgaA7IAAgDQAMAAADgEQADgCAAgMIAAggIgXghQgMgSgFgFQgFgFgHgBIAAgCIAyAAIAAACIgJABQgEACABAEIAAACIACAFIAaAnIAagnIACgFIAAgCQAAgEgDgCIgJgBIAAgCIAnAAIAAACQgFABgFADQgGAEgJAOIgaAnIAAAjQAAALAEACQADACAMABIAAADg");
	this.shape_61.setTransform(173.2,840.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgHA7QgDgDAAgEQAAgEADgDQADgCAEAAQADAAADACQADADAAAEQAAAEgDADQgDACgDABQgEgBgDgCgAgBAeIAAgJIACgKIAHgRIAFgNQACgHAAgFQAAgJgFgIQgFgHgJAAQgHAAgFADQgFAEAAAEQAAACAEAEQADAEAAADQAAAEgCACQgCACgDAAQgEAAgDgDQgCgDAAgGQAAgJAHgJQAIgIAPAAQANABAJAHQAJAIAAANQAAAMgNAQQgPASgCAQg");
	this.shape_62.setTransform(158.5,840.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAdApIAAgCQAHgBADgCQACgDAAgHIAAglQAAgIgCgEQgDgIgJAAQgGAAgGAEIgIAHIAAAsQAAAHADAEQACAEAIAAIAAACIgnAAIAAgCQAIgBADgDQACgDAAgMIAAgXQAAgOgCgFQgDgJgJAAQgGAAgFADQgFADgEAFIAAAvQAAAHADACQACADAIAAIAAACIgoAAIAAgCQAHgBACgBQADgDAAgIIAAgsQAAgGgBgCQgCgDgEAAIgDABIgCAAIAAgDIAGgCIAMgEIAIgDIAAAAIAAACIAAAMQAJgIAGgDQAHgDAGAAQAKAAAEAGQADADACAGIALgKQAIgFAJAAQAOAAAFALQADAHAAAOIAAAkQAAAGACACQADACAHABIAAACg");
	this.shape_63.setTransform(147.3,842);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgbAfQgMgNAAgSQAAgSALgLQAMgNAQAAQARAAAMAMQALAMAAASQAAARgLANQgLANgRAAQgQgBgMgLgAgOgfQgJAIAAATQAAAOAIAOQAGANAMAAQAKAAAGgJQAEgIAAgPQABgPgHgMQgHgOgMAAQgHAAgFAFg");
	this.shape_64.setTransform(135.7,842.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgdApIAAgCQAIgBADgCQACgCAAgIIAAgmQAAgJgBgDQgCgFgEAAIgCABIgEAAIAAgDIALgDIAHgDIAJgDIABAAIAAACIAAAPQAFgJAFgEQAFgEAGAAQAEAAADACQADADAAAEQAAAEgCACQgCACgEABQgDAAgDgDQgEgEgCAAQgDAAgEAGQgEAFAAAFIAAAmQAAAIADADQADADAIAAIAAACg");
	this.shape_65.setTransform(128.3,842);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AggA9IAAgCQAKAAADgEQACgDAAgJIAAg3IgPAAIAAgHIAPAAQAAgNAEgKQAHgSATgBQAIAAAGAEQAGADAAAFQAAADgCACQgCADgDAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgEgFIgCgDIgDgDIgEgBQgHAAgBAHIgBAJIAAAUIAUAAIAAAHIgUAAIAAA3QAAAJABADQADADALABIAAACg");
	this.shape_66.setTransform(122.9,840);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgLAsQgBgFAAgJIAAg0IgKAAIAAgBIgBgBIABgBIACgCIAJgIIALgRIACAAIAAACIAAAVIASAAIAAAHIgSAAIAAAxQAAAHABADQACAGAGAAQADAAACgBIAGgFIACACIgBADQgFAGgFACQgGADgEAAQgKAAgEgJg");
	this.shape_67.setTransform(112.4,841);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_68.setTransform(107.3,840);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_69.setTransform(101.4,842);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_70.setTransform(95.3,840);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAAApIAAgDIgbg/QgDgIgEgDQgCgCgEAAIAAgCIAjAAIAAACIgGABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAADIABAEIASArIAPgmIADgGIABgFQAAgDgEgCIgFgBIAAgCIAZAAIAAACQgEAAgCADIgGALIgZA/IgBACIgBABg");
	this.shape_71.setTransform(88.3,842.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAOA+IAAgLQgEAFgEACQgGAEgHAAQgQAAgJgLQgJgMAAgPQAAgTALgNQALgNAQAAQAFAAAGADQADABADAEIAAgcIgBgIQgBgCgEAAIgCAAIgEABIAAgDIAIgCIAIgCIAGgCIAFgCIAAAAIAAAJIAAALIAAAKIAABHQAAAGABACQACACAGAAIACAAIACAAIAAADIgNAEIgOAFgAgUgGQgFAIAAAPQAAAOAGALQAGALANAAQAGAAAFgEQADgEAAgEIAAglQAAgLgFgFQgHgEgFAAQgKAAgHAKg");
	this.shape_72.setTransform(309.8,820);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_73.setTransform(301.2,822.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_74.setTransform(293.8,822);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_75.setTransform(286.8,822);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_76.setTransform(280.7,820);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAdApIAAgCQAHgBADgCQACgDAAgHIAAglQAAgIgCgEQgDgIgJAAQgGAAgGAEIgIAHIAAAsQAAAHADAEQACAEAIAAIAAACIgnAAIAAgCQAIgBADgDQACgDAAgMIAAgXQAAgOgCgFQgDgJgJAAQgGAAgFADQgFADgEAFIAAAvQAAAHADACQACADAIAAIAAACIgoAAIAAgCQAHgBACgBQADgDAAgIIAAgsQAAgGgBgCQgCgDgEAAIgDABIgCAAIAAgDIAGgCIAMgEIAIgDIAAAAIAAACIAAAMQAJgIAGgDQAHgDAGAAQAKAAAEAGQADADACAGIALgKQAIgFAJAAQAOAAAFALQADAHAAAOIAAAkQAAAGACACQADACAHABIAAACg");
	this.shape_77.setTransform(271.3,822);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgeAlQgGgFAAgJQAAgMAOgJQAHgEAXgJIAAgHQAAgKgBgDQgDgGgIAAQgFAAgEADQgEACAAAEIABAEIAAACQAAAGgEABIgEABQgEABgCgDQgCgCAAgEQAAgGAIgGQAHgIAPAAQAQAAAGAMQADAGAAALIAAAiIABAHQABAEAEAAIADgBIAFgDIAAAFIgGAFQgFAEgFAAQgGAAgDgEQgDgEAAgFIgLAJQgHAEgIABQgIAAgFgGgAgHAAQgNAHAAALQAAAHAGAEQADACAEAAQAGAAAFgDQAEgDAAgFIAAgbQgIADgHAEg");
	this.shape_78.setTransform(256.1,822);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_79.setTransform(243.8,822);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_80.setTransform(236.8,822);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_81.setTransform(229.3,822.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgYAgQgKgLAAgTQAAgRALgNQAMgNAQAAQALAAAJAFQAHAGAAAHQAAADgCACQgCADgDAAQgDAAgDgCQgCgCgBgEIgCgFQgBgEgCgCQgDgCgFAAQgJAAgHAJQgHAIAAAPQAAAMAIALQAHAKAMAAQAKAAAGgGQAFgDAEgIIADACQgFAKgFAHQgLALgOAAQgNAAgLgKg");
	this.shape_82.setTransform(221.3,822);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgXAgQgLgLAAgTQAAgRAMgNQALgNAQAAQAMAAAHAFQAJAGgBAHQAAADgBACQgCADgFAAQgDAAgCgCQgDgCgBgEIgBgFQAAgEgDgCQgEgCgEAAQgJAAgHAJQgHAIAAAPQAAAMAIALQAHAKAMAAQAJAAAHgGQAEgDAFgIIADACQgFAKgGAHQgKALgOAAQgNAAgKgKg");
	this.shape_83.setTransform(213.3,822);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgeAlQgGgFABgJQAAgMAMgJQAJgEAXgJIAAgHQAAgKgCgDQgDgGgJAAQgEAAgEADQgEACAAAEIABAEIAAACQAAAGgEABIgEABQgEABgCgDQgCgCAAgEQAAgGAIgGQAHgIAPAAQAQAAAGAMQADAGAAALIAAAiIABAHQABAEAEAAIADgBIAFgDIAAAFIgGAFQgFAEgFAAQgGAAgDgEQgDgEAAgFIgLAJQgHAEgIABQgHAAgGgGgAgHAAQgNAHAAALQAAAHAGAEQADACAEAAQAGAAAEgDQAFgDABgFIAAgbQgJADgHAEg");
	this.shape_84.setTransform(205.8,822);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAOA+IAAgLQgEAFgEACQgGAEgHAAQgQAAgJgLQgJgMAAgPQAAgTALgNQALgNAQAAQAFAAAGADQADABADAEIAAgcIgBgIQgBgCgEAAIgCAAIgDABIAAgDIAHgCIAHgCIAHgCIAFgCIABAAIAAAJIAAALIAAAKIgBBHQAAAGACACQABACAGAAIACAAIACAAIAAADIgNAEIgOAFgAgUgGQgFAIAAAPQgBAOAHALQAGALANAAQAGAAAFgEQADgEAAgEIAAglQABgLgHgFQgFgEgGAAQgKAAgHAKg");
	this.shape_85.setTransform(192.6,820);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgUA+IAAgDQAIgBADgCQADgDAAgHIAAhVIgBgIQgCgDgFAAIgDAAIgDABIAAgDIAbgJIABABIAAACIAABpQAAAHADACQACADAIAAIAAADg");
	this.shape_86.setTransform(185.4,819.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AARApIAAgBIAAgOQgGAHgFADQgGAFgJABQgHAAgHgGQgHgFAAgNIAAgsQAAgIgDgCQgCgCgGAAIAAgDIAaAAIAAA4QAAAGACAEQADAGAJAAQAFAAAFgEQAEgCADgEIAAgvQAAgHgDgCQgCgCgIAAIAAgEIAcAAIAAA9QAAAGACADQADACAGgBIAAADIgHACIgHACIgKAFIgBgBg");
	this.shape_87.setTransform(178.3,822.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgbAeQgMgMAAgSQAAgSALgLQAMgMAQgBQARAAAMAMQALALAAATQAAARgLANQgLANgRAAQgQAAgMgNgAgOggQgJAIAAAUQAAAOAIAOQAGANAMAAQAKABAGgKQAEgJAAgOQABgPgHgNQgHgNgMAAQgHAAgFAEg");
	this.shape_88.setTransform(169.4,822.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAYAqIgCgCIgVgzIgVAzIAAACIgBAAIgBgBIgahAIgGgMQgBgCgFgBIAAgDIAhAAIAAADQgEAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIADANIAGANIAKAYIAPghIABgBIgCgGIgEgJIgEgFQgCgCgEAAIAAgDIAkAAIAAADIgIACQgDAAAAAEIABAEIABAFIAQApIAQglIACgHIABgGQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgGgCIAAgDIAXAAIAAADIgEACIgEAIIgcBEIgBACg");
	this.shape_89.setTransform(158.4,822.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AARApIAAgBIAAgOQgGAHgFADQgGAFgJABQgHAAgHgGQgHgFAAgNIAAgsQAAgIgDgCQgCgCgGAAIAAgDIAaAAIAAA4QAAAGACAEQADAGAJAAQAFAAAFgEQAEgCADgEIAAgvQAAgHgDgCQgCgCgIAAIAAgEIAcAAIAAA9QAAAGACADQADACAGgBIAAADIgHACIgHACIgKAFIgBgBg");
	this.shape_90.setTransform(142.9,822.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgbAeQgMgMAAgSQAAgSALgLQAMgMAQgBQARAAAMAMQALALAAATQAAARgLANQgLANgRAAQgQAAgMgNgAgOggQgJAIAAAUQAAAOAIAOQAHANALAAQAKABAGgKQAEgJAAgOQABgPgHgNQgHgNgMAAQgGAAgGAEg");
	this.shape_91.setTransform(134,822.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgiA6QgEgDAAgFQAAgEACgCQADgCAEAAIAHACIAGABQAFAAAGgMQAFgMAAgEIgBgBIAAgCIgcg7QgCgHgDgCQgCgCgEgBIAAgCIAlAAIAAACIgHABQgEABAAAEIABACIABAEIATAsIARgsIABgDIAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgEgBIgDgBIAAgCIAZAAIAAACQgEABgCACIgDAGIgcBIQgGATgHAJQgGAIgLAAQgEAAgFgCg");
	this.shape_92.setTransform(124.9,824);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAEAqIAAgDQAHgBACgDQADgCAAgJIAAgkQAAgJgDgEQgDgFgHAAQgEAAgGADIgHAHIAAAwQAAAGADADQACACAGAAIAAADIgmAAIAAgDQAGgBADgCQACgCAAgJIAAgrIgBgIQgBgEgGABIgBAAIgCAAIAAgDIARgGIAIgCIABAAIAAACIAAAMIAMgKQAGgFAIABQAGgBAFAEQAJAHAAARIAAAoQAAAGADADQACADAGAAIAAADg");
	this.shape_93.setTransform(111.5,822);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_94.setTransform(103,822.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_95.setTransform(95.1,822.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgdAqIAAgDQAIgBADgCQACgCAAgIIAAgmQAAgJgBgEQgCgEgEAAIgCABIgEAAIAAgCIALgEIAHgDIAJgDIABAAIAAACIAAAPQAFgJAFgEQAFgFAGABQAEAAADACQADADAAAEQAAADgCADQgCADgEAAQgDAAgDgEQgEgCgCgBQgDAAgEAGQgEAEAAAGIAAAmQAAAIADADQADADAIAAIAAADg");
	this.shape_96.setTransform(88.2,822);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgXAgQgLgLAAgTQAAgRAMgNQALgNAQAAQAMAAAHAFQAJAGgBAHQAAADgBACQgCADgFAAQgDAAgCgCQgDgCgBgEIgBgFQgBgEgCgCQgDgCgFAAQgJAAgHAJQgHAIAAAPQAAAMAIALQAHAKAMAAQAKAAAGgGQAFgDAEgIIADACQgFAKgGAHQgKALgOAAQgNAAgKgKg");
	this.shape_97.setTransform(81.1,822);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_98.setTransform(73.8,822);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_99.setTransform(297.1,802.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAdApIAAgCQAHgBADgCQACgDAAgHIAAglQAAgIgCgEQgDgIgJAAQgGAAgGAEIgIAHIAAAsQAAAHADAEQACAEAIAAIAAACIgnAAIAAgCQAIgBADgDQACgDAAgMIAAgXQAAgOgCgFQgDgJgJAAQgGAAgFADQgFADgEAFIAAAvQAAAHADACQACADAIAAIAAACIgoAAIAAgCQAHgBACgBQADgDAAgIIAAgsQAAgGgBgCQgCgDgEAAIgDABIgCAAIAAgDIAGgCIAMgEIAIgDIAAAAIAAACIAAAMQAJgIAGgDQAHgDAGAAQAKAAAEAGQADADACAGIALgKQAIgFAJAAQAOAAAFALQADAHAAAOIAAAkQAAAGACACQADACAHABIAAACg");
	this.shape_100.setTransform(286.2,802);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgeAlQgFgFgBgJQAAgMANgJQAIgEAXgJIAAgIQAAgIgBgEQgDgGgJAAQgEAAgEADQgEACAAAEIAAAEIABACQAAAFgDADIgFAAQgEAAgCgCQgCgDAAgDQAAgGAHgGQAIgIAPABQAQAAAGALQADAGAAALIAAAiIABAIQABADADAAIAEgBIAEgCIAAAEIgGAGQgEADgGAAQgFAAgDgEQgDgDAAgGIgKAJQgJAEgHAAQgHABgGgGgAgHAAQgNAHAAALQAAAHAFAEQAEACAEAAQAGAAAEgCQAGgEgBgFIAAgaQgJACgGAEg");
	this.shape_101.setTransform(275.5,802);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_102.setTransform(267.7,802);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgaAeQgJgNAAgQQAAgRAKgMQALgNAPAAQANAAAJAIQAJAJAAAQIg2AAQABATAIAJQAIAKALAAQAJAAAGgFQAHgFAFgJIADABQgEALgJAKQgKAJgOAAQgQAAgJgMgAAOgOQgBgJgCgEQgFgIgJAAQgKAAgFAJQgDAFgBAHIAkAAIAAAAg");
	this.shape_103.setTransform(255.7,802.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAFA9IAAgCQAIgBACgDQACgCAAgKIAAgkQAAgHgDgFQgCgGgIAAQgHAAgGAFQgGAFAAABIAAArQAAAKACACQACADAIABIAAACIgnAAIAAgCQAIgBACgDQACgCAAgKIAAhTQAAgFgCgDQgBgCgFAAIgCAAIgBAAIAAgDIAJgCIAIgDIAIgCIABAAIAAA2IAJgJQAHgFAJAAQAOAAAGALQACAHAAAJIAAAkQAAAJACADQADADAGABIAAACg");
	this.shape_104.setTransform(247.2,800);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgLAsQgBgFgBgJIAAg0IgJAAIAAgBIgBgBIABgBIACgCIAJgIIAMgRIABAAIAAACIAAAVIASAAIAAAHIgSAAIAAAxQAAAHABADQACAGAGAAQADAAACgBIAGgFIACACIgBADQgFAGgFACQgFADgFAAQgJAAgFgJg");
	this.shape_105.setTransform(240.3,801);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_106.setTransform(229.8,802);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_107.setTransform(223.7,800);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgMApIgIgCIgCABIgBABIgCAAIAAgcIADAAQACAKADAFQAGAKALAAQAHAAADgDQAEgEAAgGQAAgDgCgEQgCgDgGgEIgJgFQgKgGgGgFQgFgGAAgIQAAgKAHgGQAHgGALAAIAJABIAHACIACAAIABgCIACAAIABAZIgDAAQgCgJgDgEQgFgJgJAAQgHAAgDAEQgEADAAAFQAAAJANAGIAKAGQATAJAAAOQAAAKgIAHQgIAGgLAAIgMgBg");
	this.shape_108.setTransform(213.3,802);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_109.setTransform(207.2,800);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAFA9IAAgCQAHgBADgDQACgCAAgKIAAgkQAAgHgDgFQgDgGgHAAQgHAAgGAFQgGAFAAABIAAArQAAAKACACQADADAHABIAAACIgnAAIAAgCQAIgBACgDQACgCAAgKIAAhTQAAgFgBgDQgCgCgFAAIgBAAIgCAAIAAgDIAJgCIAIgDIAIgCIABAAIAAA2IAJgJQAHgFAJAAQAOAAAGALQACAHAAAJIAAAkQAAAJACADQACADAHABIAAACg");
	this.shape_110.setTransform(200.2,800);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgLAsQgBgFAAgJIAAg0IgKAAIAAgBIgBgBIABgBIACgCIAJgIIALgRIACAAIAAACIAAAVIASAAIAAAHIgSAAIgBAxQAAAHACADQACAGAGAAQADAAACgBIAGgFIACACIgBADQgGAGgEACQgGADgEAAQgKAAgEgJg");
	this.shape_111.setTransform(193.3,801);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAYApIgCgBIgVg0IgVA0IAAABIgBAAIgBAAIgahAIgGgMQgBgDgFAAIAAgDIAhAAIAAADQgEAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIADAMIAGAPIAKAXIAPghIABAAIgCgHIgEgJIgEgFQgCgCgEAAIAAgDIAkAAIAAADIgIACQgDAAAAAEIABAEIABAFIAQApIAQgmIACgGIABgGQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgGgCIAAgDIAXAAIAAADIgEACIgEAIIgcBEIgBABg");
	this.shape_112.setTransform(179.7,802.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgbAeQgMgMAAgSQAAgRALgNQALgMARAAQARAAALAMQAMALAAATQAAARgLANQgLAMgRAAQgQAAgMgMgAgOggQgJAJAAATQABAPAGANQAIAOALAAQAKAAAGgJQAEgKABgOQAAgOgHgOQgHgNgMAAQgGAAgGAEg");
	this.shape_113.setTransform(168.7,802.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAEAqIAAgDQAHgBACgDQADgCAAgJIAAgkQAAgJgDgEQgDgFgHAAQgEAAgGAEIgHAGIAAAwQAAAGADADQACACAGAAIAAADIgmAAIAAgDQAGgBADgCQACgDAAgHIAAgsIgBgIQgBgEgGABIgBAAIgCAAIAAgDIARgFIAIgDIABAAIAAACIAAAMIAMgKQAGgFAIAAQAGAAAFAEQAJAHAAARIAAAoQAAAGADADQACADAGAAIAAADg");
	this.shape_114.setTransform(159.8,802);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAGA9IAAgCIADAAIACgBQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIgBgCIgBgBIgagkIAAAgQAAAHAEACIAJABIAAACIgqAAIAAgCQAJgBACgCQADgCAAgHIAAhYQAAgGgCgBQgCgCgEAAIgDAAIgDAAIAAgCIAIgCIAPgFIAFgBIABAAIAAABIAABJIAXgUIAEgEIAAgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgIgBIAAgDIAlAAIAAADQgKABgGADQgGADgRAPIgEAEIAPAWQANAQAGAFQAHAFAHABIAAACg");
	this.shape_115.setTransform(150.8,800);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AARApIAAgBIAAgOQgGAHgFAEQgGAEgJAAQgHABgHgGQgHgFAAgNIAAgsQAAgIgDgCQgCgBgGgBIAAgDIAaAAIAAA4QAAAGACADQADAHAJAAQAFAAAFgEQAEgCADgEIAAgvQAAgHgDgCQgCgCgIgBIAAgDIAcAAIAAA9QAAAGACADQADACAGgBIAAADIgHACIgHADIgKADIgBAAg");
	this.shape_116.setTransform(137.1,802.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgbAeQgMgMAAgSQAAgRALgNQALgMARAAQARAAALAMQAMALAAATQAAARgLANQgLAMgRAAQgQAAgMgMgAgOggQgJAJAAATQABAPAGANQAIAOALAAQAKAAAGgJQAEgKABgOQAAgOgHgOQgHgNgMAAQgGAAgGAEg");
	this.shape_117.setTransform(128.2,802.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AghA6QgFgDAAgFQAAgEACgCQADgCAEAAIAHACIAGABQAFAAAGgMQAFgMAAgEIgBgBIAAgCIgcg7QgDgHgCgCQgCgCgEgBIAAgCIAlAAIAAACIgHABQgEABAAAEIABACIABAEIATAsIARgsIABgDIAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgEgBIgDgBIAAgCIAYAAIAAACQgDABgCACIgDAGIgcBIQgGATgHAJQgHAIgJAAQgGAAgDgCg");
	this.shape_118.setTransform(119.2,804);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAPA+IAAgLQgFAFgEACQgGAEgIAAQgOAAgKgLQgJgMAAgPQAAgTALgNQALgNAQAAQAGAAAFADQAEABADAEIAAgcIgBgIQgBgCgFAAIgCAAIgEABIAAgDIAHgCIAIgCIAIgCIAEgCIAAAAIAAAJIAAALIAAAKIAABHQAAAGACACQABACAGAAIACAAIACAAIAAADIgNAEIgNAFgAgTgGQgHAIAAAPQABAOAGALQAHALAMAAQAGAAAEgEQAFgEAAgEIAAglQAAgLgHgFQgFgEgFAAQgMAAgFAKg");
	this.shape_119.setTransform(105.9,800);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgUA9IAAgCQAJgBADgCQACgDAAgKIAAgqIgBgHQgBgDgEAAIgCAAIgFABIAAgDIADgBIAVgHIADgBIAAABIAAA+QAAAKADADQACACAIABIAAACgAgGgtQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQACADAAAEQAAADgCADQgDADgDAAQgEAAgCgDg");
	this.shape_120.setTransform(98.7,800);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("Ag7A8IAAgEQAJgBADgCQADgDAAgKIAAhPQAAgKgCgDQgDgCgKgBIAAgEIAwAAQAYABARAHQAeAPAAAkQAAAOgFAMQgGAMgLAIQgHAGgHACQgOAFgTABgAgXgzQgCACAAAEIAABaQAAAFACACQACABAHAAQAUAAAOgJQAUgNAAgfQAAgagRgOQgPgMgXAAIgIABg");
	this.shape_121.setTransform(89.6,800.2);

	this.instance_1 = new lib.NewProject22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,763,0.353,0.239);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgZBSQAPgLAHgMQALgVAAgjQAAgbgFgSQgHgZgVgOIADgDQAPAIAMASQAVAaAAAhQAAAOgEANQgEANgHAMQgIAMgMALQgIAHgGACg");
	this.shape_122.setTransform(639.2,665.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgGBBQgEgCAAgFQAAgEAEgDQADgEADAAQAEAAADAEQADADABAEQgBAEgDADQgDAEgEAAQgDAAgDgEgAgBAgIgBgWIgEgiIgEgcQAAgGACgFQADgEAFgBQAHABACAGIACAJIAAAEIgBAEIgEAlIgFAng");
	this.shape_123.setTransform(633.1,664.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_124.setTransform(625.6,666.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AggAuIAAgDQAJgBADgDQACgCAAgIIAAgrQAAgKgBgDQgCgFgFAAIgCAAIgEABIAAgDIAMgEIAIgDIAKgEIAAABIABACIAAAQQAFgJAGgFQAFgFAHAAQAFAAADADQADADAAAFQAAADgCADQgDADgDAAQgEAAgEgDQgEgEgCAAQgDAAgFAGQgEAFAAAGIAAArQAAAIADAEQAEADAJAAIAAADg");
	this.shape_125.setTransform(618.4,666.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgfAiQgNgOABgUQAAgTAMgOQAMgNATAAQATAAANAMQANANAAAVQAAATgNAOQgMAOgTAAQgTAAgNgNgAgPgjQgLAIABAWQgBARAJAPQAHAPANAAQAMAAAFgKQAGgKABgRQAAgQgIgPQgIgOgNAAQgIAAgFAFg");
	this.shape_126.setTransform(610,666.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_127.setTransform(602.4,665.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQALgBACgDQADgDAAgLIAAgvIgBgHQgBgEgFAAIgCAAIgGABIAAgDIAEgBIAXgIIAEgCIAAACIAABFQAAALADADQACADAKABIAAACgAgHgyQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_128.setTransform(596.7,664.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAQBEIAAgMQgFAGgEADQgHAEgJAAQgQAAgLgNQgJgNgBgQQAAgWANgOQAMgPASAAQAGAAAGADQAEACADAEIAAgfQAAgGgBgDQgBgCgFAAIgCAAIgEABIAAgDIAIgDIAJgCIAIgCIAEgCIABAAIAAAKIAAAMIgBALIAABPQABAGABADQACADAGAAIACAAIADgBIAAADIgPAFIgPAGgAgWgIQgHAKAAAQQAAAQAIAMQAHANAOAAQAHAAAFgFQAFgEgBgEIAAgqQAAgMgGgFQgHgFgGAAQgMAAgHAKg");
	this.shape_129.setTransform(589.1,664.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgaAoQgHgGAAgOIAAgyQgBgHgDgDQgCgCgHAAIAAgDIAdAAIAAA9QAAAHACAEQAEAHAJAAQAFAAAHgEQADgCAFgFIAAg0QgBgIgDgCQgCgCgJgBIAAgDIAfAAIAABEQAAAGADADQACACAIAAIAAADIgIACIgJADIgKAEIgBgBIAAgBIAAgPQgHAHgGAEQgHAGgJAAQgIAAgIgGg");
	this.shape_130.setTransform(578.8,666.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgiApQgFgGAAgJQAAgOANgJQAKgGAZgJIAAgJQAAgJgCgFQgDgGgKAAQgFAAgEACQgEADAAAFIAAADIAAAEQAAAGgDABQgCACgDAAQgFAAgCgDQgCgDAAgDQAAgHAJgIQAIgHAQAAQASAAAHAMQADAHAAANIAAAmIABAIQABAEAFgBIADAAIAGgDIAAAEQgEAEgDADQgGAEgFAAQgHgBgDgEQgDgEgBgGIgLAKQgJAFgIAAQgIAAgHgGgAgIAAQgOAJAAALQAAAIAFAEQAEADAFAAQAGAAAGgDQAFgEAAgFIAAgfQgKAEgHAEg");
	this.shape_131.setTransform(569.9,666.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_132.setTransform(556.3,666.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgtBEIAAgDQAIgBADgDQADgDgBgIIAAhcQABgIgCgBQgCgDgFAAIgCAAIgCABIAAgEIAJgDIATgHIABABIAAABIAAAOIALgKQAJgGAIAAQAOAAAKALQAJAMABAUQgBAUgLAPQgMAQgSAAQgFAAgDgCQgHgCgFgFIAAAfQAAAKADADQAEACAKABIAAADgAgIgzQgHAFAAAFIAAAvQADAHAFAEQAFADAGAAQALAAAHgLQAHgKAAgSQABgSgJgJQgHgJgLAAQgFAAgGAEg");
	this.shape_133.setTransform(547.1,668.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQAKgBADgDQADgCAAgJIAAheIgBgJQgCgEgGAAIgDAAIgEABIAAgDIAfgKIABABIAAADIAAB0QAAAIADADQACACAKABIAAACg");
	this.shape_134.setTransform(539.5,664.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSAMgPQALgOASAAQAOAAAKAJQAKAKABARIg+AAQABAWAJALQAKAKAMgBQAJAAAIgEQAHgGAGgKIADABQgEANgLALQgLAKgOAAQgTAAgKgOgAAQgQQgBgKgDgFQgFgIgKAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_135.setTransform(532.3,666.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAFBEIAAgCQAJgCACgCQADgDAAgLIAAgoQAAgIgDgGQgEgGgIAAQgHAAgHAGQgHAFAAABIAAAwQAAALACADQADACAIACIAAACIgrAAIAAgCQAIgCADgCQACgDAAgLIAAhdIgBgIQgCgCgFAAIgCAAIgDAAIAAgDIALgEIAJgCIAJgDIAAABIAAA8QAGgHAFgEQAIgGAKAAQAQAAAFAOQADAHAAAKIAAAoQAAAKADADQACAEAIABIAAACg");
	this.shape_136.setTransform(522.9,664.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgeAiQgOgOAAgUQAAgTANgOQANgNASAAQATAAANAMQAMANAAAVQAAATgMAOQgMAOgUAAQgRAAgNgNgAgQgjQgJAIgBAWQABARAHAPQAJAPANAAQAKAAAHgKQAFgKAAgRQAAgQgHgPQgIgOgNAAQgIAAgGAFg");
	this.shape_137.setTransform(507.9,666.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_138.setTransform(499.1,666.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQAKgBADgDQADgCAAgJIAAheIgBgJQgCgEgGAAIgDAAIgEABIAAgDIAfgKIAAABIABADIAAB0QAAAIADADQADACAJABIAAACg");
	this.shape_139.setTransform(492.4,664.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AghApQgHgGAAgJQABgOAOgJQAIgGAbgJIAAgJQgBgJgCgFQgDgGgJAAQgFAAgFACQgEADgBAFIABADIAAAEQABAGgEABQgCACgDAAQgEAAgCgDQgDgDAAgDQAAgHAIgIQAJgHAQAAQASAAAHAMQAEAHgBANIAAAmIABAIQACAEADgBIAEAAIAGgDIAAAEQgEAEgEADQgFAEgGAAQgGgBgDgEQgDgEAAgGIgMAKQgJAFgIAAQgJAAgFgGgAgIAAQgOAJAAALQgBAIAHAEQAEADAEAAQAGAAAGgDQAFgEABgFIAAgfQgLAEgHAEg");
	this.shape_140.setTransform(485.6,666.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_141.setTransform(472,666.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQALgBACgDQADgDAAgLIAAgvIgBgHQgBgEgFAAIgCAAIgGABIAAgDIAEgBIAXgIIAEgCIAAACIAABFQAAALADADQACADAKABIAAACgAgHgyQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_142.setTransform(465.2,664.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAFBEIAAgCQAJgCACgCQADgDAAgLIAAgoQAAgIgDgGQgEgGgIAAQgHAAgHAGQgHAFAAABIAAAwQAAALACADQADACAIACIAAACIgrAAIAAgCQAIgCADgCQACgDAAgLIAAhdIgBgIQgCgCgFAAIgCAAIgDAAIAAgDIALgEIAJgCIAJgDIAAABIAAA8QAGgHAFgEQAIgGAKAAQAQAAAFAOQADAHAAAKIAAAoQAAAKADADQACAEAIABIAAACg");
	this.shape_143.setTransform(457.4,664.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_144.setTransform(449.8,665.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgBA/QgYgcAAgjQAAghAUgaQAMgQARgJIACADQgQAMgHAMQgKAVgBAiQABAYAEARQAHAdAWAOIgCADQgMgFgNgRg");
	this.shape_145.setTransform(443.8,665.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_146.setTransform(654.3,644.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgWBEIAAgCQAJgBADgDQADgDAAgIIAAheIgBgJQgCgEgGAAIgDAAIgEABIAAgDIAfgJIAAAAIABACIAAB0QAAAJADACQADADAJABIAAACg");
	this.shape_147.setTransform(647.6,642.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgiApQgFgGgBgJQAAgOAOgKQAKgEAagLIAAgIQgBgKgBgEQgEgGgKAAQgEAAgFADQgFACABAEIAAAFIABADQgBAFgDACQgCACgDAAQgFAAgCgDQgCgDAAgEQAAgGAJgHQAIgIAQAAQASAAAHAMQADAHABANIAAAmIABAIQAAADAEABIAFgBIAEgEIAAAGQgDADgDADQgGADgGAAQgGAAgDgDQgDgFAAgGIgMAKQgJAFgIAAQgIAAgHgGgAgIAAQgPAJAAAKQABAJAFAFQAEACAFAAQAHAAAEgEQAHgDAAgGIAAgdQgLADgHAEg");
	this.shape_148.setTransform(640.8,644.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgfAiQgMgOAAgUQAAgTAMgOQAMgNATAAQATAAANAMQAMANAAAVQAAATgMAOQgMAOgTAAQgTAAgNgNgAgPgjQgKAIAAAWQAAARAHAPQAJAPANAAQAKAAAHgKQAFgKAAgRQABgQgIgPQgIgOgNAAQgIAAgFAFg");
	this.shape_149.setTransform(630.9,644.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgiA9QgJgGAAgHQAAgEACgDIAKgKIAGgGIABgBIgGgEQgEgDAAgDQAAgEADgEIAPgOQgJgCgFgIQgFgIAAgJQAAgLAJgLQAJgKARAAQAGAAAIAEQAJADAIAAIAGAAIAGAAIABAAIAAAIIgRAAIADAHIACAKQAAAMgJAJQgKAJgOAAIgJgBQgDAAgFAFQgEAEAAADQAAADAGABIAKABQAZAAAJADQAOAFAAAPQAAAPgRAKQgRAJgRAAQgQAAgJgHgAgZAfQgEAGAAAFQAAAJAJADQAJADALAAQAQAAALgGQAKgFAAgJQAAgGgIgCQgGgCgOAAIgHAAIgHAAIgHgBIgHgBIgGAGgAgRg0QgCAFAAAHQAAAMAGAJQAGAJAIAAQAGAAADgCQAGgFAAgMQAAgJgFgMQgEgLgLAAQgJAAgEAJg");
	this.shape_150.setTransform(620.9,646.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_151.setTransform(608.3,643.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgTAMgOQALgOASAAQANAAALAKQALAJAAASIg9AAQAAAVAJALQAKAJALABQAKgBAIgFQAHgFAGgKIADACQgEAMgLAKQgLALgOAAQgTAAgKgOgAAQgQQgBgKgDgEQgFgJgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_152.setTransform(601,644.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgTALgOQAMgOASAAQANAAALAKQALAJgBASIg8AAQAAAVAKALQAJAJALABQALgBAHgFQAHgFAGgKIADACQgEAMgLAKQgLALgPAAQgSAAgKgOgAAQgQQgBgKgDgEQgFgJgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_153.setTransform(592.1,644.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAgAuIAAgDQAIgBADgCQADgDAAgIIAAgpQAAgKgCgEQgEgIgKAAQgHAAgGAEIgJAIIAAAxQAAAIADAEQADAEAJAAIAAADIgsAAIAAgDQAJgBADgDQADgEAAgNIAAgaQAAgPgDgGQgDgJgKAAQgHAAgFADQgGADgEAGIAAA0QAAAHADADQACADAIAAIAAADIgsAAIAAgDQAIAAACgCQAEgDABgJIAAgxQAAgHgDgDQgBgCgFAAIgDAAIgDABIAAgDIAIgDIAMgEIAJgEIABABIAAACIAAANQAKgJAGgDQAIgEAHAAQAKAAAFAHQADAEACAGQAIgHAFgEQAJgGAKAAQAPAAAGANQADAHAAAQIAAAoQAAAGADADQADACAIABIAAADg");
	this.shape_154.setTransform(580.1,644.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgeAiQgNgOgBgUQAAgTANgOQANgNASAAQATAAANAMQANANgBAVQABATgNAOQgMAOgUAAQgSAAgMgNgAgQgjQgKAIAAAWQAAARAJAPQAIAPAMAAQAMAAAFgKQAHgKAAgRQgBgQgHgPQgIgOgNAAQgIAAgGAFg");
	this.shape_155.setTransform(562.1,644.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_156.setTransform(554.5,643.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AglBAQgFgDAAgGQAAgEADgCQADgDAEAAIAHACIAIACQAFAAAGgNQAGgOAAgEIAAgCIgBgCIgfhCQgDgHgDgCQgCgDgFAAIAAgDIApAAIAAADIgHABQgFABAAAEIABADIACAEIAVAxIATgxIABgEIAAgEQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIgFgBIgDAAIAAgDIAbAAIAAADQgEAAgCADQgCACgBAEIgfBQQgHAWgHAJQgIAKgLAAQgGAAgEgDg");
	this.shape_157.setTransform(541.5,646.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_158.setTransform(534,643.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQALgBACgDQADgDAAgLIAAgvIgBgHQgBgEgFAAIgCAAIgGABIAAgDIAEgBIAXgIIAEgCIAAACIAABFQAAALADADQACADAKABIAAACgAgHgyQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_159.setTransform(528.3,642.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgWBEIAAgCQAIgBAEgDQADgDAAgIIAAheIgBgJQgCgEgGAAIgDAAIgEABIAAgDIAfgJIAAAAIABACIAAB0QAAAJADACQADADAJABIAAACg");
	this.shape_160.setTransform(522.7,642.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQALgBACgDQADgDAAgLIAAgvIgBgHQgBgEgFAAIgCAAIgGABIAAgDIAEgBIAXgIIAEgCIAAACIAABFQAAALADADQACADAKABIAAACgAgHgyQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_161.setTransform(517.2,642.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgVBBQgLgEAAgFIAAhmQAAgGgCgCQgCgCgFAAIgEAAIAAgDIAUgGIAJgDIAAABIAAA8QADgFAFgEQAIgIAMAAQAOAAAKAMQAKAMAAATQAAAVgMAOQgOAPgUAAQgLAAgKgEgAgJgHQgHAFAAAFIAAAyQABAFAHACQAGACAEAAQAOAAAHgKQAHgKgBgPQABgOgHgNQgGgLgNAAQgHAAgGAEg");
	this.shape_162.setTransform(509.1,642.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgiApQgFgGgBgJQAAgOAOgKQAKgEAZgLIAAgIQAAgKgBgEQgEgGgKAAQgEAAgFADQgFACABAEIAAAFIABADQgBAFgDACQgCACgDAAQgFAAgCgDQgCgDAAgEQAAgGAJgHQAIgIAQAAQASAAAHAMQADAHABANIAAAmIABAIQAAADAEABIAFgBIAEgEIAAAGQgDADgDADQgGADgGAAQgGAAgDgDQgDgFgBgGIgLAKQgJAFgIAAQgIAAgHgGgAgIAAQgPAJAAAKQABAJAGAFQADACAFAAQAHAAAEgEQAHgDgBgGIAAgdQgKADgHAEg");
	this.shape_163.setTransform(500.4,644.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_164.setTransform(486.8,644.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAAAdIgFgnIgBgFIAAgFQAAgDABgCQABgDAEAAQAFAAABADIABAGIAAACIAAAEIgFAqg");
	this.shape_165.setTransform(480.9,638.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_166.setTransform(476.6,643.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAFAuIAAgDQAIgBACgCQADgDAAgLIAAgoQAAgJgDgFQgDgGgJAAQgEAAgGAEIgIAIIAAA2QAAAGACADQADACAHAAIAAADIgqAAIAAgDQAGAAAEgDQACgDAAgJIAAgxIgBgIQgCgEgGAAIgBABIgDAAIAAgEIATgGIAKgDIAAAAIABACIAAAOQAIgIAFgDQAHgFAIAAQAHAAAFAEQALAHAAAUIAAAsQAAAHADADQADADAGAAIAAADg");
	this.shape_167.setTransform(468.7,644.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgTAMgOQALgOASAAQANAAALAKQALAJAAASIg9AAQAAAVAJALQAKAJALABQAKgBAIgFQAHgFAGgKIADACQgEAMgLAKQgLALgOAAQgTAAgKgOgAAQgQQgBgKgDgEQgFgJgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_168.setTransform(459.2,644.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQALgBACgDQADgDAAgLIAAgvIgBgHQgBgEgFAAIgCAAIgGABIAAgDIAEgBIAXgIIAEgCIAAACIAABFQAAALADADQACADAKABIAAACgAgHgyQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_169.setTransform(452,642.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_170.setTransform(446.6,643.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AghApQgHgGABgJQAAgOAOgKQAIgEAbgLIAAgIQgBgKgCgEQgDgGgJAAQgFAAgFADQgEACgBAEIABAFIAAADQABAFgEACQgCACgDAAQgEAAgCgDQgDgDAAgEQAAgGAIgHQAJgIAQAAQASAAAHAMQAEAHgBANIAAAmIABAIQACADADABIAEgBIAFgEIAAAGQgCADgFADQgFADgGAAQgGAAgDgDQgDgFAAgGIgMAKQgJAFgIAAQgJAAgFgGgAgIAAQgOAJAAAKQgBAJAHAFQAEACAEAAQAGAAAGgEQAFgDABgGIAAgdQgLADgHAEg");
	this.shape_171.setTransform(439.7,644.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgtBEIAAgDQAIgBADgDQADgEgBgGIAAheQABgGgCgDQgCgCgFAAIgCAAIgCAAIAAgCIAJgDIATgHIABAAIAAABIAAANIALgKQAJgFAIAAQAOAAAKALQAJAMAAAUQABATgMAPQgMARgSgBQgFABgDgCQgHgCgFgGIAAAhQAAAJADACQAEADAJAAIAAAEgAgIgyQgHAEAAAFIAAAvQADAHAFADQAFADAGAAQALABAHgLQAHgKAAgSQABgSgJgJQgHgJgLAAQgFAAgGAFg");
	this.shape_172.setTransform(429.6,646.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSALgPQAMgOASAAQANAAALAJQAKAKAAARIg9AAQABAWAKAKQAJAKAMAAQAKAAAHgEQAHgGAGgKIADABQgEANgLALQgLAKgPAAQgSAAgKgOgAAQgQQgBgKgDgFQgEgIgLAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_173.setTransform(638.8,622.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAFBEIAAgCQAJgCACgCQADgDAAgLIAAgoQAAgIgDgGQgEgGgIAAQgHAAgHAGQgHAFAAABIAAAwQAAALACADQADACAIACIAAACIgrAAIAAgCQAIgCADgCQACgDAAgLIAAhdIgBgIQgCgCgFAAIgCAAIgDAAIAAgDIALgEIAJgCIAJgDIAAABIAAA8QAGgHAFgEQAIgGAKAAQAQAAAFAOQADAHAAAKIAAAoQAAAKADADQACAEAIABIAAACg");
	this.shape_174.setTransform(629.4,620.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_175.setTransform(621.8,621.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_176.setTransform(610.1,622.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_177.setTransform(602.3,622.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSALgPQAMgOASAAQANAAALAJQALAKgBARIg8AAQAAAWAKAKQAJAKALAAQALAAAHgEQAHgGAGgKIADABQgEANgLALQgLAKgPAAQgSAAgKgOgAAQgQQgBgKgDgFQgEgIgLAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_178.setTransform(593.9,622.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_179.setTransform(585.7,622.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_180.setTransform(578,622.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgiApQgFgGAAgJQgBgOAOgJQAJgGAagJIAAgJQAAgKgCgDQgDgHgJAAQgGAAgEACQgEADgBAFIABADIAAAEQAAAFgDADQgCABgDAAQgEAAgDgDQgCgDAAgDQAAgHAIgIQAJgHAQAAQASAAAHAMQADAHAAANIAAAmIABAIQABADAFAAIADAAIAGgDIAAAFQgDAEgFACQgFAEgFAAQgHgBgDgEQgDgEgBgGIgLAJQgJAGgIAAQgIAAgHgGgAgIAAQgOAJAAALQAAAIAFAEQAEADAFAAQAGAAAGgDQAFgEAAgGIAAgdQgKADgHAEg");
	this.shape_181.setTransform(570,622.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAFAuIAAgCQAIgBACgEQADgCAAgKIAAgqQAAgHgDgGQgDgGgJAAQgEAAgGAEIgJAHIAAA2QAAAHADACQAEADAGABIAAACIgqAAIAAgCQAHgBADgDQACgDAAgJIAAgwIgBgJQgCgEgGAAIgBAAIgDAAIAAgDIATgGIAKgDIAAABIABABIAAAPQAJgJAEgDQAHgFAIAAQAHAAAFAEQALAHAAATIAAAtQAAAHACADQADADAHABIAAACg");
	this.shape_182.setTransform(555.2,622.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgiApQgFgGAAgJQgBgOAOgJQAJgGAagJIAAgJQAAgKgCgDQgDgHgJAAQgGAAgEACQgEADgBAFIABADIAAAEQAAAFgDADQgCABgDAAQgEAAgDgDQgCgDAAgDQAAgHAIgIQAJgHAQAAQASAAAHAMQADAHAAANIAAAmIABAIQABADAFAAIADAAIAGgDIAAAFQgDAEgEACQgGAEgFAAQgHgBgDgEQgDgEgBgGIgLAJQgJAGgIAAQgIAAgHgGgAgIAAQgOAJAAALQAAAIAFAEQAEADAFAAQAGAAAGgDQAFgEAAgGIAAgdQgKADgHAEg");
	this.shape_183.setTransform(546.1,622.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgaAjQgMgMAAgVQAAgTANgPQAMgOATAAQAMAAAJAGQAJAGAAAIQAAADgCADQgCACgFAAQgEABgCgCQgCgDgCgFIgBgEQgCgFgDgCQgDgDgFAAQgKAAgIAKQgHAKgBAQQAAAOAJALQAIANAOAAQAKgBAIgGQAFgEAFgIIADABQgGAMgGAHQgLANgQAAQgPAAgLgMg");
	this.shape_184.setTransform(536.8,622.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgaAoQgIgGABgOIAAgyQAAgHgEgDQgCgCgHAAIAAgDIAdAAIAAA9QAAAHACAEQADAHAKAAQAGAAAGgEQADgCAEgFIAAg0QAAgIgDgCQgCgCgJgBIAAgDIAfAAIAABEQAAAGACADQADACAIAAIAAADIgIACIgIADIgLAEIgCgBIAAgBIAAgPQgGAHgGAEQgHAGgJAAQgJAAgHgGg");
	this.shape_185.setTransform(522.4,622.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgfAiQgNgOABgUQAAgTAMgOQAMgNATAAQATAAANAMQANANAAAVQAAATgNAOQgMAOgTAAQgTAAgNgNgAgPgjQgLAIABAWQgBARAJAPQAHAPANAAQAMAAAFgKQAHgKAAgRQAAgQgIgPQgIgOgNAAQgIAAgFAFg");
	this.shape_186.setTransform(512.4,622.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AglBAQgFgDAAgGQAAgEADgCQADgDAEAAIAHACIAIACQAFAAAGgNQAGgOAAgEIAAgCIgBgCIgfhCQgDgHgDgCQgCgDgFAAIAAgDIApAAIAAADIgHABQgFABAAAEIABADIACAEIAVAxIATgxIABgEIAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgFgBIgDAAIAAgDIAbAAIAAADQgEAAgCADQgCACgBAEIgfBQQgHAWgHAJQgIAKgLAAQgGAAgEgDg");
	this.shape_187.setTransform(502.3,624.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_188.setTransform(489.8,621.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AghApQgHgGAAgJQABgOAOgJQAIgGAbgJIAAgJQgBgKgCgDQgDgHgJAAQgFAAgFACQgEADgBAFIABADIAAAEQABAFgEADQgCABgDAAQgEAAgCgDQgDgDAAgDQAAgHAIgIQAJgHAQAAQASAAAHAMQAEAHgBANIAAAmIABAIQACADADAAIAEAAIAFgDIAAAFQgCAEgFACQgFAEgFAAQgHgBgDgEQgDgEAAgGIgMAJQgJAGgIAAQgJAAgFgGgAgIAAQgOAJAAALQgBAIAHAEQAEADAEAAQAGAAAGgDQAFgEABgGIAAgdQgLADgHAEg");
	this.shape_189.setTransform(482.9,622.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAFBEIAAgCQAJgCACgCQADgDAAgLIAAgoQAAgIgDgGQgEgGgIAAQgHAAgHAGQgHAFAAABIAAAwQAAALACADQADACAIACIAAACIgrAAIAAgCQAIgCADgCQACgDAAgLIAAhdIgBgIQgCgCgFAAIgCAAIgDAAIAAgDIALgEIAJgCIAJgDIAAABIAAA8QAGgHAFgEQAIgGAKAAQAQAAAFAOQADAHAAAKIAAAoQAAAKADADQACAEAIABIAAACg");
	this.shape_190.setTransform(473,620.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_191.setTransform(465.4,621.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgfAiQgNgOABgUQAAgTAMgOQAMgNATAAQATAAANAMQANANAAAVQAAATgNAOQgMAOgTAAQgTAAgNgNgAgPgjQgLAIABAWQgBARAJAPQAHAPANAAQAMAAAGgKQAFgKABgRQAAgQgIgPQgIgOgNAAQgIAAgFAFg");
	this.shape_192.setTransform(452.5,622.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_193.setTransform(443.7,622.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAGAuIAAgDQAGgBADgCQADgDAAgLIAAgoQAAgJgDgFQgDgGgIAAQgFAAgGAEIgJAIIAAA2QAAAHAEABQACADAIAAIAAADIgsAAIAAgDQAIAAACgDQADgDAAgJIAAgxIgBgIQgCgEgGAAIgCABIgCAAIAAgEIATgGIAJgDIABAAIAAACIAAAOQAJgIAGgDQAGgFAIAAQAHAAAFAEQALAHAAAUIAAAsQAAAHACADQAEADAGAAIAAADg");
	this.shape_194.setTransform(657.2,600.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgeAiQgNgOAAgUQgBgTANgOQAMgNATAAQATAAANAMQAMANAAAVQAAATgMAOQgMAOgTAAQgTAAgMgNgAgPgjQgKAIAAAWQAAARAHAPQAJAPANAAQAKAAAHgKQAFgKAAgRQABgQgIgPQgIgOgNAAQgIAAgFAFg");
	this.shape_195.setTransform(647.1,600.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQALgBACgDQADgDAAgLIAAgvIgBgHQgBgEgFAAIgCAAIgGABIAAgDIAEgBIAXgIIAEgCIAAACIAABFQAAALADADQACADAKABIAAACgAgHgyQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_196.setTransform(639.4,598.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_197.setTransform(634,599.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgiApQgFgGAAgJQAAgOANgKQAJgFAagJIAAgJQAAgKgBgEQgEgGgKAAQgFAAgEADQgEACAAAEIAAAFIAAADQAAAFgDACQgCACgDAAQgFAAgCgDQgCgDAAgEQAAgGAIgHQAJgIAQAAQASAAAHAMQADAHAAANIAAAmIABAIQABADAFAAIADAAIAGgDIAAAEQgEAEgDADQgGAEgFgBQgHAAgDgDQgDgFgBgGIgLAKQgJAFgIAAQgIAAgHgGgAgIAAQgOAIAAALQAAAJAFAFQAEACAFAAQAGAAAGgDQAFgEAAgFIAAgfQgKAEgHAEg");
	this.shape_198.setTransform(627,600.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgaAoQgIgGAAgOIAAgyQABgHgEgDQgCgCgHAAIAAgDIAdAAIAAA9QAAAHACAEQAEAHAJAAQAFAAAHgEQAEgCADgFIAAg0QAAgIgCgCQgDgCgJgBIAAgDIAfAAIAABEQAAAGACADQADACAIAAIAAADIgIACIgIADIgMAEIgBgBIAAgBIAAgPQgGAHgFAEQgIAGgJAAQgJAAgHgGg");
	this.shape_199.setTransform(617.1,600.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQAKgBADgDQADgDAAgIIAAheIgBgJQgCgEgGAAIgDAAIgEABIAAgDIAfgJIABAAIAAACIAAB0QAAAJADACQADADAJABIAAACg");
	this.shape_200.setTransform(609.4,598.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgiApQgFgGAAgJQAAgOANgKQAKgFAZgJIAAgJQAAgKgBgEQgEgGgKAAQgFAAgEADQgFACABAEIAAAFIABADQgBAFgDACQgCACgDAAQgFAAgCgDQgCgDAAgEQAAgGAJgHQAIgIAQAAQASAAAHAMQADAHABANIAAAmIABAIQAAADAFAAIADAAIAGgDIAAAEQgEAEgDADQgGAEgFgBQgHAAgDgDQgDgFgBgGIgLAKQgJAFgIAAQgIAAgHgGgAgIAAQgPAIAAALQABAJAFAFQAEACAFAAQAGAAAFgDQAHgEgBgFIAAgfQgKAEgHAEg");
	this.shape_201.setTransform(602.6,600.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AABAtIgBgDIgehGQgEgJgEgDQgCgCgFAAIAAgDIAoAAIAAADIgIABQAAABgBAAQAAAAAAABQgBAAAAABQAAABAAAAIABADIABAFIATAwIASgrIADgGIABgGQAAgEgEgBIgGgBIAAgDIAcAAIAAADQgFAAgCADIgGANIgdBFIgBACIgBABg");
	this.shape_202.setTransform(592.8,600.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("Ag6BCIAAgDQAMgCADgCQADgDAAgLIAAhYQAAgLgDgDQgDgEgMAAIAAgEIBqAAIAAAdIgFAAQgCgOgFgEQgFgDgSAAIgaAAQgFAAgBABQgBABAAAEIAAAtIAeAAQANAAAEgEQADgEACgLIAFAAIAAAtIgFAAQgCgMgEgDQgDgEgNAAIgeAAIAAAxQAAAGAEABQAEABASAAQAUAAAKgEQAJgEAIgSIAGAAIgJAig");
	this.shape_203.setTransform(581.7,598.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgTAMgOQALgOASAAQAOAAAKAKQAKAJAAARIg9AAQABAWAJALQAKAJAMABQAKAAAHgGQAHgFAGgKIADACQgEAMgLAKQgLALgOAAQgTAAgKgOgAAQgQQgBgKgDgEQgEgJgLAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_204.setTransform(566.2,600.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAFBEIAAgCQAJgCACgCQADgDAAgLIAAgoQAAgIgDgGQgEgGgIAAQgHAAgHAGQgHAFAAABIAAAwQAAALACADQADACAIACIAAACIgrAAIAAgCQAIgCADgCQACgDAAgLIAAhdIgBgIQgCgCgFAAIgCAAIgDAAIAAgDIALgEIAJgCIAJgDIAAABIAAA8QAGgHAFgEQAIgGAKAAQAQAAAFAOQADAHAAAKIAAAoQAAAKADADQACAEAIABIAAACg");
	this.shape_205.setTransform(556.7,598.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_206.setTransform(549.1,599.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAFBEIAAgCQAJgCACgCQADgDAAgLIAAgoQAAgIgDgGQgEgGgIAAQgHAAgHAGQgHAFAAABIAAAwQAAALACADQADACAIACIAAACIgrAAIAAgCQAIgCADgCQACgDAAgLIAAhdIgBgIQgCgCgFAAIgCAAIgDAAIAAgDIALgEIAJgCIAJgDIAAABIAAA8QAGgHAFgEQAIgGAKAAQAQAAAFAOQADAHAAAKIAAAoQAAAKADADQACAEAIABIAAACg");
	this.shape_207.setTransform(536.2,598.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_208.setTransform(528.6,599.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQALgBACgDQADgDAAgLIAAgvIgBgHQgBgEgFAAIgCAAIgGABIAAgDIAEgBIAXgIIAEgCIAAACIAABFQAAALADADQACADAKABIAAACgAgHgyQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_209.setTransform(522.9,598.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAZAtIgYg6IgXA6IgBABIgBAAIgBgBIgdhHIgGgOQgCgCgFgBIAAgCIAlAAIAAACIgHACQgDABAAAEQAAADAFALIAFAPIAMAbIARgkIABgBIgDgIIgEgJIgEgHIgHgCIAAgCIAnAAIAAACQgFABgDABQgDABAAAEIAAAFIACAFIASAtIARgpIADgHIACgHQAAgEgDgBQgCgBgEgBIAAgCIAYAAIAAACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgFAIIgfBMIgBACIgBAAIgBgBg");
	this.shape_210.setTransform(512.9,600.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_211.setTransform(498.1,599.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AAFAuIAAgDQAIgBACgCQADgDAAgLIAAgoQAAgJgDgFQgDgGgIAAQgFAAgGAEIgIAIIAAA2QAAAHACABQAEADAGAAIAAADIgrAAIAAgDQAHAAAEgDQACgDAAgJIAAgxIgBgIQgCgEgFAAIgCABIgDAAIAAgEIATgGIAKgDIAAAAIABACIAAAOQAIgIAFgDQAHgFAIAAQAHAAAFAEQALAHAAAUIAAAsQAAAHADADQADADAGAAIAAADg");
	this.shape_212.setTransform(490.2,600.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgTALgOQAMgOASAAQANAAALAKQALAJAAARIg9AAQAAAWAKALQAJAJALABQAKAAAIgGQAHgFAGgKIADACQgEAMgLAKQgLALgPAAQgSAAgKgOgAAQgQQgBgKgDgEQgFgJgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_213.setTransform(480.7,600.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_214.setTransform(473.7,599.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_215.setTransform(467,600.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgXBEIAAgCQALgBACgDQADgDAAgLIAAgvIgBgHQgBgEgFAAIgCAAIgGABIAAgDIAEgBIAXgIIAEgCIAAACIAABFQAAALADADQACADAKABIAAACgAgHgyQgDgDAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_216.setTransform(460.2,598.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_217.setTransform(453.7,600.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAFAuIAAgDQAIgBACgCQADgDAAgLIAAgoQAAgJgDgFQgDgGgJAAQgEAAgGAEIgIAIIAAA2QAAAHACABQAEADAGAAIAAADIgrAAIAAgDQAHAAAEgDQACgDAAgJIAAgxIgBgIQgCgEgFAAIgCABIgDAAIAAgEIATgGIAKgDIAAAAIABACIAAAOQAIgIAFgDQAHgFAIAAQAHAAAFAEQALAHAAAUIAAAsQAAAHADADQADADAGAAIAAADg");
	this.shape_218.setTransform(444.7,600.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgfAiQgNgOAAgUQAAgTANgOQAMgNATAAQATAAANAMQANANAAAVQAAATgNAOQgMAOgUAAQgRAAgOgNgAgQgjQgKAIABAWQgBARAJAPQAHAPANAAQAMAAAFgKQAHgKAAgRQgBgQgHgPQgIgOgNAAQgIAAgGAFg");
	this.shape_219.setTransform(434.7,600.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgaAjQgMgMAAgVQAAgTANgPQAMgOATAAQAMAAAJAGQAJAHAAAHQAAADgCADQgCADgFAAQgEgBgCgCQgCgCgCgEIgBgFQgCgGgDgCQgDgCgFAAQgKAAgIAKQgHAKgBAQQAAAOAJAMQAIAMAOgBQAKABAIgIQAFgDAFgJIADACQgGAMgGAHQgLANgQAAQgPAAgLgMg");
	this.shape_220.setTransform(425.2,600.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_221.setTransform(643.4,578.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_222.setTransform(636.8,577.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAFAuIAAgCQAIgBACgEQADgCAAgKIAAgqQAAgHgDgGQgDgGgJAAQgEAAgGAEIgIAHIAAA3QAAAGACADQADACAHABIAAACIgqAAIAAgCQAGgCAEgCQACgDAAgJIAAgwIgBgJQgCgEgGAAIgBAAIgDAAIAAgDIATgGIAKgDIAAABIABABIAAAPQAIgJAFgDQAHgFAIAAQAHAAAFAEQALAHAAATIAAAtQAAAHADADQADADAGABIAAACg");
	this.shape_223.setTransform(628.9,578.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSAMgPQALgOASAAQANAAALAKQALAJAAASIg9AAQAAAVAJAKQAKAKALAAQAKAAAIgEQAHgGAGgKIADABQgEANgLALQgLAKgOAAQgTAAgKgOgAAQgQQgBgJgDgGQgFgIgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_224.setTransform(619.4,578.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAgAuIAAgDQAIgBAEgCQACgDAAgIIAAgpQAAgKgCgEQgEgIgLAAQgFAAgHAEIgJAIIAAAxQAAAIADAEQADAEAJAAIAAADIgsAAIAAgDQAJgBADgDQACgEAAgNIAAgaQAAgPgBgGQgEgJgLAAQgFAAgGADQgGADgEAGIAAA0QAAAHACADQADADAIAAIAAADIgsAAIAAgDQAIAAADgCQADgDABgJIAAgxQgBgHgBgDQgCgCgFAAIgDAAIgDABIAAgDIAHgDIANgEIAKgEIAAABIAAACIAAANQAJgJAIgDQAGgEAIAAQAKAAAFAHQADAEADAGQAGgHAGgEQAJgGAKAAQAPAAAGANQADAHAAAQIAAAoQAAAGADADQADACAIABIAAADg");
	this.shape_225.setTransform(607.4,578.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSALgPQAMgOASAAQANAAALAKQALAJAAASIg9AAQAAAVAKAKQAJAKALAAQAKAAAIgEQAHgGAGgKIADABQgEANgLALQgLAKgPAAQgSAAgKgOgAAQgQQgBgJgDgGQgFgIgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_226.setTransform(595,578.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AggAuIAAgDQAJgBADgDQACgCAAgIIAAgrQAAgJgBgEQgCgEgFgBIgCAAIgEACIAAgEIAMgEIAIgDIAKgEIAAABIABABIAAAQQAFgIAGgFQAFgFAHAAQAFAAADADQADADAAAEQAAAEgCADQgDADgDAAQgEAAgEgDQgEgEgCAAQgDAAgFAFQgEAGAAAGIAAArQAAAIADAEQAEADAJAAIAAADg");
	this.shape_227.setTransform(587.4,578.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgaAoQgIgGAAgOIAAgyQABgHgEgDQgCgCgHAAIAAgDIAdAAIAAA9QAAAHACAEQAEAHAJAAQAFAAAHgEQAEgCADgFIAAg0QAAgIgCgCQgDgCgJgBIAAgDIAfAAIAABEQAAAGACADQADACAIAAIAAADIgIACIgIADIgMAEIgBgBIAAgBIAAgPQgGAHgFAEQgIAGgJAAQgJAAgHgGg");
	this.shape_228.setTransform(578.9,578.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgOAtIgIgCIgCABIgCACIgCAAIAAggIADAAQACAMAEAGQAHALAMAAQAHAAAFgEQAEgFAAgGQAAgEgDgEQgCgEgGgDIgKgHQgMgGgGgGQgGgGAAgJQAAgLAIgHQAIgHAMAAQAEAAAGACIAHACIADgBIABgBIACAAIABAbIgDAAQgCgJgDgGQgGgJgLAAQgGAAgEAEQgEAEAAAGQAAAJANAHIAMAHQAVAKAAAPQAAALgJAIQgIAHgNAAQgGAAgIgCg");
	this.shape_229.setTransform(570.2,578.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AghApQgHgGAAgJQABgOAOgJQAIgGAbgKIAAgIQAAgKgDgDQgDgHgJAAQgFAAgFACQgFADAAAEIABAEIAAAEQAAAGgDACQgCABgDAAQgEAAgCgDQgDgDAAgDQAAgHAIgIQAJgHAQAAQASAAAHAMQADAHAAANIAAAmIACAIQABAEADAAIAFgBIAEgEIAAAGQgCAEgFACQgFADgGABQgGAAgDgFQgDgEAAgGIgMAJQgJAGgIAAQgJAAgFgGgAgIAAQgPAIAAAMQAAAIAHAEQAEADAEAAQAHAAAEgEQAGgDABgGIAAgdQgLADgHAEg");
	this.shape_230.setTransform(562.2,578.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSAMgPQALgOASAAQANAAALAKQALAJAAASIg+AAQABAVAJAKQAKAKAMAAQAJAAAIgEQAHgGAGgKIADABQgEANgLALQgLAKgOAAQgTAAgKgOgAAQgQQgBgJgDgGQgFgIgKAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_231.setTransform(552.9,578.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAgAuIAAgDQAJgBADgCQACgDAAgIIAAgpQAAgKgCgEQgEgIgLAAQgFAAgHAEIgJAIIAAAxQAAAIADAEQADAEAJAAIAAADIgsAAIAAgDQAJgBADgDQACgEAAgNIAAgaQAAgPgBgGQgEgJgLAAQgFAAgGADQgGADgEAGIAAA0QAAAHACADQADADAIAAIAAADIgsAAIAAgDQAIAAADgCQADgDAAgJIAAgxQAAgHgBgDQgCgCgFAAIgDAAIgCABIAAgDIAGgDIANgEIAKgEIAAABIAAACIAAANQAJgJAIgDQAGgEAIAAQAKAAAFAHQADAEADAGQAGgHAGgEQAJgGAKAAQAQAAAFANQADAHAAAQIAAAoQAAAGADADQADACAIABIAAADg");
	this.shape_232.setTransform(540.9,578.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AguBEIAAgDQAKgBACgDQADgEAAgGIAAheQAAgGgCgDQgCgCgFAAIgCAAIgDABIAAgDIAJgEIAUgHIABABIAAABIAAANIAMgJQAHgGAKAAQANAAAKAMQAKALgBAUQABATgMAPQgMAQgRABQgGgBgDgBQgGgCgFgFIAAAfQAAALADACQADACAJAAIAAAEgAgJgzQgFAFAAAEIAAAxQACAGAFAEQAFACAGAAQALAAAHgKQAIgJAAgTQgBgSgHgJQgIgJgKAAQgGAAgHAEg");
	this.shape_233.setTransform(522.7,580.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSAMgPQALgOASAAQAOAAAKAKQAKAJAAASIg9AAQABAVAJAKQAKAKAMAAQAJAAAIgEQAHgGAGgKIADABQgEANgLALQgLAKgOAAQgTAAgKgOgAAQgQQgBgJgDgGQgEgIgLAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_234.setTransform(513.5,578.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSAMgPQALgOASAAQANAAALAKQALAJAAASIg9AAQAAAVAKAKQAJAKALAAQAKAAAIgEQAHgGAGgKIADABQgEANgLALQgLAKgOAAQgTAAgKgOgAAQgQQgBgJgDgGQgFgIgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_235.setTransform(504.7,578.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAGBEIAAgCIAEAAIADgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgDIgCgCIgdgnIAAAkQAAAHAFACQADABAHABIAAACIgvAAIAAgCQAKgBADgCQACgDAAgIIAAhiQAAgGgCgCQgCgCgFAAIgDAAIgDAAIAAgCIAJgCIARgGIAFgBIABAAIAAABIAABRIAagWIAEgFIABgCQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAIgIgBIAAgDIApAAIAAADQgLABgHADQgHAEgSAQIgFAGIARAXQAOASAHAGQAHAGAIABIAAACg");
	this.shape_236.setTransform(495.3,576.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgeAiQgNgOgBgUQAAgTANgOQANgNASAAQATAAANAMQANANgBAVQABATgNAOQgMAOgUAAQgSAAgMgNgAgQgjQgKAIAAAWQAAARAJAPQAIAPAMAAQAMAAAFgKQAHgKAAgRQgBgQgHgPQgIgOgNAAQgIAAgGAFg");
	this.shape_237.setTransform(480.2,578.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgMAwQgCgFAAgKIAAg6IgLAAIgBgBIAAgBIABgBIACgDIAKgJIANgSIACAAIAAACIAAAYIAUAAIAAAHIgUAAIAAA3IABALQACAHAHAAQADAAADgCIAGgFIADACIgDADQgFAHgFADQgGADgFAAQgLAAgEgLg");
	this.shape_238.setTransform(472.6,577.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AglBAQgFgDAAgGQAAgEADgCQADgDAEAAIAHACIAIACQAFAAAGgNQAGgOAAgEIAAgCIgBgCIgfhCQgDgHgDgCQgCgDgFAAIAAgDIApAAIAAADIgHABQgFABAAAEIABADIACAEIAVAxIATgxIABgEIAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgFgBIgDAAIAAgDIAbAAIAAADQgEAAgCADQgCACgBAEIgfBQQgHAWgHAJQgIAKgLAAQgGAAgEgDg");
	this.shape_239.setTransform(459.6,580.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AggAuIAAgDQAJgBADgDQACgCAAgIIAAgrQAAgJgBgEQgCgEgFgBIgCAAIgEACIAAgEIAMgEIAIgDIAKgEIAAABIABABIAAAQQAFgIAGgFQAFgFAHAAQAFAAADADQADADAAAEQAAAEgCADQgDADgDAAQgEAAgEgDQgEgEgCAAQgDAAgFAFQgEAGAAAGIAAArQAAAIADAEQAEADAJAAIAAADg");
	this.shape_240.setTransform(451.5,578.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgcBCIAAgDQANgBADgEQADgDAAgNIAAhjIgLAAQgRAAgGAFQgGAFgDAQIgFAAIACgiIBwAAIABAiIgFAAQgDgQgGgFQgFgFgSAAIgLAAIAABmQAAALAEADQADADANABIAAADg");
	this.shape_241.setTransform(441.9,576.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgGBCQgEgDAAgFQAAgEAEgEQADgCADAAQAEAAADACQADAEABAEQgBAFgDADQgDACgEAAQgDAAgDgCgAgBAfIgBgVIgEgiIgEgbQAAgHACgFQADgEAFAAQAHgBACAIIACAJIAAADIgBAEIgEAlIgFAmg");
	this.shape_242.setTransform(652.9,659.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAFAuIAAgDQAIgBACgCQADgEAAgKIAAgoQAAgJgDgFQgDgGgJAAQgEAAgGAEIgIAIIAAA2QAAAGACADQAEACAGAAIAAADIgrAAIAAgDQAHgBAEgCQACgDAAgJIAAgwIgBgJQgCgEgFAAIgCABIgDAAIAAgEIATgGIAKgDIAAAAIABACIAAAOQAIgIAFgDQAHgFAIAAQAHAAAFAEQALAHAAAUIAAAsQAAAHADADQADADAGAAIAAADg");
	this.shape_243.setTransform(638.7,661.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgTALgOQAMgOASAAQANAAALAKQALAJAAASIg9AAQAAAVAKAKQAJALALAAQAKgBAIgEQAHgGAGgKIADABQgEANgLAKQgLALgPAAQgSAAgKgOgAAQgQQgBgJgDgGQgFgIgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_244.setTransform(629.2,661.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAgAuIAAgDQAIgBAEgCQACgDAAgIIAAgpQAAgKgCgEQgEgIgLAAQgFAAgHAEIgJAIIAAAxQAAAIADAEQADAEAJAAIAAADIgsAAIAAgDQAJgBADgDQACgEABgNIAAgaQAAgPgCgGQgEgJgLAAQgFAAgGADQgGADgEAGIAAA0QAAAHACADQADADAIAAIAAADIgsAAIAAgDQAIAAACgCQAFgDAAgJIAAgxQAAgHgCgDQgCgCgFAAIgDAAIgDABIAAgDIAHgDIANgEIAKgEIAAABIAAACIAAANQAKgJAGgDQAHgEAIAAQAKAAAFAHQAEAEABAGQAIgHAFgEQAJgGAKAAQAQAAAFANQADAHAAAQIAAAoQAAAGADADQADACAIABIAAADg");
	this.shape_245.setTransform(617.2,661.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgTALgOQAMgOASAAQANAAALAKQAKAJAAASIg9AAQABAVAKAKQAJALAMAAQAKgBAHgEQAHgGAGgKIADABQgEANgLAKQgLALgPAAQgSAAgKgOgAAQgQQgBgJgDgGQgEgIgLAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_246.setTransform(589.3,661.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgiApQgFgGAAgJQAAgOANgKQAKgEAZgLIAAgIQAAgKgCgDQgDgHgKAAQgFAAgEACQgEADAAAEIAAAFIAAADQAAAGgDACQgCABgDAAQgFAAgCgDQgCgDAAgEQAAgGAJgIQAIgHAQAAQASAAAHAMQADAHAAANIAAAmIABAIQABADAFABIADgBIAGgEIAAAGQgEADgDADQgGADgFABQgHgBgDgDQgDgFgBgGIgLAJQgJAGgIAAQgIAAgHgGgAgIAAQgOAIAAALQAAAJAFAEQAEADAFAAQAGAAAGgEQAFgDAAgGIAAgdQgKADgHAEg");
	this.shape_247.setTransform(565.4,661.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AAFAuIAAgDQAIgBACgCQADgEAAgKIAAgoQAAgJgDgFQgDgGgJAAQgEAAgGAEIgIAIIAAA2QAAAGACADQADACAHAAIAAADIgqAAIAAgDQAGgBAEgCQACgDAAgJIAAgwIgBgJQgCgEgGAAIgBABIgDAAIAAgEIATgGIAKgDIAAAAIABACIAAAOQAIgIAFgDQAHgFAIAAQAHAAAFAEQALAHAAAUIAAAsQAAAHADADQADADAGAAIAAADg");
	this.shape_248.setTransform(550.6,661.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgiApQgFgGAAgJQAAgOANgKQAJgEAagLIAAgIQAAgKgBgDQgEgHgKAAQgFAAgEACQgEADAAAEIAAAFIAAADQAAAGgDACQgCABgDAAQgFAAgCgDQgCgDAAgEQAAgGAIgIQAJgHAQAAQASAAAHAMQADAHAAANIAAAmIABAIQABADAFABIADgBIAGgEIAAAGQgEADgDADQgGADgFABQgHgBgDgDQgDgFgBgGIgLAJQgJAGgIAAQgIAAgHgGgAgIAAQgOAIAAALQAAAJAFAEQAEADAFAAQAGAAAGgEQAFgDAAgGIAAgdQgKADgHAEg");
	this.shape_249.setTransform(541.5,661.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AggAuIAAgDQAJgBADgCQACgDAAgHIAAgrQAAgLgBgEQgCgDgFAAIgCAAIgEABIAAgEIAMgEIAIgDIAKgEIAAAAIABACIAAAQQAFgIAGgFQAFgFAHAAQAFAAADADQADADAAAEQAAAEgCADQgDADgDAAQgEAAgEgEQgEgDgCAAQgDAAgFAFQgEAGAAAGIAAArQAAAJADADQAEADAJAAIAAADg");
	this.shape_250.setTransform(528.5,661.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgjBEIAAgCQAKgBADgDQAEgEAAgLIAAg9IgRAAIAAgHIARAAQAAgPAEgLQAIgUAUAAQAJAAAHADQAGAEAAAFQAAAEgCACQgCADgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgFgGIgCgDIgDgDQgCgCgDAAQgIAAgBAIQgCAEAAAGIAAAXIAYAAIAAAHIgYAAIAAA9QAAALACAEQADADANABIAAACg");
	this.shape_251.setTransform(512.4,659.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgaAoQgHgGgBgOIAAgyQAAgHgDgDQgCgCgHAAIAAgDIAdAAIAAA9QAAAHACAEQADAHAKAAQAGAAAGgEQAEgCAEgFIAAg0QAAgIgDgCQgEgCgIgBIAAgDIAgAAIAABEQAAAGABADQADACAIAAIAAADIgIACIgJADIgLAEIgBgBIAAgBIAAgPQgGAHgFAEQgIAGgJAAQgIAAgIgGg");
	this.shape_252.setTransform(478.3,661.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgeAiQgOgOAAgUQAAgTANgOQANgNASAAQATAAANAMQAMANAAAVQAAATgMAOQgMAOgUAAQgRAAgNgNgAgPgjQgLAIAAAWQABARAHAPQAJAPANAAQAKAAAHgKQAFgKAAgRQABgQgIgPQgIgOgNAAQgIAAgFAFg");
	this.shape_253.setTransform(468.4,661.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AAFAuIAAgDQAIgBACgCQADgEAAgKIAAgoQAAgJgDgFQgDgGgJAAQgEAAgGAEIgIAIIAAA2QgBAGADADQAEACAGAAIAAADIgqAAIAAgDQAHgBADgCQACgDAAgJIAAgwIgBgJQgCgEgGAAIgBABIgDAAIAAgEIATgGIAKgDIAAAAIABACIAAAOQAJgIAEgDQAHgFAIAAQAHAAAFAEQALAHAAAUIAAAsQAAAHACADQADADAHAAIAAADg");
	this.shape_254.setTransform(458.4,661.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgTAMgOQALgOASAAQANAAALAKQALAJAAASIg+AAQABAVAJAKQAKALAMAAQAJgBAIgEQAHgGAGgKIADABQgEANgLAKQgLALgOAAQgTAAgKgOgAAQgQQgBgJgDgGQgFgIgKAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_255.setTransform(449,661.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AAGAuIAAgDQAGgBADgCQADgEAAgKIAAgoQAAgJgDgFQgDgGgIAAQgFAAgGAEIgJAIIAAA2QAAAGAEADQACACAIAAIAAADIgrAAIAAgDQAHgBACgCQADgDAAgJIAAgwIgBgJQgCgEgGAAIgCABIgCAAIAAgEIATgGIAJgDIABAAIAAACIAAAOQAJgIAGgDQAGgFAIAAQAHAAAFAEQALAHAAAUIAAAsQAAAHACADQAEADAGAAIAAADg");
	this.shape_256.setTransform(425.4,661.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AAAAdIgFgnIgBgFIAAgFQAAgDABgCQABgDAEAAQAFAAABADIABAGIAAACIAAAEIgFAqg");
	this.shape_257.setTransform(657.7,633.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AAGAuIAAgCQAGgCADgDQADgCAAgKIAAgqQAAgHgDgGQgDgGgIAAQgFAAgGAEIgJAHIAAA2QAAAIAEABQACADAIABIAAACIgsAAIAAgCQAHgBADgDQADgDAAgJIAAgxIgBgIQgCgEgGAAIgCAAIgCAAIAAgDIATgGIAJgDIABABIAAABIAAAPQAJgJAGgDQAGgFAIAAQAHAAAFAEQALAHAAATIAAAtQAAAHACADQAEADAGABIAAACg");
	this.shape_258.setTransform(645.5,639.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSALgPQAMgOASAAQAOAAAKAJQAKAKAAARIg9AAQABAWAJALQAKAKAMgBQAKAAAHgEQAHgGAGgKIADABQgEANgLALQgLAKgPAAQgSAAgKgOgAAQgQQgBgKgDgFQgEgIgLAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_259.setTransform(636,639.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAgAuIAAgDQAJgBACgCQADgDAAgIIAAgpQAAgKgCgEQgEgIgKAAQgHAAgGAEIgJAIIAAAxQAAAIADAEQADAEAJAAIAAADIgsAAIAAgDQAJgBADgDQACgEAAgNIAAgaQAAgPgCgGQgDgJgKAAQgHAAgFADQgGADgEAGIAAA0QAAAHADADQACADAJAAIAAADIgtAAIAAgDQAIAAACgCQAEgDAAgJIAAgxQAAgHgCgDQgCgCgEAAIgDAAIgCABIAAgDIAHgDIAMgEIAJgEIABABIAAACIAAANQAJgJAHgDQAIgEAHAAQAKAAAFAHQADAEACAGQAHgHAGgEQAJgGAKAAQAQAAAFANQADAHAAAQIAAAoQAAAGADADQADACAIABIAAADg");
	this.shape_260.setTransform(624,639.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgiApQgFgGgBgJQAAgOAPgJQAJgGAagJIAAgJQAAgJgCgFQgEgGgKAAQgEAAgFACQgFADABAFIAAADIABAEQAAAGgEABQgCACgDAAQgEAAgDgDQgCgDAAgDQAAgHAJgIQAIgHAQAAQASAAAHAMQAEAHAAANIAAAmIABAIQABAEADgBIAFAAIAEgDIAAAEQgDAEgDADQgGAEgGAAQgGgBgDgEQgDgEAAgGIgMAKQgJAFgIAAQgJAAgGgGgAgIAAQgPAJAAALQAAAIAHAEQADADAFAAQAHAAAEgDQAHgEAAgFIAAgfQgLAEgHAEg");
	this.shape_261.setTransform(606.5,639.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSAMgPQALgOASAAQAOAAAKAJQAKAKAAARIg9AAQABAWAJALQAKAKAMgBQAJAAAIgEQAHgGAGgKIADABQgEANgLALQgLAKgOAAQgTAAgKgOgAAQgQQgBgKgDgFQgEgIgLAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_262.setTransform(597.2,639.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAQBEIAAgMQgFAGgEADQgHAEgJAAQgQAAgLgNQgKgNAAgQQAAgWAMgOQANgPASAAQAGAAAGADQAEACADAEIAAgfQAAgGgBgDQgBgCgFAAIgCAAIgEABIAAgDIAIgDIAIgCIAIgCIAGgCIAAAAIAAAKIAAAMIAAALIAABPQgBAGACADQACADAHAAIABAAIACgBIAAADIgNAFIgQAGgAgVgIQgIAKABAQQAAAQAHAMQAHANAOAAQAHAAAFgFQAEgEAAgEIAAgqQABgMgIgFQgGgFgFAAQgNAAgGAKg");
	this.shape_263.setTransform(570.8,637.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSALgPQAMgOASAAQANAAALAJQALAKAAARIg9AAQAAAWAKALQAJAKALgBQAKAAAIgEQAHgGAGgKIADABQgEANgLALQgLAKgPAAQgSAAgKgOgAAQgQQgBgKgDgFQgFgIgKAAQgLAAgGAKQgDAFgBAIIAoAAIAAAAg");
	this.shape_264.setTransform(561.2,639.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgiApQgFgGgBgJQAAgOAOgJQAKgGAZgJIAAgJQAAgJgBgFQgEgGgKAAQgEAAgFACQgFADABAFIAAADIABAEQgBAGgDABQgCACgDAAQgFAAgCgDQgCgDAAgDQAAgHAJgIQAIgHAQAAQASAAAHAMQADAHABANIAAAmIABAIQABAEADgBIAFAAIAEgDIAAAEQgDAEgDADQgGAEgGAAQgGgBgDgEQgDgEgBgGIgLAKQgJAFgIAAQgIAAgHgGgAgIAAQgPAJAAALQABAIAFAEQAEADAFAAQAHAAAEgDQAHgEgBgFIAAgfQgKAEgHAEg");
	this.shape_265.setTransform(547.2,639.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AggAuIAAgDQAJgBADgDQACgCAAgIIAAgrQAAgKgBgDQgCgFgFAAIgCAAIgEABIAAgDIAMgEIAIgDIAKgEIAAABIABACIAAAQQAFgJAGgFQAFgFAHAAQAFAAADADQADADAAAFQAAADgCADQgDADgDAAQgEAAgEgDQgEgEgCAAQgDAAgFAGQgEAFAAAGIAAArQAAAIADAEQAEADAJAAIAAADg");
	this.shape_266.setTransform(539.1,639.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSALgPQAMgOASAAQANAAALAJQAKAKAAARIg9AAQABAWAKALQAJAKALgBQALAAAHgEQAHgGAGgKIADABQgEANgLALQgLAKgPAAQgSAAgKgOgAAQgQQgBgKgDgFQgEgIgLAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_267.setTransform(531.3,639.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgWBEIAAgCQAIgBAEgDQADgCAAgJIAAheIgBgJQgCgEgGAAIgDAAIgEABIAAgDIAfgKIAAABIABADIAAB0QAAAIADADQADACAJABIAAACg");
	this.shape_268.setTransform(524.1,637.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgfAiQgMgOAAgUQAAgTAMgOQAMgNATAAQATAAANAMQANANAAAVQAAATgNAOQgMAOgTAAQgTAAgNgNgAgPgjQgKAIAAAWQAAARAIAPQAHAPANAAQALAAAHgKQAFgKABgRQAAgQgIgPQgIgOgNAAQgIAAgFAFg");
	this.shape_269.setTransform(516.3,639.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AAGAuIAAgCQAGgCADgDQADgCAAgKIAAgqQAAgHgDgGQgDgGgIAAQgFAAgGAEIgJAHIAAA2QAAAIAEABQACADAIABIAAACIgsAAIAAgCQAIgBACgDQADgDAAgJIAAgxIgBgIQgCgEgGAAIgCAAIgCAAIAAgDIATgGIAJgDIABABIAAABIAAAPQAJgJAGgDQAGgFAIAAQAHAAAFAEQALAHAAATIAAAtQAAAHACADQAEADAGABIAAACg");
	this.shape_270.setTransform(490.2,639.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgdAhQgKgOAAgSQAAgSALgPQAMgOASAAQAOAAAKAJQAKAKAAARIg9AAQABAWAJALQAKAKAMgBQAKAAAHgEQAHgGAGgKIADABQgEANgLALQgLAKgOAAQgTAAgKgOgAAQgQQgBgKgDgFQgEgIgLAAQgLAAgGAKQgDAFgCAIIApAAIAAAAg");
	this.shape_271.setTransform(480.8,639.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgiApQgFgGgBgJQAAgOAOgJQAKgGAZgJIAAgJQABgJgCgFQgEgGgKAAQgEAAgFACQgFADABAFIAAADIABAEQgBAGgDABQgCACgDAAQgFAAgCgDQgCgDAAgDQAAgHAJgIQAIgHAQAAQASAAAHAMQADAHABANIAAAmIABAIQAAAEAEgBIAFAAIAEgDIAAAEQgDAEgDADQgGAEgGAAQgGgBgDgEQgDgEgBgGIgLAKQgJAFgIAAQgIAAgHgGgAgIAAQgPAJAAALQABAIAFAEQAEADAFAAQAHAAAEgDQAHgEgBgFIAAgfQgKAEgHAEg");
	this.shape_272.setTransform(461.2,639.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("Ag0BCIAAgDQAMgCADgDQADgDAAgNIAAhVQAAgLgEgDQgDgDgLgBIAAgEIA0AAQAaAAANAKQAOAKAAAQQAAAUgPAJQgPAJgXAAIgHgBIgIAAIAAAlQAAALAEADQADADALABIAAADgAgNg4QgCABAAAEIAAAzIAIABIADAAQANAAAHgDQAPgHAAgUQAAgSgQgHQgJgEgMAAQgGAAgBACg");
	this.shape_273.setTransform(450.9,637.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AAAAdIgFgnIgBgFIAAgFQAAgDABgCQABgDAEAAQAFAAABADIABAGIAAACIAAAEIgFAqg");
	this.shape_274.setTransform(443.4,633.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgHAsQgDgEAAgEQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFQAAAEgDADQgDAEgFAAQgEAAgDgDgAgHgbQgDgEAAgEQAAgEADgDQADgEAEAAQAEAAADADQAEAEAAAEQAAAFgEADQgDADgEAAQgEAAgDgDg");
	this.shape_275.setTransform(433.9,639.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgtBEIAAgDQAIgBADgDQADgDgBgIIAAhcQABgIgCgBQgCgDgFAAIgCAAIgCABIAAgEIAJgDIATgHIABABIAAABIAAAOIALgKQAJgGAIAAQAOAAAKALQAKAMAAAUQAAAUgMAPQgMAQgSAAQgFAAgDgCQgHgCgEgFIAAAfQgBAKADADQAEACAKABIAAADgAgIgzQgHAFABAFIAAAvQACAHAFAEQAFADAGAAQAKAAAIgLQAHgKABgSQAAgSgJgJQgHgJgLAAQgFAAgGAEg");
	this.shape_276.setTransform(425.9,641.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text},{t:this.instance_1,p:{skewY:0,x:36,y:763,scaleX:0.353,scaleY:0.239}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text},{t:this.instance_1,p:{skewY:180,x:700.2,y:549,scaleX:0.353,scaleY:0.239}},{t:this.shape_241,p:{x:441.9,y:576.3}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188,p:{x:489.8,y:621.2}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175,p:{x:621.8,y:621.2}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170,p:{x:446.6,y:643.2}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166,p:{x:476.6,y:643.2}},{t:this.shape_165,p:{x:480.9,y:638.3}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159,p:{x:528.3,y:642.1}},{t:this.shape_158,p:{x:534,y:643.2}},{t:this.shape_157},{t:this.shape_156,p:{x:554.5,y:643.2}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151,p:{x:608.3,y:643.2}},{t:this.shape_150,p:{x:620.9,y:646.5}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146,p:{x:654.3,y:644.4}},{t:this.shape_145},{t:this.shape_144,p:{x:449.8,y:665.2}},{t:this.shape_143},{t:this.shape_142,p:{x:465.2,y:664.1}},{t:this.shape_141,p:{x:472,y:666.4}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138,p:{x:499.1,y:666.4}},{t:this.shape_137,p:{x:507.9,y:666.5}},{t:this.shape_136,p:{x:522.9,y:664.1}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:556.3,y:666.4}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:596.7,y:664.1}},{t:this.shape_127,p:{x:602.4,y:665.2}},{t:this.shape_126},{t:this.shape_125,p:{x:618.4,y:666.3}},{t:this.shape_124,p:{x:625.6,y:666.4}},{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text},{t:this.instance_1,p:{skewY:180,x:695.2,y:587,scaleX:0.384,scaleY:0.218}},{t:this.shape_241,p:{x:409.4,y:637.3}},{t:this.shape_159,p:{x:418.4,y:637.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_188,p:{x:468.2,y:638.2}},{t:this.shape_142,p:{x:473.6,y:637.1}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_175,p:{x:498.1,y:638.2}},{t:this.shape_170,p:{x:508.7,y:638.2}},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_166,p:{x:554.1,y:638.2}},{t:this.shape_264},{t:this.shape_263},{t:this.shape_158,p:{x:583.5,y:638.2}},{t:this.shape_125,p:{x:589.6,y:639.3}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_156,p:{x:613.4,y:638.2}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_151,p:{x:653.4,y:638.2}},{t:this.shape_257},{t:this.shape_128,p:{x:409.9,y:659.1}},{t:this.shape_146,p:{x:416.6,y:661.4}},{t:this.shape_256},{t:this.shape_165,p:{x:432.1,y:655.3}},{t:this.shape_144,p:{x:436.9,y:660.2}},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_150,p:{x:488.4,y:663.5}},{t:this.shape_136,p:{x:498.4,y:659.1}},{t:this.shape_251},{t:this.shape_137,p:{x:520,y:661.5}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_141,p:{x:573.4,y:661.4}},{t:this.shape_138,p:{x:581.1,y:661.4}},{t:this.shape_246},{t:this.shape_132,p:{x:597.7,y:661.4}},{t:this.shape_124,p:{x:605.5,y:661.4}},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_127,p:{x:646.6,y:660.2}},{t:this.shape_242}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[]},1).to({state:[]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:0.86,x:368,y:51.6,text:"Choose patient John Doe from your active patient list",font:"24px 'Times'",lineHeight:26,lineWidth:822},0).wait(1).to({scaleX:1,x:368.3,y:55.1,text:"Finally, click 'Retrieve' to open the patient's record",lineWidth:704},0).wait(1).to({x:369.2,y:2,text:"This is the patient record! The top section includes the patient contact information. \n\nRemember, when contacting the patient, you are contacting them from the home health agency, not from Lifespan.",font:"20px 'Times'",lineHeight:22},0).wait(1).to({x:367.7,y:26.5,text:"Scrolling down, you also have access to the supervising discipline's contact information.  Coordinating with them can help you set up your schedule and resolve any problems you may encounter with the family. ",lineWidth:703},0).wait(1).to({x:369.2,y:2,text:"Scrolling down further, you can see the Initial Evaluation completed by the supervisor.  You should review this to ensure you are completing the correct frequency and addressing the concerns brought up at Evaluation.\nGo ahead and click this note to open it.",lineWidth:706},0).wait(1).to({x:368.3,y:59,text:"Choose 'View' to open the Evaluation.",lineWidth:702},0).wait(1).to({x:367.3,y:25.6,text:"This is the Evaluation! \n\nYou should read through the note to understand how the patient was performing.  ",lineWidth:703},0).wait(1).to({x:368.3,y:6.6,text:"Specifically review the goals you will be addressing and the verbal orders, for the frequency and duration you will be following.  Remember, this includes the Evaluation and discharge, so you will only complete the 'middle' of the frequency.  \nThis patient has a 2w3, 1w1 F&D.",lineWidth:699},0).wait(1).to({x:367.7,y:51,text:"Closing out of the Evaluation, let's go 'Back to Patient Record' to plot out and schedule our next visit.",lineWidth:703},0).wait(1).to({x:368.3,y:56.6,text:"Click the calendar icon to bring up the scheduling system. ",lineWidth:701},0).wait(1).to({x:367.8,y:34,text:"Here you can see that the scheduling system has the freuquency on the side bar for you to follow. You will then click the dates on the calendar that fill up this freuquency.",lineWidth:705},0).wait(1).to({x:366.8,y:19,text:"Note that this is a private insurance patient, so only the number of authorized visits can be plotted, in this case 5 visits.  \nChoose 'Add New Visits' to plot.",lineWidth:703},0).wait(1).to({x:369.5,y:29.6,text:"As an assistant, you will only complete Standard visits. Press 'Confirm'.",lineWidth:699},0).wait(1).to({x:367.8,y:32.6,text:"The visits are now on the calendar! Press 'To Patient Record' so that we can begin the first visit.  "},0).wait(1).to({y:56,text:"Let's start the 4/25 visit.  ",lineWidth:703},0).wait(1).to({x:366.2,y:64.7,text:"Choose proceed.  "},0).wait(1).to({x:370.2,y:21,text:"Most of the 'Patient Information' section would be filled out by Intake. \nSince every patient is different, we're going to focus on the areas that apply to everyone.",lineWidth:695},0).wait(1).to({x:367.1,y:35.8,text:"Every note must have a subjective.  Write how the patient and/or family members feel to give important insight in to their psychosocial state and goals for therapy. ",lineWidth:697},0).wait(1).to({x:367.4,y:27.9,text:"Every note must have heart rate, blood pressure, respirations, and temperature.  \n\nIf you do not already have your equipment, please start ordering it! ",lineWidth:693},0).wait(1).to({x:369.1,y:36.8,text:"Lets not forget the pain vital! Pain must be addressed at every visit. Go ahead and mark that John Doe is experiencing pain. "},0).wait(1).to({x:365.9,y:31.8,text:"Every note must have a subjective.  Write how the patient and/or family members feel to give important insight in to their psychosocial state and goals for therapy. ",lineWidth:696},0).wait(1).to({x:367.9,y:38.8,text:"Great job! Now options for filling the patients pain levels have populated.  If a patient has pain, you should fill these in, but for now we are going to skip them."},0).wait(1).to({x:368.9,y:19.7,text:"Gait/Mobility, ADLs, Balance, etc. are all broken down so that you can address the objective measures individually, depending upon the plan of care and the patient's needs.  Try to keep these consistent with the goals.  ",lineWidth:702},0).wait(1).to({x:370.9,y:63.1,text:"The Objective section should summarize any objective measures you have taken.  ",font:"18px 'Times'",lineHeight:20,lineWidth:698},0).wait(1).to({x:369,y:2,text:"Your Assessment will use these objective measures to assess what the plan for the patient should be.  This is where you explain why skilled therapy (AKA you) is warranted!\n\nThis concludes page 1 of the Evaluation. Press Next to continue."},0).wait(1).to({x:367.9,y:19.7,text:"Any exercises the supervising clinician added will be here. You may adjust these, change them, or write in your own.\nPress Next.",font:"20px 'Times'",lineHeight:22,lineWidth:708},0).wait(1).to({x:365.9,y:2,text:"You do not have the ability to set your own goals, but you should assess the patient's ability to meet their goals at each visit.  When a goal is met, it must be marked as 100%, or will not show as met on the printed note. \nPress Next.",lineWidth:696},0).wait(1).to({x:366.9,y:29.6,text:"The system automatically adds a time based upon when you open the note.  You should adjust the time to match your visit time (the home health standard is around 45 minutes)\nPress Next.",font:"18px 'Times'",lineHeight:20,lineWidth:706},0).wait(1).to({y:10.6,text:"Every note must have a patient signature, which they will sign on your device (tablet or phone).  You may want to use a stylus to keep your device clean. \nIf you lose connection, you may obtain this signature on paper.\nPress Next.",lineWidth:702},0).wait(1).to({x:369.9,y:47,text:"You must also sign your work.\nPress Next.",lineWidth:704},0).wait(1).to({x:366.2,y:37,text:"Every note must have a signed date, which matches the visit date.\nPress Next.",lineWidth:695},0).wait(1).to({x:367.9,y:12.6,text:"The last page allows you to review your work before pressing 'Finalize'.\nIn this case, let's say we skipped over some sections in the patient's home and would like to fill them out later.\nPress 'Save& Exit'",lineWidth:688},0).wait(1).to({x:367.2,y:42.6,text:"Your saved visit is now on the patient record! \nLet's navigate back to the homepage, press the menu button in the top left corner.",lineWidth:705},0).wait(1).to({x:370.9,y:58,text:"Press the 'Lifespan' icon.",lineWidth:694},0).wait(1).to({x:366.9,y:40.9,text:"Great, now you can see your scheduled visits and alerts. To quickly access your saved note, you would choose 'Select' under 'Saved Visits' below.  ",lineWidth:686},0).to({_off:true},1).wait(30));

	// Arrows
	this.instance_2 = new lib.NewProject26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(230,377,0.207,0.184,180);

	this.instance_3 = new lib.NewProject26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(342,587,0.207,0.184,180);

	this.btn6 = new lib.btn6();
	this.btn6.parent = this;
	this.btn6.setTransform(54.5,269);
	new cjs.ButtonHelper(this.btn6, 0, 1, 1);

	this.instance_4 = new lib.NewProject26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(341,788,0.207,0.184,180);

	this.instance_5 = new lib.NewProject26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(573,711,0.207,0.184,180);

	this.instance_6 = new lib.NewProject26();
	this.instance_6.parent = this;
	this.instance_6.setTransform(497,783,0.207,0.184,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{rotation:180,skewX:0,x:342,y:587,skewY:0}},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3,p:{rotation:0,skewX:180,x:314,y:813,skewY:0}},{t:this.instance_2}]},1).to({state:[{t:this.instance_2},{t:this.btn6}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:180,skewY:0,x:573,y:711}},{t:this.instance_4,p:{rotation:180,skewY:0,x:341,y:788}},{t:this.instance_3,p:{rotation:180,skewX:0,x:341,y:854,skewY:0}},{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{rotation:180,skewX:0,x:446,y:351,skewY:0}},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_5,p:{rotation:0,skewY:180,x:417,y:325}},{t:this.instance_4,p:{rotation:0,skewY:180,x:429,y:490}},{t:this.instance_3,p:{rotation:0,skewX:0,x:424,y:410,skewY:180}},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{rotation:0,skewX:0,x:352,y:209,skewY:180}},{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{rotation:180,skewX:0,x:354,y:493,skewY:0}},{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{rotation:0,skewX:180,x:538,y:400,skewY:0}},{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{rotation:180,skewX:0,x:436,y:445,skewY:0}},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[]},2).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:297,y:412},0).wait(1).to({rotation:0,skewX:180,x:529,y:378},0).wait(1).to({rotation:180,skewX:0,x:374,y:544},0).wait(1).to({x:280,y:575},0).wait(1).to({x:340,y:624},0).wait(1).to({rotation:0,x:459,y:766},0).to({_off:true},1).wait(1).to({_off:false,skewY:180,x:170,y:540},0).wait(1).to({rotation:180,skewY:0,x:257,y:300},0).wait(1).to({x:242,y:704},0).wait(1).to({x:497,y:854},0).wait(1).to({rotation:270,x:580,y:458},0).wait(1).to({rotation:360,skewX:180,x:229,y:848},0).wait(1).to({rotation:180,skewX:0,x:217,y:259},0).wait(1).to({x:658,y:553},0).wait(1).to({rotation:90,x:629,y:657},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,skewY:180,x:220,y:370},0).wait(1).to({x:457,y:367},0).wait(1).to({x:400,y:243},0).wait(1).to({rotation:180,skewY:0,x:313,y:302},0).to({_off:true},1).wait(1).to({_off:false,x:457,y:368},0).wait(1).to({x:207,y:338},0).wait(1).to({rotation:0,x:567,y:904},0).wait(7).to({rotation:90,x:109,y:847},0).wait(1).to({rotation:180,x:158,y:230},0).wait(1).to({x:316,y:316},0).to({_off:true},1).wait(31));

	// actionsbuttonsandbg
	this.btn1 = new lib.btn1();
	this.btn1.parent = this;
	this.btn1.setTransform(62.1,334);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.instance_7 = new lib.ScreenShot20190502at25958PM();
	this.instance_7.parent = this;
	this.instance_7.setTransform(45,187);

	this.btn2 = new lib.btn2();
	this.btn2.parent = this;
	this.btn2.setTransform(54.5,377.4);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.instance_8 = new lib.ScreenShot20190502at30100PM();
	this.instance_8.parent = this;
	this.instance_8.setTransform(46,186);

	this.btn3 = new lib.btn3();
	this.btn3.parent = this;
	this.btn3.setTransform(635,354.5,1,1,0,0,0,43,22.5);
	new cjs.ButtonHelper(this.btn3, 0, 1, 1);

	this.instance_9 = new lib.ScreenShot20190502at34536PM();
	this.instance_9.parent = this;
	this.instance_9.setTransform(52,288);

	this.instance_10 = new lib.ScreenShot20190502at25958PMpngcopy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(45,187);

	this.btn31 = new lib.btn31();
	this.btn31.parent = this;
	this.btn31.setTransform(564.5,909.9);
	new cjs.ButtonHelper(this.btn31, 0, 1, 1);

	this.instance_11 = new lib.ScreenShot20190502at30145PM();
	this.instance_11.parent = this;
	this.instance_11.setTransform(45,186);

	this.btn32 = new lib.btn32();
	this.btn32.parent = this;
	this.btn32.setTransform(564.5,909.9);
	new cjs.ButtonHelper(this.btn32, 0, 1, 1);

	this.instance_12 = new lib.ScreenShot20190502at30229PM();
	this.instance_12.parent = this;
	this.instance_12.setTransform(46,187);

	this.btn4 = new lib.btn4();
	this.btn4.parent = this;
	this.btn4.setTransform(61.5,518.4);
	new cjs.ButtonHelper(this.btn4, 0, 1, 1);

	this.instance_13 = new lib.ScreenShot20190502at30243PM();
	this.instance_13.parent = this;
	this.instance_13.setTransform(47,187);

	this.btn30 = new lib.btn30();
	this.btn30.parent = this;
	this.btn30.setTransform(580,789,1,1,0,0,0,60,20);
	new cjs.ButtonHelper(this.btn30, 0, 1, 1);

	this.instance_14 = new lib.ScreenShot20190502at30316PM();
	this.instance_14.parent = this;
	this.instance_14.setTransform(47,186);

	this.btn33 = new lib.btn33();
	this.btn33.parent = this;
	this.btn33.setTransform(564.5,909.9);
	new cjs.ButtonHelper(this.btn33, 0, 1, 1);

	this.instance_15 = new lib.ScreenShot20190502at30340PM();
	this.instance_15.parent = this;
	this.instance_15.setTransform(46,186);

	this.btn34 = new lib.btn34();
	this.btn34.parent = this;
	this.btn34.setTransform(564.5,909.9);
	new cjs.ButtonHelper(this.btn34, 0, 1, 1);

	this.instance_16 = new lib.ScreenShot20190502at30359PM();
	this.instance_16.parent = this;
	this.instance_16.setTransform(45,185);

	this.instance_17 = new lib.ScreenShot20190502at30430PM();
	this.instance_17.parent = this;
	this.instance_17.setTransform(46,183);

	this.btn7 = new lib.btn7();
	this.btn7.parent = this;
	this.btn7.setTransform(75.5,653.4);
	new cjs.ButtonHelper(this.btn7, 0, 1, 1);

	this.instance_18 = new lib.ScreenShot20190502at30500PM();
	this.instance_18.parent = this;
	this.instance_18.setTransform(48,184);

	this.btn36 = new lib.btn36();
	this.btn36.parent = this;
	this.btn36.setTransform(369,797.9);
	new cjs.ButtonHelper(this.btn36, 0, 1, 1);

	this.img10 = new lib.img10();
	this.img10.parent = this;
	this.img10.setTransform(408,762,1,1,0,0,0,39.5,37);

	this.img9 = new lib.img9();
	this.img9.parent = this;
	this.img9.setTransform(253.5,762,1,1,0,0,0,40,36);

	this.img35 = new lib.img35();
	this.img35.parent = this;
	this.img35.setTransform(251.5,833.5,1,1,0,0,0,38,35.5);

	this.img8 = new lib.img8();
	this.img8.parent = this;
	this.img8.setTransform(484,690,1,1,0,0,0,39.5,37);

	this.instance_19 = new lib.btn36();
	this.instance_19.parent = this;
	this.instance_19.setTransform(368.5,798);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 1);

	this.btn35 = new lib.btn35();
	this.btn35.parent = this;
	this.btn35.setTransform(205.5,795.5);
	new cjs.ButtonHelper(this.btn35, 0, 1, 1);

	this.btn10 = new lib.btn10();
	this.btn10.parent = this;
	this.btn10.setTransform(369.5,725.5);
	new cjs.ButtonHelper(this.btn10, 0, 1, 1);

	this.btn8 = new lib.btn8();
	this.btn8.parent = this;
	this.btn8.setTransform(444.5,654);
	new cjs.ButtonHelper(this.btn8, 0, 1, 1);

	this.btn9 = new lib.btn9();
	this.btn9.parent = this;
	this.btn9.setTransform(214.5,725);
	new cjs.ButtonHelper(this.btn9, 0, 1, 1);

	this.instance_20 = new lib.ScreenShot20190502at30536PM();
	this.instance_20.parent = this;
	this.instance_20.setTransform(45,183);

	this.btn12 = new lib.btn12();
	this.btn12.parent = this;
	this.btn12.setTransform(550.5,358);
	new cjs.ButtonHelper(this.btn12, 0, 1, 1);

	this.instance_21 = new lib.ScreenShot20190502at30723PMpngcopy();
	this.instance_21.parent = this;
	this.instance_21.setTransform(45,183);

	this.btn13 = new lib.btn13();
	this.btn13.parent = this;
	this.btn13.setTransform(276,805.4);
	new cjs.ButtonHelper(this.btn13, 0, 1, 1);

	this.instance_22 = new lib.ScreenShot20190502at30743PM();
	this.instance_22.parent = this;
	this.instance_22.setTransform(46,184);

	this.btn14 = new lib.btn14();
	this.btn14.parent = this;
	this.btn14.setTransform(44,227.5);
	new cjs.ButtonHelper(this.btn14, 0, 1, 1);

	this.instance_23 = new lib.ScreenShot20190502at30806PM();
	this.instance_23.parent = this;
	this.instance_23.setTransform(46,183);

	this.btn15 = new lib.btn15();
	this.btn15.parent = this;
	this.btn15.setTransform(373.5,457);
	new cjs.ButtonHelper(this.btn15, 0, 1, 1);

	this.instance_24 = new lib.ScreenShot20190502at30827PM();
	this.instance_24.parent = this;
	this.instance_24.setTransform(46,183);

	this.btn16 = new lib.btn16();
	this.btn16.parent = this;
	this.btn16.setTransform(556.5,714.4);
	new cjs.ButtonHelper(this.btn16, 0, 1, 1);

	this.instance_25 = new lib.ScreenShot20190502at30849PM();
	this.instance_25.parent = this;
	this.instance_25.setTransform(44,183);

	this.btn38 = new lib.btn38();
	this.btn38.parent = this;
	this.btn38.setTransform(564.5,862.9);
	new cjs.ButtonHelper(this.btn38, 0, 1, 1);

	this.instance_26 = new lib.ScreenShot20190502at30912PM();
	this.instance_26.parent = this;
	this.instance_26.setTransform(46,185);

	this.btn39 = new lib.btn39();
	this.btn39.parent = this;
	this.btn39.setTransform(564.5,862.9);
	new cjs.ButtonHelper(this.btn39, 0, 1, 1);

	this.instance_27 = new lib.ScreenShot20190502at31041PM();
	this.instance_27.parent = this;
	this.instance_27.setTransform(44,184);

	this.btn40 = new lib.btn40();
	this.btn40.parent = this;
	this.btn40.setTransform(564.5,862.9);
	new cjs.ButtonHelper(this.btn40, 0, 1, 1);

	this.instance_28 = new lib.ScreenShot20190502at31137PM();
	this.instance_28.parent = this;
	this.instance_28.setTransform(46,183);

	this.btn17 = new lib.btn17();
	this.btn17.parent = this;
	this.btn17.setTransform(213.5,247.5);
	new cjs.ButtonHelper(this.btn17, 0, 1, 1);

	this.instance_29 = new lib.ScreenShot20190502at31152PM();
	this.instance_29.parent = this;
	this.instance_29.setTransform(46,184);

	this.btn18 = new lib.btn18();
	this.btn18.parent = this;
	this.btn18.setTransform(205,270);
	new cjs.ButtonHelper(this.btn18, 0, 1, 1);

	this.instance_30 = new lib.ScreenShot20190502at31209PM();
	this.instance_30.parent = this;
	this.instance_30.setTransform(46,184);

	this.btn50 = new lib.btn50();
	this.btn50.parent = this;
	this.btn50.setTransform(564.5,862.9);
	new cjs.ButtonHelper(this.btn50, 0, 1, 1);

	this.instance_31 = new lib.ScreenShot20190502at31243PM();
	this.instance_31.parent = this;
	this.instance_31.setTransform(47,185);

	this.btn54 = new lib.btn54();
	this.btn54.parent = this;
	this.btn54.setTransform(564.5,862.9);
	new cjs.ButtonHelper(this.btn54, 0, 1, 1);

	this.instance_32 = new lib.ScreenShot20190502at31747PM();
	this.instance_32.parent = this;
	this.instance_32.setTransform(46,184);

	this.btn42 = new lib.btn42();
	this.btn42.parent = this;
	this.btn42.setTransform(564.5,862.9);
	new cjs.ButtonHelper(this.btn42, 0, 1, 1);

	this.instance_33 = new lib.ScreenShot20190502at32006PM();
	this.instance_33.parent = this;
	this.instance_33.setTransform(45,185);

	this.btn26 = new lib.btn26();
	this.btn26.parent = this;
	this.btn26.setTransform(609,906.4);
	new cjs.ButtonHelper(this.btn26, 0, 1, 1);

	this.instance_34 = new lib.ScreenShot20190502at32540PM();
	this.instance_34.parent = this;
	this.instance_34.setTransform(47,184);

	this.btn25 = new lib.btn25();
	this.btn25.parent = this;
	this.btn25.setTransform(609,907);
	new cjs.ButtonHelper(this.btn25, 0, 1, 1);

	this.instance_35 = new lib.ScreenShot20190502at32611PM();
	this.instance_35.parent = this;
	this.instance_35.setTransform(47,185);

	this.btn24 = new lib.btn24();
	this.btn24.parent = this;
	this.btn24.setTransform(609,906.4);
	new cjs.ButtonHelper(this.btn24, 0, 1, 1);

	this.instance_36 = new lib.ScreenShot20190502at32639PM();
	this.instance_36.parent = this;
	this.instance_36.setTransform(45,185);

	this.btn23 = new lib.btn23();
	this.btn23.parent = this;
	this.btn23.setTransform(609,906.4);
	new cjs.ButtonHelper(this.btn23, 0, 1, 1);

	this.instance_37 = new lib.ScreenShot20190502at32654PM();
	this.instance_37.parent = this;
	this.instance_37.setTransform(31,185);

	this.btn22 = new lib.btn22();
	this.btn22.parent = this;
	this.btn22.setTransform(609,906.4);
	new cjs.ButtonHelper(this.btn22, 0, 1, 1);

	this.instance_38 = new lib.ScreenShot20190502at32706PM();
	this.instance_38.parent = this;
	this.instance_38.setTransform(32,186);

	this.btn21 = new lib.btn21();
	this.btn21.parent = this;
	this.btn21.setTransform(609,906.4);
	new cjs.ButtonHelper(this.btn21, 0, 1, 1);

	this.instance_39 = new lib.ScreenShot20190502at32716PM();
	this.instance_39.parent = this;
	this.instance_39.setTransform(31,187);

	this.btn20 = new lib.btn20();
	this.btn20.parent = this;
	this.btn20.setTransform(609,906.4);
	new cjs.ButtonHelper(this.btn20, 0, 1, 1);

	this.instance_40 = new lib.ScreenShot20190502at32725PM();
	this.instance_40.parent = this;
	this.instance_40.setTransform(31,186);

	this.btn27 = new lib.btn27();
	this.btn27.parent = this;
	this.btn27.setTransform(45.5,909);
	new cjs.ButtonHelper(this.btn27, 0, 1, 1);

	this.instance_41 = new lib.ScreenShot20190502at32829PM();
	this.instance_41.parent = this;
	this.instance_41.setTransform(46,186);

	this.btn28 = new lib.btn28();
	this.btn28.parent = this;
	this.btn28.setTransform(45.5,183.6);
	new cjs.ButtonHelper(this.btn28, 0, 1, 1);

	this.instance_42 = new lib.ScreenShot20190502at32857PM();
	this.instance_42.parent = this;
	this.instance_42.setTransform(47,187);

	this.btn29 = new lib.btn29();
	this.btn29.parent = this;
	this.btn29.setTransform(54.5,236.6);
	new cjs.ButtonHelper(this.btn29, 0, 1, 1);

	this.instance_43 = new lib.ScreenShot20190502at32946PM();
	this.instance_43.parent = this;
	this.instance_43.setTransform(47,187);

	this.btn57 = new lib.btn57();
	this.btn57.parent = this;
	this.btn57.setTransform(564.5,862.9);
	new cjs.ButtonHelper(this.btn57, 0, 1, 1);

	this.instance_44 = new lib.ScreenShot20190502at33018PM();
	this.instance_44.parent = this;
	this.instance_44.setTransform(47,188);

	this.ScheduleCall = new lib.ScheduleCall();
	this.ScheduleCall.parent = this;
	this.ScheduleCall.setTransform(298.5,737.4);
	new cjs.ButtonHelper(this.ScheduleCall, 0, 1, 1);

	this.RestartTut = new lib.RestartTutorial();
	this.RestartTut.parent = this;
	this.RestartTut.setTransform(228.5,614.7);
	new cjs.ButtonHelper(this.RestartTut, 0, 1, 1);

	this.instance_45 = new lib.Lifespan();
	this.instance_45.parent = this;
	this.instance_45.setTransform(358.5,302.5,1.78,1.724);
	new cjs.ButtonHelper(this.instance_45, 0, 1, 1);

	this.text_1 = new cjs.Text("Thank you for taking the time to go through this! If you have any questions, please feel free to contact our office. ", "30px 'Times'", "#330033");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 461;
	this.text_1.parent = this;
	this.text_1.setTransform(362,465.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.btn1}]}).to({state:[{t:this.instance_8},{t:this.btn2}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.btn3}]},1).to({state:[{t:this.instance_11},{t:this.btn31}]},1).to({state:[{t:this.instance_12},{t:this.btn32}]},1).to({state:[{t:this.instance_13},{t:this.btn4}]},1).to({state:[{t:this.instance_14},{t:this.btn30}]},1).to({state:[{t:this.instance_15},{t:this.btn33}]},1).to({state:[{t:this.instance_16},{t:this.btn34}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18},{t:this.btn7}]},1).to({state:[{t:this.instance_20},{t:this.btn9},{t:this.btn8},{t:this.btn10},{t:this.btn35},{t:this.instance_19},{t:this.img8},{t:this.img35},{t:this.img9},{t:this.img10},{t:this.btn36}]},1).to({state:[{t:this.instance_21},{t:this.btn12}]},1).to({state:[{t:this.instance_22},{t:this.btn13}]},1).to({state:[{t:this.instance_23},{t:this.btn14}]},1).to({state:[{t:this.instance_24},{t:this.btn15}]},1).to({state:[{t:this.instance_25},{t:this.btn16}]},1).to({state:[{t:this.instance_26},{t:this.btn38}]},1).to({state:[{t:this.instance_27},{t:this.btn39}]},1).to({state:[{t:this.instance_28},{t:this.btn40}]},1).to({state:[{t:this.instance_29},{t:this.btn17}]},1).to({state:[{t:this.instance_30},{t:this.btn18}]},1).to({state:[{t:this.instance_31},{t:this.btn50}]},1).to({state:[{t:this.instance_32},{t:this.btn54}]},1).to({state:[{t:this.instance_33},{t:this.btn42}]},1).to({state:[{t:this.instance_34},{t:this.btn26}]},1).to({state:[{t:this.instance_35},{t:this.btn25}]},1).to({state:[{t:this.instance_36},{t:this.btn24}]},1).to({state:[{t:this.instance_37},{t:this.btn23}]},1).to({state:[{t:this.instance_38},{t:this.btn22}]},1).to({state:[{t:this.instance_39},{t:this.btn21}]},1).to({state:[{t:this.instance_40},{t:this.btn20}]},1).to({state:[{t:this.instance_41},{t:this.btn27}]},1).to({state:[{t:this.instance_42},{t:this.btn28}]},1).to({state:[{t:this.instance_43},{t:this.btn29}]},1).to({state:[{t:this.instance_44},{t:this.btn57}]},1).to({state:[{t:this.text_1},{t:this.instance_45},{t:this.RestartTut},{t:this.ScheduleCall}]},1).to({state:[]},1).wait(29));

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
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/ipadclipartpng14transparent.png", id:"ipadclipartpng14transparent"},
		{src:"images/NewProject22.png", id:"NewProject22"},
		{src:"images/NewProject23.png", id:"NewProject23"},
		{src:"images/NewProject26.png", id:"NewProject26"},
		{src:"images/NewProject28.png", id:"NewProject28"},
		{src:"images/ScreenShot20190426at21932PM.png", id:"ScreenShot20190426at21932PM"},
		{src:"images/ScreenShot20190502at25958PM.png", id:"ScreenShot20190502at25958PM"},
		{src:"images/ScreenShot20190502at25958PMpngcopy.png", id:"ScreenShot20190502at25958PMpngcopy"},
		{src:"images/ScreenShot20190502at30050PM.png", id:"ScreenShot20190502at30050PM"},
		{src:"images/ScreenShot20190502at30100PM.png", id:"ScreenShot20190502at30100PM"},
		{src:"images/ScreenShot20190502at30116PM.png", id:"ScreenShot20190502at30116PM"},
		{src:"images/ScreenShot20190502at30127PM.png", id:"ScreenShot20190502at30127PM"},
		{src:"images/ScreenShot20190502at30136PM.png", id:"ScreenShot20190502at30136PM"},
		{src:"images/ScreenShot20190502at30145PM.png", id:"ScreenShot20190502at30145PM"},
		{src:"images/ScreenShot20190502at30229PM.png", id:"ScreenShot20190502at30229PM"},
		{src:"images/ScreenShot20190502at30243PM.png", id:"ScreenShot20190502at30243PM"},
		{src:"images/ScreenShot20190502at30259PM.png", id:"ScreenShot20190502at30259PM"},
		{src:"images/ScreenShot20190502at30316PM.png", id:"ScreenShot20190502at30316PM"},
		{src:"images/ScreenShot20190502at30324PMpngcopy.png", id:"ScreenShot20190502at30324PMpngcopy"},
		{src:"images/ScreenShot20190502at30340PM.png", id:"ScreenShot20190502at30340PM"},
		{src:"images/ScreenShot20190502at30359PM.png", id:"ScreenShot20190502at30359PM"},
		{src:"images/ScreenShot20190502at30430PM.png", id:"ScreenShot20190502at30430PM"},
		{src:"images/ScreenShot20190502at30441PM.png", id:"ScreenShot20190502at30441PM"},
		{src:"images/ScreenShot20190502at30500PM.jpg", id:"ScreenShot20190502at30500PM"},
		{src:"images/ScreenShot20190502at30508PM.png", id:"ScreenShot20190502at30508PM"},
		{src:"images/ScreenShot20190502at30536PM.png", id:"ScreenShot20190502at30536PM"},
		{src:"images/ScreenShot20190502at30613PM.png", id:"ScreenShot20190502at30613PM"},
		{src:"images/ScreenShot20190502at30621PM.png", id:"ScreenShot20190502at30621PM"},
		{src:"images/ScreenShot20190502at30703PM.png", id:"ScreenShot20190502at30703PM"},
		{src:"images/ScreenShot20190502at30714PM.png", id:"ScreenShot20190502at30714PM"},
		{src:"images/ScreenShot20190502at30718PM.png", id:"ScreenShot20190502at30718PM"},
		{src:"images/ScreenShot20190502at30723PMpngcopy.jpg", id:"ScreenShot20190502at30723PMpngcopy"},
		{src:"images/ScreenShot20190502at30735PM.png", id:"ScreenShot20190502at30735PM"},
		{src:"images/ScreenShot20190502at30743PM.png", id:"ScreenShot20190502at30743PM"},
		{src:"images/ScreenShot20190502at30752PM.png", id:"ScreenShot20190502at30752PM"},
		{src:"images/ScreenShot20190502at30806PM.png", id:"ScreenShot20190502at30806PM"},
		{src:"images/ScreenShot20190502at30813PM.png", id:"ScreenShot20190502at30813PM"},
		{src:"images/ScreenShot20190502at30827PM.png", id:"ScreenShot20190502at30827PM"},
		{src:"images/ScreenShot20190502at30838PM.png", id:"ScreenShot20190502at30838PM"},
		{src:"images/ScreenShot20190502at30849PM.png", id:"ScreenShot20190502at30849PM"},
		{src:"images/ScreenShot20190502at30857PM.png", id:"ScreenShot20190502at30857PM"},
		{src:"images/ScreenShot20190502at30912PM.png", id:"ScreenShot20190502at30912PM"},
		{src:"images/ScreenShot20190502at31041PM.png", id:"ScreenShot20190502at31041PM"},
		{src:"images/ScreenShot20190502at31137PM.png", id:"ScreenShot20190502at31137PM"},
		{src:"images/ScreenShot20190502at31152PM.png", id:"ScreenShot20190502at31152PM"},
		{src:"images/ScreenShot20190502at31200PM.png", id:"ScreenShot20190502at31200PM"},
		{src:"images/ScreenShot20190502at31209PM.png", id:"ScreenShot20190502at31209PM"},
		{src:"images/ScreenShot20190502at31227PM.png", id:"ScreenShot20190502at31227PM"},
		{src:"images/ScreenShot20190502at31232PM.png", id:"ScreenShot20190502at31232PM"},
		{src:"images/ScreenShot20190502at31243PM.png", id:"ScreenShot20190502at31243PM"},
		{src:"images/ScreenShot20190502at31747PM.png", id:"ScreenShot20190502at31747PM"},
		{src:"images/ScreenShot20190502at32006PM.png", id:"ScreenShot20190502at32006PM"},
		{src:"images/ScreenShot20190502at32540PM.png", id:"ScreenShot20190502at32540PM"},
		{src:"images/ScreenShot20190502at32553PM.png", id:"ScreenShot20190502at32553PM"},
		{src:"images/ScreenShot20190502at32611PM.png", id:"ScreenShot20190502at32611PM"},
		{src:"images/ScreenShot20190502at32639PM.png", id:"ScreenShot20190502at32639PM"},
		{src:"images/ScreenShot20190502at32654PM.png", id:"ScreenShot20190502at32654PM"},
		{src:"images/ScreenShot20190502at32706PM.png", id:"ScreenShot20190502at32706PM"},
		{src:"images/ScreenShot20190502at32716PM.png", id:"ScreenShot20190502at32716PM"},
		{src:"images/ScreenShot20190502at32725PM.png", id:"ScreenShot20190502at32725PM"},
		{src:"images/ScreenShot20190502at32829PM.png", id:"ScreenShot20190502at32829PM"},
		{src:"images/ScreenShot20190502at32839PM.png", id:"ScreenShot20190502at32839PM"},
		{src:"images/ScreenShot20190502at32857PM.png", id:"ScreenShot20190502at32857PM"},
		{src:"images/ScreenShot20190502at32922PM.png", id:"ScreenShot20190502at32922PM"},
		{src:"images/ScreenShot20190502at32946PM.png", id:"ScreenShot20190502at32946PM"},
		{src:"images/ScreenShot20190502at32954PM.png", id:"ScreenShot20190502at32954PM"},
		{src:"images/ScreenShot20190502at33018PM.png", id:"ScreenShot20190502at33018PM"},
		{src:"images/ScreenShot20190502at34536PM.png", id:"ScreenShot20190502at34536PM"},
		{src:"images/ScreenShot20190503at91651AM.png", id:"ScreenShot20190503at91651AM"},
		{src:"images/ScreenShot20190503at92205AM.png", id:"ScreenShot20190503at92205AM"},
		{src:"images/ScreenShot20190503at92211AM.png", id:"ScreenShot20190503at92211AM"},
		{src:"images/unnamed.png", id:"unnamed"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;