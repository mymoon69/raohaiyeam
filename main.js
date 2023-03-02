var app = new Vue({
    el: '#app',
    data: {
        shopName: 'เราให้ยืม',
        navbarfirst: 'เงื่อนไขการเช่า',
        navbarsecornd: 'ติดต่อเรา',
        navbarthird: 'ประวัติการจอง',
        status: 'Logout',
        phones: phones,
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