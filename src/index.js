import xhook from 'xhook';
import UrlPattern from 'url-pattern';

var pattern = new UrlPattern('/api/users/:id');

export default (config) => {
    xhook.before(function (request, response) {
        console.log(request);
        // let route = requestMapper(request, config);
        // let method = route[request.method];
        // let success = method.success;
        // let failures = method.failures;
        // console.log(success);
        // console.log(failures);
        response();
    });

    xhook.after(function (request, response) {
        if (request.url.match(/.*/))
            console.log('after the request');
        console.log(response);
    });
}

const requestMapper = (request, config) => {
};  