/**
 * Created by BFD_707 on 2016/2/3.
 */
var server = require('./http');
var router = require('./router');

server.start(router.route);

//����������ִ�к󣬵�������н���url����http://localhost:8888/start?foo=bar&hello=world