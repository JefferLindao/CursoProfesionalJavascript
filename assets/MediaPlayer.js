function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugins => {
        plugins.run(this)
    })
}

MediaPlayer.prototype.play = function() {
    this.media.play()
}

MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true
}

MediaPlayer.prototype.onmute = function() {
    this.media.muted = false
}

export default MediaPlayer