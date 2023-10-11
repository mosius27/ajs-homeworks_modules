// TODO: write your code here
import sum from './basic';
import { Game, GameSavingData, readGameSaving, writeGameSaving } from './game';

console.log('worked');

console.log(sum([1, 2]));

const game = new Game();
game.start();