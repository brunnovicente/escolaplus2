import Usuario from './Usuario.js';
import Funcionario from './Funcionario.js';
import Matriz from "./Matriz.js";
import Serie from "./Serie.js";

await Usuario.sync()
await Funcionario.sync()
await Matriz.sync()
await Serie.sync()

