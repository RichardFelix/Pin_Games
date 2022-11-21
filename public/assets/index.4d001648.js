var oe=Object.defineProperty;var ne=(n,o,t)=>o in n?oe(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t;var r=(n,o,t)=>(ne(n,typeof o!="symbol"?o+"":o,t),t),re=(n,o,t)=>{if(!o.has(n))throw TypeError("Cannot "+t)};var i=(n,o,t)=>{if(o.has(n))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(n):o.set(n,t)};var s=(n,o,t)=>(re(n,o,"access private method"),t);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();const mt=`button{display:flex;justify-content:center;align-items:center;position:fixed;bottom:10px;right:10px;border-radius:100px;width:100px;height:100px;background-color:#304fad;cursor:pointer;box-shadow:5px 5px 5px #000;border:none;transition:.5s ease all}button img{height:100%}.filterBtn img,.saveJsonBtn img,.searchBtn img{height:50%}.saveJsonDataOpen{bottom:385px}.filterGamesOpen,.activeMenuBtn{bottom:135px}.searchGamesOpen{bottom:260px}h1{display:flex;justify-content:center;align-content:center;position:fixed;left:50%;right:50%;transform:translate(-50%,-50%);bottom:70vh;color:#fff;width:80vw;text-shadow:5px 5px black;font-size:3em}.addNewGameNoData{left:50%;right:50%;transform:translate(-50%,-50%);bottom:50vh}.activeMenuBtn{background-color:#639}.hide{display:none}
`;var b,ut,y,pt;class le extends HTMLElement{constructor(){super();i(this,b);i(this,y);r(this,"_shadow",this.attachShadow({mode:"open"}));r(this,"data",DATA.dataJson);r(this,"customModal_parent",document.querySelector("custom-modal"))}connectedCallback(){s(this,y,pt).call(this)}}b=new WeakSet,ut=function(){this.filterBtn.classList.add("filterGamesOpen"),this.saveJsonBtn.classList.add("saveJsonDataOpen"),this.searchBtn.classList.add("searchGamesOpen"),this.hamburgerBtn.classList.add("hide")},y=new WeakSet,pt=function(){if(this.data.length>0){let t=`
          <style>
              ${mt}
          </style>
  
          <button id="saveJsonBtn" class="saveJsonBtn"> 
              <img
              src="img/saveJsonBtn.png"
              alt="Backup Data Image"
              title="Backup Data"
              />
          </button>
      
          <button id="searchBtn" class="searchBtn">
              <img src="img/search.png" alt="Search Games" title="Search Games" />
          </button>
      
          <button id="filterBtn" class="filterBtn">
              <img src="img/sortBtn.png" alt="Filter Games" title="Filter Games" />
          </button>
      
          <button id="addNewBtn" class="addNewBtn">
              <img src="img/new_game.png" alt="Add a New Game" title="Add a New Game" />
          </button>
      
          <button id="hamburgerBtn" class="hamburgerBtn">
              <img src="img/hamburgerBtn.png" alt="Open Menu" title="Open Menu" />
          </button>
        `;this._shadow.innerHTML=`

            ${t}
      `,this.hamburgerBtn=this.shadowRoot.getElementById("hamburgerBtn"),this.saveJsonBtn=this.shadowRoot.getElementById("saveJsonBtn"),this.searchBtn=this.shadowRoot.getElementById("searchBtn"),this.filterBtn=this.shadowRoot.getElementById("filterBtn"),this.addNewBtn=this.shadowRoot.getElementById("addNewBtn"),this.hamburgerBtn.onclick=()=>s(this,b,ut).call(this),this.saveJsonBtn.onclick=()=>{this.customModal_parent.setAttribute("open","saveData")},this.filterBtn.onclick=()=>{this.customModal_parent.setAttribute("open","filter")},this.searchBtn.onclick=()=>{this.customModal_parent.setAttribute("open","search")},this.addNewBtn.onclick=()=>{this.customModal_parent.setAttribute("open","addGame")}}else{let t=`
          <h1>Add Some Games</h1>
          <button id="addNewGameNoData" class="addNewGameNoData">
              <img src="img/new_game.png" alt="Add a New Game" title="Add a New Game" />
          </button>
        `;this._shadow.innerHTML=`
          <style>
              ${mt}
          </style>

          ${t}
        `,this.addNewGameNoData=this.shadowRoot.getElementById("addNewGameNoData"),this.addNewGameNoData.onclick=()=>{this.customModal_parent.setAttribute("open","addGame")}}};const he=`:host([open]){display:flex;justify-content:center;flex-direction:column}.gamesDiv{display:flex;flex-wrap:wrap;justify-content:center}.header{color:#fff;background-color:#789;text-align:center;box-shadow:5px 5px 5px #000;text-shadow:2px 3px black;padding:5px}
`;var x,ft;class gt extends HTMLElement{constructor(){super();i(this,x);r(this,"_shadow",this.attachShadow({mode:"open"}));r(this,"gamesArr",[DATA.installedArr,DATA.playLaterArr,DATA.wishlistArr]);r(this,"headerArr",["Installed","Play Later","Wishlist"]);r(this,"customModal",document.querySelector("custom-modal"))}connectedCallback(){s(this,x,ft).call(this)}attributeChangedCallback(t,e,a){}static get observedAttributes(){return["open"]}}x=new WeakSet,ft=function(){let t="",e=0;this.gamesArr.forEach(a=>{if(a.length>0){let l="",c="";a.forEach(v=>{l+=`
                <game-card 
                    id="${v.name}"
                    name="${v.name}"
                    imageLocation="${v.imageLocation}"
                    platform="${v.platform}"
                >
                </game-card>`}),c=`
            <section>
                <h1 id="header" class="header">
                    ${this.headerArr[e]}
                </h1>
                <div id="gamesDiv" class="gamesDiv">
                    ${l}
                </div>
            </section>
            `,t+=c}e++}),this._shadow.innerHTML=`
          <style>
            ${he}
          </style>

          ${t}
        `};const de=`:host([hide]){display:none}.gameImage{width:300px;height:150px;max-width:100%;cursor:pointer;border-radius:20px;margin:5px}.gameImage:hover{box-shadow:2px 4px 10px 4px #fff}
`;var w,Bt,L,vt;class ce extends gt{constructor(){super();i(this,w);i(this,L)}connectedCallback(){s(this,L,vt).call(this)}attributeChangedCallback(t,e,a){}static get observedAttributes(){return["hide"]}}w=new WeakSet,Bt=function(){let t=this.getAttribute("id");this.customModal.setAttribute("open","editGame"),this.customModal.setAttribute("name",`${t}`)},L=new WeakSet,vt=function(){let t=this.getAttribute("name"),e=this.getAttribute("imageLocation"),a=this.getAttribute("platform");this._shadow.innerHTML=`
        <style>
            ${de}
        </style>
        
        <img
          class="gameImage"
          src='${e}'
          alt='${t}'
          title='${a}'
        ></img>
      `,this.gameImage=this.shadowRoot.querySelector(".gameImage"),this.gameImage.onclick=()=>s(this,w,Bt).call(this)};const me=`:host{--backdrop-bg: #000000cc;--modal-bg: #789;--closeBtn-bg: #304fad}:host([open]) .backdrop,:host([open]) .modal{display:block}.backdrop{width:100vw;height:100vh;position:fixed;top:0;left:0;background-color:var(--backdrop-bg, #000);display:none}.modal{width:300px;position:fixed;top:45vh;left:50%;right:50%;transform:translate(-50%,-50%);border:1px #333 solid;background-color:var(--modal-bg);box-shadow:5px 5px 5px #000;border-radius:10px;display:none}.closeBtn{display:flex;justify-content:center;align-content:center;position:fixed;top:-20px;right:-15px;border-radius:35px;width:35px;height:35px;background-color:var(--closeBtn-bg);cursor:pointer;box-shadow:5px 5px 5px #000;border:none}.closeBtnImg{transform:rotate(45deg);height:100%}
`,ue=`:host{display:none;text-align:center;flex-direction:column;justify-content:center;--greenBtn-bg: #008000;--blueBtn-bg: #304fad;--redBtn-bg: #ff0000;--font-color: #fff}.header{color:var(--font-color);font-size:1.3em;margin:15px 0 10px;text-shadow:2px 3px black}label{color:var(--font-color);margin:10px}select,datalist{width:85%;align-self:center}button{border:none;color:var(--font-color);padding:10px;font-size:14px;cursor:pointer;border-radius:20px;width:50%}.greenBtn{background-color:var(--greenBtn-bg);margin:25px auto 10px}.blueBtn{background-color:var(--blueBtn-bg);margin:10px auto}.redBtn{background-color:var(--redBtn-bg)}.error{border:red 4px solid}form{display:flex;flex-direction:column}.hide{display:none}
`;var h,d,I,bt,A,yt;class u extends HTMLElement{constructor(){super();i(this,h);i(this,I);i(this,A);r(this,"_shadow",this.attachShadow({mode:"open"}));r(this,"gameCard_parent",document.querySelector("game-section").shadowRoot);r(this,"menuBtns_parent",document.querySelector("menu-btns").shadowRoot);r(this,"saveMenuBtn_parent",this.menuBtns_parent.getElementById("saveJsonBtn"));r(this,"searchMenuBtn_parent",this.menuBtns_parent.getElementById("searchBtn"));r(this,"filterMenuBtn_parent",this.menuBtns_parent.getElementById("filterBtn"));r(this,"addNewGameBtn_parent",this.menuBtns_parent.getElementById("addNewBtn"));r(this,"hamburgerMenuBtn_parent",this.menuBtns_parent.getElementById("hamburgerBtn"));r(this,"data",DATA.dataJson);r(this,"gameImageCount",this.data.length);r(this,"platforms",DATA.PLATFORMS);r(this,"category",DATA.CATEGORY);r(this,"commonStyles",`${ue}`)}connectedCallback(){s(this,A,yt).call(this)}attributeChangedCallback(t,e,a){if(e!==a){if(t==="open")switch(this.filterGames.removeAttribute("open"),this.searchGames.removeAttribute("open"),this.saveData.removeAttribute("open"),this.editGame.removeAttribute("open"),this.addGame.removeAttribute("open"),a){case"filter":this.filterGames.setAttribute("open","");break;case"search":this.searchGames.setAttribute("open","");break;case"saveData":this.saveData.setAttribute("open","");break;case"editGame":this.editGame.setAttribute("open","");break;case"addGame":this.addGame.setAttribute("open","");break}t==="close"&&s(this,h,d).call(this),t==="name"&&a!==null&&this.editGame.setAttribute("name",this.getAttribute("name"))}}static get observedAttributes(){return["open","name","close"]}}h=new WeakSet,d=function(){this.hasAttribute("open")&&this.removeAttribute("open"),this.hasAttribute("name")&&this.removeAttribute("name"),this.editGame.hasAttribute("name")&&this.editGame.removeAttribute("name"),s(this,I,bt).call(this)},I=new WeakSet,bt=function(){this.gameImageCount!==0&&(this.filterMenuBtn_parent.classList.contains("activeMenuBtn")===!0?this.searchMenuBtn_parent.classList.remove("searchGamesOpen"):(this.filterMenuBtn_parent.classList.remove("filterGamesOpen"),this.searchMenuBtn_parent.classList.remove("searchGamesOpen")),this.saveMenuBtn_parent.classList.remove("saveJsonDataOpen"),this.hamburgerMenuBtn_parent.classList.remove("hide"))},A=new WeakSet,yt=function(){this._shadow.innerHTML=`
        <style>
            ${me}
        </style>
  
        <div id="backdrop" class="backdrop"></div>
        <div class="modal">
          <button id="closeBtn" class="closeBtn">
            <img class="closeBtnImg" src="img/new_game.png" alt="Close Form" />
          </button>
          <filter-games></filter-games>
          <search-games></search-games>
          <save-data></save-data>
          <edit-game></edit-game>
          <add-game></add-game>
        </div>
      `;let t=this.shadowRoot.querySelector("#closeBtn"),e=this.shadowRoot.querySelector("#backdrop");this.editGame=this.shadowRoot.querySelector("edit-game"),this.filterGames=this.shadowRoot.querySelector("filter-games"),this.searchGames=this.shadowRoot.querySelector("search-games"),this.saveData=this.shadowRoot.querySelector("save-data"),this.addGame=this.shadowRoot.querySelector("add-game"),t.onclick=()=>s(this,h,d).call(this),e.onclick=()=>s(this,h,d).call(this),document.onkeydown=a=>{let l=document.querySelector("custom-modal");a.key=="Escape"&&(l.hasAttribute("close")?l.removeAttribute("close"):l.setAttribute("close",""))},this.filterGames.addEventListener("closeModal",()=>s(this,h,d).call(this)),this.searchGames.addEventListener("closeModal",()=>s(this,h,d).call(this)),this.saveData.addEventListener("closeModal",()=>s(this,h,d).call(this)),this.editGame.addEventListener("closeModal",()=>s(this,h,d).call(this)),this.addGame.addEventListener("closeModal",()=>s(this,h,d).call(this))};const pe=`:host([open]){display:flex}input{margin:10px}
`;var g,ht,S,xt,T,wt,E,Lt,k,It;class ge extends u{constructor(){super();i(this,g);i(this,S);i(this,T);i(this,E);i(this,k)}connectedCallback(){s(this,k,It).call(this)}attributeChangedCallback(t,e,a){e!==a&&t==="open"&&(this.datalistInput.value="",this.datalistInput.focus(),this.datalistInput.classList.remove("error"))}static get observedAttributes(){return["open"]}}g=new WeakSet,ht=function(){const t=new Event("closeModal");this.dispatchEvent(t)},S=new WeakSet,xt=function(t){t.preventDefault();let e=this.data.filter(a=>a.name.toLowerCase().includes(this.datalistInput.value.toLowerCase()));if(e.length>0&&this.datalistInput.value.length>0){for(let a=0;a<this.gameImageCount;a++)this.gameCard_parent.querySelectorAll("game-card")[a].setAttribute("hide","");e.forEach(a=>{this.gameCard_parent.getElementById(`${a.name}`).removeAttribute("hide")}),this.searchMenuBtn_parent.classList.add("searchGamesOpen"),this.searchMenuBtn_parent.classList.add("activeMenuBtn"),this.filterMenuBtn_parent.classList.remove("activeMenuBtn"),this.clearSearchBtn.removeAttribute("disabled"),s(this,g,ht).call(this)}else this.datalistInput.classList.add("error")},T=new WeakSet,wt=function(t){t.preventDefault();for(let e=0;e<this.gameImageCount;e++)this.gameCard_parent.querySelectorAll("game-card")[e].removeAttribute("hide");s(this,g,ht).call(this),this.searchMenuBtn_parent.classList.remove("activeMenuBtn"),this.clearSearchBtn.setAttribute("disabled","true")},E=new WeakSet,Lt=function(){this.datalistInput.classList.remove("error")},k=new WeakSet,It=function(){this._shadow.innerHTML=`
        <style>    
            ${this.commonStyles}
            ${pe}
        </style>

       <form method="POST" action="">
          <h2 class="header">Search</h2>
          <label for="datalistInput"> Search for Games </label>
          <input id="datalistInput" list="datalistGames" placeholder="" />
          <datalist id="datalistGames" name="datalist" required></datalist>
          <button id="searchBtn" class="greenBtn" type="submit" value="Filter">
            Search
          </button>
          <button id="clearSearchBtn" class="blueBtn" disabled>Clear Search</button>
        </form>
      `,this.datalistInput=this.shadowRoot.getElementById("datalistInput"),this.datalistGames=this.shadowRoot.getElementById("datalistGames"),this.searchBtn=this.shadowRoot.getElementById("searchBtn"),this.clearSearchBtn=this.shadowRoot.getElementById("clearSearchBtn"),this.data.forEach(t=>{this.datalistGames.innerHTML+=`<option value="${t.name}"> ${t.name}</option>`}),this.datalistInput.onkeydown=t=>s(this,E,Lt).call(this,t),this.clearSearchBtn.onclick=t=>s(this,T,wt).call(this,t),this.searchBtn.onclick=t=>s(this,S,xt).call(this,t)};const fe=`:host([open]){display:flex}
`;var f,dt,G,At,M,St,C,Tt,D,Et;class Be extends u{constructor(){super();i(this,f);i(this,G);i(this,M);i(this,C);i(this,D)}connectedCallback(){s(this,D,Et).call(this)}attributeChangedCallback(t,e,a){}static get observedAttributes(){return["open"]}}f=new WeakSet,dt=function(){const t=new Event("closeModal");this.dispatchEvent(t)},G=new WeakSet,At=function(t){return new Promise((e,a)=>{let l=this.data.filter(c=>c.platform===t.platformFilter);e(l)}).catch(e=>{console.log(`filterGamesLogic function failed - ${e}`),reject(e)})},M=new WeakSet,St=async function(){let t=await s(this,G,At).call(this,{platformFilter:this.platformsSelectBx.value});for(let e=0;e<this.gameImageCount;e++)this.gameCard_parent.querySelectorAll("game-card")[e].setAttribute("hide","");t.forEach(e=>{this.gameCard_parent.getElementById(`${e.name}`).removeAttribute("hide")}),this.filterMenuBtn_parent.classList.add("filterGamesOpen"),this.filterMenuBtn_parent.classList.add("activeMenuBtn"),this.searchMenuBtn_parent.classList.remove("activeMenuBtn"),this.clearFilterBtn.removeAttribute("disabled"),s(this,f,dt).call(this)},C=new WeakSet,Tt=function(){for(let t=0;t<this.gameImageCount;t++)this.gameCard_parent.querySelectorAll("game-card")[t].removeAttribute("hide");this.filterMenuBtn_parent.classList.remove("activeMenuBtn"),this.clearFilterBtn.setAttribute("disabled","true"),s(this,f,dt).call(this)},D=new WeakSet,Et=function(){this._shadow.innerHTML=`
        <style>    
            ${this.commonStyles}
            ${fe}
        </style>
  
          <h2 class="header">Filter</h2>
          <label for="platformsSelectBx"> Platform </label>
          <select id="platformsSelectBx" name="platform" required></select>
          <button id="filterBtn" class="greenBtn" type="submit">
            Filter
          </button>
          <button id="clearFilterBtn" class="blueBtn" disabled>Clear Filter</button>
        `,this.clearFilterBtn=this.shadowRoot.getElementById("clearFilterBtn"),this.filterBtn=this.shadowRoot.getElementById("filterBtn"),this.platformsSelectBx=this.shadowRoot.getElementById("platformsSelectBx"),this.platforms.forEach(t=>{this.platformsSelectBx.innerHTML+=`<option value="${t}"> ${t}</option>`}),this.filterBtn.onclick=()=>s(this,M,St).call(this),this.clearFilterBtn.onclick=()=>s(this,C,Tt).call(this)};const ve=`:host([open]){display:flex}.pathDiv{display:flex;align-items:center;margin:0 auto}.filePathTxt{background-color:#cdd2d7;border:none;padding:8px}.clearPathBtn{border-radius:5px;padding:8px}
`;var P,kt,R,Gt,F,Mt,$,Ct,_,Dt,N,Pt;class be extends u{constructor(){super();i(this,P);i(this,R);i(this,F);i(this,$);i(this,_);i(this,N)}connectedCallback(){s(this,N,Pt).call(this)}attributeChangedCallback(t,e,a){e!==a&&t==="open"&&(this.filePathTxt.value="",this.pathDiv.classList.remove("error"))}static get observedAttributes(){return["open"]}}P=new WeakSet,kt=function(){const t=new Event("closeModal");this.dispatchEvent(t)},R=new WeakSet,Gt=function(t){t.preventDefault(),this.filePathTxt.value=""},F=new WeakSet,Mt=function(t){t.preventDefault(),this.pathDiv.classList.remove("error"),this.hiddenFileInput.click()},$=new WeakSet,Ct=function(t){if(t.target.files.length>0){let e=t.target.files[0].path,a=e.substring(0,e.lastIndexOf("\\")+1);this.filePathTxt.value=`${a}`}},_=new WeakSet,Dt=async function(t){if(t.preventDefault(),this.filePathTxt.value.length>0){let e=encodeURI(this.filePathTxt.value);await fetch(`/saveData/${e}`),s(this,P,kt).call(this)}else this.pathDiv.classList.add("error")},N=new WeakSet,Pt=function(){this._shadow.innerHTML=`
        <style>    
            ${this.commonStyles}
            ${ve}
        </style>
  
         <form method="POST" action="">
              <h2 class="header">Backup Data</h2>
              <label for="filePathTxt"> Folder Location </label>
              <div id="pathDiv" class="pathDiv">
                  <input
                  id="filePathTxt"
                  class="filePathTxt"
                  type="text"
                  name="path"
                  readonly="readonly"
                  />
                  <button id="clearPathBtn" class="blueBtn clearPathBtn">Clear</button>
              </div>
              <button id="styledFileBtn" class="blueBtn">Folder Location</button>
              <input
                  id="hiddenFileInput"
                  class="hide"
                  type="file"
                  webkitdirectory="true"
                  directory
              />
              <button id="saveJsonBtn" class="greenBtn" type="submit">Save</button>
          </form>
      `,this.pathDiv=this.shadowRoot.getElementById("pathDiv"),this.filePathTxt=this.shadowRoot.getElementById("filePathTxt"),this.clearPathBtn=this.shadowRoot.getElementById("clearPathBtn"),this.styledFileBtn=this.shadowRoot.getElementById("styledFileBtn"),this.hiddenFileInput=this.shadowRoot.getElementById("hiddenFileInput"),this.saveJsonBtn=this.shadowRoot.getElementById("saveJsonBtn"),this.clearPathBtn.onclick=t=>s(this,R,Gt).call(this,t),this.styledFileBtn.onclick=t=>s(this,F,Mt).call(this,t),this.hiddenFileInput.onchange=t=>s(this,$,Ct).call(this,t),this.saveJsonBtn.onclick=t=>s(this,_,Dt).call(this,t)};const ye=`:host([open]){display:flex}.nameTxt{width:85%;align-self:center}.pathDiv{display:flex;align-items:center;margin:0 auto}.filePathLbl{margin:15px 0 0}.filePathTxt{background-color:#cdd2d7;border:none;padding:8px 20px}.clearPathBtn{border-radius:5px;padding:8px}.submitBtns{display:flex;justify-content:center;align-items:center;width:90%;margin:20px auto}.deleteBtn,.updateBtn{margin:10px}.updateBtn{margin:auto}
`;var O,Ft,H,$t,q,_t,J,Nt,j,Ot,U,Ht,z,qt,B,ct,V,Jt,K,jt;class Rt extends u{constructor(){super();i(this,O);i(this,H);i(this,q);i(this,J);i(this,j);i(this,U);i(this,z);i(this,B);i(this,V);i(this,K)}connectedCallback(){s(this,K,jt).call(this)}attributeChangedCallback(t,e,a){e!==a&&(t==="open"&&(s(this,B,ct).call(this),this.nameTxt.classList.remove("error"),this.nameTxt.focus()),t==="name"&&a!==null&&s(this,z,qt).call(this,a))}static get observedAttributes(){return["open","name"]}}O=new WeakSet,Ft=function(){const t=new Event("closeModal");this.dispatchEvent(t)},H=new WeakSet,$t=function(t){t.preventDefault(),this.filePathTxt.value=""},q=new WeakSet,_t=function(t){t.preventDefault(),this.hiddenFileInput.click()},J=new WeakSet,Nt=function(t){t.target.files.length>0&&(this.filePathTxt.value=`${t.target.files[0].path}`)},j=new WeakSet,Ot=async function(t){if(this.nameTxt.value.length>0){t.preventDefault();const e={name:this.nameTxt.value,platform:this.platformsSelectBx.value,category:this.categorySelectBx.value,path:this.filePathTxt.value};await fetch(`/${this.currentGame._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(()=>{this.currentGame="",window.location.href="/"})}else this.nameTxt.classList.add("error"),this.nameTxt.focus()},U=new WeakSet,Ht=async function(t){t.preventDefault();const e={name:this.nameTxt.value,category:this.categorySelectBx.value};await fetch(`/${this.currentGame._id}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(()=>{this.currentGame="",window.location.href="/"})},z=new WeakSet,qt=function(t){this.currentGame=this.data.filter(e=>e.name.toLowerCase()===t.toLowerCase()),this.currentGame=this.currentGame[0],this.categorySelectBx.value=this.currentGame.category,this.nameTxt.value=this.currentGame.name,this.platformsSelectBx.value=this.currentGame.platform,this.filePathTxt.value="",this.currentGame.path!==void 0&&this.currentGame.path!==""&&(this.filePathTxt.value=this.currentGame.path,this.playGame.setAttribute("open",""),this.playGame.setAttribute("name",`${this.currentGame.name}`),this.playGame.setAttribute("filePath",`${this.filePathTxt.value}`),this.form.classList.add("hide"))},B=new WeakSet,ct=function(){this.form.classList.remove("hide"),this.playGame.removeAttribute("name"),this.playGame.removeAttribute("open"),this.playGame.removeAttribute("filePath")},V=new WeakSet,Jt=function(){s(this,B,ct).call(this)},K=new WeakSet,jt=function(){this._shadow.innerHTML=`
        <style>    
            ${this.commonStyles}
            ${ye}
        </style>
  
        <play-game></play-game>         
        <form method="POST" action="">
           <h2 class="header">Edit Game</h2>
           <label for="nameTxt"> Name </label>
           <input id="nameTxt" class="nameTxt" type="text" name="name" required/>
           <label for="platformsSelectBx"> Platform </label>
           <select id="platformsSelectBx" name="platform" required></select>
           <label for="categorySelectBx"> Category </label>
           <select id="categorySelectBx" name="category" required></select>
           <label for="filePathTxt" class="filePathLbl"> App Location </label>
           <div id="pathDiv" class="pathDiv">
             <input
               id="filePathTxt"
               class="filePathTxt"
               type="text"
               name="path"
               readonly="readonly"
             />
             <button id="clearPathBtn" class="blueBtn clearPathBtn">Clear</button>
           </div>
           <button id="styledFileBtn" class="blueBtn">App Location</button>
           <input
             id="hiddenFileInput"
             class="hide"
             type="file"
           />
           <div id="submitBtns" class="submitBtns">
             <button id="deleteBtn" class="redBtn deleteBtn" type="submit">
               Delete
             </button>
             <button id="updateBtn" class="greenBtn updateBtn" type="submit">
               Update
             </button>
           </div>
         </form>
      `,this.nameTxt=this.shadowRoot.getElementById("nameTxt"),this.platformsSelectBx=this.shadowRoot.getElementById("platformsSelectBx"),this.categorySelectBx=this.shadowRoot.getElementById("categorySelectBx"),this.filePathTxt=this.shadowRoot.getElementById("filePathTxt"),this.clearPathBtn=this.shadowRoot.getElementById("clearPathBtn"),this.styledFileBtn=this.shadowRoot.getElementById("styledFileBtn"),this.hiddenFileInput=this.shadowRoot.getElementById("hiddenFileInput"),this.deleteBtn=this.shadowRoot.getElementById("deleteBtn"),this.updateBtn=this.shadowRoot.getElementById("updateBtn"),this.playGame=this.shadowRoot.querySelector("play-game"),this.form=this.shadowRoot.querySelector("form"),this.category.forEach(t=>{this.categorySelectBx.innerHTML+=`<option value="${t}"> ${t}</option>`}),this.platforms.forEach(t=>{this.platformsSelectBx.innerHTML+=`<option value="${t}"> ${t}</option>`}),this.updateBtn.onclick=t=>s(this,j,Ot).call(this,t),this.deleteBtn.onclick=t=>s(this,U,Ht).call(this,t),this.clearPathBtn.onclick=t=>s(this,H,$t).call(this,t),this.styledFileBtn.onclick=t=>s(this,q,_t).call(this,t),this.hiddenFileInput.onchange=t=>s(this,J,Nt).call(this,t),this.nameTxt.onkeydown=()=>{this.nameTxt.classList.remove("error")},this.playGame.addEventListener("showEditForm",()=>s(this,V,Jt).call(this)),this.playGame.addEventListener("closeModal",()=>s(this,O,Ft).call(this))};const xe=`:host([open]){display:flex;align-items:center}.playBtn{border:none;color:#fff;padding:10px;font-size:14px;cursor:pointer;border-radius:20px;background-color:transparent}
`;var W,Ut,Y,zt,Q,Vt,X,Kt;class we extends Rt{constructor(){super();i(this,W);i(this,Y);i(this,Q);i(this,X)}connectedCallback(){s(this,X,Kt).call(this)}attributeChangedCallback(t,e,a){e!==a&&t==="name"&&(this.shadowRoot.getElementById("header").innerText=a)}static get observedAttributes(){return["open","name"]}}W=new WeakSet,Ut=function(){const t=new Event("closeModal");this.dispatchEvent(t)},Y=new WeakSet,zt=function(){const t=new Event("showEditForm");this.dispatchEvent(t)},Q=new WeakSet,Vt=async function(){const t=this.getAttribute("filePath");let e=encodeURI(t);await fetch(`/openPath/${e}`),s(this,W,Ut).call(this)},X=new WeakSet,Kt=function(){this._shadow.innerHTML=`
        <style>    
            ${this.commonStyles}
            ${xe}
        </style>
        
          <header id="header" class="header"></header>
          <button id="playBtn" class="playBtn">
          <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 58 58"
              style="enable-background: new 0 0 58 58"
              xml:space="preserve"
          >
              <circle style="fill: #ebba16" cx="29" cy="29" r="29"></circle>
              <g>
              <polygon
                  style="fill: #ffffff"
                  points="44,29 22,44 22,29.273 22,14  "
              ></polygon>
              <path
                  style="fill: #ffffff"
                  d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14   c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826   l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"
              ></path>
              </g>
              <style xmlns="" data-source="base" class="dblt-ykjmwcnxmi"></style>
              <style
              xmlns=""
              data-source="stylesheet-processor"
              class="dblt-ykjmwcnxmi"
              ></style>
          </svg>
          </button>
          <button id="editBtn" class="blueBtn">
          Edit
          </button>
      `,this.playBtn=this.shadowRoot.getElementById("playBtn"),this.editBtn=this.shadowRoot.getElementById("editBtn"),this.playBtn.onclick=()=>s(this,Q,Vt).call(this),this.editBtn.onclick=()=>s(this,Y,zt).call(this)};const Le=`:host([open]){display:flex;align-items:center}.displayFlex{display:flex}form{width:100%}select,datalist{width:100%}.nameTxt{width:88%}.nameTxt,.platformsSelectBx,.categorySelectBx{max-width:90%;align-self:center}.logoDiv{margin:10px 0}.pathDiv{display:flex;align-items:center;margin:0 auto}.filePathLbl{margin:15px 0 0}.filePathTxt{background-color:#cdd2d7;border:none;padding:8px 20px}.clearPathBtn{border-radius:5px;padding:8px}h3{color:var(--font-color)}button{width:60%}.coverDiv{display:flex;justify-content:center;align-items:center}.coverTxt{color:#fff;text-transform:uppercase;width:90%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.logoSearchImages{justify-content:center;align-items:center}.logoSearchImgs{width:95%;border-radius:20px}.rightArrowBtn,.leftArrowBtn{display:flex;justify-content:center;align-content:center;border-radius:35px;width:35px;height:35px;background-color:var(--closeBtn-bg);cursor:pointer;box-shadow:5px 5px 5px #000;border:none;position:relative;top:-5px}.leftArrowBtn{left:15px}.rightArrowBtn{left:-15px}.rightArrowBtnImg,.leftArrowBtnImg{height:100%}.leftArrowBtnImg{transform:rotate(-180deg)}.clackers{width:100%;margin:0 0 25px}circle:nth-of-type(1){fill:#fff}circle:nth-of-type(2){fill:#fcd837}circle:nth-of-type(3){fill:#f9a11f}circle:nth-of-type(4){fill:#f27c21}
`;var Z,Wt,tt,Yt,et,Qt,m,p,st,Xt,at,Zt,it,te,ot,ee,nt,se,rt,ae,lt,ie;class Ie extends u{constructor(){super();i(this,Z);i(this,tt);i(this,et);i(this,m);i(this,st);i(this,at);i(this,it);i(this,ot);i(this,nt);i(this,rt);i(this,lt);r(this,"searchLogoArr",[]);r(this,"searchLogoCounter",0);r(this,"loadingSVG",`<svg width="300" height="120" id="clackers" class="clackers hide">
    <!-- Left arc path -->
    <svg>
      <path id="arc-left-up" fill="none" d="M 90 90 A 90 90 0 0 1 0 0"/>
    </svg>
    <!-- Right arc path -->
    <svg>
      <path id="arc-right-up" fill="none" d="M 100 90 A 90 90 0 0 0 190 0"/>
    </svg>
    
    <text x="150" y="50" fill="#ffffff" font-family="Helvetica Neue,Helvetica,Arial" font-size="18"
          text-anchor="middle">
      L O A D I N G
    </text>
    <circle cx="15" cy="15" r="15">
      <animateMotion dur="1.5s" repeatCount="indefinite"
        calcMode="linear"
        keyPoints="0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0"
        keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
        <mpath xlink:href="#arc-left-up"/>
      </animateMotion>
    </circle>
    <circle cx="135" cy="105" r="15" />
    <circle cx="165" cy="105" r="15" />
    <circle cx="95" cy="15" r="15">
      <animateMotion dur="1.5s" repeatCount="indefinite"
        calcMode="linear"
        keyPoints="0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0"
        keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
        <mpath xlink:href="#arc-right-up"/>
      </animateMotion>
    </circle>
    </svg>
    `)}connectedCallback(){s(this,lt,ie).call(this)}attributeChangedCallback(t,e,a){e!==a&&t==="open"&&(s(this,m,p).call(this),this.noLogoResults.classList.remove("hide"),this.noLogoResults.innerHTML="OR",this.nameTxt.classList.remove("error"),this.nameTxt.value="",this.nameTxt.focus(),this.logoDiv.classList.remove("error"),this.searchLogoArr=[],this.searchLogoCounter=0)}static get observedAttributes(){return["open"]}}Z=new WeakSet,Wt=function(t){t.preventDefault(),this.filePathTxt.value=""},tt=new WeakSet,Yt=function(t){t.preventDefault(),this.hiddenFileInput.click()},et=new WeakSet,Qt=function(t){t.target.files.length>0&&(this.filePathTxt.value=`${t.target.files[0].path}`)},m=new WeakSet,p=function(){this.coverTxt.classList.add("hide"),this.noLogoResults.classList.add("hide"),this.logoSearchImgSolo.classList.add("hide"),this.coverArtImagesDiv.classList.add("hide"),this.loadingSVG.classList.add("hide"),this.coverArtImagesDiv.classList.remove("displayFlex")},st=new WeakSet,Xt=async function(t){t.preventDefault(),this.logoDiv.classList.remove("error"),this.searchLogoCounter=0,this.searchLogoArr=[];let e=this.nameTxt.value;e.length>0?(s(this,m,p).call(this),this.loadingSVG.classList.remove("hide"),await fetch(`/getLogos/${e}`).then(a=>a.json()).then(a=>{a.length!==0?(this.searchLogoArr=a,s(this,at,Zt).call(this)):(s(this,m,p).call(this),this.noLogoResults.classList.remove("hide"),this.noLogoResults.innerHTML="No Results",this.searchLogoArr=[]),this.loadingSVG.classList.add("hide")})):(this.loadingSVG.classList.add("hide"),this.nameTxt.classList.add("error"),this.nameTxt.focus())},at=new WeakSet,Zt=function(){this.searchLogoArr.length===1?(this.logoSearchImgSolo.classList.remove("hide"),this.logoSearchImgSolo.attributes.src.value=this.searchLogoArr[0]):(this.coverArtImagesDiv.classList.remove("hide"),this.coverArtImagesDiv.classList.add("displayFlex"),this.logoSearchImgs.attributes.src.value=this.searchLogoArr[0])},it=new WeakSet,te=function(t){t.preventDefault(),this.logoDiv.classList.remove("error"),this.hiddenUploadCoverInput.click()},ot=new WeakSet,ee=function(t){s(this,m,p).call(this),this.searchLogoArr=[],t.target.files.length>0&&(this.coverTxt.classList.remove("hide"),this.coverTxt.innerHTML=`${t.target.files[0].path}`)},nt=new WeakSet,se=function(t){this.nameTxt.value.length>0?this.hiddenUploadCoverInput.value.length>0?this.form.submit():this.searchLogoArr.length>0?(t.preventDefault(),s(this,rt,ae).call(this)):(t.preventDefault(),this.logoDiv.classList.add("error"),this.nameTxt.focus()):(this.nameTxt.classList.add("error"),this.nameTxt.focus())},rt=new WeakSet,ae=async function(){let t=this.searchLogoArr.length>1?this.logoSearchImgs:this.logoSearchImgSolo;const e={name:this.nameTxt.value,platform:this.platformsSelectBx.value,category:this.categorySelectBx.value,url:t.attributes.src.value,path:this.filePathTxt.value};await fetch("/downloadLogo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(()=>{window.location.href="/"})},lt=new WeakSet,ie=function(){this._shadow.innerHTML=`
        <style>    
            ${this.commonStyles}
            ${Le}
        </style>

  
          <form method="POST" action="/uploadGame" enctype="multipart/form-data">
          <h2 class="header">Add New Game</h2>
          <label for="nameTxt"> Name </label>
          <input id="nameTxt" class="nameTxt" type="text" name="name" required/>
          <label for="platformsSelectBx"> Platform </label>
          <select id="platformsSelectBx" class="platformsSelectBx" name="platform" required></select>
          <label for="categorySelectBx"> Category </label>
          <select id="categorySelectBx" class="categorySelectBx" name="category" required></select>
          <div id="logoDiv" class="logoDiv">
              <button id="searchForCoverBtn" class="blueBtn">Search for Cover</button>
              <div id="coverDiv" class="coverDiv">
                ${this.loadingSVG}
                <h3 id="coverTxt" class="coverTxt hide"></h3>
                <h3 id="noLogoResults" class="noLogoResults">OR</h3>
                <img
                    id="logoSearchImgSolo"
                    class="logoSearchImgs hide" src="" alt=""
                />
                <div id="coverArtImagesDiv" class="logoSearchImages hide">
                  <button id="leftArrowBtn" class="leftArrowBtn">
                    <img
                      id="leftArrowBtnImg"
                      class="leftArrowBtnImg"
                      src="img/arrow.png"
                      alt="Go to Previous Cover Image"
                    />
                  </button>
                  <img id="logoSearchImgs" class="logoSearchImgs" src="" alt="" />
                  <button id="rightArrowBtn" class="rightArrowBtn">
                    <img
                      id="rightArrowBtnImg"
                      class="rightArrowBtnImg"
                      src="img/arrow.png"
                      alt="Go to Next Cover Image"
                    />
                  </button>   
                </div>
              </div>
              <button id="styledUploadCoverBtn" class="blueBtn">Upload Cover</button>
              <input 
                id="hiddenUploadCoverInput" 
                class="hide" 
                type="file" 
                name="newGameImage"
              />
          </div>        
          <label for="filePathTxt" class="filePathLbl"> App Location </label>
          <div id="pathDiv" class="pathDiv">
            <input
              id="filePathTxt"
              class="filePathTxt"
              type="text"
              name="path"
              readonly="readonly"
            />
            <button id="clearPathBtn" class="blueBtn clearPathBtn">Clear</button>
          </div>
          <button id="styledFileBtn" class="blueBtn">App Location</button>
          <input
            id="hiddenFileInput"
            class="hide"
            type="file"
          />
          <button id="saveBtn" class="greenBtn"> Save </button>
        </form>
      `,this.form=this.shadowRoot.querySelector("form"),this.nameTxt=this.shadowRoot.getElementById("nameTxt"),this.platformsSelectBx=this.shadowRoot.getElementById("platformsSelectBx"),this.categorySelectBx=this.shadowRoot.getElementById("categorySelectBx"),this.logoDiv=this.shadowRoot.getElementById("logoDiv"),this.searchForCoverBtn=this.shadowRoot.getElementById("searchForCoverBtn"),this.coverDiv=this.shadowRoot.getElementById("coverDiv"),this.styledUploadCoverBtn=this.shadowRoot.getElementById("styledUploadCoverBtn"),this.hiddenUploadCoverInput=this.shadowRoot.getElementById("hiddenUploadCoverInput"),this.filePathTxt=this.shadowRoot.getElementById("filePathTxt"),this.clearPathBtn=this.shadowRoot.getElementById("clearPathBtn"),this.styledFileBtn=this.shadowRoot.getElementById("styledFileBtn"),this.hiddenFileInput=this.shadowRoot.getElementById("hiddenFileInput"),this.saveBtn=this.shadowRoot.getElementById("saveBtn"),this.leftArrowBtn=this.shadowRoot.getElementById("leftArrowBtn"),this.rightArrowBtn=this.shadowRoot.getElementById("rightArrowBtn"),this.noLogoResults=this.shadowRoot.getElementById("noLogoResults"),this.logoSearchImgSolo=this.shadowRoot.getElementById("logoSearchImgSolo"),this.logoSearchImgs=this.shadowRoot.getElementById("logoSearchImgs"),this.coverArtImagesDiv=this.shadowRoot.getElementById("coverArtImagesDiv"),this.loadingSVG=this.shadowRoot.getElementById("clackers"),this.showCoverTxt=this.shadowRoot.getElementById("showCoverTxt"),this.coverTxt=this.shadowRoot.getElementById("coverTxt"),this.category.forEach(t=>{this.categorySelectBx.innerHTML+=`<option value="${t}"> ${t}</option>`}),this.platforms.forEach(t=>{this.platformsSelectBx.innerHTML+=`<option value="${t}"> ${t}</option>`}),this.nameTxt.onkeydown=()=>{this.nameTxt.classList.remove("error")},this.clearPathBtn.onclick=t=>s(this,Z,Wt).call(this,t),this.styledFileBtn.onclick=t=>s(this,tt,Yt).call(this,t),this.hiddenFileInput.onchange=t=>s(this,et,Qt).call(this,t),this.searchForCoverBtn.onclick=t=>s(this,st,Xt).call(this,t),this.styledUploadCoverBtn.onclick=t=>s(this,it,te).call(this,t),this.hiddenUploadCoverInput.onchange=t=>s(this,ot,ee).call(this,t),this.leftArrowBtn.addEventListener("click",t=>{t.preventDefault(),this.searchLogoCounter!==0?this.searchLogoCounter--:this.searchLogoCounter=this.searchLogoArr.length-1,this.logoSearchImgs.attributes.src.value=this.searchLogoArr[this.searchLogoCounter]}),this.rightArrowBtn.addEventListener("click",t=>{t.preventDefault(),this.searchLogoArr.length-1===this.searchLogoCounter?this.searchLogoCounter=0:this.searchLogoCounter++,this.logoSearchImgs.attributes.src.value=this.searchLogoArr[this.searchLogoCounter]}),this.saveBtn.onclick=t=>s(this,nt,se).call(this,t)};window.customElements.define("menu-btns",le);window.customElements.define("game-section",gt);window.customElements.define("game-card",ce);window.customElements.define("custom-modal",u);window.customElements.define("search-games",ge);window.customElements.define("filter-games",Be);window.customElements.define("save-data",be);window.customElements.define("edit-game",Rt);window.customElements.define("play-game",we);window.customElements.define("add-game",Ie);
//# sourceMappingURL=index.4d001648.js.map
