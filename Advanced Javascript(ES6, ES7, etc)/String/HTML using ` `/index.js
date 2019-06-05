const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div1 = `
        <div class ="hello">
            <h1 class="title">Hello</h1>
        </div>
    `;
    wrapper.innerHTML = div1;
};

setTimeout(addWelcome, 2000);

console.log(`

    Test

`);