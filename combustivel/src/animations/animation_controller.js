import './animation_controller.styles.scss'

const Animations  = {
    FADE_OFF : (e) => {
        return {
            animation: "fade_off 2.5s  1 normal forwards",
            animationFillMode: "forwards"
        }
    },
    FADE_IN : (e) => {
        return {
            animation: "fade_in 2.5s  1 normal forwards",
            animationFillMode: "forwards"
        }
    },
    FADE_MESSAGE_IN : (e) => {
        return {
            animation: "fade_in_from_left 1.2s  1 normal forwards",
            animationFillMode: "forwards"
        }
    },
    FADE_MESSAGE_OFF : (e) => {
        return {
            animation: "fade_off_from_left 1.2s 1 normal forwards",
            animationFillMode: "forwards"
        }
    },
    DELAY_CONTROLLER : (controller, animationCallback, time) => {
        let counter = 0;
    
        const handleAction = () => {
            if (counter === 0) {
                counter++
                return (controller())
            } else {
                clearInterval(timer);
            }
        };
        (animationCallback())
        const timer = setTimeout(handleAction, time);
    }
}

export default Animations;