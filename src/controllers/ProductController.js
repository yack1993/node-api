const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    //vai listar todos os produtos
    async index(req, res) {
        const { page = 1 } = req.query;
        const produts = await Product.paginate({}, { page, limit:5 });

        return res.json(produts);
    },

    //detalhes Produto
    async show(req, res) {
        const product = await Product.findById(req.params.id)

        return res.json(product);
    },

    //Criar Produto
    async store(req, res) {
        //Criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        //new:true - retorna o valor atualizado
        //sem o new volta o produto antigo
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send()
    }
};