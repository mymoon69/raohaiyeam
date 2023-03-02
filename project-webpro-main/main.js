var app = new Vue({
    el: '#app',
    data: {
        shopName: 'เราให้ยืม',
        navbarfirst: 'เงื่อนไขการเช่า',
        navbarsecornd: 'ประวัติการจอง',
        status: 'Logout',
        phones: phones,
        conditions: [
            {
                icon: "img/list.png",
                content: "เลือกรายการและทำรายการจองผ่านหน้าเว็บ"
            },
            {
                icon: "img/customer-service-headset.png",
                content: "รอทางร้านติดต่อกลับเพื่อแจ้งยอดวางประกันและยืนยัน"
            },
            {
                icon: "img/dslr-camera.png",
                content: "รับของตามวันเวลาที่กำหนดพร้อมชำระค่าเช่า และ เงินวางประกัน"
            },
            {
                icon: "img/repeat.png",
                content: "คืนของตามวันเวลาที่กำหนด ร้านทำรายการคืนเงินประกันให้ในวันที่คืน"
            },
        ],
        model: [],
    },
    methods: {
        showdeteil(products) {
            // เก็บข้อมมูลตัวที่จะดู 
            this.model.push(products)
            console.log(this.model)
            // ไปอีกหน้าโดยlocalStorage
            let item = JSON.stringify(this.model)
            localStorage.setItem("deteil", item);
            window.location.replace("./model.html");
        },
        removedeteil() {
            localStorage.removeItem("deteil");
        }
    },
    created() {
        this.model = JSON.parse(localStorage.deteil);

    }
})