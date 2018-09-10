var fs = require('fs')
  , fm = require('front-matter')
  , ejs = require('ejs')
 

function compileMail(data) {
	ejs.renderFile('./newsletter-template.ejs', {'modules': data}, {}, function(err, str){
  		if (err) throw err

	    fs.writeFile('./test.mjml', str, function(){
	    	console.log('done');
	    })
	});

}


fs.readFile('./_newsletter/newsletter-vom-07-09-2018.md', 'utf8', function(err, data){
  if (err) throw err
 
  var content = fm(data)
 
  // console.log(content.attributes)
  compileMail(content.attributes.modules);
})








// 1. Parse den neuen Newsletter
// 2. Erstelle ein mjml mit Head und Footer
// 3. Füge für jedes der Module das entsprechende Include mit dem Content aus dem Frontmatter ein
// 4. Speicher das fertige mjml
// 5. Convert mjml to HTML
// 6. Übergib das HTML an Mailjet mit Empfängergruppe aus Frontmatter