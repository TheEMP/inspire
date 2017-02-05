function NameTimeService() {
    this.setName = name => {
        localStorage.setItem('name', name);
		console.log('Name Data Saved:', name);
    }

    this.getName = () => {
        var name = localStorage.getItem('name')
        return name || "Hover to Change NickS!"
    }
}