// TASK 2

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

/**
 * Copies the contents from one array to another.
 * @param {array} src - contains information to be copied
 * @param {array} dest - array where information is copied into
 */
function copy(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
           dest[i][j][0] = src[i][j][0];
           dest[i][j][1] = src[i][j][1];
           dest[i][j][2] = src[i][j][2];
           dest[i][j][3] = src[i][j][3];
        }
    }
}

/**
 * Your specification goes here
 */
function crosshair(src, dest) {
    // your program
        const width = image_width();
        const height = image_height();
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < width; j = j + 1) {
                dest[150][j][0] = src[i][j][0];
                dest[i][j][1] = src[i][j][1];
                dest[i][j][2] = src[i][j][2];
                dest[i][j][3] = src[i][j][3];
                let radius = math_sqrt(math_pow((i-(height/2)), 2) +
            math_pow((j -(width/2)), 2));
            
            for (let x = 25; x < width; x = x + 50){
                
                if(radius> x && radius< x+25){
                    dest[i][j][2]= 255;
                    break;
                }
            }
            }
        }
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < width; j = j + 1) {
                dest[i][200][0] = src[i][j][0];
                dest[i][j][1] = src[i][j][1];
                dest[i][j][2] = src[i][j][2];
                dest[i][j][3] = src[i][j][3];
               let radius = math_sqrt(math_pow((i-(height/2)), 2) +
            math_pow((j -(width/2)), 2));
            
            for (let x = 25; x < width; x = x + 50){
                
                if(radius> x && radius< x+25){
                    dest[i][j][2]= 255;
                    break;
                }
            }
            }
        }
    
}

//install_filter(copy);
install_filter(crosshair);  // use this filter when crosshair function is ready.
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();