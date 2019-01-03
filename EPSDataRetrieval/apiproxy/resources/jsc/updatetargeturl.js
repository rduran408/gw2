// var host = context.getVariable("target.url");
// var zoom = context.getVariable("check.Zoom");
 var URI = context.getVariable("check.URI");
 var followlocation = context.getVariable("check.followlocation");
 var newURL = context.getVariable("targetURL");
 newURL = "https://"+newURL+"/cortex";
 var reqzoom = [];
 reqzoom = context.getVariable("request.header.Zoom.values")+'';
var reqzoomstr = reqzoom.substring(1, reqzoom.length-1).split(',');
 
   
  
 if (URI !== null || URI !== "") 
 {
    newURL = newURL.concat("/"); 
    newURL = newURL.concat(URI); 
 } 
 newURL = newURL.concat("?followlocation=").concat(followlocation);
 if (reqzoomstr !== null || reqzoomstr !== "") 
 {
    newURL = newURL.concat("&zoom="); 
    newURL = newURL.concat(reqzoomstr); 
 }
 
 context.setVariable("target.url",newURL);
 
 print(reqzoom);
print(reqzoomstr);


 