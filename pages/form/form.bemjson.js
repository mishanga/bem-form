({
    block: 'b-page',
    title: 'BEM Form',
    favicon: '//yandex.ru/favicon.ico',
    head: [
        { elem: 'css', url: 'form.css'},
        { elem: 'css', url: 'form.ie.css', ie: true },
        { elem: 'js', url: '//yandex.st/jquery/1.6.2/jquery.min.js' },
        { elem: 'js', url: 'form.js' }
    ],
    content: {
        block: 'i-jz-form',
        cls: 'jz',
        content: [
            {
                tag: 'h1',
                content: 'BEM Form'
            },
            {
                block: 'b-form-widget',
                content: [
                    {
                        elem: 'label',
                        content: {
                            tag: 'label',
                            content: 'text field'
                        }
                    },
                    {
                        elem: 'field',
                        content: {
                            block: 'b-input',
                            jz: { container: '.b-form-widget' }
                        }
                    }
                ]
            }
        ]
    }
})
