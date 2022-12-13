// TASK 1

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

/**
 * TODO: Complete specification here
 *
 * @param {...} src - ...
 * @param {...} dest - ...
 */
function my_first_filter(src, dest) {
    const width = image_width();
    const height = image_height();

    // modify the code here
    for (let y = 0; y < height; y = y + 1) {
        for (let x = 0; x < width; x = x + 1) {
            dest[y][x][0] = 255 * (y/height); // invert red intensity
            dest[y][x][1] = 255 *(x/width); // invert green intensity
            dest[y][x][2] = 255 * ((width - x - y)/width); // invert blue intensity
            dest[y][x][3] = 255;                // always 255
        }
    }
}

install_filter(my_first_filter);
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();