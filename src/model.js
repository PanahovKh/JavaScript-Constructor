import image from './assets/image.png'
import {TitleBlock, ImageBlock, TextBlock, ColumnsBlock} from './classes/blocks'
import { css } from './utils'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles : css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-alin': 'center'
        })
    }),

    new ColumnsBlock( [
        'Приложение на чистом JavaScript , без использавания библиатек',
        'Узнаешь как работают принципы SOLID и OOП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками ',
    ],
    {
        styles: 'background: yellow; color: darkgreen;'
    }),

    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis adipisci tempora facilis quam neque ipsa, quasi quo suscipit tempore qui quaerat quidem quos id repellendus distinctio vel consequuntur! Veniam, omnis?',  {
        styles: 'background: green; color: #fff;'
    }),
    
    new ImageBlock( image, {
        styles: 'padding: 1rem 0; display: flex; justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 400px; heigth: 300px'
    } )
]