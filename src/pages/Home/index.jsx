import './style.css';
import Trash from '../../assets/icons/trash.svg';

function Home() {
  const users = [
    {
      id: '76788',
      name: 'Rodolfo',
      age: 33,
      email: 'rod@email.com',
    },
    {
      id: '76736',
      name: 'Ricardo',
      age: 38,
      email: 'ric@email.com',
    },
  ];

  return (
    <div className="container">
      <h1>Cadastro de Usuários</h1>
      <form action="">
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name} </span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              E-mail: <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
