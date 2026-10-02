import Phaser from "phaser";
import { GAME_CONFIG } from "./config/gameConfig.js";
import BootScene from "./scenes/BootScene.js";
import GameScene from "./scenes/GameScene.js";

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: GAME_CONFIG.width,
  height: GAME_CONFIG.height,
  backgroundColor: GAME_CONFIG.backgroundColor,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [BootScene, GameScene]
};

new Phaser.Game(config);