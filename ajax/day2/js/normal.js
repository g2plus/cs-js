let data = {
    title: '<h3>用户信息</h3>',
    name: 'zs',
    age: 20,
    isVIP: true,
    regTime: new Date(),
    hobby: ['吃饭', '睡觉', '打豆豆']
}

$(function () {
    $('#name').html(data.name)
    $('#title').html(data.title)
    $('#age').html(data.age)
    $('#isVIP').html(data.isVIP)
    $('#regTime').html(data.regTime)

    var rows = []
    $.each(data.hobby, function (i, item) {
        rows.push('<li>' + item + '</li>')
    })
    $('#hobby').html(rows.join(''))
})