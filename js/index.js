import Highway from '@dogstudio/highway';
import SlideLeft from './slideLeft';
import SlideDown from './slideDown';
import SlideRight from './slideRight';

const H = new Highway.Core({
    transitions: {
        kusuri: SlideLeft,
        pillar: SlideRight,
        bercassi: SlideLeft,
        misc: SlideRight,
        about: SlideDown,
    }
})