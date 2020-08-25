import {col, row} from '../utils'

class Block {
    constructor( value, options) {
        this.value = value
        this.options = options
    }

    toHTML(){
        throw new Error('Метод  toHTML дольжен быть реализован!')
    }
}

export class TitleBlock extends Block{
    constructor(value, options){
        super(value, options);
    }

    toHTML() {
        const {tag = 'h2', styles} = this.options

        return row( col(`
            <${tag}>${this.value}</${tag}>
        `), styles)
    }
}

export class ImageBlock extends Block {
    constructor(value, options){
        super( value, options);
    }

    toHTML() {
        const {styles, alt, imageStyles} = this.options

        const html = `<img src='${this.value}', alt='${alt}' style='${imageStyles}' />`;
        return row(html , styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options){
        super (value, options);
    }

    toHTML() {
        const styles = this.options.styles

        return row( col(`
            <p style="margin-bottom: 0;">${this.value}</p>
        `), styles)
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options){
        super(value, options);
    }

    toHTML() {
        const styles = this.options.styles

        const html = this.value.map(item => col(item));
        return row(html.join(''), styles)
    }
}

