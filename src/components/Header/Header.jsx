import './Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className='container'>
            <div className='logo'></div>
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Trabalho</a>
                <a href="">Contato</a>
            </nav>
        </div>
    </div>
  )
}

export default Header