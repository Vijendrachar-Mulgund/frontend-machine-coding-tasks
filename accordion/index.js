const accordionItemElements = {};
const accordionRootElement = document.getElementById("accordion-root");

accordionRootElement.addEventListener("click", function (event) {
  if (event.target.className == "accordion-delete-button") {
    const accordionItemElement = event.target.closest(".accordion-item");
    const idOfElement = accordionItemElement.id;
    if (idOfElement) {
      delete accordionItemElements[idOfElement];
      accordionRootElement.removeChild(accordionItemElement);
      return;
    }
    return;
  }

  const accordionItemElement = event.target.closest(".accordion-item");
  const accordionContentElement = accordionItemElement.children[1]; // The Content is always the second node in the list
  const accordionContentElementStyle = window.getComputedStyle(accordionContentElement);
  if (accordionContentElementStyle.display == "none") {
    accordionContentElement.style.display = "block";
  } else {
    accordionContentElement.style.display = "none";
  }
});

const handleOnAddClick = function () {
  const newId = `acc-${Object.keys(accordionItemElements).length + 1}`;
  const newAccordionElement = `
    <div id="${newId}" class="accordion-item">
        <div class="accordion-header-content">
            <div class="accordion-header">Header</div>
            <button class="accordion-delete-button">Del</button>
        </div>
        <div class="accordion-content">Content</div>
      </div>`;
  accordionItemElements[newId] = newAccordionElement;
  accordionRootElement.insertAdjacentHTML("beforeend", newAccordionElement);
};

document.getElementById("add-accordion").addEventListener("click", handleOnAddClick);
