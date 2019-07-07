;(function($){
	
	var fnName = 'audioPlay';
	var config = {

		view : ".audio-view",
		
		title : ".audio-title",

		name : ".audio-name",

		cover : ".audio-cover",

		autoPlay : false,

		volume : {

			volumeView : ".audio-set-volume",
			volumeBox : ".volume-box",
		},

		timeView : {

			thisTime : ".audio-this-time",

			countTime : '.audio-count-time',
		},

		setbacks : {

			setbacks : '.audio-setbacks',

			thisSetbacks : '.audio-this-setbacks',

			cacheSetbacks : ".audio-cache-setbacks",

			volumeSetbacks : ".volume-box > i",

			volumeCircular : ".volume-box > i span"
		},
			
		button : {

			volume : ".audio-volume",

			backs : ".audio-backs-btn",

			prev : ".audio-prev",

			play : ".audio-play",

			next : ".audio-next",

			menu : ".audio-menu",

			menuClose : ".menu-close"
		},

		menu : {

			menuView : '.audio-list',

			colse : '.close',

			list : '.m_list'
		},

		song : null
	};

	var songEq = 0,
		volumeSize = 0.9;

	window[fnName] = function(setConfig){

		//璁剧疆灞炴€у€�
		if(typeof(setConfig) == "object"){

			for( var n in setConfig){

				config[n] = setConfig[n];
			}
		}

		var _this = config,
			playDate;

		var cover = $(_this.cover),
			title = $(_this.title),
			thisTime = $(_this.timeView.thisTime),
			countTime = $(_this.timeView.countTime),
			thisSetbacks = $(_this.setbacks.thisSetbacks),
			cacheSetbacks = $(_this.setbacks.cacheSetbacks),
			setbacks = $(_this.setbacks.setbacks),
			volumeCircular = $(_this.setbacks.volumeCircular),
			volumeSetbacks = $(_this.setbacks.volumeSetbacks),
			volumeBox = $(_this.volume.volumeBox),
			play = $(_this.button.play),
			prev = $(_this.button.prev),
			next = $(_this.button.next),
			menuBtn = $(_this.button.menu),
			volume = $(_this.button.volume),
			menuClose = $(_this.button.menuClose),
			backs = $(_this.button.backs);

		_this.createAudio = function(){

			if(!_this.audio){

				_this.audio = new Audio();
			}

			var song = config.song;
			if(!song){
				return false;
			}

			_this.stopAudio();
			_this.audio.src = song[songEq].src;
			
			_this.volumeSet();

			title.text(song[songEq].title+" - "+song[songEq].name || '哦哦---->您的音乐掉线了');
			cover.css({
				'backgroundImage' : 'url('+(song[songEq].cover || '')+')'
			});

			function setDuration(){

				if(isNaN(_this.audio.duration)){

					setTimeout(setDuration,50);
				}else{

					countTime.text(_this.conversion(_this.audio.duration));
				}
			}
			setDuration(_this.audio.duration);
			
			thisTime.text(_this.conversion(_this.audio.currentTime));

			_this.audio.onended = function(){

				setTimeout(function(){

					++songEq;
					songEq = (songEq < _this.song.length) ? songEq : 0;
					_this.selectMenu(songEq,true);
				},1000);
			}

		}

		var timeAudio;
		_this.playAudio = function(){

			if(_this.audio){
				
				if(!playDate || (Date.now() - playDate) > 100){

					playDate = Date.now();

					(!_this.audio.paused) || _this.audio.pause();

					_this.audio.play();
					play.addClass('audio-stop').one('click',function(){
						$(this).find("i").empty();
						$(this).find("i").append("&#xe652;");
						_this.stopAudio();
						$(this).removeClass('audio-stop').one('click',function(){
							$(this).find("i").empty();
							$(this).find("i").append("&#xe651;");
							_this.playAudio();
						});
					});
					
					timeAudio = setInterval(function(){

						if(_this.audio.readyState == 4){

							cacheSetbacks.css({
								'width' : (_this.audio.buffered.end(0) / _this.audio.duration)*100+"%"
							});
						}
						
						thisSetbacks.css({
							'width' : (_this.audio.currentTime / _this.audio.duration)*100+"%"
						});

						thisTime.text(_this.conversion(_this.audio.currentTime));
					},500);
				}else{

					setTimeout(function(){

						_this.playAudio();
					},50);
				}			
			}
		}

		_this.stopAudio = function(){

			//开始删除图片的旋转样式
			if(!playDate || (Date.now() - playDate) > 100){
	
				playDate = Date.now();
				_this.audio.pause();
				clearInterval(timeAudio);
			}else{
				
				setTimeout(function(){

					_this.stopAudio();
				},50);
			}		
		}

		_this.conversion = function(num){

			function changInt(num){

				return (num < 10) ? '0'+num : num;
			}

			return changInt(parseInt(num/60))+":"+ changInt(Math.floor(num%60));
		}
		//加载数据
		_this.upMenu = function(){

			var song = _this.song,
				inline = $(_this.menu.list);

			for(var i in song){

				inline.append("<tr>"+
			"				      <td><img src='"+song[i].cover+"' alt='歌手头像' width='30' height='30'></td>"+
			"				      <td>"+song[i].title+"</td>"+
			"				      <td>"+song[i].name+"</td>"+
			"				      <td>"+song[i].zhuanji+"</td>"+
			"				      <td>"+
			"				      	<button class='layui-btn layui-btn-primary layui-btn-radius layui-btn-mini'><i class='layui-icon' style='font-size: 20px; '>&#xe6c6;</i>  </button>"+
			"				      	<button class='layui-btn layui-btn-primary layui-btn-radius layui-btn-mini'><i class='layui-icon' style='font-size: 20px; '>&#xe600;</i>  </button>"+
			"				      	<button class='layui-btn layui-btn-primary layui-btn-radius layui-btn-mini'><i class='layui-icon' style='font-size: 20px; '>&#xe65f;</i>  </button>"+
			"				      </td>"+
			"					</tr>");
			}

			inline.find("tr").unbind('click').on('click',function(){
				_this.selectMenu($(this).index(),true);
			});
		}

		_this.selectMenu = function(num,_bool){
			songEq = num;
			_this.createAudio();
			(_bool) && _this.playAudio();
		}
		//控制开始的音乐声音大小
		_this.volumeSet = function(){

			_this.audio.volume = volumeSize;
			volumeSetbacks.css({
				'height' : volumeSize*100 + "%"
			});
		}
		
		//一首新歌
		_this.newSong = function(_new,_bool){

			if( typeof(_new) == 'object' ){

				if(_new.src){

					if(_this.song){

						_this.song.push(_new);
					}else{

						_this.song = [_new];
					}
					
					_this.upMenu();
					(_bool) && _this.selectMenu(_this.song.length-1,true);
				}else{

					alert('没有这首歌的播放路径');
				}
			}else{

				alert('无法获取数据');
			}
		}

		//发大声音和缩小声音
		var volumeTime;
		volumeBox.on('mousedown',function(){
			if(_this.audio){
				var Y,EndY = parseInt(volumeBox.css('height')),goY;
				volumeBox.on('mousemove click',function(e){

					clearTimeout(volumeTime);

					Y = (e.clientY-(volumeBox.offset().top-$(document).scrollTop()));
					Y = (Y > 0) ? (Y > EndY) ? EndY : Y : 0;
	
					goY = Y/EndY;
					
					volumeSize = 1 - goY;

					_this.volumeSet();
				});
				
				volumeBox.one('mouseup',function(){

					volumeBox.unbind('mousemove');
				}).on('mouseout',function(){

					volumeTime = setTimeout(function(){

						volumeBox.unbind('mousemove');
					},500);
				});
			}
		});
		
		//音乐快进和后退
		setbacks.on('mousedown',function(){

			if(_this.audio){
				var X,EndX = parseInt(setbacks.css('width')),goX,mouseTime;
				setbacks.on('mousemove click',function(e){

					_this.stopAudio();
					clearTimeout(mouseTime);

					X = (e.clientX-setbacks.offset().left);
					X = (X > 0) ? (X > EndX) ? EndX : X : 0;
					
					goX = X/EndX;
					thisSetbacks.css({
						'width' : goX*100+"%"
					});
					
					_this.audio.currentTime = parseInt(goX*_this.audio.duration);
					thisTime.text(_this.conversion(_this.audio.currentTime));
				});
				
				setbacks.one('mouseup',function(){

					_this.playAudio();
					setbacks.unbind('mousemove');
				}).on('mouseout',function(){

					mouseTime = setTimeout(function(){

						_this.playAudio();
						setbacks.unbind('mousemove');
					},500);
				});
			}
		});
		
		//开始播放
		play.one('click',function(){

			_this.playAudio();
		});
		
		//上一首
		prev.on('click',function(){

			--songEq;
			songEq = (songEq >= 0) ? songEq :  _this.song.length -1;
			_this.selectMenu(songEq,true);
		});
		//下一首
		next.on('click',function(){

			++songEq;
			songEq = (songEq < _this.song.length) ? songEq : 0;
			_this.selectMenu(songEq,true);
		});
		
		//点击声音图标
		volume.on('click',function(){

			$(_this.volume.volumeView).toggleClass('audio-show-volume');
		});

		_this.upMenu();

		_this.selectMenu(songEq,_this.autoPlay);
		
		return _this;
	}
})(jQuery)