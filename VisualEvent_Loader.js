(function(a,b)
  {typeof VisualEvent_Loader=="undefined"
   &&
   (a.VisualEvent_Loader=function()
    {if(!this instanceof VisualEvent_Loader)
        {alert("VisualEvent loader warning: Must be initialised with the 'new' keyword.");
        return}

    this.s={loadingComplete:!1},
    this.dom={loading:b.createElement("div")},
    this._construct()},
    VisualEvent_Loader.prototype={_construct:function()
      {var c=this,d,e,f=a.location.protocol==="file:"?"http:":"";
      if(this.s.loadingComplete===!0)return 0;
        d=this.dom.loading,d.setAttribute("id","EventLoading"),
        d.appendChild(b.createTextNode("Loading Visual Event...")),
        e=d.style,e.position="fixed",e.bottom="0",e.left="0",e.color="white",e.padding="5px 10px",e.fontSize="11px",e.fontFamily='
        "Lucida Grande", Verdana, Arial, Helvetica, sans-serif',e.zIndex="55999",
        e.backgroundColor="#93a8cf",b.body.insertBefore(d,b.body.childNodes[0]),
        VisualEvent_Loader.jQueryPreLoaded=typeof jQuery=="undefined"?!1:!0;
          if(typeof VisualEvent=="object")
            {this._pollReady(); return}
            setTimeout(function(){c._pollReady()},1e3),
            this._loadFile(f+"//sprymedia.co.uk/VisualEvent/builds/VisualEvent-1398853496/css/VisualEvent.css","css"),
            typeof jQuery=="undefined"?
            this._loadFile(f+"//sprymedia.co.uk/VisualEvent/builds/VisualEvent-1398853496/js/VisualEvent-jQuery.js","js"):
            this._loadFile(f+"//sprymedia.co.uk/VisualEvent/builds/VisualEvent-1398853496/js/VisualEvent.js","js")},
            _loadFile:function(a,c)
              {var d,e;c=="css"?
                (d=b.createElement("link"),d.type="text/css",d.rel="stylesheet",
                  d.href=a,
                  d.media="screen",
                  b.getElementsByTagName("head")[0].appendChild(d)):c=="image"?
                    (e=new Image(1,1),e.src=a):
                    (d=b.createElement("script"),
                    d.setAttribute("language","JavaScript"),
                    d.setAttribute("src",a),
                    d.setAttribute("charset","utf8"),
                    b.body.appendChild(d))},
                    _pollReady:function()
                        {var a=this,b;typeof VisualEvent=="function"&&typeof VisualEventSyntaxHighlighter=="object"?this._complete():
                        setTimeout (function(){a._pollReady()},100)},
                        _complete:function()
                          {var a=this;this.s.loadingComplete=!0,
                                c=new VisualEvent,
                                b.body.removeChild(this.dom.loading)}},
                          VisualEvent_Loader.jQueryPreLoaded=!1);
                          var c;typeof VisualEvent!="undefined"?VisualEvent.instance!==null?VisualEvent.close():c=new VisualEvent:c=new VisualEvent_Loader}
                    )
                    (window,document);
