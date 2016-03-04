/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	document.write("It works.");

	module.exports = {
	  Player: __webpack_require__(1),
	  Song: __webpack_require__(2)
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Player;

	Player = (function() {
	  function Player() {}

	  Player.prototype.play = function(song) {
	    this.currentlyPlayingSong = song;
	    return this.isPlaying = true;
	  };

	  Player.prototype.pause = function() {
	    return this.isPlaying = false;
	  };

	  Player.prototype.resume = function() {
	    if (this.isPlaying) {
	      throw new Error("song is already playing");
	    }
	    return this.isPlaying = true;
	  };

	  Player.prototype.makeFavorite = function() {
	    return this.currentlyPlayingSong.persistFavoriteStatus(true);
	  };

	  return Player;

	})();

	module.exports = Player;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Song;

	Song = (function() {
	  function Song() {}

	  Song.prototype.persistFavoriteStatus = function(value) {
	    throw new Error("not yet implemented");
	  };

	  return Song;

	})();

	module.exports = Song;


/***/ }
/******/ ]);