(function(){
var CM_LOGO="https://citymetro.xyz/logo.png",CONTACT="https://citymetro.xyz/contact";
var FAQS=[
["What is PlayLC?","PlayLC (Play Lego City) opens city streets to people. For a weekend, roads close to cars so everyone can walk, run, bike, skate and roll."],
["Is it free?","The PlayLC Walk, Run, Roll is free. Timed races like the 5K and 10K may need registration. Each event page says what applies."],
["Who can take part?","Everyone. Families, kids, strollers, wheelchairs, dogs on leashes, bikes and skates are all welcome at your own pace."],
["Do I need to register for the free event?","No. Show up, join the route anywhere along it, and leave whenever you like."],
["What can I bring or use?","Walk, run, bike, scooter, skate or roll. Wear comfortable shoes, bring water and sunscreen. Motor vehicles other than mobility devices are not allowed on the route."],
["Where do the events happen?","Event locations are listed on each event page. When a route map is available it appears on the home page and the event page."],
["How do I get there?","Open streets are made possible by City Metro. Take City Metro rail or bus to the event area and skip parking."],
["How can I get in touch?","Use the Contact link in the menu. It takes you to City Metro's contact page."]];
var EV=(window.PLAYLC_EVENTS||[]).slice().sort(function(a,b){return a.startDate<b.startDate?-1:1});
function D(s){var p=s.split("-").map(Number);return new Date(p[0],p[1]-1,p[2])}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function today(){var n=new Date();return new Date(n.getFullYear(),n.getMonth(),n.getDate())}
function f(s,o){return D(s).toLocaleDateString("en-US",o)}
function range(e){var a=D(e.startDate),b=D(e.endDate);if(e.startDate===e.endDate)return f(e.startDate,{month:"short",day:"numeric",year:"numeric"});
 if(a.getMonth()===b.getMonth())return f(e.startDate,{month:"short"})+" "+a.getDate()+"\u2013"+b.getDate()+", "+b.getFullYear();
 return f(e.startDate,{month:"short",day:"numeric"})+" \u2013 "+f(e.endDate,{month:"short",day:"numeric",year:"numeric"})}
var up=EV.filter(function(e){return D(e.endDate)>=today()}),past=EV.filter(function(e){return D(e.endDate)<today()}).reverse();
function status(e){var t=today();if(D(e.startDate)<=t&&D(e.endDate)>=t)return'<span class="chip now">Happening now</span>';
 var d=Math.round((D(e.startDate)-t)/864e5);return'<span class="chip">'+(d===1?"Tomorrow":d+" days away")+"</span>"}
function chips(e){return(e.activities||[]).map(function(a){return'<span class="chip'+(a.free?" free":"")+'">'+esc(a.title)+(a.free?" \u00b7 Free":"")+"</span>"}).join("")}
function card(e){var a=D(e.startDate);return'<article class="card ev"><div class="date"><small>'+f(e.startDate,{month:"short"})+"</small><b>"+a.getDate()+"</b></div><h3>"+esc(e.name)+'</h3><p class="meta">'+range(e)+" \u00b7 "+esc(e.location)+"</p><div>"+status(e)+chips(e)+'</div><p style="margin-top:8px">'+esc(e.tagline||"")+'</p><a class="btn" href="event.html?id='+encodeURIComponent(e.id)+'">See details</a></article>'}
function $(i){return document.getElementById(i)}
// header + footer
function chrome(){var pg=document.body.dataset.page,n=[["index.html","Home","home"],["events.html","Events","events"],["faq.html","FAQ","faq"],[CONTACT,"Contact",""]];
 $("site-header").outerHTML='<header class="top"><div class="wrap"><a class="logo" href="index.html" aria-label="PlayLC home"><img src="logo.svg" alt="PlayLC"></a><button id="menu" aria-label="Menu">\u2630</button><nav><ul id="nav">'+n.map(function(x){return'<li><a href="'+x[0]+'"'+(x[2]===pg?' class="on"':"")+">"+x[1]+"</a></li>"}).join("")+"</ul></nav></div></header>";
 $("menu").onclick=function(){$("nav").classList.toggle("open")};
 $("site-footer").outerHTML='<footer><div class="wrap"><div><img src="logo.svg" alt="PlayLC" style="filter:brightness(0) invert(1)"><p>Streets open to people.</p></div><div><p>Open Streets made possible by</p><a href="https://citymetro.xyz"><img src="'+CM_LOGO+'" alt="City Metro" style="background:#fff;padding:4px 8px;border-radius:10px"></a></div><ul><li><a href="events.html">Events</a></li><li><a href="faq.html">FAQ</a></li><li><a href="'+CONTACT+'">Contact</a></li></ul></div><div class="wrap" style="margin-top:14px"><small>\u00a9 '+new Date().getFullYear()+" Play Lego City</small></div></footer>"}
function faqHTML(n){return FAQS.slice(0,n||FAQS.length).map(function(q){return"<details><summary>"+q[0]+"</summary><p>"+q[1]+"</p></details>"}).join("")}
// route map: hides itself if no map is set or the image is missing
function routeMap(e,full){if(!e||!e.routeMap)return;var s=$("route-section")||null;
 var html='<div class="card map"><h3>Route map: '+esc(e.name)+'</h3><a href="'+esc(e.routeMap)+'" target="_blank" rel="noopener"><img src="'+esc(e.routeMap)+'" alt="Route map for '+esc(e.name)+'"></a><p class="meta" style="margin-top:10px">Tap the map to open it full size.</p></div>';
 var box=$("route-body");if(!box)return;box.innerHTML=html;var im=box.querySelector("img");
 im.onload=function(){if(s)s.hidden=false;box.hidden=false};im.onerror=function(){box.innerHTML="";if(s)s.hidden=true};
 if(!s)box.hidden=false}
function ics(e){var a=e.startDate.replace(/-/g,""),b=new Date(D(e.endDate).getTime()+864e5),e2=b.getFullYear()+("0"+(b.getMonth()+1)).slice(-2)+("0"+b.getDate()).slice(-2);
 var t="BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:"+e.id+"@playlc\r\nDTSTAMP:"+new Date().toISOString().replace(/[-:.]/g,"").slice(0,15)+"Z\r\nDTSTART;VALUE=DATE:"+a+"\r\nDTEND;VALUE=DATE:"+e2+"\r\nSUMMARY:"+e.name+"\r\nLOCATION:"+e.location+"\r\nEND:VEVENT\r\nEND:VCALENDAR";
 var l=document.createElement("a");l.href=URL.createObjectURL(new Blob([t],{type:"text/calendar"}));l.download=e.id+".ics";l.click()}
var P={
home:function(){var n=up[0];
 $("hero-event").innerHTML=n?'<div class="road"><p style="margin:0">'+status(n)+'</p><h3>'+esc(n.name)+"</h3><p>"+range(n)+" \u00b7 "+esc(n.location)+'</p><a class="btn alt" href="event.html?id='+encodeURIComponent(n.id)+'">See the plan</a></div>':'<div class="road"><h3>New dates coming soon</h3><p>Check back for the next open streets event.</p></div>';
 var l=up.slice(0,window.PLAYLC_NEXT_COUNT||3);$("next-events").innerHTML=l.length?l.map(card).join(""):'<p class="empty card">No events scheduled right now. Check back soon.</p>';
 var m=up.filter(function(e){return e.routeMap})[0];if(m){var s=$("route-section");routeMap(m)}
 $("faq-list").innerHTML=faqHTML(4)},
events:function(){$("upcoming").innerHTML=up.length?up.map(card).join(""):'<p class="empty card">No upcoming events. Check back soon.</p>';
 if(past.length){$("past-sec").hidden=false;$("past").innerHTML=past.map(card).join("")}},
event:function(){var id=new URLSearchParams(location.search).get("id"),e=EV.filter(function(x){return x.id===id})[0]||(!id&&up[0]),b=$("event-body");
 if(!e){b.innerHTML='<div class="card empty"><h2>Event not found</h2><p>It may have moved. See all events.</p><a class="btn" href="events.html">All events</a></div>';return}
 document.title=e.name+" | PlayLC";
 b.innerHTML="<p>"+status(e)+"</p><h1>"+esc(e.name)+'</h1><p class="lead">'+esc(e.description)+'</p><div class="grid" style="margin:18px 0"><div class="card"><h3>When</h3><p class="meta">'+range(e)+'</p></div><div class="card"><h3>Where</h3><p class="meta">'+esc(e.location)+'</p></div></div><h2>Schedule</h2><div class="grid">'+(e.activities||[]).map(function(a){return'<div class="card"><span class="chip'+(a.free?" free":"")+'">'+(a.free?"Free":"Registration may apply")+'</span><h3>'+f(a.date,{weekday:"long",month:"short",day:"numeric"})+"</h3><p><b>"+esc(a.title)+"</b>"+(a.time?" \u00b7 "+esc(a.time):"")+'</p><p class="meta">'+esc(a.description)+"</p></div>"}).join("")+'</div><div class="row" style="margin:20px 0">'+(e.registerUrl?'<a class="btn alt" href="'+esc(e.registerUrl)+'">Register</a>':"")+'<button class="btn ghost" id="cal">Add to calendar</button><a class="btn ghost" href="events.html">All events</a></div><div id="route-body" hidden></div>';
 $("cal").onclick=function(){ics(e)};routeMap(e)},
faq:function(){$("faq-list").innerHTML=faqHTML()}};
chrome();var p=P[document.body.dataset.page];if(p)p();
window.PLAYLC={esc:esc};
})();
