var icecream = require('../models/icecream');
// List of all Costumes
exports.icecream_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.icecream_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await icecream.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume create on POST.
exports.icecream_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.icecream_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
// exports.icecream_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
// };

exports.icecream_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await icecream.findById(req.params.id)
        // Do updates of properties
        if (req.body.icecream_flavour)
            toUpdate.icecream_flavour = req.body.icecream_flavour;
        if (req.body.icecream_scoops) toUpdate.icecream_scoops = req.body.icecream_scoops;
        if (req.body.icecream_cost) toUpdate.icecream_cost = req.body.icecream_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
// List of all Costumes
exports.icecream_list = async function (req, res) {
    try {
        theicecream = await icecream.find();
        res.send(theicecream);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function (req, res) {
    try {
        theicecream = await icecream.find();
        res.render('icecream', { title: 'icecream Search Results', results: theicecream });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle Costume create on POST.
exports.icecream_create_post = async function (req, res) {
    console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.icecream_flavour = req.body.icecream_flavour;
    document.icecream_scoops = req.body.icecream_scoops;
    document.icecream_cost = req.body.icecream_cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};