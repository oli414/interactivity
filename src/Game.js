
import BouwBlok from './BouwBlok';

export default class Game {
    constructor(context) {
        this.bouwblokken = [];

        for (var i = 0; i < 6; i++) {
            this.bouwblokken.push(new BouwBlok());
            this.bouwblokken[i].position.x = Math.round(Math.random() * 100);
            this.bouwblokken[i].position.y = Math.round(Math.random() * 100);
        }

        this.title = "My Game";

        this.context = context;
    }
    select(i) {
        this.context.setSelectedBlok(this.bouwblokken[i]);
        //this.bouwblokken[i];
    }
}