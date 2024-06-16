import"./main.scss";
import BScroll from '@better-scroll/core'
import axios from 'axios'




function renderList(list){
    $(".pros").innerHTML = list.map( (pro,index) => {
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
    } ).join("")
}

async function zh(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/zh')
    localStorage.setItem('itemList' , 'https://zyxcl.xyz/exam_api/zh')
    console.log(res.data)
    renderList(res.data.items)
    const proScroll = new BScroll("main" , {
        scrollY : true ,
        scrollbar : true ,
        click : true ,
        probeType : 2 ,
    })
}
async function xl(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/xl')
    localStorage.setItem('itemList' , 'https://zyxcl.xyz/exam_api/xl')
    console.log(res.data)
    renderList(res.data.items)
    const proScroll = new BScroll("main" , {
        scrollY : true ,
        scrollbar : true ,
        click : true ,
        probeType : 2 ,
    })
}
async function sx(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/sx')
    localStorage.setItem('itemList' , 'https://zyxcl.xyz/exam_api/sx')
    console.log(res.data)
    renderList(res.data.items)
    const proScroll = new BScroll("main" , {
        scrollY : true ,
        scrollbar : true ,
        click : true ,
        probeType : 2 ,
    })
}

// 初始
zh()
$(".zh").classList.add("active")

// 主页滚动
const proScroll = new BScroll("main" , {
    scrollY : true ,
    scrollbar : true ,
    click : true ,
    probeType : 2 ,
})


// 点击事件

$("nav").addEventListener( "click",(e)=> {
    if(e.target.classList.contains('zh')){
        $(".active").classList.remove("active")
        e.target.classList.add("active")
        zh()
    }
    if(e.target.classList.contains('xl')){
        $(".active").classList.remove("active")
        e.target.classList.add("active")
        xl()
    }
    if(e.target.classList.contains('sx')){
        $(".active").classList.remove("active")
        e.target.classList.add("active")
        sx()
    }
} )
// 跳转详情
$(".pros").addEventListener( "click", (e) => {
    if(e.target.classList.contains("pro")){
        localStorage.setItem('id' , JSON.stringify(e.target.getAttribute("data_index")))
        location.assign("./detail.html")
    }
} )

// 跳转搜索

$(".search div").addEventListener( "click", (e) => {
    location.assign("./search.html")

} )

// $(".pro").addEventListener( "click", (e)=> {
//     const data = {
//         id :  e.target.getAttribute("data_index"),
//         list : $(".active").innerHTML
//     }
//     localStorage.setItem('id' , JSON.stringify(data))
//     location.assign("./detail.html")
// })

// 排序

async function renderSort(dataList,sort){
    const res = await axios.get(dataList)
    let sortData = res.data.items.sort(function(a,b){
        return sort? a.price - b.price : b.price - a.price
    })
    return sortData
}

let flag = 0
$(".sort").addEventListener( "click" , ()=> {
    console.log(flag)
    if(flag === 0){
        $(".up").classList.add("sortActive")
        let dataList =localStorage.getItem("itemList");
        renderSort(dataList,true).then(res => {
            renderList(res)
        })
        // renderList( renderSort(dataList,true) )
        flag = 1
    }
    else if(flag === 1){
        $(".sortActive").classList.remove("sortActive");
        $(".down").classList.add("sortActive")
        let dataList =localStorage.getItem("itemList");
        renderSort(dataList,false).then(res => {
            renderList(res)
        })
        // renderList( renderSort(dataList,false) )
        flag = 2
    }
    else if(flag ===2){
        $(".sortActive").classList.remove("sortActive");
        let dataList =localStorage.getItem("itemList");
        async function re(dataList){
            const res = await axios.get(dataList)
            return res.data.items
        }
        re(dataList).then(res => {
            renderList(res)
        })
        flag = 0

    }
})

// 页面布局切换
$(".layout").addEventListener("click",(e)=> {
    if(e.target.classList.contains("net")){
        e.target.classList.remove("show")
        $(".Column").classList.add("show")
        $(".pros").classList.remove("layout_net");
        $(".pros").classList.add("layout_Column");
    }
    else if(e.target.classList.contains("Column")){
        e.target.classList.remove("show")
        $(".net").classList.add("show")
        $(".pros").classList.remove("layout_Column");
        $(".pros").classList.add("layout_net");
    }
})


function $(el, parent) {
    parent = parent || document;
    return parent.querySelector(el)
}

function gets(el, parent) {
    parent = parent || document;
    return [...parent.querySelectorAll(el)]
}


