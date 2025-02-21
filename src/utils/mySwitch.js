import icon1 from '@/assets/icon/icon1.png'
import icon2 from '@/assets/icon/icon2.png'

const mySwitch = (flag) => {
    const pre_box = document.querySelector('.pre-box')
    const img = document.querySelector("#avatar")
    // console.log('flag = ' + flag)
    if (flag) {
        pre_box.style.transform = "translateX(100%)"
        pre_box.style.backgroundColor = "#9ee6aa"
        img.src = icon1
    }
    else {
        pre_box.style.transform = "translateX(0%)"
        pre_box.style.backgroundColor = "#19b96e"
        img.src = icon2
    }
}
export default mySwitch