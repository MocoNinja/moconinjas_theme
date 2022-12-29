function main() {
    console.log(
        `DOM rendered at ${new Date().toISOString()}`
    );
}

window.addEventListener("load", main);