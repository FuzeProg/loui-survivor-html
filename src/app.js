var express = require ('express');
var nunjucks  = require('nunjucks');

var app = express();
app.use(express.static('/public'));

// Apply nunjucks and add custom filter and function (for example).
var env = nunjucks.configure(['src/view/'], { // set folders with templates
    autoescape: true,
    express: app
});

env.addFilter('myFilter', function(obj, arg1, arg2) {
    console.log('myFilter', obj, arg1, arg2);
    // Do smth with obj
    return obj;
});
env.addGlobal('myFunc', function(obj, arg1) {
    console.log('myFunc', obj, arg1);
    // Do smth with obj
    return obj;
});


app.get('/', function(req, res){
    res.render('Dashbord/electrical.html', {title: 'Foo page'});
});

app.get('/electrical', function(req, res){
	res.render('Dashbord/electrical.html', {title: 'Foo page'});
});

app.get('/food', function(req, res){
	res.render('Dashbord/food.html', {title: 'Foo page'});
});

app.get('/world', function(req, res){
	res.render('Dashbord/food.html', {title: 'Foo page'});
});

app.get('/expedition', function(req, res){
    res.render('Modules/expedition.html', {title: 'Production Conso page'});
});

app.get('/people', function(req, res){
	res.render('Modules/people.html', {title: 'Production Conso page'});
});

app.get('/test', function(req, res){
    res.render('index.html', {title: 'test Conso page'});
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000...');
});

app.use('/Ressources', express.static('src/Ressources'));