  // // Groups words for the paragraph
  // function wrapWordsInSpans(selector, groupSize = 3) {
  //   const el = document.querySelector(selector);
  //   if (!el) return;

  //   const words = el.innerText.trim().split(/\s+/);
  //   const groups = [];
  //   for (let i = 0; i < words.length; i += groupSize) {
  //     groups.push(words.slice(i, i + groupSize).join(" "));
  //   }

  //   el.innerHTML = groups
  //     .map(group => `<span class="glow-group">${group}</span>`)
  //     .join(" ");
  // }

  // // Groups letters for the h1
  // function wrapLettersInSpans(selector, groupSize = 3) {
  //   const el = document.querySelector(selector);
  //   if (!el) return;

  //   el.innerHTML = [...el.innerText]
  //     .map((char, i) => {
  //       if (char === " ") return " ";
  //       return `<span class="glow-letter" data-index="${i}">${char}</span>`;
  //     })
  //     .join("");

  //   // Add hover logic to highlight groups of letters
  //   const spans = el.querySelectorAll(".glow-letter");

  //   spans.forEach((span) => {
  //     span.addEventListener("mouseenter", () => {
  //       const idx = parseInt(span.getAttribute("data-index"));

  //       // Find which group this letter belongs to
  //       const groupStart = Math.floor(idx / groupSize) * groupSize;
  //       const groupEnd = groupStart + groupSize;

  //       spans.forEach((s) => {
  //         const sIdx = parseInt(s.getAttribute("data-index"));
  //         if (sIdx >= groupStart && sIdx < groupEnd) {
  //           s.classList.add("glow-active");
  //         } else {
  //           s.classList.remove("glow-active");
  //         }
  //       });
  //     });

  //     span.addEventListener("mouseleave", () => {
  //       spans.forEach((s) => s.classList.remove("glow-active"));
  //     });
  //   });
  // }

  // wrapWordsInSpans("section p", 3);
  // wrapLettersInSpans("section h1", 3); // change to 4 for 4-letter groups