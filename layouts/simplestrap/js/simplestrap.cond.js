<block cond="!$li->xe_css_remove || $li->xe_css_remove=='script'">
<!--@if(defined('RX_VERSION'))-->
jQuery("link[rel=stylesheet][href*='rhymix.less.<block cond="!__DEBUG__">min.</block>css']").remove();
<!--@else-->
jQuery("link[rel=stylesheet][href*='common/css/xe.<block cond="!__DEBUG__">min.</block>css']").remove();
<!--@end-->
</block>
(function(e,t,n){e('<span class="visible-desktop" style="font-size:1px !important;position:absolute;bottom:0" id="cwspear-is-awesome">.</span>').appendTo("body");var r=function(){return e("#cwspear-is-awesome").is(":visible")},i=e();e.fn.dropdownHover=function(n){i=i.add(this.parent());return this.each(function(){var s=e(this).parent(),o={delay:100,instantlyCloseOthers:!0},u={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},a=e.extend(!0,{},o,n,u),f;s.hover(function(){if(r()){a.instantlyCloseOthers===!0&&i.removeClass("open");t.clearTimeout(f);e(this).addClass("open")}},function(){r()&&(f=t.setTimeout(function(){s.removeClass("open")},a.delay))})})};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})})(jQuery,this);
jQuery(function($){
if($('#hidden-xs').is(':visible')) {
	$('.dropdown').on('show.bs.dropdown', function(e){$(this).find('.dropdown-menu').first().stop(true, true).css('opacity', 0).slideDown(300).animate( { opacity: 1 },{ queue: false, duration: 300}); });
	$('.dropdown').on('hide.bs.dropdown', function(e){$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300).animate( { opacity: 0 },{ queue: false, duration: 300});});
}
$("[data-toggle='tooltip']").tooltip();
$('.tooltip-show-auto').tooltip('show');
<block cond="$li->code_prettify=='Y'">window.prettyPrint && prettyPrint();</block>

<block cond="!$is_logged && !Mobile::isMobileCheckByAgent()">
/* $("#dropdown-toggle-login>a").tooltip({title:"{$lang->cmd_login}",placement:"bottom",trigger:"manual"}).tooltip("show").hover(function(){$(this).tooltip("hide");}); */
</block>
<block cond="$li->navbar_fixed!='N' && preg_match('/iPod|iPhone|iPad|Android|BlackBerry|SymbianOS|Bada|Kindle|Wii|SCH-|SPH-|CANU-|Windows Phone|Windows CE|POLARIS|Palm|Dorothy Browser|Mobile|Opera Mobi|Opera Mini|Minimo|AvantGo|NetFront|Nokia|LGPlayer|SonyEricsson|HTC/',getenv('HTTP_USER_AGENT'))">
$(".content textarea,.content input").focus(function(){
	$("#navbar.navbar-fixed-top").css('position','absolute');
}).focusout(function(){
	$("#navbar.navbar-fixed-top").css('position','fixed');
});
</block>
<block cond="$li->site_frame!='content'">
$("#sidebar-toggle-button").click(function(){
	$(this).find(".fa").toggleClass("fa-angle-left fa-angle-right");
	if($.cookie("simplestrap_full_frame") == 'true'){
		$("#content").addClass("col-sm-{12-$li->sb_col}<!--@if($li->site_frame=='sidebar_content')--> col-sm-push-{$li->sb_col}<!--@end-->").removeClass("col-sm-12");
		$("#sidebar").addClass("col col-sm-{$li->sb_col}<!--@if($li->site_frame=='sidebar_content')--> col-sm-pull-{12-$li->sb_col}<!--@end-->")
								.find(".panel").unwrap("<div class='panel-wrap col col-sm-{$li->sb_col}'></div>");	
		$.cookie("simplestrap_full_frame",null);
	} else {
		$("#content").removeClass("col-sm-{12-$li->sb_col}<!--@if($li->site_frame=='sidebar_content')--> col-sm-push-{$li->sb_col}<!--@end-->").addClass("col-sm-12");
		$("#sidebar").removeClass("col col-sm-{$li->sb_col}<!--@if($li->site_frame=='sidebar_content')--> col-sm-pull-{12-$li->sb_col}<!--@end-->")
								.find(".panel").wrap("<div class='panel-wrap col-sm-{$li->sb_col}'></div>")
		$.cookie("simplestrap_full_frame",'true');
	}
});
if($.cookie("simplestrap_full_frame") == 'true'){
	$.cookie("simplestrap_full_frame",null);
	$("#sidebar-toggle-button").click();
}
<block cond="$li->layout_offcanvas!='N'">
$('#content .panel-heading [data-toggle=offcanvas]').click(function() {
	$('#main-row').toggleClass('active');
	$(this).find(".fa").toggleClass("fa-angle-left fa-angle-right");
});
</block>
</block>
<block cond="$li->jumbotron!='N'">
function jumbotron_search_popover(){
$('#jumbotron-search-popover').popover({
	html:true,
	placement:'bottom',
	container: 'body',
	content:function(){
		return jQuery('#jumbotron-search-popover-content').html();
	}
});
}
jumbotron_search_popover();
$("#jumbotron-hide").click(function(){
	if($.cookie("simplestrap_jumbotron") == "hide"){
		$.cookie("simplestrap_jumbotron",null);
	} else {
		$.cookie("simplestrap_jumbotron","hide");
	}
	$("#jumbotron").toggleClass("jumbotron-hide");
});
</block>
});
