import{a as l,B as d}from"./axios-BbahhZf4.js";async function u(t){let a=(await l.get("https://zyxcl.xyz/exam_api/zh")).data.items.filter(e=>e.title.includes(t));console.log(a);const r=await l.get("https://zyxcl.xyz/exam_api/xl");console.log(r.data.items);let c=r.data.items.filter(e=>e.title.includes(t));a.push(...c);let n=(await l.get("https://zyxcl.xyz/exam_api/sx")).data.items.filter(e=>e.title.includes(t));a.push(...n),a=Array.from(new Set(a)),console.log(a),i(".pros").innerHTML=a.map((e,o)=>`
            <div class="pro" data_index = ${o}>
                <div class="img">
                    <img src=${e.img} alt="">
                </div>
                <div class="text">
                    <h4>${e.title}</h4>
                    <div class="sales">月销${e.sold}箱</div>
                    <div>￥${e.price}</div>
                </div>
            </div>
        `).join(""),new d("main",{scrollY:!0,scrollbar:!0,click:!0,probeType:2})}i(".search").addEventListener("change",()=>{let t=i(".search").value;u(t)});i(".back").addEventListener("click",t=>{location.assign("./")});function i(t,s){return s=s||document,s.querySelector(t)}
//# sourceMappingURL=search-DQ5jMHR8.js.map
