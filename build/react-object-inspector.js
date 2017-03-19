(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ObjectInspector"] = factory(require("react"));
	else
		root["ObjectInspector"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(2);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	var _ObjectPreview = __webpack_require__(3);
	
	var _ObjectPreview2 = _interopRequireDefault(_ObjectPreview);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Constants
	var DEFAULT_ROOT_PATH = 'root';
	
	var styles = {
	  base: {
	    fontFamily: 'Menlo, monospace',
	    fontSize: '11px',
	    lineHeight: '14px',
	    cursor: 'default'
	  },
	  propertyNodesContainer: {
	    paddingLeft: '12px'
	  },
	  unselectable: {
	    WebkitTouchCallout: 'none',
	    WebkitUserSelect: 'none',
	    KhtmlUserSelect: 'none',
	    MozUserSelect: 'none',
	    msUserSelect: 'none',
	    OUserSelect: 'none',
	    userSelect: 'none'
	  },
	  expandControl: {
	    color: '#6e6e6e',
	    fontSize: '10px',
	    marginRight: '3px',
	    whiteSpace: 'pre'
	  },
	  property: {
	    paddingTop: '2px'
	  }
	};
	
	var ObjectInspector = function (_Component) {
	  _inherits(ObjectInspector, _Component);
	
	  function ObjectInspector(props) {
	    _classCallCheck(this, ObjectInspector);
	
	    var _this = _possibleConstructorReturn(this, (ObjectInspector.__proto__ || Object.getPrototypeOf(ObjectInspector)).call(this, props));
	
	    if (props.depth === 0) {
	      _this.state = { expandedPaths: {} };
	      _this.state.expandedPaths[props.path] = false;
	
	      // initialize expandedPaths with initialExpandedPaths
	      if (typeof props.initialExpandedPaths !== 'undefined') {
	        props.initialExpandedPaths.map(function (expandedPath) {
	          if (typeof expandedPath === 'string') {
	            var _wildcardPathToPaths = function _wildcardPathToPaths(curObject, curPath, i) {
	              var WILDCARD = "*";
	              if (i === names.length) {
	                paths.push(curPath);
	                return;
	              }
	              var name = names[i];
	              if (i === 0) {
	                if (name === props.name || name === DEFAULT_ROOT_PATH || name === WILDCARD) {
	                  _wildcardPathToPaths(curObject, 'root', i + 1);
	                }
	              } else {
	                if (name === WILDCARD) {
	                  for (var propertyName in curObject) {
	                    if (curObject.hasOwnProperty(propertyName)) {
	                      var propertyValue = curObject[propertyName];
	                      if (ObjectInspector.isExpandable(propertyValue)) {
	                        _wildcardPathToPaths(propertyValue, curPath + '.' + propertyName, i + 1);
	                      } else {
	                        continue;
	                      }
	                    }
	                  }
	                } else {
	                  var _propertyValue = curObject[name];
	                  if (ObjectInspector.isExpandable(_propertyValue)) {
	                    _wildcardPathToPaths(_propertyValue, curPath + '.' + name, i + 1);
	                  }
	                }
	              }
	            };
	
	            var names = expandedPath.split('.'); // wildcard names
	            var paths = [];
	
	            _wildcardPathToPaths(props.data, '', 0);
	
	            paths.map(function (path) {
	              _this.state.expandedPaths[path] = true;
	            });
	          }
	        });
	      }
	    }
	    return _this;
	  }
	
	  _createClass(ObjectInspector, [{
	    key: 'getExpanded',
	    value: function getExpanded(path) {
	      var expandedPaths = this.state.expandedPaths;
	      if (typeof expandedPaths[path] !== 'undefined') {
	        return expandedPaths[path];
	      }
	      return false;
	    }
	  }, {
	    key: 'setExpanded',
	    value: function setExpanded(path, expanded) {
	      var expandedPaths = this.state.expandedPaths;
	      expandedPaths[path] = expanded;
	      this.setState({ expandedPaths: expandedPaths });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      // console.log(this.props.data);
	      if (ObjectInspector.isExpandable(this.props.data)) {
	        if (this.props.depth > 0) {
	          this.props.setExpanded(this.props.path, !this.props.getExpanded(this.props.path));
	        } else {
	          this.setExpanded(this.props.path, !this.getExpanded(this.props.path));
	        }
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (typeof _react2.default.initializeTouchEvents === 'function') {
	        _react2.default.initializeTouchEvents(true);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var className = this.props.className;
	      var data = this.props.data;
	      var name = this.props.name;
	      var renderDescription = this.props.renderDescription;
	      var renderName = this.props.renderName;
	
	      var setExpanded = this.props.depth === 0 ? this.setExpanded.bind(this) : this.props.setExpanded;
	      var getExpanded = this.props.depth === 0 ? this.getExpanded.bind(this) : this.props.getExpanded;
	      var expanded = getExpanded(this.props.path);
	
	      var expandGlyph = ObjectInspector.isExpandable(data) ? expanded ? '▼' : '▶' : this.props.depth === 0 ? '' // unnamed root node
	      : ' ';
	
	      var propertyNodesContainer = void 0;
	      if (expanded) {
	        var propertyNodes = [];
	
	        for (var propertyName in data) {
	          var propertyValue = data[propertyName];
	          if (data.hasOwnProperty(propertyName)) {
	            propertyNodes.push(_react2.default.createElement(ObjectInspector, { getExpanded: getExpanded,
	              setExpanded: setExpanded,
	              path: this.props.path + '.' + propertyName,
	              depth: this.props.depth + 1,
	              key: propertyName,
	              name: propertyName,
	              data: propertyValue,
	              renderDescription: renderDescription,
	              renderName: renderName }));
	          }
	        }
	        propertyNodesContainer = _react2.default.createElement(
	          'div',
	          { style: styles.propertyNodesContainer },
	          propertyNodes
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: className },
	        _react2.default.createElement(
	          'span',
	          { style: styles.property, onClick: this.handleClick.bind(this) },
	          _react2.default.createElement(
	            'span',
	            { style: _extends({}, styles.expandControl, styles.unselectable) },
	            expandGlyph
	          ),
	          function () {
	            if (typeof name !== 'undefined') {
	              return _react2.default.createElement(
	                'span',
	                null,
	                renderName(name),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  ': '
	                ),
	                _react2.default.createElement(_ObjectDescription2.default, { object: data,
	                  renderDescription: renderDescription })
	              );
	            } else {
	              return _react2.default.createElement(_ObjectPreview2.default, { object: data,
	                renderDescription: renderDescription,
	                renderName: renderName,
	                maxProperties: 10 });
	            }
	          }()
	        ),
	        propertyNodesContainer
	      );
	    }
	  }], [{
	    key: 'isExpandable',
	    value: function isExpandable(data) {
	      return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data !== null && Object.keys(data).length > 0;
	    }
	  }]);
	
	  return ObjectInspector;
	}(_react.Component);
	
	ObjectInspector.defaultProps = {
	  name: void 0,
	  data: undefined,
	  initialExpandedPaths: undefined,
	  depth: 0,
	  path: DEFAULT_ROOT_PATH,
	  renderName: function renderName(name) {
	    return _react2.default.createElement(
	      'span',
	      null,
	      name
	    );
	  }
	};
	exports.default = ObjectInspector;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9PYmplY3RJbnNwZWN0b3IuanMiXSwibmFtZXMiOlsiREVGQVVMVF9ST09UX1BBVEgiLCJzdHlsZXMiLCJiYXNlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImN1cnNvciIsInByb3BlcnR5Tm9kZXNDb250YWluZXIiLCJwYWRkaW5nTGVmdCIsInVuc2VsZWN0YWJsZSIsIldlYmtpdFRvdWNoQ2FsbG91dCIsIldlYmtpdFVzZXJTZWxlY3QiLCJLaHRtbFVzZXJTZWxlY3QiLCJNb3pVc2VyU2VsZWN0IiwibXNVc2VyU2VsZWN0IiwiT1VzZXJTZWxlY3QiLCJ1c2VyU2VsZWN0IiwiZXhwYW5kQ29udHJvbCIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJ3aGl0ZVNwYWNlIiwicHJvcGVydHkiLCJwYWRkaW5nVG9wIiwiT2JqZWN0SW5zcGVjdG9yIiwicHJvcHMiLCJkZXB0aCIsInN0YXRlIiwiZXhwYW5kZWRQYXRocyIsInBhdGgiLCJpbml0aWFsRXhwYW5kZWRQYXRocyIsIm1hcCIsImV4cGFuZGVkUGF0aCIsIndpbGRjYXJkUGF0aFRvUGF0aHMiLCJjdXJPYmplY3QiLCJjdXJQYXRoIiwiaSIsIldJTERDQVJEIiwibmFtZXMiLCJsZW5ndGgiLCJwYXRocyIsInB1c2giLCJuYW1lIiwicHJvcGVydHlOYW1lIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlIiwiaXNFeHBhbmRhYmxlIiwic3BsaXQiLCJkYXRhIiwiZXhwYW5kZWQiLCJzZXRTdGF0ZSIsInNldEV4cGFuZGVkIiwiZ2V0RXhwYW5kZWQiLCJpbml0aWFsaXplVG91Y2hFdmVudHMiLCJjbGFzc05hbWUiLCJyZW5kZXJEZXNjcmlwdGlvbiIsInJlbmRlck5hbWUiLCJiaW5kIiwiZXhwYW5kR2x5cGgiLCJwcm9wZXJ0eU5vZGVzIiwiaGFuZGxlQ2xpY2siLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7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QW1CTyxpQkFEbEM7QUFFZSw0QkFBWUMsVUFGM0I7QUFHZSwrQkFBZSxFQUg5QixHQUFSO0FBSUQ7QUFDRixXQWZBO0FBRkgsU0FERjtBQW9CR2hEO0FBcEJILE9BREY7QUF3QkQ7OztpQ0FqR21Cd0MsSSxFQUFLO0FBQ3ZCLGFBQVEsUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFoQixJQUE0QkEsU0FBUyxJQUFyQyxJQUE2Q2EsT0FBT0MsSUFBUCxDQUFZZCxJQUFaLEVBQWtCVCxNQUFsQixHQUEyQixDQUFoRjtBQUNEOzs7Ozs7QUFqRmtCZixlLENBWVp1QyxZLEdBQWU7QUFDcEJyQixRQUFNLEtBQUssQ0FEUztBQUVwQk0sUUFBTWdCLFNBRmM7QUFHcEJsQyx3QkFBc0JrQyxTQUhGO0FBSXBCdEMsU0FBTyxDQUphO0FBS3BCRyxRQUFNNUIsaUJBTGM7QUFNcEJ1RCxjQUFZO0FBQUEsV0FBUTtBQUFBO0FBQUE7QUFBT2Q7QUFBUCxLQUFSO0FBQUE7QUFOUSxDO2tCQVpIbEIsZSIsImZpbGUiOiJPYmplY3RJbnNwZWN0b3IuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvb2xhdmkvRGV2L3JlYWN0LW9iamVjdC1pbnNwZWN0b3IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgT2JqZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9PYmplY3REZXNjcmlwdGlvbic7XG5pbXBvcnQgT2JqZWN0UHJldmlldyBmcm9tICcuL09iamVjdFByZXZpZXcnO1xuXG4vLyBDb25zdGFudHNcbmNvbnN0IERFRkFVTFRfUk9PVF9QQVRIPSdyb290JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYXNlOiB7XG4gICAgZm9udEZhbWlseTogJ01lbmxvLCBtb25vc3BhY2UnLFxuICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgbGluZUhlaWdodDogJzE0cHgnLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICB9LFxuICBwcm9wZXJ0eU5vZGVzQ29udGFpbmVyOiB7XG4gICAgcGFkZGluZ0xlZnQ6ICcxMnB4JyxcbiAgfSxcbiAgdW5zZWxlY3RhYmxlOiB7XG4gICAgV2Via2l0VG91Y2hDYWxsb3V0OiAnbm9uZScsXG4gICAgV2Via2l0VXNlclNlbGVjdDogJ25vbmUnLFxuICAgIEtodG1sVXNlclNlbGVjdDogJ25vbmUnLFxuICAgIE1velVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBtc1VzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBPVXNlclNlbGVjdDogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgfSxcbiAgZXhwYW5kQ29udHJvbDoge1xuICAgIGNvbG9yOiAnIzZlNmU2ZScsXG4gICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICBtYXJnaW5SaWdodDogJzNweCcsXG4gICAgd2hpdGVTcGFjZTogJ3ByZScsXG4gIH0sXG4gIHByb3BlcnR5OiB7XG4gICAgcGFkZGluZ1RvcDogJzJweCcsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RJbnNwZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHByb3BUeXBlczoge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbml0aWFsRXhwYW5kZWRQYXRoczogUHJvcFR5cGVzLmFycmF5LCAvLyBpbml0aWFsIHBhdGhzIG9mIHRoZSBub2RlcyB0aGF0IGFyZSB2aXNpYmxlXG4gICAgZGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBwYXRoIGlzIGRvdCBzZXBhcmF0ZWQgcHJvcGVydHkgbmFtZXMgdG8gcmVhY2ggdGhlIGN1cnJlbnQgbm9kZVxuICAgIHJlbmRlckRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW5kZXJOYW1lOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiB2b2lkIDAsXG4gICAgZGF0YTogdW5kZWZpbmVkLFxuICAgIGluaXRpYWxFeHBhbmRlZFBhdGhzOiB1bmRlZmluZWQsXG4gICAgZGVwdGg6IDAsXG4gICAgcGF0aDogREVGQVVMVF9ST09UX1BBVEgsXG4gICAgcmVuZGVyTmFtZTogbmFtZSA9PiA8c3Bhbj57bmFtZX08L3NwYW4+XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGlmKHByb3BzLmRlcHRoID09PSAwKXtcbiAgICAgIHRoaXMuc3RhdGUgPSB7ZXhwYW5kZWRQYXRoczoge319O1xuICAgICAgdGhpcy5zdGF0ZS5leHBhbmRlZFBhdGhzW3Byb3BzLnBhdGhdID0gZmFsc2U7XG5cbiAgICAgIC8vIGluaXRpYWxpemUgZXhwYW5kZWRQYXRocyB3aXRoIGluaXRpYWxFeHBhbmRlZFBhdGhzXG4gICAgICBpZih0eXBlb2YgcHJvcHMuaW5pdGlhbEV4cGFuZGVkUGF0aHMgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcHJvcHMuaW5pdGlhbEV4cGFuZGVkUGF0aHMubWFwKChleHBhbmRlZFBhdGgpPT57XG4gICAgICAgICAgaWYodHlwZW9mIGV4cGFuZGVkUGF0aCA9PT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgY29uc3QgbmFtZXMgPSBleHBhbmRlZFBhdGguc3BsaXQoJy4nKTsgLy8gd2lsZGNhcmQgbmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgICAgICBmdW5jdGlvbiB3aWxkY2FyZFBhdGhUb1BhdGhzKGN1ck9iamVjdCwgY3VyUGF0aCwgaSl7XG4gICAgICAgICAgICAgIGNvbnN0IFdJTERDQVJEID0gXCIqXCI7XG4gICAgICAgICAgICAgIGlmKGkgPT09IG5hbWVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChjdXJQYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgICBpZihpID09PSAwKXtcbiAgICAgICAgICAgICAgICBpZihuYW1lID09PSBwcm9wcy5uYW1lIHx8IG5hbWUgPT09IERFRkFVTFRfUk9PVF9QQVRIIHx8IG5hbWUgPT09IFdJTERDQVJEKXtcbiAgICAgICAgICAgICAgICAgIHdpbGRjYXJkUGF0aFRvUGF0aHMoY3VyT2JqZWN0LCAncm9vdCcsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBpZihuYW1lID09PSBXSUxEQ0FSRCl7XG4gICAgICAgICAgICAgICAgICBmb3IoY29uc3QgcHJvcGVydHlOYW1lIGluIGN1ck9iamVjdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGN1ck9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKXtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gY3VyT2JqZWN0W3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgaWYoT2JqZWN0SW5zcGVjdG9yLmlzRXhwYW5kYWJsZShwcm9wZXJ0eVZhbHVlKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWxkY2FyZFBhdGhUb1BhdGhzKHByb3BlcnR5VmFsdWUsIGN1clBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWUsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IGN1ck9iamVjdFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgIGlmKE9iamVjdEluc3BlY3Rvci5pc0V4cGFuZGFibGUocHJvcGVydHlWYWx1ZSkpe1xuICAgICAgICAgICAgICAgICAgICB3aWxkY2FyZFBhdGhUb1BhdGhzKHByb3BlcnR5VmFsdWUsIGN1clBhdGggKyAnLicgKyBuYW1lLCBpICsgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWxkY2FyZFBhdGhUb1BhdGhzKHByb3BzLmRhdGEsICcnLCAwKTtcblxuICAgICAgICAgICAgcGF0aHMubWFwKChwYXRoKT0+e1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUGF0aHNbcGF0aF0gPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpc0V4cGFuZGFibGUoZGF0YSl7XG4gICAgcmV0dXJuICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKTtcbiAgfVxuXG4gIGdldEV4cGFuZGVkKHBhdGgpe1xuICAgIGNvbnN0IGV4cGFuZGVkUGF0aHMgPSB0aGlzLnN0YXRlLmV4cGFuZGVkUGF0aHM7XG4gICAgaWYgKHR5cGVvZiBleHBhbmRlZFBhdGhzW3BhdGhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGV4cGFuZGVkUGF0aHNbcGF0aF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNldEV4cGFuZGVkKHBhdGgsIGV4cGFuZGVkKXtcbiAgICBjb25zdCBleHBhbmRlZFBhdGhzID0gdGhpcy5zdGF0ZS5leHBhbmRlZFBhdGhzO1xuICAgIGV4cGFuZGVkUGF0aHNbcGF0aF0gPSBleHBhbmRlZDtcbiAgICB0aGlzLnNldFN0YXRlKHtleHBhbmRlZFBhdGhzOiBleHBhbmRlZFBhdGhzfSk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGEpO1xuICAgIGlmIChPYmplY3RJbnNwZWN0b3IuaXNFeHBhbmRhYmxlKHRoaXMucHJvcHMuZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRlcHRoID4gMCkge1xuICAgICAgICB0aGlzLnByb3BzLnNldEV4cGFuZGVkKHRoaXMucHJvcHMucGF0aCwgIXRoaXMucHJvcHMuZ2V0RXhwYW5kZWQodGhpcy5wcm9wcy5wYXRoKSk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLnNldEV4cGFuZGVkKHRoaXMucHJvcHMucGF0aCwgIXRoaXMuZ2V0RXhwYW5kZWQodGhpcy5wcm9wcy5wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgaWYgKHR5cGVvZiBSZWFjdC5pbml0aWFsaXplVG91Y2hFdmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIFJlYWN0LmluaXRpYWxpemVUb3VjaEV2ZW50cyh0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgIGNvbnN0IHJlbmRlckRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5yZW5kZXJEZXNjcmlwdGlvbjtcbiAgICBjb25zdCByZW5kZXJOYW1lID0gdGhpcy5wcm9wcy5yZW5kZXJOYW1lO1xuXG4gICAgY29uc3Qgc2V0RXhwYW5kZWQgPSAodGhpcy5wcm9wcy5kZXB0aCA9PT0gMCkgPyAodGhpcy5zZXRFeHBhbmRlZC5iaW5kKHRoaXMpKSA6IHRoaXMucHJvcHMuc2V0RXhwYW5kZWQ7XG4gICAgY29uc3QgZ2V0RXhwYW5kZWQgPSAodGhpcy5wcm9wcy5kZXB0aCA9PT0gMCkgPyAodGhpcy5nZXRFeHBhbmRlZC5iaW5kKHRoaXMpKSA6IHRoaXMucHJvcHMuZ2V0RXhwYW5kZWQ7XG4gICAgY29uc3QgZXhwYW5kZWQgPSBnZXRFeHBhbmRlZCh0aGlzLnByb3BzLnBhdGgpO1xuXG4gICAgY29uc3QgZXhwYW5kR2x5cGggPSBPYmplY3RJbnNwZWN0b3IuaXNFeHBhbmRhYmxlKGRhdGEpID8gKGV4cGFuZGVkID8gJ+KWvCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAn4pa2JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5wcm9wcy5kZXB0aCA9PT0gMCA/ICcnIC8vIHVubmFtZWQgcm9vdCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnICcpO1xuXG4gICAgbGV0IHByb3BlcnR5Tm9kZXNDb250YWluZXI7XG4gICAgaWYoZXhwYW5kZWQpe1xuICAgICAgbGV0IHByb3BlcnR5Tm9kZXMgPSBbXTtcblxuICAgICAgZm9yKGxldCBwcm9wZXJ0eU5hbWUgaW4gZGF0YSl7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBkYXRhW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKGRhdGEuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSl7XG4gICAgICAgICAgcHJvcGVydHlOb2Rlcy5wdXNoKDxPYmplY3RJbnNwZWN0b3IgZ2V0RXhwYW5kZWQ9e2dldEV4cGFuZGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPXtgJHt0aGlzLnByb3BzLnBhdGh9LiR7cHJvcGVydHlOYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGg9e3RoaXMucHJvcHMuZGVwdGggKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvcGVydHlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BlcnR5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wZXJ0eVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckRlc2NyaXB0aW9uPXtyZW5kZXJEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJOYW1lPXtyZW5kZXJOYW1lfSAvPik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb3BlcnR5Tm9kZXNDb250YWluZXIgPSAoPGRpdiBzdHlsZT17c3R5bGVzLnByb3BlcnR5Tm9kZXNDb250YWluZXJ9Pntwcm9wZXJ0eU5vZGVzfTwvZGl2Pik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByb3BlcnR5fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Li4uc3R5bGVzLmV4cGFuZENvbnRyb2wsIC4uLnN0eWxlcy51bnNlbGVjdGFibGV9fT57ZXhwYW5kR2x5cGh9PC9zcGFuPlxuICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICByZXR1cm4gKDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlck5hbWUobmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj46IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxPYmplY3REZXNjcmlwdGlvbiBvYmplY3Q9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRGVzY3JpcHRpb249e3JlbmRlckRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgcmV0dXJuICg8T2JqZWN0UHJldmlldyBvYmplY3Q9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRGVzY3JpcHRpb249e3JlbmRlckRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck5hbWU9e3JlbmRlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UHJvcGVydGllcz17MTB9IC8+KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtwcm9wZXJ0eU5vZGVzQ29udGFpbmVyfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A short description of the object
	 */
	var ObjectDescription = function (_Component) {
	  _inherits(ObjectDescription, _Component);
	
	  function ObjectDescription() {
	    _classCallCheck(this, ObjectDescription);
	
	    return _possibleConstructorReturn(this, (ObjectDescription.__proto__ || Object.getPrototypeOf(ObjectDescription)).apply(this, arguments));
	  }
	
	  _createClass(ObjectDescription, [{
	    key: 'render',
	    value: function render() {
	      var object = this.props.object;
	      var renderDescription = this.props.renderDescription;
	      switch (typeof object === 'undefined' ? 'undefined' : _typeof(object)) {
	        case 'number':
	          return renderDescription(object, 'number', object);
	        case 'string':
	          return renderDescription(object, 'string', '"' + object + '"');
	        case 'boolean':
	          return renderDescription(object, 'boolean', String(object));
	        case 'undefined':
	          return renderDescription(object, 'undefined', 'undefined');
	        case 'object':
	          if (object === null) {
	            return renderDescription(object, 'null', 'null');
	          }
	          if (object instanceof Date) {
	            return renderDescription(object, 'date', object.toString());
	          }
	          if (Array.isArray(object)) {
	            return renderDescription(object, 'array', 'Array[' + object.length + ']');
	          }
	          return renderDescription(object, 'object', 'Object');
	        case 'function':
	          return renderDescription(object, 'function', 'function ' + object.name + '()');
	        case 'symbol':
	          return renderDescription(object, 'symbol', 'Symbol()');
	        default:
	          return renderDescription(object, 'unknown', '');
	      }
	    }
	  }]);
	
	  return ObjectDescription;
	}(_react.Component);
	
	ObjectDescription.defaultProps = {
	  renderDescription: function renderDescription(data, dataType, defaultContent) {
	    return _react2.default.createElement(
	      'span',
	      { className: 'object-inspector-' + dataType },
	      defaultContent
	    );
	  }
	};
	exports.default = ObjectDescription;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9PYmplY3REZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJPYmplY3REZXNjcmlwdGlvbiIsIm9iamVjdCIsInByb3BzIiwicmVuZGVyRGVzY3JpcHRpb24iLCJTdHJpbmciLCJEYXRlIiwidG9TdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJuYW1lIiwiZGVmYXVsdFByb3BzIiwiZGF0YSIsImRhdGFUeXBlIiwiZGVmYXVsdENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkEsaUI7Ozs7Ozs7Ozs7OzZCQVdWO0FBQ1AsVUFBTUMsU0FBUyxLQUFLQyxLQUFMLENBQVdELE1BQTFCO0FBQ0EsVUFBTUUsb0JBQW9CLEtBQUtELEtBQUwsQ0FBV0MsaUJBQXJDO0FBQ0EscUJBQWVGLE1BQWYseUNBQWVBLE1BQWY7QUFDRSxhQUFLLFFBQUw7QUFDRSxpQkFBT0Usa0JBQWtCRixNQUFsQixFQUEwQixRQUExQixFQUFvQ0EsTUFBcEMsQ0FBUDtBQUNGLGFBQUssUUFBTDtBQUNFLGlCQUFPRSxrQkFBa0JGLE1BQWxCLEVBQTBCLFFBQTFCLFFBQXdDQSxNQUF4QyxPQUFQO0FBQ0YsYUFBSyxTQUFMO0FBQ0UsaUJBQU9FLGtCQUFrQkYsTUFBbEIsRUFBMEIsU0FBMUIsRUFBcUNHLE9BQU9ILE1BQVAsQ0FBckMsQ0FBUDtBQUNGLGFBQUssV0FBTDtBQUNFLGlCQUFPRSxrQkFBa0JGLE1BQWxCLEVBQTBCLFdBQTFCLEVBQXVDLFdBQXZDLENBQVA7QUFDRixhQUFLLFFBQUw7QUFDRSxjQUFHQSxXQUFXLElBQWQsRUFBbUI7QUFDakIsbUJBQU9FLGtCQUFrQkYsTUFBbEIsRUFBMEIsTUFBMUIsRUFBa0MsTUFBbEMsQ0FBUDtBQUNEO0FBQ0QsY0FBR0Esa0JBQWtCSSxJQUFyQixFQUEwQjtBQUN4QixtQkFBT0Ysa0JBQWtCRixNQUFsQixFQUEwQixNQUExQixFQUFrQ0EsT0FBT0ssUUFBUCxFQUFsQyxDQUFQO0FBQ0Q7QUFDRCxjQUFHQyxNQUFNQyxPQUFOLENBQWNQLE1BQWQsQ0FBSCxFQUF5QjtBQUN2QixtQkFBT0Usa0JBQWtCRixNQUFsQixFQUEwQixPQUExQixhQUE0Q0EsT0FBT1EsTUFBbkQsT0FBUDtBQUNEO0FBQ0QsaUJBQU9OLGtCQUFrQkYsTUFBbEIsRUFBMEIsUUFBMUIsRUFBb0MsUUFBcEMsQ0FBUDtBQUNGLGFBQUssVUFBTDtBQUNFLGlCQUFPRSxrQkFBa0JGLE1BQWxCLEVBQTBCLFVBQTFCLGdCQUFrREEsT0FBT1MsSUFBekQsUUFBUDtBQUNGLGFBQUssUUFBTDtBQUNFLGlCQUFPUCxrQkFBa0JGLE1BQWxCLEVBQTBCLFFBQTFCLEVBQW9DLFVBQXBDLENBQVA7QUFDRjtBQUNFLGlCQUFPRSxrQkFBa0JGLE1BQWxCLEVBQTBCLFNBQTFCLEVBQXFDLEVBQXJDLENBQVA7QUF6Qko7QUEyQkQ7Ozs7OztBQXpDa0JELGlCLENBS1pXLFksR0FBZTtBQUNwQlIscUJBQW1CLDJCQUFDUyxJQUFELEVBQU9DLFFBQVAsRUFBaUJDLGNBQWpCO0FBQUEsV0FDakI7QUFBQTtBQUFBLFFBQU0saUNBQStCRCxRQUFyQztBQUFrREM7QUFBbEQsS0FEaUI7QUFBQTtBQURDLEM7a0JBTEhkLGlCIiwiZmlsZSI6Ik9iamVjdERlc2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL29sYXZpL0Rldi9yZWFjdC1vYmplY3QtaW5zcGVjdG9yIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBBIHNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0RGVzY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnR7XG4gIHByb3BUeXBlczoge1xuICAgIHJlbmRlckRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICByZW5kZXJEZXNjcmlwdGlvbjogKGRhdGEsIGRhdGFUeXBlLCBkZWZhdWx0Q29udGVudCkgPT4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgb2JqZWN0LWluc3BlY3Rvci0ke2RhdGFUeXBlfWB9PntkZWZhdWx0Q29udGVudH08L3NwYW4+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG9iamVjdCA9IHRoaXMucHJvcHMub2JqZWN0O1xuICAgIGNvbnN0IHJlbmRlckRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5yZW5kZXJEZXNjcmlwdGlvbjtcbiAgICBzd2l0Y2ggKHR5cGVvZiBvYmplY3Qpe1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0dXJuIHJlbmRlckRlc2NyaXB0aW9uKG9iamVjdCwgJ251bWJlcicsIG9iamVjdCk7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXR1cm4gcmVuZGVyRGVzY3JpcHRpb24ob2JqZWN0LCAnc3RyaW5nJywgYFwiJHtvYmplY3R9XCJgKTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gcmVuZGVyRGVzY3JpcHRpb24ob2JqZWN0LCAnYm9vbGVhbicsIFN0cmluZyhvYmplY3QpKTtcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiByZW5kZXJEZXNjcmlwdGlvbihvYmplY3QsICd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZihvYmplY3QgPT09IG51bGwpe1xuICAgICAgICAgIHJldHVybiByZW5kZXJEZXNjcmlwdGlvbihvYmplY3QsICdudWxsJywgJ251bGwnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihvYmplY3QgaW5zdGFuY2VvZiBEYXRlKXtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyRGVzY3JpcHRpb24ob2JqZWN0LCAnZGF0ZScsIG9iamVjdC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZihBcnJheS5pc0FycmF5KG9iamVjdCkpe1xuICAgICAgICAgIHJldHVybiByZW5kZXJEZXNjcmlwdGlvbihvYmplY3QsICdhcnJheScsIGBBcnJheVske29iamVjdC5sZW5ndGh9XWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJEZXNjcmlwdGlvbihvYmplY3QsICdvYmplY3QnLCAnT2JqZWN0Jyk7XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIHJldHVybiByZW5kZXJEZXNjcmlwdGlvbihvYmplY3QsICdmdW5jdGlvbicsIGBmdW5jdGlvbiAke29iamVjdC5uYW1lfSgpYCk7XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICByZXR1cm4gcmVuZGVyRGVzY3JpcHRpb24ob2JqZWN0LCAnc3ltYm9sJywgJ1N5bWJvbCgpJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcmVuZGVyRGVzY3JpcHRpb24ob2JqZWN0LCAndW5rbm93bicsICcnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(2);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function intersperse(arr, sep) {
	  if (arr.length === 0) {
	    return [];
	  }
	
	  return arr.slice(1).reduce(function (xs, x, i) {
	    return xs.concat([sep, x]);
	  }, [arr[0]]);
	}
	
	/**
	 * A preview of the object on root level node
	 */
	
	var ObjectPreview = function (_Component) {
	  _inherits(ObjectPreview, _Component);
	
	  function ObjectPreview() {
	    _classCallCheck(this, ObjectPreview);
	
	    return _possibleConstructorReturn(this, (ObjectPreview.__proto__ || Object.getPrototypeOf(ObjectPreview)).apply(this, arguments));
	  }
	
	  _createClass(ObjectPreview, [{
	    key: 'render',
	    value: function render() {
	      var object = this.props.object;
	      var renderDescription = this.props.renderDescription;
	      var renderName = this.props.renderName;
	      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object' || object === null) {
	        return _react2.default.createElement(_ObjectDescription2.default, { object: object,
	          renderDescription: renderDescription });
	      }
	
	      if (Array.isArray(object)) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          '[',
	          intersperse(object.map(function (element, index) {
	            return _react2.default.createElement(_ObjectDescription2.default, { key: index,
	              object: element,
	              renderDescription: renderDescription });
	          }), ", "),
	          ']'
	        );
	      } else if (object instanceof Date) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          object.toString()
	        );
	      } else {
	        var propertyNodes = [];
	        for (var propertyName in object) {
	          var propertyValue = object[propertyName];
	          if (object.hasOwnProperty(propertyName)) {
	            var ellipsis = void 0;
	            if (propertyNodes.length === this.props.maxProperties - 1 && Object.keys(object).length > this.props.maxProperties) {
	              ellipsis = _react2.default.createElement(
	                'span',
	                { key: 'ellipsis' },
	                '\u2026'
	              );
	            }
	            propertyNodes.push(_react2.default.createElement(
	              'span',
	              { key: propertyName },
	              renderName(propertyName),
	              ':\xA0',
	              _react2.default.createElement(_ObjectDescription2.default, { object: propertyValue,
	                renderDescription: renderDescription }),
	              ellipsis
	            ));
	            if (ellipsis) break;
	          }
	        }
	
	        return _react2.default.createElement(
	          'span',
	          null,
	          'Object {',
	          intersperse(propertyNodes, ", "),
	          '}'
	        );
	      }
	    }
	  }]);
	
	  return ObjectPreview;
	}(_react.Component);
	
	ObjectPreview.defaultProps = {
	  maxProperties: 5
	};
	exports.default = ObjectPreview;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9PYmplY3RQcmV2aWV3LmpzIl0sIm5hbWVzIjpbImludGVyc3BlcnNlIiwiYXJyIiwic2VwIiwibGVuZ3RoIiwic2xpY2UiLCJyZWR1Y2UiLCJ4cyIsIngiLCJpIiwiY29uY2F0IiwiT2JqZWN0UHJldmlldyIsIm9iamVjdCIsInByb3BzIiwicmVuZGVyRGVzY3JpcHRpb24iLCJyZW5kZXJOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiRGF0ZSIsInRvU3RyaW5nIiwicHJvcGVydHlOb2RlcyIsInByb3BlcnR5TmFtZSIsInByb3BlcnR5VmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsImVsbGlwc2lzIiwibWF4UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEJDLEdBQTFCLEVBQThCO0FBQzVCLE1BQUlELElBQUlFLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQixXQUFPLEVBQVA7QUFDRDs7QUFFRCxTQUFPRixJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhQyxNQUFiLENBQW9CLFVBQVNDLEVBQVQsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUI7QUFDMUMsV0FBT0YsR0FBR0csTUFBSCxDQUFVLENBQUNQLEdBQUQsRUFBTUssQ0FBTixDQUFWLENBQVA7QUFDSCxHQUZNLEVBRUosQ0FBQ04sSUFBSSxDQUFKLENBQUQsQ0FGSSxDQUFQO0FBR0Q7O0FBRUQ7Ozs7SUFHcUJTLGE7Ozs7Ozs7Ozs7OzZCQVdWO0FBQ1AsVUFBTUMsU0FBUyxLQUFLQyxLQUFMLENBQVdELE1BQTFCO0FBQ0EsVUFBTUUsb0JBQW9CLEtBQUtELEtBQUwsQ0FBV0MsaUJBQXJDO0FBQ0EsVUFBTUMsYUFBYSxLQUFLRixLQUFMLENBQVdFLFVBQTlCO0FBQ0EsVUFBSSxRQUFPSCxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQThCQSxXQUFXLElBQTdDLEVBQW1EO0FBQ2pELGVBQVEsNkRBQW1CLFFBQVFBLE1BQTNCO0FBQ21CLDZCQUFtQkUsaUJBRHRDLEdBQVI7QUFFRDs7QUFFRCxVQUFJRSxNQUFNQyxPQUFOLENBQWNMLE1BQWQsQ0FBSixFQUEyQjtBQUN6QixlQUFPO0FBQUE7QUFBQTtBQUFBO0FBQ0pYLHNCQUFZVyxPQUFPTSxHQUFQLENBQVcsVUFBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBd0I7QUFDOUMsbUJBQVEsNkRBQW1CLEtBQUtBLEtBQXhCO0FBQ21CLHNCQUFRRCxPQUQzQjtBQUVtQixpQ0FBbUJMLGlCQUZ0QyxHQUFSO0FBR0QsV0FKWSxDQUFaLEVBSUcsSUFKSCxDQURJO0FBQUE7QUFBQSxTQUFQO0FBT0QsT0FSRCxNQVNLLElBQUlGLGtCQUFrQlMsSUFBdEIsRUFBNEI7QUFDL0IsZUFBTztBQUFBO0FBQUE7QUFBT1QsaUJBQU9VLFFBQVA7QUFBUCxTQUFQO0FBQ0QsT0FGSSxNQUdBO0FBQ0gsWUFBSUMsZ0JBQWdCLEVBQXBCO0FBQ0EsYUFBSSxJQUFJQyxZQUFSLElBQXdCWixNQUF4QixFQUErQjtBQUM3QixjQUFNYSxnQkFBZ0JiLE9BQU9ZLFlBQVAsQ0FBdEI7QUFDQSxjQUFHWixPQUFPYyxjQUFQLENBQXNCRixZQUF0QixDQUFILEVBQXVDO0FBQ3JDLGdCQUFJRyxpQkFBSjtBQUNBLGdCQUFJSixjQUFjbkIsTUFBZCxLQUEwQixLQUFLUyxLQUFMLENBQVdlLGFBQVgsR0FBMkIsQ0FBckQsSUFDR0MsT0FBT0MsSUFBUCxDQUFZbEIsTUFBWixFQUFvQlIsTUFBcEIsR0FBNkIsS0FBS1MsS0FBTCxDQUFXZSxhQUQvQyxFQUM4RDtBQUM1REQseUJBQVk7QUFBQTtBQUFBLGtCQUFNLEtBQUssVUFBWDtBQUFBO0FBQUEsZUFBWjtBQUNEO0FBQ0RKLDBCQUFjUSxJQUFkLENBQ0U7QUFBQTtBQUFBLGdCQUFNLEtBQUtQLFlBQVg7QUFDR1QseUJBQVdTLFlBQVgsQ0FESDtBQUFBO0FBR0UsMkVBQW1CLFFBQVFDLGFBQTNCO0FBQ21CLG1DQUFtQlgsaUJBRHRDLEdBSEY7QUFLR2E7QUFMSCxhQURGO0FBU0EsZ0JBQUdBLFFBQUgsRUFDRTtBQUNIO0FBQ0Y7O0FBRUQsZUFBUTtBQUFBO0FBQUE7QUFDSyxvQkFETDtBQUVLMUIsc0JBQVlzQixhQUFaLEVBQTJCLElBQTNCLENBRkw7QUFHSztBQUhMLFNBQVI7QUFLRDtBQUNGOzs7Ozs7QUE5RGtCWixhLENBT1pxQixZLEdBQWU7QUFDcEJKLGlCQUFlO0FBREssQztrQkFQSGpCLGEiLCJmaWxlIjoiT2JqZWN0UHJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9vbGF2aS9EZXYvcmVhY3Qtb2JqZWN0LWluc3BlY3RvciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBPYmplY3REZXNjcmlwdGlvbiBmcm9tICcuL09iamVjdERlc2NyaXB0aW9uJztcblxuZnVuY3Rpb24gaW50ZXJzcGVyc2UoYXJyLCBzZXApe1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBhcnIuc2xpY2UoMSkucmVkdWNlKGZ1bmN0aW9uKHhzLCB4LCBpKSB7XG4gICAgICByZXR1cm4geHMuY29uY2F0KFtzZXAsIHhdKTtcbiAgfSwgW2FyclswXV0pO1xufVxuXG4vKipcbiAqIEEgcHJldmlldyBvZiB0aGUgb2JqZWN0IG9uIHJvb3QgbGV2ZWwgbm9kZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgbWF4UHJvcGVydGllczogUHJvcFR5cGVzLm51bWJlciwgLy8gbWF4aW11bSBwcm9wZXJ0aWVzIGRpc3BsYXllZCBpbiBwcmV2aWV3XG4gICAgcmVuZGVyRGVzY3JpcHRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVuZGVyTmFtZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtYXhQcm9wZXJ0aWVzOiA1XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb2JqZWN0ID0gdGhpcy5wcm9wcy5vYmplY3Q7XG4gICAgY29uc3QgcmVuZGVyRGVzY3JpcHRpb24gPSB0aGlzLnByb3BzLnJlbmRlckRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHJlbmRlck5hbWUgPSB0aGlzLnByb3BzLnJlbmRlck5hbWU7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnIHx8IG9iamVjdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICg8T2JqZWN0RGVzY3JpcHRpb24gb2JqZWN0PXtvYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJEZXNjcmlwdGlvbj17cmVuZGVyRGVzY3JpcHRpb259IC8+KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICByZXR1cm4gPHNwYW4+W1xuICAgICAgICB7aW50ZXJzcGVyc2Uob2JqZWN0Lm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCl7XG4gICAgICAgICAgcmV0dXJuICg8T2JqZWN0RGVzY3JpcHRpb24ga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q9e2VsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRGVzY3JpcHRpb249e3JlbmRlckRlc2NyaXB0aW9ufSAvPilcbiAgICAgICAgfSksIFwiLCBcIil9XG4gICAgICBdPC9zcGFuPjtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqZWN0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIDxzcGFuPntvYmplY3QudG9TdHJpbmcoKX08L3NwYW4+O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBwcm9wZXJ0eU5vZGVzID0gW107XG4gICAgICBmb3IobGV0IHByb3BlcnR5TmFtZSBpbiBvYmplY3Qpe1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gb2JqZWN0W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKXtcbiAgICAgICAgICBsZXQgZWxsaXBzaXM7XG4gICAgICAgICAgaWYgKHByb3BlcnR5Tm9kZXMubGVuZ3RoID09PSAodGhpcy5wcm9wcy5tYXhQcm9wZXJ0aWVzIC0gMSlcbiAgICAgICAgICAgICAgJiYgT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPiB0aGlzLnByb3BzLm1heFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGVsbGlwc2lzID0gKDxzcGFuIGtleT17J2VsbGlwc2lzJ30+4oCmPC9zcGFuPik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByb3BlcnR5Tm9kZXMucHVzaChcbiAgICAgICAgICAgIDxzcGFuIGtleT17cHJvcGVydHlOYW1lfT5cbiAgICAgICAgICAgICAge3JlbmRlck5hbWUocHJvcGVydHlOYW1lKX1cbiAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICA8T2JqZWN0RGVzY3JpcHRpb24gb2JqZWN0PXtwcm9wZXJ0eVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRGVzY3JpcHRpb249e3JlbmRlckRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICB7ZWxsaXBzaXN9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZihlbGxpcHNpcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7J09iamVjdCB7J31cbiAgICAgICAgICAgICAgICAgIHtpbnRlcnNwZXJzZShwcm9wZXJ0eU5vZGVzLCBcIiwgXCIpfVxuICAgICAgICAgICAgICAgICAgeyd9J31cbiAgICAgICAgICAgICAgPC9zcGFuPik7XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-object-inspector.map