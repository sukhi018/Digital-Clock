function time() {

    var a = new Date()
    currTime = String(a).split(' ')[4].split(':')

    currTime.forEach(function(element, index) {
        currTime[index] = parseInt(currTime[index])
    });

    if (currTime[0] >= 12) {
        currTime.push('PM')

        if (currTime[0] != 12) {
            currTime[0] -= 12
        }

    } else {
        currTime.push('AM')
    }
    return currTime
}

function changeTime() {

    let hr = document.getElementById('id2')
    let min = document.getElementById('id3')
    let sec = document.getElementById('id4')
    let fm = document.getElementById('id5')
    let dq = time()
        // console.log(dq)
        // console.log(hr)
    hr.innerHTML = `${dq[0]} <br>hours`
    min.innerHTML = `${dq[1]} <br>mins`
    sec.innerHTML = `${dq[2]} <br>secs`
    fm.innerHTML = `${dq[3]}`

}


function change() {
    var drop1 = document.getElementById('alarm1').value
    var drop2 = document.getElementById('alarm2').value
    var drop3 = document.getElementById('alarm3').value
    var drop4 = document.getElementById('alarm4').value
        // console.log(drop1)

    let t1 = []

    let obj = [drop1, drop2, drop3, drop4]


    obj.forEach(function(el, index) {
        let a1 = el.slice(0, 3)
        let a2 = el.slice(3)

        let test = [
            a1.slice(0, 2) +
            (a1[2] + 'm').toUpperCase(), '-',
            a2.slice(0, 2) +
            (a2[2] + 'm').toUpperCase()
        ]
        t1.push(test.join(' '))
        let arr = [parseInt(a1.slice(0, 2)), a1[2], parseInt(a2.slice(0, 2)), a2[2]]
        obj[index] = arr

        if (arr[2] == 12 && arr[3] == 'a') {
            arr[2] = 0

        }



    });
    // console.log(obj)
        // console.log(t1)

    // here need to change the div below
    let i1 = document.getElementById('info1')
    let i2 = document.getElementById('info2')
    let i3 = document.getElementById('info3')
    let i4 = document.getElementById('info4')

    console.log(i1)


    i1.innerHTML = `Wake Up Time : ${t1[0]}`
    i2.innerHTML = `Lunch Time : ${t1[1]}`
    i3.innerHTML = `Nap Time : ${t1[2]}`
    i4.innerHTML = `Night Time : ${t1[3]}`

    setAlarm(obj)

}


function setAlarm(obj) {

    alarm1 = obj[0]
    alarm2 = obj[1]
    alarm3 = obj[2]
    alarm4 = obj[3]
        // console.log(alarm1)

}

function check(alarm) {

    let curr = time()
        // console.log(alarm,curr)

    if ((alarm[0] == curr[0]) && (alarm[1] == curr[3][0].toLowerCase())) {
        // console.log('Y')
        return 1
    } else if ((alarm[2] == curr[0]) && (curr[1] == 0) && (alarm[3] == curr[3][0].toLowerCase())) {
        // console.log('Y')

        return 1

    } else {
        return 0

    }



}

function changeBody(obj) {
    let lm = document.getElementById('changeMess')
    let rm = document.getElementById('textRight')
    let img = document.getElementById('image')
    lm.innerHTML = `${obj[0]}`
    rm.innerHTML = `${obj[1]}`
    // console.log(obj[2])
    img.style.backgroundImage = `url(${obj[2]})`
    // console.log(lm, rm, img)



}

function timer() {
    var obj = [
        ['Good Morning!! Wake Up!!', 'Grab Some Healthy Breakfast', './1.svg'],
        ['Good Afternoon!! Take Some Sleep', 'Lets Have Some Lunch', './2.svg'],
        ['Good Evening', 'Stop Yawning Get Some Tea <br>Its just Evening', './3.png'],
        ['Good Night', 'Close your eyes and got to sleep', './4.svg']
    ]
    // console.log(alarm1)
    let c1 = check(alarm1)
    let c2 = check(alarm2)
    let c3 = check(alarm3)
    let c4 = check(alarm4)
    console.log(c1, c2, c3, c4)
    if (c1 ) {
        changeBody(obj[0])

    } else if (c2) {
        changeBody(obj[1])

    } else if (c3) {
        changeBody(obj[2])


    } else if (c4 ) {
        changeBody(obj[3])


    }else {
    	return 0

    }


}


var alarm1 = [12, 'a', 1, 'a'],
    alarm2 = [12, 'a', 1, 'a'],
    alarm3 = [12, 'a', 1, 'a'],
    alarm4 = [12, 'a', 1, 'a']


var but = document.getElementById('submit')
but.addEventListener('click', change)

but.addEventListener("mouseover", () => {
    but.innerHTML = `Submit`
})
but.addEventListener("mouseout", () => {
    but.innerHTML = `Party Time!`
});


setInterval(changeTime, 1)

setInterval(timer, 10)