const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
//const addButton = document.getElementById("add-button")
const inputElement2 = document.getElementById("input-todo2")
const container2 = document.getElementById("cards-container2")

const inputElement3 = document.getElementById("input-todo3")
const container3 = document.getElementById("cards-container3")

inputElement.addEventListener("keypress", test_event)
inputElement2.addEventListener("keypress", test_event2)
inputElement3.addEventListener("keypress", test_event3)

// 追加ボタンを押したときの処理を登録
function test_event(e) {
  if (e.keyCode === 13) {
    // カードを作成する
    const card = createCard(inputElement.value)
    container.append(card)
    // 入力欄を空にする
    inputElement.value = ""
    return false
  }
}

function test_event2(e) {
  if (e.keyCode === 13) {
    // カードを作成する
    const card2 = createCard(inputElement2.value)
    container2.append(card2)

    // 入力欄を空にする
    inputElement2.value = ""
    return false
  }
}

function test_event3(e) {
  if (e.keyCode === 13) {
    // カードを作成する
    const card3 = createCard(inputElement3.value)
    container3.append(card3)

    // 入力欄を空にする
    inputElement3.value = ""
    return false
  }
}

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
