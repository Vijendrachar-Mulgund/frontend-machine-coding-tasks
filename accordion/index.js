const accordionItemElements = [];
const accordionRootElement = document.getElementById("accordion-root");

const handleOnToggleClick = function (event) {
  const accElement = event.target.parentNode;
  const style = window.getComputedStyle(accElement.children[1]);
  if (style.display == "none") {
    accElement.children[1].style.display = "block";
  } else {
    accElement.children[1].style.display = "none";
  }
};

const handleOnAddClick = function () {
  const newAccordionElement = `<div id="acc-${accordionItemElements.length + 1}" class="accordion-item">
        <div class="accordion-header">Header</div>
        <div class="accordion-content">Content</div>
      </div>`;
  accordionItemElements.push(newAccordionElement);
  return renderList();
};

const renderList = () => {
  document.getElementById("accordion-root").innerHTML = accordionItemElements;
  const accordionElementsDOM = document.querySelectorAll(".accordion-item");
  accordionElementsDOM.forEach((accElement) => {
    accElement.children[0].addEventListener("click", handleOnToggleClick);
  });
};

document.getElementById("add-accordion").addEventListener("click", handleOnAddClick);
document.getElementById("accordion-root").innerHTML = accordionItemElements;

const accordionElementsDOM = document.querySelectorAll(".accordion-item");
accordionElementsDOM.forEach((accElement) => {
  accElement.children[0].addEventListener("click", handleOnToggleClick);
});
