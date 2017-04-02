# jQuery Infinite Scroller [![Build Status](https://travis-ci.org/chriswatts91/jquery-infinite-scroller.svg?branch=master)](https://travis-ci.org/chriswatts91/jquery-infinite-scroller)

A jQuery plugin that infinitely scrolls content based on mouse position

### Demo 

[http://cawserve.com/jquery-infinite-scroller](http://cawserve.com/jquery-infinite-scroller)

### Install

This package can be installed with:

```sh
# Bower
bower install --save jquery-infinite-scroller

# NPM
npm install jquery-infinite-scroller
```
Or download the [latest release](https://github.com/chriswatts91/jquery-infinite-scroller/releases).

### Usage

Here is an example of quick usage:

```js
$(".scroller").infiniteScroller();
```

### Parameters

Name | Description | Default 
---- | ----------- | -------
speed | The speed of the scroller | 1
maxSpeed | The maximum speed of the scroller when hovering | 20
scrollOnMouseOver | Adjust scroll speed and position on mouse over | true
resetOnMouseOut | Tween the scroller back to the initial speed on mouse out | false
direction | The direction of the scroller | left