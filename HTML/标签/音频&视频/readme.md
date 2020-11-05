## <audio> [New]	定义声音，比如音乐或其他音频流。
# autoplay [New]	autoplay	如果出现该属性，则音频在就绪后马上播放。
# controls [New]	controls	如果出现该属性，则向用户显示音频控件（比如播放/暂停按钮）。
# loop [New]	loop	如果出现该属性，则每当音频结束时重新开始播放。
# muted [New]	muted	如果出现该属性，则音频输出为静音。
# preload [New]	
规定当网页加载时，音频是否默认被加载以及如何被加载。
auto - 当页面加载后载入整个音频
meta - 当页面加载后只载入元数据
none - 当页面加载后不载入音频
## src [New]	URL	规定音频文件的 URL。
## <source> [New]	定义media元素 (<video> 和 <audio>)的媒体资源。
# src [New]	URL	规定媒体文件的 URL。
# type [New]	MIME_type	规定媒体资源的 MIME 类型。
## <track> [New]	为媒体(<video> 和 <audio>)元素定义外部文本轨道。
## <video> [New]	定义一个音频或者视频
# poster 视频开始前显示图像

HTML 音频/视频 方法
方法	描述
addTextTrack()	向音频/视频添加新的文本轨道。
canPlayType()	检测浏览器是否能播放指定的音频/视频类型。
load()	重新加载音频/视频元素。
play()	开始播放音频/视频。
pause()	暂停当前播放的音频/视频。
HTML 音频/视频属性
属性	描述
audioTracks	返回表示可用音频轨道的 AudioTrackList 对象。
autoplay	设置或返回是否在加载完成后随即播放音频/视频。
buffered	返回表示音频/视频已缓冲部分的 TimeRanges 对象。
controller	返回表示音频/视频当前媒体控制器的 MediaController 对象。
controls	设置或返回音频/视频是否显示控件（比如播放/暂停等）。
crossOrigin	设置或返回音频/视频的 CORS 设置。
currentSrc	返回当前音频/视频的 URL。
currentTime	设置或返回音频/视频中的当前播放位置（以秒计）。
defaultMuted	设置或返回音频/视频默认是否静音。
defaultPlaybackRate	设置或返回音频/视频的默认播放速度。
duration	返回当前音频/视频的长度（以秒计）。
ended	返回音频/视频的播放是否已结束。
error	返回表示音频/视频错误状态的 MediaError 对象。
loop	设置或返回音频/视频是否应在结束时重新播放。
mediaGroup	设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）。
muted	设置或返回音频/视频是否静音。
networkState	返回音频/视频的当前网络状态。
paused	设置或返回音频/视频是否暂停。
playbackRate	设置或返回音频/视频播放的速度。
played	返回表示音频/视频已播放部分的 TimeRanges 对象。
preload	设置或返回音频/视频是否应该在页面加载后进行加载。
readyState	返回音频/视频当前的就绪状态。
seekable	返回表示音频/视频可寻址部分的 TimeRanges 对象。
seeking	返回用户是否正在音频/视频中进行查找。
src	设置或返回音频/视频元素的当前来源。
startDate	返回表示当前时间偏移的 Date 对象。
textTracks	返回表示可用文本轨道的 TextTrackList 对象。
videoTracks	返回表示可用视频轨道的 VideoTrackList 对象。
volume	设置或返回音频/视频的音量。
HTML 音频/视频事件
事件	描述
abort	当音频/视频的加载已放弃时触发。
canplay	当浏览器可以开始播放音频/视频时触发。
canplaythrough	当浏览器可在不因缓冲而停顿的情况下进行播放时触发。
durationchange	当音频/视频的时长已更改时触发。
emptied	当目前的播放列表为空时触发。
ended	当目前的播放列表已结束时触发。
error	当在音频/视频加载期间发生错误时触发。
loadeddata	当浏览器已加载音频/视频的当前帧时触发。
loadedmetadata	当浏览器已加载音频/视频的元数据时触发。
loadstart	当浏览器开始查找音频/视频时触发。
pause	当音频/视频已暂停时触发。
play	当音频/视频已开始或不再暂停时触发。
playing	当音频/视频在因缓冲而暂停或停止后已就绪时触发。
progress	当浏览器正在下载音频/视频时触发。
ratechange	当音频/视频的播放速度已更改时触发。
seeked	当用户已移动/跳跃到音频/视频中的新位置时触发。
seeking	当用户开始移动/跳跃到音频/视频中的新位置时触发。
stalled	当浏览器尝试获取媒体数据，但数据不可用时触发。
suspend	当浏览器刻意不获取媒体数据时触发。
timeupdate	当目前的播放位置已更改时触发。
volumechange	当音量已更改时触发。
waiting	当视频由于需要缓冲下一帧而停止时触发。