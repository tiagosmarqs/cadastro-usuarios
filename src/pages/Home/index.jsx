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
        <input name="nome" type="text" />
        <input name="idade" type="number" />
        <input name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>E-mail: {user.email}</p>
            <button>
              <img src={Trash} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
