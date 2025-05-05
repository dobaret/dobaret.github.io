document.addEventListener('DOMContentLoaded', function () {
    const imageMap = {
        bikeHover: {
            src: "images/velo.jpg",
            alt: `A bicycle rests on a patch of snow by the roadside, adjacent
                  to a rocky and forested hillside. The road curves gently and
                  is bordered by grass and patches of snow. Tall evergreen trees
                  line the right side, with a clear blue sky overhead. A bright
                  orange item is strapped to a saddle bag, contrasting with the
                  natural surroundings.`
        },
        catHover: {
            src: "images/cat.jpg",
            alt: `A tabby cat with green eyes is lying on a blue cushioned surface
                  in a cozy living room. Behind the cat, there's a television and a
                  bookshelf with board games like Scrabble visible. A large, leafy
                  houseplant is positioned in the background, adding a touch of
                  greenery to the room. The cat looks directly at the camera with
                  a relaxed expression.`
        }
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
        preloadImg.src = imageMap[key].src;
        preloadImg.alt = imageMap[key].alt;
        preloadedImages[key] = preloadImg;
    }

    Object.keys(imageMap).forEach(id => {
        const span = document.getElementById(id);
        if (!span) return;

        const imageSrc = imageMap[id].src;
        const imageAlt = imageMap[id].alt;

        span.setAttribute('tabindex', '0');

        if (!isMobile) {
            span.addEventListener("mouseenter", () => {
                img.src = imageSrc;
                img.alt = imageAlt;
                if (preloadedImages[id].complete) {
                    img.style.display = "block";
                } else {
                    img.onload = () => img.style.display = "block";
                }
            });

            span.addEventListener("mouseleave", () => {
                img.style.display = "none";
                img.src = "";
                img.alt = "";
            });

            span.addEventListener("mousemove", (e) => {
                img.style.left = e.pageX + "px";
                img.style.top = e.pageY + "px";
            });

            span.addEventListener("focus", () => {
                const parentP = span.closest("p");
                const existing = parentP.querySelector(".insertedImage");

                if (!existing) {
                    const clone = img.cloneNode(true);
                    clone.classList.add("insertedImage");
                    clone.removeAttribute("id");
                    clone.src = imageSrc;
                    clone.alt = imageAlt;
                    parentP.appendChild(clone);
                }
            });

            span.addEventListener("blur", () => {
                const parentP = span.closest("p");
                const existing = parentP.querySelector(".insertedImage");
                if (existing) {
                    existing.remove();
                }
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
                    clone.alt = imageAlt;
                    parentP.appendChild(clone);
                }
            });
        }
    });
});
