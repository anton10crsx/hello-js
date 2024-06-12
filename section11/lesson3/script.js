const liTags = document.querySelectorAll("li.item");
console.log("🚀 ~ liTags:", liTags);

const newArray = Array.from(liTags).concat("Foo");
console.log("🚀 ~ newArray:", newArray);
