const accordeonItem = document.querySelectorAll('.accordeon__item');
const accordeonContent = document.querySelectorAll('.accordeon__content');
let loock;


accordeonItem.forEach(function(element) {
    element.addEventListener('click', function() {
        if (!(this.classList.contains('show'))) {
            for(j = 0; j < accordeonItem.length; j++) {
                accordeonItem[j].classList.remove('show');

                for (k = 0; k < accordeonContent.length; k++) {
                    accordeonContent[k].style.maxHeight = '0px';
                }
            }
            this.classList.add('show');
            loock = element.lastElementChild;
            loock.style.maxHeight = loock.scrollHeight + "px";
        } else if (this.classList.contains('show')) {
            element.classList.remove('show');
            element.lastElementChild.style.maxHeight = '0px';
        }
    })
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
    });
});
// for (let i = 0; i < accordeonItem.length; i++) {
//     accordeonItem[i].addEventListener('click', function() {
//         if (!(this.classList.contains('show'))) {
//             for(j = 0; j < accordeonItem.length; j++) {
//                 accordeonItem[j].classList.remove('show')

//                 for (k = 0; k < accordeonContent.length; k++) {
//                     accordeonContent[k].style.maxHeight = '0px';
//                 }
//             }
//             this.classList.add('show');
//             console.log(accordeonItem[i].lastElementChild)
//             loock = accordeonItem[i].lastElementChild;
//             loock.style.maxHeight = loock.scrollHeight + "px"
//         } else if (this.classList.contains('show')) {
//             accordeonItem[i].classList.remove('show');
//             accordeonItem[i].lastElementChild.style.maxHeight = '0px';
//         }
//     })
// }
