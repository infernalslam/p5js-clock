/* eslint-disable */
function setup () {
  createCanvas(400, 400)
  angleMode(DEGREES)
}

function draw () {
  background(0)
  let hr = hour()
  let min = minute()
  let sec = second()

  strokeWeight(8)
  stroke(255, 100, 150)
  noFill()

  let end1 = map(sec, 0, 60, 0, 360)
  arc(200, 200, 300, 300, 0, end1)

  stroke(150, 100, 255)
  let end2 = map(min, 0, 60, 0, 360)
  arc(200, 200, 280, 280, 0, end2)


  stroke(255, 255, 100)
  let end3 = map(hr % 12, 0, 12, 0, 360)
  arc(200, 200, 260, 260, 0, end3)

}
