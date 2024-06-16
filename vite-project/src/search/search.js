import"./search.scss";
import BScroll from '@better-scroll/core'
import axios from 'axios'


async function searchRender(search){
    const res1 = await axios.get('https://zyxcl.xyz/exam_api/zh')
    let searchData = res1.data.items.filter( (pro) => {
        return pro.title.includes(search)
    })
    console.log(searchData)
    
    const res2 = await axios.get('https://zyxcl.xyz/exam_api/xl')
    console.log(res2.data.items)
    let searchData2 = res2.data.items.filter( (pro) => {
        return pro.title.includes(search)
    })
    searchData.push(...searchData2)
    const res3 = await axios.get('https://zyxcl.xyz/exam_api/sx')
    let searchData3 = res3.data.items.filter( (pro) => {
        return pro.title.includes(search)
    })
    searchData.push(...searchData3)
    
    searchData = Array.from(new Set(searchData))
    console.log(searchData)
    $(".pros").innerHTML = searchData.map( (pro,index) => {
        return`
            <div class="pro" data_index = ${index}>
                <div class="img">
                    <img src=${pro.img} alt="">
                </div>
                <div class="text">
                    <h4>${pro.title}</h4>
                    <div class="sales">月销${pro.sold}箱</div>
                    <div>￥${pro.price}</div>
                </div>
            </div>
        `
    }).join("")
    const proScroll = new BScroll("main" , {
        scrollY : true ,
        scrollbar : true ,
        click : true ,
        probeType : 2 ,
    })
}


$(".search").addEventListener("change", () => {
    let search =  $(".search").value
    searchRender(search)
})


$(".back").addEventListener( "click", (e) => {
    location.assign("./")

} )


function $(el, parent) {
    parent = parent || document;
    return parent.querySelector(el)
}

function gets(el, parent) {
    parent = parent || document;
    return [...parent.querySelectorAll(el)]
}

