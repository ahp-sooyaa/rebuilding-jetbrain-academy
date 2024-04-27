let app = () => {
    return {
        showDropdown: false,
        activeMenu: '',

        toggleDropdown() {
            this.showDropdown = ! this.showDropdown
        }
    }
}