const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + './public'))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

let todos = [];

app.get('/', (req, res) =>{
    res.render('index',{ todos })
})

app.post('/addtodo', (req, res) =>{
    const  { todo } = req.body
    if(todo.trim() !== ''){
        todos.push(todo)
    }
    res.redirect('/')
})

app.post('/delete/:index', (req, res) =>{
    const { index } = req.params
    todos.splice(index, 1);
    res.redirect('/')
})

app.post('/complete/:index', (req, res) => {
    const { index } = req.params;
    todos[index].completed = true;
    res.redirect('/');
});

app.post('/search', (req, res) => {
    const { search } = req.body;
    const filteredTodos = todos.filter(todo => todo.includes(search));
    res.render('index', { todos: filteredTodos });
});

app.listen(port,(res,req)=>{
    console.log(`hello visit this port to see evreything => http://localhost: ${port}`);
});
