window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const headerNav = document.querySelector('.header__nav');

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    headerNav.style.boxShadow = "0 -20px 50px 0 rgba(8,29,45,.3)";
  } else {
    headerNav.style.boxShadow = "";
  }
}

document.querySelectorAll('.block__collapsible').forEach((item) => {
  item.addEventListener('click', (event) => {
    
    // Добавление и убирание двоеточия
    let textContent = event.target.textContent;
    let lastSymbol = textContent[textContent.length - 1];
    if (lastSymbol !== ':') {
      event.target.textContent += ':';
    } else {
      event.target.textContent = textContent.substr(0, textContent.length - 1);
    }

    // Сворачивалка и разворачивалка
    event.target.classList.toggle("active");
    let content = event.target.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
});

const tooltipButton = document.querySelector('.block__hover-wrapper');
const tooltip = document.querySelector('.block__popup');

function showTooltip() {
  tooltip.classList.add('block__popup_type_visible');
};

function hideTooltip() {
  tooltip.classList.remove('block__popup_type_visible');
};

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

// tooltipButton.addEventListener('mouseover', showTooltip);
// tooltipButton.addEventListener('mouseout', hideTooltip);
// tooltipButton.addEventListener('touchstart', showTooltip);
// tooltipButton.addEventListener('touchend', hideTooltip);
