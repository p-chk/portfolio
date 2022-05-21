export const hideAllAccordion = () => {
    var collapses = document.getElementsByClassName("detail-co");
    for (const collapse of collapses) {
      if (collapse.className.includes("show")) {
        collapse.classList.remove('show');
      }
    }
 };