const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")
const container = document.getElementsByClassName("container")

// クイズの内容
const quiz = {
  text: "このラーメンの種類はなんでしょう？",
  image: "ramen.jpg",
  choices: [
    {
      text: "しょうゆ",
      feedback: "残念！しょうゆ味じゃないよ",
    },
    {
      text: "みそ",
      feedback: "正解！味噌味だよ！",
    },
    {
      text: "とんこつ",
      feedback: "残念！とんこつ味じゃないよ！",
    },
    {
      text: "二郎",
      feedback: "残念！二郎じゃないよ！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()

// choiceNumber番目の選択肢を選択

// 共通の処理：テキストからカードを作成する
const createCard = function () {
  // ボタンを作る
  const card1 = document.createElement("button")
  const card2 = document.createElement("button")
  const card3 = document.createElement("button")
  const card4 = document.createElement("button")
  // IDを付与
  card1.Id = "card1"
  card2.Id = "card2"
  card3.Id = "card3"
  card4.Id = "card4"
  // container内に作る
  container.append(card1)
  container.append(card2)
  container.append(card3)
  container.append(card4)
  // 選択肢（ボタン）の中身を表示
  card1.textContent = quiz.choices[0].text
  card2.textContent = quiz.choices[1].text
  card3.textContent = quiz.choices[2].text
  card4.textContent = quiz.choices[3].text

  card1.onclick = function () {
    // 0 番目の選択肢を選択
    choose(0)
  }
  card2.onclick = function () {
    // 1 番目の選択肢を選択
    choose(1)
  }
  card3.onclick = function () {
    // 2 番目の選択肢を選択
    choose(2)
  }
  card4.onclick = function () {
    // 3 番目の選択肢を選択
    choose(3)
  }

  const choose = function (choiceNumber) {
    // フィードバックを表示
    feedback.textContent = quiz.choices[choiceNumber].feedback
  }

  // return card1.card2.card3.card4をするとエラーぽくなる
  return container
}

createCard()
