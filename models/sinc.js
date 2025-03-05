import Usuario from './Usuario.js';
import Funcionario from './Funcionario.js';
import Matriz from "./Matriz.js";
import Serie from "./Serie.js";
import Disciplina from "./Disciplina.js";
import Letivo from "./Letivo.js";
import Turma from "./Turma.js";


await Usuario.sync()
await Funcionario.sync()
await Matriz.sync()
await Serie.sync()
await Disciplina.sync()
await Letivo.sync()
await Turma.sync()