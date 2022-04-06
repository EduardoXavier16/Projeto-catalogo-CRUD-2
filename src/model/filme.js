import sequelize from 'sequelize';
import { connection } from '../database/connection.js';

export const variados = connection.define(
  "variados",
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKry: true,
      autoIncrement: true,
    },
    nome: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    img: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    ano: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    diretores: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    descricao: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    iframe: {
      type: sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);
