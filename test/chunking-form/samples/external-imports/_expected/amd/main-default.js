define(['external-all', 'external-default', 'external-default-named', 'external-default-namespace'], (function (foo, bar, baz, quux) { 'use strict';

	function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

	var foo__default = /*#__PURE__*/_interopDefaultCompat(foo);
	var bar__default = /*#__PURE__*/_interopDefaultCompat(bar);
	var baz__default = /*#__PURE__*/_interopDefaultCompat(baz);
	var quux__default = /*#__PURE__*/_interopDefaultCompat(quux);

	console.log(foo__default.default, bar__default.default, baz__default.default, quux__default.default);

}));
