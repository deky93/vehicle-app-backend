require('./startup/startupRoutes')(app, express);

app.listen(3000, () => {
    console.log(new Date());
    console.log('Node.js REST API Started...on PORT 3000');
});