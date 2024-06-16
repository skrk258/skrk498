import{a as i}from"./axios-BbahhZf4.js";let s=localStorage.getItem("itemList"),c=JSON.parse(localStorage.getItem("id"));async function n(){const t=(await i.get(s)).data.items[c*1];a(".detail").innerHTML=`
        <div class="img">
            <img src=${t.img} alt="">
        </div>
        <span class="price">￥${t.price}</span>
        <h4>${t.title}</h4>
    `}n();a(".back").addEventListener("click",e=>{location.assign("./")});function a(e,t){return t=t||document,t.querySelector(e)}
//# sourceMappingURL=detail-NSsdRktb.js.map
