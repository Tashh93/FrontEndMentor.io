const shareOption = document.querySelector('.tooltiptext');

document.querySelector('.share-btn').addEventListener('click',function(){
    this.classList.toggle('active');
    shareOption.classList.toggle('active');
})
