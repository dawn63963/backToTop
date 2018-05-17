// Back to top package
;
(function(){
	var timer = null;
    var isTop = true;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;//页面可视区域高度

	function BackToTop(selector) {
		this.elem = document.getElementById(selector);

		this.init();
	};

	BackToTop.prototype = {
		constructor : BackToTop,

		init: function() {
			var self = this;

			window.onscroll = function(){
				var osTop = document.documentElement.scrollTop || document.body.scrollTop;
	            if(osTop >= clientHeight){//判断是否隐藏还是显示
	                self.elem.style.display = "block";
	            }else{
	                self.elem.style.display = "none";
	            };
	            if(!isTop){
	                clearInterval(timer);
	            }
	            isTop = false;
			};

			

			this.elem.addEventListener("click", clickBtn, false);

			function clickBtn() {
				timer = setInterval(function(){
                    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    var ispeed = Math.floor(-osTop/5);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

                    isTop = true;
                    console.log(osTop = ispeed);
                    if(osTop == 0){
                        clearInterval(timer);
                    };
                },30);
			};
		}
	};

	window.BackToTop = BackToTop;
})();

