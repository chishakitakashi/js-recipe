//const imageElement = document.getElementById("dog-image")
//const buttonElement = document.getElementById("click_button")
//const inputElement = document.getElementById("input3-container")
//inputElement.addEventListener("keypress", test_event)
const image3Element = document.getElementById("dog3-image")

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => {
//     return res.json() // 結果を json として読み込んで、次の then に渡す
//   })
//   .then((data) => {
//     imageElement.src = data.message // 画像を表示する
//   })

// buttonElement.onclick = function () {
//   // 指定したサーバーにデータを取りに行く
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => {
//       return res.json() // 結果を json として読み込んで、次の then に渡す
//     })
//     .then((data) => {
//       imageElement.src = data.message // 画像を表示する
//     })
// }

// fetch(`https://dog.ceo/api/breeds/image/random`)
//   .then((res) => {
//     return res.json()
//   })
//   .then((data) => {
//     image3Element.src = data.message
//   })

window.onload = function () {
  //ラジオボタンをグループで取得
  var checkOption = document.getElementsByName("RadioGroup1")

  //グループ内のラジオボタンが押されたら発火
  checkOption.forEach(function (e) {
    e.addEventListener("click", function () {
      //入力内容に応じてurlを作成
      const url =
        "https://dog.ceo/api/breed/hound/" +
        document.querySelector("input:checked[name=RadioGroup1]").value +
        "/images/random"
      console.log(url)
      fetch(url)
        .then((res) => {
          return res.json() // 結果を json として読み込んで、次の then に渡す
        })
        .then((data) => {
          image3Element.src = data.message // 画像を表示する
          //console.log(image3Element.src)
        })

      return false
    })
  })
}
