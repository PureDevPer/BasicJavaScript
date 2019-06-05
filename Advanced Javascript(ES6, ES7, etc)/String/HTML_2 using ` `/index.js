const wrapper = document.querySelector(".wrapper");

const firends = ["a","b", "c", "d"];

const list = `
    <h1> People </h1>
    <ul>
        ${firends.map(friend => `<li>${friend} 😊</li>`).join("")}
    </ul>
`;


wrapper.innerHTML = list;