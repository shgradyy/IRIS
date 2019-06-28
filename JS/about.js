  class Team {
    constructor(teamElement){
      this.teamContent = teamElement.querySelector(".team-content");
      this.buttonsGroup = teamElement.querySelector(".team-buttons");
      this.openButton = teamElement.querySelector(".team-btn-open");
      this.closeButton = teamElement.querySelector(".team-btn-close");
      
      this.buttonsGroup.addEventListener('click', this.togglePanel.bind(this))
  
    } 
  
    togglePanel(){
      this.openButton.classList.toggle("hide-btn");
      this.closeButton.classList.toggle("hide-btn");
      this.teamContent.classList.toggle("toggle-on");
    }
  }
  
  const panels = document.querySelectorAll(".team");
  
  panels.forEach( (teamElement) => {
    return new Team(teamElement);
  })
  

  
