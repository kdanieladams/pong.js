/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/ball.ts":
/*!********************!*\
  !*** ./ts/ball.ts ***!
  \********************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\nvar Ball = /** @class */ (function () {\n    function Ball(coord_x, coord_y) {\n        this.height = 20;\n        this.velocity_x = 0;\n        this.velocity_y = 0;\n        this.width = 20;\n        this.coord_x = coord_x - (this.width / 2);\n        this.coord_y = coord_y - (this.height / 2);\n    }\n    Ball.prototype.draw = function (ctx) {\n        var maxY = ctx.canvas.height - this.height, minY = 0, maxX = ctx.canvas.width - this.width, minX = 0;\n        if (!(this.coord_y >= maxY && this.velocity_y > 0)\n            || (this.coord_y <= minY && this.velocity_y < 0)) {\n            this.coord_y += this.velocity_y;\n        }\n        if (!(this.coord_x >= maxX && this.velocity_x > 0)\n            || (this.coord_x <= minX && this.velocity_x < 0)) {\n            this.coord_x += this.velocity_x;\n        }\n        ctx.fillStyle = 'white';\n        ctx.fillRect(this.coord_x, this.coord_y, this.width, this.height);\n    };\n    return Ball;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9iYWxsLnRzPzdhYzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0lBUUksY0FBWSxPQUFlLEVBQUUsT0FBZTtRQUw1QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsbUJBQUksR0FBSixVQUFLLEdBQTZCO1FBQzlCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3RDLElBQUksR0FBRyxDQUFDLEVBQ1IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQ3BDLElBQUksR0FBRyxDQUFDLENBQUM7UUFFYixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztlQUMxQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQ3BEO1lBQ0ksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ25DO1FBRUQsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7ZUFDMUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUNwRDtZQUNJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNuQztRQUVELEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiIuL3RzL2JhbGwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFsbCB7XG4gICAgY29vcmRfeDogbnVtYmVyO1xuICAgIGNvb3JkX3k6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlciA9IDIwO1xuICAgIHZlbG9jaXR5X3g6IG51bWJlciA9IDA7XG4gICAgdmVsb2NpdHlfeTogbnVtYmVyID0gMDtcbiAgICB3aWR0aDogbnVtYmVyID0gMjA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZF94OiBudW1iZXIsIGNvb3JkX3k6IG51bWJlcil7XG4gICAgICAgIHRoaXMuY29vcmRfeCA9IGNvb3JkX3ggLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICB0aGlzLmNvb3JkX3kgPSBjb29yZF95IC0gKHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBsZXQgbWF4WSA9IGN0eC5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICBtaW5ZID0gMCxcbiAgICAgICAgICAgIG1heFggPSBjdHguY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIG1pblggPSAwO1xuXG4gICAgICAgIGlmKCEodGhpcy5jb29yZF95ID49IG1heFkgJiYgdGhpcy52ZWxvY2l0eV95ID4gMClcbiAgICAgICAgICAgIHx8ICh0aGlzLmNvb3JkX3kgPD0gbWluWSAmJiB0aGlzLnZlbG9jaXR5X3kgPCAwKSkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29vcmRfeSArPSB0aGlzLnZlbG9jaXR5X3k7XG4gICAgICAgIH1cblxuICAgICAgICBpZighKHRoaXMuY29vcmRfeCA+PSBtYXhYICYmIHRoaXMudmVsb2NpdHlfeCA+IDApXG4gICAgICAgICAgICB8fCAodGhpcy5jb29yZF94IDw9IG1pblggJiYgdGhpcy52ZWxvY2l0eV94IDwgMCkpIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvb3JkX3ggKz0gdGhpcy52ZWxvY2l0eV94O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMuY29vcmRfeCwgdGhpcy5jb29yZF95LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ts/ball.ts\n");

/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pong */ \"./ts/pong.ts\");\n\n// config\nvar canvasId = 'pong_canvas', fps = 30;\n// start\nwindow.addEventListener('load', function (event) {\n    var canvas = document.getElementById(canvasId);\n    var pong = new _pong__WEBPACK_IMPORTED_MODULE_0__[\"Pong\"](canvas);\n    document.addEventListener('keydown', function (event) {\n        pong.keydownHandler(event);\n    });\n    document.addEventListener('keyup', function (event) {\n        pong.keyupHandler(event);\n    });\n    this.setInterval(function () {\n        pong.draw();\n    }, 1000 / fps);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9tYWluLnRzP2Y3NjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUE4QjtBQUU5QixTQUFTO0FBQ1QsSUFBSSxRQUFRLEdBQUcsYUFBYSxFQUN4QixHQUFHLEdBQUcsRUFBRSxDQUFDO0FBRWIsUUFBUTtBQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBUyxLQUFLO0lBQzFDLElBQUksTUFBTSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztJQUN2RixJQUFJLElBQUksR0FBRyxJQUFJLDBDQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFNUIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFTLEtBQUs7UUFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBUyxLQUFLO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiLi90cy9tYWluLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9uZyB9IGZyb20gJy4vcG9uZyc7XG5cbi8vIGNvbmZpZ1xubGV0IGNhbnZhc0lkID0gJ3BvbmdfY2FudmFzJyxcbiAgICBmcHMgPSAzMDtcblxuLy8gc3RhcnRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGxldCBwb25nID0gbmV3IFBvbmcoY2FudmFzKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHBvbmcua2V5ZG93bkhhbmRsZXIoZXZlbnQpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBwb25nLmtleXVwSGFuZGxlcihldmVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgIHBvbmcuZHJhdygpO1xuICAgIH0sIDEwMDAgLyBmcHMpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ts/main.ts\n");

/***/ }),

/***/ "./ts/player.ts":
/*!**********************!*\
  !*** ./ts/player.ts ***!
  \**********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nvar Player = /** @class */ (function () {\n    function Player(coord_x, coord_y) {\n        this.direction = 0;\n        this.height = 100;\n        this.speed = 10;\n        this.width = 20;\n        this.coord_x = coord_x;\n        this.coord_y = coord_y;\n    }\n    Player.prototype.draw = function (ctx) {\n        var maxY = ctx.canvas.height - this.height, minY = 0;\n        if (!((this.coord_y >= maxY && this.direction == 1)\n            || (this.coord_y <= minY && this.direction == -1))) {\n            this.coord_y += this.direction * this.speed;\n        }\n        ctx.fillStyle = 'white';\n        ctx.fillRect(this.coord_x, this.coord_y, this.width, this.height);\n    };\n    return Player;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9wbGF5ZXIudHM/OWQzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7SUFTSSxnQkFBWSxPQUFlLEVBQUUsT0FBZTtRQU41QyxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxHQUE2QjtRQUM5QixJQUFJLElBQUksR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUM5QyxJQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLElBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7ZUFDM0MsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdEQ7WUFDSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMvQztRQUVELEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiIuL3RzL3BsYXllci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvb3JkX3g6IG51bWJlcjtcbiAgICBjb29yZF95OiBudW1iZXI7XG4gICAgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xuICAgIGhlaWdodDogbnVtYmVyID0gMTAwO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgc3BlZWQ6IG51bWJlciA9IDEwO1xuICAgIHdpZHRoOiBudW1iZXIgPSAyMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkX3g6IG51bWJlciwgY29vcmRfeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY29vcmRfeCA9IGNvb3JkX3g7XG4gICAgICAgIHRoaXMuY29vcmRfeSA9IGNvb3JkX3k7ICAgXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBsZXQgbWF4WTogbnVtYmVyID0gY3R4LmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIG1pblk6IG51bWJlciA9IDA7XG5cbiAgICAgICAgaWYoISgodGhpcy5jb29yZF95ID49IG1heFkgJiYgdGhpcy5kaXJlY3Rpb24gPT0gMSlcbiAgICAgICAgICAgIHx8ICh0aGlzLmNvb3JkX3kgPD0gbWluWSAmJiB0aGlzLmRpcmVjdGlvbiA9PSAtMSkpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvb3JkX3kgKz0gdGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkOyAgXG4gICAgICAgIH0gXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLmNvb3JkX3gsIHRoaXMuY29vcmRfeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ts/player.ts\n");

/***/ }),

/***/ "./ts/pong.ts":
/*!********************!*\
  !*** ./ts/pong.ts ***!
  \********************/
/*! exports provided: Pong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pong\", function() { return Pong; });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ \"./ts/ball.ts\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./ts/player.ts\");\n\n\nvar Pong = /** @class */ (function () {\n    function Pong(canvas) {\n        var ball_x = 0, ball_y = 0, coord_y = (canvas.width / 2) - 50, coord_x_1 = 15, coord_x_2 = canvas.width - 35;\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.player_1 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](coord_x_1, coord_y);\n        this.player_2 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](coord_x_2, coord_y);\n        ball_x = this.canvas.width / 2;\n        ball_y = this.canvas.height / 2;\n        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](ball_x, ball_y);\n    }\n    Pong.prototype.draw = function () {\n        // draw background\n        this.ctx.fillStyle = 'black';\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n        // draw divider line\n        var divider_x = this.canvas.width / 2;\n        this.ctx.beginPath();\n        this.ctx.setLineDash([20, 5]);\n        this.ctx.moveTo(divider_x, 0);\n        this.ctx.lineTo(divider_x, this.canvas.height);\n        this.ctx.strokeStyle = 'white';\n        this.ctx.stroke();\n        // draw players\n        this.player_1.draw(this.ctx);\n        this.player_2.draw(this.ctx);\n        // draw ball\n        this.ball.draw(this.ctx);\n    };\n    Pong.prototype.keydownHandler = function (event) {\n        switch (event.code) {\n            case \"ArrowUp\":\n                this.player_2.direction = -1;\n                break;\n            case \"ArrowDown\":\n                this.player_2.direction = 1;\n                break;\n            case \"KeyW\":\n                this.player_1.direction = -1;\n                break;\n            case \"KeyS\":\n                this.player_1.direction = 1;\n                break;\n            case \"Space\":\n                this.start();\n                break;\n        }\n    };\n    Pong.prototype.keyupHandler = function (event) {\n        switch (event.code) {\n            case \"ArrowUp\":\n            case \"ArrowDown\":\n                this.player_2.direction = 0;\n                break;\n            case \"KeyW\":\n            case \"KeyS\":\n                this.player_1.direction = 0;\n                break;\n        }\n    };\n    Pong.prototype.start = function () {\n        if (this.ball.velocity_x == 0) {\n            this.ball.velocity_x = 5;\n            this.ball.velocity_y = 2;\n        }\n    };\n    return Pong;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9wb25nLnRzPzJmNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDSTtBQUVsQztJQU9JLGNBQVksTUFBeUI7UUFDakMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUNWLE1BQU0sR0FBRyxDQUFDLEVBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQ2pDLFNBQVMsR0FBRyxFQUFFLEVBQ2QsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDhDQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw4Q0FBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDBDQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0ksa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0Qsb0JBQW9CO1FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxCLGVBQWU7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLFlBQVk7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDZCQUFjLEdBQWQsVUFBZSxLQUFvQjtRQUMvQixRQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDZixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELDJCQUFZLEdBQVosVUFBYSxLQUFvQjtRQUM3QixRQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDZixLQUFLLFNBQVMsQ0FBQztZQUNmLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLE1BQU07WUFDVixLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiIuL3RzL3BvbmcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWxsIH0gZnJvbSAnLi9iYWxsJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGNsYXNzIFBvbmcge1xuICAgIGJhbGw6IEJhbGw7XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwbGF5ZXJfMTogUGxheWVyO1xuICAgIHBsYXllcl8yOiBQbGF5ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIGxldCBiYWxsX3ggPSAwLFxuICAgICAgICAgICAgYmFsbF95ID0gMCxcbiAgICAgICAgICAgIGNvb3JkX3kgPSAoY2FudmFzLndpZHRoIC8gMikgLSA1MCxcbiAgICAgICAgICAgIGNvb3JkX3hfMSA9IDE1LFxuICAgICAgICAgICAgY29vcmRfeF8yID0gY2FudmFzLndpZHRoIC0gMzU7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJfMSA9IG5ldyBQbGF5ZXIoY29vcmRfeF8xLCBjb29yZF95KTtcbiAgICAgICAgdGhpcy5wbGF5ZXJfMiA9IG5ldyBQbGF5ZXIoY29vcmRfeF8yLCBjb29yZF95KTtcblxuICAgICAgICBiYWxsX3ggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIGJhbGxfeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGJhbGxfeCwgYmFsbF95KTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBkcmF3IGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gZHJhdyBkaXZpZGVyIGxpbmVcbiAgICAgICAgbGV0IGRpdmlkZXJfeCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnNldExpbmVEYXNoKFsyMCwgNV0pO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oZGl2aWRlcl94LCAwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGRpdmlkZXJfeCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAvLyBkcmF3IHBsYXllcnNcbiAgICAgICAgdGhpcy5wbGF5ZXJfMS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5wbGF5ZXJfMi5kcmF3KHRoaXMuY3R4KTtcblxuICAgICAgICAvLyBkcmF3IGJhbGxcbiAgICAgICAgdGhpcy5iYWxsLmRyYXcodGhpcy5jdHgpO1xuICAgIH1cblxuICAgIGtleWRvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyXzIuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfMi5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIktleVdcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcl8xLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcl8xLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXl1cEhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfMi5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIktleVdcIjpcbiAgICAgICAgICAgIGNhc2UgXCJLZXlTXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfMS5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmKHRoaXMuYmFsbC52ZWxvY2l0eV94ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eV94ID0gNTtcbiAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eV95ID0gMjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ts/pong.ts\n");

/***/ })

/******/ });