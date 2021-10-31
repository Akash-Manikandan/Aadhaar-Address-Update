var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(
  function (req, res) {

  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/akash/Final/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('<html>');
        res.write('<style>');
        res.write('.work{font-family: sans-serif;margin: 3rem;background-color: #dfdfdf;color: #333333;font-size: 50px;text-align: center;}');
        res.write('</style>');
        res.write('<h2 class="work">File uploaded!</h2>');
        res.write('<h4><center>Changes will be evaluated as soon as possible<center></h4>');
        res.write('</html>');
        res.end();
      });
      
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head>');
    res.write('<link rel="shortcut icon" href="#">');
    res.write('<link rel="icon" href="Aadhaar.ico">');
    res.write('<title>Upload Textfile</title>');
    res.write('<style>');
    res.write("form{width: 100%;padding: 12px;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;resize: vertical;}input[type=button], input[type=submit], input[type=reset], input[type=file] {background-color: #800040;border: none;color: white;padding: 16px 32px;text-decoration: none;margin: 4px 2px;cursor: pointer;}");
    res.write(".tex{color: #333333;}.card {background-color: white;border-radius: 8px;box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);padding: 12px;width: 100%;}");
    res.write('</style>');
    res.write('</head>');
    res.write('<h2 class="tex"><center>Upload the recently downloaded txt file here</center></h2>');
    res.write('<form class="card"');
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.write('</form>');
    //res.write('<h5 style = "position:absolute; left:70%;">*Uploading only the address side of the proof is enough</h5>')
    return res.end();
  }
/*res.writeHead(301,
  {Location: 'http://127.0.0.1:5500/editText.html'}
);
res.end();*/
}).listen(8000);