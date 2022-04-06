import { variados } from '../model/filme.js';

export const getIndex = async (req, res) => {
  try {
    const filmes = await variados.findAll();
    res.render("index.ejs", {
      filmes
    });
  } catch (err) {
    console.log(err);
  }
};
