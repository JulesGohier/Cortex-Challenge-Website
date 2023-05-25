function afficherSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
    
    document.getElementById(sectionId).style.display = 'grid';
    
    var subsections = document.getElementsByClassName('subsection');
    for (var j = 0; j < subsections.length; j++) {
      subsections[j].style.display = 'none';
    }
  }
  
function afficherSousSection(subsectionId) {
  var subsections = document.getElementsByClassName('subsection');
  
  for (var i = 0; i < subsections.length; i++) {
    subsections[i].style.display = 'none';
  }

  document.getElementById(subsectionId).style.display = 'grid';
}

function afficherheader(headerId) {
  var heards = document.getElementsByClassName('header');

  for (var i = 0; i < heards.length; i++) {
    heards[i].style.opacity = '0';
  }
  
  document.getElementById(headerId).style.opacity = '1';
}

function reset_header(headerId){
    document.getElementById(headerId).style.opacity = '0';
}