export default {
    computed: {
        navs() {
            return this.$store.state.page.allList;
        },
        currentMain() {
            return this.$store.state.page.mainCurrent;
        }
    },
}