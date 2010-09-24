/**
 * @author jstone
 */

KONtx.element.Image.implement({
	aspectSizeBestFit: function KONtx_element_EnhancedImage_aspectSizeBestFit(width, height, preferredSide) {
		if(preferredSide == "height") {
			scale = height / this.srcHeight;
			if(width > this.srcWidth * scale) {
				this.width = this.srcWidth * scale;
				this.height = height;
			} else {
				scale = width / (this.srcWidth * scale);
				this.width = width;
				this.height = height * scale;
			}	
		} else {
			scale = width / this.srcWidth;
			if (height > this.srcHeight * scale) {
				this.width = width;
				this.height = this.srcHeight * scale;
			}
			else {
				scale = height / (this.srcHeight * scale);
				this.width = width * scale;
				this.height = height;
			}
		}
	},
	
	/**
	@method _adjustOffsetsForBorder
	*/
	_adjustOffsetsForBorder: function KONtx_element_BorderedImage__adjustOffsetsForBorder(width, height) {
		if(this.vOffset < height) {
			this.vOffset = height;
		}
		if(this.hOffset < width) {
			this.hOffset = width;
		}
		
	},
	
	/**
	@method _printErrorInLogsForAlignAndBorders
	*/
	_printErrorInLogsForAlignAndBorders: function KONtx_element_BorderedImage__printErrorInLogsForAlignAndBorders() {
		if(this.vAlign != "top" || this.hAlign != "left") {
			log("\n\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\nIMPORTANT!!\n\nBorders aren't supported when using vAlign/hAlign because the engine \ndoesn't provide proper coordinates when using align other than default. \nPlease align your image manually using vOffset/hOffset instead!\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n\n");
		}
	},
	
	/**
	@method setTopLeftCorner
	*/
	setTopLeftCorner: function KONtx_element_BorderedImage_setTopLeftCorner(imageSrc, width, height, horizontalOverlap, verticalOverlap) {
		horizontalOverlap = horizontalOverlap || 0;
		verticalOverlap = verticalOverlap || 0;
		this._printErrorInLogsForAlignAndBorders();
		this._adjustOffsetsForBorder(width, height);
		if(this.TLC) {
			this.owner.removeChild(this.TLC);
		}
		this.TLC = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'width': width, 'height': height, 'vOffset': this.vOffset-height+verticalOverlap, 'hOffset': this.hOffset-width+horizontalOverlap },
		}).appendTo(this.owner);
	}, 
	
	/**
	@method setTopRightCorner
	*/
	setTopRightCorner: function KONtx_element_BorderedImage_setTopRightCorner(imageSrc, width, height, horizontalOverlap, verticalOverlap) {
		horizontalOverlap = horizontalOverlap || 0;
		verticalOverlap = verticalOverlap || 0;
		this._printErrorInLogsForAlignAndBorders();
		this._adjustOffsetsForBorder(width, height);
		if(this.TRC) {
			this.owner.removeChild(this.TRC);
		}
		this.TRC = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'width': width, 'height': height, 'vOffset': this.vOffset-height+verticalOverlap, 'hOffset': this.hOffset+this.width-horizontalOverlap },
		}).appendTo(this.owner);
	}, 
	
	/**
	@method setBottomLeftCorner
	*/
	setBottomLeftCorner: function KONtx_element_BorderedImage_setBottomLeftCorner(imageSrc, width, height, horizontalOverlap, verticalOverlap) {
		horizontalOverlap = horizontalOverlap || 0;
		verticalOverlap = verticalOverlap || 0;
		this._printErrorInLogsForAlignAndBorders();
		if(this.BLC) {
			this.owner.removeChild(this.BLC);
		}
		this.BLC = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'width': width, 'height': height, 'vOffset': this.vOffset+this.height-verticalOverlap, 'hOffset': this.hOffset-width+horizontalOverlap },
		}).appendTo(this.owner);
	}, 
	
	/**
	@method setBottomRightCorner
	*/
	setBottomRightCorner: function KONtx_element_BorderedImage_setBottomRightCorner(imageSrc, width, height, horizontalOverlap, verticalOverlap) {
		horizontalOverlap = horizontalOverlap || 0;
		verticalOverlap = verticalOverlap || 0;
		this._printErrorInLogsForAlignAndBorders();
		if(this.BRC) {
			this.owner.removeChild(this.BRC);
		}
		this.BRC = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'width': width, 'height': height, 'vOffset': this.vOffset+this.height-verticalOverlap, 'hOffset': this.hOffset+this.width-horizontalOverlap },
		}).appendTo(this.owner);
	}, 
	
	/**
	@method setTopBorder
	*/
	setTopBorder: function KONtx_element_BorderedImage_setTopBorder(imageSrc, height, overlap, leftGap, rightGap) {
		overlap = overlap || 0;
		leftGap = leftGap || 0;
		rightGap = rightGap || 0;
		this._printErrorInLogsForAlignAndBorders();
		this._adjustOffsetsForBorder(0, height);
		if(this.TBr) {
			this.owner.removeChild(this.TBr);
		}
		this.TBr = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'width': this.width-(leftGap+rightGap), 'height': height, 'vOffset': this.vOffset-height+overlap, 'hOffset': this.hOffset+leftGap },
		}).appendTo(this.owner);
	}, 
	
	/**
	@method setRightBorder
	*/
	setRightBorder: function KONtx_element_BorderedImage_setRightBorder(imageSrc, width, overlap, topGap, bottomGap) {
		overlap = overlap || 0;
		topGap = topGap || 0;
		bottomGap = bottomGap || 0;
		this._printErrorInLogsForAlignAndBorders();
		this._adjustOffsetsForBorder(width, 0);
		if(this.RBr) {
			this.owner.removeChild(this.RBr);
		}
		this.RBr = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'width': width, 'height': this.height-(topGap+bottomGap), 'vOffset': this.vOffset+topGap, 'hOffset': this.hOffset+this.width-overlap },
		}).appendTo(this.owner);
	}, 
	
	/**
	@method setBottomBorder
	*/
	setBottomBorder: function KONtx_element_BorderedImage_setBottomBorder(imageSrc, height, overlap, leftGap, rightGap) {
		overlap = overlap || 0;
		leftGap = leftGap || 0;
		rightGap = rightGap || 0;
		this._printErrorInLogsForAlignAndBorders();
		if(this.BBr) {
			this.owner.removeChild(this.BBr);
		}
		this.BBr = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'width': this.width-(leftGap+rightGap), 'height': height, 'vOffset': this.vOffset+this.height-overlap, 'hOffset': this.hOffset+leftGap },
		}).appendTo(this.owner);
	}, 
	
	/**
	@method setLeftBorder
	*/
	setLeftBorder: function KONtx_element_BorderedImage_setLeftBorder(imageSrc, width, overlap, topGap, bottomGap) {
		overlap = overlap || 0;
		topGap = topGap || 0;
		bottomGap = bottomGap || 0;
		this._printErrorInLogsForAlignAndBorders();
		this._adjustOffsetsForBorder(width, 0);
		if(this.LBr) {
			this.owner.removeChild(this.LBr);
		}
		this.LBr = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'width': width, 'height': this.height-(topGap+bottomGap), 'vOffset': this.vOffset+topGap, 'hOffset': this.hOffset-width+overlap },
		}).appendTo(this.owner);
	},
	
	/**
	@method setTopOverlay
	*/
	setTopOverlay: function KONtx_element_BorderedImage_setTopOverlay(imageSrc) {
		if(this.TOv) {
			this.owner.removeChild(this.TOv);
		}
		new KONtx.element.Image({
			src: imageSrc,
		}).appendTo(this.TOv = new KONtx.element.Container({ 
				styles: {
					'vOffset': this.vOffset,
					'hOffset': this.hOffset,
					'width': this.width,
					'height': this.height
				},
			}).appendTo(this.owner));
	}, 
	
	/**
	@method setBottomOverlay
	*/
	setBottomOverlay: function KONtx_element_BorderedImage_setBottomOverlay(imageSrc) {
		if(this.BOv) {
			this.owner.removeChild(this.BOv);
		}
		this.BOv = new KONtx.element.Image({
			src: imageSrc,
			styles: { 'vOffset': this.vOffset+this.height, 'hOffset': this.hOffset, 'width': this.width},
			events: {
				'onLoaded': function(){
					this.vOffset = this.vOffset - this.srcHeight;
				},
			},
		}).appendTo(this.owner);
	},
});