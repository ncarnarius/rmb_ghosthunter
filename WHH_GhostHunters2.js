(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"WHH_GhostHunters2_atlas_", frames: [[0,220,952,384],[0,0,1904,218],[1882,475,144,57],[1102,559,87,40],[1280,559,108,25],[1191,559,87,40],[954,559,146,40],[0,606,1880,25],[1825,400,213,73],[954,220,472,337],[1428,400,395,92],[1428,220,411,178]]}
];


// symbols:



(lib.background = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_34 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_37 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_39 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_44 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_45 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_46 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_53 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Janice_Gunter = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Logo_1 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Logo_2 = function() {
	this.initialize(ss["WHH_GhostHunters2_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Logo_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5652,0.5652);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.3,52);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_34();
	this.instance.parent = this;
	this.instance.setTransform(17.25,4.1,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.5,36.5);


(lib.Scene_1_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.bottom();
	this.instance.parent = this;
	this.instance.setTransform(0,383,0.5001,0.5001);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_close_ad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// close_ad
	this.instance = new lib.CachedTexturedBitmap_37();
	this.instance.parent = this;
	this.instance.setTransform(889.35,0.65,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(892.25,5.7,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.45,0.65,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(889.35,0.65,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_46();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.25,5.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},11).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},101).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(156));

}).prototype = p = new cjs.MovieClip();


(lib.logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Logo_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4892,0.4892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.1,87.1);


(lib.Janice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Janice_Gunter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5141,0.5141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.7,173.3);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.my_youtube({'id': '', 'src':'https://www.youtube.com/embed/T4Bgjm-VSZM', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.instance.setTransform(254.3,142,5.056,2.84,0,0,0,50.3,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Scene_1_Logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo2
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(697.5,78.2,1,1,0,0,0,100.5,43.6);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({alpha:1},18).wait(37).to({alpha:0},7).wait(23).to({scaleX:1.0348,scaleY:1.0348,x:764.05,y:110.1},0).to({alpha:1},14).wait(27));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(222.6,78.2,1,1,0,0,0,111.6,26);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({alpha:1},9).wait(58).to({alpha:0},7).wait(23).to({regX:111.7,regY:26.1,scaleX:0.8858,scaleY:0.8858,x:749.65,y:50.05},0).to({alpha:1},14).wait(27));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.an_Video({'id': '', 'src':'videos/introstatic.mp4', 'autoplay':true, 'controls':false, 'muted':true, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance.setTransform(476,76.4,2.385,0.5067,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},11).wait(156));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Janice_Gunter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Janice_Gunter
	this.instance = new lib.Janice("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(476,73.6,1,1,0,0,0,121.3,86.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},18).wait(65).to({startPosition:0},0).to({alpha:0},9).wait(9).to({regX:121.5,regY:86.8,scaleX:1.3608,scaleY:1.3608,x:812.5,y:266.85},0).to({alpha:1},14).wait(41));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(874.4,112.75,1,1,0,0,0,53.2,18.2);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.expand_button = new lib.Symbol1();
	this.expand_button.name = "expand_button";
	this.expand_button.parent = this;
	this.expand_button.setTransform(874.4,112.75,1,1,0,0,0,53.2,18.2);
	this.expand_button._off = true;
	new cjs.ButtonHelper(this.expand_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({_off:true,alpha:1},9).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.expand_button).wait(59).to({_off:false},9).wait(26).to({alpha:0},9).wait(64));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(252.8,142,1,1,0,0,0,252.8,142);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-2.5,-1.4,510.7,286.79999999999995), null);


(lib.Scene_1_youtube_video = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// youtube_video
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(313.2,195.55,1,1,0,0,0,252.8,142);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({alpha:1},18).wait(9));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.WHH_GhostHunters2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_68 = function() {
		this.expand_button = this.button.expand_button;
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.expand_button.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(95);
		});
	}
	this.frame_93 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_94 = function() {
		this.expand_button = undefined;this.expand_button = this.button.expand_button;
	}
	this.frame_103 = function() {
		this.expand_button = undefined;this.expand_button = this.button.expand_button;
	}
	this.frame_161 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_166 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(68).call(this.frame_68).wait(25).call(this.frame_93).wait(1).call(this.frame_94).wait(9).call(this.frame_103).wait(58).call(this.frame_161).wait(5).call(this.frame_166).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhKXAL2IAA3rMCUvAAAIAAXrg");
	var mask_graphics_104 = new cjs.Graphics().p("EhKXAOzIAA9lMCUvAAAIAAdlg");
	var mask_graphics_105 = new cjs.Graphics().p("EhKXARxMAAAgjhMCUvAAAMAAAAjhg");
	var mask_graphics_106 = new cjs.Graphics().p("EhKXAUuMAAAgpbMCUvAAAMAAAApbg");
	var mask_graphics_107 = new cjs.Graphics().p("EhKXAXsMAAAgvXMCUvAAAMAAAAvXg");
	var mask_graphics_108 = new cjs.Graphics().p("EhKXAaqMAAAg1TMCUvAAAMAAAA1Tg");
	var mask_graphics_109 = new cjs.Graphics().p("EhKXAdnMAAAg7NMCUvAAAMAAAA7Ng");
	var mask_graphics_110 = new cjs.Graphics().p("EhKXAgkMAAAhBIMCUvAAAMAAABBIg");
	var mask_graphics_111 = new cjs.Graphics().p("EhKXAjiMAAAhHDMCUvAAAMAAABHDg");
	var mask_graphics_112 = new cjs.Graphics().p("EhKXAmfMAAAhM+MCUvAAAMAAABM+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:476,y:75.775}).wait(104).to({graphics:mask_graphics_104,x:476,y:94.725}).wait(1).to({graphics:mask_graphics_105,x:476,y:113.675}).wait(1).to({graphics:mask_graphics_106,x:476,y:132.625}).wait(1).to({graphics:mask_graphics_107,x:476,y:151.575}).wait(1).to({graphics:mask_graphics_108,x:476,y:170.55}).wait(1).to({graphics:mask_graphics_109,x:476,y:189.5}).wait(1).to({graphics:mask_graphics_110,x:476,y:208.45}).wait(1).to({graphics:mask_graphics_111,x:476,y:227.4}).wait(1).to({graphics:mask_graphics_112,x:476,y:246.35}).wait(55));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(476,76.4,1,1,0,0,0,476,76.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(167));

	// button_obj_
	this.button = new lib.Scene_1_button();
	this.button.name = "button";
	this.button.parent = this;
	this.button.depth = 0;
	this.button.isAttachedToCamera = 0
	this.button.isAttachedToMask = 0
	this.button.layerDepth = 0
	this.button.layerIndex = 1
	this.button.maskLayerName = 0

	var maskedShapeInstanceList = [this.button];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.button).wait(167));

	// Janice_Gunter_obj_
	this.Janice_Gunter = new lib.Scene_1_Janice_Gunter();
	this.Janice_Gunter.name = "Janice_Gunter";
	this.Janice_Gunter.parent = this;
	this.Janice_Gunter.depth = 0;
	this.Janice_Gunter.isAttachedToCamera = 0
	this.Janice_Gunter.isAttachedToMask = 0
	this.Janice_Gunter.layerDepth = 0
	this.Janice_Gunter.layerIndex = 2
	this.Janice_Gunter.maskLayerName = 0

	var maskedShapeInstanceList = [this.Janice_Gunter];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Janice_Gunter).wait(167));

	// Logo1_obj_
	this.Logo1 = new lib.Scene_1_Logo1();
	this.Logo1.name = "Logo1";
	this.Logo1.parent = this;
	this.Logo1.depth = 0;
	this.Logo1.isAttachedToCamera = 0
	this.Logo1.isAttachedToMask = 0
	this.Logo1.layerDepth = 0
	this.Logo1.layerIndex = 3
	this.Logo1.maskLayerName = 0

	var maskedShapeInstanceList = [this.Logo1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Logo1).wait(167));

	// Logo2_obj_
	this.Logo2 = new lib.Scene_1_Logo2();
	this.Logo2.name = "Logo2";
	this.Logo2.parent = this;
	this.Logo2.depth = 0;
	this.Logo2.isAttachedToCamera = 0
	this.Logo2.isAttachedToMask = 0
	this.Logo2.layerDepth = 0
	this.Logo2.layerIndex = 4
	this.Logo2.maskLayerName = 0

	var maskedShapeInstanceList = [this.Logo2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Logo2).wait(167));

	// youtube_video_obj_
	this.youtube_video = new lib.Scene_1_youtube_video();
	this.youtube_video.name = "youtube_video";
	this.youtube_video.parent = this;
	this.youtube_video.depth = 0;
	this.youtube_video.isAttachedToCamera = 0
	this.youtube_video.isAttachedToMask = 0
	this.youtube_video.layerDepth = 0
	this.youtube_video.layerIndex = 5
	this.youtube_video.maskLayerName = 0

	var maskedShapeInstanceList = [this.youtube_video];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.youtube_video).wait(167));

	// close_ad_obj_
	this.close_ad = new lib.Scene_1_close_ad();
	this.close_ad.name = "close_ad";
	this.close_ad.parent = this;
	this.close_ad.depth = 0;
	this.close_ad.isAttachedToCamera = 0
	this.close_ad.isAttachedToMask = 0
	this.close_ad.layerDepth = 0
	this.close_ad.layerIndex = 6
	this.close_ad.maskLayerName = 0

	var maskedShapeInstanceList = [this.close_ad];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.close_ad).wait(167));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 7
	this.background.maskLayerName = 0

	var maskedShapeInstanceList = [this.background];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.background).wait(167));

	// Layer_8_obj_
	this.Layer_8 = new lib.Scene_1_Layer_8();
	this.Layer_8.name = "Layer_8";
	this.Layer_8.parent = this;
	this.Layer_8.depth = 0;
	this.Layer_8.isAttachedToCamera = 0
	this.Layer_8.isAttachedToMask = 0
	this.Layer_8.layerDepth = 0
	this.Layer_8.layerIndex = 8
	this.Layer_8.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(167));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476,246,476,246);
// library properties:
lib.properties = {
	id: '83EF37D9BEC647D099B03CADDEE87A46',
	width: 952,
	height: 492,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WHH_GhostHunters2_atlas_.png?1559345524715", id:"WHH_GhostHunters2_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1559345524749", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1559345524749", id:"sdk/anwidget.js"},
		{src:"components/mycomponents/src/myyoutube.js?1559345524749", id:"my.youtube"},
		{src:"components/video/src/video.js?1559345524749", id:"an.Video"}
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
an.compositions['83EF37D9BEC647D099B03CADDEE87A46'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
