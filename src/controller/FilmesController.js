import { variados } from "../model/filme.js";

export const getIndex = async (req, res) => {
  try {
    const filmes = await variados.findAll();
    res.render("index.ejs", {
      filmes,
    });
  } catch (err) {
    res.send(err.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const filme = await variados.findByPK(res.params.id);
    res.render("detalhes.ejs", {
      filme
    });
  } catch (error) {
    res.send(err.mensage);
  }
};
