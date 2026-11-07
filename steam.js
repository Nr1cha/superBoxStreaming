const video = document.getElementById('stream');
const src = 'http://localhost:8888/hdmi/index.m3u8';
if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = src;
} else if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(src);
  hls.attachMedia(video);
}