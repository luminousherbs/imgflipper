console.log("imgflipper is active")

function download(filetype) {
    const canvas = document.querySelector("canvas");
    const image = canvas.toDataURL(`image/${filetype}`);
    const link = document.createElement("a");
    link.href = image;
    link.download = `meme.${filetype}`;
    link.click();
}

document.addEventListener("keydown", function(event) {
    // listen for ctrl + s
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        download("jpg");
    }
});
