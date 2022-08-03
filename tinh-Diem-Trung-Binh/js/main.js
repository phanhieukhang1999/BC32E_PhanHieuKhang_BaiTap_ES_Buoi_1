const getElement = (id) => {
    return document.getElementById(id)
}
tinhDiemTB = ((...diem) => {

    let sum = 0
    return diem.map(diem => {
        sum += parseFloat(diem)
    }),
        (sum / diem.length).toFixed(2)



}
)


getElement('btnKhoi1').onclick = (() => {
    const toan = getElement('inpToan').value;
    const ly = getElement('inpLy').value;
    const hoa = getElement('inpHoa').value;

    getElement('tbKhoi1').innerHTML = tinhDiemTB(toan, ly, hoa)
});

getElement('btnKhoi2').onclick = (() => {
    const van = getElement('inpVan').value;
    const su = getElement('inpSu').value;
    const dia = getElement('inpDia').value;
    const anh = getElement('inpEnglish').value;

    getElement('tbKhoi2').innerHTML = tinhDiemTB(van, su, dia, anh)
});


