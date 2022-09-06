 let $buttons = $('#buttonswrapper >button')
let $imges = $('#imges')
let $imgess = $imges.children('img')
$imges.css({transform:'translateX(-400PX'})
let current = 0 
makefakeimges()
bindevents()

$(next).on('click',function(){
    gotoimges(current+1)
})
$(previours).on('click',function(){
    gotoimges(current-1)
})
let timer = setInterval(function(){
    gotoimges(current+1)
},2000)
$('.all').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer = setInterval(function(){
        gotoimges(current+1)
    },2000)
})

function bindevents(){
    $('#buttonswrapper').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let index = $button.index()
        gotoimges(index)
})
}

function gotoimges(index){
    if(index > $buttons.length-1){
        index = 0
    }else if (index < 0){
        index = $buttons.length-1
    }
    if(current === $buttons.length -1 && index === 0){
        $imges.css({transform:`translateX(${-($buttons.length+1)*400}px)`})
        .one('transitinoed',function(){
            $imges.hide().offset()
            $imges.css({transform:`translateX(${-(index+1)*400}px)`})
            .show()
        })
    }else if(current ===0 && index ===$buttons.length - 1){
        $imges.css({transform:`translateX(0px)`})
        .one('transitinoed',function(){
           $imges.hide().offset()
           $imges.css({transform:`translateX(${-(index+1)*400}px)`})
        .show()
    })
}else{
    $imges.css({transform:`translateX(${-(index+1)*400}px)`})
}
current = index

}

function makefakeimges(){
    let $firstcopy = $imgess.eq(0).clone(true)
    let $lastcopy = $imgess.eq($imgess.length-1).clone(true)
    $imges.append($firstcopy)
    $imges.prepend($lastcopy)
}
