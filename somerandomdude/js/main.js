// Generated by CoffeeScript 1.3.1
window.onload=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n;if(!document.querySelector)return;g=document.querySelectorAll("#hero_slideshow .slideshow");if(g.length)for(i=0,l=g.length;i<l;i++){f=g[i];new FSS(f,{width:725,height:210})}c=document.querySelectorAll("a[rel=simplebox]");if(c.length)for(j=0,m=c.length;j<m;j++){b=c[j];new FLB(b,{})}if(document.querySelector("#p72")){e=document.querySelectorAll("#projects_navigation dd");for(k=0,n=e.length;k<n;k++){d=e[k];d.onclick=function(a){var b,c,d,f,g,h,i,j;b=this.getAttribute("rel");this.className+=" active";for(g=0,h=e.length;g<h;g++){c=e[g];c.className.match(new RegExp("(\\s|^)active(\\s|$)"))&&(c.className=c.className.replace(new RegExp("(\\s|^)active(\\s|$)"),""))}f=document.querySelectorAll("#projects_list li");for(j=0,i=f.length;j<i;j++){d=f[j];d.className.match(new RegExp("(\\s|^)deselected(\\s|$)"))&&(d.className=d.className.replace(new RegExp("(\\s|^)deselected(\\s|$)"),""));b!=="all"&&!d.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))&&(d.className.match(new RegExp("(\\s|^)deselected(\\s|$)"))||(d.className+=" deselected"))}}}}h=function(b,c,d,e){var f,g,h;if(!b)return;for(g=0,h=b.length;g<h;g++){f=b[g];f.onclick=function(){a(c,d?this.querySelector(d).firstChild.nodeValue:this.firstChild.nodeValue);setTimeout('document.location = "'+this.href+'"',100);return!1}}return!1};h(document.querySelectorAll("#post_tweet"),"Tweet Post",null,document.title);h(document.querySelectorAll("#menu-primary li a"),"Top Nav",null,document.title);h(document.querySelectorAll("#bio_pic"),"Bio Pic",null,document.title);h(document.querySelectorAll("#content.single .post-info .previous a"),"Previous Post",".arrow",document.title);h(document.querySelectorAll("#download_follow a.twitter, #download_follow a.rss"),"Projects Follow",null,document.title);h(document.querySelectorAll("#other_projects #projects_list li a"),"Other Projects","small",document.title);h(document.querySelectorAll("#footer_main_promo"),"Footer Promo",".header",document.title);h(document.querySelectorAll("#text-12 .recommended a"),"Recommended",null,document.title);h(document.querySelectorAll("#page_footer #twitter_follow a.button"),"Footer Twitter",null,document.title);a=function(a,b,c,d){try{_gaq.push(["_trackEvent",a,b,c,d])}catch(e){print(e)}}};window.error=function(a,b,c){_gaq.push(["_trackEvent","Exceptions","Application","["+b+" ("+c+")] "+a,null,!0])};