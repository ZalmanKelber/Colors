const boxes = [
                {bgc: "#13171a", clrs: ["#d92514", "#efdc6e", "#025aa1", "#f3f3f3"], title: "Mondrian"},
                {bgc: "#1d1e1b", clrs: ["#1d1e1b", "#d4342a", "#f7f2d2", "#bd845e"], title: "Greek Vase"},
                {bgc: "white", clrs: ["#d7e3ea", "#c4c4ca", "#648fe7", "#1a2665"], title: "Ming Vase"},
                {bgc: "#cbc8cf", clrs: ["#5dbcd2", "#063523", "#83a4a0", "#81826f"], title: "Forest Mist"},
                {bgc: "black", clrs: ["#daa520", "#f0f0f0", "#b87333", "#322f38"], title: "Metal"},
                {bgc: "#cdeefd", clrs: ["#ec9177", "#ea580a", "#edd4b4", "#1db3be"], title: "Venice"},
                {bgc: "#411000", clrs: ["#181310", "#a14f1f", "#c3ab80", "#d4d2d4"], title: "Coffee"},
                {bgc: "#38a8df", clrs: ["#341a13", "#91b19c", "#da635a", "#ddccba"], title: "Grand Canyon"}
              ]

boxes.forEach(box => {
  const el = document.createElement("div");
  el.className = "color-box";
  el.style.backgroundColor = box.bgc;
  if (box.bgc === "white" || box.bgc === "#fff" || box.bgc === "#ffffff") {
    el.style.border = "solid 1px black";
    el.style.padding = "4px";
  }
  box.clrs.forEach(val => {
    const clr = document.createElement("div");
    clr.className = "square";
    clr.style.backgroundColor = val;
    el.append(clr);
  });
  const card = document.createElement("div");
  card.className = "card";
  const title = document.createElement("p");
  title.innerHTML = box.title;
  card.append(el);
  card.append(title);
  document.getElementById("root").append(card);
});
