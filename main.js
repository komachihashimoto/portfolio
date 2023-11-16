document.body.style.overflow = 'hidden';

//アニメーションを定義
anime({
    targets: '.loading .el',
    translateY: [-1000,0],
    opacity: [0,1],
    duration: 1500,
    delay: anime.stagger(100),
    easing: 'easeInOutElastic',
    complete: function(anim) {
      // アニメーションが完了したら1秒待つ
      setTimeout(function() {
          // 1秒後に逆のアニメーションを開始
          anime({
              targets: '.loading .el',
              translateY: [0,-1000],
              opacity: [1,0],
              duration: 1500,
              delay: anime.stagger(100),
              easing: 'easeInOutElastic',
              complete: function(anim) {
                // 逆のアニメーションが完了したら1秒待つ
                setTimeout(function() {
                    // 1秒後にloadingクラスのheightを0にするアニメーションを開始
                    anime({
                        targets: '.loading',
                        height: 0,
                        duration: 1000,
                        easing: 'linear',
                        complete: function(anim) {
                          document.body.style.overflow = '';
                      }
                    });
                }, 300);
            }
          });
      }, 600);
  }
});

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
