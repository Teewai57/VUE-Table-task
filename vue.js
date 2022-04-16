const app = Vue.createApp({
    data() {
        return {
            name: "Name",
            age:60,
            booksCompleted: null,
            books: [
                { author:"Holy spirit", name: "The holy Bible", price:0, completed:true},
                { author:"Chinua Achebe", name: "Things Fall Apart", price:5, completed:false},
                { author:"Casandra Claire", name: "The Mortal Instrument", price:100, completed:true},
                { author:"Ugo C. Ugo", name: "Past Questions", price:1, completed:false},
                { author:"Bright", name: "Brighter Grammar", price:160, completed:true},
                { author:"Lucifer", name: "The devil's handbook", price:0, completed:false}
            ],
            allBooks: null,
            priceFilter: null
        }
    },
    computed:{
        classBasedAge() {
            return this.age > 18 ? "pink" : "blue";
        }
    },
    methods: {
        getAllBooks() {
            this.allBooks = this.books;
        },
        completedBooks() {
            this.allBooks = this.books.filter((book) => book.completed);
        },
        unCompletedBooks(){
            this.allBooks = this.books.filter((book) => !book.completed);
        },
        filterByPrice(e) {
            let currentValue = e.target.value;
            if (currentValue !== "") {
                let foundPrice = this.allBooks.filter(
                    (book) => book.price == currentValue
                )
                this.allBooks = foundPrice;
            } else {
                this.allBooks = this.books;
            }
        }
    },
    created() {
        this.getAllBooks();
        // this.completedBooks();
        // this.unCompletedBooks();
    }
})
app.mount("#app");