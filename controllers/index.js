
let remainingCounter = 1000;

class VideoStreamer {
    validator = (req, res, next) => {
        next()
    }

    video = () => {
        return 'your controlled video stream'
    }

    getVideo = (req, res) => {
        let video = this.video()
        remainingCounter = remainingCounter - 1;
        res.status(200).send({
            message : `Remaining count for video is ${remainingCounter}`,
            video
        })

    }

}
export default new VideoStreamer();