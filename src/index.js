import xhook from 'xhook';

export default () => {
    xhook.after(function(request, response) {
    if(request.url.match(/example\.txt$/))
        response.text = response.text.replace(/[aeiou]/g,'z');
    });
}