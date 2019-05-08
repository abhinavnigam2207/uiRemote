function getImageSource(type) {
    switch(type) {
        case 'TV': return 'src/assets/tv.PNG'; break;
        case 'AC': return 'src/assets/ac.PNG'; break;
        case 'fan': return 'src/assets/fan.PNG'; break;
        case 'setTop': return 'src/assets/settop.PNG'; break;
        case 'camera': return 'src/assets/camera.PNG'; break;
        case 'curtain': return 'src/assets/curtain.PNG'; break;
        case 'projector': return 'src/assets/projector.PNG'; break;
    }
}

export {getImageSource};