const greetButton = document.getElementById("greet-button");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", async () => {
    const response = await invoke("greet", { name: "Rust Developer" });
    greeting.textContent = response;
});