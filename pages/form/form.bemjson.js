({
    block: 'b-page',
    title: 'BEM form + JZ validation',
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
        content: {
            block: 'b-layout-table',
            content: {
                elem: 'row',
                content: [
                    { elem: 'gap' },
                    {
                        elem: 'cell',
                        content: [
                            {
                                block: 'b-page-title',
                                content: 'BEM form + JZ validation'
                            },
                            {
                                block: 'b-form-widget',
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            tag: 'label',
                                            content: 'Фамилия'
                                        }
                                    },
                                    {
                                        elem: 'field',
                                        content: {
                                            block: 'b-input',
                                            name: 'lastname',
                                            jz: {
                                                container: '.b-form-widget',
                                                required: {}
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'b-form-widget',
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            tag: 'label',
                                            content: 'Имя'
                                        }
                                    },
                                    {
                                        elem: 'field',
                                        content: {
                                            block: 'b-input',
                                            name: 'firstname',
                                            jz: {
                                                container: '.b-form-widget',
                                                required: {}
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'b-form-widget',
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            tag: 'label',
                                            content: 'Отчество'
                                        }
                                    },
                                    {
                                        elem: 'field',
                                        content: {
                                            block: 'b-input',
                                            name: 'middlename',
                                            jz: {
                                                container: '.b-form-widget',
                                                valid: { pattern: '^(.+)$' }
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'b-form-widget',
                                content: [
                                    {
                                        elem: 'label',
                                        content: {
                                            tag: 'label',
                                            content: 'Электропочта'
                                        }
                                    },
                                    {
                                        elem: 'field',
                                        content: {
                                            block: 'b-input',
                                            name: 'email',
                                            jz: {
                                                container: '.b-form-widget',
                                                valid: { type: 'email' }
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'b-form-widget',
                                content: {
                                    elem: 'button',
                                    content: {
                                        block: 'b-button',
                                        value: 'Сохранить',
                                        jz: true
                                    }

                                }
                            }
                        ]
                    },
                    { elem: 'gap' }
                ]
            }
        }
    }
})
