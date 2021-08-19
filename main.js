//lấy giá trị nhập vào đưa vào mảng
let arrayNumber = []
function getValue() {
  var inputNumber = parseInt(document.getElementById('inputNumber').value)
  var result = document.querySelector('.result')
  arrayNumber.push(inputNumber)
  return (result.innerHTML = arrayNumber.join(','))
}

document.querySelector('.addNumber').onclick = getValue

// Bài 1: Tổng số Dương

function positiveSum() {
  var sum = 0
  var txtSum = document.querySelector('.txtSum')
  for (let i = 0; i < arrayNumber.length; i++) {
    const element = arrayNumber[i]
    if (element > 0) sum += element
  }
  return (txtSum.innerHTML = 'Tổng số dương: ' + sum)
}
document.querySelector('.btnSum').addEventListener('click', positiveSum)

// Bài 2: Đếm số dương

function positiveCount() {
  var count = 0
  var txtCount = document.querySelector('.txtCount')
  for (let i = 0; i < arrayNumber.length; i++) {
    const element = arrayNumber[i]
    if (element > 0) count++
  }
  return (txtCount.innerHTML = 'Số dương: ' + count)
}
document.querySelector('.btnCount').onclick = positiveCount

// Bài 3: Tìm số nhỏ nhất

function minNumber() {
  var minNum = arrayNumber[0]
  var txtMinNumber = document.querySelector('.txtMinNumber')
  for (let i = 0; i < arrayNumber.length; i++) {
    var element = arrayNumber[i]
    if (minNum > element) minNum = element
  }
  return (txtMinNumber.innerHTML = 'Số nhỏ nhất là: ' + minNum)
}
document.querySelector('.btnMinNumber').onclick = minNumber

// Bài 4 : tìm số dương nhỏ nhất

function PositiveMin() {
  var minNum = arrayNumber[0]
  var txtPositiveMin = document.querySelector('.txtPositiveMin')
  for (let i = 0; i < arrayNumber.length; i++) {
    var element = arrayNumber[i]
    if (minNum > element && element > 0) minNum = element
  }
  return (txtPositiveMin.innerHTML = 'Số nhỏ nhất là: ' + minNum)
}
document.querySelector('.btnPositiveMin').onclick = PositiveMin

// Bài 5: tìm số chẵn cuối cùng
function LastEvenNum() {
  var even = 0
  var txLastEvenNum = document.querySelector('.txLastEvenNum')
  for (let i = 0; i < arrayNumber.length; i++) {
    var element = arrayNumber[i]
    if (element % 2 === 0) even = element
  }
  return (txLastEvenNum.innerHTML = 'Số chẵn cuối cùng: ' + even)
}
document.querySelector('.btnLastEvenNum').onclick = LastEvenNum

// Bài 6: Đổi chỗ
function handleChange() {
  var value1 = parseInt(document.getElementById('value1').value)
  var value2 = parseInt(document.getElementById('value2').value)
  var txtChange = document.querySelector('.txtChange')
  var element = arrayNumber[value1]
  arrayNumber[value1] = arrayNumber[value2]
  arrayNumber[value2] = element
  txtChange.innerHTML = arrayNumber.join(',')
}
document.querySelector('.btnChange').onclick = handleChange

// Bài 7: sắp xếp thứ tự tăng dần

function handleRange() {
  var txtRange = document.querySelector('.txtRange')
  arrayNumber.sort((a, b) => a - b)
  return (txtRange.innerHTML = 'Mảng sau khi sắp xếp: ' + arrayNumber.join(','))
}
document.querySelector('.btnRange').onclick = handleRange

// Bài 8: Tìm số nguyên tố đầu tiên

function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}

function getFirstPrime() {
  var firstNum = 0
  var txtFirstPrime = document.querySelector('.txtFirstPrime')
  for (let j = 0; j < arrayNumber.length; j++) {
    if (isPrime(arrayNumber[j])) {
      firstNum = arrayNumber[j]
      break
    }
  }
  txtFirstPrime.innerHTML = 'Số nguyên tố đầu tiên: ' + firstNum
}

document.querySelector('.btnFirstPrime').onclick = getFirstPrime

// Bài 9: Đếm số nguyên
let newArrayNumber = []
function getNewValue() {
  var inputNumber2 = parseFloat(document.getElementById('inputNumber2').value)
  var result2 = document.querySelector('.result2')
  newArrayNumber.push(inputNumber2)
  return (result2.innerHTML = newArrayNumber.join(','))
}

document.querySelector('.addNumber2').onclick = getNewValue

function handleCalculate() {
  var count = 0
  var txtCalculate = document.querySelector('.txtCalculate')
  for (let i = 0; i < newArrayNumber.length; i++) {
    const element = newArrayNumber[i]
    if (Number.isInteger(element)) count++
  }
  return (txtCalculate.innerHTML = 'Số nguyên: ' + count)
}
document.querySelector('.btnCalculate').onclick = handleCalculate

// Bài 10: So sánh số lượng âm và dương

function handleCompare() {
  var minus = 0
  var plus = 0
  var txtCompare = document.querySelector('.txtCompare')
  for (let i = 0; i < arrayNumber.length; i++) {
    const element = arrayNumber[i]
    if (element > 0) {
      plus++
    } else {
      minus++
    }
  }
  if (plus > minus) {
    return (txtCompare.innerHTML = 'Số dương' + ' > ' + 'Số âm')
  } else {
    return (txtCompare.innerHTML = 'Số âm' + ' > ' + 'Số dương')
  }
}
document.querySelector('.btnCompare').onclick = handleCompare
