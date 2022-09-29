const addToLs = event => {
    const time = event.target.innerText;
    const storedTime = localStorage.getItem('break')
    if (storedTime) {
        localStorage.setItem('break', JSON.stringify(time))
    }
    else {
        localStorage.setItem('break', JSON.stringify(time))
    }
}

const getStoredTime = () => {
    let addTime = [];
    const storedTime = localStorage.getItem('break')
    if (storedTime) {
        addTime = JSON.parse(storedTime)
    }
    return addTime;
}
export { addToLs, getStoredTime }