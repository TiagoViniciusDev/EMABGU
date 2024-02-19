import './Header.css'

function Header() {
  return (
    <div className='Header' id='home'>
        <div className='container'>
            <div className='logo'></div>
            <nav>
                <a href="#home">Home</a>
                <a href="#trabalho">Trabalho</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </nav>
        </div>
    </div>
  )
}

export default Header