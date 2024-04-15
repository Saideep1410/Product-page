const allHoverImages=document.querySelectorAll('.hover-container div img');
const imgContainer=document.querySelector('.img-container');
window.addEventListener('DOMContentLoaded',()=>{
    allHoverImages[0].parentElement.classList.add('active');});
    allHoverImages.forEach((images) => {
        images.addEventListener('mouseover', () => {
            
            imgContainer.querySelector('img').src = images.src;
            resetActiveImg();
            images.parentElement.classList.add('active');
        });
    });
    
function resetActiveImg()
{
    allHoverImages.forEach((img)=>{
        img.parentElement.classList.remove('active');
    });
}