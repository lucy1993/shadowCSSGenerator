/**
 * A very simple web server for the Front-end code challenge.
 */
const cors = require('cors');
const http = require('http');
const express  = require('express');
const bodyParser = require('body-parser');
const fixtures = require('./fixtures');

var IP = 'localhost';
var PORT = 8000;
var PUBLIC_DIR = 'src';

var app = express();
app.use(cors());
app.options('*', cors());

app.set('view engine', 'html');
app.set('views', `${__dirname}`);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set public directory for assets like css and js files.
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, IP, function() {
    console.log(Date.now() + ' - Server running at http://' + IP + ':' + PORT);
});

app.get('/', function(req, res, next) {
    res.render('index');
});

/**
 * Returns list of events.
 */
app.get('/events', function(req, res, next) {
    var pageSize = 4;
    var currentPage = req.query.page || 1;

    var allEvents = Object.assign([], fixtures.events);
    events = allEvents.splice((currentPage - 1) * pageSize, pageSize);

    events = events.map(function(event) {
        var mappedEvent = Object.assign({}, event);
        delete mappedEvent.sessions;
        delete mappedEvent.description;
        return mappedEvent;
    });

    return res.json({
        events: events,
        total: allEvents.length,
    });
});

/**
 * Returns detailed information for an event.
 */
app.get('/events/:id', function(req, res, next) {
    var eventId = req.params.id;
    var event = fixtures.events.find(function(event) {
        return event.id == eventId;
    });

    if (!event) {
        return res.json({ error: 'notFound' });
    }

    return res.json({
        event: event,
    });
});
