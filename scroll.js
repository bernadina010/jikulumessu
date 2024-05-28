function scrollToDiferenciais(){
  const diferenciasiSection = document.querySelector('.diferenciais')
  if (diferenciasiSection){
    diferenciasiSection.scrollIntoView({
      behavior: 'smooth',
    block: 'start'
    });
    
  }
}
function scrollToSobre(){
  const SobreSection = document.querySelector('.about')
  if (SobreSection){
    SobreSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
  }
}
  function scrollToContactos(){
    const ContactosSection = document.getElementById('contact')
    if (ContactosSection){
      ContactosSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
    }
  }
  function scrollToHome(){
    const HomesSection = document.querySelector('.banner')
    if (HomesSection){
      HomesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
    }
  }
