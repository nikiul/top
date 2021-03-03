// показываем/убираем доп информацию под карточкой
const ratingCard = document.querySelectorAll('.rating__card');
if(ratingCard) {
    for (let card of ratingCard) {
        const cardLearnMoreBtn = card.querySelector('.card__btn');
        const learnMore = card.querySelector('.card__learn-more')

        cardLearnMoreBtn.addEventListener('click', function(){
            learnMore.classList.toggle('hide');
        })
    }
}