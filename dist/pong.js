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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\nvar Ball = /** @class */ (function () {\n    function Ball(coord_x, coord_y) {\n        this.height = 20;\n        this.velocity_x = 0;\n        this.velocity_y = 0;\n        this.width = 20;\n        this.coord_x = coord_x - (this.width / 2);\n        this.coord_y = coord_y - (this.height / 2);\n        this.start_x = this.coord_x;\n        this.start_y = this.coord_y;\n    }\n    Ball.prototype.draw = function (ctx) {\n        var maxY = ctx.canvas.height - this.height, minY = 0, maxX = ctx.canvas.width, minX = 0 - this.width;\n        if (!(this.coord_y >= maxY && this.velocity_y > 0)\n            || (this.coord_y <= minY && this.velocity_y < 0)) {\n            this.coord_y += this.velocity_y;\n        }\n        else {\n            // TODO: handle bounce off top and bottom walls...\n        }\n        if (!((this.coord_x >= maxX && this.velocity_x > 0)\n            || (this.coord_x <= minX && this.velocity_x < 0))) {\n            this.coord_x += this.velocity_x;\n        }\n        else {\n            this.reset();\n        }\n        ctx.fillStyle = 'white';\n        ctx.fillRect(this.coord_x, this.coord_y, this.width, this.height);\n    };\n    Ball.prototype.reset = function () {\n        this.coord_x = this.start_x;\n        this.coord_y = this.start_y;\n        this.velocity_x = 0;\n        this.velocity_y = 0;\n    };\n    return Ball;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9iYWxsLnRzPzdhYzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0lBVUksY0FBWSxPQUFlLEVBQUUsT0FBZTtRQVA1QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBR3BCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQkFBSSxHQUFKLFVBQUssR0FBNkI7UUFDOUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDdEMsSUFBSSxHQUFHLENBQUMsRUFDUixJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQ3ZCLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUxQixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztlQUMxQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQ3BEO1lBQ0ksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ25DO2FBQ0k7WUFDRCxrREFBa0Q7U0FDckQ7UUFFRCxJQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2VBQzNDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNyRDtZQUNJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNuQzthQUNJO1lBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO1FBRUQsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiIuL3RzL2JhbGwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFsbCB7XG4gICAgY29vcmRfeDogbnVtYmVyO1xuICAgIGNvb3JkX3k6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlciA9IDIwO1xuICAgIHN0YXJ0X3g6IG51bWJlcjtcbiAgICBzdGFydF95OiBudW1iZXI7XG4gICAgdmVsb2NpdHlfeDogbnVtYmVyID0gMDtcbiAgICB2ZWxvY2l0eV95OiBudW1iZXIgPSAwO1xuICAgIHdpZHRoOiBudW1iZXIgPSAyMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkX3g6IG51bWJlciwgY29vcmRfeTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5jb29yZF94ID0gY29vcmRfeCAtICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIHRoaXMuY29vcmRfeSA9IGNvb3JkX3kgLSAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5zdGFydF94ID0gdGhpcy5jb29yZF94O1xuICAgICAgICB0aGlzLnN0YXJ0X3kgPSB0aGlzLmNvb3JkX3k7XG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBsZXQgbWF4WSA9IGN0eC5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICBtaW5ZID0gMCxcbiAgICAgICAgICAgIG1heFggPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgbWluWCA9IDAgLSB0aGlzLndpZHRoO1xuXG4gICAgICAgIGlmKCEodGhpcy5jb29yZF95ID49IG1heFkgJiYgdGhpcy52ZWxvY2l0eV95ID4gMClcbiAgICAgICAgICAgIHx8ICh0aGlzLmNvb3JkX3kgPD0gbWluWSAmJiB0aGlzLnZlbG9jaXR5X3kgPCAwKSkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29vcmRfeSArPSB0aGlzLnZlbG9jaXR5X3k7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgYm91bmNlIG9mZiB0b3AgYW5kIGJvdHRvbSB3YWxscy4uLlxuICAgICAgICB9XG5cbiAgICAgICAgaWYoISgodGhpcy5jb29yZF94ID49IG1heFggJiYgdGhpcy52ZWxvY2l0eV94ID4gMClcbiAgICAgICAgICAgIHx8ICh0aGlzLmNvb3JkX3ggPD0gbWluWCAmJiB0aGlzLnZlbG9jaXR5X3ggPCAwKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29vcmRfeCArPSB0aGlzLnZlbG9jaXR5X3g7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5jb29yZF94LCB0aGlzLmNvb3JkX3ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5jb29yZF94ID0gdGhpcy5zdGFydF94O1xuICAgICAgICB0aGlzLmNvb3JkX3kgPSB0aGlzLnN0YXJ0X3k7XG4gICAgICAgIHRoaXMudmVsb2NpdHlfeCA9IDA7XG4gICAgICAgIHRoaXMudmVsb2NpdHlfeSA9IDA7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ts/ball.ts\n");

/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pong */ \"./ts/pong.ts\");\n\n// config\nvar canvasId = 'pong_canvas', fps = 30;\n// start\nwindow.addEventListener('load', function (event) {\n    var canvas = document.getElementById(canvasId);\n    var pong = new _pong__WEBPACK_IMPORTED_MODULE_0__[\"Pong\"](canvas);\n    document.addEventListener('keydown', function (event) { pong.keydownHandler(event); });\n    document.addEventListener('keyup', function (event) { pong.keyupHandler(event); });\n    this.setInterval(function () {\n        pong.draw();\n    }, 1000 / fps);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9tYWluLnRzP2Y3NjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUE4QjtBQUU5QixTQUFTO0FBQ1QsSUFBSSxRQUFRLEdBQUcsYUFBYSxFQUN4QixHQUFHLEdBQUcsRUFBRSxDQUFDO0FBRWIsUUFBUTtBQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBUyxLQUFLO0lBQzFDLElBQUksTUFBTSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztJQUN2RixJQUFJLElBQUksR0FBRyxJQUFJLDBDQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFNUIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssSUFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssSUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0UsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vdHMvbWFpbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbmcgfSBmcm9tICcuL3BvbmcnO1xuXG4vLyBjb25maWdcbmxldCBjYW52YXNJZCA9ICdwb25nX2NhbnZhcycsXG4gICAgZnBzID0gMzA7XG5cbi8vIHN0YXJ0XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBsZXQgcG9uZyA9IG5ldyBQb25nKGNhbnZhcyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7IHBvbmcua2V5ZG93bkhhbmRsZXIoZXZlbnQpOyB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4geyBwb25nLmtleXVwSGFuZGxlcihldmVudCk7IH0pO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICBwb25nLmRyYXcoKTtcbiAgICB9LCAxMDAwIC8gZnBzKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ts/main.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pong\", function() { return Pong; });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ \"./ts/ball.ts\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./ts/player.ts\");\n\n\nvar Pong = /** @class */ (function () {\n    function Pong(canvas) {\n        var ball_x = 0, ball_y = 0, coord_y = (canvas.width / 2) - 50, coord_x_1 = 15, coord_x_2 = canvas.width - 35;\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.player_1 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](coord_x_1, coord_y);\n        this.player_2 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](coord_x_2, coord_y);\n        ball_x = this.canvas.width / 2;\n        ball_y = this.canvas.height / 2;\n        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](ball_x, ball_y);\n    }\n    Pong.prototype.draw = function () {\n        // draw background\n        this.ctx.fillStyle = 'black';\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n        // draw divider line\n        var divider_x = this.canvas.width / 2;\n        this.ctx.beginPath();\n        this.ctx.setLineDash([20, 5]);\n        this.ctx.moveTo(divider_x, 0);\n        this.ctx.lineTo(divider_x, this.canvas.height);\n        this.ctx.strokeStyle = 'white';\n        this.ctx.stroke();\n        // draw players\n        this.player_1.draw(this.ctx);\n        this.player_2.draw(this.ctx);\n        // draw ball\n        this.ball.draw(this.ctx);\n        // TODO: handle scoring\n        // TODO: handle ball collision with paddle/player\n    };\n    Pong.prototype.keydownHandler = function (event) {\n        switch (event.code) {\n            case \"ArrowUp\":\n                this.player_2.direction = -1;\n                break;\n            case \"ArrowDown\":\n                this.player_2.direction = 1;\n                break;\n            case \"KeyW\":\n                this.player_1.direction = -1;\n                break;\n            case \"KeyS\":\n                this.player_1.direction = 1;\n                break;\n            case \"Space\":\n                this.start();\n                break;\n        }\n    };\n    Pong.prototype.keyupHandler = function (event) {\n        switch (event.code) {\n            case \"ArrowUp\":\n            case \"ArrowDown\":\n                this.player_2.direction = 0;\n                break;\n            case \"KeyW\":\n            case \"KeyS\":\n                this.player_1.direction = 0;\n                break;\n        }\n    };\n    Pong.prototype.start = function () {\n        if (this.ball.velocity_x == 0) {\n            this.ball.velocity_x = Math.random() > 0.5 ? 5 : -5;\n            this.ball.velocity_y = Math.random() > 0.5 ? 2 : -2;\n        }\n    };\n    return Pong;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9wb25nLnRzPzJmNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDSTtBQUVsQztJQU9JLGNBQVksTUFBeUI7UUFDakMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUNWLE1BQU0sR0FBRyxDQUFDLEVBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQ2pDLFNBQVMsR0FBRyxFQUFFLEVBQ2QsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDhDQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw4Q0FBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDBDQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0ksa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0Qsb0JBQW9CO1FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxCLGVBQWU7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLFlBQVk7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekIsdUJBQXVCO1FBQ3ZCLGlEQUFpRDtJQUNyRCxDQUFDO0lBRUQsNkJBQWMsR0FBZCxVQUFlLEtBQW9CO1FBQy9CLFFBQU8sS0FBSyxDQUFDLElBQUksRUFBRTtZQUNmLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsMkJBQVksR0FBWixVQUFhLEtBQW9CO1FBQzdCLFFBQU8sS0FBSyxDQUFDLElBQUksRUFBRTtZQUNmLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssTUFBTSxDQUFDO1lBQ1osS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMiLCJmaWxlIjoiLi90cy9wb25nLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFsbCB9IGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBjbGFzcyBQb25nIHtcbiAgICBiYWxsOiBCYWxsO1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcGxheWVyXzE6IFBsYXllcjtcbiAgICBwbGF5ZXJfMjogUGxheWVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICBsZXQgYmFsbF94ID0gMCxcbiAgICAgICAgICAgIGJhbGxfeSA9IDAsXG4gICAgICAgICAgICBjb29yZF95ID0gKGNhbnZhcy53aWR0aCAvIDIpIC0gNTAsXG4gICAgICAgICAgICBjb29yZF94XzEgPSAxNSxcbiAgICAgICAgICAgIGNvb3JkX3hfMiA9IGNhbnZhcy53aWR0aCAtIDM1O1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMucGxheWVyXzEgPSBuZXcgUGxheWVyKGNvb3JkX3hfMSwgY29vcmRfeSk7XG4gICAgICAgIHRoaXMucGxheWVyXzIgPSBuZXcgUGxheWVyKGNvb3JkX3hfMiwgY29vcmRfeSk7XG5cbiAgICAgICAgYmFsbF94ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgICAgICBiYWxsX3kgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbChiYWxsX3gsIGJhbGxfeSk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGRyYXcgZGl2aWRlciBsaW5lXG4gICAgICAgIGxldCBkaXZpZGVyX3ggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zZXRMaW5lRGFzaChbMjAsIDVdKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGRpdmlkZXJfeCwgMCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkaXZpZGVyX3gsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgLy8gZHJhdyBwbGF5ZXJzXG4gICAgICAgIHRoaXMucGxheWVyXzEuZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMucGxheWVyXzIuZHJhdyh0aGlzLmN0eCk7XG5cbiAgICAgICAgLy8gZHJhdyBiYWxsXG4gICAgICAgIHRoaXMuYmFsbC5kcmF3KHRoaXMuY3R4KTtcblxuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgc2NvcmluZ1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgYmFsbCBjb2xsaXNpb24gd2l0aCBwYWRkbGUvcGxheWVyXG4gICAgfVxuXG4gICAga2V5ZG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfMi5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcl8yLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiS2V5V1wiOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyXzEuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiS2V5U1wiOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyXzEuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleXVwSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcl8yLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiS2V5V1wiOlxuICAgICAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcl8xLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYodGhpcy5iYWxsLnZlbG9jaXR5X3ggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5X3ggPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gNSA6IC01O1xuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5X3kgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMiA6IC0yO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ts/pong.ts\n");

/***/ })

/******/ });