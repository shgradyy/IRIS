  class Panel {
    constructor(panelElement){
      this.panelContent = panelElement.querySelector(".panel-content");
      this.buttonsGroup = panelElement.querySelector(".panel-buttons");
      this.openButton = panelElement.querySelector(".panel-btn-open");
      this.closeButton = panelElement.querySelector(".panel-btn-close");
      
      this.buttonsGroup.addEventListener('click', this.togglePanel.bind(this))
  
    } 
  
    togglePanel(){
      this.openButton.classList.toggle("hide-btn");
      this.closeButton.classList.toggle("hide-btn");
      this.panelContent.classList.toggle("toggle-on");
    }
  }
  
  const panels = document.querySelectorAll(".panel");
  
  panels.forEach( (panelElement) => {
    return new Panel(panelElement);
  })
  

  
