const colors = ['blue', 'orange', 'red', 'cyan', 'yellow', 'purple', 'black' ]
const sizes = ['10px', '50px', '100px', '300px']

$(document).ready(function(){
    let color = 0;
    let size = 0;
    let top = 50;
    let left = 50;
    $(document).on('keydown', function(e) {
        console.log(e.code)
        if (e.code === 'ArrowUp') {
            top -= 1;
            $('#square').css("top", `${top}%`);
        } else if (e.code === 'ArrowRight') {
            left += 1;
            $('#square').css("left", `${left}%`);
        }  else if (e.code === 'ArrowDown') {
            top += 1;
            $('#square').css("top", `${top}%`);
        }  else if (e.code === 'ArrowLeft') {
            left -= 1;
            $('#square').css("left", `${left}%`);
        }  else if (e.code === 'Space') {
                if (color !== 6) {
                    color += 1;
                } else {
                    color = 0;
                }
                $('#square').css('background-color', `${colors[color]}`)
        }   else if (e.code === 'Enter') {
            $('#square').toggleClass('circle')
        } else if (e.code === 'ShiftRight') {
            if (size != 3) {
                size += 1;
            } else {
                size = 0;
            }
            $('#square').css({'height': `${sizes[size]}`, 'width': `${sizes[size]}`})
        }
    })
})