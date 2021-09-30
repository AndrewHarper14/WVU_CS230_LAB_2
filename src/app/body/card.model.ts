export class Card {
    title: string;
    text: string;
    link: string;
    image: string;

    constructor({title, text, link, image} :
        {title:string, text:string, link:string, image:string}) {

        this.title = title;
        this.text = text;
        this.link = link;
        this.image = image;
    }
}