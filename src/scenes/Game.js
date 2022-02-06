import Phaser from "phaser"

export default class Game extends Phaser.Scene {

    preload() {

    }

    create() {

        this.ball = this.add.circle(400, 250, 10, 0xffffff, 1);
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1, 1);

        this.ball.body.setCollideWorldBounds(true, 1, 1);

        this.ball.body.setVelocity(300, Phaser.Math.Between(50, 150), 0);

        this.paddleLeft = this.add.rectangle(50, 250, 20, 100, 0xffffff, 1);
        this.paddleRight = this.add.rectangle(750, 250, 20, 100, 0xffffff, 1);

        this.physics.add.existing(this.paddleLeft, true);
        this.physics.add.existing(this.paddleRight, true);


        /** @type {Phaser.Physics.Arcade.Body} */
        // const body = paddleLeft.body;


        this.physics.add.collider(this.paddleLeft, this.ball);
        this.physics.add.collider(this.paddleRight, this.ball);

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {

        if (this.cursors.up.isDown && this.cursors.down.isDown) {
            return;
        }

        else if (this.cursors.up.isDown) {
            if (this.paddleLeft.y == 50) {
                return;
            }
            this.paddleLeft.y -= 5;
            this.paddleLeft.body.updateFromGameObject()
        }

        else if (this.cursors.down.isDown) {
            if (this.paddleLeft.y == 450) {
                return;
            }
            this.paddleLeft.y += 5;
            this.paddleLeft.body.updateFromGameObject()
        }

        if (this.ball.y >= 750) {
            this.paddleRight.y = 750;
        }
        else if (this.ball.y <= 50) {
            this.paddleRight.y = 50;
        }
        else {
            this.paddleRight.y = this.ball.y;
        }
        
        this.paddleRight.body.updateFromGameObject();

    }

}