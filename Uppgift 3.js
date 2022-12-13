// TASK 3

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

/**
 * Your specification goes here
 */
function zoom(factor) {
        
        return (src, dest) => {
            
        const height = image_height();
        const width = image_width();
        
        
        const zooming = (src[(y+ ( height / factor)) / factor]
                    [(x + (width / factor)) / factor]);
      
        for (let y = 0; y < height; y = y + 1) {
            for (let x = 0; x < width; x = x + 1) {
                    
                dest[x][y][0] = zooming[0];
                dest[x][y][1] = zooming[1];
                dest[x][y][2] = zooming[2];
                dest[x][y][3] = zooming[3];
            }
        }
    };
}

install_filter(zoom(2));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();