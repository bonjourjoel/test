(()=>{"use strict";class e{t(e){let t;for(let e=0;e<3;e++)t+=e;return" =====> "+(e.toString()==t?"toto:":"")}}class t{t(){return(new e).t(21)+" from ext lib..."}}class s{t(){return" & from cordova v"+cordova.version}}class r{constructor(){this.o="",this.i=null}get l(){return this.o}u(){console.log(""),this.i=""}t(){return"Ready "+this.l+(new t).t()+(new s).t()}}(new class{h(){const e=(new r).t();document.getElementById("MSGREADY").innerHTML=e,document.getElementById("deviceready").classList.add("ready")}g(){document.addEventListener("deviceready",this.h,!1)}}).g()})();
