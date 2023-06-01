
export type PagesType = {
    heading: string
    about: string
}

export type DataStateType = {
    pages: PagesType[]
}

export const dataState: DataStateType = {
    pages: [
        {
            heading: 'Цикл while',
            about: 'Цикл while имеет следующий синтаксис: '
        },
        {
            heading: 'Цикл for',
            about: 'Цикл for имеет следующий синтаксис: '
        },
        {
            heading: 'Конструкция \'switch\'',
            about: 'Конструкция switch звменяет собой сразу несколько if: '
        },
    ]
}