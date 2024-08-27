// Add function
function add(a, b) {
  return a + b;
}

//multi function
function multiply(a, b) {
  return a * b;
}

// CRUD System Functions
function createItem(items, newItem) {
  items.push(newItem);
  return items;
}

function readItem(items, id) {
  return items.find((item) => item.id === id);
}

function updateItem(items, id, updatedData) {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...updatedData };
    return items[index];
  }
  return null;
}

function deleteItem(items, id) {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    return items.splice(index, 1);
  }
  return null;
}

// API Functions
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the POST operation:", error);
    return null;
  }
}

// UI Component Functions
function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = element.style.display === "none" ? "block" : "none";
  }
}

function createButton(containerId, buttonText, onClickHandler) {
  const container = document.getElementById(containerId);
  if (container) {
    const button = document.createElement("button");
    button.innerText = buttonText;
    button.addEventListener("click", onClickHandler);
    container.appendChild(button);
  }
}

module.exports = {
  add,
  multiply,
  createItem,
  readItem,
  updateItem,
  deleteItem,
  fetchData,
  postData,
  toggleVisibility,
  createButton,
};
