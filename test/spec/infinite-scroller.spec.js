( function ($, QUnit) {

  "use strict";

  var $testCanvas = $("#testCanvas");
  var $fixture = null;

  QUnit.module("jQuery Infinite Scroller", {
    beforeEach: function () {

      // fixture is the element where your jQuery plugin will act
      $fixture = $("<div/>");

      $testCanvas.append($fixture);
    },
    afterEach: function () {

      // we remove the element to reset our plugin job :)
      $fixture.remove();
    }
  });

  QUnit.test("is inside jQuery library", function (assert) {
    assert.equal(typeof $.fn.infiniteScroller, "function", "has function inside jquery.fn");
  });

  QUnit.test("returns jQuery functions after called (chaining)", function (assert) {
    assert.equal(
      typeof $fixture.infiniteScroller().on,
      "function",
      "'on' function must exist after plugin call");
  });

  QUnit.test("caches plugin instance", function (assert) {
    $fixture.infiniteScroller();
    assert.ok(
      $fixture.data("plugin_infiniteScroller"),
      "has cached it into a jQuery data"
    );
  });

  QUnit.test( "contains wrapping containers", function( assert ) {
    $fixture.infiniteScroller();
    assert.ok( $fixture.find(".slide-wrap").length );
  });

  QUnit.test( "container height meets the height of the largest image", function( assert ) {
    $fixture.infiniteScroller();
    var maxHeight = 0;
    $fixture.find("ul").children().each(function(){
      if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });
    assert.equal( $fixture.height(), maxHeight );
  });

}(jQuery, QUnit) );
