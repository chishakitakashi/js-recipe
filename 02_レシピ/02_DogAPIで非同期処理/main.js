//const imageElement = document.getElementById("dog-image")
//const buttonElement = document.getElementById("click_button")
const inputElement = document.getElementById("input3-container")
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
  var checkOption = document.getElementsByName("RadioGroup1")

  checkOption.forEach(function (e) {
    e.addEventListener("click", function () {
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

      // 入力欄を空にする

      return false
    })
  })
}

function test_event(e) {
  if (inputElement.value === null) {
    // カードを作成する
    //const name = inputElement.value
    // console.log(inputElement.value)
    // const url =
    //   "https://dog.ceo/api/breed/hound/" + inputElement.value + "/images/random"
    // console.log(url)
    // console.log(inputElement.value)
    // fetch("https://dog.ceo/api/breeds/list/all")
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((data) => {
    //     data.message = inputElement.value
    //     console.log(data.message)
    //     image3Element.src = data.message
    //   })
    //最後にrandomを付けることでデータが1つに絞られる
  }
}
