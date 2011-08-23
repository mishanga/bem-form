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
                                block: 'b-fieldset',
                                label: 'Личные данные',
                                content: [
                                    {
                                        block: 'b-widget',
                                        content: [
                                            {
                                                elem: 'title',
                                                content: {
                                                    elem: 'label',
                                                    content: 'Фамилия'
                                                }
                                            },
                                            {
                                                elem: 'field',
                                                content: {
                                                    block: 'b-input',
                                                    name: 'lastname',
                                                    jz: {
                                                        container: '.b-widget',
                                                        required: {}
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'hint',
                                                content: 'обязательное поле'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'b-widget',
                                        content: [
                                            {
                                                elem: 'title',
                                                content: {
                                                    elem: 'label',
                                                    content: 'Имя'
                                                }
                                            },
                                            {
                                                elem: 'field',
                                                content: {
                                                    block: 'b-input',
                                                    name: 'firstname',
                                                    jz: {
                                                        container: '.b-widget',
                                                        required: {}
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'hint',
                                                content: 'обязательное поле'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'b-widget',
                                        content: [
                                            {
                                                elem: 'title',
                                                content: {
                                                    elem: 'label',
                                                    content: 'Отчество'
                                                }
                                            },
                                            {
                                                elem: 'field',
                                                content: {
                                                    block: 'b-input',
                                                    name: 'middlename',
                                                    jz: {
                                                        container: '.b-widget',
                                                        valid: { pattern: '^[а-яА-ЯёЁ]+$' }
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'hint',
                                                content: 'проверка на русские буквы'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: 'b-fieldset',
                                label: 'Данные для авторизации',
                                content: [
                                    {
                                        block: 'b-widget',
                                        content: [
                                            {
                                                elem: 'title',
                                                content: {
                                                    elem: 'label',
                                                    content: 'Электропочта'
                                                }
                                            },
                                            {
                                                elem: 'field',
                                                content: {
                                                    block: 'b-input',
                                                    name: 'email',
                                                    jz: {
                                                        container: '.b-widget',
                                                        valid: { type: 'email' }
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'hint',
                                                content: 'валидный email'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'b-widget',
                                        content: [
                                            {
                                                elem: 'title',
                                                content: {
                                                    elem: 'label',
                                                    content: 'Пароль'
                                                }
                                            },
                                            {
                                                elem: 'field',
                                                content: {
                                                    block: 'b-input',
                                                    type: 'password',
                                                    name: 'password',
                                                    jz: {
                                                        container: '.b-widget',
                                                        required: { min: 6 },
                                                        valid: { pattern: '[0-9]+' }
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'hint',
                                                content: 'минимум 6 символов, из них хотя бы 1 цифра'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: 'b-widget',
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
