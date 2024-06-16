import"./detail.scss";
import BScroll from '@better-scroll/core'
import axios from 'axios'


let dataList =localStorage.getItem("itemList");
let index = JSON.parse(localStorage.getItem("id"));

// console.log(data.list)

async function render(){

    const res = await axios.get(dataList)

    const detailData =res.data.items[index*1]

    $(".detail").innerHTML = `
        <div class="img">
            <img src=${detailData.img} alt="">
        </div>
        <span class="price">￥${detailData.price}</span>
        <h4>${detailData.title}</h4>
    `
}


render()


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

