$(document).ready(function() {
	$('#left-dropdown1').mouseenter(() => {
		console.log("hover")
		$("ul.dropdown-menu.mymenu").css({"display" : "block"})
	})
	$('#left-dropdown1').mouseleave(() => {
		console.log("hover")
		$("ul.dropdown-menu.mymenu").css({"display" : "none"})
	})

	$('#left-dropdown2').mouseenter(() => {
		$("ul#sub1").css({"display" : "block"})
	})
	$('#left-dropdown2').mouseleave(() => {
		$("ul#sub1").css({"display" : "none"})
	})

	$('#right-dropdown1').mouseenter(() => {
		$("ul.rightDropdown").css({"display" : "block"})
	})
	$('#right-dropdown1').mouseleave(() => {
		$("ul.rightDropdown").css({"display" : "none"})
	})

	$('#right-dropdown2').mouseenter(() => {
		$(".hidden-xs.dropdown-menu.mymenu").css({"display" : "block"})
	})
	$('#right-dropdown2').mouseleave(() => {
		$(".hidden-xs.dropdown-menu.mymenu").css({"display" : "none"})
	})

	$('#menuDropdown1').mouseenter(() => {
		$("#menuDropdown1 .submenu.clearfix").css({"display" : "block"})
	})
	$('#menuDropdown1').mouseleave(() => {
		$("#menuDropdown1 .submenu.clearfix").css({"display" : "none"})
	})

	$('#menuDropdown2').mouseenter(() => {
		$("#menuDropdown2 .submenu.clearfix").css({"display" : "block"})
	})
	$('#menuDropdown2').mouseleave(() => {
		$("#menuDropdown2 .submenu.clearfix").css({"display" : "none"})
	})

	$('#menuDropdown3').mouseenter(() => {
		$("#menuDropdown3 .submenu.clearfix").css({"display" : "block"})
	})
	$('#menuDropdown3').mouseleave(() => {
		$("#menuDropdown3 .submenu.clearfix").css({"display" : "none"})
	})

	$('#more').mouseenter(() => {
		$("#more .menuHover").css({"display" : "block"})
	})
	$('#more').mouseleave(() => {
		$("#more .menuHover").css({"display" : "none"})
	})

	$('#artiste').mouseenter(() => {
		$("#artiste .menuHover").css({"display" : "block"})
	})
	$('#artiste').mouseleave(() => {
		$("#artiste .menuHover").css({"display" : "none"})
	})
})