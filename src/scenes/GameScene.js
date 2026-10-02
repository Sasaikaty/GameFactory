import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.add.text(40, 40, "GAME FACTORY v0.1", {
      fontFamily: "Arial",
      fontSize: "32px",
      color: "#ffffff"
    });

    this.add.text(40, 90, "Phaser 3 + Vite starter", {
      fontFamily: "Arial",
      fontSize: "20px",
      color: "#aaaaaa"
    });

    this.player = this.add.rectangle(640, 360, 80, 80, 0xffffff);
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 5;

    if (this.cursors.left.isDown) this.player.x -= speed;
    if (this.cursors.right.isDown) this.player.x += speed;
    if (this.cursors.up.isDown) this.player.y -= speed;
    if (this.cursors.down.isDown) this.player.y += speed;
  }
}