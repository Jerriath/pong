import Phaser from "phaser"

export default class Game extends Phaser.Scene {

    preload() {

    }

    create() {

        const ball = this.add.circle(400, 250, 10, 0xffffff, 1);
        this.physics.add.existing(ball);
        ball.body.setBounce(1, 1);

        ball.body.setCollideWorldBounds(true, 1, 1);

        ball.body.setVelocity(-200, 0);

        this.paddleLeft = this.add.rectangle(50, 250, 20, 100, 0xffffff, 1);
        this.paddleRight = this.add.rectangle(750, 250, 20, 100, 0xffffff, 1);

        this.physics.add.existing(this.paddleLeft, true);
        this.physics.add.existing(this.paddleRight, true);


        /** @type {Phaser.Physics.Arcade.Body} */
        // const body = paddleLeft.body;


        this.physics.add.collider(this.paddleLeft, ball);
        this.physics.add.collider(this.paddleRight, ball);

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
            this.paddleLeft.y -= 10;
            this.paddleLeft.body.updateFromGameObject()
        }

        else if (this.cursors.down.isDown) {
            if (this.paddleLeft.y == 450) {
                return;
            }
            this.paddleLeft.y += 10;
            this.paddleLeft.body.updateFromGameObject()
        }

    }

}