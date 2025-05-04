document.addEventListener('DOMContentLoaded', function () {
    const imageMap = {
        bikeHover: "images/velo.jpg",
        catHover: "images/cat.jpg"
    };

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const img = document.createElement("img");
    img.id = "floatingImage";
    img.style.position = "absolute";
    img.style.display = "none";
    document.body.appendChild(img);

    const preloadedImages = {};
    for (const key in imageMap) {
        const preloadImg = new Image();
        preloadImg.src = imageMap[key];
        preloadedImages[key] = preloadImg;
    }

    Object.keys(imageMap).forEach(id => {
        const span = document.getElementById(id);
        if (!span) return;

        const imageSrc = imageMap[id];

        if (!isMobile) {
            span.addEventListener("mouseenter", () => {
                img.style.display = "none";
                img.src = imageSrc;

                // Ensure image is only shown once loaded
                if (preloadedImages[id].complete) {
                    img.style.display = "block";
                } else {
                    img.onload = () => {
                        img.style.display = "block";
                    };
                }
            });

            span.addEventListener("mouseleave", () => {
                img.style.display = "none";
                img.src = "";
            });

            span.addEventListener("mousemove", (e) => {
                img.style.left = e.pageX + "px";
                img.style.top = e.pageY + "px";
            });
        }

        if (isMobile) {
            span.addEventListener("click", () => {
                const parentP = span.closest("p");
                const existing = parentP.querySelector(".insertedImage");

                if (existing) {
                    existing.remove();
                } else {
                    const clone = img.cloneNode(true);
                    clone.classList.add("insertedImage");
                    clone.removeAttribute("id");
                    clone.src = imageSrc;
                    parentP.appendChild(clone);
                }
            });
        }
    });
});
