import{B as r,a as l}from"./axios-BbahhZf4.js";function c(t){s(".pros").innerHTML=t.map((e,i)=>`
            <div class="pro" data_index = ${i}>
                <div class="img">
                    <img src=${e.img} alt="">
                </div>
                <div class="text">
                    <h4>${e.title}</h4>
                    <div class="sales">月销${e.sold}箱</div>
                    <div>￥${e.price}</div>
                </div>
            </div>
        `).join("")}async function m(){const t=await l.get("https://zyxcl.xyz/exam_api/zh");localStorage.setItem("itemList","https://zyxcl.xyz/exam_api/zh"),console.log(t.data),c(t.data.items),new r("main",{scrollY:!0,scrollbar:!0,click:!0,probeType:2})}async function L(){const t=await l.get("https://zyxcl.xyz/exam_api/xl");localStorage.setItem("itemList","https://zyxcl.xyz/exam_api/xl"),console.log(t.data),c(t.data.items),new r("main",{scrollY:!0,scrollbar:!0,click:!0,probeType:2})}async function g(){const t=await l.get("https://zyxcl.xyz/exam_api/sx");localStorage.setItem("itemList","https://zyxcl.xyz/exam_api/sx"),console.log(t.data),c(t.data.items),new r("main",{scrollY:!0,scrollbar:!0,click:!0,probeType:2})}m();s(".zh").classList.add("active");new r("main",{scrollY:!0,scrollbar:!0,click:!0,probeType:2});s("nav").addEventListener("click",t=>{t.target.classList.contains("zh")&&(s(".active").classList.remove("active"),t.target.classList.add("active"),m()),t.target.classList.contains("xl")&&(s(".active").classList.remove("active"),t.target.classList.add("active"),L()),t.target.classList.contains("sx")&&(s(".active").classList.remove("active"),t.target.classList.add("active"),g())});s(".pros").addEventListener("click",t=>{t.target.classList.contains("pro")&&(localStorage.setItem("id",JSON.stringify(t.target.getAttribute("data_index"))),location.assign("./detail.html"))});s(".search div").addEventListener("click",t=>{location.assign("./search.html")});async function d(t,e){return(await l.get(t)).data.items.sort(function(o,n){return e?o.price-n.price:n.price-o.price})}let a=0;s(".sort").addEventListener("click",()=>{if(console.log(a),a===0){s(".up").classList.add("sortActive");let t=localStorage.getItem("itemList");d(t,!0).then(e=>{c(e)}),a=1}else if(a===1){s(".sortActive").classList.remove("sortActive"),s(".down").classList.add("sortActive");let t=localStorage.getItem("itemList");d(t,!1).then(e=>{c(e)}),a=2}else if(a===2){s(".sortActive").classList.remove("sortActive");let t=localStorage.getItem("itemList");async function e(i){return(await l.get(i)).data.items}e(t).then(i=>{c(i)}),a=0}});s(".layout").addEventListener("click",t=>{t.target.classList.contains("net")?(t.target.classList.remove("show"),s(".Column").classList.add("show"),s(".pros").classList.remove("layout_net"),s(".pros").classList.add("layout_Column")):t.target.classList.contains("Column")&&(t.target.classList.remove("show"),s(".net").classList.add("show"),s(".pros").classList.remove("layout_Column"),s(".pros").classList.add("layout_net"))});function s(t,e){return e=e||document,e.querySelector(t)}
//# sourceMappingURL=index-DwTRsOoh.js.map
