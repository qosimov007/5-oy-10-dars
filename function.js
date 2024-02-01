function creatRow(phone, index){
    return`
    <tr>
            <th scope="row">${index}</th>
            <td>${phone.name}</td>
            <td>${phone.price}</td>
            <td>${phone.description}</td>
            <td>
                <span class="text-danger" style="cursor: pointer;" >Delete</span>
                <span class="text-info"  style="cursor: pointer;">Update</span>
            </td>
     </tr>
    `
}

export{creatRow}