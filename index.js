(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1366,678],[0,680,960,960],[962,680,1080,608]]},
		{name:"index_atlas_2", frames: [[802,0,998,585],[1026,587,998,585],[1202,1580,553,329],[0,1404,1200,470],[1202,1174,644,404],[0,0,800,800],[0,802,1024,600]]},
		{name:"index_atlas_3", frames: [[502,0,30,561],[0,474,267,44],[0,0,500,280],[0,520,267,44],[0,282,259,46],[0,330,259,46],[0,378,259,46],[0,426,259,46]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bbps = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bus = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cam = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cam2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ClickContactus = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.csc = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.digi_pay_banner2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.irctc500x500 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.other = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pan = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.smteluguinfo = function() {
	this.initialize(img.smteluguinfo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,1348);


(lib.Untitled1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Untitled1_0000_Layer2copy3 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Untitled1_0001_Layer2copy2 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Untitled1_0002_Layer2copy = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Untitled1_0003_Layer2 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pan();
	this.instance.setTransform(-282.5,-282.5,0.7062,0.7062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.5,-282.5,565,565);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pan();
	this.instance.setTransform(-282.5,-282.5,0.7062,0.7062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.5,-282.5,565,565);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClickContactus();
	this.instance.setTransform(-133.5,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-133.5,-22,267,44), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Canon 1500D For Rent\n\nColor Xerox & Photos\n\nWhatsapp Service Available", "bold 32px 'Orbitron'", "#0000FF");
	this.text.lineHeight = 40;
	this.text.lineWidth = 581;
	this.text.parent = this;
	this.text.setTransform(-255,-204.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-257,-206.9,585,262.9), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("All Mobile & DTH Recharges\n\nLIC Insurense Payments\n\nPower Bill Payment\n\nGas Cylinder Booking", "bold 32px 'Orbitron'", "#0000FF");
	this.text.lineHeight = 40;
	this.text.lineWidth = 525;
	this.text.parent = this;
	this.text.setTransform(-254,-240.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-256,-242.9,529,321.9), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("IRCTC   --> Agent\n\nAdvanced Train Tickets\n\nTatkal Train Tickets\n\nBus Tickets\n", "bold 32px 'Orbitron'", "#0000FF");
	this.text.lineHeight = 40;
	this.text.lineWidth = 466;
	this.text.parent = this;
	this.text.setTransform(-286,-241.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-288,-243.9,470,365.1), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Pan Application\n\nPan Correction\n\nPan All Services", "bold 32px 'Orbitron'", "#0000FF");
	this.text.lineHeight = 40;
	this.text.lineWidth = 363;
	this.text.parent = this;
	this.text.setTransform(-358.95,-242.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-360.9,-244.9,366.9,244.1), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Cash Withdraw\n\nBalance Enquiry\n\nPM gov Schem's\n\nAadhar Download\n", "bold 32px 'Orbitron'", "#0000FF");
	this.text.lineHeight = 40;
	this.text.lineWidth = 549;
	this.text.parent = this;
	this.text.setTransform(-315.95,-242.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-317.9,-244.9,552.9,365.1), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Untitled1_0003_Layer2();
	this.instance.setTransform(64,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,0,259,46);


(lib.pan_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_3"],6);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1,0,0,1,-129.5,-23)).s().p("A0ODmIAAnLMAodAAAIAAHLg")
	}.bind(this);
	this.shape.setTransform(129.5,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,46);


(lib.othersb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.other();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,44);


(lib.irctcb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Untitled1_0001_Layer2copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,46);


(lib.billsb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Untitled1_0000_Layer2copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,46);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [3,5,7,9,11,12,27,37,48,57,67,75];
	// timeline functions:
	this.frame_3 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame() {
			this.gotoAndPlay(20);
		}
	}
	this.frame_5 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2() {
			this.gotoAndPlay(30);
		}
	}
	this.frame_7 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3() {
			this.gotoAndPlay(40);
		}
	}
	this.frame_9 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4() {
			this.gotoAndPlay(50);
		}
	}
	this.frame_11 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5() {
			this.gotoAndPlay(60);
		}
	}
	this.frame_12 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://docs.google.com/forms/d/e/1FAIpQLSeWSNmhfXB1iGm454X3g-PuUduzDPQ4ZESwMx5ZZDiLaly1yA/viewform", "_blank");
		}
	}
	this.frame_27 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_37 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_48 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_57 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_67 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_75 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(1).call(this.frame_12).wait(15).call(this.frame_27).wait(10).call(this.frame_37).wait(11).call(this.frame_48).wait(9).call(this.frame_57).wait(10).call(this.frame_67).wait(8).call(this.frame_75).wait(1));

	// num
	this.text = new cjs.Text("Click on Contact us.. We will Reach you..", "32px 'Russo One'", "#0000FF");
	this.text.lineHeight = 41;
	this.text.lineWidth = 741;
	this.text.parent = this;
	this.text.setTransform(366.25,27.75);
	this.text.shadow = new cjs.Shadow("rgba(0,255,255,1)",3,3,4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(13).to({_off:false},0).wait(63));

	// contact
	this.movieClip_1 = new lib.Symbol7();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(294.5,722);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(12).to({_off:false},0).wait(64));

	// os2
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_1"],1);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.32,0,0,0.32,-153.7,-173.5)).s().p("A4AU7MAAAgp1MAwBAAAMAAAAp1g")
	}.bind(this);
	this.shape.setTransform(475.2,553.2);

	this.instance = new lib.cam2();
	this.instance.setTransform(574,326,0.4077,0.4077);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:475.2,y:553.2}}]},60).to({state:[{t:this.shape,p:{x:445.05,y:559.75}},{t:this.instance}]},1).to({state:[{t:this.shape,p:{x:445.05,y:559.75}},{t:this.instance}]},6).to({state:[]},1).wait(8));

	// os1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(708.9,226.3,1,1,0,0,0,35.5,-75.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(8).to({_off:true},1).wait(8));

	// bp2
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(475.7,392.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(1360.3,398,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_4();
	this.instance_4.setTransform(475.7,392.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},50).to({state:[{t:this.instance_3},{t:this.instance_4}]},7).to({state:[]},1).wait(18));

	// bp1
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(643.9,248.8,1,1,0,0,0,8.5,-82);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).wait(8).to({_off:true},1).wait(18));

	// tt2
	this.instance_6 = new lib.irctc500x500();
	this.instance_6.setTransform(364,411,0.7947,0.7947);

	this.instance_7 = new lib.bus();
	this.instance_7.setTransform(715,288,0.3533,0.3533);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{scaleX:0.7947,x:364,y:411}}]},40).to({state:[{t:this.instance_6,p:{scaleX:1.2046,x:369,y:417}},{t:this.instance_7}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.2046,x:369,y:417}},{t:this.instance_7}]},7).to({state:[]},1).wait(27));

	// tt1
	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(626.4,272.55,1,1,0,0,0,-53,-61.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).wait(9).to({_off:true},1).wait(27));

	// pan2
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.setTransform(741.5,425.5);
	this.instance_9.alpha = 0.0391;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.setTransform(741.5,425.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},30).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_10}]},4).to({state:[]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({_off:true,alpha:1},3).wait(43));

	// pan1
	this.instance_11 = new lib.Symbol3();
	this.instance_11.setTransform(578.9,215,1,1,0,0,0,-177.5,-122.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).wait(8).to({_off:true},1).wait(38));

	// csc2
	this.instance_12 = new lib.csc();
	this.instance_12.setTransform(347,431,0.4787,0.4787);

	this.instance_13 = new lib.digi_pay_banner2();
	this.instance_13.setTransform(733,148,0.4106,0.4106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13},{t:this.instance_12}]},16).to({state:[{t:this.instance_13},{t:this.instance_12}]},11).to({state:[]},1).wait(48));

	// csc1
	this.instance_14 = new lib.Symbol2();
	this.instance_14.setTransform(682.65,265.45,1,1,0,0,0,-41.5,-62.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).wait(12).to({_off:true},1).wait(48));

	// oth_b
	this.instance_15 = new lib.othersb();
	this.instance_15.setTransform(24.35,618.1);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2, false, new lib.othersb(), 3);

	this.button_6 = new lib.othersb();
	this.button_6.name = "button_6";
	this.button_6.setTransform(24.35,618.1);
	new cjs.ButtonHelper(this.button_6, 0, 1, 2, false, new lib.othersb(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},9).to({state:[]},1).to({state:[{t:this.button_6}]},1).wait(65));

	// bills_b
	this.instance_16 = new lib.billsb();
	this.instance_16.setTransform(24.35,518.35);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.billsb(), 3);

	this.button_5 = new lib.billsb();
	this.button_5.name = "button_5";
	this.button_5.setTransform(24.35,518.35);
	new cjs.ButtonHelper(this.button_5, 0, 1, 2, false, new lib.billsb(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},7).to({state:[]},1).to({state:[{t:this.button_5}]},1).wait(67));

	// irct_b
	this.instance_17 = new lib.irctcb();
	this.instance_17.setTransform(24.35,425.85);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.irctcb(), 3);

	this.button_4 = new lib.irctcb();
	this.button_4.name = "button_4";
	this.button_4.setTransform(24.35,425.85);
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.irctcb(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},5).to({state:[]},1).to({state:[{t:this.button_4}]},1).wait(69));

	// pan_b
	this.instance_18 = new lib.pan_1();
	this.instance_18.setTransform(24.35,337.05);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 2, false, new lib.pan_1(), 3);

	this.button_3 = new lib.pan_1();
	this.button_3.name = "button_3";
	this.button_3.setTransform(24.35,337.05);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.pan_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},3).to({state:[]},1).to({state:[{t:this.button_3}]},1).wait(71));

	// csc_b
	this.instance_19 = new lib.Symbol1();
	this.instance_19.setTransform(-39.65,248.3);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.button_2 = new lib.Symbol1();
	this.button_2.name = "button_2";
	this.button_2.setTransform(-39.65,248.3);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.button_2}]},1).wait(73));

	// pow
	this.text_1 = new cjs.Text("Powered By SriZone", "bold 32px 'Orbitron'", "#FFFFFF");
	this.text_1.lineHeight = 40;
	this.text_1.lineWidth = 397;
	this.text_1.parent = this;
	this.text_1.setTransform(18.6883,171.0035,1,1,-7.9569);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,0);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(11).to({_off:false},0).wait(65));

	// logo
	this.instance_20 = new lib.smteluguinfo();
	this.instance_20.setTransform(8.25,50.5,0.1352,0.1352,-7.4668);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).wait(75));

	// bg
	this.instance_21 = new lib.Untitled1();
	this.instance_21.setTransform(0,0,1,1.2813);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(76));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,863.3,384.79999999999995);
// library properties:
lib.properties = {
	id: '3EDD91A7C317874AB8D749AA7C3A8F23',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/smteluguinfo.png", id:"smteluguinfo"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3EDD91A7C317874AB8D749AA7C3A8F23'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;