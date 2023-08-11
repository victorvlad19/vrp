AFRAME.registerComponent('event-manager', {

    init: function () {
        this.bindMethods();

        let playing = false;

        this.C3_Song = document.querySelector('#C3_Song');

        this.C3 = document.querySelector('#C3');
    },

    bindMethods: function () {
        this.onClick = this.onClick.bind(this);
    },

    onClick: function (evt) {
        let targetEl = evt.target;

        // if (targetEl === this.C3) {
        //
        //     if (!playing) {
        //         this.C3_Song.components.sound.playSound();
        //     } else {
        //         this.C3_Song.components.sound.pauseSound();
        //         this.C3_Song.currentTime = 0;
        //     }
        //     playing = !playing
        // }
    }

});