$(document).ready(function(){
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from feed where url="https://co.noticias.yahoo.com/rss/" &format=json&diagnostics=true&callback=';
	
    $.getJSON(url, function(data) {
		
	  $.each(data.query.results.item, function(key, valor) {
	  	var img = valor.description.match('<img src="(.+?\.(jpg|JPG))');
	  	var info = valor.description.match('alt="(.+?)"');
		var imagen = "img/no-imagen.gif";
        var descripcion = valor.description;
        if(img!=null){
            imagen = img[1];
        }
        if(info!=null){
         descripcion = info[1];   
        }          
	  	$("#lista").append("<li><a href='"+valor.link+"'><img src='"+imagen+"' width='130' height='86' /><p><strong>"+valor.title+"</strong><br/>"+descripcion+"</p></a></li>").listview("refresh");
	  });
	});
});