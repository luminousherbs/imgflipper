const canvas = document.querySelector("canvas");

function download(filetype) {
    const image = canvas.toDataURL(`image/${filetype}`);
    const link = document.createElement("a");
    link.href = image;
    link.download = `canvas-image.${filetype}`;
    link.click();
}