import { variados } from "../model/filme.js";

export const getIndex = async (req, res) => {
  try {
    const filmes = await variados.findAll({
      order: [["nome", "ASC"]],
    });
    res.render("index.ejs", {
      filmes,
    });
  } catch (err) {
    res.send(err.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const filme = await variados.findByPK(req.params.id);
    res.render("detalhes.ejs", {
      filme,
    });
  } catch (err) {
    res.send(err.mensage);
  }
};