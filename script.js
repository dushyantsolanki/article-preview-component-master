var insertHtml = `<div class="box">

<div class="share-text">SHARE</div>

<div class="line">
  <img id="logo" src="/images/icons8-facebook-52.png" alt="">
  <img id="logo" src="/images/icons8-twitter-32.png" alt="">
  <img id="logo" src="/images/icons8-pinterest-50.png" alt="">
</div>
</div>`;

let b = document.body.getElementsByClassName("share")[0];
b.addEventListener("click", (e) => {
  document.body
    .getElementsByClassName("right")[0]
    .insertAdjacentHTML("afterend", insertHtml);
});


