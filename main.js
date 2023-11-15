//クラス名が「scroll-in」の要素を取得
const objects = document.querySelectorAll('.scroll-in');

const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('displayed');//スクロール感知で「displayed」のクラス名を付与
            observer.unobserve(entry.target); //監視の終了
        }
    });
};

// オプション
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};

// IntersectionObserverインスタンス化
const io = new IntersectionObserver(cb, options);

// 監視を開始

objects.forEach(object => {
  io.observe(object);
});

//スキルがクリックされたらページ移動
document.getElementById("skilTag").addEventListener("click", function() {
  let element = document.querySelector(".skils");
  element.scrollIntoView({behavior: "smooth"});
});

//作品集がクリックされたらページ移動
document.getElementById("filmTag").addEventListener("click", function() {
  let element = document.querySelector(".film");
  element.scrollIntoView({behavior: "smooth"});
});

//お問い合わせボタンがクリックされたらページ移動
document.getElementById("contactBtn").addEventListener("click", function() {
  let element = document.querySelector(".form");
  element.scrollIntoView({behavior: "smooth"});
});
