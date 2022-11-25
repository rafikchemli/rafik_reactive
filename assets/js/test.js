const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalContent = document.querySelectorAll('.services__content'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal');
};

let modalremove = function (modalClick){
    modalViews[modalClick].classList.remove('active-modal');

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
});

modalContent.forEach((modalCon, i)=>{
    modalCon.addEventListener('click', ()=>{
        modal(i);
    })
});

modalViews.forEach((modalView, i)=>{
    modalView.addEventListener('click', ()=>{
        modalremove(i);
    })
});

// modalCloses.forEach(modalClose => {
//     modalClose.addEventListener
//     (
//         'click', () =>  {   
                            
//                             modalViews.forEach( (modalView) =>{
//                                                                 modalView.classList.remove('active-modal');
//                                                             }
//                                                 );
//                         }       
//     );
// });

modalViews.forEach(modalView => {
    modalView.addEventListener
    (
        'click', () =>  {   
                            
                            modalViews.forEach( (modalView) =>{
                                                                modalView.classList.remove('active-modal');
                                                            }
                                                );
                        }       
    );
});


// modalViews.forEach(modalView => {
//     modalView.addEventListener
//     (
//         'click', () =>  {   
                            
//                             modalViews.forEach( (modalView) =>{
//                                                                 modalView.classList.remove('active-modal');
//                                                             }
//                                                 );
//                         }       
//     );
// });