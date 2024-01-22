class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  };

  init() {
    console.log("overworld working ", this);
    const IMAGE = new Image();
    IMAGE.onload = () => {
      this.ctx.drawImage(IMAGE, 0, 0);
    };
    IMAGE.src = "./images/maps/DemoLower.png"

    const HERO = new Image();
    const X = 5;
    const Y = 6;
    HERO.onload = () => {
      this.ctx.drawImage(HERO, 0, 0, 32, 32, X * 16 - 8, Y * 16 - 18, 32, 32)
    }
    HERO.src = "./images/characters/people/hero.png"

    const SHADOW = new Image();
    SHADOW.onload = () => {
      this.ctx.drawImage(SHADOW, 0, 0, 32, 32, X * 16 - 8, Y * 16 - 18, 32, 32)
    }
    SHADOW.src = "./images/characters/shadow.png"
  };
};

