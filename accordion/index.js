const accordionRootElement = document.getElementById("accordion-root");

accordionRootElement.addEventListener("click", function (event) {
  if (event.target.classList.contains("accordion-delete-button")) {
    const accordionItemElement = event.target.closest(".accordion-item");
    const idOfElement = accordionItemElement.id;
    if (idOfElement) {
      accordionRootElement.removeChild(accordionItemElement);
    }
    return;
  }

  if (event.target.classList.contains("accordion-header")) {
    const accordionItemElement = event.target.closest(".accordion-item");
    const accordionHeaderElement = event.target.closest(".accordion-header");
    const accordionContentElement = accordionItemElement.children[1]; // The Content is always the second node in the element

    if (!accordionContentElement.classList.contains("open")) {
      accordionContentElement.classList.add("open");
      accordionHeaderElement.ariaExpanded = "true";
    } else {
      accordionContentElement.classList.remove("open");
      accordionHeaderElement.ariaExpanded = "false";
    }
  }
});

const handleOnAddClick = function () {
  const newId = `acc-${Date.now()}`;
  console.log("newId", newId);
  const newAccordionElement = `
    <div id="${newId}" class="accordion-item">
        <div class="accordion-header-content">
            <div aria-expanded="false" class="accordion-header">Header</div>
            <button class="accordion-delete-button">Del</button>
        </div>
        <div class="accordion-content">Content</div>
      </div>`;
  accordionRootElement.insertAdjacentHTML("beforeend", newAccordionElement);
};

document.getElementById("add-accordion").addEventListener("click", handleOnAddClick);
