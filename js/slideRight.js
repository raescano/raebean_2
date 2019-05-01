import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class SlideRight extends Highway.Transition{
    in({from, to, done}){
        const tl = new TimelineLite();
        tl.fromTo(
            to, 0.5, 
            {transform: 'translateX(100%)'}, 
            {transform: 'translateX(0%)', onComplete: function(){
            from.remove();
            done();}}
        )
        .fromTo(to.children[0], 0.5, {opacity: 0}, {opacity: 1})
    }
    out({from, done}){
        done();
    }
}

export default SlideRight;