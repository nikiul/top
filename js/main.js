// $('.rating__learn-more').click(function(){
//     $('.card__learn-more').addClass('hide')
//     // $('body').addClass('body__lock');
// });

// $('.rating__learn-more').click(function(){
//     $('.card__learn-more').removeClass('hide');
//     // $('body').removeClass('body__lock');
// });

// $('.rating__learn-more').click(function() {  
//     $(this).siblings().removeClass('hide');
//     $(this).addClass('hide');
// });

const learnMoreToggleBtn = document.querySelector('.rating__learn-more');
const learnMore = document.querySelector('.card__learn-more')

learnMoreToggleBtn.onclick = function(){
    learnMore.classList.toggle('hide');
};
