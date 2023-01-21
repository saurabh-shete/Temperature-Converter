window.onload = ()=> {
  let c = document.getElementById("cel");
  let f = document.getElementById("far");
  c.oninput = ()=> {
    f.value = (c.value * 9 / 5) + 32;
  };
  f.oninput = ()=> {
    c.value = (f.value - 32) * 5 / 95;
  };
}