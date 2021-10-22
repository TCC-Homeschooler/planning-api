const axios = require('axios')

test('Should get users', async function(){
    const response = await axios({
        url: 'http://localhost:3000/usuarios',
        method: 'get',
    });
    const usuarios = response.data;
    expect(usuarios).toHaveLength(1);

});