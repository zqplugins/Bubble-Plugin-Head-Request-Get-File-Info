function(instance, properties, context) {
var url = properties.file_url

var xhr = new XMLHttpRequest();
xhr.open("HEAD", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      
      instance.publishState('content_length',xhr.getResponseHeader('content-length'));
      instance.publishState('content_type',xhr.getResponseHeader('content-type'));
      instance.publishState('last_modified',xhr.getResponseHeader('last-modified'));
   }};

xhr.send();



}