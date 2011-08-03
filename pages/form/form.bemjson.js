({
    block: 'b-page',
    title: 'BEM Form',
    favicon: '//yandex.ru/favicon.ico',
    head: [
        { elem: 'css', url: 'form.css'},
        { elem: 'css', url: 'form.ie.css', ie: true },
        { elem : 'js', url: '//yandex.st/jquery/1.6.2/jquery.min.js' },
        { elem: 'js', url: 'form.js' }
    ],
    content: {
        block: 'b-form',
        content: [
            {
                tag: 'h1',
                content: 'BEM Form'
            },
            {
                block: 'b-input'
            }
        ]
    }
})
