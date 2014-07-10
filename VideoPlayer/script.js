/**
 * Alexander Karlsson - akl@qlikview.com - Demo & Best Practices
 *
 * QlikTech takes no responsbility for any code.
 * Use at your own risk.
 * Do not submerge in water.
 * Do not taunt Happy Fun Ball.
 */

//Constants
var EXTENSION_NAME = 'VideoPlayer';
var PATH = Qva.Remote + '?public=only&name=Extensions/' + EXTENSION_NAME + '/';

//Load scripts in the array
var scripts = [PATH + 'video.js'];

function init() {
	Qva.AddExtension(EXTENSION_NAME, function () {

		Qva.LoadCSS(PATH + 'video-js.css');
		var objId = this.Layout.ObjectId.replace("\\", "_");
		_V_.options.flash.swf = PATH + "video-js.swf";
		$(this.Element).empty();

		$('<video class="video-js vjs-default-skin vjs-big-play-centered"></video>').attr({
			id: objId,
			controls: true,
			preload: 'auto',
			width: this.GetWidth(),
			height: this.GetHeight()
		})

		.append('<source src="' + this.Layout.Text0.text +'" type="video/mp4" />')
		.append('<source src="' + this.Layout.Text1.text +'" type="video/webm" />')
		.append('<source src="' + this.Layout.Text2.text +'" type="video/ogg" />')
		.appendTo($(this.Element))

		VideoJS.DOMReady(function(){
      		var myPlayer = VideoJS.setup(objId);
      		$(".vjs-big-play-button").show()
      		myPlayer.pause();
    	});

	});
};

function loadScripts() {
    if(scripts.length != 0) {
    	Qv.LoadExtensionScripts(scripts, init);
    } else {
    	init()
    };
};
loadScripts();

