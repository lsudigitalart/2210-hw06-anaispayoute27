function setup() {
  night = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg/800px-%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg")
 bats = loadImage("Real bats.png")
 ghost = loadImage("Reall Ghost.png")
  createCanvas(400, 400);
}
let night;

function draw() {
  background(220);
  image(night, 0, 0, 400, 400)
  image(bats, 0, 0, 300, 300)
  image(ghost, mouseX, mouseY, mouseX, mouseY)
}
