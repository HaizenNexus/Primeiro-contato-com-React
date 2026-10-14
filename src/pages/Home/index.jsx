import './style.css'
import Trash from '../../assets/clear.svg'

function Home() {

  const users = [{
    id: '242545343524d',
    name: 'Pedro',
    age: 16,
    email: 'pedrinho@email.com'

  }, {
    id: 'gsdhgfjs',
    name: 'Henrique',
    age: 45,
    email: 'henri34@email.com'

  }
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro do Usúario</h1>
        <input placeholder='Digite seu nome...' name='nome' type='text' />
        <input placeholder='Digite sua Idade...' name='idade' type='number' />
        <input placeholder='Digite seu E-mail...' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome:<span>{user.name}</span> </p>
            <p>Idade:<span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>

      ))}


    </div>
  )
}

export default Home
