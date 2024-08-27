const {
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
} = require("./Functions");

// Add Function Test
test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

// Multi Function Test
test("multiplies 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

// CRUD System Functions Tests
test("creates a new item in the array", () => {
  const items = [{ id: 1, name: "Item 1" }];
  const newItem = { id: 2, name: "Item 2" };
  expect(createItem(items, newItem)).toContainEqual(newItem);
});

test("reads an item by id", () => {
  const items = [{ id: 1, name: "Item 1" }];
  expect(readItem(items, 1)).toEqual({ id: 1, name: "Item 1" });
});

test("updates an item by id", () => {
  const items = [{ id: 1, name: "Item 1" }];
  const updatedData = { name: "Updated Item 1" };
  expect(updateItem(items, 1, updatedData)).toEqual({
    id: 1,
    name: "Updated Item 1",
  });
});

test("deletes an item by id", () => {
  const items = [{ id: 1, name: "Item 1" }];
  expect(deleteItem(items, 1)).toEqual([{ id: 1, name: "Item 1" }]);
});

// Mocking fetch for API functions
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: "mocked data" }),
  })
);

// API Functions Tests
test("fetches data from API", async () => {
  const data = await fetchData("http://mockapi.com/data");
  expect(data).toEqual({ data: "mocked data" });
});

test("posts data to API", async () => {
  const postDataInput = { id: 1, name: "Item 1" };
  const response = await postData("http://mockapi.com/data", postDataInput);
  expect(response).toEqual({ data: "mocked data" });
});

// UI Component Functions Tests
test("toggles visibility of an element", () => {
  document.body.innerHTML = '<div id="myDiv" style="display:block"></div>';
  toggleVisibility("myDiv");
  expect(document.getElementById("myDiv").style.display).toBe("none");
  toggleVisibility("myDiv");
  expect(document.getElementById("myDiv").style.display).toBe("block");
});

test("creates a button and appends it to a container", () => {
  document.body.innerHTML = '<div id="container"></div>';
  const onClickHandler = jest.fn();
  createButton("container", "Click Me", onClickHandler);
  const button = document.querySelector("#container button");
  expect(button).not.toBeNull();
  button.click();
  expect(onClickHandler).toHaveBeenCalled();
});
